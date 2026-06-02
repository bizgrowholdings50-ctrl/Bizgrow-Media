// app/sitemap.js

export default async function sitemap() {
  const baseUrl = 'https://bizgrowmedia.co.uk';

  let blogUrls = [];
  
  try {
    // WordPress se blogs fetch karna (Subdomain use ho rahi hai)
    const response = await fetch('https://cms.bizgrow-digital.co.uk/wp-json/wp/v2/posts?_fields=slug,modified&per_page=100');
    
    if (response.ok) {
      const posts = await response.json();
      blogUrls = posts.map((post) => ({
        url: `${baseUrl}/${post.slug}/`, // Aapka folder 'blogs' hai
        lastModified: new Date(post.modified),
        changeFrequency: 'weekly',
        priority: 0.7,
      }));
    }
  } catch (error) {
    console.error('Sitemap fetch error:', error);
  }

  // Aapke folder structure ke mutabiq saare pages
  const staticPages = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'always', priority: 1 },
    { url: `${baseUrl}/about-us/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/contact-us/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/blogs/`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/content-engine/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/growth-engine/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/our-services/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/packages/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/studio-production/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/authority-builder/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/terms/`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/privacy-policy/`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
  ];

  return [...staticPages, ...blogUrls];
}