"use client";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import FadeIn from "./MotionWrapper";

export default function ServicesSection() {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const visibleCards = [
    {
      title: "Professional Studio Rental",
      img: "/studio-rental.jpg",
      alt: "Professional Production Studio Rental UK - Bizgrow Media",
      desc: "State-of-the-art studio spaces for photography, videography, and podcasting. Fully equipped with professional lighting and acoustic treatment.",
    },
    {
      title: "Cinematic Video Production",
      img: "/video-production.jpg",
      alt: "High-End Video Production Services - Bizgrow Media",
      desc: "From TV commercials to social media reels, we create high-impact visual stories that capture your brand's essence in 4K.",
    },
   
    {
      title: "Creative Brand Identity",
      img: "/brand-identity.jpg",
      alt: "Creative Branding and Graphic Design - Bizgrow Media",
      desc: "Crafting premium brand identities and graphic designs that reflect the prestige of your business in the UK market.",
    },
    {
      title: "Web & Product Development",
      img: "/web-dev.jpg",
      alt: "Next.js Web Development - Bizgrow Media",
      desc: "Building high-performance, SEO-optimized websites using Next.js to provide a seamless digital experience for your clients.",
    },
  ];

  return (
    <section
      ref={container}
      className="relative w-full h-[300vh] md:h-[400vh] bg-white dark:bg-gray-800 dark:border-b-2 dark:border-[#997819]"
    >
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        {/* --- Heading: Optimized Spacing --- */}
        <div className="text-center z-10 w-full px-6 flex flex-col items-center mb-4 md:mb-8">
          <FadeIn direction="up">
            <h2 className="text-4xl md:text-5xl mt-12 text-[#12066a] dark:text-[#997819] font-black uppercase tracking-tighter leading-none pt-10">
              Our Media Services
            </h2>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <p className="text-slate-600 dark:text-white/80 mt-2 text-sm md:text-[16px] font-medium max-w-xl mx-auto">
              Where professional production meets strategic digital growth.
            </p>
          </FadeIn>
        </div>

        {/* --- Cards Wrapper: Fully Responsive Container --- */}
        <div className="relative w-full mt-10 max-w-6xl px-4 h-[55vh] md:h-[35vh] flex items-center justify-center">
          {visibleCards.map((card, idx) => {
            const start = idx * 0.18;
            const end = start + 0.25;
            return (
              <Card
                key={idx}
                i={idx}
                {...card}
                progress={scrollYProgress}
                range={[start, end]}
                isFirst={idx === 0}
                isLast={idx === visibleCards.length - 1}
              />
            );
          })}
        </div>

        {/* --- Footer Button: Always Visible --- */}
        <div className="mt-8 md:mt-12 z-20 w-full px-4 flex justify-center">
          <Link
            href="/our-digital-services"
            className="group"
            aria-label="View all of our services"
          >
            <button
              className="relative z-30 group/btn overflow-hidden  mt-10 px-10 py-5 md:px-14 md:py-4 my-6 bg-[#997819] text-white text-base md:text-lg font-black rounded-2xl hover:scale-110 active:scale-95 transition-all duration-500 shadow-[0_20px_50px_rgba(153,120,25,0.3)] uppercase tracking-widest min-h-[48px]"
            >
              <span className="relative z-20 group-hover/btn:text-[#12066a]">
                View All Capabilities →
              </span>
              <div className="absolute inset-0 bg-white z-10 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500"></div>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

function Card({ title, img, desc, alt, i, progress, range, isFirst, isLast }) {
  const [start, end] = range;

  const xTranslate = isFirst ? "0%" : "150%";
  const xExit = isLast ? "0%" : "-150%";

  const x = useTransform(
    progress,
    [start, start + 0.1, end - 0.1, end],
    [xTranslate, "0%", "0%", xExit],
  );
  const opacity = useTransform(
    progress,
    [start, start + 0.05, end - 0.05, end],
    [isFirst ? 1 : 0, 1, 1, isLast ? 1 : 0],
  );
  const scale = useTransform(
    progress,
    [start, start + 0.1, end - 0.1, end],
    [isFirst ? 1 : 0.85, 1, 1, isLast ? 1 : 0.85],
  );

  return (
    <motion.div
      style={{ x, opacity, scale, zIndex: i }}
      className="absolute w-full max-w-[95%] dark:bg-black/60 lg:max-w-4xl shadow-[0_40px_100px_rgba(0,0,0,0.1)] dark:shadow-[0_40px_100px_rgba(0,0,0,0.4)] rounded-[2.5rem] bg-white  p-5 md:p-10 border border-slate-200 dark:border-[#997819] flex flex-col md:flex-row gap-6 md:gap-10 items-center will-change-transform"
    >
      {/* Image Container */}
      <div className="w-full md:w-1/2 aspect-video md:aspect-square lg:aspect-video overflow-hidden rounded-[1.5rem] shrink-0 border dark:border-[#997819]/10">
        <Image
          src={img}
          width={600}
          height={400}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
          alt={alt}
          className="object-cover w-full h-full transition-transform duration-700 hover:scale-110"
          priority={i === 0}
        />
      </div>

      {/* Content Container */}
      <div className="w-full md:w-1/2 text-center md:text-left  flex flex-col justify-center">
        <div className="flex flex-col items-center md:items-start mb-2">
          <span className="px-4 py-1 rounded-full bg-[#997819]/10 text-[#997819] font-black text-[10px] md:text-xs uppercase tracking-[0.2em] mb-3">
            Service 0{i + 1}
          </span>
          <h3 className="text-2xl md:text-3xl text-[#12066a] dark:text-[#997819] font-black leading-[1.1] uppercase tracking-tighter">
            {title}
          </h3>
        </div>

        <p className="text-slate-600 dark:text-white/70 text-sm md:text-base lg:text-lg mt-3 font-medium leading-relaxed">
          {desc}
        </p>
      </div>
    </motion.div>
  );
}