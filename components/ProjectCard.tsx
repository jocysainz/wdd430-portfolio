interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

export default function ProjectCard({ title, description, technologies, link }: ProjectCardProps) {
  return (
    <article className="p-5 border border-slate-200 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
      <p className="text-slate-600 mb-4 text-sm leading-relaxed">{description}</p>
      <div className="mb-4">
        <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1">
          Technologies
        </span>
        <div className="flex flex-wrap gap-1.5">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs bg-slate-100 text-slate-700 px-2.5 py-0.5 rounded-full font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-semibold text-blue-600 hover:text-blue-800 hover:underline inline-flex items-center gap-1"
        >
          View Project &rarr;
        </a>
      )}
    </article>
  );
}