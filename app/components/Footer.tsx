import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-blue-950 text-blue-200/70">
      <div className="h-0.5 w-full bg-orange-400" />

      <div className="max-w-7xl mx-auto py-12 px-6 sm:px-12 grid grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="col-span-2 lg:col-span-1">
          <Image
            src="/global assets/Logo.png"
            alt="County Supermarket Logo"
            width={110}
            height={60}
            className="mb-4"
          />
          <p className="text-sm leading-relaxed">
            Your trusted one-stop shopping destination across central Kenya.
          </p>
          <p className="text-xs text-blue-200/40 mt-2">
            Kenol, Muranga &middot; Central Kenya
          </p>
        </div>

        {/* Quick Links */}
        <nav aria-label="Quick Links">
          <h4 className="text-orange-400 text-xs font-semibold uppercase tracking-widest mb-5">
            Quick Links
          </h4>
          <ul className="space-y-3 text-sm">
            {[
              { href: "/", label: "Home" },
              { href: "/Story", label: "Our Story" },
              { href: "/Services", label: "Services" },
              { href: "/Loyalty", label: "Loyalty" },
              { href: "/FAQ", label: "FAQ" },
              { href: "/Contact", label: "Contact" },
            ].map(({ href, label }) => (
              <li key={label}>
                <Link
                  href={href}
                  className="hover:text-orange-400 transition-colors duration-200"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Company */}
        <nav aria-label="Company">
          <h4 className="text-orange-400 text-xs font-semibold uppercase tracking-widest mb-5">
            Company
          </h4>
          <ul className="space-y-3 text-sm">
            {[
              { href: "/Story", label: "About Us" },
              { href: "/Careers", label: "Careers" },
              { href: "/Terms", label: "Terms & Conditions" },
              { href: "/Cookies", label: "Cookie Policy" },
            ].map(({ href, label }) => (
              <li key={label}>
                <Link
                  href={href}
                  className="hover:text-orange-400 transition-colors duration-200"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Connect */}
        <div>
          <h4 className="text-orange-400 text-xs font-semibold uppercase tracking-widest mb-5">
            Connect
          </h4>

          <a
            href="https://www.facebook.com/profile.php?id=100048065005565"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="County Supermarket on Facebook"
            className="inline-flex w-9 h-9 items-center justify-center rounded-full bg-blue-900 hover:bg-orange-500 transition-colors duration-200"
          >
            <FaFacebookF size={14} />
          </a>

          <div className="flex items-start gap-3 mt-6">
            <FaEnvelope className="text-orange-400 shrink-0 mt-0.5" size={13} />
            <a
              href="mailto:info@countysupermarket.co.ke"
              className="text-sm hover:text-orange-400 transition-colors duration-200 break-all"
            >
              info@countysupermarkets.co.ke
            </a>
          </div>

          <div className="flex items-center gap-3 mt-3">
            <FaPhoneAlt className="text-orange-400 shrink-0" size={13} />
            <a
              href="tel:+254722785022"
              className="text-sm hover:text-orange-400 transition-colors duration-200"
            >
              <span className="text-sm">+254 722 785 022</span>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-blue-900 py-5 px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-blue-200/40">
        <span>
          &copy; {new Date().getFullYear()} County Supermarket. All rights
          reserved.
        </span>
        <div className="flex gap-4">
          <Link
            href="/Terms"
            className="hover:text-orange-400 transition-colors"
          >
            Terms
          </Link>
          <Link
            href="/Cookies"
            className="hover:text-orange-400 transition-colors"
          >
            Cookies
          </Link>
          <Link
            href="/Careers"
            className="hover:text-orange-400 transition-colors"
          >
            Careers
          </Link>
        </div>
      </div>
    </footer>
  );
}
