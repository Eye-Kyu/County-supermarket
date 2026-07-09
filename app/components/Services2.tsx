"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Croissant,
  Sandwich,
  ShoppingCart,
  Tv,
  Home,
  Sofa,
  Beef,
  Shirt,
  ShoppingBag,
  Wine,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

type Department = {
  title: string;
  description: string;
  image: string;
  icon: React.ElementType;
};

const departments: Department[] = [
  {
    title: "County Bakery",
    description:
      "Freshly baked bread, cakes, pastries, and other bakery treats prepared daily for our customers.",
    image: "/Images/improved/Bakery.jpg",
    icon: Croissant,
  },
  {
    title: "County Deli",
    description:
      "Ready-to-eat meals, snacks, and freshly prepared dishes perfect for a quick and delicious bite.",
    image: "/Images/improved/Kukuriko.jpg",
    icon: Sandwich,
  },
  {
    title: "County Grocery",
    description:
      "A wide selection of groceries, pantry essentials, and household products for your everyday needs.",
    image: "/Images/improved/Groceries3.jpg",
    icon: ShoppingCart,
  },
  {
    title: "County Electronics",
    description:
      "Home electronics, appliances, and everyday tech essentials — from the latest gadgets to the classics.",
    image: "/Images/improved/Electronics.jpg",
    icon: Tv,
  },
  {
    title: "County Household & Living",
    description:
      "Cleaning supplies, kitchen essentials, and household goods to keep your home running smoothly.",
    image: "/Images/improved/Household3.JPG",
    icon: Home,
  },
  {
    title: "County Home & Furniture",
    description:
      "Quality furniture and home décor to help you create a comfortable and stylish living space.",
    image: "/Images/improved/Furniture.JPG",
    icon: Sofa,
  },
  {
    title: "Butchery",
    description:
      "Fresh, high-quality meat sourced and prepared to ensure the best taste and quality for every meal.",
    image: "/Images/Butchery.webp",
    icon: Beef,
  },
  {
    title: "County Fashion",
    description:
      "Affordable and stylish clothing for men, women, and children — for every occasion and every season.",
    image: "/Images/clothing.webp",
    icon: Shirt,
  },
  {
    title: "Bags & Accessories",
    description:
      "Handbags, travel bags, belts, hats, scarves, and jewellery to complete every look, all in one place.",
    image: "/Images/Services/fashion.webp",
    icon: ShoppingBag,
  },
  {
    title: "County Liquor",
    description:
      "A curated selection of wines, spirits, beers, and soft drinks to complement any occasion.",
    image: "/Images/improved/Liquor.jpg",
    icon: Wine,
  },
];

function DepartmentTile({ title, description, image, icon: Icon }: Department) {
  const cardRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || !bgRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 18;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 18;
    gsap.to(bgRef.current, { x, y, duration: 0.5, ease: "power2.out" });
  };

  const handleMouseLeave = () => {
    gsap.to(bgRef.current, { x: 0, y: 0, duration: 0.7, ease: "power3.out" });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="aisle-tile relative overflow-hidden bg-white p-5 sm:p-6 rounded-xl border border-gray-200 min-h-65 sm:min-h-75 transition-all duration-300 group hover:shadow-xl hover:-translate-y-1 hover:border-orange-400"
    >
      {/* Background image — oversized so parallax never exposes edges */}
      <div
        ref={bgRef}
        className="absolute bg-cover bg-center opacity-0 group-hover:opacity-80 transition-opacity duration-700"
        style={{ inset: "-12%", backgroundImage: `url(${image})` }}
      />

      {/* Brand-coloured legibility overlay */}
      <div className="absolute inset-0 bg-blue-950/50 opacity-0 group-hover:opacity-100 transition duration-500" />

      {/* Content */}
      <div className="relative z-10">
        <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-orange-400 mb-4 transition-all duration-300 group-hover:scale-110 group-hover:text-orange-300" />

        <h3 className="text-blue-950 font-bold uppercase text-xs sm:text-sm mb-2 transition-colors duration-300 group-hover:text-white">
          {title}
        </h3>

        <p className="text-gray-700 text-xs sm:text-sm leading-relaxed transition-colors duration-300 group-hover:text-white/80">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function Services2() {
  useEffect(() => {
    gsap.set(".aisle-tile", { opacity: 0, y: 40 });
    gsap.to(".aisle-tile", {
      scrollTrigger: { trigger: ".aisles-grid", start: "top bottom" },
      opacity: 1,
      y: 0,
      duration: 0.55,
      stagger: 0.08,
      ease: "power2.out",
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section
      id="Services"
      className="relative bg-gray-100 py-24 sm:py-32 px-4 sm:px-6"
    >
      {/* Dot-grid texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(0,0,0,0.04) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-orange-400 text-xs font-semibold uppercase tracking-widest mb-3">
            What We Offer
          </p>
          <h2 className="aisles-heading text-4xl sm:text-5xl md:text-6xl font-bold text-blue-950 tracking-tight">
            Explore Our Aisles
          </h2>
          <div className="aisles-sub">
            <div className="w-14 sm:w-16 h-1 bg-orange-400 mt-4 mb-5 mx-auto" />
            <p className="text-gray-700 text-sm sm:text-base max-w-xl mx-auto">
              From fresh produce and daily essentials to electronics and fashion
              — everything you need, all under one roof.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="aisles-grid grid grid-cols-2 lg:grid-cols-5 gap-5 sm:gap-6">
          {departments.map((dept, index) => (
            <DepartmentTile key={index} {...dept} />
          ))}
        </div>
      </div>
    </section>
  );
}
