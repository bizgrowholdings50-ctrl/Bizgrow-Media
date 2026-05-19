import { notFound } from "next/navigation";
import Link from "next/link";
import styles from "./BlogContent.module.css"; // 👈 Sahi folder structure ke mutabiq import kiya

// 1. Fetch Post Function
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

// 2. Metadata & Canonical Build
export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;
  const post = await getPost(slug);

  // Build time par agar post na mile to default meta return karein
  if (!post) {
    return { title: "BizGrow Media" };
  }

  const seoTitle = post.yoast_head_json?.title || post.title?.rendered || "BizGrow Media";
  const seoDesc = post.yoast_head_json?.description || "";

  return {
    title: seoTitle,
    description: seoDesc,
    alternates: {
      canonical: `https://bizgrowmedia.co.uk/${slug}/`, // 👈 New domain migration fix
    },
  };
}

// 3. Main Component
export default async function SingleBlogPost({ params }) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) return notFound();

  return (
    <div className="min-h-screen bg-white dark:bg-[#000B25] dark:border-b-2">
      {/* Professional Header */}
      <header className="max-w-4xl mx-auto px-6 pt-16 pb-10">
        <Link
          href="/blogs"
          className="text-[#997819] mt-10 font-bold text-sm tracking-widest uppercase mb-8 inline-block hover:underline"
        >
          &larr; Back to Insights
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
        <div className="max-w-4xl mx-auto px-4 mb-16">
          <div className="relative aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
            <img
              src={post.yoast_head_json.og_image[0].url}
              alt={post.title.rendered}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}

      {/* 🚀 Professional Typography & Spacing Section */}
      <article className="max-w-3xl mx-auto px-6 pb-24">
        <div
          className={`${styles.blogContentFlow} max-w-none`} 
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        />
      </article>
    </div>
  );
}