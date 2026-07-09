"use client";

import { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaFacebookF } from "react-icons/fa";
import Button from "./Button";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;

    setLoading(true);
    setStatusMessage("");

    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      let data: { message?: string } = {};

      try {
        data = await response.json();
      } catch {
        // Ignore invalid JSON responses
      }

      if (!response.ok) {
        setStatusMessage(data.message ?? "Unable to send your message.");
        return;
      }

      form.reset();

      setStatusMessage(
        data.message ?? "Thank you. Your message has been sent successfully.",
      );
    } catch (error) {
      console.error("Contact Form Error:", error);
      setStatusMessage("An unexpected error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="w-full py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-16 bg-gray-200">
      {/* Header */}
      <div className="text-center mb-8 sm:mb-12">
        <div className="flex items-center justify-center gap-4 mb-4">
          <span className="w-6 h-0.5 bg-orange-500" />
          <p className="uppercase tracking-widest text-sm font-semibold">
            Talk To Us
          </p>
          <span className="w-6 h-0.5 bg-orange-500" />
        </div>

        <h2 className="text-center text-3xl md:text-4xl font-bold text-blue-950">
          LET&apos;S GET IN TOUCH
        </h2>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
        {/* FORM */}
        <form onSubmit={handleSubmit} className="lg:col-span-2 space-y-6">
          <div className="flex items-center gap-3">
            <span className="w-0.75 h-6 bg-orange-500" />
            <h3 className="font-bold text-lg">MESSAGE</h3>
          </div>

          {/* Name Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm mb-2">First Name</label>
              <input
                name="firstName"
                type="text"
                placeholder="First Name"
                className="w-full border border-blue-950 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div>
              <label className="block text-sm mb-2">Last Name</label>
              <input
                name="lastName"
                type="text"
                placeholder="Last Name"
                className="w-full border border-blue-950 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm mb-2">
              Email <span className="text-red-500">*</span>
            </label>

            <input
              name="email"
              type="email"
              required
              placeholder="Email Address"
              className="w-full border border-blue-950 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Subject */}
          <div>
            <label className="block text-sm mb-2">Subject</label>

            <input
              name="subject"
              type="text"
              placeholder="Subject"
              className="w-full border border-blue-950 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm mb-2">
              Your Message <span className="text-red-500">*</span>
            </label>

            <textarea
              name="message"
              required
              rows={5}
              placeholder="Your Message"
              className="w-full border border-blue-950 px-4 py-3 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <Button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Submit Form"}
          </Button>

          {statusMessage && (
            <p
              className={`text-sm font-medium ${
                statusMessage.toLowerCase().includes("sent")
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {statusMessage}
            </p>
          )}
        </form>

        {/* CONTACT INFO */}
        <div className="bg-gray-400 py-8 px-4 sm:px-6 lg:px-8 rounded-lg space-y-10">
          <div>
            <h3 className="font-bold text-base sm:text-lg tracking-wide mb-6">
              OUR CONTACT
            </h3>

            <div className="space-y-6">
              <div className="flex items-start sm:items-center gap-4">
                <div className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-blue-950 text-white shrink-0">
                  <FaEnvelope className="text-lg" />
                </div>

                <div>
                  <p className="text-orange-400 font-semibold text-xs sm:text-sm">
                    Email Address
                  </p>

                  <a
                    href="mailto:info@countysupermarkets.co.ke"
                    className="font-medium text-sm sm:text-base break-all hover:text-orange-500 transition-colors duration-200"
                  >
                    info@countysupermarkets.co.ke
                  </a>
                </div>
              </div>

              <div className="flex items-start sm:items-center gap-4">
                <div className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-blue-950 text-white shrink-0">
                  <FaPhoneAlt className="text-lg" />
                </div>

                <div>
                  <p className="text-orange-400 font-semibold text-xs sm:text-sm">
                    Call Us
                  </p>

                  <a
                    href="tel:+254722785022"
                    className="font-medium text-sm sm:text-base text-orange-100 hover:text-orange-300 transition-colors duration-200"
                  >
                    +254722785022
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-base sm:text-lg tracking-wide mb-6">
              SOCIAL MEDIA
            </h3>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://www.facebook.com/CountySupermarket"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="County Supermarket on Facebook"
                className="inline-flex w-9 h-9 items-center justify-center rounded-full bg-blue-900 text-white hover:bg-orange-500 transition-colors duration-200"
              >
                <FaFacebookF size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
