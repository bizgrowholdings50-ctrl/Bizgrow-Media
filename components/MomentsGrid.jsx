// components/MomentsGrid.jsx
"use client";

import Image from "next/image";

const allMoments = [
  {
    title: "The Thames Estuary Event",
    category: "Conferences & Networking",
    image: "/IMG_0365.JPG",
    span: "col-span-1 md:col-span-2 row-span-2",
  },
  {
    title: "BizGrow Media Podcast Setup",
    category: "Live Recording",
    image: "/IMG_0094.JPG",
    span: "col-span-1 md:col-span-1 row-span-1",
  },
  {
    title: "Interactive Exhibition & Booth",
    category: "Engagements",
    image: "/IMG_0347.JPG",
    span: "col-span-1 md:col-span-1 row-span-1",
  },
  {
    title: "Strategic Partnerships",
    category: "Leadership",
    image: "/IMG_0064.JPG",
    span: "col-span-1 md:col-span-1 row-span-1",
  },
  {
    title: "Live Podcast Session",
    category: "Broadcasting",
    image: "/IMG_0325.JPG",
    span: "col-span-1 md:col-span-1 row-span-1",
  },
  {
    title: "Collaborative Dialogues",
    category: "Podcasting",
    image: "/IMG_0083.JPG",
    span: "col-span-1 md:col-span-1 row-span-1",
  },
  {
    title: "Founders & Experts",
    category: "Media Presence",
    image: "/IMG_0088.JPG",
    span: "col-span-1 md:col-span-1 row-span-1",
  },
  {
    title: "Industry Conference Session",
    category: "Keynote & Audience",
    image: "/IMG_0046.JPG",
    span: "col-span-1 md:col-span-2 row-span-1",
  },
];

export default function MomentsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px] grid-flow-dense">
      {allMoments.map((item, index) => (
        <div
          key={index}
          className={`relative rounded-2xl overflow-hidden group border border-white/10 ${item.span}`}
        >
          <div className="absolute inset-0 bg-neutral-900 overflow-hidden">
            <Image
              src={item.image}
              alt={item.title}
              fill
              priority={index < 3}
              sizes="(max-width: 768px) 100vw, 33vw"
              className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 opacity-80 group-hover:opacity-100"
            />
          </div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b033c] via-[#0b033c]/40 to-transparent opacity-90 group-hover:opacity-75 transition-opacity duration-300 pointer-events-none" />

          {/* Caption */}
          <div className="absolute bottom-0 left-0 right-0 p-6 z-10 pointer-events-none">
            <span className="text-[#997819] text-xs font-bold uppercase tracking-wider block mb-1">
              {item.category}
            </span>
            <h3 className="text-xl font-bold text-white tracking-tight">
              {item.title}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
}