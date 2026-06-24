import { useState } from 'react'
import {
  Users,
  Globe,
  Rocket,
  Trophy,
  Zap,
  TrendingUp,
  Target,
  ShieldCheck,
  Heart,
  Coins,
  HeartPulse,
  Laptop,
  GraduationCap,
  Play,
  ArrowRight,
  MapPin,
  Briefcase,
  Code,
  Brain,
  Pencil,
  BarChart3,
  X,
  Upload,
  CheckCircle,
  ChevronDown,
  Send
} from 'lucide-react'
import ctaBg from '../assets/cta banner bg.png'

const stats = [
  { value: '250+', label: 'Team Members', icon: Users, color: 'text-sky-400' },
  { value: '25+', label: 'Countries', icon: Globe, color: 'text-[#3EA77E]' },
  { value: '50+', label: 'Active Projects', icon: Rocket, color: 'text-cyan-400' },
  { value: '8+', label: 'Years of Excellence', icon: Trophy, color: 'text-amber-400' }
]

const cultureCards = [
  {
    title: 'Innovate Fearlessly',
    description: 'We encourage bold ideas and empower you to turn them into impact.',
    icon: Zap,
    iconColor: 'text-[#253e73] bg-[#253e73]/10'
  },
  {
    title: 'Grow Together',
    description: 'Continuous learning and mentorship to help you reach your best.',
    icon: TrendingUp,
    iconColor: 'text-[#3EA77E] bg-[#3EA77E]/10'
  },
  {
    title: 'Make an Impact',
    description: 'Work on meaningful projects that create real-world change.',
    icon: Target,
    iconColor: 'text-rose-500 bg-rose-500/10'
  },
  {
    title: 'Own It',
    description: 'We trust you to take ownership and deliver exceptional results.',
    icon: ShieldCheck,
    iconColor: 'text-blue-500 bg-blue-500/10'
  },
  {
    title: 'One Team',
    description: 'Collaborate, support and celebrate as one global team.',
    icon: Users,
    iconColor: 'text-cyan-500 bg-cyan-500/10'
  },
  {
    title: 'Live Well',
    description: 'We care about your well-being and support your work-life balance.',
    icon: Heart,
    iconColor: 'text-emerald-500 bg-emerald-500/10'
  }
]

const benefits = [
  { title: 'Competitive Compensation', icon: Coins },
  { title: 'Health & Wellness Programs', icon: HeartPulse },
  { title: 'Flexible Work Environment', icon: Laptop },
  { title: 'Learning & Development', icon: GraduationCap },
  { title: 'Global Exposure & Growth', icon: Globe },
  { title: 'Team Events & Celebrations', icon: Users }
]

const jobsData = [
  {
    id: 1,
    title: 'Senior Full Stack Developer',
    department: 'Engineering',
    location: 'Tokyo, Japan',
    type: 'Full-time',
    description: 'Build scalable web applications and APIs using modern technologies.',
    icon: Code,
    iconBg: 'bg-blue-50/80 text-blue-600',
  },
  {
    id: 2,
    title: 'AI/ML Engineer',
    department: 'AI & Data',
    location: 'Singapore',
    type: 'Full-time',
    description: 'Work on cutting-edge AI models and machine learning solutions.',
    icon: Brain,
    iconBg: 'bg-emerald-50/80 text-[#3EA77E]',
  },
  {
    id: 3,
    title: 'UI/UX Designer',
    department: 'Design',
    location: 'Remote',
    type: 'Full-time',
    description: 'Design intuitive and beautiful experiences for web and mobile platforms.',
    icon: Pencil,
    iconBg: 'bg-blue-50/80 text-[#253e73]',
  },
  {
    id: 4,
    title: 'Digital Marketing Specialist',
    department: 'Marketing',
    location: 'Tokyo, Japan',
    type: 'Full-time',
    description: 'Drive growth through data-driven digital marketing campaigns.',
    icon: BarChart3,
    iconBg: 'bg-amber-50/80 text-amber-600',
  },
  {
    id: 5,
    title: 'Enterprise Account Executive',
    department: 'Sales',
    location: 'Singapore',
    type: 'Full-time',
    description: 'Drive sales growth and manage key relationships with enterprise clients.',
    icon: Users,
    iconBg: 'bg-indigo-50/80 text-indigo-600',
  },
  {
    id: 6,
    title: 'Operations Coordinator',
    department: 'Operations',
    location: 'Tokyo, Japan',
    type: 'Full-time',
    description: 'Streamline internal processes and support global operations.',
    icon: Briefcase,
    iconBg: 'bg-rose-50/80 text-rose-600',
  }
]

