"use client";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import FadeIn from "./MotionWrapper";

export default function VShapeTransition() {
  const sectionRef = useRef(null);

  // 1. Line ke liye alag scroll tracking (Viewport base)
  const { scrollYProgress: lineProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center start"], // Jab section viewport mein enter ho
  });

  // 2. V-Shape ke liye aapki existing logic
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 40,
    restDelta: 0.0001
  });

  // LINE LOGIC: Viewport mein aate hi height 0 se 200px tak jayegi
  const lineHeight = useTransform(lineProgress, [0, 0.5], ["0px", "200px"]);

  const clipPath = useTransform(
    smoothProgress,
    [0, 0.01, 1],
    [
      "polygon(-100% 0%, 100% 0%, 100% 250%, 0% 150%)", 
      "polygon(0% 0%, 100% 0%, 50% 100%, 50% 100%)",
      "polygon(50% 0%, 50% 0%, 50% 0%, 50% 0%)"
    ]
  );

  return (
    <section ref={sectionRef} className="relative h-[200vh] bg-[#E5E5E5]">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        <motion.div
          style={{ clipPath }}
          className="relative w-full h-full bg-black flex flex-col items-center justify-center text-white"
        >
          {/* --- DYNAMIC LINE (Viewport Triggered) --- */}
          <motion.div 
            style={{ height: lineHeight }} 
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] bg-white/40 origin-top z-20" 
          />

          {/* CONTENT */}
          <div className="max-w-4xl px-5 -mt-15 text-center z-10">
             
             <FadeIn direction="up" delay={0.3}>
            <p className="text-sm md:text-lg uppercase tracking-[0.3em] opacity-80">
               We don’t believe in one-size-fits-all services. Every solution at BizGrow Media is carefully built around your brand and your audience's requirements.
            </p>
            </FadeIn>
          </div>
        </motion.div>
      </div>
    </section>
  );
}