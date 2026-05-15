"use client";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import Button from "./Button";

export default function Contact() {
  return (
    <section className="w-full py-20 px-6 md:px-16 bg-gray-200 ">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="flex items-center justify-center gap-4 mb-4">
          <span className="w-6 h-[2px] bg-orange-500" />
          <p className="uppercase tracking-widest text-sm font-semibold">
            Talk To Us
          </p>
          <span className="w-6 h-[2px] bg-orange-500" />
        </div>

        <h2 className="text-center text-3xl md:text-4xl font-bold text-blue-950 mb-16">
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
                className="w-full border border-blue-950 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <label className="block text-sm mb-2">Last Name</label>
              <input
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
              type="email"
              placeholder="Email Address"
              className="w-full border border-blue-950 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Subject */}
          <div>
            <label className="block text-sm mb-2">Subject</label>
            <input
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
              rows={5}
              placeholder="Your Message"
              className="w-full border border-blue-950 px-4 py-3 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Button */}
          <Button type="submit">Submit Form</Button>
        </form>

        {/* CONTACT INFO */}
        <div className="bg-gray-400 py-8 px-4 sm:px-6 lg:px-8 rounded-lg space-y-10">
          {/* Contact Details */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-[3px] h-6 bg-orange-500" />
              <h3 className="font-bold text-base sm:text-lg tracking-wide">
                OUR CONTACT
              </h3>
            </div>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start sm:items-center gap-4">
                <div className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-blue-950 text-white shrink-0">
                  <FaEnvelope className="text-lg" />
                </div>
                <div>
                  <p className="text-orange-400 font-semibold text-xs sm:text-sm">
                    Email Address
                  </p>
                  <p className="font-medium text-sm sm:text-base break-all">
                    info@countysupermarket.co.ke
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start sm:items-center gap-4">
                <div className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-blue-950 text-white shrink-0">
                  <FaPhoneAlt className="text-lg" />
                </div>
                <div>
                  <p className="text-orange-400 font-semibold text-xs sm:text-sm">
                    Call Us
                  </p>
                  <p className="font-medium text-sm sm:text-base text-orange-100">
                    0726 692210
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-[3px] h-6 bg-orange-500" />
              <h3 className="font-bold text-base sm:text-lg tracking-wide">
                SOCIAL MEDIA
              </h3>
            </div>

            <div className="flex flex-wrap gap-4">
              {[FaFacebookF, FaTwitter, FaInstagram].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  aria-label="Social Media"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-blue-900 shadow-sm hover:bg-orange-500 hover:text-white transition-all duration-300"
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
