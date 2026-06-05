"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function BizGrowWhySection() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"],
  });

  const width = useTransform(scrollYProgress, [0, 1], ["85%", "100%"]);
  const borderRadius = useTransform(scrollYProgress, [0, 1], ["40px", "0px"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 0.9, 1]);

  const points = [
    "Professional studio environments for podcasts & interviews",
    "Value-driven content to keep your brand professionally active",
    "Personal & business branding for a stronger industry presence",
    "Growth-focused media support to attract better opportunities",
    "Clearer understanding of your audience & business direction",
    "Organised production process with professional support",
    "Flexible media solutions shaped around your brand growth",
    "Strategic media designed to communicate more professionally",
  ];

  return (
    <div ref={containerRef} className="h-[150vh] md:h-[250vh] bg-white dark:bg-gray-900 relative">
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ width, borderRadius, scale }}
          // md:rounded-[40px] desktop pe apply hoga, w-full h-full mobile pe fill karega
          className="relative w-full h-full md:h-[90vh] mt-40 md:mt-0 lg:h-screen bg-[#050505] flex flex-col items-center justify-center overflow-hidden shadow-2xl md:rounded-[40px]"
        >
          {/* Background Video with Overlay */}
          <video
            src="/v-shape.mp4"
            autoPlay loop muted playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80" />

          {/* Content Layer */}
          <div className="relative z-10 w-full max-w-6xl px-6">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              // mobile pe mb-8, desktop pe mb-16
              className="text-center mb-8 md:mb-16"
            >
              <span className="text-[#997819] font-black uppercase tracking-[0.3em] md:tracking-[0.5em] text-[9px] md:text-[10px] mb-4 block">
                The Partnership Advantage
              </span>
              <h2 className="text-white text-3xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9]">
                Why Businesses Work With <br className="hidden md:block"/>
                <span className="text-[#997819] italic">BizGrow Media</span>
              </h2>
            </motion.div>

            {/* Grid for Points: Mobile pe 1 column, Desktop pe 2 columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 md:gap-y-6">
              {points.map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  // mobile pe text-xs, desktop pe text-base
                  className="flex items-center gap-4 border-l border-[#997819]/30 pl-4 py-2 hover:bg-white/5 transition-colors"
                >
                  <div className="w-1.5 h-1.5 bg-[#997819] rounded-full shrink-0" />
                  <p className="text-white/80 text-xs md:text-base font-medium tracking-tight">
                    {point}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}