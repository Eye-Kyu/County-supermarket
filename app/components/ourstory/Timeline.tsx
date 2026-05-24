const milestones = [
  {
    year: "~2001",
    title: "Arrival in Kenol",
    event:
      "We set up shop in Kenol, Murang'a — selling gas in a sleepy junction town where donkeys filled the market and customers a month apart wasn't unusual. The waiting began.",
  },
  {
    year: "Mid-2000s",
    title: "Magomano Petrol Station",
    event:
      "A full forecourt takes shape — fuel pumps, a restaurant, a car wash, a service bay. A small minimart is added in the corner, almost as an afterthought. We had no idea what it would become.",
  },
  {
    year: "~2008",
    title: "The Minimart Outgrows Its Corner",
    event:
      "Two years in, the shop is outperforming the rest of the forecourt. A trip to Murang'a sparks the idea: tear down the service bay, build a real supermarket. The seed is planted.",
  },
  {
    year: "~2011",
    title: "County Is Born",
    event:
      "Makomano Minimart becomes County Supermarket — a name built to travel, christened the same year Kenya's county system is taking shape. Strategy meets serendipity.",
  },
  {
    year: "2013",
    title: "Kagio Branch Opens",
    event:
      "We expand into Kirinyaga County. Kagio welcomes us, and we respond with the same standards that built the first branch — quality, affordability, and time for the customer.",
  },
  {
    year: "2016",
    title: "Kabati Branch Opens",
    event:
      "A third location, this time back in Murang'a. Three branches and counting — County is becoming a familiar name across central Kenya.",
  },
  {
    year: "2020",
    title: "Kagumo Branch Opens",
    event:
      "A fourth branch arrives in Kirinyaga even as the country navigates a difficult year. Growth through the headwinds — a sign of what the next chapter would demand.",
  },
  {
    year: "2025",
    title: "Juja Branch — Greater Nairobi",
    event:
      "We launch on Kenyatta Road in Kiambu County, stepping into the greater Nairobi metropolitan area. Six branches. Four counties. Still the same shop in spirit as the one in the petrol station corner.",
  },
  {
    year: "2025",
    title: "The Year of the Lesson",
    event:
      "A hard year teaches a strategic lesson: don't put all the eggs in one basket. The plan to diversify beyond supermarkets begins quietly.",
  },
  {
    year: "2026",
    title: "Eighteen Years Strong",
    event:
      "Eighteen years since the first minimart. Fifteen as County. Twenty-five years in Kenol. The next chapter is already being written.",
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
            From a kerosene pump in Kenol to six branches across central Kenya
            — the full journey that made County Supermarket what it is today.
            Dates marked with ~ are approximate and await client confirmation.
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
