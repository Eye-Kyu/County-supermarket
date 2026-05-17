"use client";

import Image from "next/image";
import LoyaltyStatCard from "./LoyaltyStatCard";

type LoyaltySectionProps = {
  title: string;
  introLeft: string;
  introRight: string;
  image: string;
  imageTitle: string;
  imageSubtitle: string;
};

export default function LoyaltySection({
  title,
  introLeft,
  introRight,
  image,
  imageTitle,
  imageSubtitle,
}: LoyaltySectionProps) {
  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 sm:mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-orange-500 mb-3">
            Loyalty & Rewards
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-950 mb-4 max-w-2xl">
            {title}
          </h2>
          <div className="w-12 h-1 bg-orange-500" />
        </div>

        {/* Intro */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 mb-10 sm:mb-12 text-gray-600 text-sm sm:text-base leading-relaxed">
          <p>{introLeft}</p>
          <p>{introRight}</p>
        </div>

        {/* Content */}
        <div className="grid gap-8 md:grid-cols-2 items-stretch">
          {/* Image Card */}
          <div className="relative rounded-2xl overflow-hidden h-65 sm:h-75 md:h-90 shadow-lg shadow-black/15">
            <Image
              src={image}
              alt="County Supermarket"
              fill
              className="object-cover"
              sizes="(max-width:768px) 100vw, 50vw"
            />
            {/* Brand-coloured overlay */}
            <div className="absolute inset-0 bg-blue-950/70 flex items-end p-6 sm:p-8">
              <div className="text-white max-w-xs">
                <div className="w-8 h-0.5 bg-orange-500 mb-3" />
                <h3 className="text-lg sm:text-xl font-bold">{imageTitle}</h3>
                <p className="text-xs sm:text-sm mt-2 text-white/80">
                  {imageSubtitle}
                </p>
              </div>
            </div>
          </div>

          {/* Stats Card */}
          <LoyaltyStatCard
            value={80000}
            suffix="+"
            label="Happy Customers"
            description="Our growing community of loyal shoppers continues to inspire us to deliver quality products, great prices, and excellent service every day at County Supermarket."
            primaryButton="Join Our Rewards"
            secondaryButton="Learn More"
          />
        </div>
      </div>
    </section>
  );
}
