"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const creativeSlides = [
  {
    num: "01",
    title: "Studio Production",
    category: "Visual Architecture",
    desc: "Video production, editing & complete content creation support",
    img: "/studio-production.webp",
  },
  {
    num: "02",
    title: "Content Engine",
    category: "Strategic Systems",
    desc: "High-quality, structured content that delivers value",
    img: "/content-eng.jpg",
  },
  {
    num: "03",
    title: "Authority Builder",
    category: "Market Dominance",
    desc: "Personal and business branding through media presence",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
  },
  {
    num: "04",
    title: "Growth Engine",
    category: "Scale & Revenue",
    desc: "Focused on visibility, leads, and long-term business growth",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
  },
];

export default function KineticStudioHeroAuto() {
  const [activeTab, setActiveTab] = useState(0);

  // Auto-play interval logic (changes every 6 seconds)
  const nextSlide = useCallback(() => {
    setActiveTab((prev) => (prev === creativeSlides.length - 1 ? 0 : prev + 1));
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const current = creativeSlides[activeTab];

  return (
    <section className="relative min-h-screen w-full bg-[#02040a] text-white flex flex-col justify-between overflow-hidden px-4 sm:px-6 md:px-16 py-8 md:py-12 selection:bg-[#997819] selection:text-white">
      
      {/* Background Cinematic Image with Snappy & Smooth Fade */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
            animate={{ opacity: 0.25, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 0.98, filter: "blur(10px)" }}
            transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={current.img}
              alt={current.title}
              fill
              sizes="100vw"
              className="object-cover object-center grayscale contrast-125"
              priority
              unoptimized={current.img.startsWith("http")}
            />
            {/* Dark immersive gradients with your custom linear colors */}
            <div className="absolute inset-0 bg-linear-to-t from-[#12066a] via-[#12066a]/20 to-transparent" />
            <div className="absolute inset-0 bg-linear-to-r from-[#12066a] via-transparent to-[#12066a]/80" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* TOP BAR BRANDING */}
      <div className="relative z-10 flex items-center justify-between w-full border-b border-white/10 pb-4 md:pb-6">
        <div className="flex items-center gap-2 md:gap-3">
          <span className="w-2 h-2 rounded-full bg-[#997819] animate-ping" />
          <span className="text-[10px] sm:text-xs font-mono tracking-[0.2em] sm:tracking-[0.4em] uppercase text-white/60">
            BizGrow Media // 2026
          </span>
        </div>
        <div className="hidden md:flex items-center gap-2 text-xs font-mono text-[#997819]">
          <span>[ AUTOMATED CINEMATIC ARCHITECTURE ]</span>
        </div>
      </div>

      {/* MAIN KINETIC CENTER STAGE */}
      <div className="relative z-10 my-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center py-10 md:py-16">
        
        {/* Left Side: Massive Live Typography */}
        <div className="lg:col-span-8 flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
            >
              <div className="flex items-center gap-3 mb-3 md:mb-4">
                <span className="text-[#997819] font-mono text-xs sm:text-sm tracking-widest font-bold">
                  {current.num}
                </span>
                <span className="h-[1px] w-8 sm:w-12 bg-[#997819]/50" />
                <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] font-mono text-white/50">
                  {current.category}
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight uppercase leading-[1.1] mb-6 md:mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-white/40 whitespace-normal sm:whitespace-nowrap">
                {current.title}
              </h1>

              <p className="text-slate-400 text-base sm:text-lg md:text-xl font-light max-w-2xl leading-relaxed mb-8 md:mb-10">
                {current.desc}
              </p>

              <Link href="/our-media-services">
                <motion.button
                  whileHover={{ scale: 1.05, x: 10 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-6 sm:px-8 py-4 rounded-full bg-white text-black font-black text-xs uppercase tracking-[0.3em] hover:bg-[#997819] hover:text-white transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.1)] text-center"
                >
                  Explore Ecosystem →
                </motion.button>
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Side: Interactive / Active Progress Indicator Stack */}
        <div className="lg:col-span-4 flex flex-col gap-2.5 sm:gap-3 lg:border-l lg:border-white/10 lg:pl-8">
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/40 mb-1 sm:mb-2">
            Active Ecosystem Rotation
          </span>
          {creativeSlides.map((slide, idx) => {
            const isActive = activeTab === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`group text-left py-3.5 sm:py-4 px-4 sm:px-6 rounded-2xl transition-all duration-500 relative overflow-hidden flex items-center justify-between ${
                  isActive
                    ? "bg-white/10 border border-[#997819]/60 backdrop-blur-md shadow-2xl"
                    : "bg-white/[0.02] border border-white/5 hover:bg-white/[0.05]"
                }`}
              >
                {/* Active Glow line */}
                {isActive && (
                  <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#997819]" />
                )}

                <div className="flex items-center gap-3 sm:gap-4">
                  <span className={`font-mono text-xs ${isActive ? "text-[#997819] font-bold" : "text-white/30"}`}>
                    {slide.num}
                  </span>
                  <span className={`text-xs sm:text-sm font-bold uppercase tracking-wide transition-colors ${isActive ? "text-white" : "text-white/60 group-hover:text-white"}`}>
                    {slide.title}
                  </span>
                </div>

                <div className={`w-2 h-2 rounded-full transition-all ${isActive ? "bg-[#997819] scale-125 shadow-[0_0_10px_#997819]" : "bg-white/20"}`} />
              </button>
            );
          })}
        </div>

      </div>

      {/* BOTTOM FOOTER METRICS */}
      <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 border-t border-white/10 pt-4 md:pt-6 text-[11px] sm:text-xs font-mono text-white/40">
        <div>
          <span className="block text-white font-bold text-xs sm:text-sm">01 / CINEMATIC</span>
          High-End Production
        </div>
        <div>
          <span className="block text-white font-bold text-xs sm:text-sm">02 / SYSTEMS</span>
          Automated Loops
        </div>
        <div className="hidden sm:block">
          <span className="block text-white font-bold text-xs sm:text-sm">03 / AUTHORITY</span>
          Market Presence
        </div>
        <div className="text-right hidden md:block">
          <span className="text-[#997819] font-bold">BIZGROW MEDIA © 2026</span>
        </div>
      </div>

    </section>
  );
}