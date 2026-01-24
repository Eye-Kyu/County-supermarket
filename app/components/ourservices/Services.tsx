import Image from "next/image";

type Service = {
  title: string;
  description: string;
  image: string;
};

const services: Service[] = [
  {
    title: "Grocery",
    description:
      "Browse through the assortment of fresh fruits and vegetables sourced locally. Get locally grown and farm-fresh produce ready to nourish your family.",
    image: "/Images/groceries.webp",
  },
  {
    title: "Bakery",
    description:
      "Enjoy a delectable selection of pastries, bread, and baked goods freshly made each day. Whether it's a special celebration or just a treat for yourself, our bakery delights are sure to please your taste buds.",
    image: "/Images/Hero/hero1.webp",
  },
  {
    title: "Butchery",
    description:
      "Visit our Butchery for premium meats expertly prepared. With a focus on quality and freshness, our butchery offers a wide range of cuts, poultry, and seafood to meet all your culinary needs.",
    image: "/Images/Butchery.webp",
  },
  {
    title: "Household Essentials",
    description:
      "Find all your household needs in one place. From cleaning supplies and personal care products to kitchen essentials, our shelves are stocked to keep your home running smoothly.",
    image: "/Images/Hero/Groceries2.webp",
  },
  {
    title: "Fashion",
    description:
      "Explore our fashion section for trendy, affordable, and high-quality clothing for the whole family. From casual wear to special occasions, we offer styles that suit every need.",
    image: "/Images/clothing.webp",
  },
  {
    title: "Electronics",
    description:
      "Discover a variety of quality electronics at County Supermarket. From home appliances and gadgets to accessories, our electronics section offers reliable products at affordable prices.",
    image: "/Images/electronics.webp",
  },
  {
    title: "Parking",
    description:
      "Enjoy hassle-free shopping with our spacious and secure parking facilities. Designed for your convenience, we ensure easy access and peace of mind during your visit.",
    image: "/Images/clothing.webp",
  },
  {
    title: "Customer Service",
    description:
      "At County Supermarket, your satisfaction is our priority. Our friendly and professional customer service team is always ready to assist you with any inquiries, ensuring a smooth shopping experience.",
    image: "/Images/Hero/Groceries.webp",
  },
];

export default function ServicesZigZag() {
  return (
    <section className="bg-white py-24 z-50 w-screen">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-20">
          {services.map((service, index) => {
            const isReversed = index % 2 !== 0;

            return (
              <div
                key={service.title}
                className={`flex flex-col items-center gap-8 md:flex-row ${
                  isReversed ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <div className="w-full md:w-3/5">
                  <div className="relative aspect-square w-full overflow-hidden rounded-sm">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Text */}
                <div className="w-full md:w-2/5">
                  <h2 className="mb-3 text-lg font-semibold md:font-medium md:text-2xl uppercase tracking-wide text-blue-950">
                    {service.title}
                  </h2>

                  <div className="mb-4 h-0.5 w-12 bg-orange-500" />

                  <p className="text-sm leading-relaxed text-black">
                    {service.description}
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
