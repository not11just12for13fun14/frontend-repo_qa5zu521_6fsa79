import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-zinc-200 py-8 text-center text-sm text-zinc-600">
        © {new Date().getFullYear()} Your Name — Web Programmer
      </footer>
    </div>
  );
}

export default App;
