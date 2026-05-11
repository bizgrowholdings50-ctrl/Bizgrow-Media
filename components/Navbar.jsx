"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import {
  FaPaintBrush,
  FaChartLine,
  FaEnvelope,
  FaCode,
  FaBullhorn,
  FaMoon,
  FaSun,
  FaSearch,
} from "react-icons/fa";
import { Code2, Layers, Search, ShieldCheck, TrendingUp, Video } from "lucide-react";
// 1. Search Data Import (Path check karlein apne project ke mutabiq)
import { SITE_PAGES } from "@/constants/search-data";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false); // Search dropdown control
  const [scrolled, setScrolled] = useState(false);

  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

   const services = [
    
    {
      title: "Studio Production",
      description: "High-quality media production", // Description updated for relevancy
      href: "/studio-production",
      // Production ke liye Video ya Clapperboard best hai
      icon: <Video />, 
    },

     {
      title: "Authority Builder",
      description: "Brand storytelling & visuals",
      href: "/authority-builder",
      // Authority ke liye Shield, Award ya Crown premium lagta hai
      icon: <ShieldCheck />, 
    },
    {
      title: "Content Engine",
      description: "Omnichannel marketing solutions",
      href: "/content-engine",
      // Brain ya Cog zyada behtar lagta hai 'Engine' ke liye
      icon: <Layers />, 
    },
 

 {
      title: "Growth Engine",
      description: "Strategic growth & lead generation", // Description updated for relevancy
      href: "/growth-engine",
      // Growth ke liye TrendingUp ya Rocket perfect hai
      icon: <TrendingUp />, 
    },
   
   
  ];

  // 🔥 Enhanced Global Search Logic
  const globalResults = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    if (!query) return [];

    return SITE_PAGES.filter((page) => {
      // Check if keyword matches Title OR Category
      const matchTitle = page.title.toLowerCase().includes(query);
      const matchCategory = page.category.toLowerCase().includes(query);

      return matchTitle || matchCategory;
    }).slice(0, 6); // Limit results to 6 for clean UI
  }, [searchQuery]);

  // Open search dropdown when typing
  useEffect(() => {
    if (searchQuery.length > 0) setShowSearch(true);
  }, [searchQuery]);

  if (!mounted) return null;

  return (
    <div className="fixed top-4 left-0 right-0 z-[100] flex justify-center px-3 md:px-5">
      {/* Overlay to close search on outside click */}
      {showSearch && searchQuery && (
        <div
          className="fixed inset-0 z-[-1]"
          onClick={() => setShowSearch(false)}
        />
      )}

      <nav
        className={`w-full max-w-7xl rounded-3xl border shadow-lg transition-all duration-300
        ${
          scrolled
            ? "py-0.5 bg-white/80 dark:bg-black backdrop-blur-xl scale-[0.98]"
            : "py-2 md:py-1 bg-white dark:bg-black/70 backdrop-blur-md"
        } border-[#12066a] dark:border-white/20`}
      >
        <div
          className={`px-3 transition-all duration-300 ${scrolled ? "py-1" : "py-1"}`}
        >
          <div className="flex items-center justify-between">
            {/* LOGO */}
            <Link href="/">
              <Image
                src="/BizGrow Media.png"
                alt="Logo"
                width={scrolled ? 95 : 100}
                height={40}
                priority
                className={`transition-all duration-300 ${
                  resolvedTheme === "dark" ? "invert brightness-0" : ""
                }`}
              />
            </Link>

            {/* DESKTOP LINKS */}
            <div className="hidden lg:flex items-center gap-6 text-sm font-semibold text-black dark:text-white">
              <Link
                href="/"
                className="text-[#12066a] hover:text-[#997819] dark:text-white dark:hover:text-[#997819] transition"
              >
                Home
              </Link>

              {/* SERVICES DROPDOWN */}
              <div
                className="relative"
                onMouseEnter={() => setOpen(true)}
                onMouseLeave={() => setOpen(false)}
              >
                <Link href="/our-digital-services">
                <button className="flex items-center gap-1 text-[#12066a] dark:text-white dark:hover:text-[#997819] hover:text-[#997819]">
                  Services
                  <span
                    className={open ? "rotate-180 transition" : "transition"}
                  >
                    ▼
                  </span>
                </button>
                </Link>

                <AnimatePresence>
                  {open && (
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 15 }}
                      className="absolute left-40 -translate-x-1/2 mt-3 w-[720px] rounded-2xl bg-white/95 dark:bg-black/95 backdrop-blur-xl border border-black/10 dark:border-white/10 shadow-2xl"
                    >
                      <div className="grid grid-cols-2 gap-2 p-4">
                        {services.map((s, i) => (
                          <Link
                            key={i}
                            href={s.href}
                            className="group flex gap-4 p-3 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 transition"
                          >
                            <div className="text-[#997819] text-lg mt-1">
                              {s.icon}
                            </div>
                            <div>
                              <h4 className="text-black dark:text-white text-sm font-semibold group-hover:text-orange-500">
                                {s.title}
                              </h4>
                              <p className="text-[10px] text-gray-500 leading-tight">
                                {s.description}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="/packages"
                className="text-[#12066a] dark:text-white dark:hover:text-[#997819] hover:text-[#997819] transition"
              >
                Packages
              </Link>
              <Link
                href="/blogs"
                className="text-[#12066a] dark:text-white dark:hover:text-[#997819] hover:text-[#997819] transition"
              >
                CaseStudies
              </Link>
              <Link
                href="/contact-us"
                className="text-[#12066a] dark:text-white dark:hover:text-[#997819] hover:text-[#997819] transition"
              >
                Booking
              </Link>
            </div>

            {/* ACTIONS */}
            <div className="flex items-center gap-3">
              {/* GLOBAL SEARCH INPUT */}
              <div className="hidden md:flex items-center relative">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onFocus={() => setShowSearch(true)}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-gray-100 dark:bg-white/10 rounded-full py-1.5 pl-4 pr-10 text-xs outline-none w-32 focus:w-48 transition-all dark:text-white border border-[#997819] focus:border-[#12066a]"
                />
                <Search className="absolute right-3 w-3 h-3 text-gray-400" />

                {/* SEARCH DROPDOWN RESULTS */}
                <AnimatePresence>
                  {showSearch && searchQuery && (
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 15 }}
                      className="absolute top-12 left-0 w-64 rounded-2xl bg-white dark:bg-black border border-[#997819]/30 shadow-2xl overflow-hidden"
                    >
                      <div className="p-2 flex flex-col">
                        {globalResults.length > 0 ? (
                          globalResults.map((result, idx) => (
                            <Link
                              key={idx}
                              href={result.href}
                              onClick={() => {
                                setSearchQuery("");
                                setShowSearch(false);
                              }}
                              className="p-3 hover:bg-black/5 dark:hover:bg-white/10 rounded-xl transition group text-left"
                            >
                              <p className="text-xs font-semibold text-black dark:text-white group-hover:text-orange-500">
                                {result.title}
                              </p>
                              <span className="text-[10px] text-[#997819] uppercase tracking-tighter font-medium">
                                {result.category}
                              </span>
                            </Link>
                          ))
                        ) : (
                          <div className="p-4 text-[10px] text-center text-gray-500">
                            No results found.
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* THEME TOGGLE */}
              <button
                onClick={() =>
                  setTheme(resolvedTheme === "dark" ? "light" : "dark")
                }
                className="w-8 h-8 rounded-full bg-gray-100 dark:bg-white/10 flex items-center justify-center text-[#12066a] dark:text-[#997819]"
              >
                {resolvedTheme === "dark" ? (
                  <FaSun size={14} />
                ) : (
                  <FaMoon size={14} />
                )}
              </button>

              {/* MOBILE MENU TOGGLE */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden text-black dark:text-white text-xl"
              >
                {mobileOpen ? "✕" : "☰"}
              </button>
            </div>
          </div>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-0 bg-white dark:bg-black z-[120] p-6 flex flex-col gap-6"
            >
              <div className="flex justify-between items-center border-b pb-4 dark:border-white/10">
                <span className="font-bold tracking-widest text-[#12066a] dark:text-white">
                  MENU
                </span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="text-2xl"
                >
                  ✕
                </button>
              </div>

              <Link
                href="/"
                onClick={() => setMobileOpen(false)}
                className="text-xl font-medium"
              >
                Home
              </Link>

              <div>
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="text-xl font-medium flex justify-between w-full"
                >
                  Services <span>{mobileServicesOpen ? "-" : "+"}</span>
                </button>
                {mobileServicesOpen && (
                  <div className="pl-4 mt-4 flex flex-col gap-4 border-l-2 border-[#997819]/30">
                    {services.map((s, i) => (
                      <Link
                        key={i}
                        href={s.href}
                        onClick={() => setMobileOpen(false)}
                        className="text-base text-gray-600 dark:text-gray-300"
                      >
                        {s.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/packages"
                onClick={() => setMobileOpen(false)}
                className="text-xl font-medium"
              >
                Packages
              </Link>
              <Link
                href="/contact-us"
                onClick={() => setMobileOpen(false)}
                className="text-xl font-medium"
              >
                Booking
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
}
