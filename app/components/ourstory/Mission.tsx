const cards = [
  {
    tag: "Our Mission",
    heading: "Bringing quality home, every day.",
    body: "At County Supermarket, our mission is to provide every Kenyan family with access to fresh, quality products at honest prices. Across all six of our branches we are committed to delivering a seamless and welcoming shopping experience — where convenience, variety, and exceptional service come together under one roof. We exist to make your life easier, your kitchen fuller, and your household happier.",
    bg: "bg-orange-500",
    tagColor: "text-orange-100",
    rule: "bg-white/40",
  },
  {
    tag: "Our Vision",
    heading: "Kenya's most trusted local supermarket.",
    body: "We envision County Supermarket as Kenya's leading community-rooted retail chain — a brand that every family recognises, trusts, and calls home. Our vision is to expand our footprint across the country while preserving the warmth and personal touch that defines us. We strive to set the standard for local retail: putting Kenyan families first, empowering local suppliers, and growing as a cornerstone of the communities we serve.",
    bg: "bg-blue-950",
    tagColor: "text-blue-300",
    rule: "bg-white/20",
  },
];

export default function Mission() {
  return (
    <section className="w-full bg-white py-16 px-4 md:px-10 lg:px-20">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row gap-8">
        {cards.map((card) => (
          <div
            key={card.tag}
            className={`flex-1 ${card.bg} rounded-2xl px-8 py-10 md:px-14 md:py-12`}
          >
            <p
              className={`text-xs uppercase tracking-widest font-semibold mb-4 ${card.tagColor}`}
            >
              {card.tag}
            </p>

            <span className={`block w-10 h-0.5 mb-6 ${card.rule}`} />

            <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-6 leading-snug">
              {card.heading}
            </h2>

            <p className="text-white/80 text-sm md:text-base leading-relaxed max-w-2xl">
              {card.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
