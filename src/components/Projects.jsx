import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Realtime Chat App',
    desc: 'A full-stack chat experience with WebSockets, message search, and emoji reactions.',
    tech: ['React', 'FastAPI', 'MongoDB'],
    link: '#',
    repo: '#',
  },
  {
    title: 'Ecommerce Dashboard',
    desc: 'Sales analytics, inventory, and order management with clean data viz.',
    tech: ['Vite', 'Express', 'PostgreSQL'],
    link: '#',
    repo: '#',
  },
  {
    title: 'Portfolio Starter',
    desc: 'A minimal, tasteful template with 3D hero and smooth interactions.',
    tech: ['React', 'Tailwind', 'Spline'],
    link: '#',
    repo: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 bg-gradient-to-b from-white to-blue-50/40">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900">Selected Projects</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article key={p.title} className="group rounded-xl bg-white border border-zinc-200 p-5 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-zinc-900">{p.title}</h3>
              <p className="mt-2 text-sm text-zinc-700">{p.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="text-[11px] px-2 py-1 rounded-md bg-zinc-100 text-zinc-700 border border-zinc-200">{t}</span>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-3">
                <a href={p.link} className="inline-flex items-center gap-1 text-blue-600 hover:underline">
                  <ExternalLink className="w-4 h-4" /> Live
                </a>
                <a href={p.repo} className="inline-flex items-center gap-1 text-zinc-700 hover:underline">
                  <Github className="w-4 h-4" /> Code
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
