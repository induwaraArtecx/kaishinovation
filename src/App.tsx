import { useState, useRef, Fragment, useEffect } from 'react'
import {
  Code,
  Brain,
  Cloud,
  BarChart3,
  ShieldCheck,
  Pencil,
  Building,
  ShoppingCart,
  HeartPulse,
  GraduationCap,
  Truck,
  Coins,
  Plane,
  Factory,
  MoreHorizontal,
  Search,
  FileText,
  Layers,
  Cpu,
  Rocket,
  HeartHandshake,
  ArrowRight,
  Calendar,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Users,
  Globe,
  Trophy
} from 'lucide-react'
import Header from './component/Header'
import Footer from './component/Footer'
import AboutUs from './component/AboutUs'
import Blog from './component/Blog'
import Portfolio from './component/Portfolio'
import awsLogo from './assets/aws.png'
import googleCloudLogo from './assets/google cloud.png'
import microsoftLogo from './assets/microsoft.png'
import saleforceLogo from './assets/saleforce.png'
import heroImage from './assets/home page - hero section - image.png'
import ctaBg from './assets/cta banner bg.png'

// Industry Filter Options
const industries = [
  { name: 'Real Estate', icon: Building },
  { name: 'Retail & E-Commerce', icon: ShoppingCart },
  { name: 'Healthcare', icon: HeartPulse },
  { name: 'Education', icon: GraduationCap },
  { name: 'Logistics', icon: Truck },
  { name: 'Finance', icon: Coins },
  { name: 'Travel & Hospitality', icon: Plane },
  { name: 'Manufacturing', icon: Factory },
  { name: 'More Industries', icon: MoreHorizontal },
]

// Services
const services = [
  {
    title: 'Software Development',
    description: 'Custom web, mobile & enterprise software built for performance and scalability.',
    icon: Code,
    bgColor: 'bg-blue-600',
    lightBg: 'bg-blue-50/80',
    iconColor: 'text-blue-600',
  },
  {
    title: 'AI & Machine Learning',
    description: 'Intelligent AI solutions that automate, analyze and accelerate your business.',
    icon: Brain,
    bgColor: 'bg-emerald-500',
    lightBg: 'bg-emerald-50/80',
    iconColor: 'text-emerald-500',
  },
  {
    title: 'Cloud & DevOps Solutions',
    description: 'Scalable cloud infrastructure, automation & DevOps for fast delivery.',
    icon: Cloud,
    bgColor: 'bg-indigo-600',
    lightBg: 'bg-indigo-50/80',
    iconColor: 'text-indigo-600',
  },
  {
    title: 'Data & Analytics',
    description: 'Transform data into actionable insights with advanced analytics & BI.',
    icon: BarChart3,
    bgColor: 'bg-amber-500',
    lightBg: 'bg-amber-50/80',
    iconColor: 'text-amber-500',
  },
  {
    title: 'Cybersecurity Solutions',
    description: 'Protect your business with advanced security, compliance & monitoring.',
    icon: ShieldCheck,
    bgColor: 'bg-rose-500',
    lightBg: 'bg-rose-50/80',
    iconColor: 'text-rose-500',
  },
  {
    title: 'UI/UX Design & Branding',
    description: 'Beautiful, user-centric designs that build strong brands and engage users.',
    icon: Pencil,
    bgColor: 'bg-cyan-500',
    lightBg: 'bg-cyan-50/80',
    iconColor: 'text-cyan-500',
  },
]

// Featured Projects
const projects = [
  {
    id: 1,
    title: 'SeaHome Japan',
    subtitle: 'Real Estate Platform',
    image: '/seahome_japan.png',
    tags: ['Web', 'Mobile', 'AI'],
    industry: 'Real Estate',
  },
  {
    id: 2,
    title: 'OneRoutes Retail',
    subtitle: 'Smart Retail Solution',
    image: '/oneroutes_retail.png',
    tags: ['POS', 'Analytics', 'Cloud'],
    industry: 'Retail & E-Commerce',
  },
  {
    id: 3,
    title: 'Business Hub',
    subtitle: 'Market Intelligence Platform',
    image: '/business_hub.png',
    tags: ['Data', 'Analytics', 'AI'],
    industry: 'Finance',
  },
]

