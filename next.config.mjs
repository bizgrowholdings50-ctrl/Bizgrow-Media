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
      // 1. OLD REDIRECTS (Maintain Rakha Hai)
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

      // 2. SPAM & HACKING PROTECTION (Simplifying for Turbopack)

      // WP Folders Fix (Individual rules instead of prefix pattern)
      { source: '/wp-admin/:p*', destination: '/', permanent: true },
      { source: '/wp-content/:p*', destination: '/', permanent: true },
      { source: '/wp-includes/:p*', destination: '/', permanent: true },
      
      // Numeric Spam Fix (Catch-all without complex prefix)
      {
        source: '/:path(\\d{5,})', 
        destination: '/',
        permanent: true,
      },

      // File Extensions (.php aur .html attempts)
      { source: '/:p1*.php', destination: '/', permanent: true },
      { source: '/:p2*.html', destination: '/', permanent: true },
      
      // Feed Spam
      { source: '/:p3*/feed/', destination: '/', permanent: true }
    ];
  },
};

export default nextConfig;