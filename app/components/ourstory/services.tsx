"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import {
  Sandwich,
  Croissant,
  Tv,
  Sofa,
  ShoppingCart,
  Beef,
  Shirt,
  Coffee,
} from "lucide-react";

type Service = {
  title: string;
  description: string;
  image: string;
  icon: React.ElementType;
};

const services: Service[] = [
  {
    title: "County Deli",
    description:
      "Enjoy ready-to-eat meals, snacks, and freshly prepared dishes perfect for a quick and delicious bite.",
    image: "/Images/Improved/Kukuriko.jpg",
    icon: Sandwich,
  },
  {
    title: "County Bakery",
    description:
      "Freshly baked bread, cakes, pastries, and other bakery treats prepared daily for our customers.",
    image: "/Images/Improved/Bakery.jpg",
    icon: Croissant,
  },
  {
    title: "County Electronics",
    description:
      "Browse a selection of home electronics, appliances, and everyday tech essentials.",
    image: "/Images/Improved/Electronics.jpg",
    icon: Tv,
  },
  {
    title: "County Home & Furniture",
    description:
      "Quality household items and furniture to help you create a comfortable and stylish home.",
    image: "/Images/Improved/Furniture.jpg",
    icon: Sofa,
  },
  {
    title: "County Grocery",
    description:
      "A wide selection of groceries, pantry essentials, and household products for your everyday needs.",
    image: "/Images/Improved/Groceries3.jpg",
    icon: ShoppingCart,
  },
  {
    title: "Butchery",
    description:
      "Fresh, high-quality meat sourced and prepared to ensure the best taste and quality.",
    image: "/Images/Butchery.webp",
    icon: Beef,
  },
  {
    title: "County Fashion",
    description:
      "Affordable and stylish clothing for men, women, and children for every occasion.",
    image: "/Images/clothing.webp",
    icon: Shirt,
  },
  {
    title: "County Liquor",
    description:
      "A variety of soft drinks, juices, and other beverages to complement your shopping experience.",
    image: "/Images/Improved/Liquor.jpg",
    icon: Coffee,
  },
];

function DepartmentTile({ title, description, image, icon: Icon }: Service) {
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
      className="department-tile relative overflow-hidden bg-white p-5 sm:p-6 rounded-xl border border-gray-200 min-h-65 sm:min-h-75 transition-all duration-300 group hover:shadow-xl hover:-translate-y-1 hover:border-orange-400"
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

export default function ProductsServices() {
  return (
    <section className="bg-gray-100 py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <h2 className="products-heading text-3xl sm:text-4xl md:text-5xl font-bold text-blue-950 tracking-tight">
            Products & Departments
          </h2>

          <div className="products-sub">
            <div className="w-14 sm:w-16 h-1 bg-orange-400 mt-4 mb-5" />
            <p className="text-gray-700 text-sm sm:text-base mb-3">
              At County Supermarket, we offer a wide selection of groceries,
              household essentials, fresh foods, and lifestyle products — all in
              one convenient location.
            </p>
            <p className="text-gray-500 text-sm sm:text-base">
              Every department is staffed by knowledgeable team members ready to
              help you find exactly what you need. Hover over any card to
              explore what we offer.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="products-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
          {services.map((service, index) => (
            <DepartmentTile key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
