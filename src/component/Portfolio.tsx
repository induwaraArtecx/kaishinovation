import { useState, useMemo, useRef } from 'react'
import {
  Lightbulb,
  ShieldCheck,
  Rocket,
  Users,
  Globe,
  Trophy,
  Smile,
  ChevronDown,
  SlidersHorizontal,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Calendar,
  ArrowRight
} from 'lucide-react'

// Import static assets
import portfolioHeroMockup from '../assets/portfolio_hero_mockup.png'
import awsLogo from '../assets/aws.png'
import googleCloudLogo from '../assets/google cloud.png'
import microsoftLogo from '../assets/microsoft.png'
import saleforceLogo from '../assets/saleforce.png'
import ctaBg from '../assets/cta banner bg.png'
import fujitsuLogo from '../assets/fujitsu.png'
import marubeniLogo from '../assets/Marubeni-logo.png'
import softbankLogo from '../assets/softbank-logo.png'
import sapLogo from '../assets/sap logo.png'

interface Project {
  id: number
  title: string
  subtitle: string
  categories: string[]
  tagLabel: string
  tagColor: string
  image: string
  description: string
  link: string
  date: string
}

const PROJECTS_DATA: Project[] = [
  {
    id: 1,
    title: 'SeaHome Japan',
    subtitle: 'Real Estate Platform',
    categories: ['Web Development', 'Industry Solutions'],
    tagLabel: 'Real Estate',
    tagColor: 'text-emerald-600 bg-emerald-50 border border-emerald-100',
    image: '/seahome_japan.png',
    description: 'A comprehensive real estate platform for property listings, management, and investment solutions.',
    link: '#',
    date: '2024-05-15'
  },
  {
    id: 2,
    title: 'OneRoutes Retail',
    subtitle: 'Smart Retail Solution',
    categories: ['Web Development', 'Mobile Apps', 'Industry Solutions'],
    tagLabel: 'Retail',
    tagColor: 'text-purple-600 bg-purple-50 border border-purple-100',
    image: '/oneroutes_retail.png',
    description: 'An integrated retail platform with POS, inventory management, and analytics.',
    link: '#',
    date: '2024-05-10'
  },
  {
    id: 3,
    title: 'Business Hub',
    subtitle: 'Market Intelligence Platform',
    categories: ['Web Development', 'AI Solutions', 'Data & Analytics'],
    tagLabel: 'Data & Analytics',
    tagColor: 'text-amber-600 bg-amber-50 border border-amber-100',
    image: '/business_hub.png',
    description: 'A powerful business intelligence platform providing real-time market insights and company data.',
    link: '#',
    date: '2024-05-01'
  },
  {
    id: 4,
    title: 'QuickEats',
    subtitle: 'Food Delivery App',
    categories: ['Mobile Apps'],
    tagLabel: 'Mobile App',
    tagColor: 'text-blue-600 bg-blue-50 border border-blue-100',
    image: '/quickeats.png',
    description: 'A seamless food delivery app with real-time tracking, secure payments, and user-friendly interface.',
    link: '#',
    date: '2024-04-20'
  },
  {
    id: 5,
    title: 'Medicare Plus',
    subtitle: 'Healthcare Management System',
    categories: ['Web Development', 'Industry Solutions'],
    tagLabel: 'Healthcare',
    tagColor: 'text-teal-600 bg-teal-50 border border-teal-100',
    image: '/medicare_plus.png',
    description: 'A complete hospital management system for appointments, patient records, and billing.',
    link: '#',
    date: '2024-04-10'
  },
  {
    id: 6,
    title: 'LogiTrack',
    subtitle: 'Logistics & Fleet Management',
    categories: ['Cloud & DevOps', 'Industry Solutions'],
    tagLabel: 'Logistics',
    tagColor: 'text-orange-600 bg-orange-50 border border-orange-100',
    image: '/logitrack.png',
    description: 'Real-time fleet tracking, route optimization, and analytics for logistics companies.',
    link: '#',
    date: '2024-04-01'
  }
]

