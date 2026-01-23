"use client";

import { useState } from "react";

type Location = {
  label: string;
  query: string;
};

const locations: Location[] = [
  {
    label: "County Supermarket Head Office- Kenol, Murang'a",
    query: "County Supermarket Kenol Murang'a Kenya",
  },
  {
    label: "County Supermarket Juja Branch - Kenyatta Road, Kiambu",
    query: "County Supermarket Juja Kenyatta Road Kiambu Kenya",
  },
  {
    label: "County Supermarket Kabati Branch - Kabati, Murang'a",
    query: "County Supermarket Kabati Murang'a Kenya",
  },
  {
    label: "County Supermarket Kagio Branch - Kagio, Kirinyaga",
    query: "County Supermarket Kagio Kirinyaga Kenya",
  },
  {
    label: "County Supermarket Kagumo Branch - Kagumo, Kirinyaga",
    query: "County Supermarket Kagumo Kirinyaga Kenya",
  },
  {
    label: "County Supermarket Kahawa West Branch - Kahawa West, Nairobi",
    query: "County Supermarket Kahawa West Nairobi Kenya",
  },
];

export default function Maps() {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    locations[selectedIndex].query,
  )}&output=embed`;

  return (
    <section className="flex flex-col md:flex-row w-full min-h-screen p-6 md:p-12 gap-10">
      {/* Locations */}
      <div className="md:w-1/2 w-full">
        <h2 className="text-2xl lg:text-3xl font-bold mb-8">Where We Are</h2>

        <form className="flex flex-col gap-3">
          {locations.map((location, index) => {
            const isActive = selectedIndex === index;

            return (
              <label
                key={location.query}
                className={`flex items-center gap-4 p-4 rounded-lg cursor-pointer transition
                  ${
                    isActive
                      ? "bg-blue-50 border-l-4 border-blue-600 shadow-sm"
                      : "bg-gray-50 hover:bg-gray-100"
                  }`}
              >
                <input
                  type="radio"
                  name="location"
                  checked={isActive}
                  onChange={() => setSelectedIndex(index)}
                  className="w-5 h-5 accent-blue-600 shrink-0"
                />
                <span className="text-sm md:text-base">{location.label}</span>
              </label>
            );
          })}
        </form>
      </div>

      {/* Map */}
      <div className="md:w-1/2 w-full h-96 md:h-auto rounded-xl overflow-hidden shadow-lg bg-white">
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
  );
}
