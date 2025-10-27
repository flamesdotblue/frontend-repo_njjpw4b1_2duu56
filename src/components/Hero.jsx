import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] pt-24 overflow-hidden bg-gray-950">
      {/* Animated gradient background (low-cost, GPU-accelerated) */}
      <div
        aria-hidden
        className="absolute inset-0">
        <div className="absolute -inset-40 opacity-60 [background:radial-gradient(60%_60%_at_30%_20%,rgba(37,99,235,0.35)_0%,rgba(37,99,235,0)_60%),radial-gradient(50%_50%_at_70%_30%,rgba(16,185,129,0.35)_0%,rgba(16,185,129,0)_60%),radial-gradient(40%_40%_at_50%_75%,rgba(245,158,11,0.25)_0%,rgba(245,158,11,0)_60%)] animate-[pulseGradient_18s_ease-in-out_infinite]" />
        <div className="absolute inset-0 pointer-events-none [mask-image:radial-gradient(60%_60%_at_50%_30%,#000_40%,transparent_80%)]" />
      </div>

      {/* Subtle grid overlay */}
      <div aria-hidden className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] opacity-[0.08]" />

      <div className="relative max-w-7xl mx-auto px-4 lg:px-6 flex items-center min-h-[92vh]">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80 mb-6 backdrop-blur"
          >
            AI-Powered Digital Transformation
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.05 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white"
          >
            Arcspire — Automation, Web Development, and Brand Systems that Perform
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.12 }}
            className="mt-5 text-lg text-white/80"
          >
            We build blazing-fast websites, intelligent workflows, and scalable brand systems. From AI websites to workflow automation and identity design — engineered for outcomes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.18 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a href="#contact" className="inline-flex items-center justify-center rounded-lg bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 font-semibold shadow">
              Get Started
            </a>
            <a href="#services" className="inline-flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 text-white px-5 py-3 font-semibold border border-white/15">
              Explore Services
            </a>
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes pulseGradient {
          0% { transform: translate3d(0,0,0) scale(1); filter: blur(0px); }
          25% { transform: translate3d(-2%,1%,0) scale(1.02); filter: blur(1px); }
          50% { transform: translate3d(1%,-1%,0) scale(1.015); filter: blur(0.5px); }
          75% { transform: translate3d(-1%,2%,0) scale(1.02); filter: blur(1px); }
          100% { transform: translate3d(0,0,0) scale(1); filter: blur(0px); }
        }
      `}</style>
    </section>
  );
}
