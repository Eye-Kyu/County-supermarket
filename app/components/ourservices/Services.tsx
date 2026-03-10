"use client";

import Image from "next/image";

type Service = {
  title: string;
  description: string;
  image: string;
};

const services: Service[] = [
  {
    title: "Kukuriko",
    description:
      "Savor the flavors of our Chicken Restaurant, where we serve delicious and perfectly cooked chicken dishes." +
      "From crispy fried chicken to tender grilled options, our menu offers a variety of mouthwatering choices to satisfy your cravings." +
      "Experience the irresistible taste of our chicken dishes, made with quality ingredients and cooked to perfection for a truly satisfying dining experience.",
    image: "/Images/Services/kukuriko.webp",
  },
  {
    title: "Delivery Service",
    description:
      "Enjoy the convenience of our delivery service, bringing your favorite items right to your doorstep." +
      "With our reliable and efficient delivery service, you can shop from the comfort of your home and have your groceries delivered to you in no time." +
      "Experience the ease and convenience of shopping with us through our delivery service.",
    image: "/Images/Services/delivery.webp",
  },
  {
    title: "Whatsapp Shopping",
    description:
      "Order your favorite items through our WhatsApp shopping service." +
      "Simply send us a message with your order details, and our team will take care of the rest." +
      "Experience the ease and convenience of shopping with us through WhatsApp.",
    image: "/Images/Services/whatsapp.webp",
  },
  {
    title: "Exhauster Services",
    description:
      "County Supermarket offers waste management services designed to efficiently handle waste removal." +
      "Our exhauster services ensure a clean and hygienic environment for customers and the community.",
    image: "/Images/Services/exhauster.webp",
  },
  {
    title: "Parking",
    description:
      "Enjoy hassle-free shopping with our spacious and secure parking facilities." +
      "Our parking lot is designed to accommodate a large number of vehicles.",
    image: "/Images/Services/parking.webp",
  },
  {
    title: "Customer Service",
    description:
      "Our friendly customer service team ensures a smooth shopping experience." +
      "Whether you have questions, need assistance, or want to provide feedback, we're here to help.",
    image: "/Images/Customer-Care.jpg",
  },
];

export default function ServicesSection() {
  return (
    <section className="w-screen bg-white py-20">
      <div className="mx-auto max-w-6xl px-6 flex flex-col gap-32">
        {services.map((service, index) => {
          const isReversed = index % 2 !== 0;

          return (
            <div key={service.title} className="flex flex-col gap-6">
              {/* Title */}
              <div>
                <h2 className="text-xl md:text-3xl font-semibold uppercase tracking-wide text-blue-950">
                  {service.title}
                </h2>
                <div className="mt-2 h-0.5 w-16 bg-orange-500" />
              </div>

              {/* Card */}
              <div className="rounded-2xl p-8 md:p-8 min-h-[50vh] flex items-center">
                <div
                  className={`grid md:grid-cols-5 gap-10 items-center w-full ${
                    isReversed ? "md:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  {/* Image */}
                  <div className="relative w-full md:col-span-3 aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="(max-width:768px) 100vw, 60vw"
                    />
                  </div>

                  {/* Text */}
                  <div className="md:col-span-2">
                    <p className="text-sm md:text-base leading-relaxed text-black">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