const FILTER_TABS = [
  'All Projects',
  'Web Development',
  'Mobile Apps',
  'AI Solutions',
  'Cloud & DevOps',
  'Data & Analytics',
  'Industry Solutions'
]

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All Projects')
  const [sortOption, setSortOption] = useState<'latest' | 'oldest' | 'alphabetical'>('latest')
  const [sortDropdownOpen, setSortDropdownOpen] = useState(false)
  const tickerRef = useRef<HTMLDivElement>(null)

  // Filtering & Sorting logic
  const filteredAndSortedProjects = useMemo(() => {
    let result = [...PROJECTS_DATA]

    // Apply Filter
    if (activeFilter !== 'All Projects') {
      result = result.filter((project) => project.categories.includes(activeFilter))
    }

    // Apply Sort
    if (sortOption === 'latest') {
      result.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    } else if (sortOption === 'oldest') {
      result.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    } else if (sortOption === 'alphabetical') {
      result.sort((a, b) => a.title.localeCompare(b.title))
    }

    return result
  }, [activeFilter, sortOption])

  // Horizontal Ticker Scroll
  const scrollTicker = (direction: 'left' | 'right') => {
    if (tickerRef.current) {
      const scrollAmount = 240
      tickerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className="w-full bg-[#F8FAFC] min-h-screen text-[#0b2240] font-sans antialiased">
      {/* ==========================================
          1. HERO SECTION (Dark Blue, Two-Column)
          ========================================== */}
      <section className="relative overflow-hidden py-16 lg:py-24 bg-[#031430] text-white flex items-center">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#031430] via-[#051a3a] to-[#031430]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_120%,rgba(0,180,216,0.18),transparent_55%)]" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full relative z-10 text-left">
          {/* Left Text Column */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#00b4d8]">
              OUR PORTFOLIO
            </span>
            <h1 className="mt-3 text-4xl sm:text-[48px] lg:text-[54px] sm:leading-[1.15] font-heading font-black tracking-tight text-white">
              Innovative Solutions. <br />
              <span className="text-[#00b4d8]">Real-World Impact.</span>
            </h1>
            <p className="mt-6 text-slate-300 text-base md:text-[15px] leading-relaxed max-w-xl font-normal">
              Explore our diverse portfolio of successful projects that showcase our expertise, creativity, and commitment to delivering exceptional results.
            </p>

            {/* Core Pillars / Features at bottom-left */}
            <div className="mt-10 space-y-6 w-full border-t border-white/10 pt-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-[#00b4d8]">
                  <Lightbulb className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">Customized Solutions</h3>
                  <p className="text-slate-400 text-xs mt-1">Tailored to your unique business needs</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-[#00b4d8]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">Quality Assured</h3>
                  <p className="text-slate-400 text-xs mt-1">High performance, secure and scalable solutions</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-[#00b4d8]">
                  <Rocket className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">Results Driven</h3>
                  <p className="text-slate-400 text-xs mt-1">Solutions that drive growth and real business impact</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual Mockup Image (Futuristic dashboard mockup) */}
          <div className="lg:col-span-7 w-full flex justify-center items-center relative">
            <div className="absolute w-72 h-72 rounded-full bg-[#00b4d8]/10 blur-3xl" />
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden border border-slate-800 shadow-2xl flex items-center justify-center bg-slate-900/60">
              <img
                src={portfolioHeroMockup}
                alt="Kaishi Innovations Dashboard & Product Showcase"
                className="w-full h-full object-cover block"
              />
              
              {/* Glassmorphic Project Count Badge floating inside Mockup */}
              <div className="absolute bottom-6 right-6 glassmorphism-dark py-3 px-5 rounded-2xl flex items-center gap-3.5 border border-white/10 shadow-lg text-white">
                <div className="w-9 h-9 rounded-xl bg-[#00b4d8] flex items-center justify-center shrink-0">
                  <Rocket className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <span className="text-lg font-heading font-black block leading-none">560+</span>
                  <span className="text-[10px] text-slate-300 font-medium mt-0.5 block whitespace-nowrap">Projects Delivered</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          2. FILTER & SORT NAVIGATION CAPTURE
          ========================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-6 relative z-30">
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 w-full border-b border-slate-100 pb-6">
          {/* Filter Tabs Container Capsule */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
            {FILTER_TABS.map((tab) => {
              const isActive = activeFilter === tab
              return (
                <button
                  key={tab}
                  onClick={() => setActiveFilter(tab)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wide transition-all duration-200 shrink-0 border ${
                    isActive
                      ? 'bg-[#0b2240] text-white border-[#0b2240] shadow-md shadow-[#0b2240]/10'
                      : 'bg-white text-slate-500 border-slate-200 hover:border-slate-300 hover:text-[#0b2240]'
                  } cursor-pointer`}
                >
                  {tab}
                </button>
              )
            })}
          </div>

          {/* Sort Dropdown Selector */}
          <div className="flex items-center gap-3 self-end lg:self-auto shrink-0 relative">
            <button
              onClick={() => setSortDropdownOpen(!sortDropdownOpen)}
              className="flex items-center gap-2.5 bg-white border border-slate-200 px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-600 hover:border-slate-300 hover:text-[#0b2240] transition-colors cursor-pointer shadow-sm"
            >
              <span>
                {sortOption === 'latest'
                  ? 'Latest First'
                  : sortOption === 'oldest'
                  ? 'Oldest First'
                  : 'Alphabetical'}
              </span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${sortDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Filter Toggle Button */}
            <button className="bg-white border border-slate-200 p-2.5 rounded-xl text-slate-500 hover:border-slate-300 hover:text-[#0b2240] transition-colors shadow-sm cursor-pointer">
              <SlidersHorizontal className="w-4.5 h-4.5" />
            </button>

            {/* Dropdown Options Box */}
            {sortDropdownOpen && (
              <div className="absolute right-12 top-full mt-2 w-48 bg-white border border-slate-100 rounded-xl shadow-xl py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150 text-left">
                <button
                  onClick={() => {
                    setSortOption('latest')
                    setSortDropdownOpen(false)
                  }}
                  className={`w-full px-4 py-2 text-xs text-left hover:bg-slate-50 font-medium ${
                    sortOption === 'latest' ? 'text-[#00b4d8] font-bold' : 'text-slate-600'
                  }`}
                >
                  Latest First
                </button>
                <button
                  onClick={() => {
                    setSortOption('oldest')
                    setSortDropdownOpen(false)
                  }}
                  className={`w-full px-4 py-2 text-xs text-left hover:bg-slate-50 font-medium ${
                    sortOption === 'oldest' ? 'text-[#00b4d8] font-bold' : 'text-slate-600'
                  }`}
                >
                  Oldest First
                </button>
                <button
                  onClick={() => {
                    setSortOption('alphabetical')
                    setSortDropdownOpen(false)
                  }}
                  className={`w-full px-4 py-2 text-xs text-left hover:bg-slate-50 font-medium ${
                    sortOption === 'alphabetical' ? 'text-[#00b4d8] font-bold' : 'text-slate-600'
                  }`}
                >
                  Alphabetical
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ==========================================
          3. PORTFOLIO GRID SECTION (3-Columns)
          ========================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 pb-16">
        {filteredAndSortedProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAndSortedProjects.map((project) => (
              <article
                key={project.id}
                className="group bg-white rounded-[24px] overflow-hidden border border-slate-100 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col h-full text-left"
              >
                {/* Image Block with floating expand button */}
                <div className="aspect-[16/10] w-full overflow-hidden bg-slate-100 relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* External Link Overlay Button */}
                  <a
                    href={project.link}
                    className="absolute top-4 right-4 bg-[#0b2240]/80 hover:bg-[#00b4d8] text-white p-2.5 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-[-8px] group-hover:translate-y-0"
                    aria-label={`Open ${project.title} case study`}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                {/* Details Section */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    {/* Header Row: Title, Subtitle, and industry tags */}
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <h3 className="text-lg font-black font-heading text-[#0b2240] group-hover:text-[#00b4d8] transition-colors leading-tight">
                          {project.title}
                        </h3>
                        <span className="text-xs text-slate-400 font-semibold mt-1 block">
                          {project.subtitle}
                        </span>
                      </div>
                      
                      {/* Industry Tag Badge */}
                      <span className={`px-3 py-1 rounded-full text-[10.5px] font-bold uppercase tracking-wider shrink-0 ${project.tagColor}`}>
                        {project.tagLabel}
                      </span>
                    </div>

                    {/* Excerpt Paragraph */}
                    <p className="mt-4 text-slate-500 text-xs sm:text-[13px] leading-relaxed font-normal">
                      {project.description}
                    </p>
                  </div>

                  {/* Read Case Study CTA button */}
                  <div className="mt-6 pt-4 border-t border-slate-50">
                    <a
                      href={project.link}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0b2240] hover:text-[#0077b6] transition-colors group/link"
                    >
                      View Case Study
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="py-24 text-center bg-white border border-slate-100 rounded-3xl shadow-sm max-w-xl mx-auto px-6">
            <span className="text-slate-400 text-sm font-semibold block">No projects found in this category.</span>
            <button
              onClick={() => setActiveFilter('All Projects')}
              className="mt-4 px-6 py-2.5 bg-[#00b4d8] hover:bg-[#0077b6] text-white rounded-xl text-xs font-bold transition-all shadow-md shadow-[#00b4d8]/10 cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>

      {/* ==========================================
          4. STATS COUNTER BANNER SECTION
          ========================================== */}
      <section className="bg-slate-50/50 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[24px] py-10 px-6 sm:px-10 lg:px-12 text-white shadow-xl shadow-brand-blue-dark/10 bg-[#062a69]">
            {/* Background effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#082a67] via-[#0a3178] to-[#07245d]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(59,130,246,0.18),transparent_45%)]" />
            <div
              className="absolute inset-0 opacity-40"
              style={{
                backgroundImage: "url('/wave-pattern.svg')",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "bottom center",
                backgroundSize: "cover"
              }}
            />

            {/* Content stats */}
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-y-8 lg:gap-y-0 relative z-10">
              <div className="flex items-center justify-center gap-4 py-4 px-2 border-r border-b border-dashed border-white/15 lg:border-b-0">
                <Rocket className="w-9 h-9 text-sky-400 shrink-0" />
                <div className="text-left">
                  <span className="text-3xl sm:text-4xl font-heading font-black block tracking-tight text-white leading-none">560+</span>
                  <span className="text-xs sm:text-sm text-slate-300 font-medium mt-1.5 block">Projects Delivered</span>
                </div>
              </div>

              <div className="flex items-center justify-center gap-4 py-4 px-2 border-b border-dashed border-white/15 lg:border-r lg:border-b-0">
                <Users className="w-9 h-9 text-[#3EA77E] shrink-0" />
                <div className="text-left">
                  <span className="text-3xl sm:text-4xl font-heading font-black block tracking-tight text-white leading-none">320+</span>
                  <span className="text-xs sm:text-sm text-slate-300 font-medium mt-1.5 block">Happy Clients</span>
                </div>
              </div>

              <div className="flex items-center justify-center gap-4 py-4 px-2 border-r border-b border-dashed border-white/15 lg:border-b-0">
                <Globe className="w-9 h-9 text-cyan-400 shrink-0" />
                <div className="text-left">
                  <span className="text-3xl sm:text-4xl font-heading font-black block tracking-tight text-white leading-none">25+</span>
                  <span className="text-xs sm:text-sm text-slate-300 font-medium mt-1.5 block">Countries Served</span>
                </div>
              </div>

              <div className="flex items-center justify-center gap-4 py-4 px-2 border-r border-dashed border-white/15">
                <Trophy className="w-9 h-9 text-amber-400 shrink-0" />
                <div className="text-left">
                  <span className="text-3xl sm:text-4xl font-heading font-black block tracking-tight text-white leading-none">8+</span>
                  <span className="text-xs sm:text-sm text-slate-300 font-medium mt-1.5 block">Years of Excellence</span>
                </div>
              </div>

              <div className="flex items-center justify-center gap-4 py-4 px-2">
                <Smile className="w-9 h-9 text-emerald-400 shrink-0" />
                <div className="text-left">
                  <span className="text-3xl sm:text-4xl font-heading font-black block tracking-tight text-white leading-none">95%</span>
                  <span className="text-xs sm:text-sm text-slate-300 font-medium mt-1.5 block">Client Satisfaction</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          5. TRUSTED BY COMPANIES SLIDER TICKER
          ========================================== */}
      <section className="py-12 bg-white border-t border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">
            TRUSTED BY INNOVATIVE COMPANIES WORLDWIDE
          </span>

          <div className="mt-8 flex items-center gap-4 justify-between max-w-5xl mx-auto">
            {/* Left Chevron */}
            <button
              onClick={() => scrollTicker('left')}
              className="w-9 h-9 rounded-full bg-slate-50 border border-slate-150 hover:bg-slate-100 hover:text-brand-cyan text-slate-500 flex items-center justify-center transition-all cursor-pointer shrink-0"
              aria-label="Scroll logo list left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Scrolling Viewport */}
            <div
              ref={tickerRef}
              className="flex items-center gap-10 sm:gap-14 overflow-x-auto scrollbar-none py-2 w-full px-2"
            >
              {/* Custom SVG logo / Text logo representations */}
              
              {/* 1. Fujitsu Logo */}
              <div className="h-14 flex items-center justify-center shrink-0 hover:scale-105 transition-transform duration-300 cursor-pointer">
                <img src={fujitsuLogo} alt="Fujitsu Logo" className="h-full object-contain" />
              </div>

              {/* 2. Marubeni Logo */}
              <div className="h-14 flex items-center justify-center shrink-0 hover:scale-105 transition-transform duration-300 cursor-pointer">
                <img src={marubeniLogo} alt="Marubeni Logo" className="h-full object-contain" />
              </div>

              {/* 3. SoftBank Logo */}
              <div className="h-12 flex items-center justify-center shrink-0 hover:scale-105 transition-transform duration-300 cursor-pointer">
                <img src={softbankLogo} alt="SoftBank Logo" className="h-full object-contain" />
              </div>

              {/* 4. Microsoft Logo */}
              <div className="h-9 flex items-center justify-center shrink-0 hover:scale-105 transition-transform duration-300 cursor-pointer">
                <img src={microsoftLogo} alt="Microsoft Logo" className="h-full object-contain" />
              </div>

              {/* 5. AWS Logo */}
              <div className="h-10 flex items-center justify-center shrink-0 hover:scale-105 transition-transform duration-300 cursor-pointer">
                <img src={awsLogo} alt="AWS Logo" className="h-full object-contain" />
              </div>

              {/* 6. Google Cloud Logo */}
              <div className="h-9 flex items-center justify-center shrink-0 hover:scale-105 transition-transform duration-300 cursor-pointer">
                <img src={googleCloudLogo} alt="Google Cloud Logo" className="h-full object-contain" />
              </div>

              {/* 7. Salesforce Logo */}
              <div className="h-10 flex items-center justify-center shrink-0 hover:scale-105 transition-transform duration-300 cursor-pointer">
                <img src={saleforceLogo} alt="Salesforce Logo" className="h-full object-contain" />
              </div>

              {/* 8. SAP Logo */}
              <div className="h-9 flex items-center justify-center shrink-0 hover:scale-105 transition-transform duration-300 cursor-pointer">
                <img src={sapLogo} alt="SAP Logo" className="h-full object-contain" />
              </div>
            </div>

            {/* Right Chevron */}
            <button
              onClick={() => scrollTicker('right')}
              className="w-9 h-9 rounded-full bg-slate-50 border border-slate-150 hover:bg-slate-100 hover:text-brand-cyan text-slate-500 flex items-center justify-center transition-all cursor-pointer shrink-0"
              aria-label="Scroll logo list right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* ==========================================
          6. CALL TO ACTION BANNER (Mesh grid)
          ========================================== */}
      <section className="py-16 bg-white flex justify-center w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div
            className="relative overflow-hidden bg-[#062a69] text-white py-14 px-8 sm:px-16 rounded-[32px] flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl w-full"
            style={{
              backgroundImage: `url("${ctaBg}")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            {/* Overlay glow */}
            <div className="absolute inset-0 bg-[#062a69]/40 z-0" />
            
            <div className="relative z-10 flex flex-col items-center lg:items-start text-center lg:text-left lg:max-w-3xl">
              <h2 className="text-3xl sm:text-4xl font-heading font-meduim tracking-tight leading-tight">
                Have a Project in Mind?
              </h2>
              <p className="mt-3 text-slate-350 text-sm sm:text-base font-normal max-w-2xl leading-relaxed">
                Let's build something great together. We're ready to turn your ideas into powerful digital solutions.
              </p>
            </div>

            <div className="relative z-10 w-full lg:w-auto flex flex-col sm:flex-row justify-center lg:justify-end gap-4 shrink-0">
              {/* Start a Project Teal button */}
              <button className="bg-brand-cyan hover:bg-brand-cyan-dark text-white font-bold text-[14px] px-8 h-12 rounded-xl flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98] group cursor-pointer shadow-lg shadow-brand-cyan/20">
                Start a Project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              
              {/* Book consultation outline button */}
              <button className="border-2 border-white hover:bg-white hover:text-brand-navy text-white font-bold text-[14px] px-8 h-12 rounded-xl flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer">
                Book a Consultation
                <Calendar className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
