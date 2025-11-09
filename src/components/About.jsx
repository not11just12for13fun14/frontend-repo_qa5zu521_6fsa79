export default function About() {
  return (
    <section id="about" className="relative py-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900">About Me</h2>
          <p className="mt-4 text-zinc-700 leading-relaxed">
            I'm a web programmer focused on building clean interfaces and resilient systems. My toolkit centers around React, Next.js, Node, and Python, with a strong eye for DX and performance. I love shipping tiny details that make products feel alive.
          </p>
          <ul className="mt-6 grid grid-cols-2 gap-3 text-sm text-zinc-700">
            <li className="p-3 rounded-md bg-white border border-zinc-200 shadow-sm">React & Vite</li>
            <li className="p-3 rounded-md bg-white border border-zinc-200 shadow-sm">TypeScript</li>
            <li className="p-3 rounded-md bg-white border border-zinc-200 shadow-sm">Node & Express</li>
            <li className="p-3 rounded-md bg-white border border-zinc-200 shadow-sm">Python & FastAPI</li>
            <li className="p-3 rounded-md bg-white border border-zinc-200 shadow-sm">Tailwind CSS</li>
            <li className="p-3 rounded-md bg-white border border-zinc-200 shadow-sm">MongoDB</li>
          </ul>
        </div>
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 border border-zinc-200 rounded-xl p-6 shadow-sm">
          <h3 className="font-semibold text-zinc-900">Highlights</h3>
          <ul className="mt-4 space-y-3 text-zinc-700">
            <li>• 5+ years building modern web apps</li>
            <li>• Strong UI engineering and performance focus</li>
            <li>• Comfortable across frontend and backend</li>
            <li>• Love for 3D/animation and playful UX</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
