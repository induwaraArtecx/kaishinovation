import {
  Code,
  ShieldCheck,
  TrendingUp,
  Cpu,
  Network,
  Clock,
  Activity,
  Zap,
  BarChart3,
  Lock,
  Coins,
  RefreshCw,
  Factory,
  HeartPulse,
  Landmark,
  ShoppingCart,
  Truck,
  GraduationCap,
  Search,
  FileText,
  Layout,
  Rocket,
  ChevronRight,
  MoreHorizontal,
  FolderOpen,
  ArrowRight,
  User,
  Settings,
  DollarSign,
  CheckCircle,
  Smile,
  Puzzle
} from 'lucide-react'

// Import technology icons
import netIcon from '../assets/technology icons/.net.png'
import angularIcon from '../assets/technology icons/angular.png'
import awsIcon from '../assets/technology icons/aws.png'
import azureIcon from '../assets/technology icons/azure.png'
import gcpIcon from '../assets/technology icons/google cloud.png'
import javaIcon from '../assets/technology icons/java.png'
import laravelIcon from '../assets/technology icons/laravel.png'
import nodejsIcon from '../assets/technology icons/node js.png'
import phpIcon from '../assets/technology icons/php.png'
import pythonIcon from '../assets/technology icons/python_18894.png'
import reactIcon from '../assets/technology icons/react.png'
import vueIcon from '../assets/technology icons/vue js.png'

