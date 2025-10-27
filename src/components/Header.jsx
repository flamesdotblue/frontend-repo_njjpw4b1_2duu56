import { useState, useEffect } from 'react';
import { Rocket, Bot, Paintbrush, Phone } from 'lucide-react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLink = (
    href,
    label
  ) => (
    <a
      href={href}
      onClick={() => setOpen(false)}
      className="px-3 py-2 rounded-md text-sm font-medium text-gray-100/90 hover:text-white hover:bg-white/10 transition-colors"
    >
      {label}
    </a>
  );

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all ${
      scrolled ? 'backdrop-blur bg-gray-900/70 shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-tr from-blue-500 to-emerald-400 text-white shadow">
              <Rocket size={18} />
            </span>
            <div className="leading-tight">
              <p className="text-white font-semibold tracking-tight">Arcspire</p>
              <p className="text-xs text-white/60 -mt-1">AI Digital Agency</p>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {navLink('#services', 'Services')}
            {navLink('#portfolio', 'Portfolio')}
            {navLink('#blog', 'Blog')}
            {navLink('#about', 'About')}
            {navLink('#contact', 'Contact')}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <a
              href="https://wa.me/917000000000"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 text-sm font-semibold shadow"
            >
              <Bot size={16} /> Chat on WhatsApp
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 text-sm font-semibold shadow"
            >
              <Phone size={16} /> Get Started
            </a>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md bg-white/10 text-white"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-6 w-6"
            >
              {open ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M3 6h18M3 12h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-gray-900/90 backdrop-blur">
          <div className="px-4 py-3 flex flex-col gap-1">
            {navLink('#services', 'Services')}
            {navLink('#portfolio', 'Portfolio')}
            {navLink('#blog', 'Blog')}
            {navLink('#about', 'About')}
            {navLink('#contact', 'Contact')}
            <div className="h-px bg-white/10 my-2" />
            <a
              href="https://wa.me/917000000000"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 text-sm font-semibold shadow"
            >
              <Bot size={16} /> Chat on WhatsApp
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 text-sm font-semibold shadow"
            >
              <Phone size={16} /> Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
