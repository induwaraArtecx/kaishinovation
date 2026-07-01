import {
  Code,
  ShieldCheck,
  Coins,
  Rocket,
  Search,
  FileText,
  Layout,
  ChevronRight,
  FolderOpen,
  ArrowRight,
  User,
  DollarSign,
  Activity,
  Settings,
  Puzzle,
  BarChart3,
  Download,
  Users,
  Globe,
  Layers,
  Zap,
  Cloud
} from 'lucide-react'

// Import technology icons
import reactIcon from '../assets/technology icons/react.png'
import nextjsIcon from '../assets/technology icons/next js.png'
import typescriptIcon from '../assets/technology icons/typescript.png'
import nodeIcon from '../assets/technology icons/node js.png'
import nestIcon from '../assets/technology icons/nest js.png'
import pythonIcon from '../assets/technology icons/python_18894.png'
import postgresqlIcon from '../assets/technology icons/postgresql.png'
import mongodbIcon from '../assets/technology icons/mongodb.png'
import awsIcon from '../assets/technology icons/aws.png'
import azureIcon from '../assets/technology icons/azure.png'
import googleCloudIcon from '../assets/technology icons/google cloud.png'
import dockerIcon from '../assets/technology icons/docker.png'
import kubernetesIcon from '../assets/technology icons/kubernetes.png'
import ctaBg from '../assets/cta banner bg.png'

