import type { JobRole } from "../types/careers";

export type EmailApplicant = {
  fullName: string;
  email: string;
  phone: string;
  currentLocation: string;
  linkedIn: string;
  portfolio: string;
  coverLetter: string;
};

export function buildHrApplicationEmail(job: Partial<JobRole>, applicant: EmailApplicant, timestamp: string): string {
  return `
    <h2>New Careers Application</h2>
    <p><strong>Submitted:</strong> ${timestamp}</p>
    <h3>Selected Role</h3>
    <ul>
      <li><strong>Title:</strong> ${job.title ?? "General Employment Application"}</li>
      <li><strong>Department:</strong> ${job.department ?? "General Employment"}</li>
      <li><strong>Location:</strong> ${job.location ?? "Any Branch"}</li>
      <li><strong>Employment Type:</strong> ${job.employmentType ?? "Open Application"}</li>
      <li><strong>Experience:</strong> ${job.experience ?? "Not specified"}</li>
      <li><strong>Closing Date:</strong> ${job.closingDate ?? "Open"}</li>
    </ul>
    <h3>Applicant Details</h3>
    <ul>
      <li><strong>Name:</strong> ${applicant.fullName}</li>
      <li><strong>Email:</strong> ${applicant.email}</li>
      <li><strong>Phone:</strong> ${applicant.phone}</li>
      <li><strong>Current Location:</strong> ${applicant.currentLocation || "Not provided"}</li>
      <li><strong>LinkedIn:</strong> ${applicant.linkedIn || "Not provided"}</li>
      <li><strong>Portfolio:</strong> ${applicant.portfolio || "Not provided"}</li>
    </ul>
    <h3>Cover Letter</h3>
    <p>${applicant.coverLetter || "No cover letter provided."}</p>
  `;
}

export function buildApplicantConfirmationEmail(applicantName: string): string {
  return `
    <p>Dear ${applicantName},</p>
    <p>Thank you for applying to County Supermarket.</p>
    <p>We appreciate your interest. Our recruitment team will review your application and contact you if you're shortlisted.</p>
    <p>Regards,<br />County Supermarket HR</p>
  `;
}
