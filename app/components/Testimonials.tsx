import { FaUser } from "react-icons/fa";

const testimonials = [
  {
    quote: "The supermarket like no other, i love their services. Keep it up.",
    name: "Kelvin Mbugua",
  },
  {
    quote:
      "It was awesome i came n shopped with guyz...the service is good..nakuongeleshwa vizuri just amazing to your customers..Kagio where i live",
    name: "Nyambui Favored",
  },
  {
    quote:
      "Always proud of county supermarket. Big up winning team #COUNTYINHOME",
    name: "Alex Kelvin",
  },
];

export default function ClientTestimonials() {
  return (
    <section className="py-20 px-6 md:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-center text-3xl md:text-4xl font-bold text-blue-950 mb-16">
          Client Testimonials
        </h2>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {testimonials.map((item, index) => (
            <div key={index} className="space-y-6">
              {/* Quote */}
              <p className="text-sm md:text-base text-gray-500 leading-relaxed max-w-sm mx-auto">
                “{item.quote}”
              </p>

              {/* Avatar */}
              <div className="flex justify-center">
                <div className="w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                  <FaUser size={18} />
                </div>
              </div>

              {/* Name */}
              <p className="text-xs font-semibold uppercase tracking-wider text-[#0b1b3f]">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
