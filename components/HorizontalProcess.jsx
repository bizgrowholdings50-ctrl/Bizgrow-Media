"use client";
import { motion, useTransform, useScroll, useSpring } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import FadeIn from "./MotionWrapper";

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

  // Desktop horizontal movement logic
  const x = useTransform(
    smoothProgress,
    [0, 0.05, 0.2, 0.4, 0.55, 0.75, 0.85, 1],
    ["0vw", "0vw", "-100vw", "-100vw", "-200vw", "-200vw", "-300vw", "-300vw"]
  );

  const sections = [
    {
      id: "01",
      title: "STRATEGY",
      tag: "PLANNING",
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2026",
      altText: "BizGrow Digital Planning strategy process", // <-- Added this
      description:
        "We analyse your business, audience, and goals to create a clear, actionable roadmap for growth.",
    },
    {
      id: "02",
      title: "DIGITAL",
      tag: "MARKETING",
      img: "/digital-marketing.jpg",
      altText: "BizGrow Digital marketing digital process", // <-- Added this
      description:
        "We implement targeted digital solutions that improve online visibility, attract leads, and drive measurable results.",
    },
    {
      id: "03",
      title: "CREATIVE",
      tag: "DESIGN",
      img: "/creative-design.jpg",
      altText: "BizGrow Digital creative design process", // <-- Added this
      description:
        "We craft visually engaging, user-focused designs that strengthen your brand identity and enhance engagement.",
    },
    {
      id: "04",
      title: "DEVELOP",
      tag: "CODING",
      img: "/coding.jpg",
      altText: "BizGrow Digital web development process", // <-- Added this
      description:
        "We build fast, secure, and SEO-optimised websites and platforms for optimal performance.",
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
              <h2 className="text-3xl md:text-5xl lg:text-5xl dark:text-white font-black text-slate-900 uppercase">
                How We Deliver Tangible Results
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
                  <h3 className="text-5xl sm:text-7xl lg:text-[6.5rem]  font-black dark:text-white text-slate-900 leading-none mt-4">
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