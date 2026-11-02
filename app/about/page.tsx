import SkillsCard from '@/components/SkillsCard';

export default function About() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-slate-900 mb-4">About Me</h1>
      <p className="text-slate-600 text-base leading-relaxed mb-8">
        I am a software and web development student focused on modern full-stack systems, clean UI architecture, and agile project delivery. Experienced in developing responsive frontends with React and Next.js, as well as database-driven backend applications.
      </p>

      <h2 className="text-2xl font-bold text-slate-900 mb-4">Technical Competencies</h2>
      <div className="grid gap-4 md:grid-cols-3">
        <SkillsCard
          category="Frontend"
          skills={['Next.js (App Router)', 'React & JSX', 'TypeScript', 'Tailwind CSS']}
        />
        <SkillsCard
          category="Backend & Database"
          skills={['Node.js & Express', 'PostgreSQL & SQL', 'REST APIs', 'Authentication']}
        />
        <SkillsCard
          category="Workflow & Tools"
          skills={['Git & GitHub', 'Vercel Deployment', 'VS Code', 'Agile / Scrum']}
        />
      </div>
    </main>
  );
}