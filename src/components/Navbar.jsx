import { Github, Linkedin, Mail } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-20 backdrop-blur-md/60 bg-white/40 dark:bg-zinc-900/40 border-b border-white/20 dark:border-zinc-800/50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" className="font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 text-lg">
          <span className="text-blue-600">&lt;/&gt;</span> MyPortfolio
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-700 dark:text-zinc-300">
          <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
          <a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/"
            aria-label="GitHub"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-full hover:bg-white/60 dark:hover:bg-zinc-800/60 transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-full hover:bg-white/60 dark:hover:bg-zinc-800/60 transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="#contact"
            aria-label="Email"
            className="p-2 rounded-full hover:bg-white/60 dark:hover:bg-zinc-800/60 transition-colors"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </header>
  );
}
