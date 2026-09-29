"use client";

import { useEffect, useRef, useState } from "react";
import { Play, X } from "lucide-react";

// A self-hosted video, played with the browser's own native controls —
// no YouTube branding, no external embed. The poster image covers the
// thumbnail entirely and `duration` is a hardcoded prop, so the browser
// never needs to touch the video file until the visitor presses play.
// preload="metadata" looks harmless but isn't: for a large MP4 without
// a "faststart" moov atom (ours weren't re-encoded with it), the browser
// has to range-request deep into the file just to find the duration —
// on our 90MB+ videos that single request took 4-8 seconds in testing
// and hogged the connection, stalling the rest of the page's JS/images.
export function VideoPlayer({
  src,
  title,
  poster,
  duration,
  isActive,
  onStart,
  growDelay = 0,
  isExpanded = false,
  onClose,
  shrinkDelay = 0,
  className = "",
}: {
  src: string;
  title: string;
  poster?: string;
  duration?: string;
  // When part of a group where only one video should play at a time, the
  // parent passes this so we can pause when another item becomes active.
  isActive?: boolean;
  // Fired the instant play is requested — before playback actually starts
  // if `growDelay` is set, so a parent can grow this card into place first.
  onStart?: () => void;
  // Milliseconds to wait after onStart before actually calling play() —
  // gives a parent's grow/expand animation time to finish first.
  growDelay?: number;
  // True while a parent has grown this card larger to play it. Shows a
  // close button that cancels playback and hands control back to onClose
  // so the parent can shrink the card again.
  isExpanded?: boolean;
  onClose?: () => void;
  // Milliseconds to keep playing (still large, still native controls)
  // after close is clicked before swapping back to the poster — lets the
  // parent's shrink animation finish on the actual video instead of on a
  // poster image that's already popped back in, which is what made the
  // transition feel abrupt.
  shrinkDelay?: number;
  className?: string;
}) {
  // Tracks whether playback has ever started — not the live playing/paused
  // state. Browsers fire a `pause` event while the visitor is dragging the
  // native seek bar, and reacting to that by re-showing our overlay would
  // yank the native controls out from under them mid-scrub. Once started,
  // native controls own play/pause/seek entirely.
  const [hasStarted, setHasStarted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // In a group of videos, pause this one the moment it's no longer the
  // active selection (e.g. the visitor picked a different video).
  useEffect(() => {
    if (isActive === false) {
      videoRef.current?.pause();
    }
  }, [isActive]);

  const handlePlayClick = () => {
    setHasStarted(true);
    onStart?.();
    if (growDelay > 0) {
      setTimeout(() => videoRef.current?.play(), growDelay);
    } else {
      videoRef.current?.play();
    }
  };

  const handleClose = () => {
    onClose?.();
    const resetToPoster = () => {
      const video = videoRef.current;
      if (video) {
        video.pause();
        video.currentTime = 0;
      }
      setHasStarted(false);
    };
    if (shrinkDelay > 0) {
      setTimeout(resetToPoster, shrinkDelay);
    } else {
      resetToPoster();
    }
  };

  return (
    <div className={`relative overflow-hidden bg-ink ${className}`}>
      <video
        ref={videoRef}
        src={src}
        title={title}
        poster={poster}
        playsInline
        preload="none"
        controls={hasStarted}
        className="h-full w-full object-cover"
      />
      {hasStarted && isExpanded && onClose && (
        <button
          type="button"
          onClick={handleClose}
          aria-label={`Close ${title}`}
          className="absolute left-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-ink/70 text-cream transition-colors duration-200 hover:bg-ink"
        >
          <X className="h-4 w-4" />
        </button>
      )}
      {!hasStarted && (
        <button
          type="button"
          onClick={handlePlayClick}
          aria-label={`Play ${title}`}
          className="group absolute inset-0 flex items-center justify-center bg-ink/10 transition-colors duration-300 hover:bg-ink/20"
        >
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-cream/95 text-ink shadow-xl transition-transform duration-300 group-hover:scale-110 sm:h-20 sm:w-20">
            <Play className="ml-1 h-6 w-6 sm:h-7 sm:w-7" />
          </span>
          {duration && (
            <span className="absolute bottom-3 right-3 rounded bg-ink/80 px-1.5 py-0.5 text-xs font-medium tabular-nums text-cream">
              {duration}
            </span>
          )}
        </button>
      )}
    </div>
  );
}
