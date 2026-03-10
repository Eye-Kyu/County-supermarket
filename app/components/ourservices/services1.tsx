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
      "Our loyalty program rewards our regular shoppers with exclusive discounts, points-based rewards, and special offers both in-store and online.",
  },
  {
    image: "/Images/Services/kukuriko.webp",
    title: "Kukuriko",
    description:
      "Get the best chicken dishes in town with our delicious and affordable options.",
  },
  {
    image: "/Images/Services/delivery.webp",
    title: "County Delivery Services",
    description:
      "Our delivery service ensures that groceries and household essentials reach your home safely and on time.",
  },
  {
    image: "/Images/Services/return_policy.webp",
    title: "Return Policy",
    description:
      "Our return policy ensures customer satisfaction by providing a hassle-free process for returning products.",
  },
  {
    image: "/Images/Services/whatsapp.webp",
    title: "Whatsapp Shopping",
    description:
      "Order your favorite products directly through WhatsApp and have them delivered to your doorstep.",
  },
  {
    image: "/Images/Services/exhauster.webp",
    title: "Exhauster Services",
    description:
      "Our exhauster services provide efficient waste management solutions ensuring a clean and hygienic environment.",
  },
];

export default function ServiceSection() {
  return (
    <section className="bg-gray-100 py-16 sm:py-20 lg:py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-950 uppercase tracking-wide leading-tight">
            Here For You. In-Store, Online, and Everywhere In Between.
          </h2>

          <p className="text-gray-600 mt-4 sm:mt-6 text-sm sm:text-base">
            Making everyday shopping easier, more rewarding, and more connected,
            wherever you are in Kenya.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-10 sm:gap-12 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div key={index} className="group">
              {/* Image */}
              <div className="relative h-[220px] sm:h-[240px] md:h-[260px] lg:h-[280px] w-full overflow-hidden rounded-3xl shadow-lg shadow-black/20">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                />
              </div>

              {/* Content */}
              <div className="mt-5 sm:mt-6">
                <h3 className="text-orange-500 font-bold uppercase text-base sm:text-lg tracking-wide">
                  {service.title}
                </h3>

                <p className="text-gray-600 mt-2 text-sm sm:text-[15px] leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
