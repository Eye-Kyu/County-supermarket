import { DollarSign, Send, Gem, Users } from "lucide-react";

const features = [
  {
    title: "Affordability",
    description:
      "We prioritize affordability without compromising quality. Shop with confidence, knowing you’ll find great value on all your essentials, making every visit budget-friendly and satisfying.",
    icon: DollarSign,
    color: "text-green-600",
  },
  {
    title: "Convenient",
    description:
      "We prioritize convenience by offering a wide range of products under one roof, ensuring a seamless and efficient shopping experience.",
    icon: Send,
    color: "text-orange-500",
  },
  {
    title: "Quality",
    description:
      "We are committed to quality, providing fresh, reliable, and top-grade products to ensure you enjoy the best shopping experience every time.",
    icon: Gem,
    color: "text-purple-600",
  },
  {
    title: "Customer Service",
    description:
      "We pride ourselves on exceptional customer service, ensuring friendly, helpful assistance and a smooth shopping experience with every visit.",
    icon: Users,
    color: "text-blue-600",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="text-center mb-16 space-y-8">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-wide">
            Why Choose Us
          </h2>
        </div>

        <div className="text-center mb-16 space-y-8"></div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="flex flex-col items-center rounded-lg bg-[#f6f8fa] px-6 py-10 text-center"
              >
                <Icon className={`mb-4 h-10 w-10 ${item.color}`} />

                <h3 className="text-lg font-semibold text-[#0b1c39]">
                  {item.title}
                </h3>

                <span className="my-3 h-0.5 w-10 bg-gray-300" />

                <p className="text-sm leading-relaxed text-gray-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
