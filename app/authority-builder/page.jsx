import Image from "next/image";
import React from "react";
import {
  PenTool,
  Video,
  Layers,
  Target,
  CheckCircle2,
  Check,
  Camera,
  Mic,
  Clapperboard,
  Sparkles,
  ArrowRight,
  MessageSquare,
  Lightbulb,
  TrendingUp,
  MousePointerClick,
  MessageCircle,
  BarChart3,
  Users,
  Briefcase,
  UserCheck,
  ShieldCheck,
  Plus,
  Calendar,
} from "lucide-react";

import Link from "next/link";
import FadeIn from "@components/MotionWrapper";

export const metadata = {
  title: "Authority Builders Service | BizGrow Media ",
  description:
    "Build a stronger personal and business presence with BizGrow Media Authority Builder solutions designed for credibility and visibility.",
  alternates: {
    canonical: "https://bizgrowmedia.co.uk/authority-builder/",
  },
};

const CreativeContentPage = () => {
  const contentFeatures = [
    {
      title: "Brand Storytelling",
      desc: "We develop authentic, compelling narratives that connect with your audience and translate your brand values into memorable experiences.",
      icon: <Layers className="w-8 h-8" />,
      bgColor: "bg-orange-100",
      hoverBg: "group-hover:bg-[#B54118]",
    },
    {
      title: "Visual Design",
      desc: (
        <>
          High-impact{" "}
          <Link
            href="/how-digital-marketing-drives-faster-growth-for-businesses/"
            className="text-[#B54118] font-bold underline"
          >
            digital visuals and marketing
          </Link>{" "}
          assets created to strengthen brand consistency and enhance visual
          recognition across platforms.
        </>
      ),
      icon: <PenTool className="w-8 h-8" />,
      bgColor: "bg-blue-100",
      hoverBg: "group-hover:bg-[#B54118]",
    },
    {
      title: "Video & Motion Content",
      desc: (
        <>
          Professionally produced video editing and motion{" "}
          <Link
            href="/will-ai-replace-graphic-designers-in-2026-2/"
            className="text-[#B54418] font-bold"
          >
            graphics designed
          </Link>{" "}
          to increase engagement, communicate value, and build audience trust.
        </>
      ),
      icon: <Video className="w-8 h-8" />,
      bgColor: "bg-purple-100",
      hoverBg: "group-hover:bg-[#B54118]",
    },
    {
      title: "Content Strategy",
      desc: (
        <>
          Insight-led{" "}
          <Link
            href="/what-role-does-creative-content-play-in-seo-performance/"
            className="text-[#B54418] font-bold"
          >
            content
          </Link>{" "}
          frameworks developed using data and audience analysis to drive reach,
          relevance, and sustainable organic growth.
        </>
      ),
      icon: <Target className="w-8 h-8" />,
      bgColor: "bg-green-100",
      hoverBg: "group-hover:bg-[#B54118]",
    },
  ];

  return (
    <section className="relative w-full">
      {/* 1 --- HERO SECTION --- */}
      <div className="relative h-[85vh] md:h-screen w-full">
        <Image
          src="/hero-t.jpg"
          alt="Authority Builder -  BizGrow Media "
          fill
          fetchPriority="high"
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 w-full mx-auto bg-black/70 flex flex-col pt-12 justify-center items-center px-6">
          <FadeIn direction="up" delay={0.2}>
            {/* 🔹 FIX: Wrapper div inside FadeIn to force centering */}
            <div className="w-full flex flex-col items-center">
              <span className="text-[#997819] font-bold tracking-widest uppercase text-sm mb-4 block text-center">
                Authority Builder
              </span>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.4}>
            <div className="w-full flex flex-col items-center">
              <h1 className="text-white text-4xl md:text-6xl text-center font-bold max-w-5xl leading-tight">
                Stop Letting Lesser Brands Take
                <span className="text-[#997819] mx-2 text-4xl md:text-6xl  ">
                  The Attention
                </span>
                You Deserve
              </h1>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.6}>
            <div className="w-full flex flex-col items-center"></div>
          </FadeIn>
        </div>
      </div>

      {/* 🚀 2 NEW SECTION:  PROFESSIONAL CONTENT CREATION (Business Growth Focus) */}
      <section className="py-24 bg-white dark:bg-gray-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-16">
            {/* Left Column: Image/Visual with Floating Elements */}
            <div className="w-full lg:w-1/2 relative">
              <FadeIn direction="right">
                <div className="relative h-[450px] md:h-[600px] w-full rounded-[3.5rem] overflow-hidden shadow-2xl">
                  <Image
                    src="/professional-content.jpg" // Suggestion: High-quality image of a writer or digital designer
                    alt="Measurable Results by BizGrow Media "
                    fill
                    className="object-cover"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                  {/* Floating Metric Card (Business Growth Highlight) */}
                  <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-3xl">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-[#12066a] rounded-full flex items-center justify-center text-white shadow-lg shadow-[#997819]/40">
                        <CheckCircle2 className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-gray-200 text-sm">
                          Authority & Credibility
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>

              {/* Decorative Background Shape */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-orange-500/10 blur-3xl rounded-full -z-10" />
            </div>

            {/* Right Column: Detailed Content */}
            <div className="w-full lg:w-1/2 space-y-8">
              <FadeIn direction="left">
                <span className="text-[#997819] font-black uppercase tracking-[0.3em] text-xs">
                  Measurable Results
                </span>
                <h2 className="text-4xl md:text-5xl font-black text-[#12066a] dark:text-white leading-[1.1] uppercase tracking-tighter mt-4">
                  Your Brand <br />
                  <span className="text-[#997819]">Deserves </span> To Be Seen
                  Differently
                </h2>

                <div className="space-y-6 mt-8">
                  <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed font-medium">
                    The problem is not your expertise. What you need is the
                    visibility, credibility, and authority that make people
                    trust your brand before the first conversation even happens.
                  </p>

                  <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed italic border-l-4 border-[#997819] pl-6">
                    Authority Builder by{" "}
                    <Link href="/" className="text-[#997819] font-bold">
                      BizGrow Media
                    </Link>{" "}
                    helps founders, startups, and growing businesses build a
                    recognised market presence through strategic content,
                    premium media positioning, and professional brand visibility
                    designed to make your business impossible to overlook.
                  </p>
                  <FadeIn direction="up" delay={0.6}>
                    <Link href="/contact-us">
                      <button className="relative px-8 py-4 bg-[#12066a] text-white font-black rounded-2xl overflow-hidden group transition-all duration-300 ">
                        {/* Shine Animation Effect */}
                        <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent via-[#12066a] to-transparent group-hover:animate-shine" />
                        <span className="relative z-10 text-md uppercase tracking-widest">
                          Book Your Strategy Call →
                        </span>
                      </button>
                    </Link>
                  </FadeIn>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* 🚀 3 THE SHIFT: How Authority Changes Brand Perception */}
      <section className="dark:bg-gray-900 py-24 relative overflow-hidden">
        {/* Background Glow Effect - Golden Hue */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#997819]/5 blur-[120px] rounded-full -z-10" />

        <div className="relative py-20 bg-[#12066a] dark:bg-gray-800 backdrop-blur-xl border-2 border-white/5 dark:border-white/10 text-white rounded-[3.5rem] mx-4 md:mx-10 shadow-2xl overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
            <FadeIn direction="up">
              <h2 className="text-4xl md:text-7xl font-black mb-6 tracking-tighter uppercase leading-none">
                The <span className="text-[#997819]">Shift</span>
              </h2>
              <p className="text-lg md:text-xl font-medium text-gray-400 mb-16 max-w-2xl mx-auto">
                How Authority Changes The Way Your Brand Is Perceived
              </p>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
              {/* ❌ BEFORE (THE STRUGGLE) */}
              <FadeIn direction="left" delay={0.2}>
                <div className="h-full p-10 border border-white/10 rounded-[2.5rem] bg-white/5 hover:bg-white/[0.08] transition-all duration-500 group relative overflow-hidden">
                  <div className="absolute -top-10 -left-10 w-32 h-32 bg-red-500/5 blur-3xl rounded-full" />

                  <h3 className="text-3xl font-bold mb-10 text-gray-500 tracking-wide uppercase">
                    Before
                  </h3>

                  <ul className="space-y-6 text-left">
                    {[
                      "Inconsistent online visibility",
                      "Relying heavily on cold outreach for client acquisition",
                      "Your expertise is hidden behind weak positioning",
                      "Content published without structure or long-term strategy",
                      "Your competitors being recognised before you",
                      "Chasing leads instead of focusing on growth",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-4 text-sm md:text-base font-medium text-gray-500 group-hover:text-gray-400 transition-colors"
                      >
                        <div className="flex-shrink-0 w-7 h-7 rounded-full bg-white/5 border border-white/10 text-red-500/50 flex items-center justify-center text-xs font-bold">
                          ✕
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>

              {/* ✓ AFTER (THE AUTHORITY) */}
              <FadeIn direction="right" delay={0.4}>
                <div className="relative h-full p-10 border-2 border-[#997819] rounded-[2.5rem] bg-[#997819]/5 shadow-[0_0_50px_rgba(153,120,25,0.1)] overflow-hidden group">
                  {/* Value Badge */}
                  <div className="absolute -top-0 left-1/2 -translate-x-1/2 bg-[#997819] px-8 py-2 rounded-b-2xl text-[10px] font-black uppercase tracking-[0.3em] shadow-lg text-white">
                    The Authority Standard
                  </div>

                  <h3 className="text-3xl font-black mt-10 mb-10 text-[#997819] uppercase tracking-tight">
                    After
                  </h3>

                  <ul className="space-y-6 text-left">
                    {[
                      "A professional and recognisable brand presence",
                      "Inbound enquiries from better-aligned clients",
                      "Increased trust and market credibility",
                      "Strategic content published consistently every month",
                      "Founder and company authority working together",
                      "An authority-driven media system for long-term growth",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-4 text-sm md:text-base font-bold dark:text-white group-hover:translate-x-2 transition-transform duration-300"
                      >
                        <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#997819] text-white flex items-center justify-center shadow-lg shadow-[#997819]/30">
                          <Check size={14} strokeWidth={4} />
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Subtle Inner Glow */}
                  <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#997819]/10 blur-3xl rounded-full" />
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
      {/* 🏛️ 4 PILLAR ONE: ELITE CORPORATE EDITION */}
      <section className="bg-white dark:bg-gray-800 py-14 md:py-32 relative overflow-hidden">
        {/* Minimalist Watermark */}
        <div className="absolute top-10 left-10 text-[20rem] font-black text-black/[0.02] dark:text-white/[0.01] select-none leading-none -z-10">
          01
        </div>

        <div className="max-w-7xl mx-auto px-6">
          {/* --- Section Header --- */}
          <div className="max-w-4xl mb-24">
            <FadeIn direction="up">
              <div className="flex items-center gap-4 mb-6">
                <span className="w-12 h-[1px] bg-[#997819]" />
                <span className="text-[#997819] font-bold uppercase tracking-[0.5em] text-xs">
                  The Framework
                </span>
              </div>
              <h2 className="text-[#12066a] dark:text-white text-4xl md:text-7xl font-black tracking-tighter uppercase leading-[0.98]">
                Four Pillars. <br />
                <span className="text-[#997819] dark:text-[#997819]/60">
                  One Authority System.
                </span>
              </h2>
            </FadeIn>
          </div>

          {/* --- Content Grid --- */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            {/* Left: Narrative Content */}
            <div className="space-y-12">
              <FadeIn direction="up">
                <div>
                  {/* Upper Label */}
                  <div className="flex items-center gap-4 mb-16 overflow-hidden">
                    <span className="text-[#997819] font-black text-6xl opacity-20">
                      01
                    </span>
                    <div className="h-[1px] w-20 bg-[#997819]/30" />
                    <span className="text-[#997819] font-bold uppercase tracking-[0.5em] text-xs">
                      Pillar One: Production
                    </span>
                  </div>
                  <h3 className="text-[#12066a] dark:text-white text-4xl md:text-6xl font-black uppercase leading-none mb-3">
                    Content <br />{" "}
                    <span className="text-[#997819]">Production</span>
                  </h3>
                  <div className="w-20 h-2 bg-[#12066a] dark:bg-[#997819] mb-3" />
                </div>

                <div className="space-y-6">
                  <p className="text-2xl font-bold text-[#12066a] dark:text-white leading-tight">
                    Professional content starts with professional execution.
                  </p>
                  <p className="text-lg text-gray-500 dark:text-gray-400 font-medium leading-relaxed">
                    Our production environment is designed for founders, brands,
                    and businesses that want high-quality media without the
                    complexity of managing production internally.
                  </p>
                  <p className="text-lg text-gray-500 dark:text-gray-400 font-medium leading-relaxed italic border-l-2 border-gray-200 dark:border-white/10 pl-6">
                    From filming to post-production, every detail is handled
                    with precision to ensure your content reflects the quality
                    and credibility of your brand.
                  </p>
                </div>
              </FadeIn>
            </div>

            {/* Right: Detailed Breakdown (The "This Includes" part) */}
            <div className="bg-gray-50 dark:bg-white/[0.02] p-10 md:p-16 rounded-[3rem] border border-gray-100 dark:border-white/5">
              <FadeIn direction="up" delay={0.2}>
                <h4 className="text-[#12066a] dark:text-white font-black uppercase tracking-widest text-lg mb-10 flex items-center gap-3">
                  This includes{" "}
                  <ArrowRight className="text-[#997819]" size={20} />
                </h4>

                <div className="space-y-10">
                  {[
                    {
                      icon: <Camera size={24} />,
                      text: (
                        <>
                          2–4 professionally managed{" "}
                          <Link
                            href="/studio-production"
                            className="text-[#997819] font-bold"
                          >
                            studio sessions
                          </Link>{" "}
                          each month
                        </>
                      ),
                    },
                    {
                      icon: <Mic size={24} />,
                      text: "Long-form podcast & video production",
                    },
                    {
                      icon: <Clapperboard size={24} />,
                      text: "20–40 edited short-form content clips",
                    },
                    {
                      icon: <Sparkles size={24} />,
                      text: "Full editing, colour grading & audio enhancement",
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-6 group">
                      <div className="mt-1 text-[#997819]">{item.icon}</div>
                      <p className="text-lg font-bold text-gray-700 dark:text-gray-200 leading-snug uppercase tracking-tight">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* 🏛️ 5 PILLAR TWO: MINIMALIST CORPORATE EDITION */}
      <section className="bg-white dark:bg-gray-900 py-14 md:py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          {/* Upper Label */}
          <div className="flex items-center gap-4 mb-16 overflow-hidden">
            <span className="text-[#997819] font-black text-6xl opacity-20">
              02
            </span>
            <div className="h-[1px] w-20 bg-[#997819]/30" />
            <span className="text-[#997819] font-bold uppercase tracking-[0.5em] text-xs">
              Pillar Two: Content
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Left: The Statement */}
            <div>
              <FadeIn direction="up">
                <h2 className="text-[#12066a] dark:text-white text-5xl md:text-7xl font-black leading-[0.85] uppercase tracking-tighter mb-3">
                  Content <br />
                  <span className="text-[#997819] dark:text-[#997819]/60">
                    Engine
                  </span>
                </h2>
                <div className="w-20 h-2 bg-[#12066a] dark:bg-[#997819] mb-3" />

                <div className="max-w-md">
                  <p className="text-xl md:text-2xl font-light leading-relaxed text-gray-500 dark:text-gray-400 mb-8">
                    One studio session creates a scalable content ecosystem
                    designed to keep your brand visible, relevant, and
                    consistently recognised.
                  </p>
                  <div className="w-12 h-1 bg-[#997819]" />
                </div>
              </FadeIn>
            </div>

            {/* Right: The Strategic Breakdown */}
            <div className="flex flex-col justify-center">
              <FadeIn direction="up" delay={0.2}>
                <div className="border-t-2 border-gray-100 dark:border-white/5 pt-12">
                  <p className="text-2xl font-bold text-[#12066a] dark:text-white mb-12 leading-snug">
                    Our{" "}
                    <Link
                      href="/content-engine"
                      className="text-[#997819] font-bold"
                    >
                      Content Engine
                    </Link>{" "}
                    transforms every podcast, interview, or video into a
                    consistent stream of strategic media designed to increase
                    visibility and strengthen authority.
                  </p>

                  {/* Clean List */}
                  <div className="space-y-8">
                    {[
                      "Short-form content for TikTok, Reels & YouTube Shorts",
                      "LinkedIn posts with strategic hooks & captions",
                      "Structured monthly content planning",
                      "Platform optimisation, hashtags & custom thumbnails.",
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center group cursor-default"
                      >
                        <div className="w-2 h-2 rounded-full bg-[#997819] mr-6 group-hover:scale-150 transition-transform" />
                        <span className="text-lg font-medium text-gray-700 dark:text-gray-300 uppercase tracking-tight">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Final Professional Tagline */}
                  <div className="mt-16 p-8 bg-gray-50 dark:bg-white/[0.02] border-l-4 border-[#12066a] dark:border-[#997819]">
                    <p className="text-sm font-bold uppercase tracking-widest text-[#12066a] dark:text-gray-300 italic">
                      Every piece of content is designed to strengthen your
                      market presence while maintaining a premium and
                      professional image
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* 🏛️ 6 PILLAR THREE: ELITE CORPORATE EDITION (CONSISTENT LAYOUT) */}
      <section className="bg-white dark:bg-gray-800 py-14 md:py-32 relative overflow-hidden">
        {/* Minimalist Watermark */}
        <div className="absolute top-10 left-10 text-[20rem] font-black text-black/[0.02] dark:text-white/[0.01] select-none leading-none -z-10">
          03
        </div>

        <div className="max-w-7xl mx-auto px-6">
          {/* --- Content Grid --- */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            {/* Left: Narrative Content (Strategy & Authority System) */}
            <div className="space-y-12">
              <FadeIn direction="up">
                <div>
                  {/* Upper Label */}
                  <div className="flex items-center gap-4 mb-16 overflow-hidden">
                    <span className="text-[#997819] font-black text-6xl opacity-20">
                      03
                    </span>
                    <div className="h-[1px] w-20 bg-[#997819]/30" />
                    <span className="text-[#997819] font-bold uppercase tracking-[0.5em] text-xs">
                      Pillar Three: Strategy
                    </span>
                  </div>

                  <h3 className="text-[#12066a] dark:text-white text-5xl md:text-6xl font-black uppercase leading-none mb-2">
                    Authority <br />{" "}
                    <span className="text-[#997819]">System</span>
                  </h3>
                  <div className="w-20 h-2 bg-[#12066a] dark:bg-[#997819] mb-2" />
                </div>

                <div className="space-y-6">
                  <p className="text-2xl font-bold text-[#12066a] dark:text-white leading-tight">
                    Anyone can be visible. Very few brands become trusted
                    authorities.
                  </p>
                  <p className="text-lg text-gray-500 dark:text-gray-400 font-medium leading-relaxed">
                    Businesses with strong authority are perceived differently.
                    They appear more professional, more established, and more
                    reliable before conversations even begin.
                  </p>
                  <p className="text-lg font-bold text-[#12066a] dark:text-[#997819] italic border-l-2 border-[#997819] pl-6">
                    The goal is simple: to position your business as a trusted
                    and respected industry name.
                  </p>
                </div>
              </FadeIn>
            </div>

            {/* Right: Detailed Breakdown (BizGrow Media helps...) */}
            <div className="bg-gray-50 dark:bg-white/[0.02] p-10 md:p-16 rounded-[3rem] border border-gray-100 dark:border-white/5">
              <FadeIn direction="up" delay={0.2}>
                <h4 className="text-[#12066a] dark:text-white font-black uppercase tracking-widest text-lg mb-10 flex items-center gap-3">
                  BizGrow Media helps strengthen credibility through:{" "}
                  <ArrowRight className="text-[#997819]" size={20} />
                </h4>

                <div className="space-y-10">
                  {[
                    {
                      icon: <Target size={24} />,
                      text: "Personal brand positioning & niche clarity",
                    },
                    {
                      icon: <MessageSquare size={24} />,
                      text: "Strategic messaging frameworks",
                    },
                    {
                      icon: <Lightbulb size={24} />,
                      text: "Thought leadership themes & content direction",
                    },
                    {
                      icon: <TrendingUp size={24} />,
                      text: "Topic planning for future recording sessions",
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-6 group">
                      <div className="mt-1 text-[#997819]">{item.icon}</div>
                      <p className="text-lg font-bold text-gray-700 dark:text-gray-200 leading-snug uppercase tracking-tight">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* 🏛️ 7 PILLAR FOUR: ELITE CORPORATE EDITION (CONSISTENT LAYOUT) */}
      <section className="bg-white dark:bg-gray-900 py-14 md:py-32 relative overflow-hidden">
        {/* Minimalist Watermark */}
        <div className="absolute top-10 left-10 text-[20rem] font-black text-black/[0.02] dark:text-white/[0.01] select-none leading-none -z-10">
          04
        </div>

        <div className="max-w-7xl mx-auto px-6">
          {/* --- Content Grid --- */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            {/* Left: Narrative Content (Growth & Growth Engine) */}
            <div className="space-y-12">
              <FadeIn direction="up">
                <div>
                  {/* Upper Label */}
                  <div className="flex items-center gap-4 mb-16 overflow-hidden">
                    <span className="text-[#997819] font-black text-6xl opacity-20">
                      04
                    </span>
                    <div className="h-[1px] w-20 bg-[#997819]/30" />
                    <span className="text-[#997819] font-bold uppercase tracking-[0.5em] text-xs">
                      Pillar Four: Growth
                    </span>
                  </div>

                  <h4 className="text-[#12066a] dark:text-white text-5xl md:text-6xl font-black uppercase leading-none mb-2">
                    Growth <br /> <span className="text-[#997819]">Engine</span>
                  </h4>
                  <div className="w-20 h-2 bg-[#12066a] dark:bg-[#997819] mb-2" />
                </div>

                <div className="space-y-6">
                  <p className="text-2xl font-bold text-[#12066a] dark:text-white leading-tight">
                    The most respected brands are not always the loudest. They
                    are the ones people consistently recognise, trust, and
                    remember.
                  </p>
                  <p className="text-lg text-gray-500 dark:text-gray-400 font-medium leading-relaxed">
                    Our{" "}
                    <Link
                      href="/growth-engine"
                      className="text-[#997819] font-bold"
                    >
                      Growth Engine
                    </Link>{" "}
                    is designed to ensure your content does more than generate
                    visibility; it strengthens authority, attracts inbound
                    opportunities, and supports long-term business growth.
                  </p>
                  <p className="text-lg font-bold text-[#12066a] dark:text-[#997819] italic border-l-2 border-[#997819] pl-6">
                    As your authority grows, your business becomes easier to
                    trust, easier to recognise, and harder to ignore.
                  </p>
                </div>
              </FadeIn>
            </div>

            {/* Right: Detailed Breakdown (This includes...) */}
            <div className="bg-gray-50 dark:bg-white/[0.02] p-10 md:p-16 rounded-[3rem] border border-gray-100 dark:border-white/5">
              <FadeIn direction="up" delay={0.2}>
                <h5 className="text-[#12066a] dark:text-white font-black uppercase tracking-widest text-lg mb-10 flex items-center gap-3">
                  This includes:{" "}
                  <ArrowRight className="text-[#997819]" size={20} />
                </h5>

                <div className="space-y-10">
                  {[
                    {
                      icon: <TrendingUp size={24} />,
                      text: "LinkedIn & Instagram authority positioning",
                    },
                    {
                      icon: <MousePointerClick size={24} />,
                      text: "Lead-focused call-to-action strategy",
                    },
                    {
                      icon: <MessageCircle size={24} />,
                      text: "DM-to-conversion funnel direction",
                    },
                    {
                      icon: <BarChart3 size={24} />,
                      text: "Performance tracking & monthly growth reviews",
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-6 group">
                      <div className="mt-1 text-[#997819]">{item.icon}</div>
                      <p className="text-lg md:text-xl font-bold text-gray-700 dark:text-gray-200 leading-snug uppercase tracking-tight md:tracking-normal break-words hyphens-auto">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* 🎯 8 WHO THIS IS FOR: AUTHORITY TARGET SECTION */}
      <section className="bg-white dark:bg-gray-800 py-14 md:py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          {/* --- Header: Different from Pillars --- */}
          <div className="text-center max-w-4xl mx-auto mb-20">
            <FadeIn direction="up">
              <span className="text-[#997819] font-bold uppercase tracking-[0.4em] text-xs mb-6 block">
                Strategic Alignment
              </span>
              <h2 className="text-[#12066a] dark:text-white text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-8">
                Who This Is For
              </h2>
              <p className="text-xl md:text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6 italic leading-tight">
                Built for businesses that want more than just visibility.
              </p>
              <p className="text-lg text-gray-500 dark:text-gray-400 font-medium leading-relaxed max-w-3xl mx-auto">
                This is not built for vanity metrics or temporary attention. It
                is designed for serious business owners who want credible
                visibility, stronger market positioning, and authority that
                converts into real business opportunities.
              </p>
            </FadeIn>
          </div>

          {/* --- Target Audience Grid --- */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 1. Coaches & Consultants */}
            <FadeIn direction="up" delay={0.1}>
              <div className="group h-full p-10 bg-gray-50 dark:bg-white/[0.02] border border-gray-100 dark:border-white/5 rounded-[2.5rem] hover:border-[#997819] transition-all duration-500">
                <div className="flex items-center gap-5 mb-8">
                  <div className="w-14 h-14 bg-white dark:bg-[#12066a] rounded-2xl flex items-center justify-center shadow-lg text-[#997819] dark:text-white">
                    <Users size={28} />
                  </div>
                  <h3 className="text-2xl font-black uppercase text-[#12066a] dark:text-white">
                    Coaches & <br /> Consultants
                  </h3>
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-400 font-medium leading-relaxed border-l-2 border-[#997819]/30 pl-6">
                  Build a respected personal brand that positions you as the
                  authority clients confidently choose within your industry.
                </p>
              </div>
            </FadeIn>

            {/* 2. Service-Based Businesses */}
            <FadeIn direction="up" delay={0.2}>
              <div className="group h-full p-10 bg-gray-50 dark:bg-white/[0.02] border border-gray-100 dark:border-white/5 rounded-[2.5rem] hover:border-[#997819] transition-all duration-500">
                <div className="flex items-center gap-5 mb-8">
                  <div className="w-14 h-14 bg-white dark:bg-[#12066a] rounded-2xl flex items-center justify-center shadow-lg text-[#997819] dark:text-white">
                    <Briefcase size={28} />
                  </div>
                  <h3 className="text-2xl font-black uppercase text-[#12066a] dark:text-white">
                    Service-Based <br /> Businesses
                  </h3>
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-400 font-medium leading-relaxed border-l-2 border-[#997819]/30 pl-6">
                  Create the kind of market presence that makes your business
                  instantly recognisable, trusted, and difficult to overlook.
                </p>
              </div>
            </FadeIn>

            {/* 3. Founders & CEOs */}
            <FadeIn direction="up" delay={0.3}>
              <div className="group h-full p-10 bg-gray-50 dark:bg-white/[0.02] border border-gray-100 dark:border-white/5 rounded-[2.5rem] hover:border-[#997819] transition-all duration-500">
                <div className="flex items-center gap-5 mb-8">
                  <div className="w-14 h-14 bg-white dark:bg-[#12066a] rounded-2xl flex items-center justify-center shadow-lg text-[#997819] dark:text-white">
                    <UserCheck size={28} />
                  </div>
                  <h3 className="text-2xl font-black uppercase text-[#12066a] dark:text-white">
                    Founders & <br /> CEOs
                  </h3>
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-400 font-medium leading-relaxed border-l-2 border-[#997819]/30 pl-6">
                  Develop a credible public profile that attracts clients,
                  strategic partnerships, media opportunities, and long-term
                  business growth.
                </p>
              </div>
            </FadeIn>

            {/* 4. Agencies & Industry Experts */}
            <FadeIn direction="up" delay={0.4}>
              <div className="group h-full p-10 bg-gray-50 dark:bg-white/[0.02] border border-gray-100 dark:border-white/5 rounded-[2.5rem] hover:border-[#997819] transition-all duration-500">
                <div className="flex items-center gap-5 mb-8">
                  <div className="w-14 h-14 bg-white dark:bg-[#12066a] rounded-2xl flex items-center justify-center shadow-lg text-[#997819] dark:text-white">
                    <ShieldCheck size={28} />
                  </div>
                  <h3 className="text-2xl font-black uppercase text-[#12066a] dark:text-white">
                    Agencies & <br /> Industry Experts
                  </h3>
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-400 font-medium leading-relaxed border-l-2 border-[#997819]/30 pl-6">
                  Elevate your positioning through authority-driven visibility
                  designed to attract premium clients, stronger opportunities,
                  and higher-value growth.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      {/* 🏛️ 9 THE BIZGROW ECOSYSTEM: ULTRA-STAGGERED EDITION */}
      <section className="bg-white dark:bg-gray-900 py-14 md:py-40 relative transition-colors duration-500 overflow-hidden">
        {/* Decorative Branding Background Element */}
        <div className="absolute top-20 right-[-5%] text-[20rem] font-black text-[#12066a]/[0.02] dark:text-white/[0.02] select-none pointer-events-none tracking-tighter">
          GROW
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* --- Header Section: Split Narrative --- */}
          <div className="flex flex-col lg:flex-row gap-16 mb-40 items-start">
            <div className="lg:w-2/3">
              <FadeIn direction="up">
                <div className="flex items-center gap-4 mb-8">
                  <span className="w-12 h-[2px] bg-[#997819]" />
                  <span className="text-[#997819] font-bold uppercase tracking-[0.5em] text-[10px]">
                    Strategic Evolution
                  </span>
                </div>
                <h2 className="text-[#12066a] dark:text-white text-4xl md:text-7xl  font-black uppercase tracking-[ -0.05em] leading-[0.8] mb-0">
                  Bizgrow Media <br />{" "}
                  <span className="dark:text-[#997819]">Ecosystem</span>
                </h2>
              </FadeIn>
            </div>
            <div className="lg:w-1/3 lg:pt-24">
              <FadeIn direction="left" delay={0.2}>
                <p className="text-[#12066a]/60 dark:text-white/60 text-lg font-medium leading-relaxed italic border-l-4 border-[#997819] pl-8">
                  "Where Authority Fits Into Your Growth Journey"
                </p>
              </FadeIn>
            </div>
          </div>

          {/* --- Unique Staggered Stages --- */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { step: "01", title: "Studio Hire", align: "mt-0" },
              { step: "02", title: "Launch Package", align: "mt-12" },
              { step: "03", title: "Content Engine", align: "mt-0" },
              { step: "04", title: "Authority Builder", align: "mt-12" },
              { step: "05", title: "Media Partner", align: "mt-0" },
            ].map((item, index) => (
              <FadeIn key={index} direction="up" delay={index * 0.1}>
                <div
                  className={`group relative p-8 h-[350px] flex flex-col justify-between border border-gray-100 dark:border-white/5 bg-[#12066a] dark:bg-white/[0.02] hover:bg-[#12066a] dark:hover:bg-[#997819] transition-all duration-700 ease-in-out ${item.align} rounded-2xl overflow-hidden`}
                >
                  {/* Top Info */}
                  <div className="flex justify-between items-start">
                    <span className="text-[#997819] group-hover:text-white/50 font-black text-2xl transition-colors">
                      {item.step}
                    </span>
                    <Plus className="text-gray-300 dark:text-white/20 group-hover:rotate-90 group-hover:text-white transition-all duration-500" />
                  </div>

                  {/* Title & Interaction */}
                  <div>
                    <h3 className="text-white dark:text-[#997819] group-hover:text-white text-3xl font-black uppercase tracking-tighter leading-none mb-6 transition-colors">
                      {item.title}
                    </h3>
                    <div className="h-1 w-0 group-hover:w-full bg-[#997819] dark:bg-white transition-all duration-700" />
                    <p className="mt-4 text-xs font-bold uppercase tracking-widest text-[#12066a]/40 dark:text-white/20 group-hover:text-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500">
                      Phase Breakdown →
                    </p>
                  </div>

                  {/* Hover Background Number */}
                  <span className="absolute -bottom-10 -right-10 text-[12rem] font-black text-[#12066a]/[0.03] dark:text-white/[0.03] group-hover:text-white/10 transition-all pointer-events-none">
                    {item.step}
                  </span>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* --- Narrative & High-Impact CTA --- */}
          <div className="mt-24 flex flex-col items-center text-center">
            <FadeIn direction="up">
              <p className="text-2xl md:text-4xl max-w-5xl mx-auto text-[#12066a] dark:text-white/80 font-black uppercase tracking-tighter mb-16 leading-none">
                Each stage is designed to strengthen{" "}
                <span className="text-[#997819]">
                  visibility, credibility, and long-term brand growth.
                </span>
                through strategic media and authority
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 🚀 CTA Section: Refined Spacing & Rounded Design */}
      <section className="relative w-full py-20 bg-white dark:bg-gray-900 overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
          <div
            className="relative py-24 md:py-32 rounded-[4rem] overflow-hidden text-white text-center shadow-[0_40px_100px_-15px_rgba(0,0,0,0.3)] group"
            style={{
              backgroundImage: "url('/team-work.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundAttachment: "fixed", // Parallax Effect
            }}
          >
            {/* 🔹 Dynamic Deep Navy & Rust Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#000B25]/95 via-[#000B25]/80 to-[#B54118]/40 z-0 transition-opacity duration-700 group-hover:opacity-90"></div>

            {/* 🔹 Refined Content Layer */}
            <div className="relative z-20 max-w-4xl mx-auto px-8">
              <FadeIn direction="up">
                <div className="flex justify-center items-center gap-4 mb-8">
                  <span className="w-8 h-[1px] bg-[#997819]"></span>
                  <span className="text-[#997819] font-black tracking-[0.5em] uppercase text-[10px] md:text-xs">
                    Start Your Journey
                  </span>
                  <span className="w-8 h-[1px] bg-[#997819]"></span>
                </div>

                <h2 className="text-4xl md:text-6xl font-black mb-8 leading-[0.9] tracking-tighter uppercase">
                  Ready to become the <br />
                  <span className="text-[#997819] italic font-serif">
                    Recognised Authority
                  </span>{" "}
                  <br />
                  your industry remembers?
                </h2>
              </FadeIn>

              <FadeIn direction="up" delay={0.2}>
                <p className="mx-auto mb-12 text-lg md:text-xl text-white/70 leading-relaxed font-light italic max-w-2xl">
                  We work closely with each client to understand what they need.
                  Our solutions are designed to establish your legacy and get
                  real results in the UK market.
                </p>
              </FadeIn>

              <FadeIn direction="up" delay={0.4}>
                <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                  <Link href="/contact-us">
                    <button className="group relative px-3 md:px-12 py-5 bg-[#12066a] text-white font-black uppercase tracking-widest text-[11px] rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-[0_20px_50px_rgba(181,65,24,0.4)]">
                      <span className="relative z-10 flex items-center gap-3">
                        Book your strategy call <ArrowRight size={16} />
                      </span>
                      <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 opacity-10" />
                    </button>
                  </Link>
                </div>
              </FadeIn>
            </div>

            {/* 🔹 Decorative Elements */}
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#997819]/20 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/5 blur-[120px] rounded-full pointer-events-none"></div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default CreativeContentPage;
