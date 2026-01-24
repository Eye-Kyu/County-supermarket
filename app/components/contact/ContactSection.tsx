import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

export default function ContactSection() {
  return (
    <section className="min-h-screen bg-white px-6 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <span className="text-orange-500 tracking-widest">••••••</span>
          </div>

          <h2 className="text-4xl font-bold text-gray-900 mb-2">Contact Us</h2>

          <p className="text-gray-500">
            Have questions or need assistance? We are here to help.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* LEFT SIDE */}
          <div className="space-y-10">
            {/* Social Media */}
            <div>
              <p className="text-xs font-semibold tracking-widest text-gray-700 mb-4">
                [ SOCIAL MEDIA ]
              </p>

              <div className="flex items-center gap-4 text-gray-600">
                <FaFacebookF className="cursor-pointer hover:text-orange-500" />
                <FaTwitter className="cursor-pointer hover:text-orange-500" />
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <p className="text-xs font-semibold tracking-widest text-blue-950 mb-6">
                [ OUR CONTACT ]
              </p>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-orange-500 flex items-center justify-center text-white">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Address</p>
                    <p className="text-sm text-gray-500">
                      Kenol, Muranga, Kenya
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-orange-500 flex items-center justify-center text-white">
                    <FaPhoneAlt />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Call Us</p>
                    <p className="text-sm text-gray-500">0726 692210</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-orange-500 flex items-center justify-center text-white">
                    <FaEnvelope />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Email Address</p>
                    <p className="text-sm text-gray-500">
                      info@countysupermarket.co.ke
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE – FORM */}
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-600">First Name</label>
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-yellow-500"
                />
              </div>

              <div>
                <label className="text-sm text-gray-600">Last Name</label>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-yellow-500"
                />
              </div>
            </div>

            <div>
              <label className="text-sm text-gray-600">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-yellow-500"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">Subject</label>
              <input
                type="text"
                placeholder="Subject"
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-yellow-500"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">
                Your Message <span className="text-red-500">*</span>
              </label>
              <textarea
                rows={5}
                placeholder="Your Message"
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-yellow-500"
              />
            </div>

            <button
              type="submit"
              className="bg-blue-950/70 text-white px-6 py-2 rounded-md hover:bg-blue-950 transition"
            >
              Submit Form
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
