const milestones = [
  {
    year: "2009",
    title: "Where It All Began",
    event:
      "County Supermarket opened its first doors in Kenol, Murang'a — a modest store with a clear purpose: to serve the local community with quality goods at honest prices. From day one, the warmth of the team and the breadth of the shelves set us apart.",
  },
  {
    year: "2013",
    title: "Growing Into Kirinyaga",
    event:
      "We expanded to Kagio in Kirinyaga County, marking our first step beyond Murang'a. The community welcomed us with open arms, and we responded by bringing the same dedication to service and affordability that defined our founding branch.",
  },
  {
    year: "2016",
    title: "Strengthening Our Roots",
    event:
      "A third branch opened in Kabati, Murang'a, deepening our presence in central Kenya. With three branches now operating, County Supermarket was cementing its reputation as the go-to shopping destination for families across the region.",
  },
  {
    year: "2020",
    title: "Resilience & Expansion",
    event:
      "The Kagumo branch in Kirinyaga opened, reaffirming our commitment to growth and community service. At six branches and counting, County Supermarket stands as a homegrown Kenyan success story built on trust, value, and family.",
  },
  {
    year: "2025",
    title: "Reaching Greater Nairobi",
    event:
      "The Juja branch launched along Kenyatta Road in Kiambu County, extending County Supermarket's reach into the greater Nairobi metropolitan area and serving a fast-growing urban customer base.",
  },
];

export default function Timeline() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-10 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <div className="mb-10 sm:mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-orange-500 mb-3">
            Our History
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-950 mb-4">
            Our Timeline
          </h2>
          <div className="w-12 h-1 bg-orange-500 mb-5" />
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl leading-relaxed">
            From a single store in Kenol to six branches across central Kenya —
            here is the journey that made County Supermarket a household name.
          </p>
        </div>

        {/* Timeline entries */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 sm:left-6 top-0 bottom-0 w-px bg-gray-200" />

          <div className="space-y-10 sm:space-y-12">
            {milestones.map((item, index) => (
              <div key={index} className="relative flex gap-6 sm:gap-8">
                {/* Year badge */}
                <div className="shrink-0 w-10 sm:w-12 flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-orange-500 ring-4 ring-orange-100 mt-1 z-10" />
                </div>

                {/* Content */}
                <div className="pb-2">
                  <span className="inline-block text-xs font-bold uppercase tracking-widest text-orange-500 mb-1">
                    {item.year}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-blue-950 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    {item.event}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
