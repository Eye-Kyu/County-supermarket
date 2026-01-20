import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-800 text-gray-300 py-10 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto flex flex-wrap gap-10 justify-between">
        {/* About Us */}
        <section className="flex-1 min-w-[280px] max-w-md">
          <h4 className="text-white text-xl font-semibold mb-4">About Us</h4>
          <p className="leading-relaxed">
            County Supermarket is a beloved local Kenyan chain with a presence
            in central Kenya. Operating for over 15 years, this homegrown gem
            has expanded to 6 branches, catering to multiple counties.
          </p>
        </section>

        {/* Quick Links */}
        <nav aria-label="Quick Links" className="flex-1 min-w-[160px] max-w-xs">
          <h4 className="text-white text-xl font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-3">
            {[
              { href: "#", label: "Home" },
              { href: "#services", label: "Services" },
              { href: "#about", label: "About" },
              { href: "#gallery", label: "Gallery" },
            ].map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="hover:text-white transition-colors duration-200"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Socials and Contact */}
        <section className="flex-1 min-w-[200px] max-w-xs">
          <h4 className="text-white text-xl font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-6 mb-6 text-gray-300">
            <a
              href="#"
              aria-label="Facebook"
              className="hover:text-white transition-colors duration-200"
            >
              <FaFacebookF size={24} />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="hover:text-white transition-colors duration-200"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="hover:text-white transition-colors duration-200"
            >
              <FaInstagram size={24} />
            </a>
          </div>

          <div>
            <h4 className="text-white text-xl font-semibold mb-2">Email Us</h4>
            <a
              href="mailto:info@countysupermarket.co.ke"
              className="block hover:text-white transition-colors duration-200"
            >
              info@countysupermarket.co.ke
            </a>
          </div>
        </section>
      </div>

      <div className="mt-12 border-t border-gray-700 pt-6 text-sm text-gray-500 text-center">
        &copy; {new Date().getFullYear()} County Supermarket. All rights
        reserved.
      </div>
    </footer>
  );
}
