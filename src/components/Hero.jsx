import Spline from '@splinetool/react-spline';
import { Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] pt-20 overflow-hidden bg-gray-900">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/60 via-gray-900/70 to-gray-900 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 lg:px-6 flex items-center min-h-[92vh]">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/80 mb-6 backdrop-blur">
            <Sparkles size={14} /> AI-Powered Digital Transformation
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
            Arcspire — AI Automation, Web Development, and Logo Design that Perform
          </h1>
          <p className="mt-5 text-lg text-white/80">
            We build blazing-fast websites, intelligent workflows, and brand systems that scale. From AI website development to automated logo design and UI/UX — we turn ideas into growth.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#contact" className="inline-flex items-center justify-center rounded-lg bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 font-semibold shadow">
              Get Started with AI
            </a>
            <a href="#services" className="inline-flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 text-white px-5 py-3 font-semibold border border-white/20">
              Explore Services
            </a>
          </div>
          <p className="mt-6 text-sm text-white/60">
            Keywords: AI automation agency, AI workflow automation, AI website development, logo design automation, web design India, UI/UX design services
          </p>
        </div>
      </div>
    </section>
  );
}
