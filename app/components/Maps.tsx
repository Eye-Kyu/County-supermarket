"use client";

import { useState } from "react";

type Location = {
  label: string;
  query: string;
  hours: string;
};

const locations: Location[] = [
  {
    label: "County Supermarket Head Office — Kenol, Murang'a",
    query: "County Supermarket Kenol Murang'a Kenya",
    hours: "Mon – Sat: 7:00 AM – 9:00 PM  |  Sun: 8:00 AM – 8:00 PM",
  },
  {
    label: "County Supermarket Kabati Branch — Kabati, Murang'a",
    query: "County Supermarket Kabati Murang'a Kenya",
    hours: "Mon – Sat: 7:00 AM – 8:30 PM  |  Sun: 8:00 AM – 7:30 PM",
  },
  {
    label: "County Supermarket Kagio Branch — Kagio, Kirinyaga",
    query: "County Supermarket Kagio Kirinyaga Kenya",
    hours: "Mon – Sat: 7:00 AM – 9:00 PM  |  Sun: 8:00 AM – 8:00 PM",
  },
  {
    label: "County Supermarket Kagumo Branch — Kagumo, Kirinyaga",
    query: "County Supermarket Kagumo Kirinyaga Kenya",
    hours: "Mon – Sat: 7:30 AM – 8:30 PM  |  Sun: 8:30 AM – 7:00 PM",
  },
  {
    label: "County Supermarket Kahawa West Branch — Nairobi",
    query: "County Supermarket Kahawa West Nairobi Kenya",
    hours: "Mon – Sat: 8:00 AM – 10:00 PM  |  Sun: 9:00 AM – 9:00 PM",
  },
  {
    label: "County Supermarket Juja Branch — Kenyatta Road, Kiambu",
    query: "County Supermarket Juja Kenyatta Road Kiambu Kenya",
    hours: "Mon – Sat: 8:00 AM – 10:00 PM  |  Sun: 9:00 AM – 9:00 PM",
  },
];

export default function Maps() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    locations[selectedIndex].query,
  )}&output=embed`;

  return (
    <div>
      <div className="text-center px-4 pt-16 sm:pt-20">
        <p className="text-xs font-semibold uppercase tracking-widest text-orange-500 mb-3">
          Find Us
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">
          Where We Are
        </h2>
        <div className="w-12 h-1 bg-orange-500 mx-auto mb-4" />
        <p className="text-gray-600 text-sm max-w-md mx-auto">
          Six branches across four counties — there's always a County near you.
        </p>
      </div>

      <section className="flex flex-col-reverse md:flex-row w-full px-4 py-10 sm:px-6 md:px-12 gap-8 md:gap-12">
        {/* Locations */}
        <div className="w-full md:w-1/2">
          <p className="text-sm text-gray-500 mb-4">
            Select a branch to view it on the map
          </p>

          <form className="flex flex-col gap-3">
            {locations.map((location, index) => {
              const isActive = selectedIndex === index;
              return (
                <label
                  key={location.query}
                  className={`flex items-start gap-4 p-4 rounded-xl cursor-pointer transition-all duration-300 ${
                    isActive
                      ? "bg-blue-50 border border-blue-600 shadow-sm scale-[1.01]"
                      : "bg-gray-50 hover:bg-gray-100 border border-transparent"
                  }`}
                >
                  <input
                    type="radio"
                    name="location"
                    checked={isActive}
                    onChange={() => setSelectedIndex(index)}
                    className="mt-1 w-5 h-5 accent-blue-600 shrink-0"
                  />
                  <div className="flex flex-col gap-1">
                    <span className="text-sm sm:text-base font-medium text-blue-950">
                      {location.label}
                    </span>
                    <span className="text-xs text-gray-500">
                      🕐 {location.hours}
                    </span>
                    {isActive && (
                      <span className="text-xs text-orange-500 font-semibold">
                        Viewing on map →
                      </span>
                    )}
                  </div>
                </label>
              );
            })}
          </form>
        </div>

        {/* Map */}
        <div className="w-full md:w-1/2 h-72 sm:h-96 md:h-auto md:min-h-130 rounded-2xl overflow-hidden shadow-lg bg-white">
          <iframe
            src={mapSrc}
            className="w-full h-full"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`Map of ${locations[selectedIndex].label}`}
          />
        </div>
      </section>
    </div>
  );
}
