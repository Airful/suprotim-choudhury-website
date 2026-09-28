"use client";

import { useRef, useState } from "react";
import { Play } from "lucide-react";

// A self-hosted video, played with the browser's own native controls —
// no YouTube branding, no external embed. Loads only metadata until the
// visitor presses play, so it doesn't slow the page down up front.
export function VideoPlayer({
  src,
  title,
  poster,
  className = "",
}: {
  src: string;
  title: string;
  poster?: string;
  className?: string;
}) {
  // Tracks whether playback has ever started — not the live playing/paused
  // state. Browsers fire a `pause` event while the visitor is dragging the
  // native seek bar, and reacting to that by re-showing our overlay would
  // yank the native controls out from under them mid-scrub. Once started,
  // native controls own play/pause/seek entirely.
  const [hasStarted, setHasStarted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div className={`relative overflow-hidden bg-ink ${className}`}>
      <video
        ref={videoRef}
        src={src}
        title={title}
        poster={poster}
        playsInline
        preload="metadata"
        controls={hasStarted}
        onPlay={() => setHasStarted(true)}
        className="h-full w-full object-cover"
      />
      {!hasStarted && (
        <button
          type="button"
          onClick={() => videoRef.current?.play()}
          aria-label={`Play ${title}`}
          className="group absolute inset-0 flex items-center justify-center bg-ink/10 transition-colors duration-300 hover:bg-ink/20"
        >
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-cream/95 text-ink shadow-xl transition-transform duration-300 group-hover:scale-110 sm:h-20 sm:w-20">
            <Play className="ml-1 h-6 w-6 sm:h-7 sm:w-7" />
          </span>
        </button>
      )}
    </div>
  );
}
