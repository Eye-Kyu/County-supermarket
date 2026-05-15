import Image from "next/image";
import Button from "../Button";

export default function WhyShopWithUs() {
  return (
    <section className="w-full bg-white py-16 px-4 md:px-10 lg:px-20">
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
        {/* LEFT: Text content */}
        <div className="max-w-xl">
          <p className="text-xs tracking-widest text-orange-500 font-semibold mb-4">
            SERVICES
          </p>

          <h2 className="md:text-center  text-3xl md:text-4xl font-bold text-blue-950 mb-16">
            Why Shop With Us
          </h2>

          <p className="text-gray-600 leading-relaxed mb-6">
            At County Supermarket, we prioritize your convenience with a range
            of services designed to enhance your shopping experience. Enjoy a
            seamless in-store environment, personalized assistance, and
            exclusive offers through our loyalty program. Our services include a
            secure car parking facility, special orders, and complimentary gift
            wrapping. We are dedicated to providing quality, affordability, and
            exceptional customer service, ensuring every visit meets your needs.
            Shop with us for value and satisfaction!
          </p>
          <Button variant="outline" href="/Contact">Contact Us</Button>
        </div>

        {/* MIDDLE: Store image */}
        <div className="relative h-[420px] md:h-[520px] w-full">
          <Image
            src="/Images/Hero/Groceries.webp"
            alt="County Supermarket aisle"
            fill
            className="object-cover rounded-lg"
            sizes="(max-width: 1024px) 100vw, 33vw"
          />
        </div>

        {/* RIGHT: Poster / graphic */}
        <div className="relative h-[420px] md:h-[520px] w-full">
          <Image
            src="/Images/Hero/hero1.webp"
            alt="County Supermarket poster"
            fill
            className="object-contain"
            sizes="(max-width: 1024px) 100vw, 33vw"
          />
        </div>
      </div>
    </section>
  );
}
