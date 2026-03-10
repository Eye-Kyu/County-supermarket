const Chronology = [
  {
    year: "1990",
    event:
      "Opened our first store in a small town. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi vel consectetur interdum, nisl nisi consectetur nisi. lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi vel consectetur interdum, nisl nisi consectetur nisi.",
  },
  {
    year: "2005",
    event:
      "Opened our second store in Kaggio region further expanding our reach. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi vel consectetur interdum, nisl nisi consectetur nisi. lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi vel consectetur interdum, nisl nisi consectetur nisi.",
  },
  {
    year: "2010",
    event:
      "Opened our third store in the city center, offering a wider range of products. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi vel consectetur interdum, nisl nisi consectetur nisi. lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi vel consectetur interdum, nisl nisi consectetur nisi.",
  },
  {
    year: "2015",
    event:
      "Opened our fourth store in the suburbs, providing convenient access for our customers. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi vel consectetur interdum, nisl nisi consectetur nisi. lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi vel consectetur interdum, nisl nisi consectetur nisi.",
  },
  {
    year: "2020",
    event:
      "Opened our fifth store in the downtown area, catering to a diverse customer base. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi vel consectetur interdum, nisl nisi consectetur nisi. lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi vel consectetur interdum, nisl nisi consectetur nisi.",
  },
];

export default function Timeline() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-10 bg-white">
      <div className="max-w-4xl mx-auto space-y-10">
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold py-3 px-6 md:px-0 bg-orange-500 text-white rounded-md">
            Our Timeline
          </h1>
        </div>

        {/* Intro */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
            Our journey began in 1990 when we opened our first store in a small
            town. Over the years, we expanded to multiple locations and
            continued to provide quality products and services to our customers.
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-8 sm:space-y-10">
          {Chronology.map((item, index) => (
            <div key={index} className="space-y-3 text-left">
              {/* Year */}
              <div className="font-bold text-lg sm:text-xl text-orange-300">
                {item.year}
              </div>

              {/* Event */}
              <div className="text-gray-700 text-sm sm:text-base leading-relaxed">
                {item.event}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