export default function EnterpriseSolutions() {
  const featureBar = [
    {
      title: 'Scalable Architecture',
      desc: 'Built to grow with your business.',
      icon: Puzzle,
    },
    {
      title: 'Advanced Security',
      desc: 'Enterprise-grade security to protect your data.',
      icon: ShieldCheck,
    },
    {
      title: 'Business Intelligence',
      desc: 'Real-time insights for smarter decisions.',
      icon: TrendingUp,
    },
    {
      title: 'Process Automation',
      desc: 'Streamline operations and boost productivity.',
      icon: Cpu,
    },
    {
      title: 'Seamless Integration',
      desc: 'Integrate with your existing systems effortlessly.',
      icon: Network,
    },
    {
      title: '24/7 Support & Maintenance',
      desc: "We're here to ensure your systems run smoothly.",
      icon: Clock,
    },
  ]

  const whyChooseUs = [
    {
      title: 'Operational Excellence',
      desc: 'Streamline business processes and eliminate inefficiencies.',
      icon: Activity,
      color: 'bg-blue-50 text-blue-600',
    },
    {
      title: 'Scalability & Flexibility',
      desc: 'Solutions designed to scale seamlessly as your business evolves.',
      icon: Zap,
      color: 'bg-emerald-50 text-emerald-600',
    },
    {
      title: 'Data-Driven Decisions',
      desc: 'Advanced analytics and reporting for actionable insights.',
      icon: BarChart3,
      color: 'bg-indigo-50 text-indigo-600',
    },
    {
      title: 'Enterprise Security',
      desc: 'Robust security frameworks to ensure compliance and data protection.',
      icon: Lock,
      color: 'bg-rose-50 text-rose-600',
    },
    {
      title: 'Cost Optimization',
      desc: 'Reduce IT costs and maximize your return on investment.',
      icon: Coins,
      color: 'bg-amber-50 text-amber-600',
    },
    {
      title: 'Business Continuity',
      desc: 'High availability, disaster recovery, and reliability you can trust.',
      icon: RefreshCw,
      color: 'bg-cyan-50 text-cyan-600',
    },
  ]

  const industries = [
    {
      title: 'Manufacturing',
      desc: 'Smart solutions for supply chain, production, and resource management.',
      icon: Factory,
    },
    {
      title: 'Healthcare',
      desc: 'Improve patient care, streamline workflows, and ensure regulatory compliance.',
      icon: HeartPulse,
    },
    {
      title: 'Finance & Banking',
      desc: 'Secure, compliant, and scalable solutions for the financial sector.',
      icon: Landmark,
    },
    {
      title: 'Retail & E-commerce',
      desc: 'Enhance customer experience and optimize operations across channels.',
      icon: ShoppingCart,
    },
    {
      title: 'Logistics & Supply Chain',
      desc: 'Real-time visibility and automation for a resilient supply chain.',
      icon: Truck,
    },
    {
      title: 'Education',
      desc: 'Digital transformation solutions for institutions and e-learning platforms.',
      icon: GraduationCap,
    },
  ]

  const capabilities = [
    {
      step: '01',
      title: 'Consult & Discover',
      desc: 'We understand your business goals and challenges.',
      icon: Search,
    },
    {
      step: '02',
      title: 'Plan & Strategize',
      desc: 'Define roadmap, architecture, and technology stack.',
      icon: FileText,
    },
    {
      step: '03',
      title: 'Design & Prototype',
      desc: 'Create intuitive UI/UX and interactive prototypes.',
      icon: Layout,
    },
    {
      step: '04',
      title: 'Develop & Integrate',
      desc: 'Agile development with seamless integrations.',
      icon: Code,
    },
    {
      step: '05',
      title: 'Test & Assure',
      desc: 'Rigorous testing for quality and performance.',
      icon: ShieldCheck,
    },
    {
      step: '06',
      title: 'Deploy & Support',
      desc: 'Smooth deployment and ongoing support.',
      icon: Rocket,
    },
  ]

  const techStack = [
    { name: '.NET', img: netIcon },
    { name: 'Java', img: javaIcon },
    { name: 'Node.js', img: nodejsIcon },
    { name: 'Python', img: pythonIcon },
    { name: 'React', img: reactIcon },
    { name: 'Angular', img: angularIcon },
    { name: 'Vue.js', img: vueIcon },
    { name: 'PHP', img: phpIcon },
    { name: 'Laravel', img: laravelIcon },
    { name: 'AWS', img: awsIcon },
    { name: 'Azure', img: azureIcon },
    { name: 'Google Cloud', img: gcpIcon },
  ]

  const successStories = [
    {
      title: 'Smart Manufacturing Platform',
      tag: 'Manufacturing',
      image: '/logitrack.png',
      desc: 'Integrated systems and real-time analytics to reduce downtime and improve production efficiency.',
      stats: [
        { label: 'Increase in Output', value: '40%', icon: TrendingUp },
        { label: 'Cost Reduction', value: '32%', icon: Coins },
        { label: 'System Uptime', value: '99.9%', icon: ShieldCheck }
      ]
    },
    {
      title: 'Core Banking Solution',
      tag: 'Finance',
      image: '/business_hub.png',
      desc: 'A secure and scalable core banking system for a leading financial institution.',
      stats: [
        { label: 'Faster Processing', value: '60%', icon: Zap },
        { label: 'Operational Efficiency', value: '50%', icon: Settings },
        { label: 'Data Accuracy', value: '100%', icon: CheckCircle }
      ]
    },
    {
      title: 'Hospital Management System',
      tag: 'Healthcare',
      image: '/medicare_plus.png',
      desc: 'A comprehensive solution to manage hospital operations, patients, staff, and billing seamlessly.',
      stats: [
        { label: 'Time Saved', value: '45%', icon: Clock },
        { label: 'Paperwork Reduction', value: '35%', icon: FileText },
        { label: 'User Satisfaction', value: '95%', icon: Smile }
      ]
    }
  ]

  return (
    <div className="w-full bg-white text-blue-600 font-sans antialiased">
      {/* ==========================================
          1. BREADCRUMBS
          ========================================== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2 text-left">
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-semibold tracking-wide">
          <a href="#/" className="text-brand-cyan hover:text-brand-cyan-dark transition-colors">Home</a>
          <ChevronRight className="w-3 h-3 text-slate-400 stroke-[2.5]" />
          <span className="text-brand-cyan hover:text-brand-cyan-dark transition-colors cursor-pointer">Services</span>
          <ChevronRight className="w-3 h-3 text-slate-400 stroke-[2.5]" />
          <span className="text-brand-cyan hover:text-brand-cyan-dark transition-colors cursor-pointer">Software Development</span>
          <ChevronRight className="w-3 h-3 text-slate-400 stroke-[2.5]" />
          <span className="text-[#0b2240] font-bold">Enterprise Software Solutions</span>
        </div>
      </div>

      {/* ==========================================
          2. HERO SECTION
          ========================================== */}
      <section className="relative overflow-hidden pt-8 pb-16 lg:pb-24 bg-white flex items-center lg:min-h-[580px]">
        {/* Right diagonal layout mask */}
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[48vw] bg-[#031430] hidden lg:block overflow-hidden" 
             style={{ clipPath: 'polygon(12% 0%, 100% 0%, 100% 100%, 0% 100%)' }}>
          <div className="absolute inset-0 bg-gradient-to-tr from-[#031430] via-[#051c3d] to-[#031430]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,180,216,0.18),transparent_50%)]" />
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full relative z-10">
          {/* Left Column Content */}
          <div className="lg:col-span-6 flex flex-col items-start text-left z-10">
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#3EA77E]">
              Enterprise Software Solutions
            </span>
            <h1 className="mt-3 text-4xl sm:text-[46px] lg:text-[54px] lg:leading-[1.12] font-heading font-black tracking-tight text-brand-navy">
              Power Your Enterprise. <br />
              <span className="text-[#3EA77E]">Transform</span> Your Future.
            </h1>
            <p className="mt-4 text-[#0b2240] font-bold text-base sm:text-lg tracking-wide">
              Scalable. Secure. Future-Ready.
            </p>
            <p className="mt-5 text-[14.5px] leading-relaxed text-slate-500 font-normal max-w-xl">
              Our enterprise software solutions are designed to streamline complex processes, integrate systems, and empower your organization to operate smarter, faster, and more efficiently.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button className="bg-[#3EA77E] hover:bg-[#35906b] text-white font-bold text-[14px] px-8 h-12 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#3EA77E]/20 cursor-pointer group">
                Request a Consultation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border border-slate-200 hover:bg-slate-50 text-brand-navy font-bold text-[14px] px-8 h-12 rounded-xl flex items-center justify-center gap-2 transition-all bg-white cursor-pointer">
                View Our Work
                <FolderOpen className="w-4 h-4 text-brand-cyan" />
              </button>
            </div>
          </div>

          {/* Right Column Interactive Mockups */}
          <div className="lg:col-span-6 w-full flex flex-col lg:flex-row justify-center items-center gap-8 relative mt-10 lg:mt-0">
            {/* Mobile View Container (Renders only on mobile/tablet instead of full diagonal layout) */}
            <div className="absolute inset-0 bg-[#031430]/95 rounded-3xl -z-10 lg:hidden block p-6" />

            {/* Dashboard Container (Glassmorphic) */}
            <div className="relative w-full max-w-[460px] aspect-[1.38] rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-md shadow-2xl p-4 flex flex-col text-slate-200 text-[11px] overflow-hidden select-none hover:scale-[1.01] hover:border-brand-cyan/20 transition-all duration-500">
              {/* Dashboard Glows */}
              <div className="absolute w-40 h-40 rounded-full bg-[#00b4d8]/10 -top-10 -left-10 blur-2xl" />
              
              {/* Inner Layout */}
              <div className="flex h-full gap-3 relative z-10">
                {/* Dashboard Sidebar */}
                <div className="w-16 flex flex-col gap-2.5 border-r border-white/5 pr-2.5 pt-1.5">
                  <div className="flex items-center gap-1.5 px-1 pb-2 border-b border-white/5">
                    <div className="w-3.5 h-3.5 rounded bg-brand-cyan shrink-0 flex items-center justify-center text-[8px] font-black text-white">K</div>
                    <span className="font-heading font-black text-[9px] text-white tracking-wide">Kaishi</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="px-2 py-1 bg-white/5 rounded text-white font-semibold flex items-center gap-1.5"><Activity className="w-3 h-3 text-brand-cyan shrink-0" /> Panel</span>
                    <span className="px-2 py-1 hover:bg-white/5 rounded text-slate-400 font-semibold flex items-center gap-1.5 cursor-pointer transition-colors"><User className="w-3 h-3 shrink-0" /> Users</span>
                    <span className="px-2 py-1 hover:bg-white/5 rounded text-slate-400 font-semibold flex items-center gap-1.5 cursor-pointer transition-colors"><DollarSign className="w-3 h-3 shrink-0" /> Finance</span>
                    <span className="px-2 py-1 hover:bg-white/5 rounded text-slate-400 font-semibold flex items-center gap-1.5 cursor-pointer transition-colors"><BarChart3 className="w-3 h-3 shrink-0" /> Analytics</span>
                    <span className="px-2 py-1 hover:bg-white/5 rounded text-slate-400 font-semibold flex items-center gap-1.5 cursor-pointer transition-colors"><Settings className="w-3 h-3 shrink-0" /> Config</span>
                  </div>
                </div>

                {/* Dashboard Main Area */}
                <div className="flex-1 flex flex-col pt-1.5 gap-3.5 text-left">
                  <div className="flex justify-between items-center">
                    <span className="font-heading font-black text-sm text-white tracking-tight">Enterprise Overview</span>
                    <div className="flex items-center gap-1.5 bg-slate-800/80 px-2 py-0.5 rounded border border-white/5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                      <span className="text-[9px] font-bold text-slate-300">Live</span>
                    </div>
                  </div>

                  {/* Grid Cards */}
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-slate-800/40 border border-white/5 p-2 rounded-xl">
                      <span className="text-slate-400 block text-[9px] font-medium">Total Users</span>
                      <span className="text-sm font-heading font-black text-white mt-0.5 block">5,240</span>
                      <span className="text-[9px] text-[#3EA77E] font-bold mt-1 block">↑ 12.4%</span>
                    </div>
                    <div className="bg-slate-800/40 border border-white/5 p-2 rounded-xl">
                      <span className="text-slate-400 block text-[9px] font-medium">Active Projects</span>
                      <span className="text-sm font-heading font-black text-white mt-0.5 block">1,230</span>
                      <span className="text-[9px] text-slate-400 font-bold mt-1 block">Stable</span>
                    </div>
                    <div className="bg-slate-800/40 border border-white/5 p-2 rounded-xl">
                      <span className="text-slate-400 block text-[9px] font-medium">Revenue</span>
                      <span className="text-sm font-heading font-black text-white mt-0.5 block">$28.4M</span>
                      <span className="text-[9px] text-brand-cyan font-bold mt-1 block">↑ 8.2%</span>
                    </div>
                    <div className="bg-slate-800/40 border border-white/5 p-2 rounded-xl">
                      <span className="text-slate-400 block text-[9px] font-medium">System Uptime</span>
                      <span className="text-sm font-heading font-black text-white mt-0.5 block">98.6%</span>
                      <span className="text-[9px] text-emerald-400 font-bold mt-1 block">Excellent</span>
                    </div>
                  </div>

                  {/* Simple graph visualization */}
                  <div className="bg-slate-800/30 border border-white/5 rounded-xl p-2 flex flex-col gap-1.5 flex-grow">
                    <span className="text-slate-400 text-[9px] font-medium">Performance Track</span>
                    <div className="flex-grow flex items-end gap-1.5 h-10 px-1 pt-1.5">
                      <div className="w-full bg-brand-cyan/20 h-[30%] rounded-sm"></div>
                      <div className="w-full bg-brand-cyan/30 h-[45%] rounded-sm"></div>
                      <div className="w-full bg-brand-cyan/40 h-[60%] rounded-sm"></div>
                      <div className="w-full bg-brand-cyan/60 h-[50%] rounded-sm"></div>
                      <div className="w-full bg-brand-cyan/80 h-[75%] rounded-sm"></div>
                      <div className="w-full bg-brand-cyan h-full rounded-sm"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Device Mockup */}
            <div className="w-52 h-[340px] rounded-[32px] border-[5px] border-slate-800 bg-slate-950 flex flex-col p-3 shadow-2xl relative text-left select-none shrink-0 overflow-hidden hover:scale-[1.02] transition-transform duration-500 lg:absolute lg:-right-4 lg:-bottom-12 z-20">
              {/* Speaker pill notch */}
              <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-14 h-3 bg-slate-800 rounded-full z-30" />
              
              {/* Inner Content */}
              <div className="flex flex-col gap-3 h-full pt-4 relative z-10 text-[9px]">
                <div className="flex justify-between items-center text-slate-400">
                  <span className="font-bold text-[8px]">Analytics</span>
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
                  </div>
                </div>

                <div className="bg-slate-900 border border-white/5 p-2 rounded-xl flex flex-col gap-1">
                  <span className="text-slate-400 font-medium">Uptime Rate</span>
                  <div className="flex justify-between items-center mt-1">
                    <span className="text-base font-black font-heading text-white">99.98%</span>
                    <span className="bg-[#3EA77E]/10 border border-[#3EA77E]/30 text-[#3EA77E] px-1.5 py-0.5 rounded-md font-bold text-[8px]">Optimal</span>
                  </div>
                </div>

                <div className="bg-slate-900 border border-white/5 p-2 rounded-xl flex flex-col gap-2 flex-grow">
                  <span className="text-slate-400 font-medium">Load Balance</span>
                  <div className="flex flex-col gap-1.5 mt-1.5">
                    <div className="flex justify-between text-slate-300 font-semibold">
                      <span>Server US-1</span>
                      <span>85%</span>
                    </div>
                    <div className="w-full bg-slate-850 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-brand-cyan h-full rounded-full" style={{ width: '85%' }}></div>
                    </div>
                    
                    <div className="flex justify-between text-slate-300 font-semibold mt-1">
                      <span>Server EU-3</span>
                      <span>42%</span>
                    </div>
                    <div className="w-full bg-slate-850 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-emerald-500 h-full rounded-full" style={{ width: '42%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Shield Badge - overlapping borders */}
            {/* <div className="absolute -left-6 bottom-4 lg:bottom-16 bg-[#031430]/75 backdrop-blur-lg border border-white/10 px-4 py-2.5 rounded-2xl flex items-center gap-3 shadow-xl text-white select-none z-30 animate-bounce" style={{ animationDuration: '4s' }}>
              <div className="w-8 h-8 rounded-xl bg-brand-cyan flex items-center justify-center shrink-0 shadow-md">
                <ShieldCheck className="w-4 h-4 text-white" />
              </div>
              <div className="text-left leading-tight">
                <span className="text-[10px] sm:text-xs font-bold block text-white">Enterprise Grade</span>
                <span className="text-[9px] sm:text-[10px] text-slate-300 block mt-0.5">Security & Reliability</span>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* ==========================================
          3. HORIZONTAL FEATURE BAR
          ========================================== */}
      <section className="bg-white border-y border-slate-100 py-10 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-y-8 lg:gap-0 lg:divide-x lg:divide-slate-100">
            {featureBar.map((item, idx) => {
              const IconComp = item.icon
              return (
                <div key={idx} className="flex gap-4 text-left px-4 lg:px-6 first:pl-0 last:pr-0 group text-[#0c266c]">
                  <div className="text-[#0c266c] shrink-0 mt-0.5">
                    <IconComp className="w-10 h-10 stroke-[1.3] group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="flex flex-col text-[#0c266c]">
                    <h3 className="text-sm font-bold font-heading text-[##1d2c78] leading-snug">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-[#0c266c]/85 text-[11px] sm:text-xs leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-slate-50/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#3EA77E]">
            Why Enterprises Choose Kaishi Innovations
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-heading font-black text-brand-navy">
            Solutions That Drive Real Business Impact
          </h2>
          <p className="mt-3 text-slate-500 font-normal max-w-2xl mx-auto text-[14px] sm:text-base leading-relaxed">
            We build enterprise software that helps organizations optimize operations, reduce costs, mitigate risks, and accelerate growth.
          </p>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 text-center">
            {whyChooseUs.map((item, idx) => {
              const IconComp = item.icon
              return (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-2xl border border-slate-100 hover:border-[#30979a]/30 hover:shadow-xl hover:shadow-[#30979a]/5 transition-all hover:-translate-y-1.5 duration-300 group flex flex-col items-center text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-[#30979a]/10 flex items-center justify-center text-[#30979a] mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-sm font-bold font-heading text-[#1d2c78]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[#1d2c78]/90 text-xs leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ==========================================
          5. INDUSTRIES WE SERVE
          ========================================== */}
      <section className="py-16 lg:py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#3EA77E]">
            Industries We Serve
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-heading font-black text-brand-navy">
            Empowering Enterprises Across Industries
          </h2>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-5 text-center">
            {industries.map((item, idx) => {
              const IconComp = item.icon
              return (
                <div
                  key={idx}
                  className="bg-white p-5 rounded-2xl border border-neutral-200/60 hover:border-neutral-300 hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center group"
                >
                  <div className="w-12 h-12 rounded-full bg-[#1d2c78]/10 flex items-center justify-center text-[#1d2c78] mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="text-xs sm:text-[13px] font-bold font-heading text-brand-navy leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-slate-500 text-[10px] sm:text-[11px] leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ==========================================
          6. CAPABILITIES (DARK BLUE SECTION)
          ========================================== */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[24px] py-12 px-6 sm:px-10 lg:px-12 text-white shadow-xl bg-[#031430]">
            <div className="absolute inset-0 bg-gradient-to-r from-[#031430] via-[#051c3d] to-[#031430]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(0,180,216,0.12),transparent_45%)]" />

            <div className="relative z-10 text-center">
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-brand-cyan">
                Our Capabilities
              </span>
              <h2 className="mt-3 text-2xl sm:text-3xl lg:text-[34px] font-heading font-black text-white">
                End-to-End Enterprise Software Development
              </h2>

              {/* Timeline Layout */}
              <div className="mt-16 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8 relative text-left">
                {/* Horizontal Line connector for desktop view */}
                <div className="hidden lg:block absolute top-7 left-10 right-10 h-0.5 border-t border-dashed border-white/15 z-0" />

                {capabilities.map((item, idx) => {
                  const IconComp = item.icon
                  return (
                    <div key={idx} className="flex flex-row lg:flex-col items-start gap-4 lg:gap-0 relative z-10">
                      {/* Circle Icon */}
                      <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shadow-lg hover:border-brand-cyan/40 hover:bg-white/10 transition-all duration-300 shrink-0 group">
                        <IconComp className="w-6 h-6 text-brand-cyan group-hover:scale-110 transition-transform" />
                      </div>

                      {/* Text Details */}
                      <div className="flex flex-col mt-1 lg:mt-5">
                        <div className="flex items-baseline gap-1.5">
                          <span className="text-[10px] font-black text-brand-cyan uppercase tracking-wider">{item.step}</span>
                          <h4 className="text-xs sm:text-sm font-bold font-heading text-white">{item.title}</h4>
                        </div>
                        <p className="mt-2 text-slate-400 text-[10px] sm:text-[11px] leading-relaxed font-normal lg:max-w-[170px]">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          7. TECHNOLOGIES WE USE
          ========================================== */}
      <section className="py-16 lg:py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#3EA77E]">
            Technologies We Use
          </span>
          
          {/* Tech Badges Grid */}
          <div className="mt-12 overflow-x-auto scrollbar-none w-full">
            <div className="flex items-stretch gap-2.5 sm:gap-3.5 pb-2 justify-start lg:justify-center min-w-max mx-auto px-4">
              {techStack.map((tech, idx) => (
                <div
                  key={idx}
                  className="bg-white px-3 py-3 rounded-xl border border-neutral-200/60 hover:border-neutral-300 hover:shadow-md transition-all duration-300 flex flex-col items-center justify-center gap-2 w-[80px] sm:w-[95px] shrink-0"
                >
                  <div className="h-7 w-auto flex items-center justify-center shrink-0">
                    <img src={tech.img} alt={tech.name} className="h-full w-auto object-contain" />
                  </div>
                  <span className="text-[9px] sm:text-[10px] font-bold text-brand-navy tracking-tight mt-0.5 whitespace-nowrap">
                    {tech.name}
                  </span>
                </div>
              ))}

              {/* And More Badge */}
              <div
                className="bg-neutral-50 px-3 py-3 rounded-xl border border-dashed border-neutral-200 flex flex-col items-center justify-center gap-2 w-[80px] sm:w-[95px] shrink-0"
              >
                <div className="w-7 h-7 rounded-full bg-neutral-100 border border-neutral-200/60 flex items-center justify-center text-slate-500 shrink-0">
                  <MoreHorizontal className="w-4 h-4" />
                </div>
                <span className="text-[9px] sm:text-[10px] font-bold text-slate-400 tracking-tight mt-0.5 whitespace-nowrap">
                  And More
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          8. SUCCESS STORIES
          ========================================== */}
      <section className="py-16 lg:py-24 bg-slate-50/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#3EA77E]">
            Success Stories
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-heading font-black text-brand-navy">
            Real Results. Real Impact.
          </h2>

          {/* Cards Grid */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {successStories.map((story, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full group"
              >
                {/* Image Area */}
                <div className="aspect-[1.5] w-full overflow-hidden bg-slate-150 relative">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 bg-emerald-50 text-emerald-600 border border-emerald-150 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                    {story.tag}
                  </span>
                </div>

                {/* Content Details */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-base sm:text-lg font-black font-heading text-brand-navy group-hover:text-brand-cyan transition-colors">
                      {story.title}
                    </h3>
                    <p className="mt-2.5 text-slate-500 text-xs sm:text-[13px] leading-relaxed font-normal">
                      {story.desc}
                    </p>
                  </div>

                  {/* Metrics Row */}
                  <div className="mt-6 pt-5 border-t border-slate-100 grid grid-cols-3 gap-2">
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
        </div>
      </section>
    </div>
  )
}
