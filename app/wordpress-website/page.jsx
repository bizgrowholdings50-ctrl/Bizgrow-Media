import Image from "next/image";
import React from "react";
import {
  Code2,
  LayoutDashboard,
  Rocket,
  ShieldCheck,
  Check,
  Laptop,
  Monitor,
  Search,
  Settings,
  TrendingUp,
  Zap,
} from "lucide-react";
import FadeIn from "@components/MotionWrapper";
import Link from "next/link";

// 🎯 UPDATED METADATA
export const metadata = {
  title: "Professional WordPress Website Design UK | BizGrow Digital",
  description:
    "Build a UK WordPress website with BizGrow Digital. Engage visitors, drive growth, and showcase your brand professionally online.",
  alternates: {
    canonical: "https://bizgrowmedia.co.uk/wordpress-website/",
  },
};

const WordPressPage = () => {
  return (
    <section className="w-full bg-white ">
      {/* --- HERO: Fixed Centering --- */}
      <div className="relative h-[90vh] md:h-screen w-full flex items-center justify-center overflow-hidden">
        <Image
          src="/Laptop mockup.jpg"
          alt="WordPress Development"
          fill
          className="object-cover object-center"
          priority
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 max-w-7xl mx-auto md:pt-10 px-6 w-full flex flex-col items-center text-center">
          <FadeIn direction="up">
            <span className="text-[#997819] font-bold tracking-widest uppercase text-sm mb-4 block">
              Enterprise-Grade WordPress Websites
            </span>
            <h1 className="text-white text-5xl md:text-6xl font-black leading-tight mb-6 uppercase">
              WordPress Engineered for{" "}
              <span className="text-[#997819]">Business </span>
              GROWTH
            </h1>
            <p className="text-gray-300 text-lg md:text-lg max-w-2xl mb-10 mx-auto">
              Generic themes limit your potential. We create high-performance,
              scalable, and secure{" "}
              <Link
                href="/how-to-start-a-blog-on-wordpress/"
                className="text-[#997819] font-bold"
              >
                WordPress
              </Link>{" "}
              websites tailored for UK brands that drive engagement and results.
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/contact-us/">
                <button className="bg-[#997819] text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-all">
                  Build Your WordPress Platform →
                </button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* --- SECTION 1: Professional WordPress Website Design UK (New) --- */}
      <section className="py-24 bg-white dark:bg-black dark:border-t-2 dark:border-orange-700">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="left">
              <h2 className="text-4xl md:text-5xl font-black dark:text-white uppercase tracking-tighter mb-6 leading-none">
                Professional <br />
                <span className="text-[#997819]">WordPress Website</span> <br />
                Design UK
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-lg mb-8">
                At{" "}
                <Link href="/about-us" className="text-[#997819] font-bold">
                  BizGrow Digital
                </Link>
                , we build WordPress websites that combine stunning{" "}
                <Link
                  href="/what-is-web-design-the-ultimate-guide-to-designing-a-website/"
                  className="text-[#997819] font-bold"
                >
                  design
                </Link>{" "}
                with powerful functionality. Whether you are a small business or
                a growing enterprise, our results grow your revenue.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    title: "Fully Responsive",
                    desc: "Flawless on all devices, desktops to mobiles.",
                  },
                  {
                    title: "SEO-Optimised",
                    desc: "Built to rank higher and attract UK audience.",
                  },
                  {
                    title: "Customised",
                    desc: "Tailored layouts to reflect your unique offerings.",
                  },
                  {
                    title: "Conversion-Focused",
                    desc: "Designed to turn visitors into enquiries.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <Check className="text-[#997819] shrink-0" size={24} />
                    <div>
                      <h3 className="font-bold dark:text-white text-sm uppercase tracking-wide">
                        {item.title}
                      </h3>
                      <p className="text-xs text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
            <FadeIn direction="right" className="relative">
              <div className="relative z-10 rounded-[3rem] overflow-hidden border-2 border-[#997819]/20 shadow-2xl">
                <Image
                  src="/wp-design-uk.jpg"
                  width={600}
                  height={400}
                  alt="Professional WordPress Website | BizGrow Digital"
                  className="w-full h-125 object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#997819]/10 blur-3xl -z-10" />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: What We Deliver (Your existing grid) --- */}
      <section className="w-full dark:bg-black dark:border-t-2 dark:border-orange-700 ">
        <div className="py-14 max-w-7xl mx-auto px-6 ">
          {/* ... existing 'What We Deliver' code ... */}
          {/* (No changes needed here unless you want to swap icons) */}
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 items-center">
            <div className="lg:col-span-1">
              <h2 className="text-5xl font-black text-center dark:text-white mb-6 uppercase tracking-tighter">
                What We Deliver
              </h2>
              <p className="text-gray-500 text-center dark:text-gray-400 max-w-3xl mx-auto">
                We build performance-focused{" "}
                <Link
                  href="/custom-wordpress-development-services-in-the-uk/"
                  className="text-[#997819] font-bold underline"
                >
                  WordPress websites
                </Link>{" "}
                without bloated page builders, ensuring fast load times and
                long-term scalability.
              </p>
            </div>
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Your existing mapping for Code2, LayoutDashboard, etc. */}
              {[
                {
                  title: "Headless WordPress",
                  icon: <Code2 />,
                  desc: "Next.js frontend with WordPress backend for superior speed.",
                },
                {
                  title: "Custom Admin",
                  icon: <LayoutDashboard />,
                  desc: "Tailored dashboards for easy content management.",
                },
                {
                  title: "Security",
                  icon: <ShieldCheck />,
                  desc: "Advanced server-side hardening to protect your data.",
                },
                {
                  title: "Core Web Vitals",
                  icon: <Rocket />,
                  desc: "Built to meet Google’s highest performance standards.",
                },
              ].map((box, i) => (
                <div
                  key={i}
                  className="group relative p-10 bg-white dark:bg-[#001235]/40 backdrop-blur-md rounded-[2.5rem] border-2 border-slate-100 dark:border-white/5 shadow-xl hover:-translate-y-2 transition-all duration-500"
                >
                  <div className="text-[#997819] mb-6">{box.icon}</div>
                  <h3 className="text-2xl font-black dark:text-white mb-3 tracking-tight group-hover:text-[#997819] transition-colors uppercase">
                    {box.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {box.desc}
                  </p>
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#997819] group-hover:w-full transition-all duration-500" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 3: Benefits of a WordPress Website (New) --- */}
      <section className="py-24 bg-zinc-50 dark:bg-[#000814] dark:border-t-2 dark:border-orange-700">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black dark:text-white uppercase tracking-tighter">
              Benefits for Your{" "}
              <span className="text-[#997819]">UK Business</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "User-Friendly",
                icon: <Settings />,
                desc: (
                  <>
                    Quickly update{" "}
                    <Link
                      href="/the-ultimate-guide-to-creating-scroll-stopping-content-in-the-uk/"
                      className="text-[#997819] font-bold"
                    >
                      content
                    </Link>{" "}
                    and images without technical expertise.
                  </>
                ),
              },
              {
                title: "SEO-Friendly",
                icon: <Search />,
                desc: "Built-in features to improve rankings for local UK searches.",
              },
              {
                title: "Responsive",
                icon: <Monitor />,
                desc: (
                  <>
                    <Link
                      href="/how-good-ux-can-keep-visitors-on-your-website-longer/"
                      className="text-[#997819] font-bold"
                    >
                      Mobile-optimised
                    </Link>{" "}
                    to ensure site looks great on any device.
                  </>
                ),
              },
              {
                title: "Secure & Reliable",
                icon: <ShieldCheck />,
                desc: "Regular updates and robust measures to protect visitors.",
              },
              {
                title: "Scalable",
                icon: <TrendingUp />,
                desc: "Adapt your site easily as your business grows in the UK.",
              },
              {
                title: "Marketing Support",
                icon: <Zap />,
                desc: <>Seamless integration with <Link href="/a-beginners-guide-to-email-marketing-that-actually-works/" className="text-[#997819] font-bold">email</Link>, social, and analytics.</>,
              },
            ].map((benefit, i) => (
              <FadeIn key={i} direction="up" delay={i * 0.1}>
                <div className="p-8 bg-white dark:bg-white/5 rounded-[2rem] border border-zinc-200 dark:border-white/10 hover:border-[#997819] transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-[#997819]/10 text-[#997819] flex items-center justify-center mb-6 group-hover:bg-[#997819] group-hover:text-white transition-all">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-black dark:text-white mb-3 uppercase tracking-tight">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed font-medium">
                    {benefit.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 🚀 4 PREMIUM COMPARISON: Standard vs BizGrow */}
      <section className="dark:bg-black py-24 relative overflow-hidden dark:border-t-2 dark:border-orange-700">
        {/* Background Glow Effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#997819]/5 blur-[120px] rounded-full -z-10" />

        <div className="relative py-20 bg-slate-900 dark:bg-[#001235]/30 backdrop-blur-xl border-2 border-white/5 dark:border-white/10 text-white rounded-[3.5rem] mx-4 md:mx-10 shadow-2xl overflow-hidden">
          <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
            <FadeIn direction="up">
              <h2 className="text-4xl md:text-6xl font-black mb-16 tracking-tighter uppercase">
                Standard WordPress vs{" "}
                <span className="text-[#997819]">BizGrow WordPress</span>
              </h2>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
              {/* ❌ SLOW & BLOATED CARD - Updated for better visibility */}
              <FadeIn direction="left" delay={0.2}>
                <div className="h-full p-10 border border-white/10 rounded-[2.5rem] bg-white/5 hover:bg-white/[0.08] transition-all duration-500 group relative overflow-hidden">
                  {/* Subtle Red Glow for "Warning/Negative" vibe */}
                  <div className="absolute -top-10 -left-10 w-32 h-32 bg-red-500/5 blur-3xl rounded-full" />

                  <h3 className="text-2xl font-bold mb-8 text-gray-400 tracking-wide group-hover:text-gray-300 transition-colors">
                    Standard WordPress Websites
                  </h3>

                  <ul className="space-y-6 text-left">
                    {[
                      "Slow, bloated performance",
                      "Generic pre-built themes",
                      "Multiple unnecessary plugins",
                      "Poor mobile speed and usability",
                      "Higher security and maintenance risks",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-4 text-sm md:text-base font-medium text-gray-500 group-hover:text-gray-400 transition-colors"
                      >
                        {/* Icons ko dull se "Sharp Muted Red" kiya hai */}
                        <div className="flex-shrink-0 w-7 h-7 rounded-full bg-red-500/10 border border-red-500/20 text-red-500/70 flex items-center justify-center text-xs font-bold">
                          ✕
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>

              {/* ✅ BIZ GROW WP (THE WINNER) */}
              <FadeIn direction="right" delay={0.4}>
                <div className="relative h-full p-10 border-2 border-[#997819] rounded-[2.5rem] bg-[#997819]/10 shadow-[0_0_40px_rgba(181,65,24,0.15)] overflow-hidden group">
                  {/* Winner Badge */}
                  <div className="absolute -top-0 left-1/2 -translate-x-1/2 bg-[#997819] px-6 py-2 rounded-b-2xl text-[10px] font-black uppercase tracking-[0.3em] shadow-lg">
                    The Winner
                  </div>

                  <h3 className="text-2xl font-black mb-8 text-[#997819] uppercase tracking-tight">
                    BizGrow WordPress Solutions
                  </h3>

                  <ul className="space-y-6 text-left">
                    {[
                      "Performance-engineered architecture",
                      "Lightweight, custom-built code",
                      "Zero-bloat development approach",
                      <>
                        <Link
                          href="/search-engine-optimisation/"
                          className="text-[#997819] underline"
                        >
                          SEO
                        </Link>
                        and Core Web Vitals optimised
                      </>,
                      "Enterprise-level security standards",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-4 text-sm md:text-base font-bold dark:text-white group-hover:translate-x-2 transition-transform duration-300"
                      >
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center shadow-lg shadow-green-500/30">
                          <Check size={14} strokeWidth={4} />
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Subtle Inner Glow */}
                  <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#997819]/20 blur-3xl rounded-full" />
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="dark:bg-black py-24 dark:border-y-2 dark:border-orange-700 overflow-hidden">
        {/* ... existing CTA code ... */}
        <div className="max-w-7xl mx-auto px-4 md:px-10 text-center">
          <div
            className="relative py-24 rounded-[3.5rem] overflow-hidden bg-fixed bg-cover bg-center"
            style={{ backgroundImage: "url('/wp-cta.jpg')" }}
          >
            <div className="absolute inset-0 bg-black/80" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter mb-8">
                Let's Build Your <br />{" "}
                <span className="text-[#997819]">WordPress Masterpiece</span>
              </h2>
              <Link href="/contact-us">
                <button className="px-10 py-5 bg-[#997819] text-white font-black rounded-2xl uppercase tracking-widest hover:scale-110 transition-all">
                  Start Your Project →
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default WordPressPage;
