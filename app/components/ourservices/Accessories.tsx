"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Footprints, ShoppingBag, Luggage, Watch } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

type Category = {
  icon: React.ElementType;
  label: string;
  items: string[];
};

const categories: Category[] = [
  {
    icon: Footprints,
    label: "Footwear",
    items: ["Sneakers", "Heels", "Sandals", "Formal Shoes", "Boots"],
  },
  {
    icon: ShoppingBag,
    label: "Ladies Bags",
    items: ["Handbags", "Clutches", "Shoulder Bags", "Tote Bags"],
  },
  {
    icon: Luggage,
    label: "Travel Bags",
    items: ["Duffel Bags", "Backpacks", "Trolley Cases", "Weekend Bags"],
  },
  {
    icon: Watch,
    label: "Accessories",
    items: ["Belts", "Hats & Caps", "Scarves", "Jewellery"],
  },
];

export default function Accessories() {
  const sectionRef = useRef<HTMLElement>(null);
  const imgWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imgWrapRef.current,
        { yPercent: -10 },
        {
          yPercent: 10,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-10 sm:py-14 px-4 sm:px-6 md:px-12 lg:px-16"
    >
      {/* Background image — oversized so parallax travel never reveals edges */}
      <div ref={imgWrapRef} className="absolute inset-[-15%]">
        <Image
          src="/Images/Services/Fashion.webp"
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
          aria-hidden="true"
        />
      </div>
      {/* Dark overlay — 65% opacity */}
      <div className="absolute inset-0 bg-blue-950/65" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-8 sm:mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-orange-400 mb-3">
            Fashion &amp; Accessories
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            Style for Every Occasion.
          </h2>
          <div className="w-12 h-1 bg-orange-400" />
        </div>

        {/* Category grid — 2 columns on sm+ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.label}
                className="accessory-card group flex items-start gap-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-4 sm:p-5 hover:bg-white/20 hover:border-orange-400/50 transition-all duration-300"
              >
                {/* Icon badge */}
                <div className="shrink-0 w-10 h-10 flex items-center justify-center rounded-xl bg-orange-500 group-hover:bg-orange-400 transition-colors duration-300">
                  <Icon className="w-5 h-5 text-white" />
                </div>

                {/* Content */}
                <div className="min-w-0">
                  <h3 className="text-sm font-bold text-white mb-2">
                    {cat.label}
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.items.map((item) => (
                      <span
                        key={item}
                        className="bg-white/15 text-orange-200 text-xs font-medium px-2.5 py-0.5 rounded-full"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
