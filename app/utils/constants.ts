export const ACCEPTED_FILE_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
] as const;

export const ACCEPTED_FILE_EXTENSIONS = [".pdf", ".doc", ".docx"] as const;

export const MAX_UPLOAD_SIZE_BYTES = 5 * 1024 * 1024;

export const CAREERS_ENDPOINT = "/api/careers/apply";

export const DEFAULT_CAREERS_EMAIL = "Careers@countysupermarkets.co.ke";
