"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const sections = [
  {
    id: "introduction",
    heading: "Introduction",
    body: `These Terms and Conditions govern your use of the County Supermarket website and your relationship with County Supermarket Limited ("County", "we", "us", or "our"). By accessing our website or shopping at any of our branches, you agree to be bound by these terms. Please read them carefully before using our services.

If you do not agree with any part of these terms, you should discontinue use of our website and services immediately. We reserve the right to update these terms at any time, and continued use following any change constitutes acceptance of the new terms.`,
  },
  {
    id: "use-of-site",
    heading: "Use of Our Website",
    body: `You may use our website for lawful purposes only. You must not use the site in any way that breaches any applicable local, national, or international law or regulation; that is fraudulent or has any fraudulent purpose or effect; to transmit any unsolicited or unauthorised advertising or promotional material; or to knowingly transmit any data that contains viruses, Trojan horses, or other malicious code.

We reserve the right to suspend or terminate your access to our website at any time without notice if we believe you have breached these terms.`,
  },
  {
    id: "products-pricing",
    heading: "Products & Pricing",
    body: `All products displayed on our website and in our stores are subject to availability. We make every effort to ensure that prices shown are accurate; however, we reserve the right to correct any errors and to change prices without prior notice.

Product images are for illustrative purposes only. The actual product may differ slightly in appearance. We do not warrant that all products will always be available. In the event that a product is unavailable after you have placed an order, we will contact you to offer a substitute or a full refund.`,
  },
  {
    id: "returns-refunds",
    heading: "Returns & Refunds",
    body: `Non-perishable items may be returned within 7 days of purchase provided they are unused, in their original packaging, and accompanied by a valid receipt. Perishable goods including fresh produce, bakery items, and deli products cannot be returned unless they are demonstrably defective or spoiled at the time of purchase.

Refunds will be issued in the same form as the original payment. M-Pesa refunds may take up to 3 business days to reflect. For items purchased online or via WhatsApp delivery, please contact us directly to arrange return logistics.`,
  },
  {
    id: "intellectual-property",
    heading: "Intellectual Property",
    body: `All content on this website — including but not limited to text, images, logos, graphics, and the overall design — is the property of County Supermarket Limited and is protected by Kenyan and international copyright and intellectual property laws.

You may not reproduce, distribute, modify, or create derivative works from any content on this site without our express written permission. The County Supermarket name, logo, and all associated marks are registered trademarks and may not be used without authorisation.`,
  },
  {
    id: "governing-law",
    heading: "Governing Law",
    body: `These Terms and Conditions are governed by and construed in accordance with the laws of the Republic of Kenya. Any disputes arising from or relating to these terms or your use of our services shall be subject to the exclusive jurisdiction of the courts of Kenya.

If any provision of these terms is found to be unenforceable, the remaining provisions will continue in full force and effect. Our failure to enforce any right under these terms shall not constitute a waiver of that right.

If you have questions about these terms, please contact us at info@countysupermarket.co.ke.`,
  },
];

export default function TermsPage() {
  const [activeId, setActiveId] = useState(sections[0].id);
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

  return (
    <main>
      {/* Header */}
      <section className="bg-blue-950 py-16 sm:py-20 px-4 sm:px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-orange-400 mb-4">
            Legal
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 leading-tight">
            Terms &amp; Conditions
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
            <div className="mt-8 pt-6 border-t border-gray-100 space-y-2">
              <Link href="/Cookies" className="block text-xs text-gray-400 hover:text-orange-500 transition-colors">
                Cookie Policy →
              </Link>
              <Link href="/Contact" className="block text-xs text-gray-400 hover:text-orange-500 transition-colors">
                Contact Us →
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
              </section>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
