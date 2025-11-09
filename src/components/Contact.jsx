import { Mail, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    setStatus('Thanks! Your message has been sent.');
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="relative py-20">
      <div className="max-w-2xl mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900">Contact</h2>
          <p className="mt-2 text-zinc-700">Have a project in mind? Let’s chat.</p>
        </div>

        <form onSubmit={onSubmit} className="mt-8 space-y-4 bg-white border border-zinc-200 rounded-xl p-6 shadow-sm">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-zinc-700">Name</label>
              <input required type="text" className="mt-1 w-full rounded-md border border-zinc-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-700">Email</label>
              <input required type="email" className="mt-1 w-full rounded-md border border-zinc-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-700">Message</label>
            <textarea required rows={5} className="mt-1 w-full rounded-md border border-zinc-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>

          <div className="flex items-center justify-between">
            <p className="text-sm text-zinc-600 inline-flex items-center gap-2">
              <Mail className="w-4 h-4" /> I typically reply within 24 hours.
            </p>
            <button type="submit" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-blue-600 text-white font-medium shadow hover:bg-blue-700 transition-colors">
              <Send className="w-4 h-4" /> Send
            </button>
          </div>

          {status && (
            <p className="text-green-600 text-sm">{status}</p>
          )}
        </form>
      </div>
    </section>
  );
}
