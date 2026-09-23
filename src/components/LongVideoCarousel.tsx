"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight, Pause, Play, Volume2, VolumeX } from "lucide-react";
import { LONG_VIDEOS } from "@/lib/content";

export function LongVideoCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const activeVideo = LONG_VIDEOS[activeIndex];
  const isActiveMp4 = activeVideo.type === "mp4";

  // Whenever the active slide changes, pause every other self-hosted
  // video and autoplay only the one currently in view.
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return;
      if (index === activeIndex) {
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  }, [activeIndex]);

  const showPrev = () =>
    setActiveIndex((current) => (current - 1 + LONG_VIDEOS.length) % LONG_VIDEOS.length);
  const showNext = () => setActiveIndex((current) => (current + 1) % LONG_VIDEOS.length);

  const togglePlay = () => {
    const video = videoRefs.current[activeIndex];
    if (!video) return;
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  const toggleMute = () => {
    const video = videoRefs.current[activeIndex];
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  return (
    <div className="mt-12">
      <div className="relative overflow-hidden rounded-xl bg-cream">
        {LONG_VIDEOS.map((video, index) => (
          <motion.div
            key={video.title}
            initial={false}
            animate={{ opacity: index === activeIndex ? 1 : 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className={`aspect-video w-full ${index === activeIndex ? "relative" : "absolute inset-0 pointer-events-none"}`}
          >
            {video.type === "mp4" ? (
              <video
                ref={(el) => {
                  videoRefs.current[index] = el;
                }}
                src={video.src}
                muted={isMuted}
                playsInline
                preload="metadata"
                onPlay={() => index === activeIndex && setIsPlaying(true)}
                onPause={() => index === activeIndex && setIsPlaying(false)}
                className="h-full w-full object-cover object-top"
              />
            ) : (
              <iframe
                className="h-full w-full"
                src={`https://www.youtube.com/embed/${video.youtubeId}`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </motion.div>
        ))}

        {isActiveMp4 && (
          <div className="absolute bottom-6 left-6 flex gap-3">
            <button
              type="button"
              onClick={togglePlay}
              aria-label={isPlaying ? "Pause video" : "Play video"}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-cream/90 text-ink transition-transform hover:scale-110"
            >
              {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="ml-0.5 h-5 w-5" />}
            </button>
            <button
              type="button"
              onClick={toggleMute}
              aria-label={isMuted ? "Unmute video" : "Mute video"}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-cream/90 text-ink transition-transform hover:scale-110"
            >
              {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
            </button>
          </div>
        )}

        {LONG_VIDEOS.length > 1 && (
          <>
            <button
              type="button"
              onClick={showPrev}
              aria-label="Previous video"
              className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-cream/90 text-ink transition-transform hover:scale-110"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={showNext}
              aria-label="Next video"
              className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-cream/90 text-ink transition-transform hover:scale-110"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </>
        )}
      </div>

      <div className="mt-4 text-center">
        <span className="text-xs uppercase tracking-[0.2em] text-terracotta">
          {activeVideo.subtitle}
        </span>
        <h3 className="mt-1 font-heading text-2xl text-ink">{activeVideo.title}</h3>
      </div>

      {LONG_VIDEOS.length > 1 && (
        <div className="mt-4 flex justify-center gap-2">
          {LONG_VIDEOS.map((video, index) => (
            <button
              key={video.title}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Show video ${index + 1}`}
              className={`h-2 rounded-full transition-all ${
                index === activeIndex ? "w-6 bg-terracotta" : "w-2 bg-ink/20"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
