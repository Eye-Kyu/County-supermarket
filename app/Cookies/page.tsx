"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const STORAGE_KEY = "county-cookies-v1";

const sections = [
  {
    id: "what-are-cookies",
    heading: "What Are Cookies",
    body: `Cookies are small text files placed on your device when you visit a website. They are widely used to make websites work more efficiently and to provide information to website owners.

Cookies do not contain personal information such as your name or bank details, and they cannot be used to run programmes or deliver viruses to your device. They allow us to recognise your browser and help us provide a better browsing experience.`,
  },
  {
    id: "cookies-we-use",
    heading: "Cookies We Use",
    body: `We use the following categories of cookies on our website:

Essential Cookies — these are necessary for the website to function and cannot be switched off. They are usually only set in response to actions you take, such as setting your privacy preferences or filling in forms.

Analytics Cookies — these help us understand how visitors use our site, which pages are most popular, and where we can improve. We use this data in aggregate form only and it does not identify you personally.

Marketing Cookies — these may be set by our advertising partners to build a profile of your interests. They do not store directly personal information but work by uniquely identifying your browser and device.`,
  },
  {
    id: "managing-cookies",
    heading: "Managing Your Cookies",
    body: `You can control and manage cookies in a number of ways. Most browsers allow you to view, delete, and block cookies from websites. Please note that if you block all cookies, some parts of our site may not work correctly.

To change your cookie settings in your browser, please refer to the help documentation for your specific browser. You can also use the button below to reset your cookie preferences on this site.`,
  },
  {
    id: "third-party-cookies",
    heading: "Third-Party Cookies",
    body: `In some special cases we also use cookies provided by trusted third parties. This site uses Google Analytics, which is one of the most widespread and trusted analytics solutions on the web for helping us to understand how you use the site.

We may also use embedded content from social media platforms such as Facebook, which may set their own cookies. We have no direct control over third-party cookies, and we recommend you check the relevant third-party website for more information about the cookies they set.`,
  },
  {
    id: "contact-us",
    heading: "Contact Us",
    body: `If you have any questions about our use of cookies or our Cookie Policy, please contact us at:

County Supermarket Limited
Kenol, Murang'a, Kenya
Email: info@countysupermarket.co.ke
Phone: 0722 785 022

You can also visit our Contact page to send us a direct message and we will respond within 2 business days.`,
  },
];

export default function CookiesPage() {
  const [activeId, setActiveId] = useState(sections[0].id);
  const [resetDone, setResetDone] = useState(false);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );
    sectionRefs.current.forEach((el) => { if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  const resetPreferences = () => {
    localStorage.removeItem(STORAGE_KEY);
    setResetDone(true);
    setTimeout(() => setResetDone(false), 3000);
  };

  return (
    <main>
      {/* Header */}
      <section className="bg-blue-950 py-16 sm:py-20 px-4 sm:px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-orange-400 mb-4">
            Legal
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 leading-tight">
            Cookie Policy
          </h1>
          <div className="w-12 h-1 bg-orange-500 mb-5" />
          <p className="text-white/50 text-sm">
            Last updated: January 2025 &middot; County Supermarket Limited, Kenol, Murang&apos;a, Kenya
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-12">

          {/* Sticky ToC */}
          <nav aria-label="Table of contents" className="hidden lg:block sticky top-28 self-start">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
              Contents
            </p>
            <ul className="space-y-1">
              {sections.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className={`block text-sm py-1.5 px-3 rounded-lg transition-all duration-200 ${
                      activeId === s.id
                        ? "bg-orange-50 text-orange-600 font-semibold border-l-2 border-orange-500"
                        : "text-gray-500 hover:text-blue-950"
                    }`}
                  >
                    {s.heading}
                  </a>
                </li>
              ))}
            </ul>

            {/* Reset button */}
            <div className="mt-8 pt-6 border-t border-gray-100">
              <button
                onClick={resetPreferences}
                className="text-xs text-gray-400 hover:text-orange-500 transition-colors underline block mb-2"
              >
                {resetDone ? "✓ Preferences reset" : "Reset cookie preferences"}
              </button>
              <Link href="/Terms" className="block text-xs text-gray-400 hover:text-orange-500 transition-colors">
                Terms &amp; Conditions →
              </Link>
            </div>
          </nav>

          {/* Prose */}
          <div className="space-y-12 max-w-3xl">
            {sections.map((s, i) => (
              <section
                key={s.id}
                id={s.id}
                ref={(el: HTMLElement | null) => { sectionRefs.current[i] = el; }}
              >
                <h2 className="text-xl sm:text-2xl font-extrabold text-blue-950 mb-4">
                  {s.heading}
                </h2>
                <div className="w-8 h-0.5 bg-orange-500 mb-5" />
                {s.body.split("\n\n").map((para, pi) => (
                  <p key={pi} className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
                    {para}
                  </p>
                ))}
                {/* Inline reset button in the managing section */}
                {s.id === "managing-cookies" && (
                  <button
                    onClick={resetPreferences}
                    className="mt-2 inline-block bg-blue-950 hover:bg-blue-900 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors"
                  >
                    {resetDone ? "✓ Preferences reset" : "Reset My Cookie Preferences"}
                  </button>
                )}
              </section>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
