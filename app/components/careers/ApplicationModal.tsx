"use client";

import { Briefcase, CalendarDays, MapPin, X } from "lucide-react";
import { useEffect, useRef } from "react";
import type { JobRole } from "../../types/careers";
import ApplicationForm from "./ApplicationForm";

type ApplicationModalProps = {
  open: boolean;
  job: JobRole | null;
  onClose: () => void;
  onSuccess: () => void;
};

const focusableSelector = "button, [href], input, textarea, select, [tabindex]:not([tabindex='-1'])";

export default function ApplicationModal({ open, job, onClose, onSuccess }: ApplicationModalProps) {
  const panelRef = useRef<HTMLDivElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const title = job?.title ?? "General Employment Application";

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();

      if (event.key !== "Tab" || !panelRef.current) return;

      const focusable = Array.from(panelRef.current.querySelectorAll<HTMLElement>(focusableSelector)).filter(
        (element) => !element.hasAttribute("disabled"),
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (!first || !last) return;

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[70] overflow-y-auto bg-blue-950/75 px-4 py-6 backdrop-blur-sm sm:py-10"
      role="dialog"
      aria-modal="true"
      aria-labelledby="application-title"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div ref={panelRef} className="mx-auto w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-200">
        <div className="sticky top-0 z-10 flex items-start justify-between gap-6 border-b border-gray-100 bg-white/95 px-5 py-5 backdrop-blur sm:px-7">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-orange-500">Careers Application</p>
            <h2 id="application-title" className="mt-2 text-2xl font-extrabold text-blue-950 sm:text-3xl">
              {title}
            </h2>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            className="rounded-full p-2 text-gray-500 transition-colors hover:bg-gray-100 hover:text-blue-950"
            aria-label="Close application modal"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="grid max-h-[calc(100dvh-7rem)] overflow-y-auto lg:grid-cols-[0.85fr_1.15fr]">
          <aside className="bg-gray-50 px-5 py-6 sm:px-7">
            <div className="rounded-2xl bg-blue-950 p-5 text-white">
              <p className="text-xs font-semibold uppercase tracking-widest text-orange-400">
                {job ? job.department : "Open Application"}
              </p>
              <h3 className="mt-3 text-xl font-bold">{title}</h3>
              <div className="mt-5 space-y-3 text-sm text-white/70">
                <p className="flex items-center gap-2"><MapPin className="h-4 w-4 text-orange-400" /> {job?.location ?? "Any Branch"}</p>
                <p className="flex items-center gap-2"><Briefcase className="h-4 w-4 text-orange-400" /> {job?.employmentType ?? "General Employment"}</p>
                <p className="flex items-center gap-2"><CalendarDays className="h-4 w-4 text-orange-400" /> {job?.closingDate ?? "Open"}</p>
              </div>
            </div>

            <div className="mt-6 space-y-6">
              <section>
                <h4 className="text-sm font-bold text-blue-950">Job Description</h4>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {job?.description ?? "Send us your CV and tell us where your experience could help County Supermarket serve customers better."}
                </p>
              </section>

              {job && (
                <>
                  <List title="Responsibilities" items={job.responsibilities} />
                  <List title="Qualifications" items={job.qualifications} />
                </>
              )}
            </div>
          </aside>

          <div className="px-5 py-6 sm:px-7">
            <ApplicationForm job={job} onCancel={onClose} onSuccess={onSuccess} />
          </div>
        </div>
      </div>
    </div>
  );
}

function List({ title, items }: { title: string; items: string[] }) {
  return (
    <section>
      <h4 className="text-sm font-bold text-blue-950">{title}</h4>
      <ul className="mt-2 space-y-2 text-sm leading-relaxed text-gray-600">
        {items.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
