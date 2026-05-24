"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Kenol() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(imageRef.current, {
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
        x: -40,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
      });
      if (textRef.current) {
        gsap.from(Array.from(textRef.current.children), {
          scrollTrigger: { trigger: textRef.current, start: "top 82%" },
          x: 30,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="story_kenol"
      ref={sectionRef}
      className="bg-gray-50 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-12 lg:px-16"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* LEFT — image */}
        <div ref={imageRef} className="relative order-2 lg:order-1">
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/Images/Hero/Hero4.webp"
              alt="Kenol branch storefront"
              fill
              className="object-cover"
              sizes="(max-width:1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-blue-950/15" />
          </div>
        </div>

        {/* RIGHT — text */}
        <div ref={textRef} className="order-1 lg:order-2">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-950 leading-tight mb-4">
            We Watched the Town Grow Up With Us.
          </h2>
          <div className="w-12 h-1 bg-orange-500 mb-4" />
          <h3 className="text-base sm:text-lg text-gray-500 font-medium mb-6">
            Twenty-five years in Kenol — and we still know our oldest customers
            by name.
          </h3>
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-4">
            When we first set up in Kenol around the year 2000, the market was
            full of donkeys. The matatu stage held a handful of vehicles. Most
            plots were unbuilt. The spot where County Supermarket Kenol stands
            today was a sawmill. In those early gas-pump days, we&apos;d
            sometimes wait a full month for a customer to even ask the price of
            a cylinder — not buy one, just ask.
          </p>
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-6">
            Twenty-five years later, Kenol is a 24-hour economy. Banks,
            businesses, traffic, life. We like to think we played our small part
            in turning the Magomano junction into the stopover it is today. And
            in our oldest branch, the customers we serve now are the same
            customers we&apos;ve known for nearly two decades. They&apos;ve
            watched us grow. We&apos;ve watched them grow. That&apos;s not a
            customer base. That&apos;s a family.
          </p>
          <blockquote className="border-l-4 border-orange-500 pl-5 py-2 my-6">
            <p className="text-gray-700 text-base sm:text-lg italic leading-relaxed">
              &ldquo;They know me from when I was young. I know them from when
              they were young. We are a family.&rdquo;
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
