"use client";

import React, { useState } from 'react';

// Podcast Collections Data
const podcastCollections = [
  {
    id: "habib-ahsan-series",
    title: "Podcast with Habib Ahsan Series",
    description: "Exclusive sessions focusing on business mentorship, elite strategies, coaching, and scaling frameworks.",
    thumbnail: "https://img.youtube.com/vi/s8p4XBbdrEM/maxresdefault.jpg",
    episodeCount: "2 Episodes",
    podcasts: [
      {
        id: 1,
        title: "Mentor vs Coach vs Consultant | Podcast with Habib Ahsan (1st Part)",
        duration: "11:55 mins",
        episode: "Ep. 01",
        videoId: "s8p4XBbdrEM",
        fullUrl: "https://youtu.be/s8p4XBbdrEM?si=R3MzBTH5VXIXkOdt"
      },
      {
        id: 2,
        title: "Podcast with Mr Habib 3rd session",
        duration: "45:15 mins",
        episode: "Ep. 03",
        videoId: "DSKerapdl2A",
        fullUrl: "https://youtu.be/DSKerapdl2A?si=1DKTF_vmlJDuvQnd"
      }
    ]
  },
  {
    id: "mujahid-series",
    title: "Podcast with Mr Mujahid Series",
    description: "Deep dive into corporate leadership, sales strategies, hiring frameworks, and business growth insights.",
    thumbnail: "https://img.youtube.com/vi/A-hbs5Zt3yw/maxresdefault.jpg",
    episodeCount: "3 Episodes",
    podcasts: [
      {
        id: 1,
        title: "𝐓𝐇𝐄 𝐇𝐀𝐑𝐒𝐇 𝐑𝐄𝐀𝐋𝐈𝐓𝐘 𝐎𝐅 𝐓𝐄𝐂𝐇 𝐉𝐎𝐁𝐒 | 𝐏𝐎𝐃𝐂𝐀𝐒𝐓 𝐖𝐈𝐓𝐇 𝐌𝐔𝐉𝐀𝐇𝐈𝐃",
        duration: "11:07 mins",
        episode: "Ep. 01",
        videoId: "A-hbs5Zt3yw",
        fullUrl: "https://youtu.be/A-hbs5Zt3yw?si=3kLLOOa8OTeKF8sO"
      },
      {
        id: 2,
        title: "The Sales Journey Nobody Tells You About | Podcast with Mr Mujahid",
        duration: "46:04 mins",
        episode: "Ep. 02",
        videoId: "z--IIaabLas",
        fullUrl: "https://youtu.be/z--IIaabLas?si=lI7QRtesgRHcRtRw"
      },
      {
        id: 3,
        title: "Your New Hire Will Quit in 30 Days (If You Skip This) | Podcast with Mr Mujahid",
        duration: "36:42 mins",
        episode: "Ep. 03",
        videoId: "Xr-ZP7p2_Uk",
        fullUrl: "https://youtu.be/Xr-ZP7p2_Uk?si=T30d_o9cPTur76K8"
      }
    ]
  }
];

