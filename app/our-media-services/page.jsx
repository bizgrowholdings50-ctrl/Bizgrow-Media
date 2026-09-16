import Image from "next/image";
import React from "react";
import { Mic2, Layers, ShieldCheck, Rocket, ArrowRight } from "lucide-react";
import HorizontalProcess from "@components/HorizontalProcess";
import ShapeChangeSection from "@components/test";
import VShapeTransition from "@components/test2";
import Link from "next/link";
import FadeIn from "@components/MotionWrapper";
import { FaWordpress } from "@node_modules/react-icons/fa";

export const metadata = {
  title: "Our Media Services - BizGrow Media ",
  description:
    "Want a stronger brand presence? BizGrow Media provides Studio & Production, Content Engine, Authority Builder, and Growth Engine services.",
  alternates: {
    canonical: "https://bizgrowmedia.co.uk/our-media-services/",
  },
};

const page = () => {
  const services = [
    {
      title: "Studio & Production",
      path: "/studio-production",
      desc: "From podcasts and interviews to branded video content, we create professional media that helps your business appear more polished and engaging.",
      icon: <Mic2 className="w-8 h-8 text-[#997819]" />,
      image: "/services-studio-bg.jpg", // Yahan apni image ka path dein
    },
    {
      title: "Content Engine",
      path: "/content-engine",
      desc: "BizGrow Media creates valuable, well-structured content that helps your brand stay visible, connect with the right audience, and communicate with clarity.",
      icon: <Layers className="w-8 h-8 text-[#997819]" />,
      image: "/services-content-bg.jpg",
    },
    {
      title: "Authority Builder",
      path: "/authority-builder",
      desc: "BizGrow Media helps businesses and personal brands build a stronger presence through professional branding, credibility, and consistent media positioning.",
      icon: <ShieldCheck className="w-8 h-8 text-[#997819]" />,
      image: "/services-authority-bg.jpg",
    },
    {
      title: "Growth Engine",
      path: "/growth-engine",
      desc: "Our growth-focused media strategies are designed to help your business reach more people, attract better leads, and create new opportunities.",
      icon: <Rocket className="w-8 h-8 text-[#997819]" />,
      image: "/services-growth-bg.jpg",
    },
  ];

  return (
    <section className="relative w-full">
      {/* Hero Container */}
      <div className="relative h-[95vh] md:h-screen w-full">
        <Image
          src="/services-hr.jpg"
          alt="BizGrow Media Open Bigger Business Opportunities"
          fill
          priority
          fetchPriority="high"
          className="object-cover object-center"
        />

        <div
          className="absolute inset-0 w-full bg-black/70 flex flex-col justify-center
         items-center space-y-3"
        >
          <FadeIn direction="up" delay={0.2} className="w-full">
            <h1
              className="text-white text-4xl mx-auto md:text-6xl text-center 
            font-bold mt-26 max-w-5xl px-4"
            >
              The Right Media Open{" "}
              <span className="text-[#997819]">Bigger Business</span>{" "}
              Opportunities
            </h1>
          </FadeIn>

          <FadeIn direction="up" delay={0.4} className="w-full">
            <p className="text-white text-md mx-auto md:text-xl text-center max-w-2xl px-4">
              At BizGrow Media, we know every brand has its own journey, which
              is why our services are built around your vision, audience, and
              growth goals.
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.6} className="w-full">
            <div className="w-full flex justify-center">
              <Link href="/contact-us">
                <button className="mt-8 px-8 py-4 bg-[#997819] text-white font-semibold rounded-xl hover:scale-105 transition shadow-lg">
                  Step Into Professional Media →
                </button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* 🔹 3. SERVICES GRID (Compact Luxury with Continuous Icon Spin) */}
      <section className="relative py-10 pb-20 bg-white overflow-hidden">
        {/* Decorative Glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#997819]/5 blur-[100px] rounded-full -z-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center mb-20">
            <FadeIn direction="up" delay={0.2}>
              <h2 className="text-3xl md:text-6xl font-black text-[#12066a] dark:text-white leading-[1.1] tracking-tighter">
                Elite-level services focused on <br />
                <span className="text-[#997819]">long-term performance</span>
              </h2>

              <div className="w-24 h-2 bg-[#997819] mx-auto mt-6 rounded-full" />
            </FadeIn>

            <FadeIn direction="up" delay={0.4}>
              <p className="mt-8 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg md:text-xl font-medium">
                <Link href="/" className="text-[#997819] font-bold">
                  BizGrow Media{" "}
                </Link>
                provides all-in-one media services designed to help brands build
                visibility, engage high-intent audiences, and create stronger
                business opportunities.
              </p>
            </FadeIn>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, i) => (
              <FadeIn key={i} direction="up" delay={0} duration={0.6}>
                <Link href={service.path || "#"}>
                  <div className="group relative h-[450px] md:h-[420px] rounded-[3rem] overflow-hidden bg-[#12066a]/90 transition-all duration-700 lg:hover:-translate-y-3 lg:hover:shadow-[0_40px_80px_-20px_rgba(18,6,106,0.4)] active:scale-[0.98]">
                    {/* 1. Background Image (Updated to service.image) */}
                    <div
                      className="absolute inset-0 z-0 bg-cover bg-center transition-all duration-[1.5s] ease-in-out lg:group-hover:scale-125 lg:group-hover:rotate-2 opacity-90 lg:opacity-90 lg:group-hover:opacity-100"
                      style={{
                        backgroundImage: `url(${
                          service.image || "/service-bg.jpg"
                        })`,
                      }}
                    />

                    {/* 2. Watermark */}
                    <div className="absolute top-8 left-8 pointer-events-none z-10 overflow-hidden">
                      <h3 className="text-[4rem] font-black text-white/[0.05] uppercase leading-none tracking-tighter transition-transform duration-1000 lg:group-hover:-translate-y-2 lg:group-hover:text-[#997819]/30">
                        {service.title.split(" ")[0]}
                      </h3>
                    </div>

                    {/* 3. Gradient */}
                    <div className="absolute inset-0 z-20 bg-gradient-to-t from-[#12066a] via-[#12066a]/60 to-transparent" />

                    {/* 4. Content */}
                    <div className="relative z-30 h-full p-8 md:p-10 flex flex-col justify-end">
                      {/* Spinning Icon */}
                      <div className="absolute top-8 right-8 md:top-10 md:right-10">
                        <div className="relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-500 lg:group-hover:border-[#997819] lg:group-hover:bg-[#997819]/20 shadow-2xl">
                          <div className="absolute inset-0 rounded-full border-t-2 border-r-2 border-[#997819] animate-[spin_4s_linear_infinite] opacity-60 lg:group-hover:opacity-100 lg:group-hover:animate-[spin_1.5s_linear_infinite] transition-all duration-500" />

                          <div className="relative z-10 text-[#997819] lg:group-hover:scale-110 transition-transform duration-500">
                            {service.icon &&
                              React.cloneElement(service.icon, { size: 24 })}
                          </div>
                        </div>
                      </div>

                      {/* Text Area */}
                      <div className="transition-transform duration-500 lg:group-hover:-translate-y-4">
                        <span className="text-[#997819] font-black text-[9px] tracking-[0.5em] uppercase mb-3 block opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-700 translate-y-0 lg:translate-y-4 lg:group-hover:translate-y-0">
                          Professional Standard
                        </span>

                        <h3 className="text-2xl md:text-3xl font-black text-white mb-3 tracking-tighter uppercase leading-[0.9]">
                          {service.title}
                        </h3>

                        <p className="text-blue-100/80 lg:text-blue-100/50 font-medium leading-relaxed text-sm line-clamp-3 lg:group-hover:text-white/90 transition-all duration-500">
                          {service.desc}
                        </p>
                      </div>

                      {/* Footer / CTA */}
                      <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-700 translate-y-0 lg:translate-y-8 lg:group-hover:translate-y-0">
                        <div className="flex items-center gap-3 text-white font-black text-[9px] uppercase tracking-[0.3em]">
                          <span className="text-[#997819] lg:text-white lg:group-hover:text-[#997819] transition-colors">
                            Read More
                          </span>

                          <div className="w-10 lg:w-8 h-[1px] bg-[#997819] lg:group-hover:w-12 transition-all duration-500" />
                        </div>

                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#997819] text-white shadow-[0_0_20px_rgba(153,120,25,0.4)]">
                          <ArrowRight size={14} />
                        </div>
                      </div>
                    </div>

                    {/* Glow Effect */}
                    <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#997819]/10 rounded-full blur-[100px] lg:group-hover:bottom-0 lg:group-hover:left-0 transition-all duration-1000 opacity-0 lg:group-hover:opacity-100" />
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* OUR DISTINCTION */}
      <section className="bg-white dark:bg-gray-900 py-14 md:py-40 transition-colors duration-500 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20 dark:opacity-40">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-gray-200 dark:via-white/10 to-transparent hidden md:block" />
        </div>

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          {/* HEADER */}
          <FadeIn direction="up" delay={0.1}>
            <div className="mb-32 text-center">
              <div className="flex items-center justify-center gap-3 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#997819] animate-pulse" />

                <span className="text-[#997819] font-black uppercase tracking-[0.4em] text-[10px]">
                  Our Distinction
                </span>
              </div>

              <h2 className="text-[#12066a] dark:text-white text-5xl md:text-6xl font-black tracking-tighter leading-[0.9] -mb-12 md:mb-8">
                What Makes Our
                <span className="text-[#997819] not-italic ml-1">
                  Process Different
                </span>
              </h2>

              <div className="w-24 h-[1px] bg-[#997819] mx-auto opacity-50" />
            </div>
          </FadeIn>

          {/* TIMELINE */}
          <div className="relative">
            {/* Center Line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full hidden md:block bg-gradient-to-b from-[#997819]/0 via-[#997819]/60 to-[#997819]/0" />

            <div className="space-y-24">
              {[
                {
                  label: "Experience",
                  title: "We Pay Attention To How Your Brand Is Experienced",
                  desc: "People often form an impression of how a brand feels online before any conversation begins. Our process is built around helping your business appear more polished, intentional, and professionally presented through every piece of media.",
                },
                {
                  label: "Quality",
                  title:
                    "We Prioritise Meaningful Content Over Constant Posting",
                  desc: "We believe strong brands are built through purposeful content, not endless posting. Every piece of media is created to feel relevant, valuable, and worth paying attention to.",
                },
                {
                  label: "Personalization",
                  title:
                    "Your Business Doesn’t Get Treated Like Another Project",
                  desc: "Every business communicates differently, which is why our process is shaped by your brand identity, audience, and growth direction rather than a generic approach.",
                },
                {
                  label: "Communication",
                  title: "We Think Beyond Cameras And Editing",
                  desc: "Strong media is not only about visuals. It is also about how clearly your business communicates and the impression your brand leaves behind.",
                },
                {
                  label: "Impact",
                  title:
                    "We Focus Less On Promises And More On Meaningful Results",
                  desc: "Our focus is on creating professional media that helps your business build stronger audience connections, better brand perception, and more valuable opportunities over time.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-20 ${
                    index % 2 !== 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* CARD */}
                  <div className="flex-1 w-full">
                    <FadeIn
                      direction={index % 2 === 0 ? "right" : "left"}
                      delay={0.05}
                      duration={0.7}
                    >
                      <div className="p-10 rounded-[2.5rem] bg-gray-50/50 dark:bg-white/[0.02] border border-gray-100 dark:border-white/5 hover:border-[#997819]/30 transition-all duration-700 group shadow-sm hover:shadow-2xl">
                        <span className="inline-block text-[#997819] font-black uppercase tracking-[0.3em] text-[10px] mb-4">
                          Section // 0{index + 1}
                        </span>

                        <h3 className="text-[#12066a] dark:text-white text-2xl font-black tracking-tight mb-6 group-hover:text-[#997819] transition-colors duration-500 leading-tight">
                          {item.title}
                        </h3>

                        <p className="text-slate-800 dark:text-white/40 text-sm leading-relaxed font-medium">
                          {item.desc}
                        </p>
                      </div>
                    </FadeIn>
                  </div>

                  {/* CENTER DOT */}
                  <div className="relative z-20 flex-shrink-0 hidden md:flex items-center justify-center w-12 h-12">
                    <FadeIn direction="none" delay={0.2} duration={0.5}>
                      <div className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-white/10 flex items-center justify-center shadow-xl hover:border-[#997819] transition-colors duration-500">
                        <div className="w-2 h-2 rounded-full bg-[#997819]" />
                      </div>
                    </FadeIn>
                  </div>

                  {/* EMPTY SIDE */}
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>

          {/* END */}
          <FadeIn direction="up" delay={0.1}>
            <div className="mt-32 flex flex-col items-center">
              <div className="h-16 w-px bg-gradient-to-b from-[#997819] to-transparent mb-8" />

              <p className="text-[10px] font-black uppercase tracking-[0.6em] text-gray-600">
                End of Methodology
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 🔥 PINNED COMPONENTS  */}
      <div className="relative z-10">
        <HorizontalProcess />
      </div>

      <div className="relative z-10">
        <ShapeChangeSection />
      </div>

      <div className="relative z-10">
        <VShapeTransition />
      </div>

      {/* CTA */}
      <section className="dark:bg-gray-900 py-24 dark:border-y-2 ">
        <div className="max-w-7xl mx-auto px-4 md:px-10">
          <div
            className="relative py-20 md:py-22 rounded-[3.5rem] overflow-hidden text-white text-center shadow-[0_20px_60px_rgba(181,65,24,0.15)] group"
            style={{
              backgroundImage: "url('/services-cta.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundAttachment: "fixed",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/70 to-[#997819]/30 z-0"></div>

            <div className="absolute inset-0 border-2 border-white/10 rounded-[3.5rem] z-10 pointer-events-none group-hover:border-[#997819]/30 transition-all duration-500"></div>

            <div className="relative z-20 max-w-4xl mx-auto px-6">
              <FadeIn direction="up">
                <span className="px-6 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 border-l-[#997819] border-l-4 text-white text-xs md:text-sm font-black tracking-[0.3em] uppercase">
                  Take the Leap
                </span>

                <h2 className="text-4xl md:text-6xl mt-8 font-black mb-8 leading-[1.1] tracking-tighter ">
                  Develop your presence in the
                  <span className="text-transparent ml-1 bg-clip-text bg-gradient-to-r from-[#997819] to-orange-400">
                    right way,
                  </span>
                  from day one
                </h2>
              </FadeIn>

              <FadeIn direction="up" delay={0.2}>
                <p className="mx-auto mb-12 text-lg md:text-2xl text-gray-300 font-light leading-relaxed max-w-2xl">
                  "BizGrow Media is a trusted name that helps you establish a
                  clear, confident presence from the very beginning "
                </p>
              </FadeIn>

              <FadeIn direction="up" delay={0.4}>
                <Link href="/contact-us">
                  <button className="relative px-8 py-4 bg-[#997819] text-white font-black rounded-2xl overflow-hidden group transition-all duration-300 hover:scale-110 hover:shadow-[0_0_50px_rgba(181,65,24,0.5)]">
                    <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:animate-shine" />

                    <span className="relative z-10 md:text-lg tracking-widest">
                      Start Building The Right Way →
                    </span>
                  </button>
                </Link>
              </FadeIn>
            </div>

            <div className="absolute -top-20 -left-20 w-80 h-80 bg-[#997819]/10 blur-[120px] rounded-full"></div>
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-[#997819]/10 blur-[120px] rounded-full"></div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default page;
