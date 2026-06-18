import Image from "next/image";
import React from "react";
import {
  Search,
  Check,
  Users,
  PenTool,
  Code2,
  MapPin,
  BarChart3,
  Target,
  ArrowRight,
  Sparkles,
  Rocket,
  ArrowUpRight,
  ArrowDown,
  Calendar,
  Send,
  BarChart,
  UserCheck,
  Briefcase,
  RefreshCw,
  Clock,
  CheckCircle2,
} from "lucide-react";
import FadeIn from "@components/MotionWrapper";
import Link from "next/link";
import StructuredData from "@components/StructuredData";
import { contentEngineSchema } from "@lib/jsonSchemas";

export const metadata = {
  title: "Content Engine Service | BizGrow Media ",
  description:
    "Want content that builds trust and improves visibility? BizGrow Media creates value-driven content for growing brands.",
  alternates: {
    canonical: "https://bizgrowmedia.co.uk/content-engine/",
  },
};

const DigitalMarketingPage = () => {
  const marketingServices = [
    {
      title: "Search Engine Optimisation (SEO)",
      desc: (
        <>
          Drives more visitors to your website through increasing visibility in{" "}
          <Link
            href="/how-can-expert-seo-techniques-boost-your-business-visibility/"
            className="text-[#B54118] font-bold underline"
          >
            search engines
          </Link>{" "}
          (e.g., Google) and generating quality traffic from your target
          customers.
        </>
      ),
      // Search icon SEO ke liye perfect hai
      icon: <Search className="w-8 h-8" />,
    },
    {
      title: "Social Media Marketing (SMM)",
      desc: (
        <>
          Create Brand Awareness, interact with your audience, and develop a
          social community across multiple{" "}
          <Link
            href="/what-are-the-4-stages-of-social-media-marketing/"
            className="text-[#B54118] font-bold underline"
          >
            Social Media
          </Link>{" "}
          Platforms (e.g., Facebook, Instagram, and LinkedIn).
        </>
      ),
      // Users ya Share2 icon SMM (community/social) ke liye behtar hai
      icon: <Users className="w-8 h-8" />,
    },
    {
      title: "Creative Content Services",
      desc: (
        <>
          Create attention-grabbing{" "}
          <Link
            href="/how-to-write-an-seo-optimised-blog-in-2026/"
            className="text-[#B54118] font-bold"
          >
            blog
          </Link>{" "}
          posts, website articles, and design graphics to attract new audiences
          and build credibility for your brand.
        </>
      ),
      // PenTool ya FileText content creation aur graphics ko show karta hai
      icon: <PenTool className="w-8 h-8" />,
    },
    {
      title: "Web Development",
      desc: (
        <>
          We{" "}
          <Link
            href="/website-design-and-development/"
            className="text-[#B54118] font-bold underline"
          >
            design and develop
          </Link>{" "}
          fast, secure, and user-friendly websites to reflect the identity of
          your brand and its Marketing Goals while providing a quality user
          experience.
        </>
      ),
      // Code2 ya Layout icon development ke liye standard hai
      icon: <Code2 className="w-8 h-8" />,
    },
  ];

  return (
    <section className="w-full bg-white ">
      <StructuredData schema={contentEngineSchema} />
      {/* --- 1 HERO SECTION: Responsive & Centered --- */}
      <div className="relative h-[80vh]  md:h-screen pt-10 lg:pt-20 w-full flex items-center justify-center overflow-hidden">
        <Image
          src="/content-engine hero.jpg"
          alt="Content Engine - BizGrow Media"
          fill
          fetchPriority="high"
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col items-center text-center">
          <FadeIn direction="up">
            <span className="text-[#997819] font-bold tracking-[0.3em] uppercase text-xs md:text-sm mb-4 block">
              Boost Your Online Presence
            </span>
            <h1 className="text-white text-2xl md:text-6xl font-black leading-[1.1] mb-6 uppercase">
              Build a Powerful{" "}
              <span className="text-[#997819]">Digital Presence </span> Through
              Strategic, Purpose-Led Content
            </h1>
          </FadeIn>
        </div>
      </div>

      {/* 🚀 2 CONTENT ENGINE: PREMIUM SPLIT SECTION */}
      <section className="bg-white dark:bg-gray-800 py-14 md:py-32 transition-colors duration-500 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
            {/* --- Left Column: High-Impact Content --- */}
            <div className="lg:col-span-7">
              <FadeIn direction="right">
                <div className="flex items-center gap-3 mb-8">
                  <Sparkles size={18} className="text-[#997819]" />
                  <span className="text-[#997819] font-bold uppercase tracking-[0.4em] text-[10px]">
                    Content Engine
                  </span>
                </div>

                <h2 className="text-[#12066a] dark:text-white text-3xl md:text-5xl font-black uppercase tracking-tighter leading-[0.98] mb-10">
                  Your Ideas
                  <span className="text-transparent ml-1 bg-clip-text bg-gradient-to-r from-[#997819] to-[#997819]/60">
                    Deserve More
                  </span>{" "}
                  Than Occasional Content
                </h2>

                <div className="space-y-8 max-w-2xl">
                  <p className="text-xl md:text-2xl font-bold text-[#12066a] dark:text-white leading-tight italic border-l-4 border-[#997819] pl-8">
                    Strong businesses are not held back by a lack of ideas. They
                    are held back when those ideas are not shaped, shared, and
                    delivered with clarity, consistency, and purpose.
                  </p>

                  <div className="space-y-6 text-gray-500 dark:text-white/60 text-lg leading-relaxed">
                    <p>
                      <span className="text-[#12066a] dark:text-white font-bold">
                        Content Engine by <Link href="/" className="text-[#997819] font-bold">BizGrow Media</Link>
                      </span>{" "}
                      helps businesses turn their expertise, insights, and brand
                      message into high-quality content that builds visibility,
                      strengthens audience connection, and keeps the brand
                      active across key digital platforms.
                    </p>
                    <p>
                      We refine your brand voice, improve engagement, and
                      support long-term growth through a clear, consistent, and
                      strategic content presence.
                    </p>
                  </div>

                  {/* Premium CTA */}
                  <div className="pt-8">
                    <Link href="/contact-us/" >
                    <button className="group relative flex items-center gap-8 bg-[#12066a] dark:bg-[#997819] px-10 py-5 rounded-full text-white dark:text-white font-black uppercase tracking-[0.2em] text-[10px]  transition-all shadow-xl">
                      Book Your Strategy Call
                      <ArrowRight
                        size={18}
                        className="group-hover:translate-x-2 transition-transform"
                      />
                    </button>
                    </Link>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* --- Right Column: Elite Image Treatment --- */}
            <div className="lg:col-span-5 relative mt-20 lg:mt-0">
              <FadeIn direction="left">
                <div className="relative">
                  {" "}
                  {/* Outer relative wrapper */}
                  {/* 1. The Main Image Container */}
                  <div className="relative z-10 aspect-[4/5] rounded-[4rem] overflow-hidden border-[12px] border-gray-100 dark:border-white/5 shadow-2xl">
                    <img
                      src="/frame mockup.jpg"
                      alt="Build a Powerful Digital Presence with BizGrow Media"
                      className="w-full h-full relative object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                    />
                  </div>
                  {/* 3. Decorative Spinner */}
                  <div className="absolute -top-10 -right-10 w-40 h-40 border-2 border-[#997819]/20 rounded-full animate-spin-slow pointer-events-none z-0" />
                  {/* 4. Background Decorative Shape */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[115%] h-[90%] bg-[#12066a]/5 dark:bg-[#997819]/5 rounded-[5rem] -rotate-6 -z-10" />
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
      {/* 🏛️ 3 PURPOSE-LED CONTENT: THE CONTENT MATRIX */}
      <section className="bg-white dark:bg-gray-900 py-14 md:py-40 transition-colors duration-500 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          {/* --- Header Section (Exact Wording) --- */}
          <div className="flex flex-col  justify-between items-start mb-20">
            <div className="lg:w-2/3">
              <div className="flex items-center gap-4 mb-8">
                <span className="w-12 h-[2px] bg-[#997819]" />
                <span className="text-[#997819] font-bold uppercase tracking-[0.5em] text-[10px]">
                  Purpose-Led
                </span>
              </div>
              <h2 className="text-[#12066a] dark:text-white text-3xl md:text-6xl font-black uppercase tracking-tighter leading-[0.98]">
                Content That Brings <br className="hidden md:block" />
                Your <span className="text-[#997819]">Brand to Life</span>
              </h2>
            </div>
            <div className="lg:w-1/2 pt-10">
              <p className="text-gray-500 dark:text-white/60 text-lg font-medium leading-relaxed italic border-l-4 border-[#997819] pl-8">
                Your brand deserves more than content created simply to fill a
                feed. It needs a clear, strategic content system that expresses
                your value, reflects your identity, and keeps your audience
                connected with the right message at the right moment.
              </p>
            </div>
          </div>

          {/* --- The Matrix Grid (Clean & Structural) --- */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Social Media Content",
                desc: "We create polished social media content that keeps your brand active, consistent, and visually cohesive across every relevant platform.",
              },
              {
                title: "Short-Form Video Content",
                desc: "We produce engaging reels, shorts, and bite-sized videos crafted to capture attention quickly and communicate your message with clarity.",
              },
              {
                title: "Captions & Copywriting",
                desc: "We write compelling captions, hooks, and content copy that align with your brand voice and encourage meaningful audience interaction.",
              },
              {
                title: "Strategic Content Planning",
                desc: "We develop clear content ideas, themes, and monthly direction so your brand always has something relevant and valuable to share.",
              },
              {
                title: "Creative Campaigns",
                desc: <>We create <Link href="/studio-production/" className="text-[#997819] font-bold">campaign-led content</Link> for brand awareness, promotions, launches, engagement, and lead generation.</>,
              },
              {
                title: "Brand-Aligned Visuals",
                desc: "We design clean, professional, and brand-aligned visuals that make your content feel premium, consistent, and recognisable.",
              },
              {
                title: "Content Repurposing",
                desc: "We transform your existing ideas, videos, blogs, and expertise into fresh content formats tailored for different platforms.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group relative bg-gray-50 dark:bg-white/[0.02] p-10 rounded-[3rem] border border-transparent hover:border-[#997819]/30 transition-all duration-700 h-full flex flex-col justify-between overflow-hidden"
              >
                {/* Top Row: Icon & Index */}
                <div className="flex justify-between items-start mb-12">
                  <div className="w-12 h-12 bg-[#12066a] dark:bg-[#997819] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-xl">
                    <Check
                      className="text-white dark:text-white"
                      size={20}
                      strokeWidth={4}
                    />
                  </div>
                  <span className="text-[#997819]/20 font-black text-2xl group-hover:text-[#997819]/50 transition-colors">
                    0{index + 1}
                  </span>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-[#12066a] dark:text-white text-2xl font-black uppercase tracking-tight mb-6 leading-none">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 dark:text-white/60 text-sm leading-relaxed group-hover:text-gray-700 dark:group-hover:text-white/70 transition-colors">
                    {service.desc}
                  </p>
                </div>

                {/* Bottom Reveal Arrow */}
                <div className="mt-10 pt-6 border-t border-gray-100 dark:border-white/5 flex justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <ArrowUpRight className="text-[#997819]" size={24} />
                </div>
              </div>
            ))}

            {/* --- CTA Box (To balance the grid) --- */}
            <div className="bg-[#12066a] dark:bg-[#997819] p-10 rounded-[3rem] flex flex-col justify-between group cursor-pointer hover:shadow-2xl transition-all shadow-[#12066a]/20">
              <h3 className="text-white dark:text-white text-4xl font-black uppercase leading-[0.9]">
                Scale <br /> Your <br /> Visibility
              </h3>
              <div className="flex items-center justify-between">
                <Link href="/contact-us/">
                  <span className="text-white dark:text-white text-[10px] font-bold uppercase tracking-widest">
                    Book Strategy Call
                  </span>
                </Link> 
                <div className="w-12 h-12 rounded-full border border-white/20 dark:border-[#12066a]/20 flex items-center justify-center group-hover:bg-white dark:group-hover:bg-[#12066a] transition-all">
                  <ArrowUpRight className="text-white dark:group-hover:text-white group-hover:text-[#12066a] dark:group-hover:text-[#997819] transition-all" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 💎 4 THE VALUE OF CONSISTENCY: STACKING IMPACT SECTION */}
      <section className="bg-white dark:bg-gray-800 py-14 md:py-20 transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-6">
          {/* --- Header: Clean & Centered --- */}
          <div className="text-center mb-32">
            <FadeIn direction="up">
              <div className="flex items-center justify-center gap-3 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#997819] animate-pulse" />
                <span className="text-[#997819] font-black uppercase tracking-[0.4em] text-[10px]">
                  Strategic Value
                </span>
              </div>
              <h2 className="text-[#12066a] dark:text-white text-3xl md:text-6xl font-black uppercase tracking-tighter leading-none ">
                The Value of a <br />
                <span className="text-[#997819]">Consistent</span> Brand
                Presence
              </h2>
              <div className="flex justify-center">
                <ArrowDown
                  className="text-[#997819] animate-bounce mt-4"
                  size={52}
                  strokeWidth={1}
                />
              </div>
            </FadeIn>
          </div>

          {/* --- The Value Stack --- */}
          <div className="space-y-12">
            {[
              {
                title: "Increases Brand Visibility",
                desc: "Keeps your business active and present across the platforms where your audience spends their time.",
              },
              {
                title: "Builds Audience Trust",
                desc: "Helps people recognise your brand, understand your value, and feel more confident choosing you.",
              },
              {
                title: "Strengthens Brand Communication",
                desc: "Allows your message, offers, and expertise to be shared clearly, consistently, and professionally.",
              },
              {
                title: "Supports Lead Generation",
                desc: "Creates regular opportunities to attract interest, start conversations, and move potential clients closer to action.",
              },
            ].map((item, index) => (
              <FadeIn key={index} direction="up" delay={index * 0.1}>
                <div className="group relative bg-gray-50 dark:bg-white/[0.02] border border-gray-100 dark:border-white/5 rounded-[3rem] md:rounded-[5rem] p-12 overflow-hidden hover:border-[#997819]/30 transition-all duration-700">
                  {/* Background Number Reveal */}
                  <span className="absolute right-10 top-1/2 -translate-y-1/2 text-[15rem] md:text-[25rem] font-black text-[#12066a]/[0.02] dark:text-white/[0.01] group-hover:text-[#997819]/5 transition-all duration-1000 pointer-events-none">
                    0{index + 1}
                  </span>

                  <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                    {/* Heading */}
                    <div className="lg:col-span-7">
                      <h3 className="text-[#12066a] dark:text-white text-4xl  font-black uppercase tracking-tighter leading-[0.9] transition-transform duration-700 group-hover:translate-x-4">
                        {item.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <div className="lg:col-span-5 border-l-2 border-[#997819] pl-6">
                      <p className="text-gray-500 dark:text-white/50 text-lg md:text-xl font-medium leading-relaxed italic">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Glow Line */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-transparent via-[#997819] to-transparent group-hover:w-full transition-all duration-1000" />
                </div>
              </FadeIn>
            ))}
          </div>

          {/* --- Final Statement --- */}
          <div className="mt-32 text-center">
            <FadeIn direction="up">
              <p className="text-[#12066a]/40 dark:text-white/60 font-bold uppercase tracking-[0.5em] text-[10px]">
                Consistency is the new Currency
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 🔄 5 THE STRATEGIC SHIFT: COLUMN-WISE REFINED */}
      <section className="bg-white dark:bg-gray-900 py-14 md:py-32 transition-colors duration-500 overflow-hidden">
        <div className="max-w-4xl mx-auto px-6">
          {/* --- Top Header (Exact Wording) --- */}
          <div className="mb-20">
            <FadeIn direction="up">
              <div className="flex items-center gap-4 mb-8">
                <span className="w-12 h-[2px] bg-[#997819]" />
                <span className="text-[#997819] font-bold uppercase tracking-[0.4em] text-[10px]">
                  The Evolution
                </span>
              </div>

              <h2 className="text-[#12066a] dark:text-white text-3xl md:text-6xl font-black uppercase tracking-tighter leading-[0.98] mb-8">
                A Strategic Shift <br />
                Towards a <span className="text-[#997819]">Smarter</span> <br />
                Content System
              </h2>

              <p className="text-gray-500 dark:text-white/40 text-lg md:text-xl font-medium leading-relaxed border-l-4 border-[#997819] pl-10 italic">
                Content Engine helps your brand move beyond rushed, inconsistent
                posting and towards a more intentional content presence shaped
                by clarity, consistency, and long-term growth.
              </p>
            </FadeIn>
          </div>

          {/* --- Column-wise "No More" List --- */}
          <div className="space-y-4">
            {[
              "No more last-minute content pressure",
              "No more posting without a strategic direction",
              "No more quiet weeks across your platforms",
              "No more valuable ideas left unused",
              "No more content that feels scattered or disconnected",
              "No more struggling to maintain online visibility",
            ].map((text, index) => (
              <FadeIn key={index} direction="up" delay={index * 0.05}>
                <div className="group relative flex items-center justify-between  p-4 md:p-10 rounded-[2rem] bg-gray-50/50 dark:bg-white/[0.02] border border-gray-100 dark:border-white/5 hover:border-[#997819]/30 hover:bg-white dark:hover:bg-white/[0.05] transition-all duration-500 shadow-sm">
                  <div className="flex items-center gap-8 relative z-10">
                    {/* Gold Ring Icon (As per Image) */}
                    <div className="w-6 h-6 rounded-full border-2 border-[#997819] flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-[#997819] scale-0 group-hover:scale-100 transition-transform" />
                    </div>

                    <span className="text-[#12066a] dark:text-white text-base md:text-xl font-black uppercase tracking-tight group-hover:text-[#997819] transition-colors">
                      {text}
                    </span>
                  </div>

                  {/* Ghost Number (01, 02...) */}
                  <span className="text-4xl md:text-6xl font-black text-gray-200/30 dark:text-white/[0.02] italic select-none">
                    0{index + 1}
                  </span>

                  {/* Hover Accent Line */}
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-[#997819] group-hover:h-1/2 transition-all duration-500" />
                </div>
              </FadeIn>
            ))}
          </div>

          {/* --- Call to Action Footer --- */}
          <FadeIn direction="up">
            <div className="mt-20 flex justify-center">
              <Link href="/packages/">
                <button className="bg-[#12066a] dark:text-white dark:bg-[#997819] px-12 py-6 rounded-full text-white dark:text-[#12066a] font-black uppercase tracking-[0.3em] text-[10px] hover:scale-105 transition-all shadow-2xl">
                  Transform Your Strategy
                </button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 🔄 6 THE SEAMLESS CONTENT SYSTEM: ARCHITECTURAL FLOW */}
      <section className="bg-white dark:bg-gray-800 py-14 md:py-32 transition-colors duration-500 overflow-hidden">
        <div className="max-w-5xl mx-auto px-6">
          {/* --- Header Section --- */}
          <div className="mb-24 text-center">
            <FadeIn direction="up">
              <div className="flex items-center justify-center gap-3 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#997819] animate-pulse" />
                <span className="text-[#997819] font-black uppercase tracking-[0.4em] text-[10px]">
                  The Ecosystem
                </span>
              </div>
              <h2 className="text-[#12066a] dark:text-white text-3xl md:text-6xl font-black uppercase tracking-tighter leading-[0.98] mb-8">
                A Seamless <br />
                <span className="text-[#997819] mr-1">Content System</span>{" "}
                Built Around Your Brand
              </h2>
              <p className="text-gray-500 dark:text-white/40 text-lg font-medium max-w-2xl mx-auto leading-relaxed italic">
                With Content Engine, your brand follows a clear monthly content
                flow designed to keep your online presence active, consistent,
                and purposeful.
              </p>
            </FadeIn>
          </div>

          {/* --- Timeline Flow --- */}
          <div className="relative space-y-12">
            {/* Central Vertical Connector Line */}
            <div className="absolute left-6 md:left-1/2 top-0 w-px h-full bg-gray-100 dark:bg-white/5 -translate-x-1/2 z-0 hidden md:block" />

            {[
              {
                label: "Week 1",
                icon: <Calendar size={20} />,
                title: "Strategy & Content Direction",
                desc: "We define your themes, messages, audience focus, and monthly content goals.",
              },
              {
                label: "Week 2–3",
                icon: <PenTool size={20} />,
                title: "Content Creation & Production",
                desc: "We create your posts, captions, visuals, videos, and campaign content.",
              },
              {
                label: "Ongoing",
                icon: <Send size={20} />,
                title: "Content Delivery",
                desc: "Your content is organised and delivered ready to use, without last-minute pressure.",
              },
              {
                label: "Monthly",
                icon: <BarChart size={20} />,
                title: "Review & Refinement",
                desc: "We review performance, refine direction, and plan the next month with a stronger focus.",
              },
            ].map((step, index) => (
              <FadeIn
                key={index}
                direction={index % 2 === 0 ? "right" : "left"}
              >
                <div
                  className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-20 ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
                >
                  {/* Content Side */}
                  <div className="flex-1 w-full">
                    <div className="p-10 rounded-[3rem] bg-gray-50 dark:bg-white/[0.02] border border-gray-100 dark:border-white/5 hover:border-[#997819]/30 transition-all duration-500 group shadow-sm hover:shadow-xl">
                      <span className="inline-block text-[#997819] font-black uppercase tracking-[0.3em] text-[10px] mb-4">
                        {step.label}
                      </span>
                      <h3 className="text-[#12066a] dark:text-white text-2xl font-black uppercase tracking-tight mb-4 group-hover:text-[#997819] transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-gray-500 dark:text-white/50 text-sm leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>

                  {/* Central Icon / Anchor */}
                  <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-2xl bg-[#12066a] dark:bg-[#997819] dark:text-white flex items-center justify-center text-white dark:text-[#12066a] shadow-xl shadow-[#12066a]/20 dark:shadow-[#997819]/20 transform transition-transform group-hover:rotate-12">
                    {step.icon}
                  </div>

                  {/* Empty Side for Balance */}
                  <div className="flex-1 hidden md:block" />
                </div>
              </FadeIn>
            ))}
          </div>

          {/* --- Trust Badge --- */}
          <div className="mt-32 flex justify-center">
            <div className="inline-flex items-center gap-4 bg-gray-50 dark:bg-white/[0.02] px-8 py-4 rounded-full border border-gray-100 dark:border-white/5">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                System Live & Optimized
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 🎯 7 TARGET AUDIENCE: THE REFINED PROFILE MATRIX */}
      <section className="bg-white dark:bg-gray-900 py-32 transition-colors duration-500 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          {/* --- Header Section (Exact Wording) --- */}
          <div className="mb-24">
            <FadeIn direction="up">
              <div className="flex items-center gap-4 mb-8">
                <span className="w-12 h-[2px] bg-[#997819]" />
                <span className="text-[#997819] font-bold uppercase tracking-[0.4em] text-[10px]">
                  Ideal Partnerships
                </span>
              </div>

              <h2 className="text-[#12066a] dark:text-white text-3xl md:text-6xl font-black uppercase tracking-tighter leading-[0.98] mb-8">
                Who This
                Service Is <span className="text-[#997819]">Designed For</span>
              </h2>

              <p className="text-gray-500 dark:text-white/60 text-lg md:text-xl font-medium leading-relaxed max-w-3xl border-l-4 border-[#997819] pl-10 italic">
                Content Engine is created for businesses that understand the
                value of showing up online, but need the right structure,
                creativity, and consistency to turn their ideas into meaningful
                content.
              </p>
            </FadeIn>
          </div>

          {/* --- Audience Grid (Column-Wise Feel in 2-Cols) --- */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: <UserCheck size={24} />,
                title: "Founders & Entrepreneurs",
                desc: <>For business leaders who want to stay visible, share their expertise, and <Link href="/authority-builder/" className="text-[#997819] font-bold">build stronger trust</Link> with their audience.</>,
              },
              {
                icon: <Rocket size={24} />,
                title: "Startups & Growing Brands",
                desc: "For businesses that need professional content to increase awareness, improve engagement, and support long-term growth.",
              },
              {
                icon: <Briefcase size={24} />,
                title: "Service-Based Businesses",
                desc: "For companies that depend on clear communication, credibility, and consistent visibility to attract the right clients.",
              },
              {
                icon: <RefreshCw size={24} />,
                title: "Brands Struggling With Consistency",
                desc: "For businesses ready to move beyond random posting and build a more structured, reliable content presence.",
              },
              {
                icon: <Clock size={24} />,
                title: "Teams With Ideas but Limited Time",
                desc: "For businesses with valuable insights that need support in turning those ideas into polished, publish-ready content.",
              },
            ].map((profile, index) => (
              <FadeIn key={index} direction="up" delay={index * 0.05}>
                <div className="group relative bg-gray-50/50 dark:bg-white/[0.02] p-10 md:p-12 rounded-[3.5rem] border border-gray-100 dark:border-white/5 hover:border-[#997819]/30 transition-all duration-700 h-full overflow-hidden">
                  <div className="flex flex-col lg:flex-row items-start gap-8 relative z-10">
                    {/* Icon Container - Matching your 'Gold Ring' style */}
                    <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-white dark:bg-[#12066a] dark:text-white border border-gray-100 dark:border-white/10 flex items-center justify-center text-[#997819] shadow-sm group-hover:bg-[#997819] group-hover:text-white transition-all duration-500 group-hover:rotate-6">
                      {profile.icon}
                    </div>

                    <div className="flex-grow">
                      <h3 className="text-[#12066a] dark:text-white text-2xl font-black uppercase tracking-tight mb-4 leading-tight group-hover:text-[#997819] transition-colors">
                        {profile.title}
                      </h3>
                      <p className="text-gray-500 dark:text-white/50 text-sm md:text-base leading-relaxed font-medium">
                        {profile.desc}
                      </p>
                    </div>

                    {/* Minimal Ghost Number */}
                    <span className="text-4xl font-black text-gray-200/20 dark:text-white/[0.03] group-hover:text-[#997819]/10 transition-colors">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Hover Decor - Subtle glow at the bottom */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#997819]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>
              </FadeIn>
            ))}
          </div>

          {/* --- Final CTA Section --- */}
          <div className="md:mt-24 text-center">
            <FadeIn direction="up">
              <div className="inline-block relative">
                <button className="bg-[#12066a] dark:text-white dark:bg-[#997819] text-white dark:text-[#12066a] px-14 py-6 rounded-full font-black uppercase tracking-[0.3em] text-[10px] hover:scale-105 hover:shadow-2xl transition-all shadow-xl shadow-[#12066a]/20 dark:shadow-[#997819]/20">
                  Book Your Strategy Call
                </button>
                <div className="absolute -z-10 inset-0 bg-[#997819] blur-2xl opacity-0 group-hover:opacity-20 transition-opacity" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 🚀 FINAL CTA: THE GROWTH ASSET SECTION */}
   <section className="bg-white dark:bg-gray-900 py-10 md:py-40 transition-colors duration-500 overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 md:px-6">
    {/* Container: Mobile par padding kam ki */}
    <div className="relative bg-[#12066a] dark:bg-gray-800 rounded-[2rem] md:rounded-[4rem] p-6 md:p-24 overflow-hidden border border-[#997819]/20 shadow-2xl">
      
      {/* Background Elements (Mobile par chote) */}
      <div className="absolute top-0 right-0 w-48 h-48 md:w-96 md:h-96 bg-[#997819]/10 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-center">
        
        {/* --- Left Side: The Hook --- */}
        <div className="lg:col-span-7 text-center lg:text-left">
          <FadeIn direction="right">
            {/* Mobile par Heading size balance kiya */}
            <h2 className="text-white dark:text-[#997819] text-3xl md:text-6xl font-black uppercase tracking-normal leading-[1.1] mb-6">
              Ready to Turn Your Content Into a <br className="hidden md:block"/>
              <span className="text-[#997819] ml-1 dark:text-white">Growth Asset?</span>
            </h2>
            <p className="text-white/70 dark:text-white/60 text-base md:text-xl font-medium leading-relaxed max-w-xl mx-auto lg:mx-0 border-l-2 border-[#997819] pl-6 md:pl-8 italic">
              Content Engine is designed for brands that want to stay visible, communicate with purpose, and turn their ideas into consistent, high-quality content.
            </p>
          </FadeIn>
        </div>

        {/* --- Right Side: The Benefits List --- */}
        <div className="lg:col-span-5 bg-white/5 dark:bg-white/[0.02] p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] backdrop-blur-md border border-white/10">
          <div className="space-y-5 mb-8">
            {[
              "Build a consistent online presence",
              "Turn ideas into publish-ready content",
              "Stay visible across key platforms",
              "Communicate your value with clarity",
              "Create content that supports business growth",
            ].map((benefit, index) => (
              <FadeIn key={index} direction="up" delay={index * 0.1}>
                <div className="flex items-center gap-4">
                  <CheckCircle2 size={20} className="text-[#997819] flex-shrink-0" />
                  <span className="text-white text-xs md:text-sm font-bold uppercase tracking-wider">
                    {benefit}
                  </span>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn direction="up" delay={0.6}>
            <Link href="/contact-us/" className="block">
              {/* Button: Mobile par padding thodi adjust ki */}
              <button className="w-full flex items-center justify-center gap-3 bg-[#997819] dark:bg-white px-6 py-4 rounded-xl text-white font-black uppercase tracking-[0.1em] text-[10px] md:text-xs hover:scale-[1.02] transition-all">
                <span>Build Your Content Engine Today</span>
                <ArrowRight size={16} />
              </button>
            </Link>
          </FadeIn>
        </div>
      </div>
    </div>
  </div>
</section>
    </section>
  );
};

export default DigitalMarketingPage;
