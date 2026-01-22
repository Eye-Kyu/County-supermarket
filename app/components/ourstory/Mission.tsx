import Image from "next/image";

export default function Mission() {
  return (
    <section className="w-full bg-white py-16 px-4 md:px-10 lg:px-20">
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
        {/* LEFT: Text content */}
        <div className="max-w-xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our Mission
          </h2>

          <p className="text-gray-600 leading-relaxed mb-6">
            At County Supermarket, we prioritize your convenience with a range
            At County Supermarket, our mission is to deliver an exceptional
            shopping experience by offering affordability, high-quality
            products, and unmatched convenience across all our store branches.
            We are dedicated to meeting the needs of our customers with reliable
            service, a wide selection of goods, and a commitment to excellence,
            ensuring satisfaction with every visit.
          </p>
        </div>

        {/* MIDDLE: Store image */}
        <div className="relative h-105 md:h-130 w-full">
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
