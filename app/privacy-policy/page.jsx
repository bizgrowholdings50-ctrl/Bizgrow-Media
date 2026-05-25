import Image from "next/image";
import React from "react";
import FadeIn from "@components/MotionWrapper";

export const metadata = {
  title: "Privacy Policy | BizGrow Media",
  description: "Learn how BizGrow Media collects, uses, and protects your personal information across our website, podcast, studio, and media services.",
  alternates: {
    canonical: "https://bizgrowmedia.co.uk/privacy-policy/",
  },
};

const PrivacyPolicy = () => {
  return (
    <main className="w-full bg-white dark:bg-gray-800 overflow-hidden">
      {/* --- HERO SECTION: Consistent Premium Theme --- */}
      <div className="relative h-[60vh] md:h-screen w-full flex items-center justify-center overflow-hidden">
        <Image
          src="/privacy-hero-s.png"
          alt="BizGrow Privacy Policy"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col items-center text-center">
          <FadeIn direction="up">
            <span className="text-[#997819] font-bold tracking-[0.3em] uppercase text-xs md:text-sm mb-4 block">
              Legal Compliance
            </span>
            <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-black leading-none mb-6 uppercase">
              Privacy <span className="text-[#997819]">Policy</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl font-light">
              Effective Date: <span className="text-white font-medium">May 18, 2026</span>
            </p>
          </FadeIn>
        </div>
      </div>

      {/* --- CONTENT SECTION: Premium Typography --- */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-6">
          <FadeIn direction="up" delay={0.2}>
            
            {/* Welcome Intro Section */}
            <div className="mb-16 border-l-8 border-[#997819] pl-8">
              <h2 className="text-4xl font-black text-slate-900 dark:text-white uppercase mb-4">Welcome</h2>
              <p className="text-xl md:text-2xl font-medium text-slate-700 dark:text-gray-300 leading-relaxed">
                to BizGrow Media. We value your privacy and are dedicated to safeguarding the Personal Information you provide to us via our website and services.
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mt-4">
                This Privacy Policy describes how BizGrow Media collects, uses, stores, and protects your information when you visit our website, contact us, or use our services.
              </p>
            </div>

            {/* Structured Main Content */}
            <div className="space-y-16">
              
              {/* Who We Are */}
              <div className="group">
                <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tighter mb-4 flex items-center gap-4">
                  <span className="text-[#997819]">01.</span> Who We Are?
                </h2>
                <div className="h-[2px] w-12 bg-[#997819] group-hover:w-24 transition-all duration-500 mb-6" />
                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-4">
                  BizGrow Media is a collection of organised platforms that promote your business with valuable industry-focused messaging and strategic brand visibility.
                </p>
                <p className="text-slate-900 dark:text-white font-semibold text-lg">
                  Website: <a href="https://bizgrowmedia.co.uk/" target="_blank" rel="noopener noreferrer" className="text-[#997819] hover:underline">https://bizgrowmedia.co.uk/</a>
                </p>
              </div>

              {/* Information We Collect */}
              <div className="group">
                <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tighter mb-4 flex items-center gap-4">
                  <span className="text-[#997819]">02.</span> Information We Collect
                </h2>
                <div className="h-[2px] w-12 bg-[#997819] group-hover:w-24 transition-all duration-500 mb-6" />
                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-6">
                  We collect and process the following types of information:
                </p>
                
                {/* Sub-categories */}
                <div className="grid md:grid-cols-2 gap-8 mt-4">
                  <div className="p-6 rounded-2xl bg-slate-50 dark:bg-white/5 border border-gray-100 dark:border-white/10">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Personal Information</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">When you contact us, submit forms, book services, or communicate with our team, we collect:</p>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300 font-medium pl-2">
                      <li className="flex items-center gap-2"><span className="text-[#997819]">•</span> Full name</li>
                      <li className="flex items-center gap-2"><span className="text-[#997819]">•</span> Email address</li>
                      <li className="flex items-center gap-2"><span className="text-[#997819]">•</span> Phone number</li>
                      <li className="flex items-center gap-2"><span className="text-[#997819]">•</span> Business name</li>
                      <li className="flex items-center gap-2"><span className="text-[#997819]">•</span> Project or enquiry details</li>
                    </ul>
                  </div>

                  <div className="p-6 rounded-2xl bg-slate-50 dark:bg-white/5 border border-gray-100 dark:border-white/10">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Technical Information</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">When you use our website, certain information is collected automatically, including:</p>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300 font-medium pl-2">
                      <li className="flex items-center gap-2"><span className="text-[#997819]">•</span> IP address</li>
                      <li className="flex items-center gap-2"><span className="text-[#997819]">•</span> Browser type</li>
                      <li className="flex items-center gap-2"><span className="text-[#997819]">•</span> Device information</li>
                      <li className="flex items-center gap-2"><span className="text-[#997819]">•</span> Pages visited</li>
                      <li className="flex items-center gap-2"><span className="text-[#997819]">•</span> Time spent on pages</li>
                      <li className="flex items-center gap-2"><span className="text-[#997819]">•</span> Website interaction data</li>
                    </ul>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-base italic mt-6">
                  This information helps us improve website performance, user experience, and service quality.
                </p>
              </div>

              {/* How do we use your information? */}
              <div className="group">
                <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tighter mb-4 flex items-center gap-4">
                  <span className="text-[#997819]">03.</span> How do we use your information?
                </h2>
                <div className="h-[2px] w-12 bg-[#997819] group-hover:w-24 transition-all duration-500 mb-6" />
                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-4">
                  We use your information to:
                </p>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300 text-lg pl-2">
                  <li className="flex items-start gap-3"><span className="text-[#997819] mt-1">•</span> Respond to enquiries and communication requests</li>
                  <li className="flex items-start gap-3"><span className="text-[#997819] mt-1">•</span> Provide podcast, media, and production services</li>
                  <li className="flex items-start gap-3"><span className="text-[#997819] mt-1">•</span> Enhance website functionality and user experience</li>
                  <li className="flex items-start gap-3"><span className="text-[#997819] mt-1">•</span> Handle bookings and business management</li>
                  <li className="flex items-start gap-3"><span className="text-[#997819] mt-1">•</span> Track website analytics and performance</li>
                  <li className="flex items-start gap-3"><span className="text-[#997819] mt-1">•</span> Maintain website security and prevent misuse</li>
                </ul>
              </div>

              {/* Data Protection */}
              <div className="group">
                <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tighter mb-4 flex items-center gap-4">
                  <span className="text-[#997819]">04.</span> Data Protection
                </h2>
                <div className="h-[2px] w-12 bg-[#997819] group-hover:w-24 transition-all duration-500 mb-6" />
                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                  We take reasonable security measures to protect your personal information from unauthorised access, misuse, disclosure, or loss.
                </p>
              </div>

              {/* Your Rights */}
              <div className="group">
                <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tighter mb-4 flex items-center gap-4">
                  <span className="text-[#997819]">05.</span> Your Rights
                </h2>
                <div className="h-[2px] w-12 bg-[#997819] group-hover:w-24 transition-all duration-500 mb-6" />
                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-4">
                  Depending on your location and applicable data protection laws, you have the right to:
                </p>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300 text-lg pl-2 mb-6">
                  <li className="flex items-start gap-3"><span className="text-[#997819] mt-1">•</span> Access your personal data</li>
                  <li className="flex items-start gap-3"><span className="text-[#997819] mt-1">•</span> Request correction of inaccurate information</li>
                  <li className="flex items-start gap-3"><span className="text-[#997819] mt-1">•</span> Request the deletion of your data</li>
                  <li className="flex items-start gap-3"><span className="text-[#997819] mt-1">•</span> Request information about how your data is processed</li>
                </ul>
                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                  To make a request regarding your data, please contact us directly.
                </p>
              </div>

              {/* Changes to This Policy */}
              <div className="group">
                <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tighter mb-4 flex items-center gap-4">
                  <span className="text-[#997819]">06.</span> Changes to This Policy
                </h2>
                <div className="h-[2px] w-12 bg-[#997819] group-hover:w-24 transition-all duration-500 mb-6" />
                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                  BizGrow Media update this Privacy Policy from time to time to reflect changes in our services, legal requirements, or website operations. Any updates will be published on this page.
                </p>
              </div>

              {/* Contact Box Box */}
              <div className="mt-24 p-12 rounded-[3rem] bg-slate-100 dark:bg-white/5 border border-[#997819] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#997819]/10 blur-3xl rounded-full" />
                <h2 className="text-3xl font-black dark:text-white uppercase mb-6">Contact Us</h2>
                <div className="space-y-4">
                  <p className="text-gray-500 dark:text-gray-400">If you have any questions regarding this Privacy Policy or your personal data, please contact BizGrow Media through our website: <a href="https://bizgrowmedia.co.uk/" target="_blank" rel="noopener noreferrer" className="text-[#997819] hover:underline">https://bizgrowmedia.co.uk/</a></p>
                  <div className="text-xl font-bold dark:text-white pt-2">
                    <p className="text-[#997819] mb-2">BizGrow Media</p>
                    <p className="text-lg font-normal">Email: <span className="font-light text-gray-600 dark:text-gray-400">info@bizgrowstudios.co.uk</span></p>
                    <p className="text-lg font-normal">Contact no: <span className="font-light dark:text-gray-400 text-gray-600">+44 7903 332433</span></p>
                  </div>
                </div>
              </div>

            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
};

export default PrivacyPolicy;