"use client";

import { GoogleAnalytics } from "@next/third-parties/google";
import { useEffect, useState } from "react";

const STORAGE_KEY = "county-cookie-preferences";

export default function GoogleAnalyticsWrapper() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);

    if (stored) {
      const prefs = JSON.parse(stored);

      if (prefs.analytics) {
        setEnabled(true);
      }
    }

    const listener = (event: Event) => {
      const customEvent = event as CustomEvent<{ analytics: boolean }>;

      setEnabled(customEvent.detail.analytics);
    };

    window.addEventListener("cookie-consent", listener);

    return () => window.removeEventListener("cookie-consent", listener);
  }, []);

  if (!enabled) return null;

  return <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!} />;
}
