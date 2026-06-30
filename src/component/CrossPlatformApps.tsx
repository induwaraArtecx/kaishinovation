import {
  Code,
  ShieldCheck,
  TrendingUp,
  Clock,
  Activity,
  Zap,
  Coins,
  RefreshCw,
  HeartPulse,
  Landmark,
  ShoppingCart,
  Truck,
  Search,
  FileText,
  Layout,
  Rocket,
  ChevronRight,
  FolderOpen,
  ArrowRight,
  User,
  DollarSign,
  Layers,
  Plane,
  Tv,
  Sparkles,
  Users,
  Building,
  GraduationCap,
  MessageSquare,
  Star,
  ExternalLink
} from 'lucide-react'

// Import technology icons
import flutterIcon from '../assets/technology icons/flutter.png'
import reactIcon from '../assets/technology icons/react.png'
import dartIcon from '../assets/technology icons/dart.png'
import tsIcon from '../assets/technology icons/typescript.png'
import jsIcon from '../assets/technology icons/javascript.png'
import firebaseIcon from '../assets/technology icons/firebase.png'
import reduxIcon from '../assets/technology icons/redux.png'
import nodeIcon from '../assets/technology icons/node js.png'
import graphqlIcon from '../assets/technology icons/graphql.png'
import mongodbIcon from '../assets/technology icons/mongodb.png'
import restapiIcon from '../assets/technology icons/rest api.png'
import ctaBg from '../assets/cta banner bg.png'

