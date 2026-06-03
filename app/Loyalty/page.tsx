"use client";

import { useState } from "react";
import Link from "next/link";
import { Gift, Star, Truck, Tag, Cake, Zap } from "lucide-react";

const benefits = [
  { icon: Tag,   text: "5% off every shop above KES 2,000"                                },
  { icon: Cake,  text: "Double points during your birthday month"                          },
  { icon: Zap,   text: "Early access to weekly specials and flash sales"                   },
  { icon: Truck, text: "Reduced free-delivery threshold from KES 1,500 to KES 800"        },
  { icon: Gift,  text: "Exclusive member-only gift bundles at Christmas and Easter"        },
  { icon: Star,  text: "Priority service at the deli and bakery counters"                 },
];

const steps = [
  {
    number: "01",
    title: "Shop",
    desc: "Buy anything at any County branch or via WhatsApp delivery. Every purchase counts, no minimum spend.",
  },
  {
    number: "02",
    title: "Earn",
    desc: "Collect 1 point for every KES 100 spent. Points land on your account automatically at checkout.",
  },
  {
    number: "03",
    title: "Redeem",
    desc: "Cash in points for discounts, free items, or donate them to a local school of your choice.",
  },
];

export default function LoyaltyPage() {
  const [email, setEmail] = useState("");
  const [joined, setJoined] = useState(false);

  return (
    <main>
      {/* ── Hero ───────────────────────────────────────────────────────────── */}
      <section className="bg-blue-950 pt-20 pb-32 px-4 sm:px-6 md:px-16 overflow-hidden relative">
        {/* Decorative oversized stroke text */}
        <div
          aria-hidden
          className="absolute -top-4 right-0 text-[120px] sm:text-[180px] lg:text-[220px] font-extrabold leading-none select-none pointer-events-none hidden sm:block"
          style={{ WebkitTextStroke: "2px rgba(249,115,22,0.15)", color: "transparent" }}
        >
          REWARDS
        </div>

        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-orange-400 mb-5">
              County Loyalty Programme
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-none mb-6">
              Shop More.<br />Save More.<br />
              <span className="text-orange-500">Live Better.</span>
            </h1>
            <p className="text-white/65 text-base sm:text-lg max-w-lg mb-10 leading-relaxed">
              Join thousands of County families earning rewards with every shop.
              Free to join. Instant benefits. Points never expire in your first year.
            </p>
            <a
              href="#join"
              className="inline-block bg-orange-500 hover:bg-orange-400 text-white font-semibold px-8 py-4 rounded-xl transition-colors text-base"
            >
              Join Free Today
            </a>
          </div>

          {/* Hero stat pills */}
          <div className="grid grid-cols-2 gap-4 lg:justify-items-end">
            {[
              { value: "80K+",  label: "Active Members"       },
              { value: "Free",  label: "To Join"              },
              { value: "1 pt",  label: "Per KES 100 Spent"    },
              { value: "6",     label: "Branches Participating" },
            ].map((s) => (
              <div
                key={s.label}
                className="bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-center"
              >
                <p className="text-3xl font-extrabold text-orange-400 mb-1">{s.value}</p>
                <p className="text-white/50 text-xs uppercase tracking-widest">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ──────────────────────────────────────────────────── */}
      <section className="bg-gray-50 py-16 sm:py-20 px-4 sm:px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-orange-500 mb-3">
            Simple by design
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-950 mb-4">How It Works</h2>
          <div className="w-12 h-1 bg-orange-500 mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((step) => (
              <div
                key={step.number}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 relative overflow-hidden group hover:border-orange-200 transition-colors"
              >
                <div
                  aria-hidden
                  className="absolute -top-5 -right-2 text-8xl font-extrabold leading-none select-none transition-all duration-500 group-hover:opacity-20"
                  style={{ WebkitTextStroke: "2px rgba(249,115,22,0.1)", color: "transparent" }}
                >
                  {step.number}
                </div>
                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-blue-950 flex items-center justify-center text-white font-bold text-sm mb-5">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-extrabold text-blue-950 mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CSS Membership Card + Benefits ─────────────────────────────────── */}
      <section className="bg-white py-16 sm:py-20 px-4 sm:px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Membership card */}
          <div className="flex justify-center">
            <div
              className="relative w-full max-w-sm rounded-2xl overflow-hidden shadow-2xl"
              style={{
                aspectRatio: "1.586",
                background: "linear-gradient(135deg, #0c1a3a 0%, #1e3a8a 55%, #c2410c 100%)",
              }}
            >
              {/* Diagonal stripe overlay */}
              <div
                className="absolute inset-0 opacity-[0.07]"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(45deg, transparent, transparent 18px, rgba(255,255,255,0.4) 18px, rgba(255,255,255,0.4) 19px)",
                }}
              />
              <div className="relative z-10 h-full flex flex-col justify-between p-7">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-white/50 text-xs uppercase tracking-widest">County Supermarket</p>
                    <p className="text-white font-extrabold text-lg mt-0.5">MEMBER CARD</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-orange-500/30 flex items-center justify-center">
                    <Star className="w-5 h-5 text-orange-300" />
                  </div>
                </div>
                <div>
                  <div className="flex gap-3 mb-4">
                    {["● ● ● ●", "● ● ● ●", "● ● ● ●", "1234"].map((g, i) => (
                      <span key={i} className="text-white/70 font-mono text-xs tracking-widest">{g}</span>
                    ))}
                  </div>
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-white/40 text-xs uppercase tracking-widest mb-0.5">Member Since</p>
                      <p className="text-white font-semibold text-sm">2025</p>
                    </div>
                    <div className="text-right">
                      <p className="text-white/40 text-xs uppercase tracking-widest mb-0.5">Points Balance</p>
                      <p className="text-orange-400 font-extrabold text-xl">1,240 pts</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-orange-500 mb-3">
              Member benefits
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-950 mb-4">
              Your Rewards, Your Way
            </h2>
            <div className="w-12 h-1 bg-orange-500 mb-8" />
            <ul className="space-y-4">
              {benefits.map((b) => {
                const Icon = b.icon;
                return (
                  <li key={b.text} className="flex items-start gap-4">
                    <div className="shrink-0 w-9 h-9 rounded-lg bg-orange-50 flex items-center justify-center mt-0.5">
                      <Icon className="w-4 h-4 text-orange-500" />
                    </div>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed">{b.text}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Sign-up strip ──────────────────────────────────────────────────── */}
      <section id="join" className="bg-blue-950 py-16 sm:py-20 px-4 sm:px-6 md:px-16">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-orange-400 mb-4">
            Join today — it&apos;s free
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Start Earning Rewards
          </h2>
          <p className="text-white/50 text-sm sm:text-base mb-8 max-w-md mx-auto leading-relaxed">
            Sign up with your email or visit any branch to collect your physical member card.
          </p>
          {joined ? (
            <p className="text-green-400 font-semibold text-lg py-4">
              ✓ You&apos;re on the list! Welcome to the County family.
            </p>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); if (email) setJoined(true); }}
              className="flex flex-col sm:flex-row gap-3 justify-center"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="flex-1 px-4 py-3 rounded-xl text-black focus:outline-none focus:ring-2 focus:ring-orange-400 max-w-sm"
              />
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-400 text-white font-semibold px-6 py-3 rounded-xl transition-colors whitespace-nowrap"
              >
                Join Free
              </button>
            </form>
          )}
          <p className="text-white/30 text-xs mt-6">
            Or ask for a card at the customer service desk at any of our 6 branches.
          </p>
        </div>
      </section>
    </main>
  );
}
