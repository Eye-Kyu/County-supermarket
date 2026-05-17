"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Car,
  Gift,
  Truck,
  Star,
  MessageCircle,
  Package,
} from "lucide-react";
import Button from "../Button";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: Car,
    title: "Free Parking",
    desc: "Ample secure parking available at all six of our branches.",
  },
  {
    icon: Gift,
    title: "Gift Wrapping",
    desc: "Complimentary wrapping on any purchase — perfect for every occasion.",
  },
  {
    icon: Truck,
    title: "Home Delivery",
    desc: "Fast, reliable delivery of groceries straight to your door.",
  },
  {
    icon: Star,
    title: "Loyalty Rewards",
    desc: "Earn points with every purchase and unlock exclusive member offers.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Orders",
    desc: "Order your favourites via WhatsApp from anywhere, anytime.",
  },
  {
    icon: Package,
    title: "Special Orders",
    desc: "Can't find it on the shelf? We'll source it for you.",
  },
];

export default function WhyShopWithUs() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Left content slides in from the left
      gsap.from(leftRef.current, {
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
        x: -40,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
      });

      // Explicitly set cards invisible then animate TO visible
      gsap.set(".why-feature-card", { opacity: 0, y: 30 });
      gsap.to(".why-feature-card", {
        scrollTrigger: {
          trigger: ".why-feature-grid",
          start: "top bottom",
          invalidateOnRefresh: true,
        },
        opacity: 1,
        y: 0,
        duration: 0.55,
        stagger: 0.08,
        ease: "power2.out",
      });
    }, sectionRef);

    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white py-16 sm:py-20 px-4 md:px-10 lg:px-20"
    >
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-start">

        {/* LEFT — intro */}
        <div ref={leftRef} className="lg:sticky lg:top-28">
          <p className="text-xs tracking-widest text-orange-500 font-semibold uppercase mb-3">
            Why County
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4 leading-tight">
            Why Shop With Us
          </h2>

          <div className="w-10 h-1 bg-orange-500 mb-6" />

          <p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-8">
            At County Supermarket, every visit is designed around you. From the
            moment you arrive to the moment you leave, our team and services
            work together to make shopping effortless, rewarding, and
            genuinely enjoyable.
          </p>

          <Button variant="outline" href="/Contact">Get in Touch</Button>
        </div>

        {/* RIGHT — feature grid */}
        <div className="why-feature-grid lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="why-feature-card group flex gap-4 items-start bg-gray-50 border border-gray-100 rounded-2xl p-5 sm:p-6 hover:border-orange-300 hover:bg-orange-50/40 transition-all duration-300"
              >
                {/* Icon badge */}
                <div className="shrink-0 w-11 h-11 rounded-xl bg-blue-950 flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-300">
                  <Icon className="w-5 h-5 text-white" />
                </div>

                <div>
                  <h3 className="font-bold text-blue-950 text-sm sm:text-base mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
