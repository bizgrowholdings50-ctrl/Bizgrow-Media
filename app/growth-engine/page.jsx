import React from "react";
import {
  Target,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  TrendingUp,
  ArrowUpRight,
  Zap,
  ArrowDown,
} from "lucide-react";
import FadeIn from "@components/MotionWrapper";
import Link from "next/link";
import Image from "next/image";
import StructuredData from "@components/StructuredData";
import { growthEngineSchema } from "@lib/jsonSchemas";

export const metadata = {
  title: "Growth Engine Service | BizGrow Media ",
  description:
    "Aiming to generate more leads and revenue? BizGrow Media Growth Engine helps brands grow through strategic media.",
};

const GrowthEnginePage = () => {
  return (
    <main className="bg-white overflow-hidden">
      <StructuredData schema={growthEngineSchema} />
      {/* 1 --- HERO SECTION --- */}
      <div className="relative h-[85vh] md:h-screen w-full">
        <Image
          src="/growth-hero.jpg"
          alt="Growth Engine - BizGrow Media"
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
                Growth Engine
              </span>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.4}>
            <div className="w-full flex flex-col items-center">
              <span className="text-white text-3xl md:text-7xl text-center font-bold max-w-5xl leading-tight">
                Business Growth Feels Different When
                <span className="text-[#997819] mx-2 ">
                  The Right System
                </span>
                Is Driving It
              </span>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.6}>
            <div className="w-full flex flex-col items-center"></div>
          </FadeIn>
        </div>
      </div>
      {/* 🚀\ PREMIUM SPLIT (Inspired by Content Engine) */}
      <section className="relative dark:bg-gray-800 py-14 lg:py-32 transition-colors duration-500 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
            {/* --- Left Column: Content --- */}
            <div className="lg:col-span-7">
              <FadeIn direction="right">
                <div className="flex items-center gap-3 mb-8">
                  <Sparkles size={18} className="text-[#997819]" />
                  <span className="text-[#997819] font-bold uppercase tracking-[0.4em] text-[10px]">
                    The Growth Engine
                  </span>
                </div>

                <h1 className="text-[#12066a] dark:text-white text-3xl md:text-5xl font-black uppercase tracking-tighter leading-[0.98] mb-10">
                  Growth Works <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#997819] to-[#997819]/60">
                    Better
                  </span>{" "}
                  When Everything Moves Together
                </h1>

                <div className="space-y-8 max-w-2xl">
                  <p className="text-xl md:text-2xl font-bold text-[#12066a] dark:text-white leading-tight italic border-l-4 border-[#997819] pl-8">
                    Your business does not rely on inconsistent lead flow,
                    unpredictable opportunities, or temporary growth spikes to
                    keep moving forward.
                  </p>

                  <div className="space-y-6 text-gray-500 dark:text-white/60 text-lg leading-relaxed">
                    <p>
                      <Link href="/" className="text-[#997819] font-bold mr-1">
                        BizGrow Media
                      </Link>
                      provides strategic growth-focused businesses generate
                      qualified leads, strengthen conversions, and build
                      long-term revenue momentum through scalable growth systems
                      and audience-focused visibility.
                    </p>

                    <p>
                      Long-term business growth becomes significantly easier
                      when the right systems consistently operate behind your
                      brand.
                    </p>
                    <p>
                      Growth never stays consistent without the right systems
                      behind it.
                    </p>
                  </div>

                  {/* Premium CTA */}
                  <div className="pt-2">
                    <Link href="/contact-us">
                      <button className="group relative flex items-center gap-8 bg-[#12066a] dark:bg-[#997819] dark:text-white px-10 py-5 rounded-full text-white dark:text-[#12066a] font-black uppercase tracking-[0.2em] text-[10px] transition-all shadow-xl">
                        Schedule Your Growth Call
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
                  <div className="relative z-10 aspect-[4/5] rounded-[4rem] overflow-hidden border-[12px] border-gray-100 dark:border-gray-800 shadow-2xl bg-slate-200">
                    {/* Placeholder for your Growth Image */}
                    <img
                      src="/growth-system-mockup.jpg"
                      alt="Growth Engine Strategic System - BizGrow Media"
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                    />
                  </div>
                  {/* Decorative Elements */}
                  <div className="absolute -top-10 -right-10 w-40 h-40 border-2 border-[#997819]/20 rounded-full animate-spin-slow pointer-events-none z-0" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[115%] h-[90%] bg-[#12066a]/5 dark:bg-[#997819]/5 rounded-[5rem] -rotate-6 -z-10" />
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* 🏛️ . THE FOUNDATION: SMARTER GROWTH */}
      <section className="bg-gray-50 dark:bg-gray-900 py-14 md:py-40 transition-colors duration-500 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-start mb-20 gap-10">
            <div className="lg:w-2/3">
              <div className="flex items-center gap-4 mb-8">
                <span className="w-12 h-[2px] bg-[#997819]" />
                <span className="text-[#997819] font-bold uppercase tracking-[0.5em] text-[10px]">
                  The Foundation Behind
                </span>
              </div>
              <h2 className="text-[#12066a] dark:text-white text-3xl md:text-6xl font-black uppercase tracking-tighter leading-[0.98]">
                Smarter Business <br />
                <span className="text-[#997819]">Growth</span> Systems
              </h2>
            </div>
            <div className="lg:w-1/2 pt-0 lg:pt-10">
              <p className="text-gray-500 dark:text-white/40 text-lg font-medium leading-relaxed italic border-l-4 border-[#997819] pl-8">
                Strategic systems built to ensure your business doesn't just
                grow, but scales with predictability and <Link href="/authority-builder/" className="text-[#997819] font-bold">
                  authority
                </Link>.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "More Qualified Leads | Stronger Revenue Growth.",
                icon: <Target />,
                desc: <>Our Growth Engine is designed to help businesses generate high-quality leads through strategic visibility, <Link href="/content-engine/" className="text-[#997819] font-bold">
                  audience-focused content
                </Link>, and systems built to turn attention into real business opportunities and long-term revenue growth.</>,
              },
              {
                title: "Stronger Reputation | Greater Customer Trust.",
                icon: <ShieldCheck />,
                desc: "People trust businesses they recognise and hear positive things about consistently. We help strengthen your reputation through credible brand positioning, stronger customer perception, and trust-focused visibility that supports better conversions.",
              },
              {
                title: "Bring Customers Back And Increase Retention.",
                icon: <TrendingUp />,
                desc: "Growth becomes stronger when existing customers continue choosing your business. Our systems help businesses strengthen customer relationships through strategic follow-ups, audience engagement, and retention-focused communication designed to increase repeat business and long-term customer value.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group relative bg-white dark:bg-white/[0.02] p-10 rounded-[3.5rem] border border-transparent hover:border-[#997819]/30 transition-all duration-700 shadow-sm hover:shadow-2xl"
              >
                <div className="w-16 h-16 bg-[#12066a] dark:bg-[#997819] dark:text-white rounded-2xl flex items-center justify-center text-white dark:text-[#12066a] mb-10 group-hover:rotate-6 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-[#12066a] dark:text-white text-2xl font-black uppercase tracking-tight mb-6 leading-none">
                  {service.title}
                </h3>
                <p className="text-gray-500 dark:text-white/60 text-sm leading-relaxed italic">
                  {service.desc}
                </p>
                <div className="mt-10 pt-6 border-t border-gray-100 dark:border-white/5 flex justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <ArrowUpRight className="text-[#997819]" size={24} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔄 THE STRATEGIC DIFFERENCE: COMPARISON SECTION */}
      <section className="bg-white dark:bg-gray-800 py-14 md:py-32 transition-colors duration-500 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-24">
            <FadeIn direction="up">
              <div className="flex items-center justify-center gap-3 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#997819] animate-pulse" />
                <span className="text-[#997819] font-black uppercase tracking-[0.4em] text-[10px]">
                  The Strategic Shift
                </span>
              </div>
              <h2 className="text-[#12066a] dark:text-white text-3xl md:text-6xl font-black uppercase tracking-tighter leading-[0.98]">
                The Difference Between <br  className="hidden md:block"/>
                <span className="text-[#997819]">
                  Temporary Growth
                </span> And <br className="hidden md:block"/>
                Long-Term Stability
              </h2>
            </FadeIn>
          </div>

          {/* Comparison Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            {/* ⚠️ Left Column: Temporary Growth */}
            <FadeIn direction="right">
              <div className="h-full p-12 md:p-16 rounded-[4rem] bg-gray-50 dark:bg-white/[0.02] border border-gray-100 dark:border-white/5 relative overflow-hidden group">
                <div className="relative z-10">
                  <h3 className="text-[#12066a] dark:text-white/40 text-3xl font-black uppercase tracking-tighter mb-12 italic">
                    Temporary Growth
                  </h3>
                  <ul className="space-y-6">
                    {[
                      "Inconsistent lead flow",
                      "Unpredictable business opportunities",
                      "Weak follow-up systems",
                      "Low customer retention",
                      "Growth that depends on short-term spikes",
                      "Revenue momentum that becomes difficult to maintain",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-4 text-gray-600 dark:text-white/30 font-medium text-lg leading-tight"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#997819] dark:bg-white/30 mt-2.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Subtle background icon */}
                <ArrowDown className="absolute -bottom-10 -right-10 text-gray-100 dark:text-white/[0.01] w-64 h-64 -rotate-45" />
              </div>
            </FadeIn>

            {/* ✅ Right Column: Long-Term Stability (The Solution) */}
            <FadeIn direction="left">
              <div className="h-full p-12 md:p-16 rounded-[4rem] bg-[#12066a] dark:bg-gray-900 border border-[#997819]/30 relative overflow-hidden group shadow-2xl shadow-[#12066a]/40">
                {/* Top Decorative Sparkle */}
                <div className="absolute top-10 right-10">
                  <Sparkles
                    className="text-[#997819] animate-pulse"
                    size={32}
                  />
                </div>

                <div className="relative z-10">
                  <h3 className="text-[#997819] text-3xl font-black uppercase tracking-tighter mb-12">
                    Long-Term Stability
                  </h3>
                  <ul className="space-y-6">
                    {[
                      "Structured lead generation systems",
                      "Stronger conversion pathways",
                      "Better customer retention",
                      "Consistent business momentum",
                      "Scalable growth infrastructure",
                      "Sustainable long-term revenue growth",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-5 text-white font-bold text-xl md:text-2xl leading-tight group-hover:translate-x-2 transition-transform duration-500"
                      >
                        <CheckCircle2
                          className="text-[#997819] w-6 h-6 mt-1 flex-shrink-0"
                          strokeWidth={3}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Glow Effect */}
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#997819]/10 to-transparent pointer-events-none" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      {/* 🎯 WHEN GROWTH STARTS MAKING SENSE: REFINED CENTERED LAYOUT */}
      <section className="bg-[#f8f9fa] dark:bg-gray-900 py-14 lg:py-32 transition-colors duration-500 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          {/* --- Top Section: Compact Heading & Lead Text --- */}
          <div className="text-center max-w-5xl mx-auto mb-20">
            <FadeIn direction="up">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-8 h-[1px] bg-[#997819]" />
                <span className="text-[#997819] font-bold uppercase tracking-[0.4em] text-[10px]">
                  Strategic Direction
                </span>
                <div className="w-8 h-[1px] bg-[#997819]" />
              </div>

              <h2 className="text-[#12066a] dark:text-white text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.98] md:mb-10">
                When Growth <br />
                Finally Starts <br />
                <span className="text-[#997819]">Making Sense</span>
              </h2>

              <div className="max-w-3xl mx-auto space-y-6">
                <p className="text-gray-500 dark:text-white/40 text-lg md:text-xl font-medium leading-relaxed italic border-t border-[#997819]/20 pt-8">
                  Sometimes businesses stay busy online, but the growth still
                  feels inconsistent. You get attention for a while, then things
                  slow down again, and it becomes difficult to build real
                  momentum.Growth Engine helps bring more direction to that
                  process by helping your business attract the right people,
                  create stronger engagement, and turn visibility into better
                  opportunities.
                </p>
              </div>
            </FadeIn>
          </div>

          {/* --- Bottom Section: Strategy Cards Grid --- */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Lead Generation Strategy",
                desc: "We help your business attract people who are genuinely interested in what you offer, not just traffic, but higher-quality enquiries with stronger potential.",
              },
              {
                title: "Campaign Planning",
                desc: "Every campaign is planned with purpose, helping your brand create attention that feels more aligned, strategic, and commercially valuable.",
              },
              {
                title: "Funnel Direction",
                desc: "We simplify the customer journey so potential clients move from interest to enquiry more naturally and with greater confidence.",
              },
              {
                title: "Conversion-Focused Content",
                desc: "Our messaging is designed to make your value clearer, strengthen trust, and encourage people to take meaningful action.",
              },
              {
                title: "Performance Review",
                desc: "We continuously refine growth activity by understanding audience response, improving direction, and keeping your business growth more focused and intentional.",
              },
            ].map((item, index) => (
              <FadeIn key={index} direction="up" delay={index * 0.1}>
                <div className="h-full group relative bg-white dark:bg-white/[0.02] p-8 md:p-10 rounded-[3rem] border border-gray-100 dark:border-white/5 hover:border-[#997819]/30 transition-all duration-700 shadow-sm hover:shadow-2xl flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-6 mb-8">
                      <span className="text-4xl font-black text-gray-100 dark:text-white/5 italic">
                        0{index + 1}
                      </span>
                      <div className="w-10 h-[1px] bg-[#997819]/30 group-hover:w-20 transition-all duration-700" />
                    </div>

                    <h3 className="text-[#12066a] dark:text-white text-xl md:text-2xl font-black uppercase tracking-tight leading-tight mb-6 group-hover:text-[#997819] transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-gray-500 dark:text-white/50 text-base leading-relaxed italic">
                      {item.desc}
                    </p>
                  </div>

                  {/* Decorative hover line */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-[#997819] group-hover:w-[60%] transition-all duration-700 rounded-full" />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 🛣️ GROWTH ENGINE ROADMAP SECTION */}
      <section className="bg-white dark:bg-gray-800 py-14 lg:py-32 transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-6">
          {/* --- Header Section --- */}
          <div className="text-center max-w-4xl mx-auto mb-20">
            <FadeIn direction="up">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-8 h-[1px] bg-[#997819]" />
                <span className="text-[#997819] font-bold uppercase tracking-[0.4em] text-[10px]">
                  The Strategy
                </span>
                <div className="w-8 h-[1px] bg-[#997819]" />
              </div>

              <h2 className="text-[#12066a] dark:text-white text-3xl md:text-7xl font-black uppercase tracking-tighter leading-[0.98] mb-10">
                Growth Engine <br />
                <span className="text-[#997819]">Roadmap</span>
              </h2>

              <p className="text-gray-500 dark:text-white/40 text-lg md:text-xl font-medium leading-relaxed italic max-w-2xl mx-auto">
                Real <Link href="/studio-production/" className="text-[#997819] font-bold">
                  business growth
                </Link>{" "}
                happens step by step. Growth Engine is
                designed to guide your business through every stage with
                stronger direction, better momentum, and more meaningful
                opportunities.
              </p>
            </FadeIn>
          </div>

          {/* --- Roadmap Content --- */}
          <div className="relative">
            {/* Central Vertical Line */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-gray-100 dark:via-white/5 to-transparent" />

            <div className="space-y-12">
              {[
                "Foundation & Clarity",
                "Brand Positioning",
                "Audience Visibility",
                "Trust & Engagement",
                "Lead Generation",
                "Conversion Momentum",
                "Business Expansion",
                "Long-Term Scale",
              ].map((step, index) => {
                const isEven = index % 2 === 0;
                return (
                  <FadeIn
                    key={index}
                    direction={isEven ? "right" : "left"}
                    delay={index * 0.1}
                  >
                    <div
                      className={`relative flex items-center justify-center w-full`}
                    >
                      {/* Side Content */}
                      <div
                        className={`w-full flex ${isEven ? "justify-start pr-12 lg:pr-32" : "justify-end pl-12 lg:pl-32"}`}
                      >
                        <div className="bg-white dark:bg-white/[0.02] border border-gray-100 dark:border-white/5 p-6 md:p-8 rounded-[2.5rem] shadow-sm hover:shadow-xl hover:border-[#997819]/30 transition-all duration-700 w-full max-w-md group">
                          <div className="flex items-center gap-4">
                            <span className="text-[#997819] font-black italic text-xl">
                              0{index + 1}
                            </span>
                            <h3 className="text-[#12066a] dark:text-white text-lg md:text-xl font-black uppercase tracking-tight group-hover:text-[#997819] transition-colors">
                              {step}
                            </h3>
                          </div>
                        </div>
                      </div>

                      {/* Central Connector Circle */}
                      <div className="absolute left-1/2 md:block hidden -translate-x-1/2 w-10 h-10 rounded-full bg-[#f8f9fa] dark:bg-gray-800 border-4 border-white dark:border-gray-700 flex items-center justify-center z-10 shadow-lg">
                        <div className="w-2 h-2 rounded-full bg-[#997819] group-hover:scale-150 transition-transform duration-500" />
                      </div>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      {/* 🚀 CTA Section: Refined Spacing & Rounded Design */}
      <section className="relative w-full py-20 bg-white dark:bg-gray-900 overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
          <div
            className="relative py-24 md:py-32 rounded-[4rem] overflow-hidden text-white text-center shadow-[0_40px_100px_-15px_rgba(0,0,0,0.3)] group"
            style={{
              backgroundImage: "url('/grth-cta.jpg')",
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
                  Sometimes Growth <br />
                  <span
                    className="text-[#997819] italic font-serif"
                    
                  >
                    Just Needs
                  </span>{" "}
                  <br />
                  The Right Direction
                </h2>
              </FadeIn>

              <FadeIn direction="up" delay={0.2}>
                <p className="mx-auto mb-12 text-lg md:text-xl text-white/70 leading-relaxed font-light italic max-w-2xl">
                  From qualified leads to stronger revenue opportunities,
                  BizGrow Media Growth Engine helps businesses create clearer
                  direction, better visibility, and more consistent momentum.
                </p>
              </FadeIn>

              <FadeIn direction="up" delay={0.4}>
                <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                  <Link href="/contact-us">
                    <button className="group relative px-12 py-5 bg-[#12066a] text-white font-black uppercase tracking-widest text-[11px] rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-[0_20px_50px_rgba(181,65,24,0.4)]">
                      <span className="relative z-10 flex items-center gap-3">
                        Start Your Growth Journey <ArrowRight size={16} />
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
    </main>
  );
};

export default GrowthEnginePage;
