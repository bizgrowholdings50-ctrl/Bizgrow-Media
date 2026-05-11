import Image from "next/image";
import React from "react";
import {
  Video,
  Camera,
  Mic,
  Clapperboard,
  Sparkles,
  ArrowRight,
  Target,
  Check,
  Play,
  CheckCircle2,
  Users,
  Monitor,
  Radio,
  FileVideo,
} from "lucide-react";
import Link from "next/link";
import FadeIn from "@components/MotionWrapper";

export const metadata = {
  title: "Studio & Production Service | BizGrow Media ",
  description:
    "Bring your ideas to life with BizGrow Media Studio & Production services for podcasts, interviews, and video content.",
  alternates: { canonical: "https://bizgrowmedia.co.uk/studio-production" },
};

const StudioProductionPage = () => {
  return (
    <section className="relative w-full bg-white dark:bg-black">
      {/* 1 --- HERO SECTION --- */}
      <div className="relative h-[85vh] md:h-screen w-full">
        <Image
          src="/studio-hero.jpg"
          alt="Studio & Production - BizGrow Media"
          fill
          fetchPriority="high"
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 w-full mx-auto bg-black/75 flex flex-col pt-12 justify-center items-center px-6">
          <FadeIn direction="up" delay={0.2}>
            <div className="w-full flex flex-col items-center text-center">
              <span className="text-[#997819] font-bold tracking-[0.4em] uppercase text-xs mb-6">
                Premium Visual Content
              </span>
              <h1 className="text-white text-5xl md:text-7xl text-center font-black max-w-5xl leading-[0.9] uppercase tracking-tighter">
                High-Quality Media <br />
                <span className="text-[#997819]">Production</span> for Brands
              </h1>
              <p className="text-gray-300 mt-8 text-lg md:text-xl max-w-2xl font-medium">
                Bring Your Brand Story to Life Through Premium Visual Content
                Designed to Capture Attention & Build Trust.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* 🚀 2 INTRODUCTION: PREMIUM POSITIONING */}
      <section className="py-32 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2 relative">
              <FadeIn direction="right">
                <div className="relative h-[500px] md:h-[650px] w-full rounded-[3.5rem] overflow-hidden shadow-2xl border border-gray-100 dark:border-white/5">
                  <Image
                    src="/brand-story-shoot.jpg"
                    alt="Premium Production BizGrow Media"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-10 left-10 right-10 bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl text-white">
                    <p className="text-sm uppercase tracking-widest font-bold text-[#997819] mb-2">
                      Credibility First
                    </p>
                    <h3 className="text-2xl font-bold leading-tight">
                      Your brand deserves more than ordinary visuals.
                    </h3>
                  </div>
                </div>
              </FadeIn>
            </div>

            <div className="w-full lg:w-1/2 space-y-8">
              <FadeIn direction="left">
                <span className="text-[#997819] font-black uppercase tracking-[0.3em] text-xs">
                  Premium Visual Content
                </span>
                <h2 className="text-4xl md:text-6xl font-black text-[#12066a] dark:text-white leading-[1] uppercase tracking-tighter mt-4">
                  Bring Your Brand <br />
                  <span className="text-[#997819]">Story </span> To Life Through
                  Premium Visual Content
                </h2>

                <div className="space-y-6 mt-8">
                  <p className="text-gray-600 dark:text-gray-400 text-xl leading-relaxed font-medium">
                    Your brand deserves more than ordinary visuals. It needs
                    content that captures attention, communicates your message
                    with clarity, and presents your business with the quality,
                    confidence, and credibility your audience expects.
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed italic border-l-4 border-[#997819] pl-6">
                    <b>BizGrow Media</b> helps founders, startups, and growing
                    businesses create premium visual content that brings their
                    brand story, services, and message to life more engagingly
                    and memorably.
                  </p>
                  <Link href="/contact-us" className="inline-block pt-6">
                    <button className="px-10 py-5 bg-[#12066a] text-white font-black rounded-2xl uppercase tracking-widest text-sm hover:bg-[#997819] transition-all duration-500">
                      Start Your Production Journey →
                    </button>
                  </Link>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* 🚀 3 MEDIA ASSETS: THE SERVICES GRID */}
      <section className="py-24 bg-gray-50 dark:bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <FadeIn direction="up">
              <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter uppercase text-[#12066a] dark:text-white">
                Media <span className="text-[#997819] mr-1">Assets</span>
                Designed to Capture Attention & Build Trust
              </h2>
              <p className="text-gray-500 font-medium">
                Your brand needs visual content that feels intentional, refined,
                and aligned with the way you want to be recognised. At BizGrow
                Media, we produce high-quality media assets that help your
                business communicate with confidence, build credibility, and
                create a more memorable connection with your audience.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Play />,
                t: "Brand Story Videos",
                d: "Powerful videos that present your values, services, and message clearly.",
              },
              {
                icon: <Video />,
                t: "Social Media Content",
                d: "Reels, shorts, and platform-ready videos designed to capture attention.",
              },
              {
                icon: <Camera />,
                t: "Product & Service Shoots",
                d: "Polished photo and video content with a premium, professional finish.",
              },
              {
                icon: <Radio />,
                t: "Podcast & Interview",
                d: "Production for expert-led conversations that build trust and authority.",
              },
              {
                icon: <Sparkles />,
                t: "Promotional Campaigns",
                d: "Creative media assets for adverts, launches, and awareness campaigns.",
              },
              {
                icon: <Users />,
                t: "Corporate & Business",
                d: "Professional content for company profiles and brand communications.",
              },
            ].map((item, i) => (
              <FadeIn key={i} direction="up" delay={i * 0.1}>
                <div className="group p-10 bg-white dark:bg-white/[0.02] border border-gray-200 dark:border-white/5 rounded-[2.5rem] hover:shadow-xl transition-all">
                  <div className="w-14 h-14 bg-[#12066a] text-white rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#997819] transition-colors">
                    {React.cloneElement(item.icon, { size: 28 })}
                  </div>
                  <h3 className="text-xl font-black text-[#12066a] dark:text-white uppercase mb-3">
                    {item.t}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {item.d}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 🏛️ 4 THE PROCESS */}
      <section className="py-32 relative bg-white dark:bg-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mb-24">
            <FadeIn direction="up">
              <div className="flex items-center gap-4 mb-6">
                <span className="w-12 h-[1px] bg-[#997819]" />
                <span className="text-[#997819] font-bold uppercase tracking-[0.5em] text-xs">
                  The Experience
                </span>
              </div>
              <h2 className="text-[#12066a] dark:text-white text-5xl md:text-6xl font-black tracking-tighter uppercase leading-[0.85]">
                From Creative Vision To
                <span className="text-[#997819] ml-1">Produced Media</span>
              </h2>

              <p className="text-gray-500 pt-8 font-medium">
                We turn your ideas into polished visual content through a
                complete production experience built around clarity, creativity,
                and brand impact. Every stage is handled with intention, so your
                final content feels professional, purposeful, and ready to
                represent your business across digital platforms.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {[
              {
                id: "01",
                t: "Concept shaped with purpose",
                d: "Your idea is developed into a clear, creative direction that reflects your brand message.",
                list: ["Message Strategy", "Visual Moodboards"],
              },
              {
                id: "02",
                t: "Production planned with precision",
                d: "Every shoot detail is organised in advance to ensure a smooth, professional process.",
                list: ["Studio Setup", "Directing & Filming"],
              },
              {
                id: "03",
                t: "Content captured with quality",
                d: "We capture and produce high-quality visuals, audio, and brand moments through a refined, professional production approach.",
                list: ["Colour Grading", "Sound Design"],
              },
              {
                id: "04",
                t: "Final assets refined for impact",
                d: "Your content is edited, polished, and prepared for use across social media, websites, campaigns, and digital platforms.",
                list: ["Aspect Ratios", "Thumbnail Design"],
              },
            ].map((step, idx) => (
              <FadeIn key={idx} direction="up" delay={idx * 0.1}>
                <div className="group p-10 bg-gray-50 dark:bg-white/[0.02] border border-gray-100 dark:border-white/5 rounded-[3rem] hover:border-[#997819]/30 transition-all">
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-5xl font-black text-[#997819]/20 group-hover:text-[#997819] transition-colors">
                      {step.id}
                    </span>
                    <div className="w-12 h-12 bg-[#12066a] rounded-2xl flex items-center justify-center text-white">
                      <CheckCircle2 size={20} />
                    </div>
                  </div>
                  <h4 className="text-3xl font-black text-[#12066a] dark:text-white uppercase mb-4">
                    {step.t}
                  </h4>
                  <p className="text-gray-500 dark:text-gray-400 font-medium mb-8">
                    {step.d}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {step.list.map((li, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest text-[#997819]"
                      >
                        {li}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 🚀 6 THE IMPACT OF PREMIUM PRODUCTION */}
      <section className="py-32 bg-white dark:bg-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-start gap-20">
            {/* Left Side: Strategic Text */}
            <div className="w-full lg:w-1/2">
              <FadeIn direction="right">
                <div className="flex items-center gap-4 mb-6">
                  <span className="w-12 h-[1px] bg-[#997819]" />
                  <span className="text-[#997819] font-bold uppercase tracking-[0.5em] text-xs">
                    The Difference
                  </span>
                </div>
                <h2 className="text-[#12066a] dark:text-white text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.85] mb-8">
                  The Impact of <br />
                  <span className="text-[#997819]">Premium Production</span>
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-xl font-medium leading-relaxed mb-6">
                  Professional production is more than creating content that
                  looks good; it shapes how your brand is experienced,
                  remembered, and trusted. The quality of your visuals, sound,
                  editing, and creative direction all influence the way your
                  audience perceives your business.
                </p>
                <p className="text-gray-500 dark:text-gray-500 text-lg leading-relaxed">
                  At{" "}
                  <span className="text-[#12066a] dark:text-white font-bold">
                    BizGrow Media
                  </span>
                  , we create production-led content that helps your brand
                  appear more polished, credible, and confident across every
                  digital touchpoint.
                </p>
              </FadeIn>
            </div>

            {/* Right Side: Impact Points */}
            <div className="w-full lg:w-1/2">
              <FadeIn direction="left">
                <div className="grid grid-cols-1 gap-4">
                  {[
                    {
                      t: "Stronger Brand Image",
                      d: "A more premium and cohesive visual identity.",
                    },
                    {
                      t: "Greater Trust",
                      d: "Polished visual content that builds instant credibility.",
                    },
                    {
                      t: "Clearer Communication",
                      d: "Your message and services delivered with precision.",
                    },
                    {
                      t: "Engaging Media",
                      d: "Content designed for social platforms and campaigns.",
                    },
                    {
                      t: "Professional Presence",
                      d: "Stand out with a high-end digital footprint.",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="group flex items-center gap-6 p-6 rounded-[2rem] border border-gray-100 dark:border-white/5 bg-gray-50 dark:bg-white/[0.02] hover:border-[#997819]/30 transition-all"
                    >
                      <div className="w-12 h-12 rounded-2xl bg-[#12066a] group-hover:bg-[#997819] flex items-center justify-center text-white shrink-0 transition-colors">
                        <Check size={20} strokeWidth={3} />
                      </div>
                      <div>
                        <h4 className="text-[#12066a] dark:text-white font-black uppercase text-sm tracking-tight">
                          {item.t}
                        </h4>
                        <p className="text-gray-500 text-xs mt-1">{item.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* 🚀 5 PRODUCTION SUPPORT SECTION (The Missing Piece) */}
      <section className="py-24 bg-[#12066a] dark:bg-[#0a0a0a] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">
                Production Support Built <br />
                <span className="text-[#997819]">Around Your Brand</span>
              </h2>
              <p className="text-gray-300 mt-6 text-lg">
                At BizGrow Media, we help your brand move from basic content to
                professionally produced media that feels intentional, polished,
                and aligned with your business goals. Our production support is
                designed to make your brand look credible, memorable, and
                visually strong across every platform.
              </p>
            </FadeIn>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  t: "Shape Your Message",
                  d: "We turn your ideas, services, and brand story into a clear creative direction.",
                },
                {
                  t: "Create Professional Media",
                  d: "We produce high-quality videos, photography, podcasts, interviews, and campaign visuals.",
                },
                {
                  t: "Strengthen Brand Image",
                  d: "We ensure every visual asset reflects a premium, consistent, and trustworthy brand presence.",
                },
                {
                  t: "Prepare Content for Every Platform",
                  d: "We deliver polished media ready for social media, websites, adverts, campaigns, and wider digital use.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-6 border border-white/10 rounded-3xl bg-white/5"
                >
                  <Check
                    className="text-[#997819] mb-4"
                    size={24}
                    strokeWidth={3}
                  />
                  <h4 className="font-bold uppercase text-sm mb-2">{item.t}</h4>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    {item.d}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 🎯 FINAL CTA - PARALLAX BOX EDITION */}
      <section className="py-32 px-6 relative">
        <div className="max-w-6xl mx-auto relative rounded-[4rem] overflow-hidden shadow-2xl border-2 border-[#997819]/30">
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-fixed bg-no-repeat"
            style={{ backgroundImage: "url('/cta-bg.jpg')" }}
          />
          <div className="absolute inset-0 bg-[#000B25]/85" />
          <div className="relative z-10 p-16 md:p-24 text-center">
            <FadeIn direction="up">
              <h2 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter mb-8 leading-none">
                Give Your Brand The <br />
                <span className="text-[#997819]">Quality It Deserves</span>
              </h2>
              <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-12 italic">
                With Studio & Production by BizGrow Media, we create polished
                visual content that helps your brand look credible, communicate
                clearly, and connect with your audience across every digital
                platform.
              </p>
              <Link href="/contact-us">
                <button className="bg-[#997819] text-white px-12 py-6 rounded-2xl font-black uppercase tracking-[0.2em] text-sm hover:scale-105 transition-transform shadow-2xl">
                  Create Premium Brand Media
                </button>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>
    </section>
  );
};

export default StudioProductionPage;
