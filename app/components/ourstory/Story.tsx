"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "../Button";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 15, suffix: "+", label: "Years Serving Kenya" },
  { value: 6, suffix: "", label: "Branches" },
  { value: 50, suffix: "K+", label: "Happy Customers" },
];

export default function OurStory() {
  const sectionRef = useRef<HTMLElement>(null);
  const imgMainRef = useRef<HTMLDivElement>(null);
  const imgCardRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const counterRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Main image slides in from the left
      gsap.from(imgMainRef.current, {
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
        x: -60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // Offset card follows with a slight delay
      gsap.from(imgCardRef.current, {
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
        x: -40,
        opacity: 0,
        duration: 1,
        delay: 0.25,
        ease: "power3.out",
      });

      // Text content children stagger in from the right
      if (contentRef.current) {
        gsap.from(Array.from(contentRef.current.children), {
          scrollTrigger: { trigger: contentRef.current, start: "top 82%" },
          x: 30,
          opacity: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: "power2.out",
        });
      }

      // Stat counters count up on scroll
      counterRefs.current.forEach((el, i) => {
        if (!el) return;
        const obj = { value: 0 };
        gsap.to(obj, {
          value: stats[i].value,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: { trigger: statsRef.current, start: "top 85%" },
          onUpdate: () => {
            el.textContent = Math.round(obj.value).toString();
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-12 lg:px-16"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* LEFT — layered image column */}
        <div className="relative">
          {/* Main image */}
          <div
            ref={imgMainRef}
            className="relative w-full h-70 sm:h-90 md:h-110 rounded-2xl overflow-hidden shadow-lg"
          >
            <Image
              src="/Images/Hero/Hero4.webp"
              alt="County Supermarket exterior"
              fill
              priority
              className="object-cover"
              sizes="(max-width:768px) 100vw, 50vw"
            />
          </div>

          {/* Offset inset card — overlaps the main image */}
          <div
            ref={imgCardRef}
            className="absolute -bottom-8 right-0 w-2/3 h-[160px] sm:h-[200px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white"
          >
            <Image
              src="/Images/Hero/Kroad3.webp"
              alt="Inside County Supermarket"
              fill
              className="object-cover"
              sizes="(max-width:768px) 66vw, 33vw"
            />
            {/* Brand badge */}
            <div className="absolute bottom-3 left-3 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full tracking-wide">
              County Ni Home
            </div>
          </div>
        </div>

        {/* RIGHT — text content */}
        <div ref={contentRef} className="pt-10 lg:pt-0">
          {/* Eyebrow */}
          <p className="text-xs font-semibold uppercase tracking-widest text-orange-500 mb-3">
            Our Journey
          </p>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-950 leading-tight mb-4">
            Our Story
          </h2>

          {/* Orange rule */}
          <div className="w-12 h-1 bg-orange-500 mb-6" />

          {/* Body copy */}
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-4">
            County Supermarket is a beloved local Kenyan chain with a presence
            in central Kenya. Operating for over 15 years, this homegrown gem
            has expanded to 6 branches, catering to multiple counties. We pride
            ourselves on exceptional customer service and affordability,
            offering a wide range of goods under one roof.
          </p>

          <p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-8">
            Step into any branch to savour delightful pastries from the Bakery,
            indulge in gourmet meals at the Deli, or choose fresh cuts at the
            Butchery. Our team is dedicated to making every visit feel like
            coming home.
          </p>

          {/* Stat counters */}
          <div
            ref={statsRef}
            className="grid grid-cols-3 gap-4 py-6 mb-8 border-t border-b border-gray-100"
          >
            {stats.map((stat, i) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl sm:text-3xl font-extrabold text-blue-950">
                  <span
                    ref={(el: HTMLSpanElement | null) => {
                      counterRefs.current[i] = el;
                    }}
                  >
                    0
                  </span>
                  {stat.suffix}
                </p>
                <p className="text-xs text-gray-500 mt-1 leading-snug">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <Button variant="outline" href="/Contact">
            Talk to Us
          </Button>
        </div>
      </div>
    </section>
  );
}
