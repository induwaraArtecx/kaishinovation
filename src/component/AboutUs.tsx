import {
  Target,
  Eye,
  Gem,
  Rocket,
  Users,
  Globe,
  Trophy,
  Smile,
  Zap,
  ShieldCheck,
  TrendingUp,
  Headphones,
  Mail,
  ArrowRight,
  Building,
  User
} from 'lucide-react'
import awsLogo from '../assets/aws.png'
import googleCloudLogo from '../assets/google cloud.png'
import microsoftLogo from '../assets/microsoft.png'
import saleforceLogo from '../assets/saleforce.png'
import ctaBg from '../assets/cta banner bg.png'

export default function AboutUs() {
  const pillars = [
    {
      title: 'Our Mission',
      description: 'Deliver innovative solutions that drive real business impact.',
      icon: Target
    },
    {
      title: 'Our Vision',
      description: 'To be a global leader in AI & digital transformation.',
      icon: Eye
    },
    {
      title: 'Our Values',
      description: 'Innovation, Integrity, Excellence and Partnership.',
      icon: Gem
    }
  ]

  const stats = [
    { value: '560+', label: 'Projects Delivered', icon: Rocket, color: 'text-sky-400' },
    { value: '320+', label: 'Happy Clients', icon: Users, color: 'text-[#3EA77E]' },
    { value: '25+', label: 'Countries Served', icon: Globe, color: 'text-cyan-400' },
    { value: '8+', label: 'Years of Excellence', icon: Trophy, color: 'text-amber-400' },
    { value: '95%', label: 'Client Satisfaction', icon: Smile, color: 'text-emerald-400' }
  ]

  const valuesGrid = [
    {
      title: 'Expert Team',
      description: 'Skilled professionals with deep industry knowledge.',
      icon: Users,
      iconColor: 'text-[#253e73]'
    },
    {
      title: 'Innovation First',
      description: 'We leverage the latest technologies to build future-ready solutions.',
      icon: Zap,
      iconColor: 'text-amber-500'
    },
    {
      title: 'Quality Assured',
      description: 'We follow best practices to deliver secure and reliable solutions.',
      icon: ShieldCheck,
      iconColor: 'text-[#3EA77E]'
    },
    {
      title: 'Client Success',
      description: 'We are committed to your growth and long-term success.',
      icon: TrendingUp,
      iconColor: 'text-blue-500'
    },
    {
      title: 'Global Reach',
      description: 'Serving clients across 25+ countries worldwide.',
      icon: Globe,
      iconColor: 'text-cyan-500'
    },
    {
      title: '24/7 Support',
      description: 'We are here to support your business every step of the way.',
      icon: Headphones,
      iconColor: 'text-rose-500'
    }
  ]

  const leaders = [
    {
      name: 'Kashif Khan',
      role: 'Founder & CEO',
      desc: 'Visionary leader with a passion for technology and business transformation.',
      linkedin: '#',
      twitter: '#',
      email: 'mailto:kashif@kaishiinnovations.com',
      image: '/team_kashif.png'
    },
    {
      name: 'Mohammed Asif',
      role: 'CTO',
      desc: 'Tech enthusiast driving innovation in AI, cloud & software architecture.',
      linkedin: '#',
      twitter: '#',
      email: 'mailto:asif@kaishiinnovations.com',
      image: '/team_asif.png'
    },
    {
      name: 'Sana Khan',
      role: 'COO',
      desc: 'Operations strategist focused on delivering excellence and value.',
      linkedin: '#',
      twitter: '#',
      email: 'mailto:sana@kaishiinnovations.com',
      image: '/team_sana.png'
    },
    {
      name: 'Imran Ahmed',
      role: 'Head of Delivery',
      desc: 'Ensures smooth execution of projects with quality and on-time delivery.',
      linkedin: '#',
      twitter: '#',
      email: 'mailto:imran@kaishiinnovations.com',
      image: '/team_imran.png'
    }
  ]

  const awards = [
    { title: 'Top AI Solutions', subtitle: 'Company 2023' },
    { title: 'Excellence in', subtitle: 'Software Delivery' },
    { title: 'Rising Star', subtitle: 'Award 2022' },
    { title: 'Best Digital', subtitle: 'Transformation Firm' }
  ]

  return (
    <div className="w-full bg-slate-50/20 text-brand-navy font-sans antialiased">
      {/* 1. Hero / Intro Section */}
      <section className="relative overflow-hidden py-16 lg:py-24 bg-white flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
          {/* Left Text */}
          <div className="lg:col-span-6 flex flex-col items-start text-left z-10 w-full">
            <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#253e73]">
              ABOUT US
            </span>
            <h1 className="mt-3 text-4xl sm:text-[48px] sm:leading-[1.15] font-heading font-black tracking-tight text-brand-navy">
              Innovating Today. <br />
              Transforming <span className="text-[#3EA77E]">Tomorrow.</span>
            </h1>
            <p className="mt-6 text-[15px] leading-relaxed text-slate-500 font-normal max-w-xl">
              Kaishi Innovations is a global technology company passionate about building intelligent, scalable, and
              impactful solutions. We help businesses unlock their potential through next-generation software, AI,
              cloud, and digital transformation services.
            </p>

            {/* Core Pillars */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 w-full border-t border-slate-200/80 pt-8">
              {pillars.map((pillar, index) => {
                const Icon = pillar.icon
                return (
                  <div
                    key={pillar.title}
                    className={`flex flex-col items-start text-left w-full pb-6 sm:pb-0 ${index === 0
                        ? 'sm:pr-8'
                        : index === 1
                          ? 'sm:px-8 sm:border-x sm:border-slate-200/70'
                          : 'sm:pl-8'
                      }`}
                  >
                    <Icon className="w-9 h-9 text-brand-navy mb-3.5 stroke-[1.5]" />
                    <h3 className="text-sm font-bold font-heading text-brand-navy">{pillar.title}</h3>
                    <p className="mt-1 text-slate-500 text-[11.5px] leading-relaxed font-normal">
                      {pillar.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right Visual Image */}
          <div className="lg:col-span-6 w-full flex justify-center items-center relative">
            {/* Background design elements */}
            <div className="absolute -right-8 -top-8 w-64 h-64 bg-brand-cyan/5 rounded-full blur-3xl" />
            <div className="absolute -left-8 -bottom-8 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl" />

            <div className="relative w-full h-[350px] lg:h-[450px] rounded-3xl overflow-hidden border border-slate-200/50 flex flex-col items-center justify-center group shadow-lg">
              <img
                src="/about_us_office.png"
                alt="Kaishi Innovations Corporate Office"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue-dark/50 to-brand-cyan/15 opacity-90 transition-opacity group-hover:opacity-80 duration-500" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Stats Counter Banner */}
      <section className="bg-white pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="relative overflow-hidden rounded-[28px] py-6 px-6 sm:px-10 lg:px-12 text-white shadow-xl bg-[#062a69] w-full">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#082a67] via-[#0a3178] to-[#07245d]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(59,130,246,0.15),transparent_45%)]" />

            <div className="grid grid-cols-2 md:grid-cols-5 gap-y-8 md:gap-y-0 relative z-10 divide-x divide-white/10">
              {stats.map((stat, idx) => {
                const StatIcon = stat.icon
                return (
                  <div key={stat.label} className={`flex flex-row items-center justify-center gap-4 px-4 ${idx % 2 === 0 ? '' : 'border-r border-dashed border-white/10 md:border-r-0'}`}>
                    <StatIcon className={`w-8 h-8 ${stat.color} shrink-0`} />
                    <div className="text-left">
                      <span className="text-2xl sm:text-3xl font-heading font-black block tracking-tight text-white leading-none">
                        {stat.value}
                      </span>
                      <span className="text-[10px] sm:text-xs text-slate-300 font-semibold mt-1 block uppercase tracking-wider leading-tight">
                        {stat.label}
                      </span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Our Story Section */}
      <section className="py-16 lg:py-24 bg-slate-50/50 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
          {/* Left Description */}
          <div className="lg:col-span-6 flex flex-col items-start text-left z-10">
            <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#253e73]">
              OUR STORY
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-heading font-black text-[#253e73]">
              The Journey of <span className="text-[#3EA77E]">Kaishi Innovations</span>
            </h2>
            <div className="mt-6 space-y-4 text-[14px] leading-relaxed text-slate-500 font-normal">
              <p>
                Founded with a vision to create a better tomorrow through technology, Kaishi Innovations began as a
                small team of passionate developers and designers. Today, we are a global team of innovators, engineers,
                and strategists delivering solutions that empower businesses to grow, scale, and lead in a digital world.
              </p>
              <p>
                From startups to enterprises, we have partnered with organizations across industries, turning ideas into
                powerful digital realities.
              </p>
            </div>

            <button className="mt-8 bg-[#10356C] hover:bg-[#10356C]/90 text-white font-semibold text-sm px-8 h-12 rounded-lg flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#10356C]/20 group cursor-pointer">
              Our Journey
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right SVG Roadmap */}
          <div className="lg:col-span-6 w-full">
            <div className="relative w-full h-[320px] bg-[#031430] rounded-3xl p-6 overflow-hidden shadow-xl border border-[#0b2240] flex items-center justify-center">
              {/* Starry/Grid Background Effect */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(0,180,216,0.15),transparent_60%)]" />
              <div className="absolute inset-0 opacity-15" style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

              {/* SVG Timeline Path */}
              <svg viewBox="0 0 500 300" className="absolute inset-0 w-full h-full p-6 overflow-visible" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="roadGradient" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#00b4d8" />
                    <stop offset="50%" stopColor="#3EA77E" />
                    <stop offset="100%" stopColor="#3b82f6" />
                  </linearGradient>
                  <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="6" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {/* The Path Line */}
                <path
                  d="M 50 240 C 120 240, 140 170, 200 170 C 260 170, 280 110, 340 110 C 400 110, 420 50, 450 50"
                  fill="none"
                  stroke="url(#roadGradient)"
                  strokeWidth="6"
                  strokeLinecap="round"
                  className="drop-shadow-[0_0_8px_rgba(0,180,216,0.5)]"
                />

                {/* SVG Nodes */}
                {/* 2016 Node */}
                <circle cx="50" cy="240" r="8" fill="#00b4d8" filter="url(#glow)" className="animate-pulse" />
                <circle cx="50" cy="240" r="4" fill="#ffffff" />

                {/* 2018 Node */}
                <circle cx="200" cy="170" r="8" fill="#3EA77E" filter="url(#glow)" />
                <circle cx="200" cy="170" r="4" fill="#ffffff" />

                {/* 2021 Node */}
                <circle cx="340" cy="110" r="8" fill="#00b4d8" filter="url(#glow)" />
                <circle cx="340" cy="110" r="4" fill="#ffffff" />

                {/* 2024 & Beyond Node */}
                <circle cx="450" cy="50" r="8" fill="#3b82f6" filter="url(#glow)" />
                <circle cx="450" cy="50" r="4" fill="#ffffff" />
              </svg>

              {/* Absolute HTML Text labels matching the points */}
              {/* Step 1: 2016 */}
              <div className="absolute left-[6%] bottom-[12%] flex flex-col items-start text-left z-10">
                <span className="text-white font-heading font-black text-xs sm:text-sm tracking-wide bg-brand-cyan/20 px-2 py-0.5 rounded border border-brand-cyan/30">2016</span>
                <span className="text-white text-[10px] sm:text-xs font-bold mt-1">Founded</span>
              </div>

              {/* Step 2: 2018 */}
              <div className="absolute left-[34%] bottom-[38%] flex flex-col items-start text-left z-10">
                <span className="text-white font-heading font-black text-xs sm:text-sm tracking-wide bg-[#3EA77E]/20 px-2 py-0.5 rounded border border-[#3EA77E]/30">2018</span>
                <span className="text-white text-[10px] sm:text-xs font-bold mt-1">First 100+ Clients</span>
              </div>

              {/* Step 3: 2021 */}
              <div className="absolute left-[62%] top-[34%] flex flex-col items-start text-left z-10">
                <span className="text-white font-heading font-black text-xs sm:text-sm tracking-wide bg-brand-cyan/20 px-2 py-0.5 rounded border border-brand-cyan/30">2021</span>
                <span className="text-white text-[10px] sm:text-xs font-bold mt-1">Global Expansion</span>
              </div>

              {/* Step 4: 2024 & Beyond */}
              <div className="absolute right-[6%] top-[10%] flex flex-col items-start text-left z-10">
                <div className="flex items-center gap-1.5 bg-blue-500/20 px-2 py-0.5 rounded border border-blue-500/30">
                  <span className="text-white font-heading font-black text-xs sm:text-sm tracking-wide">2024 & Beyond</span>
                </div>
                <span className="text-white text-[10px] sm:text-xs font-bold mt-1">Building the Future</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Why Choose Us Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-slate-400">
            WHY CHOOSE US
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-heading font-black text-[#253e73]">
            We Turn Ideas Into <span className="text-[#3EA77E]">Intelligent Solutions</span>
          </h2>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 text-center w-full">
            {valuesGrid.map((item) => {
              const ItemIcon = item.icon
              return (
                <div
                  key={item.title}
                  className="bg-white p-6 rounded-2xl border border-slate-100 hover:border-slate-200/80 shadow-md shadow-slate-100/40 hover:shadow-xl hover:shadow-slate-200/30 transition-all hover:-translate-y-1.5 duration-300 group flex flex-col items-center"
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-slate-50 border border-slate-100 shadow-sm transition-all duration-300 group-hover:scale-110 mb-5 ${item.iconColor}`}>
                    <ItemIcon className="w-6 h-6" />
                  </div>
                  <h3 className="text-sm font-bold font-heading text-brand-navy leading-snug group-hover:text-brand-cyan transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-slate-500 text-[11.5px] leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 5. Our Leadership Section */}
      <section className="py-16 lg:py-24 bg-slate-50/30 border-t border-slate-100 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-slate-400">
            OUR LEADERSHIP
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-heading font-black text-brand-navy">
            Meet the Minds Behind Kaishi <span className="text-[#3EA77E]"> Innovations</span>
          </h2>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 text-center w-full">
            {leaders.map((leader) => (
              <div
                key={leader.name}
                className="bg-white rounded-2xl border border-slate-100 p-5 sm:p-6 shadow-sm hover:shadow-xl hover:border-slate-200/80 transition-all duration-300 group flex flex-row items-center gap-5 w-full text-left"
              >
                {/* Profile Circle Image (Big) */}
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-slate-100 border-2 border-slate-100 shadow-md overflow-hidden relative shrink-0 group-hover:border-brand-cyan transition-colors duration-300">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Right side: Name, Role, Desc, Socials */}
                <div className="flex-grow flex flex-col text-left">
                  <div>
                    <h3 className="text-sm sm:text-base font-bold font-heading text-brand-navy leading-tight">{leader.name}</h3>
                    <span className="text-[10px] sm:text-[11px] font-bold text-[#00b4d8] uppercase tracking-wider mt-1 block">{leader.role}</span>
                  </div>
                  
                  <p className="mt-3 text-slate-500 text-[11px] sm:text-[12px] leading-relaxed font-normal">
                    {leader.desc}
                  </p>

                  {/* Social icons */}
                  <div className="mt-4 flex items-center gap-2.5">
                    <a
                      href={leader.linkedin}
                      className="w-7 h-7 rounded-full border border-blue-200 text-blue-600 hover:text-blue-800 hover:border-blue-800 hover:bg-blue-50/50 flex items-center justify-center transition-all"
                      aria-label="LinkedIn"
                    >
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                    <a
                      href={leader.twitter}
                      className="w-7 h-7 rounded-full border border-blue-200 text-blue-600 hover:text-blue-800 hover:border-blue-800 hover:bg-blue-50/50 flex items-center justify-center transition-all"
                      aria-label="Twitter"
                    >
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </a>
                    <a
                      href={leader.email}
                      className="w-7 h-7 rounded-full border border-blue-200 text-blue-600 hover:text-blue-800 hover:border-blue-800 hover:bg-blue-50/50 flex items-center justify-center transition-all"
                      aria-label="Email"
                    >
                      <Mail className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Awards & Partners Double Banner */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 w-full">

          {/* Left Banner: Awards */}
          <div className="lg:col-span-6 rounded-[28px] bg-[#062a69] text-white p-8 sm:p-10 relative overflow-hidden shadow-xl flex flex-col justify-between">
            {/* Background design */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#082a67] to-[#07245d]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.15),transparent_40%)]" />

            <div className="relative z-10 text-left">
              <div className="flex items-center gap-3">
                <Trophy className="w-6 h-6 text-amber-400" />
                <h3 className="text-xl sm:text-2xl font-heading font-black text-white">Awards & Recognition</h3>
              </div>
              <p className="mt-2 text-slate-300 text-xs sm:text-[13px] font-normal leading-relaxed max-w-md">
                Our commitment to innovation and excellence has been recognized globally.
              </p>
            </div>

            {/* Awards Grid */}
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 relative z-10">
              {awards.map((award, idx) => (
                <div key={idx} className="flex flex-col items-center text-center">
                  {/* Laurel Wreath Inline SVG */}
                  <svg viewBox="0 0 100 100" className="w-14 h-14 text-amber-400 fill-none stroke-current" strokeWidth="2.5">
                    {/* Laurel branch left */}
                    <path d="M 45,80 C 25,75 15,55 20,35 C 22,30 28,25 35,22 M 25,70 C 27,65 31,62 36,63 M 20,55 C 23,50 28,48 33,51 M 20,38 C 24,34 30,34 34,39" strokeLinecap="round" />
                    {/* Laurel branch right */}
                    <path d="M 55,80 C 75,75 85,55 80,35 C 78,30 72,25 65,22 M 75,70 C 73,65 69,62 64,63 M 80,55 C 77,50 72,48 67,51 M 80,38 C 76,34 70,34 66,39" strokeLinecap="round" />
                    {/* Star/Award inside */}
                    <polygon points="50,38 53,46 62,46 55,51 57,59 50,54 43,59 45,51 38,46 47,46" fill="currentColor" />
                  </svg>
                  <span className="text-[10px] font-bold text-white mt-3 leading-tight block">
                    {award.title}
                  </span>
                  <span className="text-[9px] text-slate-300 leading-tight block mt-0.5">
                    {award.subtitle}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Banner: Technology Partners */}
          <div className="lg:col-span-6 rounded-[28px] bg-slate-50 border border-slate-100 p-8 sm:p-10 shadow-sm flex flex-col justify-between">
            <div className="text-left">
              <div className="flex items-center gap-3">
                <Globe className="w-6 h-6 text-brand-cyan" />
                <h3 className="text-xl sm:text-2xl font-heading font-black text-brand-navy">Our Technology Partners</h3>
              </div>
              <p className="mt-2 text-slate-500 text-xs sm:text-[13px] font-normal leading-relaxed max-w-md">
                We collaborate with global technology leaders to deliver the best for our clients.
              </p>
            </div>

            {/* Partner Logos Row */}
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 items-center justify-items-center">
              <div className="h-10 sm:h-12 flex items-center justify-center p-2 rounded-xl bg-white border border-slate-100/50 shadow-sm hover:scale-105 transition-transform duration-300 w-full">
                <img src={awsLogo} alt="AWS" className="h-full max-w-full object-contain" />
              </div>
              <div className="h-7 sm:h-9 flex items-center justify-center p-2 rounded-xl bg-white border border-slate-100/50 shadow-sm hover:scale-105 transition-transform duration-300 w-full">
                <img src={microsoftLogo} alt="Microsoft" className="h-full max-w-full object-contain" />
              </div>
              <div className="h-10 sm:h-12 flex items-center justify-center p-2 rounded-xl bg-white border border-slate-100/50 shadow-sm hover:scale-105 transition-transform duration-300 w-full">
                <img src={googleCloudLogo} alt="Google Cloud" className="h-full max-w-full object-contain" />
              </div>
              <div className="h-10 sm:h-12 flex items-center justify-center p-2 rounded-xl bg-white border border-slate-100/50 shadow-sm hover:scale-105 transition-transform duration-300 w-full">
                <img src={saleforceLogo} alt="Salesforce" className="h-full max-w-full object-contain" />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 7. CTA Banner */}
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
              <h2 className="text-2xl md:text-3xl font-heading font-black tracking-tight leading-tight">Let's Build the Future Together</h2>
              <p className="mt-2 text-white/90 text-sm md:text-base font-normal max-w-xl leading-relaxed">
                Partner with Kaishi Innovations and transform your ideas into impactful digital solutions.
              </p>
            </div>

            <div className="relative z-10 w-full md:w-auto flex justify-center md:justify-end shrink-0">
              <button className="border-2 border-white bg-transparent hover:bg-white hover:text-brand-cyan text-white font-bold text-[15px] px-8 h-12 rounded-full flex items-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98] group cursor-pointer shadow-md">
                Let's Talk
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
