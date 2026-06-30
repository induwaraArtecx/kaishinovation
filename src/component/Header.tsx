import { useState } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'

export default function Header({ currentPage }: { currentPage?: string }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null)

  const navLinks = [
    { name: 'Home', href: '#/' },
    { name: 'About Us', href: '#/about' },
    { 
      name: 'Services', 
      href: '#', 
      hasDropdown: true,
      dropdownItems: [
        { name: 'Enterprise Software Solutions', href: '#/services/enterprise-solutions' },
        { name: 'Cross-Platform Apps', href: '#/services/cross-platform-apps' },
        { name: 'AI & ML Solutions', href: '#' },
        { name: 'Cloud & DevOps', href: '#' },
        { name: 'Data & Analytics', href: '#' },
        { name: 'Cybersecurity', href: '#' }
      ]
    },
    { 
      name: 'Solutions', 
      href: '#', 
      hasDropdown: true,
      dropdownItems: [
        { name: 'Real Estate Solutions', href: '#' },
        { name: 'Retail Solutions', href: '#' },
        { name: 'Healthcare Solutions', href: '#' },
        { name: 'Education Solutions', href: '#' },
        { name: 'Business Intelligence', href: '#' }
      ]
    },
    { name: 'Portfolio', href: '#/portfolio' },
    { name: 'Blog', href: '#/blog' },
    { name: 'Careers', href: '#/careers' },
  ]

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#/" className="flex items-center gap-3">
          <img
            src="/logo-removebg.png"
            alt="Kaishi Innovations Logo"
            className="h-40 w-auto object-contain"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 h-full">
          {navLinks.map((link) => {
            const isActive =
              (link.name === 'Home' && (currentPage === 'home' || !currentPage)) ||
              (link.name === 'About Us' && currentPage === 'about') ||
              (link.name === 'Blog' && currentPage === 'blog') ||
              (link.name === 'Portfolio' && currentPage === 'portfolio') ||
              (link.name === 'Careers' && currentPage === 'careers') ||
              (link.name === 'Services' && (currentPage === 'enterprise-solutions' || currentPage === 'cross-platform-apps'))

            return (
              <div key={link.name} className="relative group flex items-center h-full py-4">
                <a
                  href={link.href}
                  className={`text-[15px] font-medium flex items-center gap-1 transition-colors relative py-2 ${
                    isActive
                      ? 'text-brand-cyan font-bold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-brand-cyan after:rounded-full'
                      : 'text-brand-navy/80 hover:text-brand-cyan'
                  }`}
                >
                  {link.name}
                  {link.hasDropdown && <ChevronDown className="w-4 h-4 opacity-75 group-hover:rotate-180 transition-transform duration-200" />}
                </a>

                {/* Hover Dropdown Menu */}
                {link.hasDropdown && link.dropdownItems && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-[80px] w-60 bg-white border border-slate-100 rounded-xl shadow-xl py-2.5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 text-left">
                    {link.dropdownItems.map((subItem) => (
                      <a
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-4 py-2 text-xs font-semibold text-brand-navy hover:text-brand-cyan hover:bg-slate-50 transition-colors"
                      >
                        {subItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </nav>

        {/* Contact CTA */}
        <div className="hidden lg:block">
          <button className="bg-[#3EA77E] hover:bg-[#35906b] text-white font-semibold text-[15px] px-6 h-11 rounded-lg transition-all shadow-md shadow-[#3EA77E]/20 hover:scale-[1.02] active:scale-[0.98] cursor-pointer">
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
        <div className="lg:hidden absolute top-20 left-0 w-full bg-white border-b border-slate-100 shadow-lg px-4 py-6 flex flex-col gap-1.5 animate-in slide-in-from-top duration-200 max-h-[calc(100vh-80px)] overflow-y-auto">
          {navLinks.map((link) => {
            const isActive =
              (link.name === 'Home' && (currentPage === 'home' || !currentPage)) ||
              (link.name === 'About Us' && currentPage === 'about') ||
              (link.name === 'Blog' && currentPage === 'blog') ||
              (link.name === 'Portfolio' && currentPage === 'portfolio') ||
              (link.name === 'Careers' && currentPage === 'careers') ||
              (link.name === 'Services' && (currentPage === 'enterprise-solutions' || currentPage === 'cross-platform-apps'))

            return (
              <div key={link.name} className="flex flex-col border-b border-slate-50">
                {link.hasDropdown ? (
                  <button
                    onClick={() => setOpenMobileDropdown(openMobileDropdown === link.name ? null : link.name)}
                    className={`text-base font-semibold py-3 flex items-center justify-between text-left transition-colors w-full cursor-pointer ${
                      isActive ? 'text-brand-cyan' : 'text-brand-navy/80 hover:text-brand-cyan'
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${openMobileDropdown === link.name ? 'rotate-180' : ''}`} />
                  </button>
                ) : (
                  <a
                    href={link.href}
                    className={`text-base font-semibold py-3 transition-colors text-left ${
                      isActive ? 'text-brand-cyan' : 'text-brand-navy/80 hover:text-brand-cyan'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                )}

                {/* Mobile Submenu */}
                {link.hasDropdown && openMobileDropdown === link.name && link.dropdownItems && (
                  <div className="pl-4 pb-3 flex flex-col gap-2.5 animate-in slide-in-from-top-2 duration-150 text-left">
                    {link.dropdownItems.map((subItem) => (
                      <a
                        key={subItem.name}
                        href={subItem.href}
                        className="text-sm font-medium text-slate-500 hover:text-brand-cyan transition-colors"
                        onClick={() => {
                          setMobileMenuOpen(false)
                          setOpenMobileDropdown(null)
                        }}
                      >
                        {subItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
          <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 rounded-lg text-center mt-3 shadow-md shadow-emerald-500/10 transition-all cursor-pointer">
            Contact Us
          </button>
        </div>
      )}
    </header>
  )
}
