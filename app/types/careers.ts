export interface JobRole {
  id: string;
  title: string;
  department: string;
  location: string;
  employmentType: string;
  experience: string;
  closingDate: string;
  description: string;
  responsibilities: string[];
  qualifications: string[];
}

export interface ApplicationValues {
  fullName: string;
  email: string;
  phone: string;
  currentLocation: string;
  linkedIn: string;
  portfolio: string;
  coverLetter: string;
  consent: boolean;
  cv: File | null;
  certificates: File | null;
}

export type ApplicationErrors = Partial<Record<keyof ApplicationValues, string>>;

export type ApplicationResult =
  | { ok: true; message: string }
  | { ok: false; message: string };
