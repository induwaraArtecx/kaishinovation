import { Mail, Phone, MapPin } from 'lucide-react'
import footerLogo from '../assets/footer_logo.png'

export default function Footer() {
  return (
    <footer className="bg-[#042048] text-slate-300 pt-20 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 pb-16 border-b border-white/5 text-left">

        {/* Col 1: Logo & Desc */}
        <div className="flex flex-col items-start gap-6">
          <img
            src={footerLogo}
            alt="Kaishi Innovations Logo"
            className="h-18 w-auto brightness-100"
          />
          <p className="text-slate-400 text-xs leading-relaxed font-normal max-w-sm">
            We build innovative, scalable and intelligent solutions that help businesses grow and succeed in a digital world.
          </p>
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/company/kaishi-innovation/?viewAsMember=true"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white/5 border border-white/10 hover:border-brand-cyan flex items-center justify-center hover:text-white hover:bg-brand-cyan/20 transition-all"
              aria-label="LinkedIn"
            >
              <svg
                className="w-4 h-4 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 hover:border-brand-cyan flex items-center justify-center hover:text-white hover:bg-brand-cyan/20 transition-all" aria-label="Twitter">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 hover:border-brand-cyan flex items-center justify-center hover:text-white hover:bg-brand-cyan/20 transition-all" aria-label="Facebook">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
              </svg>
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 hover:border-brand-cyan flex items-center justify-center hover:text-white hover:bg-brand-cyan/20 transition-all" aria-label="Instagram">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204 0.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Col 2: Company */}
        <div>
          <h4 className="text-sm font-bold font-heading text-white tracking-wide uppercase">Company</h4>
          <ul className="mt-4 flex flex-col gap-2.5 text-xs text-slate-400 font-medium">
            <li><a href="#/about" className="hover:text-brand-cyan transition-colors">About Us</a></li>
            <li><a href="#/careers" className="hover:text-brand-cyan transition-colors">Careers</a></li>
            <li><a href="#/blog" className="hover:text-brand-cyan transition-colors">Blog</a></li>
            <li><a href="#" className="hover:text-brand-cyan transition-colors">News & Insights</a></li>
            <li><a href="#" className="hover:text-brand-cyan transition-colors">Contact Us</a></li>
          </ul>
        </div>

        {/* Col 3: Services */}
        <div>
          <h4 className="text-sm font-bold font-heading text-white tracking-wide uppercase">Services</h4>
          <ul className="mt-4 flex flex-col gap-2.5 text-xs text-slate-400 font-medium">
            <li><a href="#/services/enterprise-solutions" className="hover:text-brand-cyan transition-colors">Software Development</a></li>
            <li><a href="#" className="hover:text-brand-cyan transition-colors">AI & ML Solutions</a></li>
            <li><a href="#" className="hover:text-brand-cyan transition-colors">Cloud & DevOps</a></li>
            <li><a href="#" className="hover:text-brand-cyan transition-colors">Data & Analytics</a></li>
            <li><a href="#" className="hover:text-brand-cyan transition-colors">Cybersecurity</a></li>
          </ul>
        </div>

        {/* Col 4: Solutions */}
        <div>
          <h4 className="text-sm font-bold font-heading text-white tracking-wide uppercase">Solutions</h4>
          <ul className="mt-4 flex flex-col gap-2.5 text-xs text-slate-400 font-medium">
            <li><a href="#" className="hover:text-brand-cyan transition-colors">Real Estate Solutions</a></li>
            <li><a href="#" className="hover:text-brand-cyan transition-colors">Retail Solutions</a></li>
            <li><a href="#" className="hover:text-brand-cyan transition-colors">Healthcare Solutions</a></li>
            <li><a href="#" className="hover:text-brand-cyan transition-colors">Education Solutions</a></li>
            <li><a href="#" className="hover:text-brand-cyan transition-colors">Business Intelligence</a></li>
          </ul>
        </div>

        {/* Col 5: Resources */}
        <div>
          <h4 className="text-sm font-bold font-heading text-white tracking-wide uppercase">Resources</h4>
          <ul className="mt-4 flex flex-col gap-2.5 text-xs text-slate-400 font-medium">
            <li><a href="#" className="hover:text-brand-cyan transition-colors">Case Studies</a></li>
            <li><a href="#" className="hover:text-brand-cyan transition-colors">Whitepapers</a></li>
            <li><a href="#" className="hover:text-brand-cyan transition-colors">FAQs</a></li>
            <li><a href="#" className="hover:text-brand-cyan transition-colors">Documentation</a></li>
            <li><a href="#" className="hover:text-brand-cyan transition-colors">Support Center</a></li>
          </ul>
        </div>

        {/* Col 6: Contact Info */}
        <div className="flex flex-col gap-4 text-xs font-normal">
          <h4 className="text-sm font-bold font-heading text-white tracking-wide uppercase">Contact Us</h4>
          <div className="flex items-start gap-2 text-slate-400">
            <Mail className="w-4 h-4 text-brand-cyan shrink-0" />
            <a href="mailto:hello@kaishiinnovations.com" className="hover:text-brand-cyan transition-colors break-all">hello@kaishiinnovations.com</a>
          </div>
          <div className="flex items-center gap-2 text-slate-400">
            <Phone className="w-4 h-4 text-brand-cyan shrink-0" />
            <span>+1 (555) 123-4567</span>
          </div>
          <div className="flex items-start gap-2 text-slate-400">
            <MapPin className="w-4 h-4 text-brand-cyan shrink-0" />
            <span>Tokyo, Japan</span>
          </div>
          <div className="flex items-start gap-2 text-slate-400">
            <MapPin className="w-4 h-4 text-brand-cyan shrink-0" />
            <span>Singapore | USA | India</span>
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 flex justify-center text-xs text-slate-500 font-medium text-center">
        <span>© 2026 Kaishi Innovations. All rights reserved.</span>
      </div>
    </footer>
  )
}
