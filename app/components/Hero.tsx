"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const slides = [
  "/Images/Improved/kroadbranch.jpg",
  "/Images/Hero/hero2.jpg",
  "/Images/Hero/Groceries2.webp",
  "/Images/Improved/Kukuriko2.jpg",
];

const INTERVAL = 5000;

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const sectionRef = useRef<HTMLElement | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  /* -----------------------------
     Intersection Observer
  ----------------------------- */
  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.3, // 30% visible to activate
      },
    );

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  /* -----------------------------
     Auto-slide (only when visible)
  ----------------------------- */
  useEffect(() => {
    if (!isVisible) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      return;
    }

    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, INTERVAL);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isVisible]);

  /* -----------------------------
     Touch Swipe
  ----------------------------- */
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;

    const distance = touchStartX.current - touchEndX.current;

    if (distance > 50) {
      setCurrent((prev) => (prev + 1) % slides.length);
    } else if (distance < -50) {
      setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden "
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slides */}
      {slides.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={src}
            alt="Hero background"
            fill
            priority={index === 0}
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
      ))}

      {/* Static Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-4 text-center">
        <div className="max-w-3xl text-white">
          <h1 className="text-3xl sm:text-4xl md:text-6xl mb-4">
            Your Local Shopping Destination
          </h1>

          <h2 className="text-base sm:text-lg md:text-lg mb-8 opacity-90">
            Discover a wide range of goods and gourmet delights at County
            Supermarket — where exceptional service and affordability meet.
          </h2>

          {/*   <Link
            href="/contact"
            className="inline-block rounded-xl bg-blue-600 px-6 py-3 md:px-2 md:py-2 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold hover:bg-blue-700 transition"
          >
            Contact Us
          </Link>*/}
        </div>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 w-2 rounded-full ${
              index === current ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
