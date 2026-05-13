import Image from "next/image";
import React from "react";
import FadeIn from "@components/MotionWrapper";

export const metadata = {
  title: "Terms & Conditions | BizGrow Digital",
  description: "Read the Terms & Conditions for BizGrow Digital. Learn about service use, client responsibilities, intellectual property, and legal guidelines.",
  alternates: {
    canonical: "https://bizgrowmedia.co.uk/terms/",
  },
};

const TermsConditions = () => {
  const services = [
    "Email Marketing", "Search Engine Optimisation", "Social Media Marketing",
    "Graphic Design", "Facebook Marketing", "Digital Marketing",
    "Creative Content", "Web Development", "WordPress", "Lead Generation"
  ];

  return (
    <main className="w-full bg-white dark:bg-black overflow-hidden">
      {/* --- HERO SECTION --- */}
      <div className="relative h-[60vh] md:h-screen w-full flex items-center justify-center overflow-hidden">
        <Image
          src="/privacy-hero-s.png" // Same hero image for legal consistency
          alt="BizGrow Terms and Conditions"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/80" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col items-center text-center">
          <FadeIn direction="up">
            <span className="text-[#997819] font-bold tracking-[0.3em] uppercase text-xs md:text-sm mb-4 block">
              Legal Framework
            </span>
            <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-black leading-none mb-6 uppercase text-center">
              Terms & <span className="text-[#997819]">Conditions</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl font-light">
              Last Updated: <span className="text-white font-medium">January 2026</span>
            </p>
          </FadeIn>
        </div>
      </div>

      {/* --- CONTENT SECTION --- */}
      <section className="py-24 bg-white dark:bg-[#020817]">
        <div className="max-w-4xl mx-auto px-6">
          <FadeIn direction="up" delay={0.2}>
            {/* Intro text with Orange Border */}
            <p className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white leading-tight mb-20 border-l-8 border-[#997819] pl-8">
              Thank you for visiting BizGrow Media. By accessing our website or using our services, 
              you agree to comply with these Terms & Conditions.
            </p>

            <div className="space-y-20">
              {/* 01. Services Section with Grid */}
              <div className="group">
                <h2 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tighter mb-4 flex items-center gap-4">
                  <span className="text-[#997819]">01.</span> Services
                </h2>
                <div className="h-[2px] w-12 bg-[#997819] group-hover:w-24 transition-all duration-500 mb-8" />
                <p className="text-gray-600 dark:text-gray-400 text-lg mb-8">
                  BizGrow Media provides professional media services, including but not limited to:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {services.map((service, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 rounded-2xl bg-orange-50 hover:bg-orange-100 hover:border hover:border-orange-600 dark:bg-white/5 dark:hover:bg-white/5 cursor-pointer border border-slate-100 dark:border-white/10">
                      <div className="w-2 h-2 rounded-full bg-[#997819]" />
                      <span className="text-sm font-bold text-slate-800 dark:text-gray-300 uppercase tracking-wider">{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 02. Use of Website */}
              <div className="group">
                <h2 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tighter mb-4 flex items-center gap-4">
                  <span className="text-[#997819]">02.</span> Use of Website
                </h2>
                <div className="h-[2px] w-12 bg-[#997819] group-hover:w-24 transition-all duration-500 mb-6" />
                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                  You agree to use this website for lawful purposes only. You must not misuse the website, 
                  attempt unauthorised access, or engage in any activity that harms the website, its systems, or its users.
                </p>
              </div>

              {/* 03. Client Obligations */}
              <div className="group">
                <h2 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tighter mb-4 flex items-center gap-4">
                  <span className="text-[#997819]">03.</span> Client Obligations
                </h2>
                <div className="h-[2px] w-12 bg-[#997819] group-hover:w-24 transition-all duration-500 mb-6" />
                <ul className="space-y-4 text-gray-600 dark:text-gray-400 text-lg">
                  <li className="flex gap-4">
                    <span className="text-[#997819] font-bold">•</span>
                    Provide accurate, complete, and timely information necessary for the project&apos;s delivery.
                  </li>
                  <li className="flex gap-4">
                    <span className="text-[#997819] font-bold">•</span>
                    Respond to communications and approvals within a reasonable timeframe.
                  </li>
                  <li className="flex gap-4">
                    <span className="text-[#997819] font-bold">•</span>
                    Ensure provided content does not infringe any third-party rights.
                  </li>
                </ul>
              </div>

              {/* Remaining Sections: Intellectual Property, Confidentiality, etc. */}
              {[
                { title: "Intellectual Property", content: "All content, designs, graphics, and materials available on this website remain the intellectual property of BizGrow Media. Unauthorised copying or reproduction is strictly prohibited." },
                { title: "Confidentiality", content: "Any information shared during the course of a project will be treated as confidential and will not be disclosed to third parties, except where required by law." },
                { title: "Third-Party Links", content: "This website may include links to third-party sites. BizGrow Media is not responsible for their content, policies, or practices." },
                { title: "Termination", content: "We reserve the right to suspend services if payments are overdue or if these Terms & Conditions are breached. On termination, all outstanding fees become immediately payable." },
                { title: "Governing Law", content: "These Terms & Conditions are governed by applicable laws. Any disputes will be handled in accordance with the legal regulations of the operating jurisdiction." }
              ].map((item, idx) => (
                <div key={idx} className="group">
                  <h2 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tighter mb-4 flex items-center gap-4">
                    <span className="text-[#997819]">0{idx + 4}.</span> {item.title}
                  </h2>
                  <div className="h-[2px] w-12 bg-[#997819] group-hover:w-24 transition-all duration-500 mb-6" />
                  <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                    {item.content}
                  </p>
                </div>
              ))}

              {/* 09. Final Contact Box */}
              <div className="mt-24 p-12 rounded-[3rem] bg-gray-100 dark:bg-gray-900 dark:text-white  text-black  border border-[#997819] relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
                <h2 className="text-4xl font-black uppercase mb-6">Got Questions?</h2>
                <p className="text-gray-600 dark:text-white text-xl mb-8 font-light">
                  If you have any questions about these terms, we’re happy to help.
                </p>
                <div className="space-y-2">
                  <p className="font-bold text-2xl uppercase tracking-tighter">BizGrow Media</p>
                  <p className="opacity-80 underline underline-offset-4 decoration-white/30">Visit our contact page for more details.</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
};

export default TermsConditions;