export default function CrossPlatformApps() {
  const whyChooseUs = [
    {
      title: 'Single Codebase',
      desc: 'One codebase for iOS, Android and Web saves time and development effort.',
      icon: Layout,
    },
    {
      title: 'Faster Deployment',
      desc: 'Launch your product on multiple platforms simultaneously and beat the competition.',
      icon: Rocket,
    },
    {
      title: 'Cost Savings',
      desc: 'Reduce development, testing and maintenance costs with shared resources.',
      icon: Coins,
    },
    {
      title: 'Consistent Experience',
      desc: 'Deliver a unified look and feel across all platforms with seamless user experience.',
      icon: ShieldCheck,
    },
    {
      title: 'Easy Maintenance',
      desc: 'Update features and fix bugs once and deploy everywhere effortlessly.',
      icon: RefreshCw,
    },
    {
      title: 'Scalable & Future-Ready',
      desc: 'Scale your app as your business grows and adapt to new platforms with ease.',
      icon: TrendingUp,
    },
  ]

  const processSteps = [
    {
      step: '01',
      title: 'Discover',
      desc: 'We understand your business, users and goals to define success.',
      icon: Search,
    },
    {
      step: '02',
      title: 'Plan & Architect',
      desc: 'We plan features and design scalable app architecture.',
      icon: FileText,
    },
    {
      step: '03',
      title: 'Design',
      desc: 'We create intuitive UI/UX designs that engage and delight users.',
      icon: Layout,
    },
    {
      step: '04',
      title: 'Develop',
      desc: 'We build robust, cross-platform apps with clean, maintainable code.',
      icon: Code,
    },
    {
      step: '05',
      title: 'Test',
      desc: 'We perform rigorous testing for quality, performance and compatibility.',
      icon: ShieldCheck,
    },
    {
      step: '06',
      title: 'Deploy & Support',
      desc: 'We launch your app and provide ongoing support and enhancements.',
      icon: Rocket,
    },
  ]

  const techStack = [
    { name: 'Flutter', img: flutterIcon },
    { name: 'React Native', img: reactIcon },
    { name: 'Dart', img: dartIcon },
    { name: 'TypeScript', img: tsIcon },
    { name: 'JavaScript', img: jsIcon },
    { name: 'Firebase', img: firebaseIcon },
    { name: 'Redux', img: reduxIcon },
    { name: 'Node.js', img: nodeIcon },
    { name: 'GraphQL', img: graphqlIcon },
    { name: 'MongoDB', img: mongodbIcon },
    { name: 'REST APIs', img: restapiIcon },
  ]

  const industries = [
    { title: 'Retail & eCommerce', icon: ShoppingCart },
    { title: 'Healthcare', icon: HeartPulse },
    { title: 'Finance & Banking', icon: Landmark },
    { title: 'Real Estate', icon: Building },
    { title: 'Education', icon: GraduationCap },
    { title: 'Logistics', icon: Truck },
    { title: 'Travel & Hospitality', icon: Plane },
    { title: 'Media & Entertainment', icon: Tv },
    { title: 'On-Demand Services', icon: Sparkles },
    { title: 'Social Networking', icon: MessageSquare },
  ]

  const successStories = [
    {
      title: 'ShopEase',
      tag: 'eCommerce',
      image: '/quickeats.png',
      desc: 'Cross-platform shopping app with seamless experience.',
      stats: [
        { label: 'Faster Time to Market', value: '50%', icon: Clock },
        { label: 'Lower Development Cost', value: '40%', icon: Coins },
      ]
    },
    {
      title: 'MediConnect',
      tag: 'Healthcare',
      image: '/medicare_plus.png',
      desc: 'Patient engagement app for appointments and telehealth.',
      stats: [
        { label: 'Increase in User Engagement', value: '60%', icon: TrendingUp },
        { label: 'App Performance Uptime', value: '99.9%', icon: ShieldCheck },
      ]
    },
    {
      title: 'WealthTrack',
      tag: 'Finance',
      image: '/business_hub.png',
      desc: 'Personal finance app with smart insights and analytics.',
      stats: [
        { label: 'Increase in Daily Active Users', value: '35%', icon: Users },
        { label: 'Average App Store Rating', value: '4.8★', icon: Star },
      ]
    }
  ]

  return (
    <div className="w-full bg-white text-slate-800 font-sans antialiased">
      {/* ==========================================
          1. BREADCRUMBS
          ========================================== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2 text-left">
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-semibold tracking-wide">
          <a href="#/" className="text-brand-cyan hover:text-brand-cyan-dark transition-colors">Home</a>
          <ChevronRight className="w-3 h-3 text-slate-400 stroke-[2.5]" />
          <span className="text-slate-400">Services</span>
          <ChevronRight className="w-3 h-3 text-slate-400 stroke-[2.5]" />
          <span className="text-slate-400">Mobile App Development</span>
          <ChevronRight className="w-3 h-3 text-slate-400 stroke-[2.5]" />
          <span className="text-brand-navy font-bold">Cross-Platform Apps</span>
        </div>
      </div>

      {/* ==========================================
          2. HERO SECTION
          ========================================== */}
      <section className="relative overflow-hidden pt-8 pb-16 lg:pb-24 bg-white flex items-center lg:min-h-[640px]">
        {/* Right diagonal layout mask */}
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[48vw] bg-[#031430] hidden lg:block overflow-hidden"
          style={{ clipPath: 'polygon(8% 0%, 100% 0%, 100% 100%, 0% 100%)' }}>
          <div className="absolute inset-0 bg-gradient-to-tr from-[#031430] via-[#051c3d] to-[#031430]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,180,216,0.18),transparent_50%)]" />
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full relative z-10">
          {/* Left Column Content */}
          <div className="lg:col-span-6 flex flex-col items-start text-left z-10">
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#3EA77E]">
              Cross-Platform App Development
            </span>
            <h1 className="mt-3 text-4xl sm:text-[46px] lg:text-[54px] lg:leading-[1.12] font-heading font-black tracking-tight text-brand-navy">
              One Code. Any Platform. <br />
              <span className="text-[#3EA77E]">Maximum  Impact.</span>
            </h1>
            <p className="mt-5 text-[14.5px] leading-relaxed text-slate-500 font-normal max-w-xl">
              We build high-performance cross-platform apps that deliver native-like experiences on iOS and Android—faster, smarter, and more cost-effective.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button className="bg-[#3EA77E] hover:bg-[#35906b] text-white font-bold text-[14px] px-8 h-12 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#3EA77E]/20 cursor-pointer group">
                Schedule a Consultation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border border-slate-200 hover:bg-slate-50 text-brand-navy font-bold text-[14px] px-8 h-12 rounded-xl flex items-center justify-center gap-2 transition-all bg-white cursor-pointer shadow-sm">
                View Our Work
                <FolderOpen className="w-4 h-4 text-brand-cyan" />
              </button>
            </div>

            {/* Tiny features below CTA */}
            <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-6 max-w-lg">
              <div className="flex gap-3.5 items-start">
                <Clock className="w-8 h-8 text-brand-cyan shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="text-[12.5px] font-bold text-brand-navy">Faster Time to Market</span>
                  <span className="text-[10px] text-slate-400 mt-0.5 leading-snug">Launch across platforms in less time</span>
                </div>
              </div>
              <div className="flex gap-3.5 items-start">
                <Coins className="w-8 h-8 text-brand-cyan shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="text-[12.5px] font-bold text-brand-navy">Cost Effective</span>
                  <span className="text-[10px] text-slate-400 mt-0.5 leading-snug">Reduce development & maintenance costs</span>
                </div>
              </div>
              <div className="flex gap-3.5 items-start">
                <Zap className="w-8 h-8 text-brand-cyan shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="text-[12.5px] font-bold text-brand-navy">Native Like Performance</span>
                  <span className="text-[10px] text-slate-400 mt-0.5 leading-snug">Smooth, responsive & high-performing apps</span>
                </div>
              </div>
              <div className="flex gap-3.5 items-start">
                <Layers className="w-8 h-8 text-brand-cyan shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="text-[12.5px] font-bold text-brand-navy">Single Codebase</span>
                  <span className="text-[10px] text-slate-400 mt-0.5 leading-snug">Build once, deploy everywhere</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column High-Fidelity Mockups */}
          <div className="lg:col-span-6 w-full flex flex-col justify-center items-center relative mt-10 lg:mt-0 select-none">
            {/* Mobile View Container (Renders only on mobile/tablet instead of full diagonal layout) */}
            <div className="absolute inset-0 bg-[#031430]/95 rounded-3xl -z-10 lg:hidden block p-6" />

            {/* Mockups Layout */}
            <div className="relative w-full max-w-[540px] aspect-[1.3] flex items-center justify-center">
              
              {/* 1. Left Mobile Device Mockup (White theme dashboard) */}
              <div className="absolute left-[3%] top-[12%] w-[33%] aspect-[0.5] rounded-[24px] border-[4px] border-slate-200 bg-white flex flex-col p-2 shadow-2xl z-20 overflow-hidden hover:scale-[1.03] transition-transform duration-500 text-left">
                <div className="w-10 h-2 bg-slate-200 rounded-full mx-auto mb-1.5 shrink-0" />
                <div className="flex flex-col gap-2 h-full text-[7px] text-slate-500 overflow-hidden">
                  <div className="flex justify-between items-center text-slate-800 font-bold border-b pb-1">
                    <span>Dashboard</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  </div>
                  <div className="bg-slate-50 p-1.5 rounded border flex flex-col gap-0.5">
                    <span className="text-[5px] text-slate-400 uppercase font-bold">Total Users</span>
                    <span className="text-[10px] font-black text-brand-navy font-heading">24.5K</span>
                    <span className="text-[5px] text-emerald-500 font-bold">↑ 18.2%</span>
                  </div>
                  <div className="bg-slate-50 p-1.5 rounded border flex flex-col gap-0.5">
                    <span className="text-[5px] text-slate-400 uppercase font-bold">Revenue</span>
                    <span className="text-[10px] font-black text-[#3EA77E] font-heading">$48.6K</span>
                    <span className="text-[5px] text-emerald-500 font-bold">↑ 23.6%</span>
                  </div>
                  <div className="bg-slate-50 p-1.5 rounded border flex flex-col gap-0.5">
                    <span className="text-[5px] text-slate-400 uppercase font-bold">Orders</span>
                    <span className="text-[10px] font-black text-brand-navy font-heading">1,245</span>
                    <span className="text-[5px] text-emerald-500 font-bold">↑ 15.7%</span>
                  </div>
                </div>
              </div>

              {/* 2. Middle Laptop Mockup (Dark theme dashboard) */}
              <div className="absolute left-[18%] top-[3%] w-[68%] aspect-[1.45] rounded-xl border border-white/10 bg-slate-900/80 backdrop-blur-md shadow-2xl p-2.5 flex flex-col z-10 overflow-hidden hover:scale-[1.01] transition-all duration-500 text-left text-slate-200">
                <div className="absolute w-24 h-24 rounded-full bg-brand-cyan/10 -top-8 -left-8 blur-xl" />
                {/* Inner layout */}
                <div className="flex h-full gap-2 relative z-10 text-[6px]">
                  {/* Sidebar */}
                  <div className="w-12 border-r border-white/5 pr-1 flex flex-col gap-1.5 shrink-0 pt-0.5">
                    <div className="flex items-center gap-1 font-bold text-[7px] text-white border-b border-white/5 pb-1">
                      <div className="w-2.5 h-2.5 rounded bg-brand-cyan flex items-center justify-center text-[5px]">K</div>
                      <span>Kaishi</span>
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="px-1 py-0.5 bg-white/5 rounded text-white flex items-center gap-0.5"><Activity className="w-1.5 h-1.5 text-brand-cyan shrink-0" /> Panel</span>
                      <span className="px-1 py-0.5 hover:bg-white/5 rounded text-slate-400 flex items-center gap-0.5 cursor-pointer"><User className="w-1.5 h-1.5 shrink-0" /> Users</span>
                      <span className="px-1 py-0.5 hover:bg-white/5 rounded text-slate-400 flex items-center gap-0.5 cursor-pointer"><DollarSign className="w-1.5 h-1.5 shrink-0" /> Profit</span>
                    </div>
                  </div>
                  {/* Main section */}
                  <div className="flex-1 flex flex-col gap-2 pt-0.5">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-[8px] text-white">Dashboard Overview</span>
                      <div className="flex items-center gap-1 bg-slate-800/80 px-1 py-0.5 rounded border border-white/5">
                        <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse"></span>
                        <span className="text-[5px]">Live</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-1.5">
                      <div className="bg-slate-800/50 border border-white/5 p-1 rounded-md">
                        <span className="text-slate-400 block text-[4px]">Total Users</span>
                        <span className="text-[7.5px] font-bold text-white block">24.5K</span>
                        <span className="text-[4px] text-emerald-500 font-bold block">↑ 18.2%</span>
                      </div>
                      <div className="bg-slate-800/50 border border-white/5 p-1 rounded-md">
                        <span className="text-slate-400 block text-[4px]">Revenue</span>
                        <span className="text-[7.5px] font-bold text-white block">$48.6K</span>
                        <span className="text-[4px] text-emerald-500 font-bold block">↑ 23.6%</span>
                      </div>
                      <div className="bg-slate-800/50 border border-white/5 p-1 rounded-md">
                        <span className="text-slate-400 block text-[4px]">Orders</span>
                        <span className="text-[7.5px] font-bold text-white block">1,245</span>
                        <span className="text-[4px] text-emerald-500 font-bold block">↑ 15.7%</span>
                      </div>
                    </div>
                    {/* Performance bars */}
                    <div className="bg-slate-800/20 border border-white/5 rounded-md p-1.5 flex-grow flex flex-col justify-between">
                      <span className="text-slate-400 text-[5px]">Recent Activity</span>
                      <div className="flex flex-col gap-1 mt-1">
                        <div className="flex justify-between text-slate-300 font-medium">
                          <span>New order received</span>
                          <span>Just now</span>
                        </div>
                        <div className="flex justify-between text-slate-300 font-medium">
                          <span>New user registered</span>
                          <span>2 mins ago</span>
                        </div>
                        <div className="flex justify-between text-slate-300 font-medium">
                          <span>Subscription renewed</span>
                          <span>1 hour ago</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Laptop base shelf notch indicator */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-slate-800/90 border-t border-white/5" />
              </div>

              {/* 3. Right Mobile Device Mockup (Dark theme dashboard) */}
              <div className="absolute right-[3%] top-[25%] w-[33%] aspect-[0.5] rounded-[24px] border-[4px] border-slate-800 bg-slate-950 flex flex-col p-2 shadow-2xl z-20 overflow-hidden hover:scale-[1.03] transition-transform duration-500 text-left text-slate-300">
                <div className="w-10 h-2 bg-slate-800 rounded-full mx-auto mb-1.5 shrink-0" />
                <div className="flex flex-col gap-2 h-full text-[7px] overflow-hidden">
                  <div className="flex justify-between items-center text-white font-bold border-b border-white/5 pb-1">
                    <span>Dashboard</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan"></span>
                  </div>
                  <div className="bg-slate-900/60 p-1.5 rounded border border-white/5 flex flex-col gap-0.5">
                    <span className="text-[5px] text-slate-500 uppercase font-bold">Total Users</span>
                    <span className="text-[10px] font-black text-white font-heading">24.5K</span>
                    <span className="text-[5px] text-brand-cyan font-bold">↑ 18.2%</span>
                  </div>
                  <div className="bg-slate-900/60 p-1.5 rounded border border-white/5 flex flex-col gap-0.5">
                    <span className="text-[5px] text-slate-500 uppercase font-bold">Revenue</span>
                    <span className="text-[10px] font-black text-white font-heading">$48.6K</span>
                    <span className="text-[5px] text-brand-cyan font-bold">↑ 23.6%</span>
                  </div>
                  <div className="bg-slate-900/60 p-1.5 rounded border border-white/5 flex flex-col gap-0.5">
                    <span className="text-[5px] text-slate-500 uppercase font-bold">Orders</span>
                    <span className="text-[10px] font-black text-white font-heading">1,245</span>
                    <span className="text-[5px] text-[#3EA77E] font-bold">↑ 16.7%</span>
                  </div>
                </div>
              </div>

              {/* 4. Overlapping Flutter + React Native floating badge */}
              <div className="absolute bottom-[2%] z-30 bg-white px-5 py-2.5 rounded-2xl border border-slate-100 shadow-xl flex items-center gap-4 hover:scale-[1.02] transition-transform duration-300">
                <div className="flex items-center gap-1.5">
                  <img src={flutterIcon} alt="Flutter" className="w-4.5 h-4.5 object-contain" />
                  <span className="font-bold text-slate-800 text-xs font-heading tracking-tight">Flutter</span>
                </div>
                <div className="w-[1px] h-4 bg-slate-200" />
                <div className="flex items-center gap-1.5">
                  <img src={reactIcon} alt="React Native" className="w-4.5 h-4.5 object-contain" />
                  <span className="font-bold text-slate-800 text-xs font-heading tracking-tight">React Native</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          3. WHY CHOOSE CROSS-PLATFORM DEVELOPMENT?
          ========================================== */}
      <section className="py-16 lg:py-24 bg-slate-50/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#3EA77E]">
            Why Choose Cross-Platform Development?
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-heading font-black text-brand-navy">
            Build Once. Run <span className="text-[#3EA77E]">Everywhere.</span>
          </h2>
          <p className="mt-4 text-slate-500 font-normal max-w-2xl mx-auto text-[14px] sm:text-[15px] leading-relaxed">
            Cross-platform development helps you reach more users, faster, with one unified codebase.
          </p>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 text-center">
            {whyChooseUs.map((item, idx) => {
              const IconComp = item.icon
              return (
                <div
                  key={idx}
                  className="bg-white p-5 rounded-2xl border border-slate-100 hover:border-brand-cyan/20 hover:shadow-xl hover:shadow-brand-cyan/5 transition-all hover:-translate-y-1 duration-300 group flex flex-col items-center"
                >
                  <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm flex items-center justify-center text-brand-cyan mb-4 group-hover:scale-105 transition-transform duration-300">
                    <IconComp className="w-8 h-8 stroke-[1.8]" />
                  </div>
                  <h3 className="text-[14px] font-bold font-heading text-brand-navy leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-slate-500 text-[11px] sm:text-[11.5px] leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ==========================================
          4. PROCESS TIMELINE
          ========================================== */}
      <section className="py-16 lg:py-24 bg-white border-t border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#3EA77E]">
            Our Cross-Platform App Development Process
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-heading font-black text-brand-navy">
            A Proven Process. Predictable <span className="text-[#3EA77E]">Results.</span>
          </h2>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8 relative text-left">
            {/* Connection Line decoration */}
            <div className="hidden lg:block absolute top-9 left-12 right-12 h-0.5 border-t-2 border-dashed border-slate-200 z-0"></div>

            {processSteps.map((item, idx) => {
              const IconComp = item.icon
              return (
                <div key={idx} className="flex flex-row lg:flex-col items-start gap-4 lg:gap-0 relative z-10">
                  {/* Circle Icon */}
                  <div className="w-18 h-18 rounded-full bg-slate-50 border-2 border-slate-100 flex items-center justify-center shadow-lg shadow-slate-100 hover:border-brand-cyan/20 hover:scale-105 transition-all duration-300 shrink-0 group">
                    <IconComp className="w-8 h-8 text-brand-cyan group-hover:scale-110 transition-transform" />
                  </div>

                  {/* Text Details */}
                  <div className="flex flex-col mt-1 lg:mt-5">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-[10px] font-bold text-brand-cyan uppercase tracking-wider">{item.step}</span>
                      <h4 className="text-xs sm:text-sm font-bold font-heading text-brand-navy">{item.title}</h4>
                    </div>
                    <p className="mt-2 text-slate-500 text-[10.5px] sm:text-[11px] leading-relaxed font-normal lg:max-w-[170px]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ==========================================
          5. TECHNOLOGIES WE USE
          ========================================== */}
      <section className="py-16 lg:py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#3EA77E]">
            Technologies We Use
          </span>

          <div className="mt-12 flex flex-wrap justify-center items-stretch gap-4 sm:gap-6 max-w-5xl mx-auto px-4">
            {techStack.map((tech, idx) => (
              <div
                key={idx}
                className="bg-white px-4 py-5 rounded-2xl hover:shadow-xl shadow-md shadow-slate-100/40 transition-all duration-300 flex flex-col items-center justify-center gap-3 w-[100px] sm:w-[125px] md:w-[140px] h-[100px] sm:h-[125px] md:h-[140px] shrink-0"
              >
                <div className="h-10 sm:h-14 w-auto flex items-center justify-center shrink-0">
                  <img src={tech.img} alt={tech.name} className="h-full w-auto object-contain" />
                </div>
                <span className="text-[10px] sm:text-xs font-bold text-brand-navy tracking-tight mt-1 whitespace-nowrap">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          6. INDUSTRIES WE SERVE
          ========================================== */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#3EA77E]">
            Industries We Serve
          </span>

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-5 gap-5 text-center max-w-5xl mx-auto">
            {industries.map((item, idx) => {
              const IconComp = item.icon
              return (
                <div
                  key={idx}
                  className="bg-white p-5 rounded-2xl hover:shadow-lg shadow-md shadow-slate-100/40 transition-all duration-300 flex flex-col items-center text-center group"
                >
                  <div className="w-12 h-12 rounded-full bg-[#1d2c78]/5 flex items-center justify-center text-brand-cyan mb-3 group-hover:scale-110 transition-transform duration-300">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="text-xs sm:text-[13px] font-bold font-heading text-brand-navy leading-snug">
                    {item.title}
                  </h3>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ==========================================
          7. SUCCESS STORIES
          ========================================== */}
      <section className="py-16 lg:py-24 bg-slate-50/10 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#3EA77E]">
            Success Stories
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-heading font-black text-brand-navy">
            Real Results. Real <span className="text-[#3EA77E]">Impact.</span>
          </h2>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {successStories.map((story, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full group"
              >
                {/* Image Area */}
                <div className="aspect-[1.5] w-full overflow-hidden bg-slate-100 relative">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 bg-emerald-50 text-emerald-600 border border-emerald-100 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                    {story.tag}
                  </span>
                </div>

                {/* Content Details */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-base sm:text-lg font-black font-heading text-brand-navy group-hover:text-brand-cyan transition-colors">
                      {story.title}
                    </h3>
                    <p className="mt-2 text-slate-500 text-xs sm:text-[13px] leading-relaxed font-normal">
                      {story.desc}
                    </p>
                  </div>

                  {/* Metrics Row */}
                  <div className="mt-6 pt-5 border-t border-slate-150 grid grid-cols-2 gap-4">
                    {story.stats.map((stat, sIdx) => {
                      const StatIcon = stat.icon
                      return (
                        <div key={sIdx} className="flex flex-col text-left">
                          <div className="flex items-center gap-1.5">
                            <StatIcon className="w-3.5 h-3.5 text-brand-cyan shrink-0" />
                            <span className="text-xs sm:text-sm font-heading font-black text-brand-navy leading-none">{stat.value}</span>
                          </div>
                          <span className="text-[9px] text-slate-400 font-semibold mt-1 leading-tight block uppercase tracking-wider">{stat.label}</span>
                        </div>
                      )
                    })}
                  </div>

                  {/* Link Case Study */}
                  <div className="mt-6 pt-4 border-t border-slate-50">
                    <a
                      href="#"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-navy hover:text-brand-cyan transition-colors group/link"
                    >
                      View Case Study
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <button className="border border-brand-navy hover:bg-brand-navy hover:text-white text-brand-navy font-bold text-xs px-6 py-3.5 rounded-xl transition-all cursor-pointer inline-flex items-center gap-2">
              View More Projects
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* ==========================================
          8. CALL TO ACTION (CTA)
          ========================================== */}
      <section className="py-6 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="relative overflow-hidden bg-brand-cyan text-white py-12 px-6 sm:px-12 md:py-14 md:px-16 rounded-[24px] flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl"
            style={{
              backgroundImage: `url("${ctaBg}")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-brand-cyan/50 z-0"></div>

            <div className="relative z-10 flex flex-col md:flex-row items-center gap-5 text-center md:text-left md:max-w-3xl">
              <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center shrink-0 border border-white/20 shadow-md">
                <Code className="w-7 h-7 text-white" />
              </div>
              <div className="flex flex-col">
                <h2 className="text-2xl md:text-3xl font-heading font-black tracking-tight">Have an App Idea? Let's Build It for Every Platform.</h2>
                <p className="mt-2 text-white/90 text-sm font-normal max-w-xl">
                  Reach more users with a powerful cross-platform app built by our expert team.
                </p>
              </div>
            </div>

            <div className="relative z-10 w-full md:w-auto flex flex-col sm:flex-row gap-3 justify-center md:justify-end shrink-0">
              <button className="bg-white hover:bg-white/90 text-brand-cyan font-bold text-[14px] px-8 h-12 rounded-xl flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer shadow-md">
                Talk to Our Experts
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="border border-white/30 hover:bg-white/10 bg-transparent text-white font-bold text-[14px] px-8 h-12 rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer">
                Request a Quote
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
