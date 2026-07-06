"use client";

import { Heart, Target, TrendingUp, Users } from "lucide-react";
import { useState } from "react";
import { careersValues, jobRoles } from "../../data/careers";
import type { JobRole } from "../../types/careers";
import ApplicationModal from "./ApplicationModal";
import JobCard from "./JobCard";
import SuccessModal from "./SuccessModal";

const valueIcons = [TrendingUp, Users, Heart, Target];

export default function CareersExperience() {
  const [selectedJob, setSelectedJob] = useState<JobRole | null>(null);
  const [isApplicationOpen, setIsApplicationOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);

  const openSpecificApplication = (job: JobRole) => {
    setSelectedJob(job);
    setIsApplicationOpen(true);
  };

  const openGeneralApplication = () => {
    setSelectedJob(null);
    setIsApplicationOpen(true);
  };

  const closeApplication = () => {
    setIsApplicationOpen(false);
  };

  const completeApplication = () => {
    setIsApplicationOpen(false);
    setIsSuccessOpen(true);
  };

  return (
    <main>
      <section className="bg-blue-950 relative overflow-hidden py-24 sm:py-32 px-4 sm:px-6 md:px-16">
        <div
          aria-hidden
          className="absolute top-0 right-0 w-1/2 h-full bg-orange-500/10 pointer-events-none"
          style={{ clipPath: "polygon(35% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
        />
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
            {careersValues.map((value, index) => {
              const Icon = valueIcons[index];
              return (
                <div
                  key={value.title}
                  className="bg-gray-50 rounded-2xl p-7 border border-gray-100 hover:border-orange-200 hover:shadow-sm transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-blue-950 flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5 text-white" aria-hidden />
                  </div>
                  <h3 className="font-bold text-blue-950 text-base mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="roles" className="bg-gray-50 py-16 sm:py-20 px-4 sm:px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-orange-500 mb-3">
            Current Openings
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-950 mb-4">
            Open Roles
          </h2>
          <div className="w-12 h-1 bg-orange-500 mb-6" />

          <div className="mb-10 rounded-2xl border border-orange-100 bg-white p-5 text-sm text-gray-600 shadow-sm">
            <p className="font-semibold text-blue-950">Applications take less than two minutes.</p>
            <p className="mt-1">Simply choose a role, upload your CV, and submit your application online.</p>
            <p className="mt-3 text-xs font-semibold uppercase tracking-widest text-orange-500">
              Accepted formats: PDF, DOC, DOCX · Maximum size: 5 MB
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {jobRoles.map((role) => (
              <JobCard key={role.id} job={role} onApply={openSpecificApplication} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-950 py-14 px-4 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-orange-400 mb-3">
          Don&apos;t see your role?
        </p>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
          Send Us Your CV Anyway
        </h2>
        <p className="text-white/50 text-sm mb-8 max-w-md mx-auto leading-relaxed">
          We grow fast. If you believe in what we&apos;re building, send us your CV
          and we&apos;ll keep you in mind for new openings.
        </p>
        <button
          type="button"
          onClick={openGeneralApplication}
          className="inline-block bg-orange-500 hover:bg-orange-400 text-white font-semibold px-8 py-3 rounded-xl transition-colors"
        >
          Submit General Application
        </button>
      </section>

      <ApplicationModal
        open={isApplicationOpen}
        job={selectedJob}
        onClose={closeApplication}
        onSuccess={completeApplication}
      />
      <SuccessModal open={isSuccessOpen} onClose={() => setIsSuccessOpen(false)} />
    </main>
  );
}
