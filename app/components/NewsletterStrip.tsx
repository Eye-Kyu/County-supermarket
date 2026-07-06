"use client";

import { useState } from "react";

export default function NewsletterStrip() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email.trim()) return;

    setLoading(true);
    setStatusMessage("");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email.trim(),
        }),
      });

      let data: { message?: string } = {};

      try {
        data = await response.json();
      } catch {
        // Ignore invalid JSON responses
      }

      if (!response.ok) {
        setStatusMessage(data.message ?? "Unable to subscribe.");
        return;
      }

      setSubmitted(true);
      setEmail("");

      setStatusMessage(
        data.message ?? "You're on the list! Welcome to the County family.",
      );
    } catch (error) {
      console.error("Newsletter Error:", error);
      setStatusMessage("An unexpected error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
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
            ✓ {statusMessage}
          </p>
        ) : (
          <>
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
                disabled={loading}
                className="flex-1 px-4 py-3 rounded-xl text-black focus:outline-none focus:ring-2 focus:ring-orange-400 disabled:opacity-70"
              />

              <button
                type="submit"
                disabled={loading}
                className="bg-orange-500 hover:bg-orange-400 disabled:bg-orange-300 disabled:cursor-not-allowed text-white font-semibold px-6 py-3 rounded-xl transition-colors whitespace-nowrap"
              >
                {loading ? "Subscribing..." : "Subscribe"}
              </button>
            </form>

            {statusMessage && (
              <p className="text-red-400 text-sm font-medium">
                {statusMessage}
              </p>
            )}
          </>
        )}
      </div>
    </section>
  );
}
