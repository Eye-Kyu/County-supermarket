import { ACCEPTED_FILE_EXTENSIONS, ACCEPTED_FILE_TYPES, MAX_UPLOAD_SIZE_BYTES } from "./constants";

export function isAllowedFile(file: File): boolean {
  const extension = `.${file.name.split(".").pop()?.toLowerCase() ?? ""}`;
  return ACCEPTED_FILE_TYPES.includes(file.type as (typeof ACCEPTED_FILE_TYPES)[number]) ||
    ACCEPTED_FILE_EXTENSIONS.includes(extension as (typeof ACCEPTED_FILE_EXTENSIONS)[number]);
}

export function isWithinFileLimit(file: File): boolean {
  return file.size <= MAX_UPLOAD_SIZE_BYTES;
}

export function formatFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  const kb = bytes / 1024;
  if (kb < 1024) return `${kb.toFixed(1)} KB`;
  return `${(kb / 1024).toFixed(1)} MB`;
}

export function validateUpload(file: File | null, required: boolean): string | null {
  if (!file) return required ? "Please upload your CV." : null;
  if (!isAllowedFile(file)) return "Only PDF, DOC, and DOCX files are accepted.";
  if (!isWithinFileLimit(file)) return "File size must be 5 MB or less.";
  return null;
}
