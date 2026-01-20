"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Gallery() {
  const images = [
    "/Images/Hero/Groceries.webp",
    "/Images/Hero/Groceries2.webp",
    "/Images/Hero/hero1.webp",
    "/Images/Hero/hero2.webp",
    "/Images/clothing.webp",
    "/Images/groceries.webp",
  ];

  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(3);

  // Responsive visible images
  useEffect(() => {
    const updateVisible = () => {
      if (window.innerWidth < 768) setVisible(1);
      else if (window.innerWidth < 1024) setVisible(2);
      else setVisible(3);
    };

    updateVisible();
    window.addEventListener("resize", updateVisible);
    return () => window.removeEventListener("resize", updateVisible);
  }, []);

  const maxIndex = images.length - visible;

  const next = () => {
    setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prev = () => {
    setIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <section className="h-screen pt-14 flex flex-col justify-center">
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-wide">
          WALK WITH US
        </h2>

        <div className="flex items-center justify-center gap-4 mb-4">
          <span className="w-6 h-[0.5] bg-orange-500" />
          <p className="uppercase tracking-widest text-sm font-semibold">
            Cruise Through Our Gallery
          </p>
          <span className="w-6 h-[0.5] bg-orange-500" />
        </div>
      </div>

      {/* Slideshow container */}
      <div className="relative px-4 md:px-10 lg:px-16">
        <div className="overflow-hidden rounded-2xl">
          <div
            className="flex gap-4 transition-transform duration-[900ms] ease-in-out"
            style={{
              transform: `translateX(-${(100 / visible) * index}%)`,
            }}
          >
            {images.map((src, i) => (
              <div
                key={i}
                className="relative h-[260px] md:h-[420px] lg:h-[480px] shrink-0"
                style={{ width: `${100 / visible}%` }}
              >
                <Image
                  src={src}
                  alt={`Gallery image ${i + 1}`}
                  fill
                  className="object-cover rounded-xs"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Pagination (bottom-left) */}
        <div className="absolute bottom-4 left-6 flex gap-2 z-10">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === i
                  ? "w-8 bg-black"
                  : "w-2.5 bg-black/40 hover:bg-black/60"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Navigation arrows (bottom-right) */}
        <div className="absolute bottom-4 right-6 flex gap-3 z-10">
          <button
            onClick={prev}
            className="p-3 bg-black/70 text-white rounded-full hover:bg-black transition"
            aria-label="Previous"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={next}
            className="p-3 bg-black/70 text-white rounded-full hover:bg-black transition"
            aria-label="Next"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
