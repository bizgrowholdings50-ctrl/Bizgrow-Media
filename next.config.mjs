/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,

  images: {
    remotePatterns: [
      { protocol: "https", hostname: "bizgrowmedia.co.uk", pathname: "/**" },
      { protocol: "https", hostname: "bizgrow-digital.co.uk", pathname: "/**" },
      { protocol: "https", hostname: "cms.bizgrow-digital.co.uk", pathname: "/**" },
    ],
  },

  async redirects() {
    return [
      // 1. OLD REDIRECTS (Maintained)
      { source: "/web-design-services/", destination: "/studio-production/", permanent: true },
      { source: "/digital-marketing-services/", destination: "/content-engine/", permanent: true },
      { source: "/lead-generation-solutions/", destination: "/studio-production/", permanent: true },
      { source: "/wordpress-website/", destination: "/authority-builder/", permanent: true },
      { source: "/facebook-marketing-services/", destination: "/content-engine/", permanent: true },
      { source: "/social-media-marketing/", destination: "/authority-builder/", permanent: true },
      { source: "/graphic-design-services/", destination: "/", permanent: true },
      { source: "/search-engine-optimisation/", destination: "/", permanent: true },
      { source: "/web-development/", destination: "/growth-engine/", permanent: true },
      { source: "/our-digital-services/", destination: "/our-media-services/", permanent: true },
      { source: "/about-us/", destination: "/", permanent: true },
      { source: "/email-marketing/", destination: "/growth-engine/", permanent: true },
      { source: "/creative-content/", destination: "/authority-builder/", permanent: true },
      { source: "/on-page-seo-audit-services-improve-uk-googleankings/", destination: "/on-page-seo-audit-services-improve-uk-google-rankings/", permanent: true },
      { source: "/why-on-page-seo-matters-for-small-businesses-and-how-to-do-it-right/", destination: "/why-on-page-seo-matters-for-small-businesses/", permanent: true },
      { source: "/why-on-page-seo-matters-for-small-businesses-how-to-do-it-right/", destination: "/why-on-page-seo-matters-for-small-businesses/", permanent: true },
      { source: "/how-does-on-page-seo-differ-from-off-page-seo/", destination: "/on-page-seo-differ-from-off-page-seo/", permanent: true },

      // 2. SPAM & HACKING PROTECTION
      
      // Rule for Japanese Query Spam
      {
        source: '/:path*.php',
        has: [{ type: 'query', key: 'b' }],
        destination: '/',
        permanent: true,
      },
      // Fixed Numeric Rule (Using catch-all for stability)
      {
        source: '/:path(\\d{5,})', 
        destination: '/',
        permanent: true,
      },
      // WordPress System & Hacked Folders
      {
        source: '/wp-:path*',
        destination: '/',
        permanent: true,
      },
      // All other .php hacking attempts
      {
        source: '/:path*.php',
        destination: '/',
        permanent: true,
      },
      // Hacked .html files
      {
        source: '/:path*.html',
        destination: '/',
        permanent: true,
      },
      // Feed Spam Fix
      {
        source: '/:path*/feed/',
        destination: '/',
        permanent: true,
      }
    ];
  },
};

export default nextConfig;