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
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-950 uppercase mb-8 sm:mb-10">
          {title}
        </h2>

        {/* Intro */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 mb-10 sm:mb-12 text-gray-700 text-sm sm:text-base leading-relaxed">
          <p>{introLeft}</p>
          <p>{introRight}</p>
        </div>

        {/* Content */}
        <div className="grid gap-8 md:grid-cols-2 items-stretch">
          {/* Image Card */}
          <div className="relative rounded-xl overflow-hidden h-[260px] sm:h-[300px] md:h-[340px] lg:h-[380px] shadow-lg shadow-black/20">
            <Image
              src={image}
              alt="County Supermarket"
              fill
              className="object-cover"
              sizes="(max-width:768px) 100vw, 50vw"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-green-900/70 flex items-end p-6 sm:p-8">
              <div className="text-white max-w-xs">
                <h3 className="text-lg sm:text-xl font-bold uppercase">
                  {imageTitle}
                </h3>

                <p className="text-xs sm:text-sm mt-2 opacity-90">
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
