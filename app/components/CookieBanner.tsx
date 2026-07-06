"use client";

import { useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "county-cookies-v1";

export default function CookieBanner() {
  const [visible, setVisible] = useState(() => {
    if (typeof window === "undefined") return false;
    return !localStorage.getItem(STORAGE_KEY);
  });

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-5">
      <div className="max-w-4xl mx-auto bg-white/95 backdrop-blur border border-gray-200 rounded-2xl shadow-xl px-5 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-blue-950 mb-0.5">We use cookies</p>
          <p className="text-xs text-gray-500 leading-relaxed">
            We use cookies to improve your experience and analyse site traffic.{" "}
            <Link href="/Cookies" className="text-orange-500 underline hover:text-orange-600 transition-colors">
              Learn more
            </Link>
          </p>
        </div>
        <div className="flex gap-3 shrink-0">
          <Link
            href="/Cookies"
            className="text-xs font-semibold text-gray-500 hover:text-blue-950 transition-colors px-4 py-2.5 rounded-xl border border-gray-200 hover:border-gray-300"
          >
            Manage
          </Link>
          <button
            onClick={accept}
            className="text-xs font-semibold bg-orange-500 hover:bg-orange-400 text-white px-5 py-2.5 rounded-xl transition-colors"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}
