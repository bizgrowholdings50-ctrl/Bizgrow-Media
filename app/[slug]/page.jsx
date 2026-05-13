import { notFound } from "next/navigation";
import Link from "next/link";

// 1. Pehle function define karna lazmi hai (Error Fix)
async function getPost(slug) {
  try {
    const res = await fetch(
      `https://cms.bizgrow-digital.co.uk/wp-json/wp/v2/posts?slug=${slug}&_embed`,
      {
        next: { revalidate: 3600 },
      }
    );
    if (!res.ok) return null;
    const data = await res.json();
    return data[0];
  } catch (error) {
    console.error("Fetch error:", error);
    return null;
  }
}


// 2. Metadata Build Fix
export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;
  const post = await getPost(slug);

  // Build time par agar post na mile to default meta return karein
  if (!post) {
    return { title: "Bizgrow Digital" };
  }

  const seoTitle = post.yoast_head_json?.title || post.title?.rendered || "Bizgrow Digital";
  const seoDesc = post.yoast_head_json?.description || "";

  return {
    title: seoTitle,
    description: seoDesc,
    alternates: {
      canonical: `https://bizgrow-digital.co.uk/${slug}/`,
    },
  };
}
// --- Metadata & Canonical End ---
export default async function SingleBlogPost({ params }) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) return notFound();

  return (
    <div className="min-h-screen bg-white dark:bg-[#000B25] dark:border-b-2">
      {/* Professional Header */}
      <header className="max-w-4xl mt-10 mx-auto px-6 pt-16 pb-10">
        <Link
          href="/blogs"
          className="text-[#997819] font-bold text-sm tracking-widest uppercase mb-8 inline-block hover:underline"
        >
          ← Back to Insights
        </Link>
        <h1
          className="text-[28px] sm:text-4xl md:text-5xl font-black text-[#12066a] dark:text-white leading-[1.2] mb-6 tracking-tight break-words overflow-wrap-anywhere"
          dangerouslySetInnerHTML={{ __html: post.title.rendered }}
        />
        <div className="text-[#997819] font-medium">
          {new Date(post.date).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </div>
      </header>

      {/* Featured Image */}
      {post.yoast_head_json?.og_image?.[0]?.url && (
        <div className="max-w-4xl mx-auto px-4  mb-16">
          <div
            className="relative aspect-video rounded-[2.5rem]  overflow-hidden shadow-2xl
           border-4 border-white"
          >
            <img
              src={post.yoast_head_json.og_image[0].url}
              alt={post.title.rendered}
              className="w-full h-full object-cover "
            />
          </div>
        </div>
      )}

      {/* 🚀 Professional Typography & Spacing Section */}
      <article className="max-w-3xl mx-auto px-6 pb-24">
        <div
          className="
            /* Paragraph Spacing (As per WP Example) */
            prose-p:text-xl prose-p:leading-[1.9]  prose-p:text-gray-700 dark:text-white prose-p:mb-12
            
            /* Large & Bold Headings */
            prose-h2:text-4xl prose-h2:font-black prose-h2:text-[#12066a]  prose-h2:mt-20 prose-h2:mb-8 
            prose-h2:tracking-tight prose-h3:text-2xl prose-h3:font-extrabold 
            prose-h3:text-[#12066a] prose-h3:mt-14 m prose-h3:mb-6
            
            /* Professional Lists */
            prose-li:text-lg prose-li:text-gray-700  prose-li:mb-4
            prose-ul:my-10 prose-ul:list-disc prose-ul:pl-6 mb-10
            
            /* Links & Bolds */
            prose-strong:text-[#12066a] prose-strong:font-black
            prose-a:text-[#997819] prose-a:font-bold prose-a:underline
            
            max-w-none blog-content-flow
          "
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        />
      </article>
    </div>
  );
}
