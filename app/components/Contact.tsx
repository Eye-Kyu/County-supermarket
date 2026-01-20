"use client";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section className="w-full py-20 px-6 md:px-16 bg-white">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="flex items-center justify-center gap-4 mb-4">
          <span className="w-6 h-[2px] bg-orange-500" />
          <p className="uppercase tracking-widest text-sm font-semibold">
            Talk To Us
          </p>
          <span className="w-6 h-[2px] bg-orange-500" />
        </div>

        <h2 className="text-3xl md:text-5xl font-extrabold tracking-wide">
          LET&apos;S GET IN TOUCH
        </h2>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
        {/* FORM */}
        <form className="lg:col-span-2 space-y-6">
          <div className="flex items-center gap-3">
            <span className="w-[3px] h-6 bg-orange-500" />
            <h3 className="font-bold text-lg">MESSAGE</h3>
          </div>

          {/* Name Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm mb-2">First Name</label>
              <input
                type="text"
                placeholder="First Name"
                className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <label className="block text-sm mb-2">Last Name</label>
              <input
                type="text"
                placeholder="Last Name"
                className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm mb-2">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Subject */}
          <div>
            <label className="block text-sm mb-2">Subject</label>
            <input
              type="text"
              placeholder="Subject"
              className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm mb-2">
              Your Message <span className="text-red-500">*</span>
            </label>
            <textarea
              rows={5}
              placeholder="Your Message"
              className="w-full border border-gray-300 px-4 py-3 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-semibold transition"
          >
            Submit Form
          </button>
        </form>

        {/* CONTACT INFO */}
        <div className="bg-gray-50 p-8 rounded-lg space-y-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-[3px] h-6 bg-orange-500" />
              <h3 className="font-bold text-lg">OUR CONTACT</h3>
            </div>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-orange-500 text-white">
                  <FaEnvelope />
                </div>
                <div>
                  <p className="text-orange-500 font-semibold text-sm">
                    Email Address
                  </p>
                  <p className="font-medium">info@countysupermarket.co.ke</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-orange-500 text-white">
                  <FaPhoneAlt />
                </div>
                <div>
                  <p className="text-orange-500 font-semibold text-sm">
                    Call Us
                  </p>
                  <p className="font-medium text-blue-600">0726 692210</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-[3px] h-6 bg-orange-500" />
              <h3 className="font-bold text-lg">SOCIAL MEDIA</h3>
            </div>

            <div className="flex gap-4">
              {[FaFacebookF, FaTwitter, FaInstagram].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow hover:bg-orange-500 hover:text-white transition"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
