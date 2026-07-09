"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Gallery() {
  const images = [
    "/Images/improved/Bakery.jpg",
    "/Images/improved/Groceries2.jpg",
    "/Images/improved/Electronics.jpg",
    "/Images/improved/aisle.jpg",
    "/Images/improved/Kids.jpg",
    "/Images/improved/Groceries3.jpg",
    "/Images/improved/Dairy.jpg",
    "/Images/improved/Kukuriko.jpg",
    "/Images/improved/Kukuriko2.jpg",
    "/Images/Services/fashion.webp",
    "/Images/improved/kroadbranch.jpg",
    "/Images/clothing.webp",
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

  const next = () => setIndex((i) => (i >= maxIndex ? 0 : i + 1));
  const prev = () => setIndex((i) => (i <= 0 ? maxIndex : i - 1));

  return (
    <section className="py-16 sm:py-20 lg:py-24">
      {/* Heading */}
      <div className="text-center mb-12 space-y-6">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-blue-950">
          See Our Home
        </h2>

        <div className="flex items-center justify-center gap-4">
          <span className="w-6 h-px bg-orange-500" />
          <p className="uppercase tracking-widest text-sm italic text-gray-900">
            Cruise Through Our Gallery
          </p>
          <span className="w-6 h-px bg-orange-500" />
        </div>
      </div>

      {/* Slider */}
      <div className="relative px-4 md:px-10 lg:px-16">
        <div className="overflow-hidden rounded-2xl">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${index * (100 / visible)}%)`,
            }}
          >
            {images.map((src, i) => (
              <div
                key={i}
                className="relative shrink-0 px-2"
                style={{ width: `${100 / visible}%` }}
              >
                <div className="relative min-h-65 md:min-h-105 lg:min-h-120">
                  <Image
                    src={src}
                    alt={`Gallery image ${i + 1}`}
                    fill
                    className="object-cover rounded-xl"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination */}
        <div className="absolute bottom-4 left-6 flex gap-2 z-10">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2.5 rounded-full transition-all ${
                index === i
                  ? "w-8 bg-orange-500"
                  : "w-2.5 bg-black/40 hover:bg-black/60"
              }`}
            />
          ))}
        </div>

        {/* Arrows */}
        <div className="absolute bottom-4 right-6 flex gap-3 z-10">
          <button
            onClick={prev}
            className="p-3 bg-blue-950/90 text-white rounded-full hover:bg-blue-950"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            className="p-3 bg-blue-950/90 text-white rounded-full hover:bg-blue-950"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
