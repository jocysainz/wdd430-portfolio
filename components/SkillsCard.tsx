interface SkillsCardProps {
  category: string;
  skills: string[];
}

export default function SkillsCard({ category, skills }: SkillsCardProps) {
  return (
    <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
      <h3 className="font-semibold text-slate-900 mb-3">{category}</h3>
      <ul className="space-y-1.5 text-sm text-slate-600">
        {skills.map((skill) => (
          <li key={skill} className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}