import { useState } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About Us', href: '#' },
    { name: 'Services', href: '#', hasDropdown: true },
    { name: 'Solutions', href: '#', hasDropdown: true },
    { name: 'Portfolio', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Careers', href: '#' },
  ]

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <img 
            src="/logo-removebg.png" 
            alt="Kaishi Innovations Logo" 
            className="h-40 w-auto object-contain"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[15px] font-medium text-brand-navy/80 hover:text-brand-cyan flex items-center gap-1 transition-colors"
            >
              {link.name}
              {link.hasDropdown && <ChevronDown className="w-4 h-4 opacity-75" />}
            </a>
          ))}
        </nav>

        {/* Contact CTA */}
        <div className="hidden lg:block">
          <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-[15px] px-6 h-11 rounded-lg transition-all shadow-md shadow-emerald-500/20 hover:scale-[1.02] active:scale-[0.98] cursor-pointer">
            Contact Us
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-brand-navy hover:text-brand-cyan transition-colors"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-white border-b border-slate-100 shadow-lg px-4 py-6 flex flex-col gap-4 animate-in slide-in-from-top duration-200">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-base font-semibold text-brand-navy/80 py-2 border-b border-slate-50 hover:text-brand-cyan transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 rounded-lg text-center mt-2 shadow-md shadow-emerald-500/10 transition-all cursor-pointer">
            Contact Us
          </button>
        </div>
      )}
    </header>
  )
}
