type ExperienceCardProps = {
  company: string;
  role: string;
  period: string;
  clients: string;
  description: string[];
};

export default function ExperienceCard({
  company,
  role,
  period,
  clients,
  description,
}: ExperienceCardProps) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
      {/* Company */}
      <h2 className="text-2xl font-bold tracking-tight text-gray-900">
        {company}
      </h2>

      {/* Role */}
      <p className="mt-2 text-lg font-medium text-gray-700">
        {role}
      </p>

      {/* Period & Clients */}
      <div className="mt-2 text-sm text-gray-500">
        <span>{period}</span>
        <span className="mx-2">•</span>
        <span>{clients}</span>
      </div>

      {/* Description */}
      <div className="mt-7">
        <ul className="space-y-4">
          {description.map((point, index) => (
            <li
              key={index}
              className="relative pl-5 leading-7 text-gray-600"
            >
              <span className="absolute left-0 top-3 h-1.5 w-1.5 rounded-full bg-gray-400" />
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}