// Process Steps
const steps = [
  {
    number: '01',
    title: 'Discover',
    description: 'We understand your goals, challenges & requirements.',
    icon: Search,
    bgColor: 'bg-blue-50/80',
    borderColor: 'border-blue-100 hover:border-blue-300',
    iconColor: 'text-blue-500',
  },
  {
    number: '02',
    title: 'Plan',
    description: 'We create a strategic roadmap tailored to your needs.',
    icon: FileText,
    bgColor: 'bg-indigo-50/80',
    borderColor: 'border-indigo-100 hover:border-indigo-300',
    iconColor: 'text-indigo-500',
  },
  {
    number: '03',
    title: 'Design',
    description: 'We design intuitive, engaging & scalable solutions.',
    icon: Layers,
    bgColor: 'bg-purple-50/80',
    borderColor: 'border-purple-100 hover:border-purple-300',
    iconColor: 'text-purple-500',
  },
  {
    number: '04',
    title: 'Develop',
    description: 'Agile development with quality & speed at every step.',
    icon: Cpu,
    bgColor: 'bg-amber-50/80',
    borderColor: 'border-amber-100 hover:border-amber-300',
    iconColor: 'text-amber-500',
  },
  {
    number: '05',
    title: 'Deliver',
    description: 'We deliver, deploy & ensure smooth adoption.',
    icon: Rocket,
    bgColor: 'bg-rose-50/80',
    borderColor: 'border-rose-100 hover:border-rose-300',
    iconColor: 'text-rose-500',
  },
  {
    number: '06',
    title: 'Support',
    description: 'Continuous support, updates & long-term partnership.',
    icon: HeartHandshake,
    bgColor: 'bg-fuchsia-50/80',
    borderColor: 'border-fuchsia-100 hover:border-fuchsia-300',
    iconColor: 'text-fuchsia-500',
  },
]

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'about' | 'blog' | 'portfolio'>(() => {
    const hash = window.location.hash
    if (hash === '#/about') return 'about'
    if (hash === '#/blog') return 'blog'
    if (hash === '#/portfolio') return 'portfolio'
    return 'home'
  })
  const [activeIndustry, setActiveIndustry] = useState('Real Estate')
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0)
  const sliderRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash
      if (hash === '#/about') {
        setCurrentPage('about')
      } else if (hash === '#/blog') {
        setCurrentPage('blog')
      } else if (hash === '#/portfolio') {
        setCurrentPage('portfolio')
      } else {
        setCurrentPage('home')
      }
      window.scrollTo(0, 0)
    }
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const nextProject = () => {
    const nextIdx = (currentProjectIndex + 1) % projects.length
    setCurrentProjectIndex(nextIdx)
    setActiveIndustry(projects[nextIdx].industry)
  }

  const prevProject = () => {
    const prevIdx = (currentProjectIndex - 1 + projects.length) % projects.length
    setCurrentProjectIndex(prevIdx)
    setActiveIndustry(projects[prevIdx].industry)
  }

  const handleIndustryClick = (indName: string) => {
    setActiveIndustry(indName)
    const projectIndex = projects.findIndex((p) => p.industry === indName)
    if (projectIndex !== -1) {
      setCurrentProjectIndex(projectIndex)
    }
  }



  return (
    <div className="min-h-screen bg-slate-50/30 text-brand-navy font-sans antialiased">

      {/* HEADER / NAVBAR */}
      <Header currentPage={currentPage} />

      {currentPage === 'home' ? (
        <>

      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-12 pb-10 lg:pt-16 lg:pb-12 bg-white flex items-center lg:min-h-[620px] xl:min-h-[700px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">

          {/* Left Column Text */}
          <div className="lg:col-span-5 flex flex-col items-start text-left z-10">
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] lg:leading-[1.15] font-heading font-black tracking-tight text-brand-navy">
              We Build Intelligent <br />
              Solutions for a <br />
              <span className="text-[#253e73]">Smarter</span> <span className="text-[#3EA77E]">Tomorrow</span>
            </h1>
            <p className="mt-6 text-[16px] leading-relaxed text-slate-500 font-normal max-w-xl">
              Kaishi Innovations delivers next-generation AI, software, and digital solutions that help businesses transform, scale, and lead in a digital world.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button className="bg-brand-navy hover:bg-brand-navy/90 text-white font-semibold px-8 h-12 rounded-lg flex items-center justify-center gap-2 transition-all shadow-lg shadow-brand-navy/10 group">
                Explore Solutions
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border border-brand-navy hover:bg-brand-navy/5 bg-white text-brand-navy font-semibold px-8 h-12 rounded-lg flex items-center justify-center gap-2 transition-all">
                Book a Consultation
                <Calendar className="w-4 h-4 text-brand-cyan" />
              </button>
            </div>

            {/* Partner Logos */}
            <div className="mt-16 w-full">
              <div className="flex flex-row items-center gap-x-6 sm:gap-x-8">
                <div className="h-8 sm:h-10 flex items-center">
                  <img src={awsLogo} alt="AWS" className="h-full object-contain cursor-pointer hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="h-5 sm:h-7 flex items-center">
                  <img src={microsoftLogo} alt="Microsoft" className="h-full object-contain cursor-pointer hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="h-8 sm:h-10 flex items-center">
                  <img src={googleCloudLogo} alt="Google Cloud" className="h-full object-contain cursor-pointer hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="h-8 sm:h-10 flex items-center">
                  <img src={saleforceLogo} alt="Salesforce" className="h-full object-contain cursor-pointer hover:scale-105 transition-transform duration-300" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column Visual Mockup - High Fidelity Image from ui.jpeg (Full-bleed right side) */}
          <div className="lg:col-span-7 w-full mt-8 lg:mt-0 lg:absolute lg:right-0 lg:top-0 lg:w-[54vw] xl:w-[56vw] z-0">
            <img
              src={heroImage}
              alt="Kaishi Innovations Dashboard & Smart Infrastructure Mockup"
              className="w-full h-auto object-contain block"
            />
          </div>

        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="pt-12 pb-12 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-slate-400">What We Do</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-heading font-black text-[#253e73]">
            End-to-End <span className="text-[#3EA77E]">Digital Solutions</span>
          </h2>
          <p className="mt-4 text-slate-500 font-normal max-w-xl mx-auto text-[15px] leading-relaxed">
            From strategy and design to development and support, we build solutions that drive real business impact.
          </p>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 text-left">
            {services.map((service) => {
              const IconComp = service.icon
              return (
                <div
                  key={service.title}
                  className="bg-white p-5 rounded-2xl border border-slate-100 hover:border-slate-200/80 shadow-md shadow-slate-100/40 hover:shadow-xl hover:shadow-slate-200/30 transition-all hover:-translate-y-1.5 duration-300 group"
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${service.bgColor} shadow-sm shadow-slate-100/50 transition-all duration-300 group-hover:scale-110`}>
                    <IconComp className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="mt-5 text-[15px] font-bold font-heading text-brand-navy group-hover:text-brand-cyan transition-colors leading-snug">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-slate-500 text-[12.5px] leading-relaxed font-normal">
                    {service.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* STATS BANNER */}
      <section className="bg-slate-50/50 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[24px] py-10 px-6 sm:px-10 lg:px-12 text-white shadow-xl shadow-brand-blue-dark/10 bg-[#062a69]">
            {/* Background effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#082a67] via-[#0a3178] to-[#07245d]" />

            {/* Soft glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(59,130,246,0.18),transparent_45%)]" />

            {/* Wave pattern */}
            <div
              className="absolute inset-0 opacity-40"
              style={{
                backgroundImage: "url('/wave-pattern.svg')",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "bottom center",
                backgroundSize: "cover",
              }}
            />

            {/* Content */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-8 lg:gap-y-0 relative z-10">

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

              <div className="flex items-center justify-center gap-4 py-4 px-2 border-r border-dashed border-white/15">
                <Globe className="w-9 h-9 text-cyan-400 shrink-0" />
                <div className="text-left">
                  <span className="text-3xl sm:text-4xl font-heading font-black block tracking-tight text-white leading-none">25+</span>
                  <span className="text-xs sm:text-sm text-slate-300 font-medium mt-1.5 block">Countries Served</span>
                </div>
              </div>

              <div className="flex items-center justify-center gap-4 py-4 px-2">
                <Trophy className="w-9 h-9 text-amber-400 shrink-0" />
                <div className="text-left">
                  <span className="text-3xl sm:text-4xl font-heading font-black block tracking-tight text-white leading-none">8+</span>
                  <span className="text-xs sm:text-sm text-slate-300 font-medium mt-1.5 block">Years of Excellence</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* SOLUTIONS SECTION */}
      <section className="pt-24 pb-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center">
            <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-slate-400">Solutions for Every Industry</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-heading font-black text-[#253e73]">
              We Understand. We Build. <span className="text-[#3EA77E]">We Deliver.</span>
            </h2>
          </div>

          {/* Industry Icons Slider Section */}
          <div className="mt-12 overflow-x-auto scrollbar-none flex justify-between items-center gap-4 sm:gap-6 lg:gap-2 xl:gap-4 pb-2 border-b border-slate-100 w-full">
            {industries.map((ind, index) => {
              const IndIcon = ind.icon
              const isActive = activeIndustry === ind.name
              return (
                <Fragment key={ind.name}>
                  <button
                    onClick={() => handleIndustryClick(ind.name)}
                    className={`flex flex-col items-center gap-3 px-3 py-2 transition-all duration-300 relative shrink-0 group ${isActive ? 'scale-[1.03]' : 'hover:-translate-y-0.5'
                      }`}
                  >
                    <IndIcon className={`w-8 h-8 transition-colors duration-300 ${isActive ? 'text-brand-cyan' : 'text-brand-navy'
                      }`} />
                    <span className={`text-[13px] tracking-tight transition-colors duration-300 whitespace-nowrap ${isActive ? 'font-bold text-brand-navy' : 'font-medium text-slate-500 group-hover:text-brand-navy'
                      }`}>
                      {ind.name}
                    </span>
                    <div className={`absolute -bottom-[9px] left-0 right-0 h-[2px] rounded-full transition-all duration-300 ${isActive ? 'bg-brand-cyan scale-100' : 'bg-transparent scale-0 group-hover:scale-50 group-hover:bg-slate-300'
                      }`} />
                  </button>
                  {index < industries.length - 1 && (
                    <div className="w-[1px] h-8 bg-slate-200 shrink-0" />
                  )}
                </Fragment>
              )
            })}
          </div>

          {/* Featured Projects Grid & Slider Control - Containerized with Border */}
          <div className="mt-16 relative p-8 sm:p-12 border border-slate-100 rounded-[32px] bg-slate-50/10">

            {/* Left Arrow (floats on the far left edge of the bordered box, before "Real Solutions") */}
            <button
              onClick={prevProject}
              className="absolute -left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-brand-navy hover:bg-brand-cyan text-white flex items-center justify-center shadow-lg transition-all cursor-pointer"
              aria-label="Previous Project"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

              {/* Left Info Column */}
              <div className="lg:col-span-3 text-left flex flex-col items-start pr-4">
                <span className="text-[10px] font-bold uppercase tracking-wider bg-gradient-to-r from-[#b7e7ef] via-[#6ca8d6] to-[#3156a3] bg-clip-text text-transparent">
                  Featured Projects
                </span>
                <h3 className="mt-3 text-2xl sm:text-3xl font-heading font-black text-brand-navy leading-tight">
                  Real Solutions. <br />
                  Real Impact.
                </h3>
                <p className="mt-4 text-slate-500 text-[14px] leading-relaxed font-normal">
                  We partner with businesses to build innovative products that solve complex challenges and scale growth.
                </p>

                <button className="mt-8 bg-brand-navy hover:bg-brand-cyan text-white font-semibold text-xs px-6 py-3 rounded-full flex items-center gap-2 transition-all shadow-md group cursor-pointer">
                  View All Projects
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Right Card Grid/Slider Column */}
              <div className="lg:col-span-9 relative overflow-hidden">
                <div
                  ref={sliderRef}
                  className="grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-500"
                >
                  {projects.map((project, idx) => (
                    <div
                      key={project.id}
                      className={`bg-white rounded-2xl overflow-hidden border border-slate-100 transition-all duration-300 hover:shadow-xl flex flex-col h-full group ${idx === currentProjectIndex ? 'border-brand-cyan ring-1 ring-brand-cyan/20 scale-[1.01]' : 'opacity-85 hover:opacity-100'
                        }`}
                    >
                      {/* Image Block */}
                      <div className="aspect-[4/3] w-full overflow-hidden bg-slate-200 relative">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>

                      {/* Content Block with Expand Icon on the Right */}
                      <div className="p-6 flex-grow flex flex-col justify-between text-left">
                        <div className="flex justify-between items-start gap-4">
                          <div>
                            <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">{project.subtitle}</span>
                            <h4 className="mt-2 text-base font-bold font-heading text-brand-navy group-hover:text-brand-cyan transition-colors">{project.title}</h4>
                          </div>

                          {/* Expanding icon next to text details */}
                          <div className="bg-brand-navy hover:bg-brand-cyan text-white p-2 rounded-lg shadow-md transition-colors cursor-pointer shrink-0 mt-1">
                            <ExternalLink className="w-4.5 h-4.5" />
                          </div>
                        </div>

                        <div className="mt-6 flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="bg-slate-50 px-3 py-1 rounded-full text-[10px] font-semibold text-slate-500 border border-slate-100"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Slider Dots */}
                <div className="mt-8 flex justify-center gap-2">
                  {projects.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        setCurrentProjectIndex(i)
                        setActiveIndustry(projects[i].industry)
                      }}
                      className={`w-2.5 h-2.5 rounded-full transition-all ${i === currentProjectIndex ? 'bg-brand-cyan w-6' : 'bg-slate-200'
                        }`}
                    />
                  ))}
                </div>

              </div>
            </div>

            {/* Right Arrow (floats on the far right edge of the bordered box, after cards slider) */}
            <button
              onClick={nextProject}
              className="absolute -right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-brand-navy hover:bg-brand-cyan text-white flex items-center justify-center shadow-lg transition-all cursor-pointer"
              aria-label="Next Project"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

          </div>

        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="pt-12 pb-24 bg-slate-50/30 border-t border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-slate-400">Our Process</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-heading font-black text-brand-navy">
            Your Vision. Our Process. <span className="text-emerald-500">Real Results.</span>
          </h2>

          {/* Process Timeline */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8 relative">
            {/* Connection Line decoration */}
            <div className="hidden lg:block absolute top-8 left-8 right-8 h-0.5 border-t-2 border-dashed border-slate-200 z-0"></div>

            {steps.map((step) => {
              const StepIcon = step.icon
              return (
                <div key={step.number} className="flex flex-row items-start gap-3 relative z-10 text-left">
                  <div className={`w-16 h-16 rounded-full shrink-0 ${step.bgColor} border-2 ${step.borderColor} flex items-center justify-center shadow-lg shadow-slate-100 transition-all hover:-translate-y-1 duration-300 group cursor-default`}>
                    <StepIcon className={`w-8 h-8 ${step.iconColor} transition-colors`} />
                  </div>

                  <div className="flex flex-col mt-1">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-xs font-bold text-brand-cyan">{step.number}</span>
                      <h4 className="text-sm font-bold font-heading text-brand-navy">{step.title}</h4>
                    </div>
                    <p className="mt-1.5 text-slate-500 text-[11px] leading-relaxed font-normal max-w-[130px]">
                      {step.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-6 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="relative overflow-hidden bg-brand-cyan text-white py-8 px-6 sm:px-12 md:py-8 md:px-16 rounded-[24px] flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl"
            style={{
              backgroundImage: `url("${ctaBg}")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            {/* Overlay to ensure text readability */}
            <div className="absolute inset-0 bg-brand-cyan/50 z-0"></div>


            <div className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left md:max-w-2xl">
              <h2 className="text-2xl md:text-3xl font-heading font-black tracking-tight">Ready to Build What's Next?</h2>
              <p className="mt-2 text-white/90 text-sm md:text-base font-normal max-w-xl">
                Let's build intelligent solutions that help drive your business forward.
              </p>
            </div>

            <div className="relative z-10 w-full md:w-auto flex justify-center md:justify-end shrink-0">
              <button className="border-2 border-white bg-transparent hover:bg-white hover:text-brand-cyan text-white font-bold text-[15px] px-8 h-12 rounded-full flex items-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98] group cursor-pointer">
                Let's Talk
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

        </>
      ) : currentPage === 'about' ? (
        <AboutUs />
      ) : currentPage === 'portfolio' ? (
        <Portfolio />
      ) : (
        <Blog />
      )}

      {/* FOOTER */}
      <Footer />

    </div>
  )
}

export default App
