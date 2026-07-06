"use client";

import { FileText, Upload, X } from "lucide-react";
import { useId, useState } from "react";
import { formatFileSize, validateUpload } from "../../utils/fileHelpers";
import ValidationMessage from "./ValidationMessage";

type FileUploaderProps = {
  label: string;
  required?: boolean;
  value: File | null;
  error?: string;
  disabled?: boolean;
  onChange: (file: File | null, validationError?: string) => void;
};

export default function FileUploader({ label, required = false, value, error, disabled, onChange }: FileUploaderProps) {
  const inputId = useId();
  const errorId = `${inputId}-error`;
  const [isDragging, setIsDragging] = useState(false);

  const selectFile = (file: File | null) => {
    const validationError = validateUpload(file, required) ?? undefined;
    onChange(file, validationError);
  };

  return (
    <div>
      <label htmlFor={inputId} className="block text-sm font-medium text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>

      <div
        onDragOver={(event) => {
          event.preventDefault();
          if (!disabled) setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={(event) => {
          event.preventDefault();
          setIsDragging(false);
          if (!disabled) selectFile(event.dataTransfer.files[0] ?? null);
        }}
        className={`mt-2 rounded-2xl border border-dashed p-4 transition-colors ${
          isDragging ? "border-orange-500 bg-orange-50" : "border-gray-300 bg-white"
        } ${disabled ? "opacity-60" : ""}`}
      >
        {value ? (
          <div className="flex items-center justify-between gap-4">
            <div className="flex min-w-0 items-center gap-3">
              <FileText className="h-5 w-5 shrink-0 text-orange-500" aria-hidden />
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-blue-950">{value.name}</p>
                <p className="text-xs text-gray-500">{formatFileSize(value.size)}</p>
              </div>
            </div>
            <button
              type="button"
              disabled={disabled}
              onClick={() => onChange(null)}
              className="rounded-full p-2 text-gray-500 transition-colors hover:bg-gray-100 hover:text-red-600 disabled:cursor-not-allowed"
              aria-label={`Remove ${label}`}
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        ) : (
          <label htmlFor={inputId} className="flex cursor-pointer flex-col items-center justify-center gap-2 py-4 text-center">
            <Upload className="h-6 w-6 text-orange-500" aria-hidden />
            <span className="text-sm font-semibold text-blue-950">Drop file here or browse</span>
            <span className="text-xs text-gray-500">PDF, DOC, DOCX - maximum 5 MB</span>
          </label>
        )}
      </div>

      <input
        id={inputId}
        type="file"
        className="sr-only"
        accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
        disabled={disabled}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        onChange={(event) => selectFile(event.target.files?.[0] ?? null)}
      />
      <ValidationMessage id={errorId} message={error} />
    </div>
  );
}
