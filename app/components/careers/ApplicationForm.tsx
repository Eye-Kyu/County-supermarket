"use client";

import type { ChangeEvent, FormEvent } from "react";
import { useMemo, useState } from "react";
import type { ApplicationValues, JobRole } from "../../types/careers";
import { submitCareerApplication } from "../../utils/careersApi";
import { hasErrors, validateApplication } from "../../utils/validators";
import FileUploader from "./FileUploader";
import LoadingButton from "./LoadingButton";
import ValidationMessage from "./ValidationMessage";

const initialValues: ApplicationValues = {
  fullName: "",
  email: "",
  phone: "",
  currentLocation: "",
  linkedIn: "",
  portfolio: "",
  coverLetter: "",
  consent: false,
  cv: null,
  certificates: null,
};

type ApplicationFormProps = {
  job: JobRole | null;
  onCancel: () => void;
  onSuccess: () => void;
};

type TextField = keyof Pick<
  ApplicationValues,
  "fullName" | "email" | "phone" | "currentLocation" | "linkedIn" | "portfolio" | "coverLetter"
>;

export default function ApplicationForm({ job, onCancel, onSuccess }: ApplicationFormProps) {
  const [values, setValues] = useState<ApplicationValues>(initialValues);
  const [touched, setTouched] = useState<Partial<Record<keyof ApplicationValues, boolean>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerError] = useState("");

  const errors = useMemo(() => validateApplication(values), [values]);
  const isValid = !hasErrors(errors);

  const visibleError = (field: keyof ApplicationValues): string | undefined => {
    return touched[field] ? errors[field] : undefined;
  };

  const updateTextField = (field: TextField) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues((current) => ({ ...current, [field]: event.target.value }));
    setTouched((current) => ({ ...current, [field]: true }));
    setServerError("");
  };

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTouched({ fullName: true, email: true, phone: true, cv: true, certificates: true, consent: true });

    if (!isValid) return;

    setIsSubmitting(true);
    setServerError("");

    const result = await submitCareerApplication(values, job);

    setIsSubmitting(false);

    if (result.ok) {
      onSuccess();
      setValues(initialValues);
      setTouched({});
      return;
    }

    setServerError(result.message);
  };

  return (
    <form onSubmit={submit} className="space-y-6">
      <fieldset disabled={isSubmitting} className="space-y-6 disabled:opacity-70">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Field
            label="Full Name"
            required
            value={values.fullName}
            error={visibleError("fullName")}
            onChange={updateTextField("fullName")}
          />
          <Field
            label="Email Address"
            required
            type="email"
            value={values.email}
            error={visibleError("email")}
            onChange={updateTextField("email")}
          />
          <Field
            label="Phone Number"
            required
            type="tel"
            value={values.phone}
            error={visibleError("phone")}
            onChange={updateTextField("phone")}
          />
          <Field
            label="Current Location"
            value={values.currentLocation}
            onChange={updateTextField("currentLocation")}
          />
          <Field
            label="LinkedIn Profile"
            type="url"
            value={values.linkedIn}
            onChange={updateTextField("linkedIn")}
          />
          <Field
            label="Portfolio Website"
            type="url"
            value={values.portfolio}
            onChange={updateTextField("portfolio")}
          />
        </div>

        <div>
          <label htmlFor="cover-letter" className="block text-sm font-medium text-gray-700">
            Cover Letter
          </label>
          <textarea
            id="cover-letter"
            rows={5}
            value={values.coverLetter}
            onChange={updateTextField("coverLetter")}
            className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
            placeholder="Tell us why you are a strong fit for this role."
          />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <FileUploader
            label="Upload CV"
            required
            value={values.cv}
            error={visibleError("cv")}
            disabled={isSubmitting}
            onChange={(file, validationError) => {
              setValues((current) => ({ ...current, cv: file }));
              setTouched((current) => ({ ...current, cv: true }));
              if (validationError) setServerError("");
            }}
          />
          <FileUploader
            label="Upload Certificates"
            value={values.certificates}
            error={visibleError("certificates")}
            disabled={isSubmitting}
            onChange={(file) => {
              setValues((current) => ({ ...current, certificates: file }));
              setTouched((current) => ({ ...current, certificates: true }));
            }}
          />
        </div>

        <div>
          <label className="flex items-start gap-3 rounded-2xl bg-gray-50 p-4 text-sm text-gray-700">
            <input
              type="checkbox"
              checked={values.consent}
              onChange={(event) => {
                setValues((current) => ({ ...current, consent: event.target.checked }));
                setTouched((current) => ({ ...current, consent: true }));
              }}
              className="mt-1 h-4 w-4 rounded border-gray-300 text-orange-500 focus:ring-orange-500"
              aria-invalid={Boolean(visibleError("consent"))}
            />
            <span>I confirm that the information provided is accurate.</span>
          </label>
          <ValidationMessage message={visibleError("consent")} />
        </div>
      </fieldset>

      {serverError && (
        <div className="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700" role="alert">
          <p className="font-semibold">Unable to submit your application.</p>
          <p>{serverError}</p>
        </div>
      )}

      <div className="flex flex-col-reverse gap-3 border-t border-gray-100 pt-5 sm:flex-row sm:justify-end">
        <button
          type="button"
          onClick={onCancel}
          disabled={isSubmitting}
          className="rounded-xl border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-60"
        >
          Cancel
        </button>
        <LoadingButton type="submit" isLoading={isSubmitting} loadingText="Submitting Application..." disabled={!isValid}>
          Submit Application
        </LoadingButton>
      </div>
    </form>
  );
}

type FieldProps = {
  label: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  required?: boolean;
  type?: string;
};

function Field({ label, value, onChange, error, required = false, type = "text" }: FieldProps) {
  const id = label.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  const errorId = `${id}-error`;

  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
      />
      <ValidationMessage id={errorId} message={error} />
    </div>
  );
}

