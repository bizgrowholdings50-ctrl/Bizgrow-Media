import Image from "next/image";
import React from "react";
import ServicesServer from "@components/ServicesServer";
import Link from "next/link";
import FadeIn from "@components/MotionWrapper";
import {
  TrendingUp,
  Camera,
  Video,
  Mic2,
  Clapperboard,
  BarChart3,
  ArrowRight,
  Zap,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import PremiumCarousel from "@components/PremiumCarousel";

export const metadata = {
  title: "BizGrow Media | Premium Business Media & Brand Growth",
  description:
    "Put your brand in the spotlight.BizGrow Media delivers Studio & Production, Content Engine, Authority Builder, and Growth Engine solutions.",
  alternates: { canonical: "https://bizgrowmedia.co.uk" },
};

const HomePage = () => {
  return (
    <main className="w-full bg-white dark:bg-[#12066a]">
      {/* 1. Hero Section - Premium Carousel */}
      <section className="relative w-full h-[95vh] md:h-screen">
        <PremiumCarousel />
      </section>

      {/* 2. BRAND STORY: THE POWER OF BUSINESS MEDIA */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-white dark:bg-gray-800 ">
        <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-[#997819]/10 blur-[150px] rounded-full pointer-events-none opacity-50" />
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-[#12066a]/5 dark:bg-white/5 blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="relative z-10 order-1 lg:order-1">
              <FadeIn direction="up">
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-12 h-[1px] bg-[#997819]"></span>
                  <span className="text-[#997819] font-black tracking-[0.5em] uppercase text-[10px] md:text-xs">
                    The Power Of Business Media
                  </span>
                </div>

                <h2 className="text-5xl md:text-6xl font-black text-slate-900 dark:text-white mb-8 leading-[0.85] tracking-tighter uppercase">
                  Where Businesses <br />
                  <span
                    className="text-transparent bg-clip-text bg-gradient-to-r from-[#997819] to-[#d4af37]"
                    style={{ WebkitTextStroke: "1px #997819" }}
                  >
                    Become Industry Voices
                  </span>
                </h2>

                <div className="relative mb-10">
                  <p className="text-slate-600 dark:text-white/80 text-md md:text-md font-medium leading-relaxed pl-8 border-l-4 border-[#997819]">
                    BizGrow Media is not a conventional marketing platform. It
                    is a structured network of interconnected media platforms
                    that positions your brand with a clear and purposeful
                    message within the industry.
                    <br />
                    <br />
                    Acting as a business media connector, we shape and
                    communicate your brand through value-led presence, ensuring
                    your audience clearly recognises the impact and value you
                    deliver to the people you serve.
                  </p>
                </div>

                {/* Feature Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                  {[
                    {
                      icon: <Camera size={22} />,
                      title: "PROFESSIONAL STUDIO",
                      sub: "CONTENT PRODUCTION",
                    },
                    {
                      icon: <Clapperboard size={22} />,
                      title: "CINEMATIC STRATEGY",
                      sub: "HIGH-END EXECUTION",
                    },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 hover:border-[#997819]/50 transition-colors duration-300"
                    >
                      <div className="p-3 bg-[#997819] text-white rounded-xl shadow-lg shadow-[#997819]/20">
                        {item.icon}
                      </div>
                      <div>
                        <p className="dark:text-white font-black uppercase text-[11px] tracking-widest leading-none">
                          {item.title}
                        </p>
                        <p className="text-[#997819] text-[9px] uppercase font-bold mt-1 tracking-tighter opacity-70">
                          {item.sub}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <Link href="/contact-us" className="inline-block group">
                  <button className="relative overflow-hidden px-12 py-5 bg-[#12066a] dark:bg-[#997819] text-white font-black uppercase tracking-[0.2em] text-xs transition-all duration-500 rounded-full hover:shadow-2xl group-hover:-translate-y-1">
                    <span className="relative z-10 flex items-center gap-3">
                      Book Your Production Session <ArrowRight size={16} />
                    </span>
                    <div className="absolute inset-0 bg-[#997819] dark:bg-[#12066a] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                  </button>
                </Link>
              </FadeIn>
            </div>

            {/* Right Content (Image) */}
            <div className="relative group order-2 lg:order-2 mt-12 lg:mt-0">
              <FadeIn direction="left" delay={0.4}>
                <div className="relative z-10 p-4 border border-[#997819]/10 dark:border-white/5 rounded-[3rem] backdrop-blur-sm">
                  <div className="relative aspect-[4/5] md:aspect-square overflow-hidden rounded-[2.5rem] shadow-2xl">
                    <Image
                      src="/studio.jpg"
                      alt="BizGrow Media Studio"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      priority
                    />
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE SERVICES: OUR MEDIA SERVICES */}
      <section className="relative py-32 bg-slate-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <FadeIn direction="up">
              <h2 className="text-[#997819] font-black tracking-[0.4em] uppercase text-xs mb-4">
                Our Media Services
              </h2>
              <h3 className="text-5xl md:text-6xl font-black text-[#12066a] dark:text-white uppercase tracking-tighter">
                The Future Of Business Media
              </h3>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Studio & Production",
                icon: <Video />,
                desc: "A professionally curated production environment engineered for podcasts, executive interviews, visual storytelling, and premium media execution.",
              },
              {
                name: "Content Engine",
                icon: <Zap />,
                desc: "High-quality, value-driven content crafted to strengthen audience engagement, elevate brand perception, and deliver meaningful communication.",
              },
              {
                name: "Authority Builder",
                icon: <ShieldCheck />,
                desc: "Strategic personal and company branding designed to establish credibility, strengthen industry presence, and position brands as recognised voices.",
              },
              {
                name: "Growth Engine",
                icon: <TrendingUp />,
                desc: "Growth-focused media execution built to generate qualified leads, increase revenue potential, and create long-term business momentum.",
              },
            ].map((item, idx) => (
              <FadeIn key={idx} direction="up" delay={idx * 0.1}>
                <div className="p-10 border border-slate-200 dark:border-white/5 bg-white dark:bg-white/5 hover:border-[#997819] transition-all duration-500 text-left flex flex-col h-full group rounded-[2.5rem]">
                  <div className="text-[#997819] mb-6 group-hover:scale-125 transition-transform duration-500">
                    {item.icon}
                  </div>
                  <h3 className="text-[#12066a] dark:text-white font-black text-lg tracking-tight mb-4 uppercase">
                    {item.name}
                  </h3>
                  <p className="text-slate-500 dark:text-white/40 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          <div className="text-center mt-16">
            <button className="text-[#12066a] dark:text-[#997819] font-black uppercase tracking-widest text-[10px] flex items-center gap-2 mx-auto group">
              See How We Build Brands{" "}
              <ArrowRight
                size={14}
                className="group-hover:translate-x-2 transition-transform"
              />
            </button>
          </div>
        </div>
      </section>

      {/* 4. WHY GROWING BRANDS CHOOSE BIZGROW MEDIA */}
      <section className="py-32 bg-white dark:bg-gray-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5">
              <FadeIn direction="right">
                <h2 className="text-4xl md:text-5xl font-black text-[#12066a] dark:text-white mb-8 uppercase leading-[0.9] tracking-tighter">
                  Why Growing Brands Choose{" "}
                  <span className="text-[#997819]">BizGrow Media?</span>
                </h2>
                <p className="text-slate-600 dark:text-white/70 text-md leading-relaxed mb-6">
                  Brands choose BizGrow Media because we go beyond creating
                  content; we build strategic media systems that help businesses
                  become more visible, credible, and consistent across the
                  platforms where their audience is already paying attention.
                </p>
                <p className="text-slate-500 dark:text-white/40 italic">
                  Our approach brings together creative production, brand
                  positioning, content strategy, and growth-led marketing to
                  help your business show up with clarity, confidence, and
                  intention.
                </p>
              </FadeIn>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  title: "Strategic Brand Direction",
                  desc: "We shape your content around a clear purpose, aligned with your business goals, audience needs, and long-term growth vision.",
                },
                {
                  title: "Premium Creative Quality",
                  desc: "From visuals to messaging, every asset is created to reflect a polished, professional, and trustworthy brand image.",
                },
                {
                  title: "Consistent Digital Presence",
                  desc: "We help your business stay active, relevant, and recognisable through structured content and purposeful media systems.",
                },
                {
                  title: "Growth-Led Execution",
                  desc: "Our work is designed to do more than generate engagement; it helps build trust, strengthen visibility, and support meaningful business growth.",
                },
              ].map((item, i) => (
                <FadeIn key={i} direction="up" delay={i * 0.1}>
                  <div className="p-8 bg-slate-50 dark:bg-white/[0.02] border border-slate-100 dark:border-white/5 rounded-3xl hover:border-[#997819]/50 transition-all">
                    <h4 className="text-[#12066a] dark:text-white font-black uppercase text-sm mb-3 tracking-tight">
                      {item.title}
                    </h4>
                    <p className="text-slate-500 dark:text-white/40 text-xs leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. RESULTS YOU CAN EXPECT */}
      <section className="py-24 bg-[#12066a] dark:bg-[#997819]/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right">
              <h2 className="text-white text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 leading-none">
                Results You <br /> Can Expect
              </h2>
              <p className="text-white/70 text-lg  font-medium italic">
                At BizGrow Media, we shape every strategy, content piece, and
                campaign to help your business build a stronger presence,
                communicate with purpose, and create more growth opportunities.
              </p>
            </FadeIn>
            <div className="space-y-4">
              {[
                "Greater visibility across key platforms",
                "Stronger trust through consistent communication",
                "Clearer messaging with professional intent",
                "More meaningful audience engagement",
                "Better opportunities for enquiries and growth",
              ].map((text, idx) => (
                <FadeIn key={idx} direction="up" delay={idx * 0.1}>
                  <div className="flex items-center gap-4 bg-white/5 p-6 rounded-2xl border border-white/10 group hover:bg-white transition-all duration-500">
                    <CheckCircle2 size={24} className="text-[#997819]" />
                    <span className="text-white group-hover:text-[#12066a] font-black uppercase tracking-tight text-sm md:text-base transition-colors">
                      {text}
                    </span>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. THE BIZGROW MEDIA ECOSYSTEM */}
      <section className="py-32 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <FadeIn direction="up">
            <h2 className="text-4xl md:text-6xl font-black text-[#12066a] dark:text-white uppercase mb-20 tracking-tighter">
              The BizGrow Media <span className="text-[#997819]">Ecosystem</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "Studio Hire",
                "Launch Package",
                "Content Engine",
                "Authority Builder",
                "Media Partner",
              ].map((step, i) => (
                <div
                  key={i}
                  className="px-10 py-6 border border-slate-200 dark:border-white/10 rounded-full flex items-center gap-4 bg-slate-50 dark:bg-white/[0.02] hover:border-[#997819] transition-all"
                >
                  <span className="text-[#997819] font-black text-sm">
                    Step {i + 1}
                  </span>
                  <span className="text-[#12066a] dark:text-white font-black uppercase tracking-widest text-xs">
                    — {step}
                  </span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 7. FINAL IMPACT CTA */}
      <section className="py-24 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative py-24 rounded-[4rem] overflow-hidden text-center text-white bg-[#12066a] shadow-2xl">
            <div className="absolute inset-0 bg-[url('/hero-cta.webp')] bg-cover bg-center bg-fixed opacity-30" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-[#12066a]/80" />
            <div className="relative z-10 px-6 max-w-3xl mx-auto">
              <FadeIn direction="up">
                <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 leading-none">
                  Working With Brands <br /> That Aim Higher
                </h2>
                <p className="text-gray-200 mb-12 text-lg  font-light italic">
                  BizGrow Media helps businesses grow through premium media
                  production, strategic content, authority positioning, and
                  growth-focused exposure.
                </p>
                <Link href="/contact-us">
                  <button className="px-12 py-6 bg-[#997819] text-white font-black rounded-2xl uppercase tracking-[0.3em] text-sm hover:scale-110 transition-transform shadow-xl">
                    Step Into Professional Media
                  </button>
                </Link>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;