import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <p className="text-white font-semibold text-lg">Arcspire</p>
          <p className="mt-2 text-sm text-white/60">
            AI-powered digital agency in India. We build high-performance websites, automate workflows, and craft intelligent brands.
          </p>
        </div>
        <div>
          <p className="text-white font-semibold">Services</p>
          <ul className="mt-3 space-y-2 text-sm text-white/70">
            <li><a className="hover:text-white" href="#ai-website-development">AI Website Development</a></li>
            <li><a className="hover:text-white" href="#ai-workflow-automation">AI Workflow Automation</a></li>
            <li><a className="hover:text-white" href="#logo-design-automation">Logo Design Automation</a></li>
            <li><a className="hover:text-white" href="#ui-ux-design-systems">UI/UX Design Systems</a></li>
          </ul>
        </div>
        <div>
          <p className="text-white font-semibold">Company</p>
          <ul className="mt-3 space-y-2 text-sm text-white/70">
            <li><a className="hover:text-white" href="#about">About</a></li>
            <li><a className="hover:text-white" href="#portfolio">Portfolio</a></li>
            <li><a className="hover:text-white" href="#blog">Blog</a></li>
            <li><a className="hover:text-white" href="#contact">Contact</a></li>
          </ul>
        </div>
        <div>
          <p className="text-white font-semibold">Contact</p>
          <div className="mt-3 space-y-2 text-sm text-white/70">
            <p className="flex items-center gap-2"><Mail size={16}/> hello@arcspire.ai</p>
            <p className="flex items-center gap-2"><Phone size={16}/> +91 70000 00000</p>
            <p className="flex items-center gap-2"><MapPin size={16}/> Bengaluru, India</p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 flex items-center justify-between text-xs text-white/50">
          <p>© {new Date().getFullYear()} Arcspire. All rights reserved.</p>
          <p>Built for speed, accessibility, and SEO.</p>
        </div>
      </div>
    </footer>
  );
}
