import {
  FaFacebookF,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import Button from "../Button";

export default function ContactSection() {
  return (
    <section className="bg-gray-200 py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-16">
      {/* Header */}
      <div className="text-center mb-8 sm:mb-12 max-w-7xl mx-auto">
        <div className="flex items-center justify-center gap-4 mb-4">
          <span className="w-6 h-0.5 bg-orange-500" />
          <p className="uppercase tracking-widest text-sm font-semibold">
            Talk To Us
          </p>
          <span className="w-6 h-0.5 bg-orange-500" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-blue-950">
          LET&apos;S GET IN TOUCH
        </h2>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">

        {/* FORM */}
        <form className="lg:col-span-2 space-y-6">
          <h3 className="font-bold text-lg">MESSAGE</h3>

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

          <div>
            <label className="block text-sm mb-2">Subject</label>
            <input
              type="text"
              placeholder="Subject"
              className="w-full border border-blue-950 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

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

          <Button type="submit">Submit Form</Button>
        </form>

        {/* CONTACT INFO SIDEBAR */}
        <div className="bg-gray-400 py-8 px-4 sm:px-6 rounded-lg space-y-10">

          {/* Contact Details */}
          <div>
            <h3 className="font-bold text-base sm:text-lg tracking-wide mb-6">
              OUR CONTACT
            </h3>

            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 flex items-center justify-center rounded-full bg-blue-950 text-white shrink-0">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <p className="text-orange-400 font-semibold text-xs sm:text-sm">Address</p>
                  <p className="font-medium text-sm sm:text-base">Kenol, Muranga, Kenya</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start sm:items-center gap-4">
                <div className="w-11 h-11 flex items-center justify-center rounded-full bg-blue-950 text-white shrink-0">
                  <FaPhoneAlt />
                </div>
                <div>
                  <p className="text-orange-400 font-semibold text-xs sm:text-sm">Call Us</p>
                  <p className="font-medium text-sm sm:text-base text-orange-100">0722785022</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start sm:items-center gap-4">
                <div className="w-11 h-11 flex items-center justify-center rounded-full bg-blue-950 text-white shrink-0">
                  <FaEnvelope />
                </div>
                <div>
                  <p className="text-orange-400 font-semibold text-xs sm:text-sm">Email Address</p>
                  <p className="font-medium text-sm sm:text-base break-all">
                    info@countysupermarket.co.ke
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media */}
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
