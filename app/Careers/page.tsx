import Link from "next/link";
import { TrendingUp, Users, Heart, Target } from "lucide-react";

const values = [
  {
    icon: TrendingUp,
    title: "Growth",
    desc: "We invest in our people. From cashier to store manager, every career path is possible and actively supported.",
  },
  {
    icon: Users,
    title: "Community",
    desc: "You're not just staff — you're a neighbour serving your neighbourhood. That connection matters to us.",
  },
  {
    icon: Heart,
    title: "Benefits",
    desc: "Staff discounts, meal allowances, and full cover under NHIF and NSSF from day one.",
  },
  {
    icon: Target,
    title: "Purpose",
    desc: "Work that matters. Every shift keeps a family's fridge full and their household budget intact.",
  },
];

const roles = [
  {
    title: "Store Manager",
    dept: "Operations",
    location: "Kahawa West, Nairobi",
    type: "Full-time",
  },
  {
    title: "Cashier",
    dept: "Customer Service",
    location: "Multiple Branches",
    type: "Full-time",
  },
  {
    title: "Bakery Supervisor",
    dept: "Food & Beverage",
    location: "Kenol, Murang'a",
    type: "Full-time",
  },
  {
    title: "Delivery Driver",
    dept: "Logistics",
    location: "Nairobi Metro",
    type: "Full-time",
  },
  {
    title: "Customer Service Representative",
    dept: "Customer Experience",
    location: "All Branches",
    type: "Full-time",
  },
  {
    title: "Stock Controller",
    dept: "Inventory",
    location: "Multiple Branches",
    type: "Full-time",
  },
];

export default function CareersPage() {
  return (
    <main>
      {/* ── Hero ───────────────────────────────────────────────────────────── */}
      <section className="bg-blue-950 relative overflow-hidden py-24 sm:py-32 px-4 sm:px-6 md:px-16">
        {/* Diagonal orange accent */}
        <div
          aria-hidden
          className="absolute top-0 right-0 w-1/2 h-full bg-orange-500/10 pointer-events-none"
          style={{ clipPath: "polygon(35% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
        />
        {/* Subtle dot grid */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-orange-400 mb-5">
            Join Our Team
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white mb-6 leading-none max-w-2xl">
            Grow With Us.
          </h1>
          <div className="w-12 h-1 bg-orange-500 mb-8" />
          <p className="text-white/65 text-base sm:text-lg max-w-xl leading-relaxed mb-10">
            County Supermarket is built on people. From our first shop in Kenol
            to six branches across Kenya, our team has always been our greatest
            asset. Join us and be part of something homegrown.
          </p>
          <a
            href="#roles"
            className="inline-block bg-orange-500 hover:bg-orange-400 text-white font-semibold px-8 py-4 rounded-xl transition-colors"
          >
            See Open Roles
          </a>
        </div>
      </section>

      {/* ── Why County ─────────────────────────────────────────────────────── */}
      <section className="bg-white py-16 sm:py-20 px-4 sm:px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-orange-500 mb-3">
            Why County
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-950 mb-4">
            More Than a Job
          </h2>
          <div className="w-12 h-1 bg-orange-500 mb-12" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className="bg-gray-50 rounded-2xl p-7 border border-gray-100 hover:border-orange-200 hover:shadow-sm transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-blue-950 flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-bold text-blue-950 text-base mb-2">{v.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Open Roles ─────────────────────────────────────────────────────── */}
      <section id="roles" className="bg-gray-50 py-16 sm:py-20 px-4 sm:px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-orange-500 mb-3">
            Current Openings
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-950 mb-4">
            Open Roles
          </h2>
          <div className="w-12 h-1 bg-orange-500 mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {roles.map((role) => (
              <div
                key={role.title}
                className="bg-white rounded-2xl p-6 border-l-4 border-l-orange-500 border border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:shadow-md transition-shadow"
              >
                <div>
                  <h3 className="font-bold text-blue-950 text-base mb-2">{role.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gray-100 text-gray-600 text-xs px-2.5 py-1 rounded-full">
                      {role.dept}
                    </span>
                    <span className="bg-gray-100 text-gray-600 text-xs px-2.5 py-1 rounded-full">
                      {role.location}
                    </span>
                    <span className="bg-orange-50 text-orange-600 text-xs px-2.5 py-1 rounded-full font-semibold">
                      {role.type}
                    </span>
                  </div>
                </div>
                <Link
                  href="/Contact"
                  className="shrink-0 bg-orange-500 hover:bg-orange-400 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors text-center"
                >
                  Apply
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── No role strip ──────────────────────────────────────────────────── */}
      <section className="bg-blue-950 py-14 px-4 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-orange-400 mb-3">
          Don&apos;t see your role?
        </p>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
          Send Us Your CV Anyway
        </h2>
        <p className="text-white/50 text-sm mb-8 max-w-md mx-auto leading-relaxed">
          We grow fast. If you believe in what we&apos;re building, reach out
          and we&apos;ll keep you in mind for new openings.
        </p>
        <Link
          href="/Contact"
          className="inline-block bg-orange-500 hover:bg-orange-400 text-white font-semibold px-8 py-3 rounded-xl transition-colors"
        >
          Get in Touch
        </Link>
      </section>
    </main>
  );
}
