"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "../Button";

gsap.registerPlugin(ScrollTrigger);

export default function OurStory() {
  const sectionRef = useRef<HTMLElement>(null);
  const imgMainRef = useRef<HTMLDivElement>(null);
  const imgCardRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(imgMainRef.current, {
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
        x: -60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(imgCardRef.current, {
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
        x: -40,
        opacity: 0,
        duration: 1,
        delay: 0.25,
        ease: "power3.out",
      });

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

          <div
            ref={imgCardRef}
            className="absolute -bottom-8 right-0 w-2/3 h-40 sm:h-50 rounded-2xl overflow-hidden shadow-2xl border-4 border-white"
          >
            <Image
              src="/Images/Hero/Kroad3.webp"
              alt="Inside County Supermarket"
              fill
              className="object-cover"
              sizes="(max-width:768px) 66vw, 33vw"
            />
            <div className="absolute bottom-3 left-3 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full tracking-wide">
              County Ni Home
            </div>
          </div>
        </div>

        {/* RIGHT — text content */}
        <div ref={contentRef} className="pt-10 lg:pt-0">
          <p className="text-xs font-semibold italic uppercase tracking-widest text-orange-500 mb-3">
            County Ni Home
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-950 leading-tight mb-4">
            Our Story
          </h2>

          <div className="w-12 h-1 bg-orange-500 mb-6" />

          <p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-8">
            It started small. A kerosene pump. A roadside fuel stop. A minimart
            squeezed into the corner of a petrol station nobody expected much
            from. Eighteen years later, the same business has grown into six
            branches across central Kenya, built on one stubborn idea: that
            quality shopping shouldn&apos;t only belong to big cities. This is
            how County grew up.
          </p>

          <Button variant="outline" href="/Contact">
            Talk to Us
          </Button>
        </div>
      </div>
    </section>
  );
}
