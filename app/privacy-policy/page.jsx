import Image from "next/image";
import React from "react";
import FadeIn from "@components/MotionWrapper";

export const metadata = {
  title: "Privacy Policy UK | BizGrow Digital | Protecting Your Data",
  description: "Read our Privacy Policy: BizGrow Digital protects your data, ensures GDPR compliance, and explains how we handle personal information.",
  alternates: {
    canonical: "https://bizgrowmedia.co.uk/privacy-policy/",
  },
};

const PrivacyPolicy = () => {
  return (
    <main className="w-full bg-white dark:bg-black overflow-hidden">
      {/* --- HERO SECTION: Consistent with other pages --- */}
      <div className="relative h-[60vh] md:h-screen w-full flex items-center justify-center overflow-hidden">
        <Image
          src="/privacy-hero-s.png" // Aik clean legal/abstract image laga dein
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
              Last Updated: <span className="text-white font-medium">January 2026</span>
            </p>
          </FadeIn>
        </div>
      </div>

      {/* --- CONTENT SECTION: Premium Typography --- */}
      <section className="py-24 bg-white dark:bg-[#020817]">
        <div className="max-w-4xl mx-auto px-6">
          <FadeIn direction="up" delay={0.2}>
            {/* Main Intro Text */}
            <p className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white leading-tight mb-16 border-l-8 border-[#997819] pl-8">
              At BizGrow Media, we respect your privacy and are committed to protecting 
              your personal information in line with <span className="text-[#997819]">UK GDPR.</span>
            </p>

            {/* Structured Content */}
            <div className="space-y-16">
              {[
                {
                  title: "Information We Collect",
                  desc: "When you visit our website or contact us, we may collect basic personal information such as your name, email address, phone number, business details, and limited technical data like IP address and website usage. We only collect information that is necessary to communicate with you and improve our services."
                },
                {
                  title: "How We Use Your Information",
                  desc: "We use your information to respond to enquiries, deliver our Media services, improve website performance, maintain security, and share relevant updates where consent has been given. Your data is never sold or shared for unrelated purposes."
                },
                {
                  title: "Cookies & Website Analytics",
                  desc: "Our website uses cookies to enhance user experience and analyse website traffic. These cookies help us understand how visitors interact with our site. You can control or disable cookies at any time through your browser settings."
                },
                {
                  title: "Data Security",
                  desc: "We take appropriate technical and organisational measures to protect your data from unauthorised access, loss, or misuse. Only authorised personnel and trusted service providers can access your information."
                },
                {
                  title: "Third-Party Services",
                  desc: "We use trusted third-party tools for analytics, hosting, or communication. These providers are GDPR-compliant and only process data on our behalf."
                },
                {
                  title: "Your Rights",
                  desc: "You have the right to access, update, or request deletion of your personal data at any time. You also withdraw consent for marketing communications whenever you choose."
                }
              ].map((section, idx) => (
                <div key={idx} className="group">
                  <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tighter mb-4 flex items-center gap-4">
                    <span className="text-[#997819]">0{idx + 1}.</span>
                    {section.title}
                  </h2>
                  {/* Heading ke niche orange line effect */}
                  <div className="h-[2px] w-12 bg-[#997819] group-hover:w-24 transition-all duration-500 mb-6" />
                  <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                    {section.desc}
                  </p>
                </div>
              ))}

              {/* Contact Box */}
              <div className="mt-24 p-12 rounded-[3rem] bg-slate-100 dark:bg-white/5 border border-[#997819] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#997819]/10 blur-3xl rounded-full" />
                <h2 className="text-3xl font-black dark:text-white uppercase mb-6">Contact Us</h2>
                <div className="space-y-4">
                  <p className="text-gray-500 dark:text-gray-400">If you have any questions about this Privacy Policy, reach out to us:</p>
                  <div className="text-xl font-bold dark:text-white">
                    <p className="text-[#997819]">BizGrow Media</p>
                    <p>Email: <span className="font-light text-gray-600 dark:text-gray-400">info@bizgrowstudios.co.uk</span></p>
                    <p>Contact no: <span className="font-light dark:text-gray-400 text-gray-600">+44 7903 332433</span></p>
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