import { useState } from 'react'
import {
  Menu,
  X,
  ChevronDown,
  Code,
  Smartphone,
  Globe,
  Brain,
  Cloud,
  ShieldCheck,
  BarChart3,
  Layers,
  Palette,
  Lightbulb,
  Building2,
  Home,
  ShoppingCart,
  HeartPulse,
  GraduationCap,
  Truck,
  Factory,
  Plane,
  Landmark,
  Sparkles,
  TrendingUp,
  ShieldAlert,
  ArrowRight,
  Sparkle
} from 'lucide-react'

// Mega Menu structures
const servicesMegaMenu = {
  column1: [
    {
      title: 'Software Development',
      icon: Code,
      items: [
        { name: 'Custom Software Development', href: '#' },
        { name: 'Enterprise Software Solutions', href: '#/services/enterprise-solutions' },
        { name: 'SaaS Product Development', href: '#/services/saas-product-development' },
        { name: 'API Development & Integration', href: '#' },
        { name: 'Legacy System Modernization', href: '#' }
      ]
    },
    {
      title: 'Mobile App Development',
      icon: Smartphone,
      items: [
        { name: 'Android App Development', href: '#' },
        { name: 'iOS App Development', href: '#' },
        { name: 'Cross-Platform Apps', href: '#/services/cross-platform-apps' },
        { name: 'Enterprise Mobile Solutions', href: '#' },
        { name: 'App Maintenance & Support', href: '#' }
      ]
    },
    {
      title: 'Web Development',
      icon: Globe,
      items: [
        { name: 'Corporate Websites', href: '#' },
        { name: 'Web Applications', href: '#' },
        { name: 'E-Commerce Platforms', href: '#' },
        { name: 'Customer Portals', href: '#' },
        { name: 'Progressive Web Apps (PWA)', href: '#' }
      ]
    }
  ],
  column2: [
    {
      title: 'AI & Intelligent Solutions',
      icon: Brain,
      items: [
        { name: 'AI Chatbots', href: '#' },
        { name: 'Generative AI Solutions', href: '#' },
        { name: 'AI Automation', href: '#' },
        { name: 'Machine Learning Systems', href: '#' },
        { name: 'Business Intelligence AI', href: '#' },
        { name: 'AI Agents & Assistants', href: '#' }
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      items: [
        { name: 'Cloud Migration', href: '#' },
        { name: 'AWS Solutions', href: '#' },
        { name: 'Azure Solutions', href: '#' },
        { name: 'Google Cloud Solutions', href: '#' },
        { name: 'DevOps & CI/CD', href: '#' },
        { name: 'Infrastructure Management', href: '#' }
      ]
    },
    {
      title: 'Cybersecurity',
      icon: ShieldCheck,
      items: [
        { name: 'Security Assessment', href: '#' },
        { name: 'Penetration Testing', href: '#' },
        { name: 'Security Architecture', href: '#' },
        { name: 'Compliance Consulting', href: '#' },
        { name: 'Security Monitoring', href: '#' }
      ]
    }
  ],
  column3: [
    {
      title: 'Data & Analytics',
      icon: BarChart3,
      items: [
        { name: 'Business Intelligence', href: '#' },
        { name: 'Data Warehousing', href: '#' },
        { name: 'Data Engineering', href: '#' },
        { name: 'Dashboard Development', href: '#' },
        { name: 'Predictive Analytics', href: '#' }
      ]
    },
    {
      title: 'System Architecture',
      icon: Layers,
      items: [
        { name: 'Solution Architecture', href: '#' },
        { name: 'Enterprise Architecture', href: '#' },
        { name: 'Technology Consulting', href: '#' },
        { name: 'Digital Transformation', href: '#' },
        { name: 'Scalability Planning', href: '#' }
      ]
    },
    {
      title: 'UI/UX & Product Design',
      icon: Palette,
      items: [
        { name: 'UI Design', href: '#' },
        { name: 'UX Research', href: '#' },
        { name: 'Design Systems', href: '#' },
        { name: 'Product Strategy', href: '#' },
        { name: 'Prototyping', href: '#' }
      ]
    }
  ],
  column4: [
    {
      title: 'Industry Solutions',
      icon: Building2,
      items: [
        { name: 'Real Estate Solutions', href: '#' },
        { name: 'Retail Solutions', href: '#' },
        { name: 'Healthcare Solutions', href: '#' },
        { name: 'Education Solutions', href: '#' },
        { name: 'Logistics Solutions', href: '#' }
      ]
    },
    {
      title: 'Consulting Services',
      icon: Lightbulb,
      items: [
        { name: 'Technology Strategy', href: '#' },
        { name: 'CTO as a Service', href: '#' },
        { name: 'Startup Consulting', href: '#' },
        { name: 'Product Discovery', href: '#' },
        { name: 'Innovation Consulting', href: '#' }
      ]
    }
  ]
}

const solutionsMegaMenu = {
  column1: [
    {
      title: 'Enterprise Solutions',
      icon: Building2,
      items: [
        { name: 'Enterprise Digital Transformation', href: '#' },
        { name: 'Business Process Automation', href: '#' },
        { name: 'Enterprise Resource Planning (ERP)', href: '#' },
        { name: 'Customer Relationship Management (CRM)', href: '#' },
        { name: 'Enterprise Portals', href: '#' },
        { name: 'Enterprise Content Management', href: '#' }
      ]
    },
    {
      title: 'Real Estate Solutions',
      icon: Home,
      items: [
        { name: 'Property Management Platform', href: '#' },
        { name: 'Property Marketplace', href: '#' },
        { name: 'Real Estate CRM', href: '#' },
        { name: 'Rental Management System', href: '#' },
        { name: 'Property Investment Platform', href: '#' },
        { name: 'Smart Property Management', href: '#' },
        { name: 'AI Property Recommendation', href: '#' },
        { name: 'Tenant Management', href: '#' }
      ]
    },
    {
      title: 'Retail & Commerce',
      icon: ShoppingCart,
      items: [
        { name: 'Smart POS System', href: '#' },
        { name: 'Retail ERP', href: '#' },
        { name: 'Inventory Management', href: '#' },
        { name: 'Warehouse Management', href: '#' },
        { name: 'Loyalty Platform', href: '#' },
        { name: 'Omnichannel Commerce', href: '#' },
        { name: 'Self Checkout System', href: '#' },
        { name: 'Retail Analytics', href: '#' },
        { name: 'Digital Menu System', href: '#' },
        { name: 'Franchise Management', href: '#' }
      ]
    }
  ],
  column2: [
    {
      title: 'Healthcare',
      icon: HeartPulse,
      items: [
        { name: 'Hospital Management System', href: '#' },
        { name: 'Electronic Medical Records', href: '#' },
        { name: 'Patient Portal', href: '#' },
        { name: 'Telemedicine Platform', href: '#' },
        { name: 'Appointment Management', href: '#' },
        { name: 'Pharmacy Management', href: '#' },
        { name: 'Laboratory Information System', href: '#' },
        { name: 'Healthcare Analytics', href: '#' }
      ]
    },
    {
      title: 'Education',
      icon: GraduationCap,
      items: [
        { name: 'Learning Management System', href: '#' },
        { name: 'Student Information System', href: '#' },
        { name: 'School ERP', href: '#' },
        { name: 'Online Examination', href: '#' },
        { name: 'Virtual Classroom', href: '#' },
        { name: 'University Management', href: '#' },
        { name: 'AI Learning Platform', href: '#' }
      ]
    },
    {
      title: 'Logistics & Transportation',
      icon: Truck,
      items: [
        { name: 'Fleet Management', href: '#' },
        { name: 'GPS Tracking', href: '#' },
        { name: 'Delivery Management', href: '#' },
        { name: 'Warehouse Management', href: '#' },
        { name: 'Route Optimization', href: '#' },
        { name: 'Driver Management', href: '#' },
        { name: 'Shipment Tracking', href: '#' },
        { name: 'Smart Logistics Dashboard', href: '#' }
      ]
    },
    {
      title: 'Manufacturing',
      icon: Factory,
      items: [
        { name: 'Manufacturing ERP', href: '#' },
        { name: 'Production Planning', href: '#' },
        { name: 'Quality Control', href: '#' },
        { name: 'Supply Chain Management', href: '#' },
        { name: 'Factory Automation', href: '#' },
        { name: 'Predictive Maintenance', href: '#' },
        { name: 'Industrial IoT', href: '#' },
        { name: 'Asset Management', href: '#' }
      ]
    },
    {
      title: 'Hospitality & Tourism',
      icon: Plane,
      items: [
        { name: 'Hotel Management', href: '#' },
        { name: 'Booking Engine', href: '#' },
        { name: 'Restaurant POS', href: '#' },
        { name: 'Guest Management', href: '#' },
        { name: 'Travel Booking Platform', href: '#' },
        { name: 'Tour Management', href: '#' }
      ]
    },
    {
      title: 'Government & Smart City',
      icon: Landmark,
      items: [
        { name: 'Citizen Portal', href: '#' },
        { name: 'Smart City Dashboard', href: '#' },
        { name: 'Digital Government Services', href: '#' },
        { name: 'Permit Management', href: '#' },
        { name: 'Document Management', href: '#' },
        { name: 'Public Service Automation', href: '#' }
      ]
    }
  ],
  column3: [
    {
      title: 'AI Solutions',
      icon: Sparkles,
      items: [
        { name: 'AI Business Assistant', href: '#' },
        { name: 'AI Customer Support', href: '#' },
        { name: 'AI Document Processing', href: '#' },
        { name: 'AI Voice Agents', href: '#' },
        { name: 'AI Sales Assistant', href: '#' },
        { name: 'AI Recruitment Platform', href: '#' },
        { name: 'AI Analytics', href: '#' },
        { name: 'AI Knowledge Base', href: '#' },
        { name: 'AI Recommendation Engine', href: '#' }
      ]
    },
    {
      title: 'Business Intelligence',
      icon: TrendingUp,
      items: [
        { name: 'Executive Dashboards', href: '#' },
        { name: 'KPI Monitoring', href: '#' },
        { name: 'Business Analytics', href: '#' },
        { name: 'Predictive Analytics', href: '#' },
        { name: 'Market Intelligence', href: '#' },
        { name: 'Company Intelligence Platform', href: '#' },
        { name: 'Data Visualization', href: '#' }
      ]
    },
    {
      title: 'Cloud Solutions',
      icon: Cloud,
      items: [
        { name: 'Cloud Migration', href: '#' },
        { name: 'Multi-Cloud Architecture', href: '#' },
        { name: 'Hybrid Cloud', href: '#' },
        { name: 'Cloud Security', href: '#' },
        { name: 'Disaster Recovery', href: '#' },
        { name: 'Infrastructure Management', href: '#' }
      ]
    },
    {
      title: 'Cybersecurity Solutions',
      icon: ShieldAlert,
      items: [
        { name: 'Security Operations Center (SOC)', href: '#' },
        { name: 'Identity & Access Management', href: '#' },
        { name: 'Threat Detection', href: '#' },
        { name: 'Vulnerability Management', href: '#' },
        { name: 'Compliance Solutions', href: '#' },
        { name: 'Security Monitoring', href: '#' }
      ]
    }
  ]
}

export default function Header({ currentPage }: { currentPage?: string }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null)
  const [openMobileSubCategory, setOpenMobileSubCategory] = useState<string | null>(null)

  const navLinks = [
    { name: 'Home', href: '#/' },
    { name: 'About Us', href: '#/about' },
    { 
      name: 'Services', 
      href: '#', 
      hasDropdown: true
    },
    { 
      name: 'Solutions', 
      href: '#', 
      hasDropdown: true
    },
    { name: 'Portfolio', href: '#/portfolio' },
    { name: 'Blog', href: '#/blog' },
    { name: 'Careers', href: '#/careers' },
  ]

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between relative">
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
              (link.name === 'Services' && (currentPage === 'enterprise-solutions' || currentPage === 'cross-platform-apps' || currentPage === 'saas-product-development'))

            const isMegaMenu = link.name === 'Services' || link.name === 'Solutions'

            return (
              <div 
                key={link.name} 
                className={`${isMegaMenu ? '' : 'relative'} group flex items-center h-full py-4`}
              >
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

                {/* Services Mega Menu */}
                {link.name === 'Services' && (
                  <div className="absolute left-0 right-0 top-[80px] w-full bg-white/95 backdrop-blur-md border border-slate-200/60 rounded-2xl shadow-2xl shadow-brand-navy/10 p-8 grid grid-cols-4 gap-8 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 text-left scale-95 group-hover:scale-100 origin-top max-h-[calc(100vh-110px)] overflow-y-auto">
                    {/* Column 1 */}
                    <div className="flex flex-col gap-6">
                      {servicesMegaMenu.column1.map((category) => {
                        const Icon = category.icon
                        return (
                          <div key={category.title}>
                            <div className="flex items-center gap-2 text-xs font-bold text-[#253e73] uppercase tracking-wider mb-2">
                              <Icon className="w-4 h-4 text-brand-cyan shrink-0" />
                              <span>{category.title}</span>
                            </div>
                            <ul className="space-y-1.5 pl-5 border-l border-slate-100">
                              {category.items.map((item) => (
                                <li key={item.name}>
                                  <a
                                    href={item.href}
                                    className="text-[11.5px] font-semibold text-slate-500 hover:text-brand-cyan transition-all hover:translate-x-1 block py-0.5"
                                  >
                                    {item.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )
                      })}
                    </div>

                    {/* Column 2 */}
                    <div className="flex flex-col gap-6">
                      {servicesMegaMenu.column2.map((category) => {
                        const Icon = category.icon
                        return (
                          <div key={category.title}>
                            <div className="flex items-center gap-2 text-xs font-bold text-[#253e73] uppercase tracking-wider mb-2">
                              <Icon className="w-4 h-4 text-brand-cyan shrink-0" />
                              <span>{category.title}</span>
                            </div>
                            <ul className="space-y-1.5 pl-5 border-l border-slate-100">
                              {category.items.map((item) => (
                                <li key={item.name}>
                                  <a
                                    href={item.href}
                                    className="text-[11.5px] font-semibold text-slate-500 hover:text-brand-cyan transition-all hover:translate-x-1 block py-0.5"
                                  >
                                    {item.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )
                      })}
                    </div>

                    {/* Column 3 */}
                    <div className="flex flex-col gap-6">
                      {servicesMegaMenu.column3.map((category) => {
                        const Icon = category.icon
                        return (
                          <div key={category.title}>
                            <div className="flex items-center gap-2 text-xs font-bold text-[#253e73] uppercase tracking-wider mb-2">
                              <Icon className="w-4 h-4 text-brand-cyan shrink-0" />
                              <span>{category.title}</span>
                            </div>
                            <ul className="space-y-1.5 pl-5 border-l border-slate-100">
                              {category.items.map((item) => (
                                <li key={item.name}>
                                  <a
                                    href={item.href}
                                    className="text-[11.5px] font-semibold text-slate-500 hover:text-brand-cyan transition-all hover:translate-x-1 block py-0.5"
                                  >
                                    {item.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )
                      })}
                    </div>

                    {/* Column 4 */}
                    <div className="flex flex-col gap-6 bg-slate-50/50 p-5 rounded-xl border border-slate-100/50">
                      {servicesMegaMenu.column4.map((category) => {
                        const Icon = category.icon
                        return (
                          <div key={category.title} className="first:mt-0 mt-2">
                            <div className="flex items-center gap-2 text-xs font-bold text-[#253e73] uppercase tracking-wider mb-2">
                              <Icon className="w-4 h-4 text-brand-cyan shrink-0" />
                              <span>{category.title}</span>
                            </div>
                            <ul className="space-y-1.5 pl-5 border-l border-slate-100">
                              {category.items.map((item) => (
                                <li key={item.name}>
                                  <a
                                    href={item.href}
                                    className="text-[11.5px] font-semibold text-slate-500 hover:text-brand-cyan transition-all hover:translate-x-1 block py-0.5"
                                  >
                                    {item.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )}

                {/* Solutions Mega Menu */}
                {link.name === 'Solutions' && (
                  <div className="absolute left-0 right-0 top-[80px] w-full bg-white/95 backdrop-blur-md border border-slate-200/60 rounded-2xl shadow-2xl shadow-brand-navy/10 p-8 grid grid-cols-5 gap-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 text-left scale-95 group-hover:scale-100 origin-top max-h-[calc(100vh-110px)] overflow-y-auto">
                    {/* Column 1 */}
                    <div className="col-span-1 flex flex-col gap-5">
                      {solutionsMegaMenu.column1.map((category) => {
                        const Icon = category.icon
                        return (
                          <div key={category.title}>
                            <div className="flex items-center gap-2 text-xs font-bold text-[#253e73] uppercase tracking-wider mb-2">
                              <Icon className="w-3.5 h-3.5 text-brand-cyan shrink-0" />
                              <span>{category.title}</span>
                            </div>
                            <ul className="space-y-1 pl-4 border-l border-slate-100">
                              {category.items.map((item) => (
                                <li key={item.name}>
                                  <a
                                    href={item.href}
                                    className="text-[11px] font-semibold text-slate-500 hover:text-brand-cyan transition-all hover:translate-x-1 block py-0.5"
                                  >
                                    {item.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )
                      })}
                    </div>

                    {/* Column 2 (Spans 2 columns: Healthcare, Education, Logistics, Manufacturing, Hospitality, Government) */}
                    <div className="col-span-2 grid grid-cols-2 gap-5">
                      {/* Sub-column A */}
                      <div className="flex flex-col gap-5">
                        {solutionsMegaMenu.column2.slice(0, 3).map((category) => {
                          const Icon = category.icon
                          return (
                            <div key={category.title}>
                              <div className="flex items-center gap-2 text-xs font-bold text-[#253e73] uppercase tracking-wider mb-2">
                                <Icon className="w-3.5 h-3.5 text-brand-cyan shrink-0" />
                                <span>{category.title}</span>
                              </div>
                              <ul className="space-y-1 pl-4 border-l border-slate-100">
                                {category.items.map((item) => (
                                  <li key={item.name}>
                                    <a
                                      href={item.href}
                                      className="text-[11px] font-semibold text-slate-500 hover:text-brand-cyan transition-all hover:translate-x-1 block py-0.5"
                                    >
                                      {item.name}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )
                        })}
                      </div>

                      {/* Sub-column B */}
                      <div className="flex flex-col gap-5">
                        {solutionsMegaMenu.column2.slice(3).map((category) => {
                          const Icon = category.icon
                          return (
                            <div key={category.title}>
                              <div className="flex items-center gap-2 text-xs font-bold text-[#253e73] uppercase tracking-wider mb-2">
                                <Icon className="w-3.5 h-3.5 text-brand-cyan shrink-0" />
                                <span>{category.title}</span>
                              </div>
                              <ul className="space-y-1 pl-4 border-l border-slate-100">
                                {category.items.map((item) => (
                                  <li key={item.name}>
                                    <a
                                      href={item.href}
                                      className="text-[11px] font-semibold text-slate-500 hover:text-brand-cyan transition-all hover:translate-x-1 block py-0.5"
                                    >
                                      {item.name}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )
                        })}
                      </div>
                    </div>

                    {/* Column 3 */}
                    <div className="col-span-1 flex flex-col gap-5">
                      {solutionsMegaMenu.column3.map((category) => {
                        const Icon = category.icon
                        return (
                          <div key={category.title}>
                            <div className="flex items-center gap-2 text-xs font-bold text-[#253e73] uppercase tracking-wider mb-2">
                              <Icon className="w-3.5 h-3.5 text-brand-cyan shrink-0" />
                              <span>{category.title}</span>
                            </div>
                            <ul className="space-y-1 pl-4 border-l border-slate-100">
                              {category.items.map((item) => (
                                <li key={item.name}>
                                  <a
                                    href={item.href}
                                    className="text-[11px] font-semibold text-slate-500 hover:text-brand-cyan transition-all hover:translate-x-1 block py-0.5"
                                  >
                                    {item.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )
                      })}
                    </div>

                    {/* Column 4: Featured Solution Card */}
                    <div className="col-span-1 flex flex-col h-full justify-between bg-gradient-to-br from-[#062a69] to-[#0b2240] p-6 rounded-2xl text-white relative overflow-hidden border border-[#062a69]/25 shadow-md shadow-brand-navy/10">
                      {/* Background Soft Glow */}
                      <div className="absolute -right-16 -top-16 w-36 h-36 bg-brand-cyan/20 rounded-full blur-2xl pointer-events-none" />
                      
                      <div className="relative z-10 flex flex-col gap-3">
                        <div className="flex items-center gap-2 bg-brand-cyan/25 text-brand-cyan border border-brand-cyan/30 text-[10px] uppercase font-bold py-1 px-2.5 rounded-full w-fit">
                          <Sparkle className="w-3 h-3 shrink-0" />
                          Featured Solution
                        </div>
                        <h4 className="text-sm font-black font-heading tracking-tight leading-snug">
                          Digital Transformation Suite
                        </h4>
                        <p className="text-[11.5px] text-slate-300 leading-relaxed font-normal">
                          End-to-end AI, Cloud, Software Development & Enterprise Solutions for organizations worldwide.
                        </p>
                      </div>

                      <div className="relative z-10 mt-6 pt-4 border-t border-white/10 w-full">
                        <a
                          href="#"
                          className="bg-[#3EA77E] hover:bg-[#35906b] text-white font-semibold text-xs py-3 px-4 rounded-xl flex items-center justify-center gap-1.5 transition-all shadow-md shadow-[#3EA77E]/10 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                        >
                          <span>Explore Solutions</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
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
              (link.name === 'Services' && (currentPage === 'enterprise-solutions' || currentPage === 'cross-platform-apps' || currentPage === 'saas-product-development'))

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

                {/* Mobile Submenu for Services */}
                {link.hasDropdown && openMobileDropdown === link.name && link.name === 'Services' && (
                  <div className="pl-3 pb-3 flex flex-col gap-2 animate-in slide-in-from-top-2 duration-150 text-left border-l-2 border-slate-100 ml-2">
                    {[
                      ...servicesMegaMenu.column1,
                      ...servicesMegaMenu.column2,
                      ...servicesMegaMenu.column3,
                      ...servicesMegaMenu.column4
                    ].map((category) => {
                      const isSubOpen = openMobileSubCategory === category.title
                      const Icon = category.icon
                      return (
                        <div key={category.title} className="flex flex-col">
                          <button
                            onClick={() => setOpenMobileSubCategory(isSubOpen ? null : category.title)}
                            className="flex items-center justify-between text-left text-sm font-bold text-slate-700 py-1.5 hover:text-brand-cyan w-full cursor-pointer"
                          >
                            <span className="flex items-center gap-2">
                              <Icon className="w-3.5 h-3.5 text-brand-cyan" />
                              {category.title}
                            </span>
                            <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isSubOpen ? 'rotate-180' : ''}`} />
                          </button>
                          
                          {isSubOpen && (
                            <div className="pl-5 pb-1 flex flex-col gap-1.5 mt-0.5 border-l border-slate-100/80 ml-1.5 animate-in slide-in-from-top-1 duration-100">
                              {category.items.map((item) => (
                                <a
                                  key={item.name}
                                  href={item.href}
                                  className="text-xs font-semibold text-slate-500 hover:text-brand-cyan py-0.5"
                                  onClick={() => {
                                    setMobileMenuOpen(false)
                                    setOpenMobileDropdown(null)
                                    setOpenMobileSubCategory(null)
                                  }}
                                >
                                  {item.name}
                                </a>
                              ))}
                            </div>
                          )}
                        </div>
                      )
                    })}
                  </div>
                )}

                {/* Mobile Submenu for Solutions */}
                {link.hasDropdown && openMobileDropdown === link.name && link.name === 'Solutions' && (
                  <div className="pl-3 pb-3 flex flex-col gap-2 animate-in slide-in-from-top-2 duration-150 text-left border-l-2 border-slate-100 ml-2">
                    {[
                      ...solutionsMegaMenu.column1,
                      ...solutionsMegaMenu.column2,
                      ...solutionsMegaMenu.column3
                    ].map((category) => {
                      const isSubOpen = openMobileSubCategory === category.title
                      const Icon = category.icon
                      return (
                        <div key={category.title} className="flex flex-col">
                          <button
                            onClick={() => setOpenMobileSubCategory(isSubOpen ? null : category.title)}
                            className="flex items-center justify-between text-left text-sm font-bold text-slate-700 py-1.5 hover:text-[#3EA77E] w-full cursor-pointer"
                          >
                            <span className="flex items-center gap-2">
                              <Icon className="w-3.5 h-3.5 text-brand-cyan" />
                              {category.title}
                            </span>
                            <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isSubOpen ? 'rotate-180' : ''}`} />
                          </button>
                          
                          {isSubOpen && (
                            <div className="pl-5 pb-1 flex flex-col gap-1.5 mt-0.5 border-l border-slate-100/80 ml-1.5 animate-in slide-in-from-top-1 duration-100">
                              {category.items.map((item) => (
                                <a
                                  key={item.name}
                                  href={item.href}
                                  className="text-xs font-semibold text-slate-500 hover:text-brand-cyan py-0.5"
                                  onClick={() => {
                                    setMobileMenuOpen(false)
                                    setOpenMobileDropdown(null)
                                    setOpenMobileSubCategory(null)
                                  }}
                                >
                                  {item.name}
                                </a>
                              ))}
                            </div>
                          )}
                        </div>
                      )
                    })}
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
