import { useEffect } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import Footer from './components/Footer.jsx';
import { Star, ArrowUp } from 'lucide-react';

export default function App() {
  useEffect(() => {
    // Meta Title & Description
    document.title = 'Arcspire – AI Automation, Logo Design & Web Development Agency';
    const metaDesc = document.querySelector('meta[name="description"]');
    const description =
      'Arcspire helps businesses grow with AI-powered automation, logo design, and SEO-optimized web solutions. Smart, scalable, and professional digital transformation.';
    if (metaDesc) {
      metaDesc.setAttribute('content', description);
    } else {
      const m = document.createElement('meta');
      m.name = 'description';
      m.content = description;
      document.head.appendChild(m);
    }

    // Robots
    const robots = document.querySelector('meta[name="robots"]') || document.createElement('meta');
    robots.setAttribute('name', 'robots');
    robots.setAttribute('content', 'index, follow');
    if (!robots.parentElement) document.head.appendChild(robots);

    // JSON-LD: Organization
    const org = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Arcspire',
      url: window.location.origin,
      logo: window.location.origin + '/logo.svg',
      sameAs: [
        'https://www.linkedin.com',
        'https://twitter.com'
      ],
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'IN',
        addressLocality: 'Bengaluru',
      },
    };

    // JSON-LD: Service
    const svc = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'AI Automation, Web Design, Logo Design Automation, UI/UX Design',
      provider: { '@type': 'Organization', name: 'Arcspire' },
      areaServed: 'IN',
      serviceType: [
        'AI automation agency',
        'AI workflow automation',
        'AI website development',
        'logo design automation',
        'web design India',
        'UI/UX design services',
      ],
      url: window.location.origin + '/services',
    };

    const inject = (data) => {
      const s = document.createElement('script');
      s.type = 'application/ld+json';
      s.text = JSON.stringify(data);
      document.head.appendChild(s);
    };

    inject(org);
    inject(svc);
  }, []);

  useEffect(() => {
    const handler = () => {
      const btn = document.getElementById('backtotop');
      if (!btn) return;
      if (window.scrollY > 600) btn.classList.remove('opacity-0', 'pointer-events-none');
      else btn.classList.add('opacity-0', 'pointer-events-none');
    };
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-white scroll-smooth">
      <Header />
      <main>
        <Hero />
        <Services />

        {/* Portfolio */}
        <section id="portfolio" className="py-20 bg-gray-950">
          <div className="max-w-7xl mx-auto px-4 lg:px-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold">Portfolio</h2>
              <p className="mt-3 text-white/70">Selected work spanning websites, automation, and brand systems.</p>
            </div>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {['SaaS AI Dashboard', 'E-commerce Revamp', 'Fintech Brand System', 'Healthcare Automation', 'EdTech Marketing Site', 'D2C Launch Kit'].map((title, i) => (
                <div key={title} className="group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.04] p-6">
                  <div className="absolute inset-0 bg-gradient-to-tr from-emerald-400/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                  <p className="text-sm text-emerald-300">Case Study</p>
                  <h3 className="mt-1 text-xl font-semibold">{title}</h3>
                  <p className="mt-2 text-sm text-white/70">Performance-focused build with AI-enhanced flows, accessibility, and SEO foundations.</p>
                  <div className="mt-6 inline-flex items-center gap-1 text-emerald-300">View details →</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-20 bg-gradient-to-b from-gray-950 to-gray-900">
          <div className="max-w-7xl mx-auto px-4 lg:px-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold">What clients say</h2>
              <p className="mt-3 text-white/70">Trust built through outcomes: speed, clarity, measurable growth.</p>
            </div>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              {["They doubled qualified demos in six weeks.", 'Our site loads in 0.8s and ranks on page 1.', 'Automation saves 40+ hours per month for support.'].map((quote, idx) => (
                <div key={idx} className="rounded-xl border border-white/10 bg-white/5 p-6">
                  <div className="flex gap-1 text-amber-400 mb-3">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" className="text-amber-400" />
                    ))}
                  </div>
                  <p className="text-white/90">“{quote}”</p>
                  <p className="mt-3 text-sm text-white/60">Founder, growth-stage startup</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-20 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 lg:px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">About Arcspire</h2>
              <p className="mt-4 text-white/80">
                Our mission is simple: make advanced AI accessible, practical, and profitable for businesses of all sizes. We believe in clarity over complexity, speed over noise, and outcomes over vanity metrics.
              </p>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="rounded-lg border border-white/10 p-4 bg-white/5">
                  <p className="text-2xl font-bold">50+</p>
                  <p className="text-sm text-white/60">Projects shipped</p>
                </div>
                <div className="rounded-lg border border-white/10 p-4 bg-white/5">
                  <p className="text-2xl font-bold">0.9s</p>
                  <p className="text-sm text-white/60">Median LCP</p>
                </div>
                <div className="rounded-lg border border-white/10 p-4 bg-white/5">
                  <p className="text-2xl font-bold">100%</p>
                  <p className="text-sm text-white/60">Core Web Vitals</p>
                </div>
              </div>
            </div>
            <div className="rounded-xl border border-white/10 p-6 bg-white/5">
              <h3 className="text-xl font-semibold">Team & Story</h3>
              <p className="mt-2 text-white/70">
                Founded by engineers and designers, Arcspire blends technical depth with brand craft. We operate as an embedded team, moving from discovery → design → development → automation with clear checkpoints and measurable KPIs.
              </p>
              <ul className="mt-4 list-disc pl-5 text-white/70 space-y-2">
                <li>Discovery sprints to define success metrics</li>
                <li>Design systems for consistency and speed</li>
                <li>AI-powered builds and automations with human review</li>
                <li>SEO-first delivery and performance budgets</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Blog */}
        <section id="blog" className="py-20 bg-gray-950">
          <div className="max-w-7xl mx-auto px-4 lg:px-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold">Insights</h2>
              <p className="mt-3 text-white/70">Actionable guides on AI automation, branding, and performance web.</p>
            </div>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[{
                title: 'Top 10 AI Workflow Automations for Business Growth',
                slug: 'ai-workflow-automations-business-growth',
                intro: 'From lead routing to reporting, these automations free your team to focus on high-value work.',
              }, {
                title: 'Logo Design Automation: The Future of Branding',
                slug: 'logo-design-automation-future-branding',
                intro: 'How programmatic identity accelerates iteration while preserving strategy and craft.',
              }, {
                title: 'AI Websites vs Traditional Development: Who Wins?',
                slug: 'ai-websites-vs-traditional-development',
                intro: 'A clear comparison across speed, cost, quality, SEO, and maintainability.',
              }, {
                title: 'How to Build a Smart Brand with AI in 2025',
                slug: 'build-smart-brand-with-ai-2025',
                intro: 'A practical roadmap for modern, data-informed brand building.',
              }].map((p) => (
                <a key={p.slug} href={`/blog/${p.slug}`} className="block rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors p-5">
                  <p className="text-sm text-emerald-300">Article</p>
                  <h3 className="mt-1 text-lg font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm text-white/70">{p.intro}</p>
                  <span className="mt-4 inline-flex text-sm font-semibold text-emerald-300">Read more →</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-20 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 lg:px-6 grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">Contact</h2>
              <p className="mt-3 text-white/70">Tell us about your project. We’ll reply within 24 hours.</p>
              <div className="mt-6 space-y-3 text-white/80">
                <p>WhatsApp: <a className="text-emerald-300" href="https://wa.me/917000000000" target="_blank" rel="noreferrer">Chat now</a></p>
                <p>Call: <a className="text-emerald-300" href="tel:+917000000000">+91 70000 00000</a></p>
                <p>Email: <a className="text-emerald-300" href="mailto:hello@arcspire.ai">hello@arcspire.ai</a></p>
              </div>
            </div>
            <form className="rounded-xl border border-white/10 bg-white/5 p-6 grid grid-cols-1 gap-4">
              <div>
                <label className="text-sm text-white/70">Name</label>
                <input className="mt-1 w-full rounded-md bg-white/10 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-400 placeholder-white/40" placeholder="Your name" />
              </div>
              <div>
                <label className="text-sm text-white/70">Email</label>
                <input type="email" className="mt-1 w-full rounded-md bg-white/10 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-400 placeholder-white/40" placeholder="you@company.com" />
              </div>
              <div>
                <label className="text-sm text-white/70">Project type</label>
                <select className="mt-1 w-full rounded-md bg-white/10 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-400 text-white">
                  <option className="text-gray-900">AI Website Development</option>
                  <option className="text-gray-900">AI Workflow Automation</option>
                  <option className="text-gray-900">Logo Design Automation</option>
                  <option className="text-gray-900">UI/UX Design Systems</option>
                </select>
              </div>
              <div>
                <label className="text-sm text-white/70">Message</label>
                <textarea rows="4" className="mt-1 w-full rounded-md bg-white/10 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-400 placeholder-white/40" placeholder="Tell us about your goals"></textarea>
              </div>
              <button type="submit" className="mt-2 inline-flex items-center justify-center rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-3 font-semibold shadow">
                Request proposal
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />

      <button
        id="backtotop"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 inline-flex items-center justify-center h-11 w-11 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg transition-opacity opacity-0 pointer-events-none"
        aria-label="Back to top"
      >
        <ArrowUp size={18} />
      </button>
    </div>
  );
}
