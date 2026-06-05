"use client";
import { motion, useTransform, useSpring, useMotionValue } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import FadeIn from "./MotionWrapper";
import Link from "next/link";

const HorizontalProcess = () => {
  const containerRef = useRef(null);
  const [isVertical, setIsVertical] = useState(false);

  // Responsive check
  useEffect(() => {
    const check = () => setIsVertical(window.innerWidth < 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const progress = useMotionValue(0);

  useEffect(() => {
    const update = () => {
      // ✅ SAFE CHECK: Component mount hone se pehle error nahi aayega
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const sectionHeight = containerRef.current.offsetHeight;
      const pinnedDistance = sectionHeight - window.innerHeight;
      const current = -rect.top;
      const value = pinnedDistance > 0 ? Math.min(Math.max(current / pinnedDistance, 0), 1) : 0;
      progress.set(value);
    };

    update();
    
    // Performance optimization: Using requestAnimationFrame
    const handleEvent = () => requestAnimationFrame(update);

    window.addEventListener("resize", handleEvent);
    window.addEventListener("scroll", handleEvent);
    window.addEventListener("lenisScroll", handleEvent);

    return () => {
      window.removeEventListener("resize", handleEvent);
      window.removeEventListener("scroll", handleEvent);
      window.removeEventListener("lenisScroll", handleEvent);
    };
  }, [progress]);

  const smooth = useSpring(progress, {
    stiffness: 80,
    damping: 25,
  });

  const sections = [
    {
      id: "Step 1",
      title: "Studio Hire",
      tag: "ENVIRONMENTS",
      img: "/with people.jpeg",
      altText: "Studio hire - BizGrow Media",
      description: <>Step into a professionally designed <Link href="/studio-production" className="text-[#997819] font-bold">studio</Link> space created for podcasts, interviews, and high-quality business content.</>,
    },
    {
      id: "Step 2",
      title: "Launch Package",
      tag: "FOUNDATION",
      img: "/pakages.jpg",
      altText: "Launch package - BizGrow Media",
      description: <>BizGrow Media helps your brand start with professionally structured launch <Link href="/packages" className="text-[#997819] font-bold">packages</Link> and content designed to create a clear media presence.</>,
    },
    {
      id: "Step 3",
      title: "Content Engine",
      tag: "CONSISTENCY",
      img: "/content.jpg",
      altText: "Content engine - BizGrow Media",
      description: <>BizGrow Media keeps your brand active with regular <Link href="/content-engine" className="text-[#997819] font-bold">content</Link> that feels natural and keeps people connected to your brand.</>,
    },
    {
      id: "Step 4",
      title: "Authority Builder",
      tag: "POSITIONING",
      img: "/authority-builder.jpg",
      altText: "Authority builder - BizGrow Media",
      description: <>Develop a <Link href="/authority-builder" className="text-[#997819] font-bold">stronger market presence</Link> through professional positioning and strategic media exposure.</>,
    },
    {
      id: "Step 5",
      title: "Media Partner",
      tag: "GROWTH",
      img: "/camera behind.jpeg",
      altText: "BizGrow Media Partner",
      description: <>BizGrow Media stays with you for the long run, supporting your <Link href="/growth-engine" className="text-[#997819] font-bold">brand</Link> as it grows with ongoing media support.</>,
    },
  ];

  const totalSlides = sections.length;
  const sectionHeightVh = isVertical ? "auto" : totalSlides * 120;
  const trackWidth = totalSlides * 100 + "vw";

  const x = useTransform(
    smooth,
    [0, 0.12, 0.22, 0.34, 0.44, 0.56, 0.66, 0.78, 0.88, 1],
    ["0vw", "0vw", "-100vw", "-100vw", "-200vw", "-200vw", "-300vw", "-300vw", "-400vw", "-400vw"]
  );

  return (
    <section
      ref={containerRef}
      style={{ height: isVertical ? "auto" : sectionHeightVh + "vh" }}
      className="relative bg-white dark:bg-gray-800 overflow-visible py-16 lg:py-0"
    >
      <div className={`${isVertical ? "relative" : "sticky top-0 h-screen w-full flex items-center overflow-hidden"}`}>
        <div className={`${isVertical ? "relative mb-16" : "absolute top-20 left-0 w-full z-20 pointer-events-none"}`}>
          <div className="text-center px-4">
            <FadeIn direction="up">
              <h3 className="text-[#997819] mt-4 font-bold tracking-[0.5em] text-xs md:text-sm mb-2">OUR APPROACH</h3>
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
              <h2 className="text-3xl md:text-5xl lg:text-5xl dark:text-white font-black text-[#12066A] uppercase">
                The BizGrow Media Ecosystem
              </h2>
            </FadeIn>
            <div className="w-12 h-1 bg-[#997819] mx-auto mt-4 rounded-full" />
          </div>
        </div>

        <div className="relative h-full w-full overflow-hidden">
          <motion.div
            style={{ x: isVertical ? 0 : x, width: isVertical ? "auto" : trackWidth }}
            className={`flex ${isVertical ? "flex-col px-6 gap-24 py-20" : "mt-8 h-full will-change-transform"}`}
          >
            {sections.map((item) => (
              <div
                key={item.id}
                className={`relative flex-shrink-0 flex flex-col lg:flex-row items-center justify-between 
                ${isVertical ? "w-full max-w-4xl mx-auto" : "h-screen w-screen p-10 lg:pt-40"}`}
              >
                <div className="z-10 w-full lg:w-1/2 mb-10 lg:mb-0 text-center lg:text-left">
                  <FadeIn direction={isVertical ? "up" : "right"}>
                    <span className="text-[#997819] font-bold tracking-[0.3em] uppercase text-sm md:text-base">
                      {item.id} {item.tag}
                    </span>
                  </FadeIn>
                  <FadeIn direction={isVertical ? "up" : "right"} delay={0.2}>
                    <h3 className="text-4xl sm:text-6xl font-black dark:text-white text-[#12066A] leading-none mt-4 uppercase">
                      {item.title}
                    </h3>
                  </FadeIn>
                  <FadeIn direction={isVertical ? "up" : "right"} delay={0.4}>
                    <p className="mt-6 text-lg md:text-lg dark:text-gray-300 text-black max-w-md mx-auto lg:mx-0 leading-relaxed">
                      {item.description}
                    </p>
                  </FadeIn>
                </div>

                <div className="w-full lg:w-1/2 h-[35vh] sm:h-[45vh] lg:h-[60vh] relative group">
                  <img
                    src={item.img}
                    alt={item.altText}
                    className="w-full h-full object-cover rounded-[2rem] shadow-2xl relative z-10 transition-all duration-500"
                  />
                  <div className="absolute -bottom-6 -left-4 sm:-bottom-10 sm:-left-10 text-[6rem] sm:text-[9rem] lg:text-[11rem] font-black text-slate-200 dark:text-white/5 z-0 opacity-50">
                    {item.id.split(" ")[1]}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HorizontalProcess;