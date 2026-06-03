"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

const categories = ["Shopping", "Delivery", "Returns", "Loyalty", "Branches"] as const;
type Category = (typeof categories)[number];

const faqs: { category: Category; q: string; a: string }[] = [
  // Shopping
  {
    category: "Shopping",
    q: "What payment methods do you accept?",
    a: "We accept cash, M-Pesa, Visa, and Mastercard at all branches. WhatsApp orders require M-Pesa payment before dispatch.",
  },
  {
    category: "Shopping",
    q: "Do you have a butchery, bakery, and deli?",
    a: "Yes — all branches have a fully stocked butchery and in-house bakery. Our Kenol head office also features the full Kukuriko deli serving hot meals daily.",
  },
  {
    category: "Shopping",
    q: "What brands do you carry?",
    a: "We stock all major Kenyan FMCG brands including Unga, Bidco, Ketepa, and Brookside, alongside hundreds of local and regional producers.",
  },
  {
    category: "Shopping",
    q: "Do you offer gift wrapping?",
    a: "Complimentary gift wrapping is available at the customer service desk at all branches for any purchase.",
  },
  // Delivery
  {
    category: "Delivery",
    q: "Which areas do you deliver to?",
    a: "We deliver within a 15 km radius of each branch. Place a WhatsApp order with your nearest branch and we'll confirm whether your location is covered.",
  },
  {
    category: "Delivery",
    q: "How long does delivery take?",
    a: "Standard delivery is within 2–4 hours of confirmation during business hours. Orders placed before 3 PM qualify for same-day delivery.",
  },
  {
    category: "Delivery",
    q: "What is the minimum order for delivery?",
    a: "The standard minimum is KES 1,500. County Loyalty members enjoy a reduced minimum of KES 800.",
  },
  {
    category: "Delivery",
    q: "How do I place a WhatsApp order?",
    a: "Save the number of your nearest branch, send us a message with your order and delivery address, and we'll confirm availability and payment.",
  },
  // Returns
  {
    category: "Returns",
    q: "What is your return policy?",
    a: "Non-perishable items can be returned within 7 days of purchase, unused and in original packaging, with a valid receipt.",
  },
  {
    category: "Returns",
    q: "How do I initiate a return?",
    a: "Bring the item and receipt to the customer service desk at any branch. For delivery purchases, message us on WhatsApp and we'll arrange collection or drop-off.",
  },
  {
    category: "Returns",
    q: "Can I exchange a product instead of returning it?",
    a: "Yes — exchanges for the same item or equivalent value are always available at any customer service desk.",
  },
  // Loyalty
  {
    category: "Loyalty",
    q: "How do I join the loyalty programme?",
    a: "Visit any branch and pick up a County Member Card from the service desk, or sign up online on our Loyalty page. Membership is completely free.",
  },
  {
    category: "Loyalty",
    q: "How are points calculated?",
    a: "You earn 1 point for every KES 100 spent. Points are credited to your account automatically at checkout — no scanning or codes needed.",
  },
  {
    category: "Loyalty",
    q: "When do loyalty points expire?",
    a: "Points are valid for 12 months from the date earned. Members who shop at least once every 6 months keep their points active indefinitely.",
  },
  {
    category: "Loyalty",
    q: "How do I redeem points?",
    a: "Points can be redeemed at any branch. Mention your card number at checkout and our team will apply the discount. Minimum redemption is 100 points.",
  },
  // Branches
  {
    category: "Branches",
    q: "What are your opening hours?",
    a: "Most branches are open Mon–Sat 7:00 AM – 9:00 PM and Sun 8:00 AM – 8:00 PM. Kahawa West and Juja stay open until 10:00 PM on weekdays.",
  },
  {
    category: "Branches",
    q: "Do all branches stock the same products?",
    a: "Core grocery and household lines are available everywhere. Specialist departments like the full Kukuriko deli and electronics range are at selected locations.",
  },
  {
    category: "Branches",
    q: "Is there parking at your branches?",
    a: "Yes — all County branches have secure on-site parking at no charge to customers.",
  },
];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("Shopping");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const filtered = faqs.filter((f) => f.category === activeCategory);

  return (
    <main>
      {/* Hero */}
      <section className="bg-gray-50 py-16 sm:py-20 px-4 sm:px-6 md:px-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-orange-500 mb-3">
            Support
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-950 mb-4 leading-tight">
            Frequently Asked<br className="hidden sm:block" /> Questions
          </h1>
          <div className="w-12 h-1 bg-orange-500 mb-5" />
          <p className="text-gray-600 text-sm sm:text-base max-w-xl leading-relaxed">
            Everything you need to know about shopping, delivery, and our loyalty
            programme. Can&apos;t find your answer?{" "}
            <Link href="/Contact" className="text-orange-500 underline hover:text-orange-600 transition-colors">
              Contact us directly.
            </Link>
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-10">

          {/* Category sidebar */}
          <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 lg:sticky lg:top-28 lg:self-start">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => { setActiveCategory(cat); setOpenIndex(0); }}
                className={`shrink-0 text-left px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-blue-950 text-white shadow-sm"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Accordion */}
          <div className="space-y-3">
            {filtered.map((faq, i) => (
              <div
                key={faq.q}
                className="border border-gray-200 rounded-2xl overflow-hidden transition-shadow hover:shadow-sm"
              >
                <button
                  className="w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-5 text-left hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                >
                  <div className="flex items-center gap-4">
                    <span
                      aria-hidden
                      className="text-2xl font-extrabold leading-none font-mono w-8 shrink-0 select-none"
                      style={{ color: "rgba(249,115,22,0.2)" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-semibold text-blue-950 text-sm sm:text-base">
                      {faq.q}
                    </span>
                  </div>
                  <ChevronDown
                    className={`shrink-0 w-5 h-5 text-gray-400 transition-transform duration-300 ${
                      openIndex === i ? "rotate-180 text-orange-500" : ""
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === i ? "max-h-60" : "max-h-0"
                  }`}
                >
                  <div className="px-5 sm:px-6 pb-5 sm:pl-[4.5rem]">
                    <div className="h-px bg-gray-100 mb-4" />
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="bg-blue-950 py-14 px-4 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-orange-400 mb-3">
          Still have questions?
        </p>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
          We&apos;re Here to Help
        </h2>
        <p className="text-white/50 text-sm mb-8 max-w-sm mx-auto">
          Our customer service team is available in-store and via WhatsApp during business hours.
        </p>
        <Link
          href="/Contact"
          className="inline-block bg-orange-500 hover:bg-orange-400 text-white font-semibold px-8 py-3 rounded-xl transition-colors"
        >
          Contact Us
        </Link>
      </section>
    </main>
  );
}
