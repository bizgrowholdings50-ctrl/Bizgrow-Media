"use client";
import { useRouter, useParams } from "next/navigation";
import { useTransition, useState, useRef, useEffect } from "react";

export default function FilterBar({ categories }) {
  const router = useRouter();
  const params = useParams();
  const [isPending, startTransition] = useTransition();
  const [clickedId, setClickedId] = useState(null);
  const scrollRef = useRef(null);

  // Digital site branding colors
  const BRAND_ORANGE = "#997819";
  const BRAND_BLUE = "#12066a";

  const slugArray = params?.slug || [];
  const activeCatSlug = slugArray[0] === "category" ? slugArray[1] : null;

  useEffect(() => {
    if (activeCatSlug && scrollRef.current) {
      const activeBtn = scrollRef.current.querySelector(".active-cat");
      if (activeBtn) {
        activeBtn.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    }
  }, [activeCatSlug]);

  const handleFilter = (slug, id) => {
    if (isPending) return;
    setClickedId(id);
    startTransition(() => {
      const url = slug ? `/blogs/category/${slug}/` : "/blogs/";
      router.push(url, { scroll: false });
    });
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* 🌫️ Left Fade - Digital Branding (White for light mode) */}
      <div className="md:hidden absolute left-0 top-0 bottom-0 w-10 bg-gradient-to-r from-white dark:from-black to-transparent z-10 pointer-events-none" />

      {/* 🚀 Scrollable Container */}
      <div 
        ref={scrollRef}
        className="flex overflow-x-auto md:flex-wrap md:justify-center gap-3 px-6 md:px-0 pb-5 no-scrollbar items-center scroll-smooth"
      >
        {/* ALL Button */}
        <button
          onClick={() => handleFilter(null, 'all')}
          disabled={isPending}
          className={`flex-shrink-0 px-6 py-2.5 rounded-full text-[10px] md:text-[11px] font-black uppercase border-2 transition-all duration-300
            ${!activeCatSlug 
              ? `active-cat bg-[${BRAND_ORANGE}] text-white border-[${BRAND_ORANGE}] shadow-lg shadow-[#B54118]/20` 
              : 'bg-white dark:bg-gray-900 border-gray-200 dark:border-[#997819] text-black dark:text-white active:scale-95'}`}
          style={!activeCatSlug ? { backgroundColor: BRAND_ORANGE, borderColor: BRAND_ORANGE } : {}}
        >
          All
        </button>

        {/* Categories */}
        {categories.map((cat) => {
          const isActive = activeCatSlug === cat.slug;
          const isThisLoading = isPending && clickedId === cat.id;

          return (
            <button
              key={cat.id}
              onClick={() => handleFilter(cat.slug, cat.id)}
              disabled={isPending}
              className={`flex-shrink-0 px-6 py-2.5 rounded-full text-[10px] md:text-[11px] font-black uppercase border-2 transition-all relative duration-300
                ${isActive 
                  ? `active-cat bg-[${BRAND_ORANGE}] text-white border-[${BRAND_ORANGE}] shadow-lg shadow-[#B54118]/20` 
                  : `bg-white dark:bg-gray-900 border-gray-200 dark:border-[#997819]/40 text-black dark:text-white hover:border-[${BRAND_ORANGE}]/40 active:scale-95`}`}
              style={isActive ? { backgroundColor: BRAND_ORANGE, borderColor: BRAND_ORANGE } : {}}
            >
              <span className={isThisLoading ? "opacity-0" : "opacity-100"}>
                <span dangerouslySetInnerHTML={{ __html: cat.name }} />
              </span>
              
              {isThisLoading && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className={`w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin`}></div>
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* 🌫️ Right Fade - Digital Branding */}
      <div className="md:hidden absolute right-0 top-0 bottom-0 w-14 bg-gradient-to-l from-white dark:from-black via-white/70 dark:via-black/70 to-transparent z-10 pointer-events-none" />

      {/* Custom Scrollbar Styling */}
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          height: 3px;
        }
        .no-scrollbar::-webkit-scrollbar-thumb {
          background-color: ${BRAND_ORANGE}33;
          border-radius: 10px;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}