export default function SaasProductDevelopment() {
  const whyChooseUs = [
    {
      title: 'Cloud-Native Architecture',
      desc: 'Built for scalability, performance, and reliability on modern cloud platforms.',
      icon: Cloud,
    },
    {
      title: 'Security by Design',
      desc: 'Advanced security standards to protect your data and users.',
      icon: ShieldCheck,
    },
    {
      title: 'Recurring Revenue Model',
      desc: 'Subscription-first solutions that create sustainable business growth.',
      icon: Coins,
    },
    {
      title: 'Scalable & Elastic',
      desc: 'Easily scale as your user base grows—without compromising performance.',
      icon: Rocket,
    },
    {
      title: 'Seamless Integrations',
      desc: 'Connect with third-party tools and platforms effortlessly.',
      icon: Puzzle,
    },
    {
      title: 'Data-Driven Insights',
      desc: 'Powerful analytics and reports to make smarter business decisions.',
      icon: BarChart3,
    },
  ]

  const processSteps = [
    {
      step: '01',
      title: 'Discover',
      desc: 'We understand your idea, market, users, and business goals.',
      icon: Search,
    },
    {
      step: '02',
      title: 'Validate',
      desc: 'We validate your concept and create a clear product strategy.',
      icon: ShieldCheck,
    },
    {
      step: '03',
      title: 'Design',
      desc: 'We craft intuitive UI/UX that drives engagement and retention.',
      icon: Layout,
    },
    {
      step: '04',
      title: 'Develop',
      desc: 'We build scalable, secure, cloud-native SaaS applications.',
      icon: Code,
    },
    {
      step: '05',
      title: 'Test',
      desc: 'We ensure quality, performance, and security at every level.',
      icon: ShieldCheck,
    },
    {
      step: '06',
      title: 'Launch & Scale',
      desc: 'We launch your product and help you scale seamlessly.',
      icon: Rocket,
    },
  ]

  const techStack = [
    { name: 'React', img: reactIcon },
    { name: 'Next.js', img: nextjsIcon },
    { name: 'TypeScript', img: typescriptIcon },
    { name: 'Node.js', img: nodeIcon },
    { name: 'NestJS', img: nestIcon },
    { name: 'Python', img: pythonIcon },
    { name: 'PostgreSQL', img: postgresqlIcon },
    { name: 'MongoDB', img: mongodbIcon },
    { name: 'AWS', img: awsIcon },
    { name: 'Azure', img: azureIcon },
    { name: 'Google Cloud', img: googleCloudIcon },
    { name: 'Docker', img: dockerIcon },
    { name: 'Kubernetes', img: kubernetesIcon },
  ]

  const successStories = [
    {
      title: 'WorkStream',
      tag: 'Project Management',
      image: '/seahome_japan.png',
      desc: 'A project management SaaS platform helping teams plan, collaborate, and deliver projects efficiently.',
      stats: [
        { label: 'Active Users', value: '30K+', icon: Users },
        { label: 'ARR Achieved', value: '$2.1M', icon: DollarSign },
        { label: 'Uptime Delivered', value: '98.5%', icon: ShieldCheck }
      ]
    },
    {
      title: 'InsightIQ',
      tag: 'Analytics',
      image: '/business_hub.png',
      desc: 'An analytics SaaS platform providing real-time business intelligence and advanced reporting.',
      stats: [
        { label: 'Active Users', value: '15K+', icon: Users },
        { label: 'ARR Achieved', value: '$1.4M', icon: DollarSign },
        { label: 'Uptime Delivered', value: '99.9%', icon: ShieldCheck }
      ]
    },
    {
      title: 'PeopleFlow',
      tag: 'HR Tech',
      image: '/medicare_plus.png',
      desc: 'A cloud HR SaaS solution for recruitment, onboarding, and employee management.',
      stats: [
        { label: 'Active Users', value: '10K+', icon: Users },
        { label: 'ARR Achieved', value: '$900K', icon: DollarSign },
        { label: 'Uptime Delivered', value: '96%', icon: ShieldCheck }
      ]
    }
  ]

  const endToEndServices = [
    { name: 'SaaS Strategy & Consulting', icon: Globe },
    { name: 'MVP Development', icon: Rocket },
    { name: 'Multi-Tenant Architecture', icon: Layers },
    { name: 'Subscription & Billing Systems', icon: Coins },
    { name: 'API Development & Integrations', icon: Puzzle },
    { name: 'Performance Optimization', icon: Zap },
    { name: 'Maintenance & Support', icon: Settings }
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
          <span className="text-slate-400">Software Development</span>
          <ChevronRight className="w-3 h-3 text-slate-400 stroke-[2.5]" />
          <span className="text-brand-navy font-bold">SaaS Product Development</span>
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
              SaaS Product Development
            </span>
            <h1 className="mt-3 text-4xl sm:text-[46px] lg:text-[54px] lg:leading-[1.12] font-heading font-black tracking-tight text-brand-navy">
              Build SaaS Products <br />
              That <span className="text-[#3EA77E]">Scale. Delight. Succeed.</span>
            </h1>
            <p className="mt-4 text-[#0b2240] font-bold text-base sm:text-lg tracking-wide">
              From idea to market-leading SaaS platforms.
            </p>
            <p className="mt-5 text-[14.5px] leading-relaxed text-slate-500 font-normal max-w-xl">
              We help startups and enterprises build cloud-native, secure and scalable SaaS products that solve real problems and drive recurring growth.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button className="bg-[#3EA77E] hover:bg-[#35906b] text-white font-bold text-[14px] px-8 h-12 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#3EA77E]/20 cursor-pointer group">
                Schedule a Consultation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border border-slate-200 hover:bg-slate-50 text-brand-navy font-bold text-[14px] px-8 h-12 rounded-xl flex items-center justify-center gap-2 transition-all bg-white cursor-pointer shadow-sm group">
                View Our Work
                <FolderOpen className="w-4 h-4 text-brand-cyan group-hover:scale-105 transition-transform" />
              </button>
            </div>

            {/* Feature metrics below CTA */}
            <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-6 max-w-lg w-full">
              <div className="flex gap-3.5 items-start">
                <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-brand-cyan shrink-0">
                  <Activity className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[15px] font-black text-brand-navy font-heading">10+</span>
                  <span className="text-[11px] text-slate-400 font-medium leading-snug">Years of Experience</span>
                </div>
              </div>
              <div className="flex gap-3.5 items-start">
                <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-brand-cyan shrink-0">
                  <Layers className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[15px] font-black text-brand-navy font-heading">80+</span>
                  <span className="text-[11px] text-slate-400 font-medium leading-snug">SaaS Products Built</span>
                </div>
              </div>
              <div className="flex gap-3.5 items-start">
                <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-brand-cyan shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[15px] font-black text-brand-navy font-heading">99.9%</span>
                  <span className="text-[11px] text-slate-400 font-medium leading-snug">Uptime Delivered</span>
                </div>
              </div>
              <div className="flex gap-3.5 items-start">
                <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-brand-cyan shrink-0">
                  <Globe className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[15px] font-black text-brand-navy font-heading">Global</span>
                  <span className="text-[11px] text-slate-400 font-medium leading-snug">Clientele Worldwide</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column Custom Dashboard Mockups */}
          <div className="lg:col-span-6 w-full flex flex-col justify-center items-center relative mt-10 lg:mt-0 select-none">
            {/* Mobile View Container background */}
            <div className="absolute inset-0 bg-[#031430]/95 rounded-3xl -z-10 lg:hidden block p-6" />

            {/* Laptop Mockup Container */}
            <div className="relative w-full max-w-[520px] aspect-[1.35] flex items-center justify-center">
              
              {/* 1. Main Laptop Mockup (Dark theme SaaS dashboard) */}
              <div className="absolute left-[2%] top-[3%] w-[78%] aspect-[1.48] rounded-xl border border-white/10 bg-slate-900/90 backdrop-blur-md shadow-2xl p-2.5 flex flex-col z-10 overflow-hidden hover:scale-[1.01] transition-all duration-500 text-left text-slate-200">
                <div className="absolute w-24 h-24 rounded-full bg-brand-cyan/10 -top-8 -left-8 blur-xl pointer-events-none" />
                
                {/* Dashboard Inner Screen */}
                <div className="flex h-full gap-2 relative z-10 text-[6px]">
                  
                  {/* Sidebar */}
                  <div className="w-12 border-r border-white/5 pr-1 flex flex-col gap-1.5 shrink-0 pt-0.5">
                    <div className="flex items-center gap-1 font-bold text-[7px] text-white border-b border-white/5 pb-1">
                      <div className="w-2.5 h-2.5 rounded bg-brand-cyan flex items-center justify-center text-[5px]">K</div>
                      <span>Kaishi</span>
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="px-1 py-0.5 bg-white/5 rounded text-white flex items-center gap-0.5"><Activity className="w-1.5 h-1.5 text-brand-cyan shrink-0" /> Panel</span>
                      <span className="px-1 py-0.5 hover:bg-white/5 rounded text-slate-400 flex items-center gap-0.5 cursor-pointer"><User className="w-1.5 h-1.5 shrink-0" /> Customers</span>
                      <span className="px-1 py-0.5 hover:bg-white/5 rounded text-slate-400 flex items-center gap-0.5 cursor-pointer"><DollarSign className="w-1.5 h-1.5 shrink-0" /> Subscriptions</span>
                      <span className="px-1 py-0.5 hover:bg-white/5 rounded text-slate-400 flex items-center gap-0.5 cursor-pointer"><Coins className="w-1.5 h-1.5 shrink-0" /> Billing</span>
                      <span className="px-1 py-0.5 hover:bg-white/5 rounded text-slate-400 flex items-center gap-0.5 cursor-pointer"><FileText className="w-1.5 h-1.5 shrink-0" /> Reports</span>
                      <span className="px-1 py-0.5 hover:bg-white/5 rounded text-slate-400 flex items-center gap-0.5 cursor-pointer"><Puzzle className="w-1.5 h-1.5 shrink-0" /> Integrations</span>
                      <span className="px-1 py-0.5 hover:bg-white/5 rounded text-slate-400 flex items-center gap-0.5 cursor-pointer"><Settings className="w-1.5 h-1.5 shrink-0" /> Settings</span>
                    </div>
                  </div>

                  {/* Dashboard Main Area */}
                  <div className="flex-1 flex flex-col gap-2 pt-0.5">
                    {/* Header */}
                    <div className="flex justify-between items-center border-b border-white/5 pb-1">
                      <span className="font-bold text-[7.5px] text-white">Analytics Overview</span>
                      <div className="flex items-center gap-0.5 bg-slate-800/80 px-1 py-0.2 rounded border border-white/5">
                        <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse"></span>
                        <span className="text-[4.5px] text-slate-300">Live</span>
                      </div>
                    </div>

                    {/* Stat Cards Grid */}
                    <div className="grid grid-cols-4 gap-1">
                      <div className="bg-slate-800/50 border border-white/5 p-1 rounded-md">
                        <span className="text-slate-400 block text-[4px]">Total Users</span>
                        <span className="text-[7.5px] font-bold text-white block">25.4K</span>
                        <span className="text-[3.5px] text-emerald-500 block font-bold">↑ 12.5%</span>
                      </div>
                      <div className="bg-slate-800/50 border border-white/5 p-1 rounded-md">
                        <span className="text-slate-400 block text-[4px]">MRR</span>
                        <span className="text-[7.5px] font-bold text-white block">$248.6K</span>
                        <span className="text-[3.5px] text-emerald-500 block font-bold">↑ 18.7%</span>
                      </div>
                      <div className="bg-slate-800/50 border border-white/5 p-1 rounded-md">
                        <span className="text-slate-400 block text-[4px]">Active Subs</span>
                        <span className="text-[7.5px] font-bold text-white block">8,642</span>
                        <span className="text-[3.5px] text-emerald-500 block font-bold">↑ 11.3%</span>
                      </div>
                      <div className="bg-slate-800/50 border border-white/5 p-1 rounded-md">
                        <span className="text-slate-400 block text-[4px]">Churn Rate</span>
                        <span className="text-[7.5px] font-bold text-white block">2.45%</span>
                        <span className="text-[3.5px] text-rose-500 block font-bold">↓ -0.6%</span>
                      </div>
                    </div>

                    {/* Chart Box */}
                    <div className="bg-slate-800/20 border border-white/5 rounded-md p-1 flex-grow flex flex-col justify-between h-14">
                      <span className="text-slate-400 text-[4px] block">MRR Growth Timeline</span>
                      <div className="flex-grow flex items-end gap-1.5 px-1 pt-1">
                        {/* Custom visual mini wave peaks */}
                        <div className="w-full bg-brand-cyan/20 h-[35%] rounded-sm"></div>
                        <div className="w-full bg-brand-cyan/35 h-[48%] rounded-sm"></div>
                        <div className="w-full bg-brand-cyan/50 h-[65%] rounded-sm"></div>
                        <div className="w-full bg-brand-cyan/40 h-[58%] rounded-sm"></div>
                        <div className="w-full bg-brand-cyan/70 h-[80%] rounded-sm"></div>
                        <div className="w-full bg-brand-cyan h-full rounded-sm"></div>
                      </div>
                    </div>

                    {/* Bottom Row split */}
                    <div className="grid grid-cols-12 gap-1.5">
                      {/* Left: Recent Transactions */}
                      <div className="col-span-8 bg-slate-800/30 border border-white/5 rounded-md p-1 text-[4px]">
                        <span className="text-slate-400 block font-bold mb-1">Recent Transactions</span>
                        <div className="flex flex-col gap-0.5">
                          <div className="flex justify-between text-slate-300 py-0.5 border-b border-white/5">
                            <span>Acme Corp</span>
                            <span className="font-semibold text-emerald-400">$1,250.00 Paid</span>
                          </div>
                          <div className="flex justify-between text-slate-300 py-0.5 border-b border-white/5">
                            <span>Globex Inc</span>
                            <span className="font-semibold text-emerald-400">$950.00 Paid</span>
                          </div>
                          <div className="flex justify-between text-slate-300 py-0.5">
                            <span>Innotech Solutions</span>
                            <span className="font-semibold text-emerald-400">$2,500.00 Paid</span>
                          </div>
                        </div>
                      </div>

                      {/* Right: Top Features Donut */}
                      <div className="col-span-4 bg-slate-800/30 border border-white/5 rounded-md p-1 text-[4.5px] flex flex-col justify-between">
                        <span className="text-slate-400 block font-bold">Top Features</span>
                        <div className="flex items-center gap-1 mt-0.5">
                          {/* Mini visual donut representation */}
                          <div className="w-5 h-5 rounded-full border-4 border-slate-700 border-t-brand-cyan border-r-[#3EA77E] shrink-0" />
                          <div className="flex flex-col gap-0.2 text-[3px] text-slate-400 leading-none">
                            <span><b className="text-white">45%</b> Analytics</span>
                            <span><b className="text-white">25%</b> Reports</span>
                            <span><b className="text-white">20%</b> API Docs</span>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
                {/* Laptop base line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-slate-800 border-t border-white/5" />
              </div>

              {/* 2. Overlapping Mobile Device Mockup (Dark theme dashboard preview) */}
              <div className="absolute right-[2%] top-[20%] w-[33%] aspect-[0.5] rounded-[24px] border-[4px] border-slate-800 bg-slate-950 flex flex-col p-2 shadow-2xl z-20 overflow-hidden hover:scale-[1.03] transition-transform duration-500 text-left text-slate-300">
                <div className="w-8 h-1.5 bg-slate-850 rounded-full mx-auto mb-1.5 shrink-0" />
                <div className="flex flex-col gap-2 h-full text-[6px] overflow-hidden">
                  
                  <div className="flex justify-between items-center text-white font-bold border-b border-white/5 pb-1 text-[6.5px]">
                    <span>Welcome back, John ✋</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan"></span>
                  </div>

                  <div className="bg-slate-900/60 p-1.5 rounded border border-white/5 flex flex-col gap-0.5">
                    <span className="text-[4px] text-slate-500 uppercase font-bold">Your Overview</span>
                    <div className="flex justify-between items-center">
                      <span className="text-[7.5px] font-black text-white">MRR $248.6K</span>
                      <span className="text-[4px] text-brand-cyan font-semibold">↑ 18.7%</span>
                    </div>
                  </div>

                  <div className="bg-slate-900/60 p-1.5 rounded border border-white/5 flex flex-col gap-0.5">
                    <div className="flex justify-between items-center">
                      <span className="text-[7.5px] font-black text-white">Users 25.4K</span>
                      <span className="text-[4px] text-brand-cyan font-semibold">↑ 12.5%</span>
                    </div>
                  </div>

                  <div className="bg-slate-900/60 p-1.5 rounded border border-white/5 flex flex-col gap-0.5">
                    <span className="text-[5px] text-slate-500 font-bold">Active Subscriptions</span>
                    <span className="text-[8px] font-black text-white">8,642</span>
                  </div>

                  {/* Visual Bar chart preview */}
                  <div className="bg-slate-900/60 p-1.5 rounded border border-white/5 flex flex-col gap-1 flex-grow">
                    <span className="text-[4px] text-slate-500 uppercase font-bold">User Activity</span>
                    <div className="flex-grow flex items-end gap-0.8 h-6 pt-1">
                      <div className="w-full bg-[#3EA77E] h-[40%] rounded-sm"></div>
                      <div className="w-full bg-[#3EA77E] h-[75%] rounded-sm"></div>
                      <div className="w-full bg-[#3EA77E] h-[60%] rounded-sm"></div>
                      <div className="w-full bg-[#3EA77E] h-[90%] rounded-sm"></div>
                    </div>
                  </div>

                </div>
              </div>

              {/* 3. Floating Overlapping Cloud-Native Badge */}
              <div className="absolute bottom-[3%] right-[8%] z-30 bg-[#062a69]/85 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-white/10 shadow-xl flex items-center gap-3 hover:scale-[1.02] transition-transform duration-300 text-white">
                <div className="w-7 h-7 rounded-lg bg-brand-cyan/20 border border-brand-cyan/35 flex items-center justify-center shrink-0">
                  <Cloud className="w-4 h-4 text-brand-cyan" />
                </div>
                <div className="flex flex-col text-left leading-none">
                  <span className="font-bold text-[10px] font-heading tracking-tight text-white">Cloud-Native | Secure</span>
                  <span className="text-[8.5px] text-slate-300 font-medium mt-0.5">Scalable | Future-Ready</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          3. WHY CHOOSE KAISHI INNOVATIONS
          ========================================== */}
      <section className="py-16 lg:py-24 bg-slate-50/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#3EA77E]">
            Why Choose Kaishi Innovations
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-heading font-black text-brand-navy">
            SaaS Solutions That Drive <span className="text-[#3EA77E]">Long-Term Value</span>
          </h2>
          <p className="mt-4 text-slate-500 font-normal max-w-2xl mx-auto text-[14px] sm:text-[15px] leading-relaxed">
            We combine business insight, modern technology, and proven methodologies to build SaaS products that users love and businesses rely on.
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
          4. OUR SAAS DEVELOPMENT PROCESS
          ========================================== */}
      <section className="py-16 lg:py-24 bg-white border-t border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#3EA77E]">
            Our SaaS Development Process
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
          5. END-TO-END SAAS DEVELOPMENT SERVICES (DARK BAR)
          ========================================== */}
      <section className="bg-[#031430] py-8 text-white relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center">
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-brand-cyan mb-6">
              End-to-End SaaS Development Services
            </span>
            <div className="w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-y-6 gap-x-4 justify-items-center items-center text-center">
              {endToEndServices.map((item, idx) => {
                const IconComp = item.icon
                return (
                  <div key={idx} className="flex items-center gap-2 px-3 py-2 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors w-full justify-center">
                    <IconComp className="w-4.5 h-4.5 text-brand-cyan shrink-0" />
                    <span className="text-[11px] sm:text-xs font-bold leading-tight tracking-tight text-slate-100">
                      {item.name}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          6. TECHNOLOGIES WE USE
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
                className="bg-white px-4 py-5 rounded-2xl hover:shadow-xl shadow-md shadow-slate-100/40 transition-all duration-300 flex flex-col items-center justify-center gap-3 w-[100px] sm:w-[125px] md:w-[140px] h-[100px] sm:h-[125px] md:h-[140px] shrink-0 border border-slate-100"
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
          7. SUCCESS STORIES
          ========================================== */}
      <section className="py-16 lg:py-24 bg-slate-50/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#3EA77E]">
            Success Stories
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-heading font-black text-brand-navy">
            Real SaaS Products. Real <span className="text-[#3EA77E]">Impact.</span>
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
                  <div className="mt-6 pt-5 border-t border-slate-150 grid grid-cols-3 gap-2">
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
            <button className="border border-brand-navy hover:bg-brand-navy hover:text-white text-brand-navy font-bold text-xs px-6 py-3.5 rounded-xl transition-all cursor-pointer inline-flex items-center gap-2 bg-white">
              View More Projects
              <ArrowRight className="w-3.5 h-3.5 animate-pulse" />
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
                <h2 className="text-2xl md:text-3xl font-heading font-black tracking-tight">Have a SaaS Idea? Let's Build It Together.</h2>
                <p className="mt-2 text-white/90 text-sm font-normal max-w-xl">
                  From MVP to scale, we're your technology partner in building successful SaaS products.
                </p>
              </div>
            </div>

            <div className="relative z-10 w-full md:w-auto flex flex-col sm:flex-row gap-3 justify-center md:justify-end shrink-0">
              <button className="bg-white hover:bg-white/90 text-brand-cyan font-bold text-[14px] px-8 h-12 rounded-xl flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer shadow-md">
                Let's Talk About Your Idea
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="border border-white/30 hover:bg-white/10 bg-transparent text-white font-bold text-[14px] px-8 h-12 rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer">
                Download SaaS Brochure
                <Download className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
