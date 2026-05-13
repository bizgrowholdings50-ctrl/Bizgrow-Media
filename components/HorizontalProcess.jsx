"use client";
import { motion, useTransform, useScroll, useSpring } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import FadeIn from "./MotionWrapper";
import Link from "next/link";

const HorizontalProcess = () => {
  const targetRef = useRef(null);
  const [isVertical, setIsVertical] = useState(false);

  // Tablet (1024px) aur mobile dono ke liye vertical layout activate karega
  useEffect(() => {
    const handleResize = () => setIsVertical(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 30,
    restDelta: 0.001,
  });

  // Desktop horizontal movement logic (Fixed for 5 sections)
 const x = useTransform(
  smoothProgress,
  [
    0,
    0.1,

    0.2,
    0.3,

    0.4,
    0.5,

    0.6,
    0.7,

    0.8,
    0.9,
    1,
  ],
  [
    "0vw",
    "0vw",

    "-100vw",
    "-100vw",

    "-200vw",
    "-200vw",

    "-300vw",
    "-300vw",

    "-400vw",
    "-400vw",
    "-400vw",
  ]
);

  const sections = [
    {
      id: "Step 1",
      title: "Studio Hire",
      tag: "ENVIRONMENTS", // Professional aur physical space ko represent karta hai
      img: "/with people.jpeg",
      altText: "Studio hire - BizGrow Media",
      description:
        <>Step into a professionally designed <Link href="/studio-production" className="text-[#997819] font-bold">studio</Link> space created for podcasts, interviews, and high-quality business content in a comfortable production environment.</>,
    },
    {
      id: "Step 2",
      title: "Launch Package",
      tag: "FOUNDATION", // Brand start karne ke liye 'Foundation' zyada solid lagta hai
      img: "/pakages.jpg",
      altText: "Launch package - BizGrow Media",
      description:
        <>BizGrow Media helps your brand start with professionally structured launch <Link href="/packages" className="text-[#997819] font-bold">packages</Link>, strong visuals, and content designed to create a clear and organised media presence</>,
    },
    {
      id: "Step 3",
      title: "Content Engine",
      tag: "CONSISTENCY", // Content Engine ka asal maqsad 'Consistency' maintain karna hai
      img: "/content.jpg",
      altText: "Content engine - BizGrow Media",
      description:
        <>BizGrow Media keeps your brand active with regular <Link href="/content-engine" className="text-[#997819] font-bold">content</Link> that feels natural and easy to follow. The goal is simple: stay visible and keep people connected to your brand</>,
    },
    {
      id: "Step 4",
      title: "Authority Builder",
      tag: "POSITIONING", // Market mein authority banana 'Positioning' kehlata hai
      img: "/authority-builder.jpg",
      altText: "Authority builder - BizGrow Media",
      description:
        <>Develop a <Link href="/authority-builder" className="text-[#997819] font-bold">stronger market presence</Link> through professional positioning, refined branding, and strategic media exposure.</>,
    },
    {
      id: "Step 5",
      title: "Media Partner",
      tag: "GROWTH", // Long-term partnership ka end goal hamesha 'Growth' hota hai
      img: "/camera behind.jpeg",
      altText: "BizGrow Media Partner",
      description:
        <>BizGrow Media stays with you for the long run, supporting your <Link href="/growth-engine" className="text-[#997819] font-bold">brand</Link> as it grows. You get ongoing media support that helps you build stronger reach and real opportunities over time.</>,
    },
  ];

  const sectionHeightVh = isVertical ? "auto" : (sections.length + 1) * 100;

  return (
    <section
      ref={targetRef}
      style={{ height: isVertical ? "auto" : `${sectionHeightVh}vh` }}
      className="relative bg-white dark:bg-black overflow-visible py-16 lg:py-0"
    >
      {/* Sticky sirf Laptop (lg: 1024px+) screens par chalega */}
      <div
        className={`${
          isVertical
            ? "relative"
            : "sticky top-0 h-screen w-full flex items-center dark:border-t-2 dark:border-orange-700 overflow-hidden"
        }`}
      >
        {/* --- MAIN HEADING --- */}
        <div
          className={`${
            isVertical
              ? "relative mb-16"
              : "absolute top-20 left-0 w-full z-20 pointer-events-none"
          }`}
        >
          <div className="text-center px-4">
            <FadeIn direction="up">
              <h3 className="text-[#997819] mt-4 font-bold tracking-[0.5em] text-xs md:text-sm mb-2">
                OUR APPROACH
              </h3>
            </FadeIn>

            <FadeIn direction="up" delay={0.2}>
              <h2 className="text-3xl md:text-5xl lg:text-5xl dark:text-white font-black text-[#12066A] uppercase">
                The BizGrow Media Ecosystem
              </h2>
            </FadeIn>
            <div className="w-12 h-1 bg-[#997819] mx-auto mt-4 rounded-full" />
          </div>
        </div>

        {/* --- CONTENT WRAPPER --- */}
        <motion.div
          style={{ x: isVertical ? 0 : x }}
          className={`flex ${
            isVertical
              ? "flex-col px-6 gap-24 sm:gap-32"
              : "will-change-transform"
          }`}
        >
          {sections.map((item) => (
            <div
              key={item.id}
              className={`relative flex-shrink-0 mt-20 flex flex-col lg:flex-row items-center justify-between 
              ${
                isVertical
                  ? "w-full max-w-4xl mx-auto"
                  : "h-screen w-screen p-10 lg:pt-40"
              }`}
            >
              {/* Text Side */}
              <div className="z-10 w-full lg:w-1/2 mb-10 lg:mb-0 text-center lg:text-left">
                <FadeIn direction={isVertical ? "up" : "right"}>
                  <span
                    className="text-[#997819] font-bold tracking-[0.3em] uppercase
                   text-sm md:text-base"
                  >
                    {item.id} {item.tag}
                  </span>
                </FadeIn>
                <FadeIn direction={isVertical ? "up" : "right"} delay={0.2}>
                  {/* Font sizes optimized for all screens */}
                  <h3 className="text-5xl sm:text-6xl font-black dark:text-white text-[#12066A] leading-none mt-4">
                    {item.title}
                  </h3>
                </FadeIn>
                {/* Naya Paragraph Section yahan aayega */}
                <FadeIn direction={isVertical ? "up" : "right"} delay={0.4}>
                  <p className="mt-6 text-lg md:text-lg dark:text-gray-300 text-black max-w-md mx-auto lg:mx-0 leading-relaxed">
                    {item.description}
                  </p>
                </FadeIn>
              </div>

              {/* Image Side */}
              <div className="w-full lg:w-1/2 h-[35vh] sm:h-[45vh] lg:h-[60vh] relative group">
                <img
                  src={item.img}
                  alt={item.altText}
                  className="w-full h-full object-cover rounded-[2rem] shadow-2xl relative z-10  transition-all duration-500"
                />
                {/* Background Shadow Number */}
                <div className="absolute -bottom-6 -left-4 sm:-bottom-10 sm:-left-10 text-[6rem] sm:text-[9rem] lg:text-[11rem] font-black text-slate-200 dark:text-white/5 z-0 opacity-50">
                  {item.id}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalProcess;
