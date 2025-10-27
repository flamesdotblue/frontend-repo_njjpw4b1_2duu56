import { Bot, Code, PenTool, Layout } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'AI Website Development',
    desc:
      'Lightning-fast, SEO-first websites powered by AI-assisted development and modern stacks. Built to convert and rank.',
    link: '#ai-website-development',
    tag: 'AI website development',
  },
  {
    icon: Bot,
    title: 'AI Workflow Automation',
    desc:
      'Automate repetitive processes across sales, support, marketing and ops. Integrate CRMs, chat, and internal tools.',
    link: '#ai-workflow-automation',
    tag: 'AI workflow automation',
  },
  {
    icon: PenTool,
    title: 'Logo Design Automation',
    desc:
      'Generate on-brand logos and identity systems programmatically. Fast iterations, consistent assets, human-reviewed.',
    link: '#logo-design-automation',
    tag: 'Logo design automation',
  },
  {
    icon: Layout,
    title: 'UI/UX Design Systems',
    desc:
      'Design systems and UI kits that make products intuitive, beautiful, and scalable across platforms.',
    link: '#ui-ux-design-systems',
    tag: 'UI/UX design services',
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-20 bg-gradient-to-b from-gray-900 to-gray-950">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Services</h2>
          <p className="mt-3 text-white/70">
            Smart, scalable solutions for ambitious brands. Built in India, delivered globally.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <a
              key={s.title}
              href={s.link}
              className="group rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors p-5 flex flex-col h-full"
            >
              <div className="h-12 w-12 rounded-lg bg-gradient-to-tr from-blue-600 to-emerald-400 text-white inline-flex items-center justify-center shadow">
                <s.icon size={22} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-sm text-white/70">{s.desc}</p>
              <span className="mt-4 inline-flex text-sm font-semibold text-emerald-300 group-hover:text-emerald-200">Learn more →</span>
              <span className="sr-only">{s.tag}</span>
            </a>
          ))}
        </div>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div id="ai-website-development" className="rounded-xl border border-white/10 p-6 bg-white/5">
            <h3 className="text-2xl font-semibold text-white">AI Website Development</h3>
            <p className="mt-2 text-white/70">
              We combine clean code, modern frameworks, and AI tooling to ship fast, secure, and SEO-optimized websites. Our builds use mobile-first, Core Web Vitals, and semantic HTML to maximize rankings and conversions.
            </p>
          </div>
          <div id="ai-workflow-automation" className="rounded-xl border border-white/10 p-6 bg-white/5">
            <h3 className="text-2xl font-semibold text-white">AI Workflow Automation</h3>
            <p className="mt-2 text-white/70">
              Streamline sales outreach, lead scoring, support triage, reporting, and more. We connect CRMs, email, chat, and internal tools so your business runs on autopilot with human-in-the-loop controls.
            </p>
          </div>
          <div id="logo-design-automation" className="rounded-xl border border-white/10 p-6 bg-white/5">
            <h3 className="text-2xl font-semibold text-white">Logo Design Automation</h3>
            <p className="mt-2 text-white/70">
              Data-driven identity systems. Generate and iterate logos at speed while maintaining brand strategy and consistency across touchpoints. Designers guide the final selection.
            </p>
          </div>
          <div id="ui-ux-design-systems" className="rounded-xl border border-white/10 p-6 bg-white/5">
            <h3 className="text-2xl font-semibold text-white">UI/UX Design Systems</h3>
            <p className="mt-2 text-white/70">
              Component libraries, tokens, and patterns that make your product cohesive and accessible. Reduce design debt and accelerate delivery.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
