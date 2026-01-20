import Image from "next/image";

const services = [
  {
    title: "Electronics",
    description:
      "Find high quality electronic gadgets and electronic deals from your favorite brands.",
    image: "/Images/electronics.webp",
  },
  {
    title: "Fashion",
    description:
      "Shop for the latest fashion trends from our local and international suppliers",
    image: "/Images/clothing.webp",
  },
  {
    title: "Groceries",
    description:
      "Discover a wide variety of fresh, high-quality groceries to meet all your daily needs.",
    image: "/Images/groceries.webp",
  },
  {
    title: "Butchery",
    description:
      "Experience the finest quality meats at our butchery. We offer a wide selection of fresh, expertly cut beef, poultry, lamb, and pork to suit all your cooking needs",
    image: "/Images/Butchery.webp",
  },
];

export default function ServicesSection() {
  return (
    <section className="w-full bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16 space-y-8">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-wide">
            OUR SERVICES
          </h2>

          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="w-6 h-[0.5] bg-orange-500" />
            <p className="stext-sm ">
              Enjoy delightful pastries, gourmet meals, and fresh cuts at the
              Bakery, Deli, Butchery, and many more in our branches.
            </p>
            <span className="w-6 h-[0.5] bg-orange-500" />
          </div>
        </div>

        {/* Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div key={service.title} className="space-y-4">
              <div className="relative h-72 w-full overflow-hidden rounded-lg">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>

              <h3 className="text-lg font-semibold uppercase tracking-wide text-gray-900">
                {service.title}
              </h3>

              <p className="text-sm leading-relaxed text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 flex justify-center">
          <button className="rounded-full bg-blue-600 px-8 py-3 text-sm font-medium text-white transition hover:bg-blue-700">
            View All Services
          </button>
        </div>
      </div>
    </section>
  );
}
