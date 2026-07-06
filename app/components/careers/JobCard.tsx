import type { JobRole } from "../../types/careers";

type JobCardProps = {
  job: JobRole;
  onApply: (job: JobRole) => void;
};

const chipClass = "bg-gray-100 text-gray-600 text-xs px-2.5 py-1 rounded-full";

export default function JobCard({ job, onApply }: JobCardProps) {
  return (
    <article className="bg-white rounded-2xl p-6 border-l-4 border-l-orange-500 border border-gray-100 flex flex-col gap-5 hover:shadow-md transition-shadow">
      <div>
        <h3 className="font-bold text-blue-950 text-base mb-3">{job.title}</h3>
        <div className="flex flex-wrap gap-2">
          <span className={chipClass}>{job.department}</span>
          <span className={chipClass}>{job.location}</span>
          <span className="bg-orange-50 text-orange-600 text-xs px-2.5 py-1 rounded-full font-semibold">
            {job.employmentType}
          </span>
          <span className={chipClass}>{job.experience}</span>
          <span className={chipClass}>Closes {job.closingDate}</span>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">{job.description}</p>
        <button
          type="button"
          onClick={() => onApply(job)}
          className="shrink-0 bg-orange-500 hover:bg-orange-400 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors text-center"
        >
          Apply Now &rarr;
        </button>
      </div>
    </article>
  );
}
