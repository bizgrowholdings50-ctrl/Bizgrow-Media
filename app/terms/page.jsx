import Image from "next/image";
import React from "react";
import FadeIn from "@components/MotionWrapper";
import Link from "next/link";

export const metadata = {
  title: "Terms & Conditions | BizGrow Digital",
  description:
    "Read BizGrow Media Terms & Conditions covering our services, client responsibilities, payments, and website usage policies",
  alternates: {
    canonical: "https://bizgrowmedia.co.uk/terms/",
  },
};

const TermsConditions = () => {
  const services = [
    "Studio & Production",
    "Content Engine",
    "Authority Builders",
    "Growth Engine",
  ];

  return (
    <main className="w-full bg-white dark:bg-gray-900 overflow-hidden">
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
              Last Updated:{" "}
              <span className="text-white font-medium">January 2026</span>
            </p>
          </FadeIn>
        </div>
      </div>

      {/* --- CONTENT SECTION --- */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-6">
          <FadeIn direction="up" delay={0.2}>
            {/* Intro text with Orange Border */}
            <p className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white leading-tight mb-20 border-l-8 border-[#997819] pl-8">
              Thank you for visiting BizGrow Media. By accessing our website or
              using our services, you agree to comply with these Terms &
              Conditions.
            </p>

            <div className="space-y-20">
              {/* 01. Services Section with Grid */}
              <div className="group">
                <h2 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tighter mb-4 flex items-center gap-4">
                  <span className="text-[#997819]">01.</span> Services
                </h2>
                <div className="h-[2px] w-12 bg-[#997819] group-hover:w-24 transition-all duration-500 mb-8" />
                <p className="text-gray-600 dark:text-gray-400 text-lg mb-8">
                  BizGrow Media provides professional business media and content
                  services, including:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {services.map((service, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-4 rounded-2xl bg-orange-50 hover:bg-orange-100 hover:border hover:border-[#997819] dark:bg-white/5 dark:hover:bg-white/5 cursor-pointer border border-slate-100 dark:border-white/10"
                    >
                      <div className="w-2 h-2 rounded-full bg-[#997819]" />
                      <span className="text-sm font-bold text-slate-800 dark:text-gray-300 uppercase tracking-wider">
                        {service}
                      </span>
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
                  You agree to use this website for lawful purposes only. You
                  must not misuse the website, attempt unauthorised access, or
                  engage in activities that harm the website, its systems, or
                  users.
                </p>
              </div>

              {/* 03. Client Responsibilities */}
              <div className="group">
                <h2 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tighter mb-4 flex items-center gap-4">
                  <span className="text-[#997819]">03.</span> Client
                  Responsibilities
                </h2>
                <div className="h-[2px] w-12 bg-[#997819] group-hover:w-24 transition-all duration-500 mb-6" />
                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-6">
                  Clients are responsible for:
                </p>
                <ul className="space-y-4 text-gray-600 dark:text-gray-400 text-lg mb-6">
                  <li className="flex gap-4">
                    <span className="text-[#997819] font-bold">•</span>
                    Providing accurate project information
                  </li>
                  <li className="flex gap-4">
                    <span className="text-[#997819] font-bold">•</span>
                    Sharing required materials on time
                  </li>
                  <li className="flex gap-4">
                    <span className="text-[#997819] font-bold">•</span>
                    Reviewing deliverables within agreed timelines
                  </li>
                  <li className="flex gap-4">
                    <span className="text-[#997819] font-bold">•</span>
                    Ensuring they have legal rights to all provided content and
                    materials
                  </li>
                </ul>
                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed italic">
                  Project timelines be affected by delayed communication or
                  approvals.
                </p>
              </div>

              {/* 04. Payments and Bookings */}
              <div className="group">
                <h2 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tighter mb-4 flex items-center gap-4">
                  <span className="text-[#997819]">04.</span> Payments and
                  Bookings
                </h2>
                <div className="h-[2px] w-12 bg-[#997819] group-hover:w-24 transition-all duration-500 mb-6" />
                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-4">
                  Service pricing, project timelines, and payment terms will be
                  agreed upon before work begins.
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                  BizGrow Media reserves the right to pause services if
                  agreed-upon payments are not received within the required
                  timeframe.
                </p>
              </div>

              {/* 05. Website Usage */}
              <div className="group">
                <h2 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tighter mb-4 flex items-center gap-4">
                  <span className="text-[#997819]">05.</span> Website Usage
                </h2>
                <div className="h-[2px] w-12 bg-[#997819] group-hover:w-24 transition-all duration-500 mb-6" />
                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-6">
                  Users agree not to:
                </p>
                <ul className="space-y-4 text-gray-600 dark:text-gray-400 text-lg mb-6">
                  <li className="flex gap-4">
                    <span className="text-[#997819] font-bold">•</span>
                    misuse the website
                  </li>
                  <li className="flex gap-4">
                    <span className="text-[#997819] font-bold">•</span>
                    attempt to damage website functionality
                  </li>
                  <li className="flex gap-4">
                    <span className="text-[#997819] font-bold">•</span>
                    copy website content without permission
                  </li>
                  <li className="flex gap-4">
                    <span className="text-[#997819] font-bold">•</span>
                    submit false or misleading information
                  </li>
                </ul>
                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                  We reserve the right to restrict access where misuse is
                  identified.
                </p>
              </div>

              {/* 06. Third-Party Platforms */}
              <div className="group">
                <h2 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tighter mb-4 flex items-center gap-4">
                  <span className="text-[#997819]">06.</span> Third-Party
                  Platforms
                </h2>
                <div className="h-[2px] w-12 bg-[#997819] group-hover:w-24 transition-all duration-500 mb-6" />
                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-6">
                  Our services involve platforms such as:
                </p>
                <ul className="space-y-4 text-gray-600 dark:text-gray-400 text-lg mb-6">
                  <li className="flex gap-4">
                    <span className="text-[#997819] font-bold">•</span>
                    LinkedIn
                  </li>
                  <li className="flex gap-4">
                    <span className="text-[#997819] font-bold">•</span>
                    Instagram
                  </li>
                  <li className="flex gap-4">
                    <span className="text-[#997819] font-bold">•</span>
                    Facebook
                  </li>
                  <li className="flex gap-4">
                    <span className="text-[#997819] font-bold">•</span>
                    YouTube
                  </li>
                </ul>
                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                  BizGrow Media is not responsible for platform outages, policy
                  changes, or technical issues caused by third-party services.
                </p>
              </div>

              {/* 07. Changes to Terms */}
              <div className="group">
                <h2 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tighter mb-4 flex items-center gap-4">
                  <span className="text-[#997819]">07.</span> Changes to Terms
                </h2>
                <div className="h-[2px] w-12 bg-[#997819] group-hover:w-24 transition-all duration-500 mb-6" />
                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-4">
                  BizGrow Media updates these Terms and Conditions at any time
                  to reflect changes in services, legal requirements, or
                  business operations.
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                  Updated versions will be published on this page.
                </p>
              </div>

              {/* 08. Governing Law */}
              <div className="group">
                <h2 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tighter mb-4 flex items-center gap-4">
                  <span className="text-[#997819]">08.</span> Governing Law
                </h2>
                <div className="h-[2px] w-12 bg-[#997819] group-hover:w-24 transition-all duration-500 mb-6" />
                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                  These Terms and Conditions are governed by applicable laws
                  within the United Kingdom.
                </p>
              </div>

              {/* 09. Final Contact Box */}
              <div className="mt-24 p-12 rounded-[3rem] bg-gray-100 dark:bg-gray-900 dark:text-white text-black border border-[#997819] relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
                <h2 className="text-4xl font-black uppercase mb-6">
                  Got Questions?
                </h2>
                <p className="text-gray-600 dark:text-white text-xl mb-8 font-light">
                  For questions regarding these Terms and Conditions, please
                  visit:
                </p>

                <Link href="/">
                  <p className="font-bold text-2xl text-[#997819] underline uppercase tracking-tighter">
                    BizGrow Media
                  </p>
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
};

export default TermsConditions;
