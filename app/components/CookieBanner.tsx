"use client";

import { useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "county-cookie-preferences";

export default function CookieBanner() {
  const [visible, setVisible] = useState(() => {
    if (typeof window === "undefined") return false;

    return !localStorage.getItem(STORAGE_KEY);
  });

  const saveConsent = (analytics: boolean) => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        necessary: true,
        analytics,
      }),
    );

    window.dispatchEvent(
      new CustomEvent("cookie-consent", {
        detail: {
          analytics,
        },
      }),
    );

    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-5">
      <div className="max-w-5xl mx-auto bg-white/95 backdrop-blur border border-gray-200 rounded-2xl shadow-xl p-5">
        <div className="space-y-2">
          <h2 className="text-sm font-semibold text-blue-950">
            We use cookies
          </h2>

          <p className="text-sm text-gray-600 leading-relaxed">
            We use essential cookies to keep the website working and analytics
            cookies to understand how visitors use our website. You can change
            your preferences at any time.
          </p>

          <Link
            href="/Cookies"
            className="text-orange-500 hover:text-orange-600 underline text-sm"
          >
            Learn more
          </Link>
        </div>

        <div className="mt-5 flex flex-wrap justify-end gap-3">
          <button
            onClick={() => saveConsent(false)}
            className="px-4 py-2 rounded-xl border border-gray-300 text-sm font-medium hover:bg-gray-100 transition"
          >
            Reject Non-Essential
          </button>

          <button className="px-4 py-2 rounded-xl border border-blue-950 text-blue-950 text-sm font-medium hover:bg-blue-50 transition">
            Preferences
          </button>

          <button
            onClick={() => saveConsent(true)}
            className="px-5 py-2 rounded-xl bg-orange-500 hover:bg-orange-400 text-white text-sm font-semibold transition"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}
