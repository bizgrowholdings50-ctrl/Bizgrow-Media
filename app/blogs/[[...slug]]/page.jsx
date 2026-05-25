import Link from "next/link";
import Image from "next/image";
import FilterBar from "@/components/FilterBar.jsx"; // Digital site wala FilterBar
import { notFound } from "next/navigation";

// Digital site ki branding colors
const BRAND_ORANGE = "#997819";
const BRAND_BLUE = "#12066a";
const WP_FIELDS = "_fields=id,slug,title,yoast_head_json";

export const metadata = {
  title: "Business Growth Insights Hub | BizGrow Media",
  description: "Explore real business insights, branding ideas, podcasts, and content strategies designed to help businesses build trust and grow.",
};

async function getData(page = 1, catSlug = null) {
  let catId = null;
  const baseUrl = "https://cms.bizgrow-digital.co.uk/wp-json/wp/v2";

  try {
    if (catSlug) {
      const catRes = await fetch(`${baseUrl}/categories?slug=${catSlug}`, { next: { revalidate: 3600 } });
      const cats = await catRes.json();
      catId = cats.length > 0 ? cats[0].id : null;
      if (!catId) return { posts: [], totalPages: 0, categories: [] };
    }

    const postsUrl = `${baseUrl}/posts?_embed&per_page=9&page=${page}&${WP_FIELDS}${catId ? `&categories=${catId}` : ""}`;
    
    const [postsRes, catsRes] = await Promise.all([
      fetch(postsUrl, { next: { revalidate: 3600 } }),
      fetch(`${baseUrl}/categories?per_page=30&_fields=id,name,slug`, { next: { revalidate: 3600 } })
    ]);

    if (!postsRes.ok) return { posts: [], totalPages: 0, categories: [] };

    return { 
      posts: await postsRes.json(), 
      totalPages: parseInt(postsRes.headers.get("X-WP-TotalPages") || 1), 
      categories: await catsRes.json() 
    };
  } catch (error) {
    console.error("Fetch Error:", error);
    return { posts: [], totalPages: 0, categories: [] };
  }
}

export default async function BlogPage({ params }) {
  const { slug: slugArray = [] } = await params;

  // 🚀 Validation
  if (slugArray.length > 0 && slugArray[0] !== "category" && slugArray[0] !== "page") {
    return notFound(); 
  }

  let currentPage = 1, activeCat = null;

  if (slugArray[0] === "category") {
    activeCat = slugArray[1];
    if (slugArray[2] === "page") currentPage = parseInt(slugArray[3]);
  } else if (slugArray[0] === "page") {
    currentPage = parseInt(slugArray[1]);
  }

  const { posts, totalPages, categories } = await getData(currentPage, activeCat);
  
  if (totalPages > 0 && currentPage > totalPages) return notFound();

  const getPageLink = (p) => `/blogs/${activeCat ? `category/${activeCat}/` : ""}${p === 1 ? "" : `page/${p}/`}`;

  return (
    <section className="w-full bg-white dark:bg-gray-900 py-8 md:py-20 overflow-x-hidden transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 mt-20 md:mt-10">
        
        {/* Header Section */}
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-[#12066a] dark:text-white mb-4 uppercase tracking-tight">
            {activeCat ? activeCat.replace(/-/g, " ") : "Digital Marketing"}{" "}
            <span className="text-[#997819]">Insights</span>
          </h1>
          <div className="w-16 h-1.5 bg-[#997819] mx-auto rounded-full" />
        </header>

        {/* FilterBar - Make sure FilterBar is ready for digital site colors */}
        <div className="w-full mb-12">
          <FilterBar categories={categories} activeColor="#997819" />
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {Array.isArray(posts) && posts.map((post) => (
            <article key={post.id} className="group bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-white/5 flex flex-col overflow-hidden hover:shadow-2xl hover:shadow-[#997819]/10 transition-all duration-500">
              <div className="relative h-60 w-full overflow-hidden">
                <Image 
                  src={post.yoast_head_json?.og_image?.[0]?.url || "/placeholder.jpg"} 
                  alt="blog" fill unoptimized className="object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <h2 className="text-xl font-extrabold text-[#12066a] dark:text-white mb-6 line-clamp-2 min-h-[3.5rem] leading-snug" dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                
                <Link href={`/${post.slug}/`} className="mt-auto text-[#997819] font-black text-[11px] uppercase tracking-[0.2em] flex items-center gap-2 group/btn transition-all">
                  Read Full Story 
                  <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Enhanced Pagination */}
        {totalPages > 1 && (
          <nav className="flex flex-col sm:flex-row justify-center items-center gap-8 mt-20 pt-10 border-t border-gray-100 dark:border-white/5">
            <div className="flex flex-wrap justify-center gap-3">
              {[...Array(totalPages)].map((_, i) => (
                <Link 
                  key={i} 
                  href={getPageLink(i + 1)} 
                  className={`w-11 h-11 flex items-center justify-center rounded-full text-sm font-black transition-all ${currentPage === i + 1 ? "bg-[#997819] text-white shadow-lg shadow-[#997819]/30" : "text-gray-400 dark:text-gray-500 hover:bg-gray-100 dark:hover:bg-white/5"}`}
                >
                  {i + 1}
                </Link>
              ))}
            </div>
            
            {currentPage < totalPages && (
              <Link 
                href={getPageLink(currentPage + 1)} 
                className="px-10 py-4 rounded-full border-2 border-[#997819] text-[#997819] font-black text-xs uppercase tracking-widest hover:bg-[#997819] hover:text-white transition-all duration-300 shadow-sm"
              >
                Next Page
              </Link>
            )}
          </nav>
        )}
      </div>
    </section>
  );
}