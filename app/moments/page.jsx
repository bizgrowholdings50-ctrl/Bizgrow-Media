// app/moments/page.js
import MomentsGrid from "@/components/MomentsGrid";

export const metadata = {
  title: "BizGrow Moments | Media, Podcasts & Conferences",
  description: "Explore our live podcast sessions, high-profile industry conferences, and on-ground corporate engagements.",
};

export default function MomentsPage() {
  return (
    <main className="min-h-screen bg-[#0b033c] text-white pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Page Header (Server-rendered for SEO) */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[#997819] font-black uppercase tracking-[0.3em] text-xs block mb-3">
            Our Footprint & Engagement
          </span>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight uppercase">
            BizGrow <span className="text-[#997819]">Moments</span>
          </h1>
          <p className="text-gray-300 mt-4 text-base md:text-lg">
            Explore our live podcast sessions, high-profile industry conferences, and on-ground engagements driving compliance and corporate excellence across the UK.
          </p>
        </div>

        {/* Interactive Animated Grid (Client Component) */}
        <MomentsGrid />

        {/* Bottom CTA Box */}
        <div className="mt-20 text-center bg-white/5 border border-white/10 rounded-2xl p-10 backdrop-blur-md max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <h3 className="text-xl font-bold">Want to feature on our podcast or partner with us?</h3>
            <p className="text-gray-400 text-sm mt-1">Get in touch with our leadership team for media collaborations.</p>
          </div>
          <a
            href="/contact-us"
            className="px-8 py-3.5 bg-[#997819] text-white font-bold text-sm uppercase tracking-wider rounded-xl hover:bg-[#b58d20] transition-colors shrink-0 shadow-lg shadow-[#997819]/20"
          >
            Contact Team
          </a>
        </div>

      </div>
    </main>
  );
}