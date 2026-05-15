"use client";

import { useState } from "react";

export default function NewsletterStrip() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <section className="bg-blue-950 py-16 px-6 md:px-16">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <p className="text-orange-400 uppercase tracking-widest text-sm font-semibold">
          Join the County Family
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Exclusive deals straight to your inbox
        </h2>

        <p className="text-gray-300 text-sm md:text-base max-w-xl mx-auto">
          Sign up and be the first to know about weekly specials, new branch
          openings, and loyalty rewards.
        </p>

        {submitted ? (
          <p className="text-green-400 font-semibold text-lg py-3">
            ✓ You&apos;re on the list! Welcome to the County family.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="flex-1 px-4 py-3 rounded-xl text-black focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-400 text-white font-semibold px-6 py-3 rounded-xl transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
