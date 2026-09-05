import ExperienceCard from "@/components/ExperienceCard";
import { experience } from "@/data/experience";
import Button from "@/components/Backbutton";

export default function Experience() {
  return (
    
    <main className="px-6 py-20">
        <Button />
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold">
          Experience & Work History
        </h1>

        <div className="mt-10 space-y-6">
          {experience.map((item) => (
            <ExperienceCard
              key={`${item.company}-${item.role}`}
              company={item.company}
              role={item.role}
              clients={item.clients}
              period={item.period}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </main>
  );
}