import { useState, useMemo } from 'react'
import {
  Search,
  Calendar,
  Clock,
  Tag,
  ArrowRight,
  ArrowLeft,
  Mail,
  BookOpen,
  ArrowUpRight
} from 'lucide-react'
import ctaBg from '../assets/cta banner bg.png'

// Define the interface for our blog posts
interface BlogPost {
  id: number
  title: string
  excerpt: string
  image: string
  category: string
  date: string
  readTime: string
}

// Sidebar Popular Post interface
interface PopularPost {
  id: number
  title: string
  date: string
  image: string
}

// 1. Featured Post Data
const FEATURED_POST: BlogPost = {
  id: 0,
  title: 'The Future of AI in Business: Trends Shaping 2025 and Beyond',
  excerpt: 'Discover how artificial intelligence is transforming businesses across industries, improving efficiency, and creating new opportunities for growth.',
  image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80',
  category: 'AI & Technology',
  date: 'May 12, 2024',
  readTime: '8 min read'
}

// 2. Regular Posts Data (6 posts matching the mockup card names and categories)
const REGULAR_POSTS: BlogPost[] = [
  {
    id: 1,
    title: 'Cloud Migration Best Practices for a Seamless Transition',
    excerpt: 'Learn the key strategies for a successful cloud migration with minimal risk and maximum performance.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80',
    category: 'Cloud Computing',
    date: 'May 5, 2024',
    readTime: '6 min read'
  },
  {
    id: 2,
    title: 'Clean Code Principles Every Developer Should Follow',
    excerpt: 'Write better, more maintainable code with these essential clean coding principles.',
    image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=600&q=80',
    category: 'Development',
    date: 'Apr 28, 2024',
    readTime: '5 min read'
  },
  {
    id: 3,
    title: 'Digital Transformation: A Roadmap for Modern Enterprises',
    excerpt: 'A step-by-step roadmap to help businesses embrace digital transformation successfully.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80',
    category: 'Digital Transformation',
    date: 'Apr 20, 2024',
    readTime: '7 min read'
  },
  {
    id: 4,
    title: 'Top Cybersecurity Threats in 2024 and How to Stay Protected',
    excerpt: 'Stay ahead of cyber threats with these expert tips and best practices for 2024.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80',
    category: 'Cybersecurity',
    date: 'Apr 15, 2024',
    readTime: '6 min read'
  },
  {
    id: 5,
    title: 'Data Analytics vs. Business Intelligence: What\'s the Difference?',
    excerpt: 'Understand the key differences and how both can drive better business decisions.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80',
    category: 'Data & Analytics',
    date: 'Apr 10, 2024',
    readTime: '4 min read'
  },
  {
    id: 6,
    title: 'Cross-Platform vs Native App Development: Which is Right for You?',
    excerpt: 'Compare cross-platform and native app development to choose the best approach for your project.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=80',
    category: 'Mobile Development',
    date: 'Apr 2, 2024',
    readTime: '6 min read'
  }
]

// 3. Popular Posts Data
const POPULAR_POSTS: PopularPost[] = [
  {
    id: 101,
    title: 'How AI is Transforming Customer Experience',
    date: 'May 8, 2024',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd05a?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 102,
    title: 'The Ultimate Guide to SaaS Development',
    date: 'Apr 30, 2024',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 103,
    title: 'Building Scalable Applications in the Cloud',
    date: 'Apr 22, 2024',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 104,
    title: 'The Role of Data in Smarter Business Decisions',
    date: 'Apr 12, 2024',
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 105,
    title: 'Low-Code vs No-Code: Which One to Choose?',
    date: 'Apr 5, 2024',
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=150&q=80'
  }
]

// 4. Sidebar Categories List with counts
const SIDEBAR_CATEGORIES = [
  { name: 'AI & Technology', count: 18 },
  { name: 'Cloud Computing', count: 15 },
  { name: 'Digital Transformation', count: 12 },
  { name: 'Development', count: 20 },
  { name: 'Cybersecurity', count: 10 },
  { name: 'Data & Analytics', count: 11 },
  { name: 'Business Growth', count: 14 },
  { name: 'Industry Insights', count: 9 },
  { name: 'Productivity', count: 8 }
]

