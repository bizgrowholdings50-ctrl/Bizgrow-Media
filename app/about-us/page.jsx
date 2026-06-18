// app/about/page.js
import FadeIn from "@components/MotionWrapper";
import Image from "next/image";
import Link from "next/link";
import StructuredData from "@components/StructuredData";
import { aboutPageSchema } from "@lib/jsonSchemas";
import {
  FaBullseye,
  FaCheckCircle,
  FaEye,
  FaHandshake,
  FaLightbulb,
  FaRocket,
} from "react-icons/fa";
import { CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "About BizGrow Digital | UK Experts in Digital Growth",
  description:
    "BizGrow Digital delivers expert digital marketing solutions across the UK, helping businesses grow, engage, and succeed online.",
  alternates: {
    canonical: "https://bizgrowmedia.co.uk/about-us/",
  },
};

export default function AboutPage() {
  return (
    <main className="w-full">
      <StructuredData schema={aboutPageSchema} />
      {/* Hero Section */}
      <section className="relative h-[85vh] md:h-screen w-full">
        <Image
          src="/about-hr.jpg"
          fill
          className="object-cover"
          alt="About BizGrow Digital"
          fetchPriority="high"
          priority
        />

        {/* 🔹 FIX: 'inset-0' aur 'w-full' add kiya taake content poori screen ke hisab se center ho */}
        <div
          className="absolute inset-0 w-full bg-black/60 flex flex-col items-center 
          justify-center text-center px-4"
        >
          <FadeIn direction="up" delay={0.2}>
            <h1 className="text-white text-4xl md:text-6xl mt-20 font-bold mb-4">
              About BizGrow Digital
            </h1>
          </FadeIn>

          <FadeIn direction="up" delay={0.4}>
            {/* 🔹 FIX: 'mx-auto' add kiya taake max-width ke sath text center mein hi rahe */}
            <p className="text-white text-lg md:text-xl max-w-2xl mx-auto">
              We are committed to helping businesses grow online in the UK with
              innovative digital solutions, creative{" "}
              <Link
                href="/what-is-web-design-the-ultimate-guide-to-designing-a-website/"
                className="text-[#B54118] font-bold"
              >
                design
              </Link>
              , and data-driven{" "}
              <Link
                href="/top-3-marketing-challenges-killing-uk-small-businesses/"
                className="text-[#B54118] font-bold"
              >
                marketing
              </Link>{" "}
              strategies.
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.6}>
            <Link href="/our-digital-services">
              <button className="mt-8 px-8 py-4 bg-[#B54118] text-white font-semibold rounded-xl hover:scale-105 transition">
                Explore Our Services →
              </button>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Overview Section Wrapper */}
      <section className="w-full bg-white dark:bg-black dark:border-y-2 dark:border-orange-700 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
          {/* Text Side */}
          <div className="w-full lg:w-1/2 flex flex-col space-y-6">
            <FadeIn direction="right" delay={0.2}>
              <div className="flex flex-col">
                <span className="text-[#B54118] font-bold tracking-widest text-sm mb-2">
                  WHO WE ARE
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white uppercase tracking-tighter leading-none">
                  About <span className="text-[#B54118]">Us</span>
                </h2>
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={0.4}>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                At BizGrow Digital, we’re not your average agency; we are your
                <strong> business’s growth partners in the UK</strong>. We
                combine creative thinking with data-driven strategies to unleash
                your full potential.
              </p>
            </FadeIn>

            {/* Bullet Points for better Scannability */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {[
                <Link href="/search-engine-optimisation/">
                  Advanced SEO Experts
                </Link>,
                <Link href="/what-are-the-top-7-types-of-digital-marketing-you-must-know/">
                  Results-Driven Marketing
                </Link>,
                <Link href="/web-development/">
                  Custom Web Development
                </Link>,
                <Link href="/8-effective-lead-generation-strategies/">
                  Lead Generation Focus
                </Link>,
              ].map((item, i) => (
                <FadeIn key={i} direction="up" delay={0.5 + i * 0.1}>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="text-[#B54118]" size={20} />
                    <span className="font-semibold dark:text-white  underline text-[#B54118]">
                      {item}
                    </span>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Image Side with Floating Element */}
          <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end mt-10 lg:mt-0">
            <FadeIn direction="left" delay={0.4}>
              <div className="relative group">
                {/* Main Image */}
                <Image
                  src="/team-collaboration.jpg"
                  width={550}
                  height={450}
                  className="rounded-[3rem] shadow-2xl object-cover border-8 border-white dark:border-zinc-900 transition-transform duration-500 group-hover:scale-[1.02]"
                  alt="BizGrow Digital Marketing Experts"
                />

                {/* Floating Badge - Ye "Weird" feel khatam karega */}
                <div className="absolute -bottom-6 left-8 md:left-5 bg-[#B54118] p-6 rounded-2xl shadow-xl text-white z-20 animate-bounce-slow">
                  <p className="text-3xl font-black">100%</p>
                  <p className="text-xs uppercase tracking-tighter">
                    Client Satisfaction
                  </p>
                </div>

                {/* Decorative Back-layer */}
                <div className="absolute -top-6 -right-6 w-full h-full border-2 border-[#B54118]/30 rounded-[3rem] -z-10" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 🚀 UNIQUE SECTION: Mission & Vision */}
      <section className="bg-[#F2E8D5] dark:bg-black py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <FadeIn direction="up">
            <div className="flex flex-col items-center mb-16">
              <h2 className="text-4xl md:text-6xl font-black text-center text-[#B54118] uppercase tracking-tighter">
                Our{" "}
                <span className="text-slate-900 dark:text-white">
                  Mission & Vision
                </span>
              </h2>
              <div className="w-24 h-2 bg-[#B54118] mt-4 rounded-full" />
            </div>
          </FadeIn>

          {/* Main Container */}
          <div className="flex flex-col lg:flex-row gap-12 items-stretch">
            {/* 🔹 Left Side: Mission Card */}
            <div className="w-full lg:w-1/2 flex">
              <FadeIn direction="right" className="w-full flex">
                <div className="group relative w-full bg-white dark:bg-[#000B25] p-10 md:p-12 rounded-[3rem] border-2 border-orange-700/10 dark:border-white/5 shadow-2xl flex flex-col items-start text-left hover:border-[#B54118]/40 transition-all duration-500">
                  {/* Background Accent */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#B54118]/5 rounded-bl-full -z-10 group-hover:bg-[#B54118]/10 transition-colors" />

                  <div className="bg-[#B54118] p-5 rounded-2xl mb-8 shadow-lg shadow-[#B54118]/20 group-hover:scale-110 transition-transform">
                    <FaBullseye className="text-white h-8 w-8" />
                  </div>

                  <h3 className="text-3xl font-black dark:text-[#B54118] text-slate-900 mb-6 tracking-tight">
                    Our Mission
                  </h3>

                  <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed flex-grow">
                    <Link
                      href="/"
                      className="text-[#B54118] font-bold"
                    >
                      BizGrow Digital
                    </Link>{" "}
                    helps UK businesses grow online with strategies that
                    increase visibility, connect their business to potential
                    customers, and build their brand presence. We provide
                    results-driven digital solutions so that businesses can be
                    distinguishable from others in their industry and achieve
                    measurable success.
                  </p>

                  {/* Subtle Branding Footnote */}
                  <div className="mt-8 pt-6 border-t border-gray-100 dark:border-white/5 w-full italic text-[#B54118] font-medium">
                    #DrivingSuccess
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* 🔹 Right Side: Vision Card */}
            <div className="w-full lg:w-1/2 flex">
              <FadeIn direction="left" className="w-full flex">
                <div className="group relative w-full bg-white dark:bg-[#000B25] p-10 md:p-12 rounded-[3rem] border-2 border-orange-700/10 dark:border-white/5 shadow-2xl flex flex-col items-start text-left hover:border-[#B54118]/40 transition-all duration-500">
                  {/* Background Accent */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#B54118]/5 rounded-bl-full -z-10 group-hover:bg-[#B54118]/10 transition-colors" />

                  <div className="bg-[#B54118] p-5 rounded-2xl mb-8 shadow-lg shadow-[#B54118]/20 group-hover:scale-110 transition-transform">
                    <FaEye className="text-white h-8 w-8" />
                  </div>

                  <h3 className="text-3xl font-black dark:text-[#B54118] text-slate-900 mb-6 tracking-tight">
                    Our Vision
                  </h3>

                  <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed flex-grow">
                    We aim to be the trusted digital partner for UK brands,
                    helping them succeed online, establish credibility, and
                    reach more customers. By crafting professional{" "}
                    <Link
                      href="/how-digital-marketing-drives-faster-growth-for-businesses/"
                      className="text-[#B54118] font-bold"
                    >
                      digital strategies
                    </Link>{" "}
                    and providing innovative solutions, we will help businesses
                    to achieve long-term growth and a strong, recognisable
                    online presence.
                  </p>

                  {/* Subtle Branding Footnote */}
                  <div className="mt-8 pt-6 border-t border-gray-100 dark:border-white/5 w-full italic text-[#B54118] font-medium">
                    #FutureFocused
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* 🚀 UNIQUE SECTION: What Makes Us Different */}
      <section className="w-full py-24 bg-white dark:bg-black relative overflow-hidden">
        {/* Background Subtle Elements */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#B54118]/5 blur-[120px] rounded-full -z-10" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#B54118]/5 blur-[120px] rounded-full -z-10" />

        <div className="max-w-6xl mx-auto px-6">
          <FadeIn direction="up">
            <div className="flex flex-col items-center mb-20">
              <h2 className="text-4xl md:text-6xl font-black text-center text-[#B54118] uppercase tracking-tighter">
                What Makes Us{" "}
                <span className="text-slate-900 dark:text-white">
                  Different
                </span>
              </h2>
              <div className="w-24 h-2 bg-[#B54118] mt-4 rounded-full" />
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-10">
            {[
              {
                icon: <FaHandshake />,
                title: "We Listen with Purpose",
                desc: "Every strategy we build is rooted in your unique goals to make sure we get a solution that actually meets your needs.",
              },
              {
                icon: <FaLightbulb />,
                title: "We Make the Complex Simple",
                desc: "With our collective experience, we are able to build pragmatic and actionable plans to take your ideas and turn them into results.",
              },
              {
                icon: <FaRocket />,
                title: "We Deliver Results",
                desc: "Everything from mobile-responsive websites to better placement in search results allows us to produce real results.",
              },
            ].map((feature, index) => (
              <FadeIn key={index} direction="up" delay={0.1 * (index + 1)}>
                <div className="group relative h-full">
                  {/* Unique Card Styling - Removed Numbers, Added Hover Glow */}
                  <div className="relative z-10 bg-white dark:bg-[#001235]/40 backdrop-blur-md p-10 rounded-[2.5rem] border border-orange-700/20 dark:border-white/10 shadow-xl hover:shadow-[#B54118]/20 transition-all duration-500 flex flex-col items-center text-center h-full overflow-hidden">
                    {/* Subtle Gradient Spot (Invisible until hover) */}
                    <div className="absolute -inset-full bg-gradient-to-br from-[#B54118]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />

                    {/* Icon Container with Floating Animation */}
                    <div className="mb-8 p-6 rounded-3xl bg-[#B54118]/10 text-[#B54118] group-hover:bg-[#B54118] group-hover:text-white transition-all duration-500 shadow-lg relative z-10 transform group-hover:-translate-y-2">
                      <span className="text-5xl block transform group-hover:[transform:rotateY(360deg)] duration-700">
                        {feature.icon}
                      </span>
                    </div>

                    <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-4 z-10 tracking-tight">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed z-10 text-sm md:text-base">
                      {feature.desc}
                    </p>

                    {/* Bottom Glow Line */}
                    <div className="absolute bottom-0 left-0 w-0 h-2 bg-[#B54118] group-hover:w-full transition-all duration-500" />
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Quote Section with Unique Signature Style */}
          <FadeIn direction="up" delay={0.5}>
            <div className="mt-24 p-12 md:p-16 bg-orange-50/50 dark:bg-[#000B25]/50 backdrop-blur-xl rounded-[3rem] rounded-br-[120px] border-l-[12px] border-[#B54118] relative group">
              <div className="absolute top-4 right-12 text-[12rem] text-[#B54118]/5 font-serif leading-none select-none">
                ”
              </div>

              <p className="text-2xl md:text-2xl font-bold text-slate-800 dark:text-white italic leading-tight relative z-10">
                "At{" "}
                <Link
                  href="/our-digital-services/"
                  className="text-[#B54118] font-bold underline"
                >
                  BizGrow Digital
                </Link>{" "}
                , we don’t just develop websites; we build powerful digital
                solutions that turn visitors into clients and position your
                brand as a{" "}
                <span className="text-[#B54118]">trusted leader</span>."
              </p>

              <div className="mt-10 flex items-center gap-4 relative z-10">
                <div className="w-16 h-1 bg-[#B54118]" />
                <span className="uppercase tracking-[0.4em] text-xs font-black text-[#B54118]">
                  Our Growth Mission
                </span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 🚀 UNIQUE SECTION: Our Core Values (Height Fixed) */}
      <section className="w-full py-20 bg-white dark:bg-black relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-64 bg-[#B54118]/5 skew-y-3 -z-10" />

        <div className="max-w-7xl mx-auto px-6">
          <FadeIn direction="up">
            <div className="flex flex-col items-center mb-20">
              <h2 className="text-4xl md:text-6xl font-black text-center text-[#B54118] uppercase tracking-tighter">
                Our Core{" "}
                <span className="text-slate-900 dark:text-white">Values</span>
              </h2>
              <div className="w-24 h-2 bg-[#B54118] mt-4 rounded-full" />
            </div>
          </FadeIn>

          {/* 🔹 FIX: added 'items-stretch' taake saare cards barabar height pakrein */}
          <div className="flex flex-col lg:flex-row gap-10 items-stretch">
            {[
              {
                icon: <FaHandshake />,
                title: "Integrity",
                desc: "We believe in honest communication, ethical practices, and delivering what we promise. Trust is the cornerstone of every relationship we develop.",
                dir: "right",
              },
              {
                icon: <FaLightbulb />,
                title: "Quality and Clarity",
                desc: (
                  <>
                    All of our strategies, messages &{" "}
                    <Link
                      href="/how-can-web-graphic-design-elevate-your-digital-presence/"
                      className="text-[#B54118] font-bold"
                    >
                      designs
                    </Link>{" "}
                    are created with intention, precision, and clear intent to
                    maximise the value of and make an extraordinary impact with.
                  </>
                ),
                dir: "up",
              },
              {
                icon: <FaRocket />,
                title: "Growth-Driven Mindset",
                desc: "We focus on continual improvement, developing strategic thinkers, and developing a long-term digital growth strategy for our clients.",
                dir: "left",
              },
            ].map((value, index) => (
              <div key={index} className="flex-1 group">
                <FadeIn
                  direction={value.dir}
                  delay={0.2 * index}
                  className="h-full"
                >
                  {/* 🔹 FIX: 'h-full' and 'flex-col' ensures the box stretches equally */}
                  <div className="relative h-full bg-white dark:bg-[#000B25]/60 backdrop-blur-xl border-2 border-orange-700/20 dark:border-white/5 p-10 rounded-t-[3rem] rounded-bl-[3rem] rounded-br-none shadow-xl hover:shadow-[#B54118]/20 transition-all duration-500 flex flex-col items-center text-center group-hover:-translate-y-4">
                    <div className="relative mb-8 flex-shrink-0">
                      <div className="absolute inset-0 bg-[#B54118] blur-xl opacity-0 group-hover:opacity-30 transition-opacity" />
                      <div className="relative bg-[#B54118]/10 p-6 rounded-2xl text-[#B54118] group-hover:bg-[#B54118] group-hover:text-white transition-all duration-500 transform group-hover:rotate-[15deg] shadow-lg">
                        <span className="text-4xl">{value.icon}</span>
                      </div>
                    </div>

                    <h3 className="text-2xl font-black text-[#B54118] mb-4 tracking-tight flex-shrink-0">
                      {value.title}
                    </h3>

                    {/* 🔹 FIX: 'flex-grow' taake description box poori jagah le aur bottom bar align ho jaye */}
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-md flex-grow">
                      {value.desc}
                    </p>

                    <div className="absolute bottom-4 right-4 w-8 h-8 border-r-4 border-b-4 border-[#B54118]/20 group-hover:border-[#B54118] transition-colors duration-500" />
                  </div>
                </FadeIn>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="mx-auto py-16 dark:bg-[#000B25] dark:border-t-2 dark:border-orange-700  px-4 lg:px-0">
        <FadeIn direction="up">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-[#B54118]  mb-12">
            Trusted By
          </h2>
        </FadeIn>

        <div className="flex justify-center items-center">
          <Image
            src="/client-logo.jpg"
            width={1200}
            height={400}
            className="object-contain w-full rounded-xl max-w-[1200px] h-auto"
            alt="Our Clients"
          />
        </div>
      </section>

      {/* 🚀 UNIQUE SECTION: CTA Section */}
      <section className="dark:bg-black py-20 dark:border-y-2 dark:border-orange-700 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-10">
          <div
            className="relative py-16 md:py-20 rounded-[3rem] overflow-hidden text-white text-center shadow-2xl group"
            style={{
              backgroundImage: "url('/team-work.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundAttachment: "fixed", // Parallax effect
            }}
          >
            {/* 🔹 Dynamic Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-[#B54118]/40 z-0 transition-opacity duration-500 group-hover:opacity-90"></div>

            {/* 🔹 Glassy Border Effect */}
            <div className="absolute inset-0 border-[1px] border-white/20 rounded-[3rem] z-10 pointer-events-none"></div>

            <div className="relative z-20 max-w-4xl mx-auto px-6">
              <FadeIn direction="up">
                <span className="px-6 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 border-l-[#B54118] border-l-4 text-white text-xs md:text-sm font-black tracking-[0.3em] uppercase">
                  Start Your Journey
                </span>

                <h2 className="text-4xl md:text-6xl font-black mb-8 mt-3 leading-tight tracking-tighter">
                  Let’s Grow with <br />
                  <span className="text-[#B54118]">BizGrow Digital</span>
                </h2>
              </FadeIn>

              <FadeIn direction="up" delay={0.2}>
                <p className="mx-auto mb-12 text-lg md:text-xl text-gray-200 leading-relaxed font-light">
                  We work closely with each client to understand what they need.
                  Our solutions are simple, flexible, and designed to get real
                  results. By working together, we make sure every project helps
                  your business grow and succeed in the UK.
                </p>
              </FadeIn>

              <FadeIn direction="up" delay={0.4}>
                <Link href="/contact-us">
                  <button className="relative px-8 py-4 bg-[#B54118] text-white font-bold rounded-2xl overflow-hidden group transition-all duration-300 hover:scale-110 hover:shadow-[0_0_30px_rgba(181,65,24,0.5)]">
                    {/* Button Shine Effect */}
                    <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-shine" />
                    <span className="relative z-10 text-xl">
                      Get in Touch →
                    </span>
                  </button>
                </Link>
              </FadeIn>
            </div>

            {/* 🔹 Decorative Animated Circles */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#B54118]/20 blur-[80px] rounded-full animate-pulse"></div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 blur-[80px] rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>
    </main>
  );
}
