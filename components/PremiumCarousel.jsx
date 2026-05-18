"use client";
import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const slides = [
  {
    title: "STUDIO",
    sub: "PRODUCTION",
    desc: "Video production, editing & complete content creation support",
    img: "/studio-production.webp",
  },
  {
    title: "CONTENT",
    sub: "ENGINEERING",
    desc: "High-quality, structured content that delivers value",
    img: "/content-eng.jpg",
  },
  {
    title: "AUTHORITY",
    sub: "BUILDER",
    desc: "Personal and business branding through media presence",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "GROWTH",
    sub: "ENGINE",
    desc: "Focused on visibility, leads, and long-term business growth",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
  },
];

export default function LuxuryGridSlider() {
  const [index, setIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const currentSlide = slides[index] || slides[0];

  return (
    <section className="relative h-[85vh] md:h-screen w-full bg-[#000B25] flex items-center overflow-hidden">
      {/* 1. BACKGROUND IMAGES LAYER */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "linear" }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={currentSlide.img}
              alt={`${currentSlide.title} ${currentSlide.sub}`}
              fill
              sizes="100vw"
              className="object-cover object-center contrast-[110%] brightness-[0.9]"
              priority={index === 0}
              loading={index === 0 ? "eager" : "lazy"}
              fetchPriority={index === 0 ? "high" : "low"}
              unoptimized={currentSlide.img.startsWith("http")}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#000B25] via-[#000B25]/40 to-transparent" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 2. MAIN CONTENT GRID */}
      <div className="relative z-10 w-full px-6 md:px-24 grid grid-cols-12 h-full items-center">
        {/* Left Indicator */}
        <div className="col-span-1 hidden md:flex flex-col gap-6 items-start justify-center h-full border-l border-white/5 pl-8">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={index === i ? "true" : "false"}
              className="relative flex items-center h-12 group transition-all"
            >
              <span
                className={`text-[10px] font-black tracking-widest absolute -left-2 transition-colors duration-500 ${index === i ? "text-[#997819]" : "text-white/20 group-hover:text-white"}`}
              >
                {`0${i + 1}`}
              </span>
              <motion.div
                animate={{
                  height: index === i ? "48px" : "4px",
                  backgroundColor: index === i ? "#997819" : "rgba(255,255,255,0.1)",
                  x: 35,
                }}
                className="w-[2px] transition-all duration-700"
              />
            </button>
          ))}
        </div>

        {/* Center Content */}
        <div className="col-span-12 md:col-span-11 lg:col-span-9 mt-12 md:mt-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              // 🚀 SMART SOLUTION: Pehli slide load hote waqt dynamic entry band (0ms delay), 
              // lekin agli slides par transition smooth fade-in karegi!
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
            >
              <div className="flex items-center gap-4 mt-20 mb-6">
                <span className="w-10 h-[1px] bg-[#997819]"></span>
                <h2 className="text-[#997819] text-[9px] md:text-[11px] font-black tracking-[0.4em] uppercase">
                  BIZGROW MEDIA PREMIUM
                </h2>
              </div>

              <h1 className="text-5xl md:text-[8vw] font-black leading-[0.85] text-white tracking-tighter mb-8 uppercase">
                {currentSlide.title} <br />
                <span
                  className="text-transparent italic font-serif font-light block mt-2"
                  style={{ WebkitTextStroke: "1px #997819" }}
                >
                  {currentSlide.sub}
                </span>
              </h1>

              <p className="max-w-xl text-white/60 text-base md:text-xl font-medium leading-relaxed mb-12 italic border-l-2 border-[#997819]/30 pl-6">
                {currentSlide.desc}
              </p>

              <Link href="/our-media-services" passHref legacyBehavior>
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-block relative overflow-hidden group border border-[#997819]/50 px-12 py-5 rounded-2xl bg-transparent cursor-pointer"
                >
                  <span className="relative z-10 text-white text-[11px] font-black tracking-[0.4em] group-hover:text-white duration-500">
                    EXPLORE ECOSYSTEM
                  </span>
                  <div className="absolute inset-0 bg-[#997819] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                </motion.a>
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}