// 5. Sidebar Tags Cloud
const TAGS = [
  'Artificial Intelligence',
  'Cloud',
  'DevOps',
  'Software Development',
  'Machine Learning',
  'Business',
  'AI Tools',
  'Big Data',
  'Automation',
  'Startups',
  'IT Strategy'
]

// Helper categories for navigation tabs (exactly matching mockup list)
const CATEGORY_TABS = [
  'All Posts',
  'AI & Technology',
  'Cloud Computing',
  'Digital Transformation',
  'Development',
  'Business Growth',
  'Industry Insights'
]

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All Posts')
  const [currentPage, setCurrentPage] = useState(1)
  const [emailSubscribed, setEmailSubscribed] = useState(false)
  const [emailInput, setEmailInput] = useState('')
  const [bottomSubscribed, setBottomSubscribed] = useState(false)

  // Handle category changes and reset scroll/page
  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category)
    setCurrentPage(1)
  }

  // Handle page changes and scroll smoothly to the grid section
  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    setTimeout(() => {
      const el = document.getElementById('blog-posts-section')
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }, 50)
  }

  // Handle newsletter subscriptions
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (emailInput.trim()) {
      setEmailSubscribed(true)
      setEmailInput('')
      setTimeout(() => setEmailSubscribed(false), 5000)
    }
  }

  // Combine Featured Post and Regular Posts into a unified searchable array
  const allPostsCombined = useMemo(() => {
    return [FEATURED_POST, ...REGULAR_POSTS]
  }, [])

  // Filter posts based on active search and active category tab
  const filteredPostsList = useMemo(() => {
    return allPostsCombined.filter((post) => {
      // Category match: "All Posts" shows everything
      const matchesCategory =
        selectedCategory === 'All Posts' ||
        post.category.toLowerCase() === selectedCategory.toLowerCase()

      // Search match
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase())

      return matchesCategory && matchesSearch
    })
  }, [allPostsCombined, selectedCategory, searchQuery])

  // Extract Featured post from filtered list (only show featured post visual on Page 1 of "All Posts" or if it matches filter)
  const featuredPostToShow = useMemo(() => {
    if (currentPage > 1 || searchQuery.trim() !== '') return null

    // In category views, we don't render a separate featured layout, just grid cards
    if (selectedCategory !== 'All Posts') return null

    return filteredPostsList.find((p) => p.id === 0) || null
  }, [filteredPostsList, selectedCategory, currentPage, searchQuery])

  // Regular grid cards to show (excluding the featured post if displayed separately)
  const gridPostsToShow = useMemo(() => {
    let posts = [...filteredPostsList]
    if (featuredPostToShow) {
      posts = posts.filter((p) => p.id !== 0)
    }

    // If we are showing the mockup 10 pages for "All Posts" without search, we repeat the posts
    // with new keys/IDs and page-based title indicators to show realistic page loading
    if (selectedCategory === 'All Posts' && searchQuery.trim() === '' && posts.length > 0) {
      const cardsPerPage = 6
      const result: BlogPost[] = []
      for (let i = 0; i < cardsPerPage; i++) {
        const virtualIndex = (currentPage - 1) * cardsPerPage + i
        const originalPost = posts[virtualIndex % posts.length]
        const pageNumberSuffix = currentPage > 1 ? ` (Page ${currentPage})` : ''
        result.push({
          ...originalPost,
          id: originalPost.id + virtualIndex * 100, // Unique ID
          title: originalPost.title + pageNumberSuffix
        })
      }
      return result
    }

    // Apply pagination (show up to 6 cards per page)
    const cardsPerPage = 6
    const startIndex = (currentPage - 1) * cardsPerPage
    return posts.slice(startIndex, startIndex + cardsPerPage)
  }, [filteredPostsList, featuredPostToShow, currentPage, selectedCategory, searchQuery])

  // Total pages calculation (excluding the featured card if it is in featured row)
  const totalPages = useMemo(() => {
    // For high fidelity illustration, we hardcode 10 pages for "All Posts" view when no active search
    if (selectedCategory === 'All Posts' && searchQuery.trim() === '') {
      return 10
    }
    let postsCount = filteredPostsList.length
    if (featuredPostToShow) {
      postsCount -= 1
    }
    return Math.max(1, Math.ceil(postsCount / 6))
  }, [filteredPostsList, featuredPostToShow, selectedCategory, searchQuery])

  // Generate the page array (e.g. [1, 2, 3, '...', 10]) matching the mockup structure
  const pageNumbers = useMemo(() => {
    const pages: (number | string)[] = []
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
      }
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, '...', totalPages)
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, '...', totalPages - 2, totalPages - 1, totalPages)
      } else {
        pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages)
      }
    }
    return pages
  }, [currentPage, totalPages])

  return (
    <div className="w-full bg-[#F8FAFC] min-h-screen text-[#0b2240] font-sans antialiased">

      {/* ==========================================
          1. HERO SECTION (Dark Blue, Two-Column)
          ========================================== */}
      <section className="relative overflow-hidden py-16 lg:py-24 bg-[#031430] text-white flex items-center">
        {/* Soft background grid and digital network effects */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#031430] via-[#051a3a] to-[#031430]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_120%,rgba(0,180,216,0.18),transparent_55%)]" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full relative z-10 text-left">

          {/* Left Text Column */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#00b4d8]">
              OUR BLOG
            </span>
            <h1 className="mt-3 text-4xl sm:text-[48px] lg:text-[54px] sm:leading-[1.15] font-heading font-black tracking-tight text-white">
              Insights. Innovation. <br />
              <span className="text-[#00b4d8]">Inspiration.</span>
            </h1>
            <p className="mt-6 text-slate-300 text-base md:text-lg leading-relaxed max-w-xl font-normal">
              Explore the latest trends, expert insights, and practical guides on technology, AI, and digital transformation.
            </p>
          </div>

          {/* Right Visual Column (Premium CSS representation of Mockup Visuals) */}
          <div className="lg:col-span-6 w-full flex justify-center items-center relative h-[300px] lg:h-[350px]">
            {/* Glowing background highlights behind visual */}
            <div className="absolute w-72 h-72 rounded-full bg-[#00b4d8]/10 blur-3xl" />

            {/* Laptop, Plant, and Mug elements */}
            <div className="relative w-full max-w-[450px] h-full flex items-end justify-center">

              {/* Plant on the Left */}
              <div className="absolute bottom-6 left-4 z-10 flex flex-col items-center group">
                {/* Pot */}
                <div className="w-10 h-11 bg-white border border-slate-200 shadow-md rounded-b-md rounded-t-sm clip-pot relative">
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-slate-100 border-b border-slate-200" />
                </div>
                {/* SVG Leaves */}
                <svg viewBox="0 0 100 120" className="w-24 h-24 absolute -bottom-1 drop-shadow-sm pointer-events-none origin-bottom group-hover:rotate-2 transition-transform duration-500">
                  {/* Stem & Leaves */}
                  <path d="M50 110 Q45 80 50 40" stroke="#4d7c0f" strokeWidth="2.5" fill="none" />
                  <path d="M50 85 Q35 70 30 75 Q42 85 50 85" fill="#65a30d" />
                  <path d="M50 80 Q65 65 70 70 Q58 80 50 80" fill="#4d7c0f" />
                  <path d="M50 60 Q28 45 25 52 Q38 62 50 60" fill="#84cc16" />
                  <path d="M50 55 Q72 40 75 48 Q62 58 50 55" fill="#65a30d" />
                  <path d="M50 40 Q40 20 50 10 Q60 20 50 40" fill="#a3e635" />
                </svg>
              </div>

              {/* Laptop in the Center */}
              <div className="relative w-[280px] sm:w-[320px] transition-transform duration-500 hover:translate-y-[-4px] z-20">
                {/* Screen frame */}
                <div className="w-full aspect-[1.6/1] bg-[#1e293b] rounded-t-xl p-2.5 shadow-xl border border-slate-700/80">
                  {/* Glossy Screen panel displaying miniature website cards */}
                  <div className="w-full h-full bg-[#0b132b] rounded overflow-hidden relative border border-slate-900 flex flex-col p-1.5 gap-1.5">
                    {/* Header simulation */}
                    <div className="flex items-center justify-between border-b border-white/10 pb-1">
                      <div className="w-8 h-1 bg-[#00b4d8] rounded-full" />
                      <div className="flex gap-1">
                        <div className="w-3 h-0.5 bg-white/45 rounded-full" />
                        <div className="w-3 h-0.5 bg-white/45 rounded-full" />
                        <div className="w-3 h-0.5 bg-[#00b4d8] rounded-full" />
                      </div>
                    </div>
                    {/* Mini Hero */}
                    <div className="w-full h-8 bg-gradient-to-r from-slate-800 to-slate-900 rounded flex flex-col justify-center px-1">
                      <div className="w-12 h-1 bg-white rounded-full" />
                      <div className="w-8 h-0.5 bg-[#00b4d8] rounded-full mt-1" />
                    </div>
                    {/* Mini grid content */}
                    <div className="grid grid-cols-2 gap-1.5 flex-grow">
                      <div className="bg-slate-800/80 border border-white/5 rounded p-1 flex flex-col justify-between">
                        <div className="w-full aspect-[2/1] bg-slate-700 rounded-sm" />
                        <div className="w-8 h-1 bg-white rounded-full mt-1" />
                        <div className="w-5 h-0.5 bg-white/40 rounded-full mt-0.5" />
                      </div>
                      <div className="bg-slate-800/80 border border-white/5 rounded p-1 flex flex-col justify-between">
                        <div className="w-full aspect-[2/1] bg-[#00b4d8]/40 rounded-sm" />
                        <div className="w-8 h-1 bg-white rounded-full mt-1" />
                        <div className="w-5 h-0.5 bg-[#00b4d8] rounded-full mt-0.5" />
                      </div>
                    </div>
                    {/* Screen glare effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none" />
                  </div>
                </div>
                {/* Keyboard Base */}
                <div className="w-[110%] -ml-[5%] h-3.5 bg-gradient-to-b from-slate-400 via-slate-300 to-slate-500 rounded-b-xl relative shadow-2xl flex justify-center">
                  {/* Laptop lip opening slot */}
                  <div className="absolute top-0 w-16 h-1 bg-slate-600 rounded-b-md" />
                </div>
              </div>

              {/* Kaishi Mug on the Right */}
              <div className="absolute bottom-6 right-4 z-10 flex flex-col items-center group">
                {/* Steam effect (SVG/CSS Keyframe-less wavy lines) */}
                <div className="h-8 flex gap-1 items-end pb-1 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-0.5 h-4 bg-slate-300 rounded-full animate-bounce" style={{ animationDelay: '0.1s', animationDuration: '2.5s' }} />
                  <div className="w-0.5 h-6 bg-slate-300 rounded-full animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '3s' }} />
                  <div className="w-0.5 h-3.5 bg-slate-300 rounded-full animate-bounce" style={{ animationDelay: '0.3s', animationDuration: '2s' }} />
                </div>
                {/* Mug Body with Handle */}
                <div className="relative">
                  {/* Mug Cylinder */}
                  <div className="w-9 h-11 bg-[#0b2240] border border-slate-900 rounded-b-md rounded-t-sm flex items-center justify-center relative shadow-md">
                    {/* Kaishi print */}
                    <span className="text-[7.5px] font-heading font-black tracking-tight text-white select-none">Kaishi</span>
                  </div>
                  {/* Mug Handle */}
                  <div className="absolute top-2 -right-2 w-3.5 h-6 border-[2.5px] border-[#0b2240] rounded-r-full border-l-transparent" />
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ==========================================
          2. CATEGORY TABS & SEARCH CONTAINER
          ========================================== */}
      <section id="blog-posts-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 relative z-30">
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-6 w-full">

          {/* Category Tabs Container Capsule */}
          <div className="bg-slate-100/70 border border-slate-200/50 p-1 rounded-lg sm:rounded-xl flex flex-row items-center gap-1 sm:gap-1.5 w-full lg:w-auto overflow-hidden">
            {CATEGORY_TABS.map((cat) => {
              const isActive = selectedCategory === cat
              return (
                <button
                  key={cat}
                  onClick={() => handleCategoryClick(cat)}
                  className={`px-2.5 py-1.5 sm:px-3 sm:py-1.5 rounded-lg sm:rounded-xl text-[11px] sm:text-[12.5px] font-bold tracking-wide transition-all duration-200 shrink-0 border ${isActive
                      ? 'bg-[#0b2240] text-[#f7f9fc] border-[#0b2240] shadow-sm'
                      : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:text-[#0b2240]'
                    } cursor-pointer`}
                >
                  {cat}
                </button>
              )
            })}
          </div>

          {/* Search bar with right-side search button */}
          <div className="relative w-full lg:max-w-[240px] shrink-0">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value)
                setCurrentPage(1)
              }}
              className="block w-full pl-5 pr-12 py-3 bg-white border border-slate-300 rounded-xl text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00b4d8]/20 focus:border-[#00b4d8] transition-all font-medium"
            />
            <span className="absolute inset-y-0 right-0 pr-4 flex items-center cursor-pointer text-slate-400 hover:text-[#00b4d8] transition-colors">
              <Search className="h-5 w-5" />
            </span>
          </div>

        </div>
      </section>

      {/* ==========================================
          3. TWO-COLUMN LAYOUT (Main Grid + Sidebar)
          ========================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* ==========================================
              LEFT COLUMN (Blog Articles List)
              ========================================== */}
          <main className="lg:col-span-8 flex flex-col gap-10">

            {/* A. FEATURED BLOG POST (Horizontal display on top) */}
            {featuredPostToShow && (
              <article className="group bg-white rounded-[24px] overflow-hidden border border-slate-100 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col md:flex-row w-full text-left">
                {/* Image Block (Left Side) */}
                <div className="w-full md:w-2/5 shrink-0 overflow-hidden relative bg-slate-200 min-h-[240px] md:min-h-full">
                  <img
                    src={featuredPostToShow.image}
                    alt={featuredPostToShow.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent pointer-events-none" />
                </div>

                {/* Content Block (Right Side) */}
                <div className="p-6 md:p-8 flex-grow flex flex-col justify-center">
                  {/* Featured & Category Badges (Below Image / Top of topic) */}
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-[#e0f2fe]/90 text-[#00b4d8] text-[10px] font-bold uppercase tracking-wider">
                      <BookOpen className="w-3 h-3" />
                      FEATURED
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-[#e0f2fe]/40 text-[#00b4d8] text-[10px] font-bold uppercase tracking-wider">
                      {featuredPostToShow.category}
                    </span>
                  </div>

                  {/* Featured Title / Topic */}
                  <h2 className="mt-3 text-xl md:text-2xl font-heading font-black tracking-tight text-[#0b2240] group-hover:text-[#00b4d8] transition-colors leading-tight">
                    {featuredPostToShow.title}
                  </h2>

                  {/* Metadata Header (Below topic) */}
                  <div className="flex flex-wrap items-center gap-3.5 text-[11.5px] font-semibold text-slate-500 mt-2.5">
                    <span className="flex items-center gap-1.5 text-slate-600">
                      <Calendar className="w-3.5 h-3.5 text-[#00b4d8]" />
                      {featuredPostToShow.date}
                    </span>
                    <span className="flex items-center gap-1.5 text-slate-600">
                      <Clock className="w-3.5 h-3.5 text-[#00b4d8]" />
                      {featuredPostToShow.readTime}
                    </span>
                  </div>

                  {/* Excerpt */}
                  <p className="mt-3.5 text-slate-500 text-[13.5px] leading-relaxed font-normal">
                    {featuredPostToShow.excerpt}
                  </p>

                  {/* Read More link directly below Excerpt */}
                  <button className="mt-4 flex items-center gap-1.5 text-xs font-bold text-[#031430] hover:text-[#0077b6] transition-colors group/btn cursor-pointer self-start">
                    Read More
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </article>
            )}

            {/* B. REGULAR POSTS GRID (3-Columns list) */}
            {gridPostsToShow.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {gridPostsToShow.map((post) => (
                  <article
                    key={post.id}
                    className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full text-left"
                  >
                    {/* Thumbnail */}
                    <div className="aspect-[16/10] w-full overflow-hidden bg-slate-200 relative">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>

                    {/* Content Details */}
                    <div className="p-5 flex-grow flex flex-col justify-between text-left">
                      <div>
                        {/* Category Badge (Top of topic) */}
                        <div className="flex items-center">
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded bg-[#e0f2fe]/90 text-[#00b4d8] text-[10px] font-bold uppercase tracking-wider">
                            {post.category}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="mt-2 text-[15px] sm:text-[16px] font-bold text-[#0b2240] leading-snug group-hover:text-[#00b4d8] transition-colors line-clamp-2">
                          {post.title}
                        </h3>

                        {/* Meta (Below topic) */}
                        <div className="flex items-center gap-4 text-[11px] font-semibold text-slate-500 mt-2">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5 text-[#00b4d8]" />
                            {post.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5 text-[#00b4d8]" />
                            {post.readTime}
                          </span>
                        </div>

                        {/* Description excerpt */}
                        <p className="mt-2.5 text-slate-500 text-[12.5px] leading-relaxed font-normal line-clamp-3">
                          {post.excerpt}
                        </p>
                      </div>

                      {/* Read More */}
                      <div className="mt-4.5 pt-3.5 border-t border-slate-50 flex items-center justify-between">
                        <button className="flex items-center gap-1.5 text-xs font-bold text-[#031430] hover:text-[#0077b6] transition-colors cursor-pointer group/btn">
                          Read More
                          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              // No Search Results fallback
              !featuredPostToShow && (
                <div className="py-20 text-center bg-white border border-slate-100 rounded-3xl shadow-sm">
                  <p className="text-slate-400 text-base font-semibold">No articles found matching your criteria.</p>
                  <button
                    onClick={() => {
                      setSearchQuery('')
                      setSelectedCategory('All Posts')
                    }}
                    className="mt-4 px-6 py-2.5 bg-[#00b4d8] text-white rounded-xl text-sm font-semibold hover:bg-[#0077b6] transition-all shadow-md shadow-[#00b4d8]/10 cursor-pointer"
                  >
                    Reset Search Filters
                  </button>
                </div>
              )
            )}

            {/* C. PAGINATION BUTTONS ROW */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 mt-10">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`w-10 h-10 rounded-[10px] flex items-center justify-center border transition-all ${currentPage === 1
                      ? 'border-slate-100 text-slate-300 cursor-not-allowed bg-slate-50/50'
                      : 'border-slate-200/60 text-slate-600 bg-white hover:border-slate-300 hover:bg-slate-50 cursor-pointer shadow-sm'
                    }`}
                >
                  <ArrowLeft className="w-4.5 h-4.5" />
                </button>

                {pageNumbers.map((pNum, index) => {
                  if (pNum === '...') {
                    return (
                      <div
                        key={`ellipsis-${index}`}
                        className="w-10 h-10 rounded-[10px] text-xs sm:text-sm font-bold flex items-center justify-center border border-slate-200/60 bg-white text-slate-400 select-none"
                      >
                        ...
                      </div>
                    )
                  }

                  const isActive = currentPage === pNum
                  return (
                    <button
                      key={pNum}
                      onClick={() => handlePageChange(Number(pNum))}
                      className={`w-10 h-10 rounded-[10px] text-xs sm:text-sm font-bold flex items-center justify-center transition-all cursor-pointer ${isActive
                          ? 'bg-[#3EA77E] text-white border-[#3EA77E] shadow-sm'
                          : 'bg-white text-slate-600 border border-slate-200/60 hover:border-slate-300 hover:bg-slate-50'
                        }`}
                    >
                      {pNum}
                    </button>
                  )
                })}

                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={`w-10 h-10 rounded-[10px] flex items-center justify-center border transition-all ${currentPage === totalPages
                      ? 'border-slate-100 text-slate-300 cursor-not-allowed bg-slate-50/50'
                      : 'border-slate-200/60 text-slate-600 bg-white hover:border-slate-300 hover:bg-slate-50 cursor-pointer shadow-sm'
                    }`}
                >
                  <ArrowRight className="w-4.5 h-4.5" />
                </button>
              </div>
            )}

          </main>

          {/* ==========================================
              RIGHT COLUMN (Sidebar Widgets)
              ========================================== */}
          <aside className="lg:col-span-4 flex flex-col gap-10">

            {/* Widget 1: Categories Widget */}
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm text-left">
              <h4 className="text-sm font-bold font-heading uppercase tracking-wider text-[#0b2240] pb-3 border-b border-slate-100">
                Categories
              </h4>
              <ul className="mt-4 flex flex-col gap-3">
                {SIDEBAR_CATEGORIES.map((category) => {
                  const isCurrent = selectedCategory.toLowerCase() === category.name.toLowerCase()
                  return (
                    <li key={category.name}>
                      <button
                        onClick={() => handleCategoryClick(category.name)}
                        className={`flex items-center justify-between w-full text-xs font-semibold py-1.5 transition-colors cursor-pointer text-left ${isCurrent
                            ? 'text-[#00b4d8]'
                            : 'text-slate-500 hover:text-[#0b2240]'
                          }`}
                      >
                        <span className="flex items-center gap-2">
                          <Tag className={`w-3.5 h-3.5 shrink-0 ${isCurrent ? 'text-[#00b4d8]' : 'text-slate-300'}`} />
                          {category.name}
                        </span>
                        <span className={`px-2 py-0.5 rounded-full text-[10px] ${isCurrent ? 'bg-[#e0f2fe] text-[#00b4d8]' : 'bg-slate-50 text-slate-400'}`}>
                          {category.count}
                        </span>
                      </button>
                    </li>
                  )
                })}
              </ul>
            </div>

            {/* Widget 2: Popular Posts Widget */}
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm text-left">
              <h4 className="text-sm font-bold font-heading uppercase tracking-wider text-[#0b2240] pb-3 border-b border-slate-100">
                Popular Posts
              </h4>
              <div className="mt-4 flex flex-col gap-4">
                {POPULAR_POSTS.map((pop, idx) => (
                  <div key={pop.id} className="flex gap-3.5 items-start group cursor-pointer">
                    {/* Thumbnail with counter */}
                    <div className="w-14 h-14 rounded-lg overflow-hidden shrink-0 bg-slate-100 relative">
                      <img src={pop.image} alt={pop.title} className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-300" />
                      <div className="absolute top-0 left-0 w-4.5 h-4.5 bg-[#0b2240]/80 flex items-center justify-center text-[9px] font-bold text-white rounded-br">
                        {idx + 1}
                      </div>
                    </div>
                    {/* Title & Metadata */}
                    <div className="flex-grow flex flex-col text-left">
                      <h5 className="text-[12.5px] font-bold text-[#0b2240] group-hover:text-[#00b4d8] transition-colors leading-snug line-clamp-2">
                        {pop.title}
                      </h5>
                      <span className="text-[10px] font-semibold text-slate-400 mt-1 flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-slate-300" />
                        {pop.date}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Widget 3: Subscribe to Newsletter Widget */}
            <div className="bg-[#031430] text-white p-6 rounded-2xl border border-[#0b2240] shadow-sm text-left relative overflow-hidden">
              {/* Background glows */}
              <div className="absolute -right-12 -top-12 w-28 h-28 rounded-full bg-[#00b4d8]/10 blur-xl" />

              <div className="relative z-10">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 text-[#00b4d8]">
                  <Mail className="w-5 h-5" />
                </div>
                <h4 className="text-sm sm:text-base font-bold font-heading text-white leading-tight">
                  Subscribe to Our Newsletter
                </h4>
                <p className="mt-2 text-slate-400 text-xs leading-relaxed font-normal">
                  Get the latest insights, articles, and updates delivered to your inbox.
                </p>

                {emailSubscribed ? (
                  <div className="mt-4 p-3 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold rounded-lg text-center">
                    Thanks for subscribing! Check your inbox.
                  </div>
                ) : (
                  <form onSubmit={handleSubscribe} className="mt-5 flex flex-col gap-2">
                    <input
                      type="email"
                      required
                      placeholder="Enter your email address"
                      value={emailInput}
                      onChange={(e) => setEmailInput(e.target.value)}
                      className="block w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-xs placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#00b4d8]/30 focus:border-[#00b4d8] text-white transition-all"
                    />
                    <button
                      type="submit"
                      className="w-full bg-[#3EA77E] hover:bg-[#0077b6] text-white text-xs font-bold py-2.5 rounded-xl transition-all shadow-md shadow-[#00b4d8]/15 flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      Subscribe Now
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Widget 4: Tags Cloud Widget */}
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm text-left">
              <h4 className="text-sm font-bold font-heading uppercase tracking-wider text-[#0b2240] pb-3 border-b border-slate-100">
                Tags
              </h4>
              <div className="mt-4 flex flex-wrap gap-2">
                {TAGS.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => {
                      setSearchQuery(tag)
                      setSelectedCategory('All Posts')
                      setCurrentPage(1)
                      window.scrollTo({ top: 350, behavior: 'smooth' })
                    }}
                    className="px-4 py-1.5 bg-white border border-slate-200 hover:border-[#00b4d8] hover:text-[#00b4d8] text-[#0b2240]/80 text-xs font-semibold rounded-full transition-colors cursor-pointer"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

          </aside>

        </div>
      </section>

      {/* ==========================================
          4. NEWSLETTER CALL-TO-ACTION (CTA) BANNER
          ========================================== */}
      <section className="py-6 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="relative overflow-hidden bg-[#031430] text-white py-8 px-6 sm:px-12 md:py-8 md:px-16 rounded-[24px] flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl"
            style={{
              backgroundImage: `url("${ctaBg}")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            {/* Overlay to ensure text readability */}
            <div className="absolute inset-0 bg-[#031430]/55 z-0"></div>

            <div className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left md:max-w-2xl">
              <h2 className="text-2xl md:text-3xl font-heading font-medium tracking-tight leading-tight">
                Stay Ahead with the Latest Tech Insights
              </h2>
              <p className="mt-2 text-white/90 text-sm md:text-base font-normal max-w-xl">
                Join thousands of professionals who trust Kaishi Innovations for expert insights and industry updates.
              </p>
            </div>

            <div className="relative z-10 w-full md:w-auto flex justify-center md:justify-end shrink-0">
              {bottomSubscribed ? (
                <div className="px-6 py-3 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-semibold rounded-xl text-center flex items-center justify-center">
                  Thanks for subscribing! Check your email.
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    setBottomSubscribed(true)
                    setTimeout(() => setBottomSubscribed(false), 5000)
                  }}
                  className="bg-[#3EA77E] hover:bg-[#35906b] text-white font-semibold text-sm px-6 py-3 rounded-xl flex items-center justify-center gap-1.5 transition-all shadow-md shadow-[#00b4d8]/15 cursor-pointer whitespace-nowrap"
                >
                  Subscribe to Newsletter
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
