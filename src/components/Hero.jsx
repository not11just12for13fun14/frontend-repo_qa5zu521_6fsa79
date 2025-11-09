import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-16 grid md:grid-cols-2 items-center gap-10">
        <div>
          <p className="inline-flex items-center px-3 py-1 rounded-full bg-white/60 backdrop-blur text-xs font-medium text-zinc-700 border border-white/40 shadow-sm">
            Tech • Portfolio • Interactive • Modern
          </p>
          <h1 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight text-zinc-900">
            Web Programmer crafting playful, modern experiences
          </h1>
          <p className="mt-4 text-zinc-700 text-lg max-w-prose">
            I build fast, accessible web apps with React, TypeScript, and delightful interactions. Let’s make something people love to use.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#projects" className="px-5 py-2.5 rounded-md bg-blue-600 text-white font-medium shadow hover:bg-blue-700 transition-colors">View Projects</a>
            <a href="#contact" className="px-5 py-2.5 rounded-md bg-white/70 backdrop-blur border border-white/60 text-zinc-900 font-medium shadow hover:bg-white transition-colors">Get in touch</a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white" />
    </section>
  );
}
