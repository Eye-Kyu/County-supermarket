"use client";

import { useState } from "react";
import { X } from "lucide-react";

const STORAGE_KEY = "county-announcement-v1";

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(() => {
    if (typeof window === "undefined") return false;
    return !localStorage.getItem(STORAGE_KEY);
  });

  const dismiss = () => {
    localStorage.setItem(STORAGE_KEY, "1");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="relative bg-blue-950 text-white text-sm py-2.5 px-4 text-center">
      <p className="pr-8">
        Our new <strong>Kenyatta Road</strong> branch is now open!{" "}
        <a
          href="https://maps.google.com/?q=County+Supermarket+Juja+Kenyatta+Road+Kiambu+Kenya"
          target="_blank"
          rel="noopener noreferrer"
          className="underline font-semibold hover:text-orange-300 transition-colors"
        >
          Find us on the map &rarr;
        </a>
      </p>
      <button
        onClick={dismiss}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors"
        aria-label="Dismiss announcement"
      >
        <X size={16} />
      </button>
    </div>
  );
}
