import type { ApplicationErrors, ApplicationValues } from "../types/careers";
import { validateUpload } from "./fileHelpers";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const KENYAN_PHONE_PATTERN = /^(?:\+254|254|0)(?:7|1)\d{8}$/;

export function isValidEmail(value: string): boolean {
  return EMAIL_PATTERN.test(value.trim());
}

export function isValidKenyanPhone(value: string): boolean {
  return KENYAN_PHONE_PATTERN.test(value.replace(/[\s-]/g, ""));
}

export function validateApplication(values: ApplicationValues): ApplicationErrors {
  const errors: ApplicationErrors = {};

  if (!values.fullName.trim()) errors.fullName = "Full name is required.";
  if (!values.email.trim()) errors.email = "Email address is required.";
  else if (!isValidEmail(values.email)) errors.email = "Enter a valid email address.";

  if (!values.phone.trim()) errors.phone = "Phone number is required.";
  else if (!isValidKenyanPhone(values.phone)) errors.phone = "Enter a valid Kenyan phone number.";

  const cvError = validateUpload(values.cv, true);
  if (cvError) errors.cv = cvError;

  const certificateError = validateUpload(values.certificates, false);
  if (certificateError) errors.certificates = certificateError;

  if (!values.consent) errors.consent = "Please confirm that the information provided is accurate.";

  return errors;
}

export function hasErrors(errors: ApplicationErrors): boolean {
  return Object.keys(errors).length > 0;
}
