"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Hero from "../components/HeroServices";
import WhyShopWithUs from "../components/ourservices/ServicesWhy";
import Loyalty from "../components/ourservices/Loyalty";
import ServiceSection from "../components/ourservices/services1";

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  useEffect(() => {
    // Hero text — above the fold, no ScrollTrigger needed
    gsap.from(".services-hero-heading", {
      y: 35,
      opacity: 0,
      duration: 0.9,
      ease: "power3.out",
    });
    gsap.from(".services-hero-rule", {
      scaleX: 0,
      opacity: 0,
      duration: 0.6,
      delay: 0.25,
      ease: "power2.out",
      transformOrigin: "left center",
    });
    gsap.from(".services-hero-sub", {
      y: 20,
      opacity: 0,
      duration: 0.8,
      delay: 0.35,
      ease: "power2.out",
    });

    // Service cards stagger on scroll
    gsap.set(".service-card", { opacity: 0, y: 40 });
    gsap.to(".service-card", {
      scrollTrigger: { trigger: ".services-grid", start: "top bottom" },
      opacity: 1,
      y: 0,
      duration: 0.55,
      stagger: 0.09,
      ease: "power2.out",
    });

    ScrollTrigger.refresh();
    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <div className="bg-white relative">
      <Hero />
      <div className="bg-white z-10 relative">
        <ServiceSection />
        <WhyShopWithUs />
        <Loyalty />
      </div>
    </div>
  );
}
