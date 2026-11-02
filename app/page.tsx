import ProjectList from '@/components/ProjectList';

const projects = [
  {
    title: 'GameNight Finder',
    description:
      'A web application integrating RAWG and CheapShark APIs to query game deals, track historical price lows, and showcase responsive CSS hero layouts.',
    technologies: ['JavaScript', 'HTML5', 'CSS3', 'REST APIs', 'Git'],
    link: 'https://github.com/jocysainz',
  },
  {
    title: 'CSE 340 Web Backend Engine',
    description:
      'A full-stack MVC web architecture with PostgreSQL database connectivity, secure bcrypt authentication, inventory management, and RESTful routing.',
    technologies: ['Node.js', 'Express', 'PostgreSQL', 'EJS', 'SQL'],
    link: 'https://github.com/jocysainz',
  },
];

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <section className="text-center py-8 mb-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 mb-3">
          Web Developer Portfolio
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Full-stack developer building modern, responsive applications with Next.js, React, and TypeScript.
        </p>
      </section>
      <ProjectList projects={projects} />
    </main>
  );
}