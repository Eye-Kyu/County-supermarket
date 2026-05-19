"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Button from "./Button";

const AboutMbisha = [
  { src: "/Images/Hero/Hero4.webp", alt: "County Supermarket Kenol Branch" },
  { src: "/Images/Hero/hero2.webp", alt: "About Mbisha" },
  { src: "/Images/Hero/hero.webp", alt: "About Mbisha" },
];

export default function About() {
  const [current, setCurrent] = useState(0);
  const INTERVAL = 4000;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % AboutMbisha.length);
    }, INTERVAL);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full flex flex-col md:flex-row">
      {/* IMAGE SLIDER */}
      <div className="relative w-full md:w-1/2 min-h-64 sm:min-h-80 md:min-h-130 overflow-hidden">
        {AboutMbisha.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === current
                ? "opacity-100 scale-100"
                : "opacity-0 scale-105"
            }`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover md:rounded-r-2xl"
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      {/* TEXT CONTENT */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-start p-6 md:p-12 animate-fadeIn">
        <h2 className="text-3xl md:text-5xl font-bold mb-8">County Ni Home</h2>

        <p className="text-sm md:text-base font-light max-w-xl mb-6">
          County Supermarket is a beloved local Kenyan chain with a presence in
          central Kenya. Operating for over 15 years, this homegrown gem has
          expanded to 6 branches, catering to multiple counties. The supermarket
          prides itself on exceptional customer service and affordability,
          offering a wide range of goods. Step into any branch to savor
          delightful pastries from the Bakery, indulge in gourmet meals at the
          Deli, or choose fresh cuts at the Butchery. With a team dedicated to
          providing a one-stop shopping experience, County Supermarket ensures
          customers find everything they need conveniently under one roof.
        </p>

        <Button variant="outline" href="/Story">
          Our Story
        </Button>
      </div>
    </div>
  );
}
