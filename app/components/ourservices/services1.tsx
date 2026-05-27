"use client";

import Image from "next/image";

type Service = {
  image: string;
  title: string;
  description: string;
};

const services: Service[] = [
  {
    image: "/Images/Services/layaltyService.webp",
    title: "County Loyalty Program",
    description:
      "Our loyalty program rewards regular shoppers with exclusive discounts, points-based rewards, and special offers both in-store and online.",
  },
  {
    image: "/Images/Improved/Kukuriko-logo.webp",
    title: "Kukuriko",
    description:
      "Get the best chicken dishes in town with our delicious and affordable options, freshly prepared every day.",
  },
  {
    image: "/Images/Services/Delivery.webp",
    title: "County Delivery",
    description:
      "Our delivery service ensures groceries and household essentials reach your home safely and on time.",
  },
  {
    image: "/Images/Services/Returns.webp",
    title: "Easy Returns",
    description:
      "Our hassle-free return policy ensures your satisfaction with every purchase, no questions asked.",
  },
  {
    image: "/Images/Services/Whatsapp.webp",
    title: "WhatsApp Shopping",
    description:
      "Order your favourite products directly through WhatsApp and have them delivered straight to your doorstep.",
  },
  {
    image: "/Images/Services/parking.webp",
    title: "Free Parking",
    description:
      "Enjoy hassle-free, complimentary parking at all County Supermarket branches — so you can shop at your own pace.",
  },
  {
    image: "/Images/Services/gift.webp",
    title: "Gift Wrapping",
    description:
      "Let us wrap it for you. Our in-store gift wrapping service makes every purchase a perfect present.",
  },
];

export default function ServiceSection() {
  return (
    <section className="bg-gray-100 py-16 sm:py-20 lg:py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-2xl mb-14 sm:mb-16 lg:mb-20">
          <p className="text-xs font-semibold uppercase tracking-widest text-orange-500 mb-3">
            What We Offer
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-950 leading-tight mb-4">
            How We Serve You
          </h2>
          <div className="w-12 h-1 bg-orange-500 mb-5" />
          <p className="text-gray-600 text-sm sm:text-base">
            Making everyday shopping easier, more rewarding, and more connected
            — wherever you are in Kenya.
          </p>
        </div>

        {/* Grid — wider gaps, 5th card centred on desktop */}
        <div className="services-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className={`service-card group relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-lg cursor-pointer ${
                index === 6 ? "sm:col-span-2 md:col-span-1 md:col-start-2" : ""
              }`}
            >
              {/* Background image */}
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
              />

              {/* Gradient colour overlay — deepens on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-950/25 to-blue-950/5 transition-all duration-500 group-hover:from-blue-950/95 group-hover:via-blue-950/45" />

              {/* Text block anchored at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                {/* Description — clipped by default, expands above title on hover */}
                <div className="max-h-0 opacity-0 overflow-hidden group-hover:max-h-40 group-hover:opacity-100 transition-all duration-500 ease-out">
                  <p className="text-white/75 text-xs sm:text-sm leading-relaxed pb-3">
                    {service.description}
                  </p>
                </div>
                {/* Orange separator — fades in and grows on hover */}
                <div className="h-0.5 bg-orange-500 mb-3 w-8 group-hover:w-12 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                {/* Title — always visible at the very bottom */}
                <h3 className="text-white font-bold text-base sm:text-lg leading-snug">
                  {service.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
