import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-800 text-gray-300 py-12 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">

        {/* Brand */}
        <div className="col-span-2 md:col-span-1">
          <h4 className="text-white text-base font-semibold mb-4">About Us</h4>
          <Image
            src="/global assets/Logo.png"
            alt="County Supermarket Logo"
            width={110}
            height={60}
            className="mb-3"
          />
          <p className="text-sm leading-relaxed text-gray-400">
            Your trusted one-stop shopping destination across central Kenya.
          </p>
        </div>

        {/* Quick Links */}
        <nav aria-label="Quick Links">
          <h4 className="text-white text-base font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            {[
              { href: "/", label: "Home" },
              { href: "/Services", label: "Services" },
              { href: "/Story", label: "Our Story" },
              { href: "/Contact", label: "Contact" },
            ].map(({ href, label }) => (
              <li key={label}>
                <Link href={href} className="hover:text-white transition-colors duration-200">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Company */}
        <nav aria-label="Company">
          <h4 className="text-white text-base font-semibold mb-4">Company</h4>
          <ul className="space-y-3 text-sm">
            {[
              { href: "/Story", label: "About Us" },
              { href: "/Story", label: "Our Timeline" },
              { href: "/Services", label: "Loyalty Program" },
            ].map(({ href, label }) => (
              <li key={label}>
                <Link href={href} className="hover:text-white transition-colors duration-200">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Socials & Contact */}
        <div>
          <h4 className="text-white text-base font-semibold mb-4">Connect</h4>
          <div className="flex gap-4 mb-6">
            {[
              { Icon: FaFacebookF, label: "Facebook" },
              { Icon: FaTwitter,   label: "Twitter"  },
              { Icon: FaInstagram, label: "Instagram" },
            ].map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-700 hover:bg-orange-500 transition-colors duration-200"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>

          <h4 className="text-white text-base font-semibold mb-2">Email</h4>
          <a
            href="mailto:info@countysupermarket.co.ke"
            className="text-sm hover:text-white transition-colors duration-200 break-all"
          >
            info@countysupermarket.co.ke
          </a>
        </div>
      </div>

      <div className="mt-10 pt-6 border-t border-gray-700 text-xs text-gray-500 text-center">
        &copy; {new Date().getFullYear()} County Supermarket. All rights reserved.
      </div>
    </footer>
  );
}
