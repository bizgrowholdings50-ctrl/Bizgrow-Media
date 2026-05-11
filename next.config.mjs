/** @type {import('next').NextConfig} */
const nextConfig = {
  // Purani site ke SEO links aur structure ko maintain rakhne ke liye
  trailingSlash: true,
  
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'bizgrowmedia.co.uk', // Naya domain
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'bizgrow-digital.co.uk', // Purana domain images support ke liye
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cms.bizgrow-digital.co.uk', // CMS images support
        pathname: '/**',
      },
    ],
  },

  async redirects() {
    return [
      // Important SEO Slugs Migration
      {
        source: '/web-design-services/',
        destination: '/web-development/',
        permanent: true, // 301 Redirect for SEO
      },

       {
        source: '/digital-marketing-services/',
        destination: '/content-engine/',
        permanent: true, // 301 Redirect for SEO
      },
       {
        source: '/lead-generation-solutions/',
        destination: '/studio-production/',
        permanent: true, // 301 Redirect for SEO
      },
       {
        source: '/email-marketing/',
        destination: '/growth-engine/',
        permanent: true, // 301 Redirect for SEO
      },

      {
        source: '/creative-content',
        destination: '/authority-builder',
        permanent: true, // 301 Redirect (SEO ke liye permanent change)
      },
      {
        source: '/on-page-seo-audit-services-improve-uk-googleankings/',
        destination: '/on-page-seo-audit-services-improve-uk-google-rankings/',
        permanent: true,
      },
      {
        source: '/why-on-page-seo-matters-for-small-businesses-and-how-to-do-it-right/',
        destination: '/why-on-page-seo-matters-for-small-businesses/',
        permanent: true,
      },
      {
        source: '/why-on-page-seo-matters-for-small-businesses-how-to-do-it-right/',
        destination: '/why-on-page-seo-matters-for-small-businesses/',
        permanent: true,
      },
      {
        source: '/how-does-on-page-seo-differ-from-off-page-seo/',
        destination: '/on-page-seo-differ-from-off-page-seo/',
        permanent: true,
      },
    ];
  },
};




export default nextConfig;