export default function PodcastPortfolio() {
  const [selectedCollection, setSelectedCollection] = useState(null);
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <section className="py-20 bg-[#0a0a0a] text-white relative overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#997819]/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-[#997819] font-semibold tracking-wider uppercase text-sm">BizGrow Media Exclusive</span>
            <h2 className="text-4xl font-extrabold tracking-tight mt-2">
              {selectedCollection ? selectedCollection.title : "Podcast Collections"}
            </h2>
          </div>
          
          {selectedCollection ? (
            <button 
              onClick={() => { setSelectedCollection(null); setActiveVideo(null); }}
              className="mt-4 md:mt-0 flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-800 hover:bg-[#997819] text-sm font-medium transition-colors border border-zinc-700"
            >
              <span>← Back to Collections</span>
            </button>
          ) : (
            <p className="text-zinc-400 max-w-md mt-4 md:mt-0 text-sm">
              Explore elite podcast series categorized by hosts and masterclass modules.
            </p>
          )}
        </div>

        {/* Condition: Agar koi collection select nahi hui, toh Collections ki Grid dikhao */}
        {!selectedCollection ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {podcastCollections.map((collection) => (
              <div 
                key={collection.id}
                onClick={() => setSelectedCollection(collection)}
                className="group bg-zinc-900/60 backdrop-blur-xl rounded-2xl overflow-hidden border border-zinc-800/80 hover:border-[#997819]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-[#997819]/10 cursor-pointer flex flex-col"
              >
                {/* Collection Cover Thumbnail */}
                <div className="relative aspect-video w-full overflow-hidden bg-zinc-950">
                  <img 
                    src={collection.thumbnail} 
                    alt={collection.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <span className="px-4 py-2 rounded-full bg-[#997819] text-white font-semibold text-sm shadow-lg group-hover:scale-105 transition-transform">
                      View Collection ({collection.episodeCount})
                    </span>
                  </div>
                </div>

                {/* Collection Details */}
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <span className="text-xs font-semibold text-[#997819] uppercase tracking-wider">Series</span>
                    <h3 className="font-bold text-xl mt-1 mb-2 text-zinc-100 group-hover:text-[#997819] transition-colors">
                      {collection.title}
                    </h3>
                    <p className="text-zinc-400 text-sm line-clamp-2">
                      {collection.description}
                    </p>
                  </div>
                  <div className="mt-6 flex items-center text-sm font-medium text-[#997819]">
                    <span>Explore Episodes</span>
                    <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Condition: Agar collection select ho chuki hai, toh uske andar ki podcasts ki grid dikhao */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fadeIn">
            {selectedCollection.podcasts.map((podcast) => (
              <div 
                key={podcast.id} 
                className="group bg-zinc-900/60 backdrop-blur-xl rounded-2xl overflow-hidden border border-zinc-800/80 hover:border-[#997819]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-[#997819]/10 flex flex-col"
              >
                {/* Video Player / Thumbnail Container */}
                <div className="relative aspect-video w-full overflow-hidden bg-zinc-950">
                  {activeVideo === podcast.id ? (
                    <iframe
                      src={`https://www.youtube.com/embed/${podcast.videoId}?autoplay=1&modestbranding=1&rel=0&iv_load_policy=3`}
                      title={podcast.title}
                      className="w-full h-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <div 
                      className="relative w-full h-full cursor-pointer group/thumb"
                      onClick={() => setActiveVideo(podcast.id)}
                    >
                      <img 
                        src={`https://img.youtube.com/vi/${podcast.videoId}/maxresdefault.jpg`} 
                        alt={podcast.title}
                        className="w-full h-full object-cover group-hover/thumb:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover/thumb:bg-black/20 transition-colors flex items-center justify-center">
                        <div className="w-14 h-14 rounded-full bg-[#997819] text-white flex items-center justify-center shadow-lg group-hover/thumb:scale-110 transition-transform">
                          <svg className="w-6 h-6 fill-current translate-x-0.5" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Content Area */}
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs text-zinc-400 mb-3">
                      <span className="px-2.5 py-1 rounded-full bg-zinc-800/80 font-medium text-zinc-300 border border-zinc-700/50">
                        {podcast.episode}
                      </span>
                      <span className="flex items-center gap-1 font-mono">
                        ⏱ {podcast.duration}
                      </span>
                    </div>
                    
                    <h3 className="font-bold text-lg mb-4 text-zinc-100 group-hover:text-[#997819] transition-colors line-clamp-2">
                      {podcast.title}
                    </h3>
                  </div>
                  
                  <a 
                    href={podcast.fullUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-zinc-800/80 hover:bg-[#997819] text-zinc-200 hover:text-white py-3 px-4 rounded-xl font-medium text-sm transition-all duration-300 border border-zinc-700/50 hover:border-[#997819] group/btn"
                  >
                    <span>Watch on YouTube</span>
                    <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}