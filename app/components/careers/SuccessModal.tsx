"use client";

import { CheckCircle2 } from "lucide-react";
import { useEffect, useRef } from "react";

type SuccessModalProps = {
  open: boolean;
  onClose: () => void;
};

export default function SuccessModal({ open, onClose }: SuccessModalProps) {
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!open) return;
    buttonRef.current?.focus();
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center bg-blue-950/70 px-4 backdrop-blur-sm" role="dialog" aria-modal="true" aria-labelledby="success-title">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 text-center shadow-2xl animate-in fade-in zoom-in-95 duration-200">
        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-orange-50 text-orange-500">
          <CheckCircle2 className="h-9 w-9" aria-hidden />
        </div>
        <h2 id="success-title" className="text-2xl font-extrabold text-blue-950">
          Application Submitted
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-gray-600">
          Thank you for applying. We&apos;ve received your application successfully. If your qualifications match the role, our HR team will contact you.
        </p>
        <button
          ref={buttonRef}
          type="button"
          onClick={onClose}
          className="mt-7 rounded-xl bg-orange-500 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-400"
        >
          Done
        </button>
      </div>
    </div>
  );
}
