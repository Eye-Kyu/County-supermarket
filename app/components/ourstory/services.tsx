"use client";

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
    image: "/Images/furniture.jpg",
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
    title: "CountyFashion",
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
  return (
    <div
      className="
      relative overflow-hidden
      bg-white
      p-5 sm:p-6
      rounded-xl
      border border-gray-200
      min-h-[260px] sm:min-h-[300px]
      transition-all duration-300
      group
      hover:shadow-xl
      hover:-translate-y-1
      hover:border-orange-400
      "
    >
      {/* Background Image */}
      <div
        className="
        absolute inset-0
        bg-cover bg-center
        opacity-0 scale-110
        group-hover:opacity-30 group-hover:scale-100
        transition-all duration-700
        "
        style={{ backgroundImage: `url(${image})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition"></div>

      {/* Content */}
      <div className="relative z-10">
        <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-orange-400 mb-4 transition-transform group-hover:scale-110" />

        <h3 className="text-blue-950 font-bold uppercase text-xs sm:text-sm mb-2">
          {title}
        </h3>

        <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-950 tracking-tight">
            Products & Departments
          </h2>

          <div className="w-14 sm:w-16 h-1 bg-orange-400 mt-4 mb-5"></div>

          <p className="text-gray-700 text-sm sm:text-base">
            At County Supermarket, we offer a wide selection of groceries,
            household essentials, fresh foods, and lifestyle products all in one
            convenient location.
          </p>
        </div>

        {/* Grid */}
        <div
          className="
          grid
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          gap-5 sm:gap-6
          "
        >
          {services.map((service, index) => (
            <DepartmentTile key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
