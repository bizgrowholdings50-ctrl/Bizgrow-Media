import React from "react";
import {
  Mic2,
  Layers,
  Video,
  Check,
  ArrowUpRight,
  PlayCircle,
  Music,
  Rocket,
  Target,
  Palette,
  PhoneCall,
  Mic,
  Settings,
  ArrowRight,
} from "lucide-react";
import FadeIn from "@components/MotionWrapper"; // Aapka custom wrapper

export const metadata = {
    title: "BizGrow Media Packages | Professional Media Support",   
    description: "Want to launch your podcast professionally? Explore BizGrow Media packages built for production, branding, editing, and podcast growth.",
}
const PremiumPackagesPage = () => {
  const steps = [
    {
      label: "Phase 01",
      icon: <Target size={20} />,
      title: "Podcast Direction",
      desc: "BizGrow Media helps shape the style, structure, and direction of your podcast around your brand and the audience you want to reach.",
    },
    {
      label: "Phase 02",
      icon: <Palette size={20} />,
      title: "Brand Identity & Artwork",
      desc: "Professional podcast artwork and branded visuals designed to give your show a cleaner and more established appearance.",
    },
    {
      label: "Phase 03",
      icon: <Mic2 size={20} />,
      title: "Studio Production Sessions",
      desc: "Record your podcast in a professionally prepared studio environment with high-quality audio, video, and production support.",
    },
    {
      label: "Phase 04",
      icon: <Video size={20} />,
      title: "Episode Editing & Production",
      desc: "Your podcast episodes are professionally edited and refined to create a smoother and more polished final result.",
    },
    {
      label: "Phase 05",
      icon: <Music size={20} />,
      title: "Intro & Outro Creation",
      desc: "Custom intros, outros, and branded media elements designed to make your podcast feel more complete and professionally presented.",
    },
    {
      label: "Phase 06",
      icon: <Rocket size={20} />,
      title: "Podcast Launch Support",
      desc: "BizGrow Media helps prepare your podcast for major platforms while also creating short-form content ready for social media and audience engagement.",
    },
  ];

  return (
    <div className="bg-white dark:bg-[#030303] text-[#12066A] dark:text-white font-sans selection:bg-[#997819]/30">
      {/* --- 1 HERO: Ultra-Premium with Background Image --- */}
      <section className="relative min-h-[90vh] md:h-screen flex items-center justify-center px-6 pt-20 overflow-hidden bg-black">
        {/* --- Background Image Layer --- */}
        <div className="absolute inset-0 z-0">
          {/* Main Image with subtle zoom effect */}
          <img
            src="/pkg-hero-1.jpg" // Yahan apni high-res image ka path dein
            alt="BizGrow Media Studio"
            className="w-full h-full object-cover dark:opacity-40 scale-105"
          />
          {/* Premium Overlays: Gradient + Vignette */}
          <div className="absolute inset-0 bg-black/70 dark:bg-black/40" />{" "}
          {/* Subtle Vignette */}
        </div>

        {/* --- Decorative Text Overlay --- */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-10 opacity-10">
          <div className="absolute top-[5%] right-[4%] text-[20vw] font-black leading-none text-gray-400 dark:text-white uppercase select-none italic tracking-tighter">
            Podcast
          </div>
        </div>

        {/* --- Content Layer --- */}
        <div className="max-w-7xl mx-auto text-center relative z-20">
          <FadeIn direction="up">
            <div className="mb-6 flex items-center justify-center gap-4">
              <div className="h-[1px] w-12 bg-[#997819]" />
              <span className="text-[#997819] text-[11px] font-black uppercase tracking-[0.5em] drop-shadow-md">
                The Standard in Media
              </span>
              <div className="h-[1px] w-12 bg-[#997819]" />
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <h1 className="text-6xl max-w-4xl font-black uppercase tracking-tighter leading-[0.9] mb-10 text-white dark:text-white">
              Build A Podcast Presence That Feels
              <span className="text-[#997819] italic font-light drop-shadow-xl">
                More Established.
              </span>
            </h1>
          </FadeIn>

          <FadeIn direction="up" delay={0.4}>
            <div className="flex flex-col items-center justify-center gap-8 mt-12">
              <p className="max-w-xl text-center md:text-left text-sm md:text-lg text-gray-300 dark:text-white/60 border-l-0 md:border-l md:border-[#997819] md:pl-6 leading-relaxed font-medium">
                We take care of the production, branding, recording, editing,
                and setup so you can focus on sharing your ideas with
                confidence.
              </p>

              <button className="h-16 px-12 bg-[#12066A] dark:bg-white text-white dark:text-black font-black uppercase tracking-tighter text-sm flex items-center gap-3 hover:bg-[#997819] dark:hover:bg-[#997819] hover:text-white transition-all duration-500 rounded-full shadow-2xl">
                Launch Your Podcast <ArrowUpRight className="w-5 h-5" />
              </button>
            </div>
          </FadeIn>
        </div>

        {/* Bottom Decorative Line */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[1px] h-20 bg-gradient-to-b from-[#997819] to-transparent animate-bounce" />
      </section>
      {/* Section 2 */}
      <section className="bg-white dark:bg-[#020410] py-32 transition-colors duration-500 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            {/* --- Left Side: Content --- */}
            <div className="flex-1 order-2 lg:order-1">
              <FadeIn direction="right">
                <div className="flex items-center gap-3 mb-8">
                  <span className="w-2 h-2 rounded-full bg-[#997819]" />
                  <span className="text-[#997819] font-black uppercase tracking-[0.4em] text-[10px]">
                    The Challenge
                  </span>
                </div>

                <h2 className="text-[#12066a] dark:text-white text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9] mb-10">
                  The Hardest Part
                  <span className="text-[#997819] italic font-light ml-1">
                    Of Starting
                  </span>{" "}
                  <br />
                  Is The Execution
                </h2>

                <div className="space-y-6 max-w-xl">
                  <p className="text-xl md:text-2xl font-bold text-[#12066a] dark:text-white leading-tight">
                    The hardest part of starting a podcast is knowing how to
                    bring everything together professionally.
                  </p>

                  <div className="h-px w-20 bg-[#997819]/30" />

                  <p className="text-gray-500 dark:text-white/40 text-lg leading-relaxed">
                    Most businesses already know what they want to say. The
                    challenge is usually turning those ideas into a podcast that
                    feels{" "}
                    <span className="text-[#997819] font-bold">
                      clear, professional,
                    </span>{" "}
                    and ready for people to take seriously.
                  </p>
                </div>

                <div className="mt-12">
                  <div className="inline-flex items-center gap-4 group cursor-pointer">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#12066a] dark:text-white group-hover:text-[#997819] transition-colors">
                      Let's bridge the gap
                    </span>
                    <div className="w-10 h-10 rounded-full border border-gray-200 dark:border-white/10 flex items-center justify-center group-hover:bg-[#997819] group-hover:border-[#997819] transition-all">
                      <ArrowRight
                        size={16}
                        className="group-hover:text-white"
                      />
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* --- Right Side: Image --- */}
            <div className="flex-1 order-1 lg:order-2 w-full">
              <FadeIn direction="left">
                <div className="relative group">
                  {/* Main Image Container */}
                  <div className="rounded-[4rem] overflow-hidden shadow-2xl h-[450px] md:h-[600px] border border-gray-100 dark:border-white/5 relative z-10">
                    <img
                      src="/podcast-execution.jpg" // Yahan apni image ka path dain
                      alt="Professional Podcast Setup"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-[#12066a]/10 group-hover:bg-transparent transition-colors duration-500" />
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#997819]/10 rounded-full blur-3xl animate-pulse" />
                  <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-[#12066a]/5 rounded-full blur-3xl" />

                  {/* Floating Badge */}
                  <div className="absolute bottom-12 left-5 bg-white dark:bg-[#080808] p-8 rounded-3xl shadow-2xl border border-gray-100 dark:border-white/5 z-20 hidden md:block">
                    <p className="text-[#997819] font-black text-xs uppercase tracking-widest mb-1">
                      Status
                    </p>
                    <p className="text-[#12066a] dark:text-white font-bold">
                      Execution Ready
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
      {/* Section 3 */}
      <section className="bg-white dark:bg-[#020410] py-32 transition-colors duration-500 overflow-hidden font-sans">
        <div className="max-w-5xl mx-auto px-6">
          {/* --- Header Section --- */}
          <div className="mb-24 text-center">
            <FadeIn direction="up">
              <div className="flex items-center justify-center gap-3 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#997819] animate-pulse" />
                <span className="text-[#997819] font-black uppercase tracking-[0.4em] text-[10px]">
                  What’s Included
                </span>
              </div>
              <h2 className="text-[#12066a] dark:text-white text-5xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9] mb-8">
                Everything You Need <br />
                <span className="text-[#997819] mr-1">To Launch</span>{" "}
                Professionally
              </h2>
              <p className="text-gray-500 dark:text-white/40 text-lg font-medium max-w-2xl mx-auto leading-relaxed italic">
                A seamless flow designed to take your podcast from idea to
                reality without the stress.
              </p>
            </FadeIn>
          </div>

          {/* --- Timeline Flow --- */}
          <div className="relative space-y-12">
            {/* Central Vertical Connector Line */}
            <div className="absolute left-6 md:left-1/2 top-0 w-px h-full bg-gray-100 dark:bg-white/5 -translate-x-1/2 z-0 hidden md:block" />

            {steps.map((step, index) => (
              <FadeIn
                key={index}
                direction={index % 2 === 0 ? "right" : "left"}
              >
                <div
                  className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-20 ${
                    index % 2 !== 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Content Side */}
                  <div className="flex-1 w-full group">
                    <div className="p-10 rounded-[3rem] bg-gray-50 dark:bg-white/[0.02] border border-gray-100 dark:border-white/5 hover:border-[#997819]/30 transition-all duration-500 shadow-sm hover:shadow-xl">
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
                  <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-2xl bg-[#12066a] dark:bg-[#997819] flex items-center justify-center text-white dark:text-[#12066a] shadow-xl shadow-[#12066a]/20 dark:shadow-[#997819]/20 transform transition-transform group-hover:rotate-12 group-hover:scale-110">
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
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                System Optimized for Excellence
              </span>
            </div>
          </div>
        </div>
      </section>
      {/* Section 4 */}
      <section className="bg-white dark:bg-[#030303] py-32 transition-colors duration-500 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          {/* --- Header Section --- */}
          <div className="mb-24 text-center">
            <FadeIn direction="up">
              <div className="flex justify-center items-center gap-3 mb-6">
                <span className="w-12 h-[1px] bg-[#997819]" />
                <span className="text-[#997819] font-black uppercase tracking-[0.4em] text-[10px]">
                  The Blueprint
                </span>
              </div>
              <h2 className="text-[#12066a]  dark:text-white text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.85] mb-8">
                How It <br />{" "}
                <span className="text-[#997819] italic font-light">Works</span>
              </h2>
              <p className="text-gray-500 mx-auto dark:text-white/40 text-lg font-medium max-w-xl leading-relaxed">
                A Clear And Professional Process From Start To Launch
              </p>
            </FadeIn>
          </div>

          {/* --- Steps Grid --- */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                id: "01",
                icon: <PhoneCall size={24} />,
                title: "Strategy Call",
                desc: "We discuss your podcast idea, audience, format, and the direction you want your brand to communicate through the show.",
                color: "bg-blue-50/50 dark:bg-white/[0.02]",
              },
              {
                id: "02",
                icon: <Mic size={24} />,
                title: "Studio Sessions",
                desc: "You come into a professionally prepared studio environment while we handle the cameras, audio, production setup, and recording experience.",
                color: "bg-gray-50 dark:bg-white/[0.04]",
              },
              {
                id: "03",
                icon: <Settings size={24} />,
                title: "We Produce It",
                desc: "From editing and branded presentation to short-form content and overall refinement, our team manages the production process for you.",
                color: "bg-[#12066a] text-white",
              },
              {
                id: "04",
                icon: <Rocket size={24} />,
                title: "You Go Live",
                desc: "Your podcast is professionally prepared for major platforms with everything organised for a smoother and more confident launch experience.",
                color: "bg-gray-50 dark:bg-white/[0.04]",
              },
            ].map((step, index) => (
              <FadeIn key={index} delay={index * 0.1} direction="up">
                <div
                  className={`group relative p-10 h-full rounded-[2.5rem] transition-all duration-500 hover:-translate-y-2 ${step.color} border border-gray-100 dark:border-white/5`}
                >
                  {/* Number Background */}
                  <span className="absolute top-8 right-8 text-6xl font-black opacity-5 group-hover:opacity-10 transition-opacity">
                    {step.id}
                  </span>

                  {/* Icon Box */}
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-12 shadow-lg transition-transform duration-500 group-hover:rotate-[10deg] ${index === 2 ? "bg-[#997819] text-[#12066a]" : "bg-white dark:bg-[#080808] text-[#997819]"}`}
                  >
                    {step.icon}
                  </div>

                  <div className="relative z-10">
                    <h3 className="text-xl font-black uppercase tracking-tight mb-4 group-hover:text-[#997819] transition-colors">
                      {step.title}
                    </h3>
                    <p
                      className={`text-sm leading-relaxed ${index === 2 ? "text-white/60" : "text-gray-500 dark:text-white/40"}`}
                    >
                      {step.desc}
                    </p>
                  </div>

                  {/* Bottom Accent */}
                  <div className="absolute bottom-10 left-10 w-0 h-[2px] bg-[#997819] group-hover:w-12 transition-all duration-500" />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      {/* Section 5 */}
      <section className="bg-white dark:bg-[#030303] py-32 transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-6">
          {/* --- Header Section (Centered) --- */}
          <div className="mb-24 text-center">
            <FadeIn direction="up">
              <div className="flex items-center justify-center gap-3 mb-6">
                <span className="w-12 h-[1px] bg-[#997819]" />
                <span className="text-[#997819] font-black uppercase tracking-[0.4em] text-[10px]">
                  Target Audience
                </span>
                <span className="w-12 h-[1px] bg-[#997819]" />
              </div>
              <h2 className="text-[#12066a] dark:text-white text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.85] mb-8">
                Who This Is <br />{" "}
                <span className="text-[#997819] italic font-light">For</span>
              </h2>
              <p className="text-gray-500 dark:text-white/40 text-lg font-medium max-w-3xl mx-auto leading-relaxed italic">
                Designed For Businesses And Professionals Ready To Build A More
                Recognisable Voice
              </p>
            </FadeIn>
          </div>

          {/* --- Cards Grid --- */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Founders & Owners",
                desc: "Founders and business owners are preparing to launch a podcast that reflects their brand more professionally.",
              },
              {
                title: "Growing Businesses",
                desc: "Growing businesses want a stronger content presence and more established industry positioning.",
              },
              {
                title: "Experts & Speakers",
                desc: "Consultants, advisors, and speakers are creating a platform around their expertise and professional insight.",
              },
              {
                title: "Leadership Teams",
                desc: "Leadership teams are producing conversation-led content designed to strengthen brand perception.",
              },
              {
                title: "Service-Based Firms",
                desc: "Service-based businesses wanting media that supports stronger audience trust and better enquiries.",
              },
              {
                title: "The Procrastinators",
                desc: 'Anyone who has been "meaning to start a podcast" for too long and is ready to take professional action.',
              },
            ].map((item, index) => (
              <FadeIn key={index} delay={index * 0.05} direction="up">
                <div className="group relative p-10 h-full rounded-[2rem] bg-gray-50 dark:bg-white/[0.02] border border-gray-100 dark:border-white/5 hover:border-[#997819]/30 transition-all duration-500">
                  {/* Minimalist Icon/Dot */}
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-2 h-2 rounded-full bg-[#997819] group-hover:scale-150 transition-transform duration-500" />
                    <div className="h-[1px] w-8 bg-gray-200 dark:bg-white/10 group-hover:w-16 transition-all duration-500" />
                  </div>

                  <h3 className="text-xl font-black uppercase tracking-tight text-[#12066a] dark:text-white mb-4 transition-colors group-hover:text-[#997819]">
                    {item.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-gray-500 dark:text-white/40 font-medium">
                    {item.desc}
                  </p>

                  {/* Corner Accent */}
                  <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden rounded-tr-[2rem]">
                    <div className="absolute top-[-20px] right-[-20px] w-10 h-10 bg-[#997819]/10 rotate-45 group-hover:bg-[#997819]/20 transition-colors" />
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* --- Bottom Trust Line --- */}
          <div className="mt-20 flex justify-center">
            <FadeIn direction="up">
              <p className="text-[10px] text-center font-black uppercase tracking-[0.5em] text-[#997819]/80">
                Built for growth • Built for authority
              </p>
            </FadeIn>
          </div>
        </div>
      </section>
      {/* CTA */}
      <section className="bg-white dark:bg-[#030303] py-24 px-6 md:px-20 lg:px-40 transition-colors duration-500">
        {/* --- The Floating Card Container --- */}
        <div className="relative w-full rounded-[3rem] md:rounded-[4rem] overflow-hidden min-h-[650px] flex items-center justify-center shadow-2xl group">
          {/* --- Parallax Background --- */}
          <div
            className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-1000 "
            style={{
              backgroundImage: `url('/pkg-hero-2.jpg')`,
              backgroundAttachment: "fixed", // Ye parallax create karta hai
              backgroundPosition: "center",
            }}
          />

          {/* --- Contrast Overlay --- */}
          <div className="absolute inset-0 bg-black/70 z-10" />

          {/* --- Content --- */}
          <div className="relative z-20 max-w-4xl mx-auto px-8 py-24 text-center">
            <FadeIn direction="up">
              {/* Aesthetic Badge */}
              <div className="inline-flex items-center gap-3 px-6 py-2 border border-[#997819]/40 rounded-full mb-12 backdrop-blur-md bg-black/20">
                <span className="w-2 h-2 rounded-full bg-[#997819] animate-pulse" />
                <span className="text-[#997819] font-black uppercase tracking-[0.5em] text-[10px]">
                  Take The Leap
                </span>
              </div>

              <h2 className="text-white text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-10 drop-shadow-lg">
                Launch is only <br />
                <span className="text-[#997819] italic font-light">
                  the beginning.
                </span>
              </h2>

              <p className="text-white/60 text-lg md:text-xl mb-14 max-w-2xl mx-auto leading-relaxed font-medium italic">
                "BizGrow Media is a trusted name that helps you establish a
                clear, confident presence from the very beginning."
              </p>

              {/* CTA Button Style from image_39649c.jpg */}
              <button className="group relative px-14 py-6 bg-[#997819] text-white font-black uppercase tracking-[0.2em] text-xs rounded-2xl overflow-hidden transition-all hover:shadow-[0_20px_50px_rgba(153,120,25,0.4)]">
                <span className="relative z-10 flex items-center gap-3">
                  Start Building The Right Way{" "}
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-2 transition-transform"
                  />
                </span>
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PremiumPackagesPage;