export default function Careers() {
  const [selectedDept, setSelectedDept] = useState('All Departments')
  const [selectedLoc, setSelectedLoc] = useState('All Locations')

  const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false)
  const [selectedJobForApply, setSelectedJobForApply] = useState<typeof jobsData[0] | null>(null)
  
  // Apply Form State
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [fileName, setFileName] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const departments = ['All Departments', 'Engineering', 'AI & Data', 'Design', 'Marketing', 'Sales', 'Operations']
  const locations = ['All Locations', 'Tokyo, Japan', 'Singapore', 'Remote']

  const filteredJobs = jobsData.filter((job) => {
    const matchDept = selectedDept === 'All Departments' || job.department === selectedDept
    const matchLoc = selectedLoc === 'All Locations' || job.location === selectedLoc
    return matchDept && matchLoc
  })

  const handleApplyClick = (job: typeof jobsData[0]) => {
    setSelectedJobForApply(job)
    setIsSubmitted(false)
  }

  const handleCloseModal = () => {
    setSelectedJobForApply(null)
    setFullName('')
    setEmail('')
    setPhone('')
    setFileName('')
    setMessage('')
    setIsSubmitted(false)
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name)
    }
  }

  const handleSubmitApply = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 1200)
  }

  const handleScrollToPositions = () => {
    const section = document.getElementById('open-positions')
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="w-full bg-slate-50/20 text-brand-navy font-sans antialiased">
      {/* 1. Hero / Intro Section */}
      <section className="relative overflow-hidden pt-16 pb-24 lg:pt-20 lg:pb-32 bg-white flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
          {/* Left Text */}
          <div className="lg:col-span-6 flex flex-col items-start text-left z-10 w-full">
            <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#253e73]">
              CAREERS
            </span>
            <h1 className="mt-3 text-4xl sm:text-[48px] sm:leading-[1.15] font-heading font-black tracking-tight text-brand-navy">
              Build the Future. <br />
              <span className="text-[#3EA77E]">Together.</span>
            </h1>
            <p className="mt-6 text-[15px] leading-relaxed text-slate-500 font-normal max-w-xl">
              At Kaishi Innovations, we believe great people build great solutions. Join a team of innovators, thinkers, and doers who are passionate about technology and making a real-world impact.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button 
                onClick={handleScrollToPositions}
                className="bg-[#3EA77E] hover:bg-[#35906b] text-white font-semibold px-8 h-12 rounded-lg flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#3EA77E]/20 group cursor-pointer"
              >
                View Open Positions
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border border-brand-navy hover:bg-brand-navy/5 bg-white text-brand-navy font-semibold px-8 h-12 rounded-lg flex items-center justify-center gap-2 transition-all">
                Life at Kaishi
                <Play className="w-4 h-4 fill-brand-navy text-brand-navy" />
              </button>
            </div>
          </div>

          {/* Right Visual Image with Custom Curve */}
          <div className="lg:col-span-6 w-full flex justify-center items-center relative">
            <div className="absolute -right-8 -top-8 w-64 h-64 bg-brand-cyan/5 rounded-full blur-3xl" />
            <div className="absolute -left-8 -bottom-8 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl" />

            <div className="relative w-full h-[350px] lg:h-[450px] rounded-3xl overflow-hidden border border-slate-200/50 flex flex-col items-center justify-center group shadow-xl">
              <img
                src="/careers_hero.png"
                alt="Kaishi Innovations Team Working"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue-dark/50 to-brand-cyan/15 opacity-80 transition-opacity group-hover:opacity-70 duration-500" />
              
              {/* Overlay Logo */}
              <div className="absolute top-6 right-6 z-10 bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl border border-white/20">
                <span className="text-white font-heading font-black text-sm tracking-wide">
                  Kaishi Innovations
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Stats Banner (Overlapping Layout) */}
      <section className="relative z-25 -mt-12 lg:-mt-16 bg-transparent pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="relative overflow-hidden rounded-[28px] py-8 px-6 sm:px-10 lg:px-12 text-white shadow-xl bg-[#062a69] w-full">
            {/* Background gradient matching general stats banner */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#082a67] via-[#0a3178] to-[#07245d]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(59,130,246,0.15),transparent_45%)]" />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 md:gap-y-0 relative z-10 divide-x divide-white/10">
              {stats.map((stat, idx) => {
                const StatIcon = stat.icon
                return (
                  <div key={stat.label} className={`flex flex-row items-center justify-center gap-4 px-4 ${idx % 2 === 0 ? '' : 'border-r border-dashed border-white/10 md:border-r-0'}`}>
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-white/5 border border-white/10 shrink-0">
                      <StatIcon className={`w-6 h-6 ${stat.color}`} />
                    </div>
                    <div className="text-left">
                      <span className="text-2xl sm:text-3xl font-heading font-black block tracking-tight text-white leading-none">
                        {stat.value}
                      </span>
                      <span className="text-[11px] sm:text-xs text-slate-300 font-semibold mt-1.5 block uppercase tracking-wider leading-tight">
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

      {/* 3. Our Culture Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#3EA77E]">
            OUR CULTURE
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-heading font-black text-brand-navy">
            Where Innovation Meets <span className="text-[#3EA77E]">Purpose</span>
          </h2>
          <p className="mt-4 text-slate-500 font-normal max-w-xl mx-auto text-[15px] leading-relaxed">
            We foster a culture of ownership, creativity, and continuous learning. Here, your ideas matter and your growth is our priority.
          </p>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 text-center w-full">
            {cultureCards.map((item) => {
              const ItemIcon = item.icon
              return (
                <div
                  key={item.title}
                  className="bg-white p-5 rounded-2xl border border-slate-100 hover:border-slate-200/80 shadow-md shadow-slate-100/40 hover:shadow-xl hover:shadow-slate-200/30 transition-all hover:-translate-y-1.5 duration-300 group flex flex-col items-center text-center"
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-sm transition-all duration-300 group-hover:scale-110 mb-4 ${item.iconColor}`}>
                    <ItemIcon className="w-5 h-5" />
                  </div>
                  <h3 className="text-[14px] font-bold font-heading text-brand-navy leading-snug group-hover:text-[#253e73] transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-slate-500 text-[11.5px] leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 4. Benefits & Perks Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[28px] py-10 px-6 sm:px-10 lg:px-12 text-white shadow-xl bg-[#062a69]">
            {/* Background effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#082a67] via-[#0a3178] to-[#07245d]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(59,130,246,0.15),transparent_45%)]" />

            <div className="relative z-10 text-center mb-10">
              <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-cyan-400">
                BENEFITS & PERKS
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-heading font-black text-white">
                We Take Care of Our People
              </h2>
            </div>

            <div className="relative z-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {benefits.map((benefit, index) => {
                const BenefitIcon = benefit.icon
                return (
                  <div 
                    key={index}
                    className="flex flex-col items-center text-center gap-3 p-4 bg-white/5 border border-white/10 hover:border-white/20 rounded-2xl transition-all duration-300 group hover:bg-white/10"
                  >
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0 group-hover:bg-cyan-500/20 transition-all duration-300">
                      <BenefitIcon className="w-5 h-5 text-cyan-400" />
                    </div>
                    <span className="text-[13px] font-semibold text-white/90 group-hover:text-white transition-colors leading-tight">
                      {benefit.title}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Open Positions Section */}
      <section id="open-positions" className="py-20 lg:py-28 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#3EA77E]">
              OPEN POSITIONS
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-heading font-black text-brand-navy">
              Find Your Opportunity
            </h2>
          </div>

          {/* Interactive Filters Area */}
          <div className="flex flex-col sm:flex-row gap-6 justify-between items-stretch sm:items-center pb-6 border-b border-slate-100">
            {/* Department tabs */}
            <div className="overflow-x-auto scrollbar-none flex gap-2.5 pb-2 sm:pb-0">
              {departments.map((dept) => {
                const isActive = selectedDept === dept
                return (
                  <button
                    key={dept}
                    onClick={() => setSelectedDept(dept)}
                    className={`px-5 py-2.5 rounded-lg border text-[13.5px] font-semibold transition-all shrink-0 whitespace-nowrap cursor-pointer ${
                      isActive
                        ? 'bg-[#0b2240] border-[#0b2240] text-white shadow-sm'
                        : 'bg-white border-slate-200 text-slate-500 hover:border-slate-300 hover:text-brand-navy'
                    }`}
                  >
                    {dept}
                  </button>
                )
              })}
            </div>

            {/* Location Filter */}
            <div className="relative shrink-0">
              <button
                onClick={() => setIsLocationDropdownOpen(!isLocationDropdownOpen)}
                className="w-full sm:w-52 bg-white border border-slate-200 h-11 rounded-lg px-4 flex items-center justify-between text-[13.5px] font-medium text-slate-600 hover:border-slate-300 transition-all cursor-pointer shadow-sm"
              >
                <span className="flex items-center gap-2 text-slate-600">
                  <MapPin className="w-4 h-4 text-slate-400" />
                  {selectedLoc}
                </span>
                <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isLocationDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isLocationDropdownOpen && (
                <>
                  {/* Overlay to close on click outside */}
                  <div 
                    className="fixed inset-0 z-30" 
                    onClick={() => setIsLocationDropdownOpen(false)}
                  />
                  <div className="absolute right-0 mt-2 w-full bg-white border border-slate-100 rounded-xl shadow-lg z-40 py-2 animate-in fade-in slide-in-from-top-2 duration-150">
                    {locations.map((loc) => (
                      <button
                        key={loc}
                        onClick={() => {
                          setSelectedLoc(loc)
                          setIsLocationDropdownOpen(false)
                        }}
                        className={`w-full text-left px-4 py-2.5 text-[13px] font-medium transition-colors hover:bg-slate-50 ${
                          selectedLoc === loc ? 'text-[#253e73] font-bold bg-[#253e73]/5' : 'text-slate-600'
                        }`}
                      >
                        {loc}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Job List Container */}
          <div className="mt-4 flex flex-col divide-y divide-slate-100">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => {
                const JobIcon = job.icon
                return (
                  <div
                    key={job.id}
                    className="py-6 flex flex-col lg:grid lg:grid-cols-12 gap-4 lg:gap-6 items-start lg:items-center group text-left first:pt-2 last:border-b-0"
                  >
                    {/* Icon & Title & Department (lg:col-span-3) */}
                    <div className="lg:col-span-3 flex items-center gap-4 w-full">
                      <div className={`w-11 h-11 rounded-lg flex items-center justify-center shrink-0 shadow-sm ${job.iconBg}`}>
                        <JobIcon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-[15px] font-bold font-heading text-brand-navy group-hover:text-[#253e73] transition-colors leading-tight">
                          {job.title}
                        </h3>
                        <span className="text-xs text-slate-400 mt-1 block">
                          {job.department}
                        </span>
                      </div>
                    </div>

                    {/* Location (lg:col-span-2) */}
                    <div className="lg:col-span-2 flex items-center gap-2 text-[13.5px] text-slate-500 font-medium">
                      <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
                      <span>{job.location}</span>
                    </div>

                    {/* Job Type (lg:col-span-2) */}
                    <div className="lg:col-span-2 flex items-center gap-2 text-[13.5px] text-slate-500 font-medium">
                      <Briefcase className="w-4 h-4 text-slate-400 shrink-0" />
                      <span>{job.type}</span>
                    </div>

                    {/* Description (lg:col-span-3) */}
                    <div className="lg:col-span-3 text-[13px] text-slate-500 leading-relaxed font-normal">
                      {job.description}
                    </div>

                    {/* Apply Now Button (lg:col-span-2) */}
                    <div className="lg:col-span-2 flex justify-end w-full lg:w-auto">
                      <button
                        onClick={() => handleApplyClick(job)}
                        className="w-full lg:w-auto bg-white border border-[#3EA77E] text-[#3EA77E] hover:bg-[#3EA77E] hover:text-white font-bold text-[13.5px] px-5 py-2.5 rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer shrink-0"
                      >
                        Apply Now
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )
              })
            ) : (
              <div className="text-center py-16 bg-slate-50/50 rounded-2xl border border-dashed border-slate-200 mt-4">
                <span className="text-slate-400 font-medium block">No positions match your criteria.</span>
                <button
                  onClick={() => {
                    setSelectedDept('All Departments')
                    setSelectedLoc('All Locations')
                  }}
                  className="mt-4 text-[#253e73] font-bold text-sm hover:underline cursor-pointer"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>

          {/* View All Open Positions Footer */}
          <div className="mt-12 flex justify-center">
            <button className="border border-brand-navy hover:bg-brand-navy/5 text-brand-navy font-semibold px-8 h-12 rounded-lg flex items-center justify-center gap-2 transition-all">
              View All Open Positions
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 6. CTA BANNER */}
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
              <h2 className="text-2xl md:text-3xl font-heading font-meduim tracking-tight">Don't See the Right Role?</h2>
              <p className="mt-2 text-white/90 text-sm md:text-base font-normal max-w-xl">
                We're always looking for talented people. <br />
                Send us your resume and let's build the future together!
              </p>
            </div>

            <div className="relative z-10 w-full md:w-auto flex justify-center md:justify-end shrink-0">
              <button 
                onClick={() => handleApplyClick({
                  id: 0,
                  title: 'General Application',
                  department: 'General',
                  location: 'Remote',
                  type: 'Full-time',
                  description: 'Send us your resume and let\'s build the future together!',
                  icon: Users,
                  iconBg: 'bg-slate-50 text-slate-600',
                })}
                className="border border-white/40 bg-white/10 hover:bg-white/20 text-white font-bold text-[15px] px-6 h-12 rounded-xl flex items-center justify-center gap-2.5 transition-all cursor-pointer shadow-md group shrink-0"
              >
                Send Your Resume
                <Send className="w-4.5 h-4.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Apply Modal */}
      {selectedJobForApply && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          {/* Backdrop overlay */}
          <div 
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
            onClick={handleCloseModal}
          />

          <div className="flex min-h-screen items-center justify-center p-4 text-center">
            <div className="relative transform overflow-hidden rounded-[24px] bg-white p-6 sm:p-8 text-left shadow-2xl transition-all w-full max-w-xl animate-in zoom-in-95 duration-200">
              
              {/* Close Button */}
              <button
                onClick={handleCloseModal}
                className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 transition-colors p-1.5 hover:bg-slate-100 rounded-lg cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {!isSubmitted ? (
                <>
                  {/* Form Title */}
                  <div className="mb-6">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#253e73]">
                      Application Form
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold font-heading text-brand-navy mt-1">
                      Apply for {selectedJobForApply.title}
                    </h3>
                    <p className="text-slate-400 text-xs mt-1">
                      {selectedJobForApply.department} • {selectedJobForApply.location}
                    </p>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmitApply} className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="John Doe"
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 h-11 text-sm text-brand-navy focus:outline-none focus:border-[#253e73] focus:bg-white transition-colors"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address *</label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="johndoe@example.com"
                          className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 h-11 text-sm text-brand-navy focus:outline-none focus:border-[#253e73] focus:bg-white transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">Phone Number</label>
                        <input
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+1 (555) 123-4567"
                          className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 h-11 text-sm text-brand-navy focus:outline-none focus:border-[#253e73] focus:bg-white transition-colors"
                        />
                      </div>
                    </div>

                    {/* Resume Upload Area */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Upload Resume (PDF, DOCX) *</label>
                      <div className="relative border-2 border-dashed border-slate-200 rounded-xl hover:border-[#253e73] transition-colors p-6 text-center cursor-pointer group bg-slate-50/50">
                        <input
                          type="file"
                          required
                          accept=".pdf,.doc,.docx"
                          onChange={handleFileChange}
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        />
                        <Upload className="w-8 h-8 text-slate-400 group-hover:text-[#253e73] transition-colors mx-auto mb-2" />
                        <span className="text-xs font-bold text-slate-600 block group-hover:text-[#253e73] transition-colors">
                          {fileName ? fileName : 'Click to Upload Resume'}
                        </span>
                        <span className="text-[10px] text-slate-400 block mt-1">
                          Max size 10MB (PDF, DOCX)
                        </span>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Message / Cover Letter</label>
                      <textarea
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Tell us why you are a great fit..."
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg p-4 text-sm text-brand-navy focus:outline-none focus:border-[#253e73] focus:bg-white transition-colors resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2 flex justify-end gap-3">
                      <button
                        type="button"
                        onClick={handleCloseModal}
                        className="px-5 h-11 border border-slate-200 text-slate-500 rounded-lg font-semibold hover:bg-slate-50 transition-colors text-sm cursor-pointer"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="px-6 h-11 bg-brand-navy hover:bg-[#253e73] disabled:bg-brand-navy/50 text-white rounded-lg font-semibold shadow-md shadow-brand-navy/10 hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer text-sm"
                      >
                        {isSubmitting ? 'Submitting...' : 'Submit Application'}
                        {!isSubmitting && <ArrowRight className="w-4 h-4" />}
                      </button>
                    </div>
                  </form>
                </>
              ) : (
                /* Success Screen */
                <div className="flex flex-col items-center justify-center text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center shadow-inner mb-6 scale-110 border border-emerald-100">
                    <CheckCircle className="w-9 h-9" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-brand-navy">
                    Application Submitted!
                  </h3>
                  <p className="mt-3 text-slate-500 text-sm max-w-sm leading-relaxed">
                    Thank you for applying, <span className="font-bold text-brand-navy">{fullName}</span>. We have received your application for the <span className="font-semibold text-[#253e73]">{selectedJobForApply.title}</span> role and will be in touch soon.
                  </p>
                  <button
                    onClick={handleCloseModal}
                    className="mt-8 bg-brand-navy hover:bg-[#253e73] text-white font-semibold text-sm px-8 h-11 rounded-lg transition-all cursor-pointer shadow-md hover:shadow-lg"
                  >
                    Close Window
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
