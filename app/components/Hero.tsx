"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

// ─── Desktop slides (landscape) ───────────────────────────────────────────────
const desktopSlides = [
  "/Images/Hero/hero.webp",
  "/Images/Hero/hero2.webp",
  "/Images/Hero/Hero4.webp",
  "/Images/improved/Kukuriko-logo.webp",
];

const mobileSlides = [
  "/Images/Hero/County-mobile.png",
  "/Images/Hero/Kroad-mobile.png",
  "/Images/Hero/Kabati-mobile.png",
  "/Images/Hero/Kukuriko.png",
];

const INTERVAL = 5000;
const SLIDE_COUNT = desktopSlides.length;

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const sectionRef = useRef<HTMLElement | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Pause autoplay when hero scrolls out of view
  useEffect(() => {
    if (!sectionRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 },
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Autoplay
  useEffect(() => {
    if (!isVisible) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      return;
    }
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDE_COUNT);
    }, INTERVAL);
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isVisible]);

  // Touch swipe — shared by both carousels
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };
  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const dist = touchStartX.current - touchEndX.current;
    if (dist > 50) setCurrent((p) => (p + 1) % SLIDE_COUNT);
    if (dist < -50) setCurrent((p) => (p === 0 ? SLIDE_COUNT - 1 : p - 1));
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const dots = (
    <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
      {Array.from({ length: SLIDE_COUNT }).map((_, i) => (
        <button
          key={i}
          onClick={() => setCurrent(i)}
          aria-label={`Slide ${i + 1}`}
          className={`h-2.5 rounded-full transition-all duration-300 ${
            i === current
              ? "w-10 bg-orange-500"
              : "w-2.5 bg-white/50 hover:bg-white/80"
          }`}
        />
      ))}
    </div>
  );

  return (
    <>
      {/* ── MOBILE CAROUSEL (hidden at sm+) ─────────────────────────────────── */}
      <section
        className="sm:hidden relative h-dvh w-full overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {mobileSlides.map((src, i) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              i === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={src}
              alt="County Supermarket"
              fill
              priority={i === 0}
              // Crop from the top — subjects in landscape photos sit in the upper half;
              // swap to object-center once portrait images are in place
              className="object-cover object-top"
              // Narrow viewport only — Next.js serves a mobile-sized file
              sizes="(max-width: 639px) 100vw, 1px"
            />
            <div className="absolute inset-0 bg-black/55" />
          </div>
        ))}

        {/* Text — bottom-anchored for portrait readability */}
        <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-24">
          <p className="text-xs font-semibold uppercase tracking-widest text-orange-400 mb-3">
            County Supermarket
          </p>
          <h1 className="text-3xl font-bold text-white leading-tight mb-3">
            Your Local Shopping Destination
          </h1>
          <p className="text-sm text-white/85 leading-relaxed max-w-xs">
            Quality goods, great prices, and a warm welcome — across 6 branches
            in central Kenya.
          </p>
        </div>

        {dots}
      </section>

      {/* ── DESKTOP CAROUSEL (hidden below sm) ──────────────────────────────── */}
      <section
        ref={sectionRef}
        className="hidden sm:block relative h-dvh w-full overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {desktopSlides.map((src, i) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              i === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={src}
              alt="County Supermarket"
              fill
              priority={i === 0}
              className="object-cover"
              // Wide viewport only — Next.js skips serving this to mobile
              sizes="(min-width: 640px) 100vw, 1px"
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
        ))}

        {/* Text — centred for landscape */}
        <div className="relative z-10 flex h-full items-center justify-center px-4 text-center">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Your Local Shopping Destination
            </h1>
            <p className="text-lg md:text-xl opacity-90 leading-relaxed">
              Discover a wide range of goods and gourmet delights at County
              Supermarket — where exceptional service and affordability meet.
            </p>
          </div>
        </div>

        {dots}
      </section>
    </>
  );
}
