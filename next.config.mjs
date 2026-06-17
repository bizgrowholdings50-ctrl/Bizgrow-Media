/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "bizgrowmedia.co.uk", pathname: "/**" },
      { protocol: "https", hostname: "bizgrow-digital.co.uk", pathname: "/**" },
      {
        protocol: "https",
        hostname: "cms.bizgrow-digital.co.uk",
        pathname: "/**",
      },
    ],
  },

  async redirects() {
    return [
      // ==========================================
      // 1. GENUINE PAGES & BLOGS (Top Priority)
      // ==========================================
      {
        source: "/web-design-services/",
        destination: "/studio-production/",
        permanent: true,
      },
      {
        source: "/digital-marketing-services/",
        destination: "/our-media-services/",
        permanent: true,
      },
      {
        source: "/lead-generation-solutions/",
        destination: "/studio-production/",
        permanent: true,
      },
      {
        source: "/wordpress-website/",
        destination: "/authority-builder/",
        permanent: true,
      },
      {
        source: "/facebook-marketing-services/",
        destination: "/content-engine/",
        permanent: true,
      },
      {
        source: "/social-media-marketing/",
        destination: "/authority-builder/",
        permanent: true,
      },
      {
        source: "/graphic-design-services/",
        destination: "/",
        permanent: true,
      },
      {
        source: "/search-engine-optimisation/",
        destination: "/",
        permanent: true,
      },
      {
        source: "/web-development/",
        destination: "/growth-engine/",
        permanent: true,
      },
      {
        source: "/our-digital-services/",
        destination: "/our-media-services/",
        permanent: true,
      },
      { source: "/about-us/", destination: "/", permanent: true },
      {
        source: "/email-marketing/",
        destination: "/growth-engine/",
        permanent: true,
      },
      {
        source: "/creative-content/",
        destination: "/authority-builder/",
        permanent: true,
      },
      {
        source: "/on-page-seo-audit-services-improve-uk-googleankings/",
        destination: "/on-page-seo-audit-services-improve-uk-google-rankings/",
        permanent: true,
      },
      {
        source:
          "/why-on-page-seo-matters-for-small-businesses-and-how-to-do-it-right/",
        destination: "/why-on-page-seo-matters-for-small-businesses/",
        permanent: true,
      },
      {
        source:
          "/why-on-page-seo-matters-for-small-businesses-how-to-do-it-right/",
        destination: "/why-on-page-seo-matters-for-small-businesses/",
        permanent: true,
      },
      {
        source: "/how-does-on-page-seo-differ-from-off-page-seo/",
        destination: "/on-page-seo-differ-from-off-page-seo/",
        permanent: true,
      },
      {
        source: "/blogs/how-good-ux-can-keep-visitors-on-your-website-longer/",
        destination: "/how-good-ux-can-keep-visitors-on-your-website-longer/",
        permanent: true,
      },
      {
        source: "/blogs/how-to-search-multiple-keywords-on-google/",
        destination: "/how-to-search-multiple-keywords-on-google/",
        permanent: true,
      },
      {
        source: "/how-to-do-proper-e-commerce-keyword-research/",
        destination: "/e-commerce-keyword-research/",
        permanent: true,
      },
      {
        source:
          "/on-page-seo-audit-services-boost-your-google-rankings-in-the-uk/",
        destination: "/on-page-seo-audit-services-improve-uk-google-rankings/",
        permanent: true,
      },
      {
        source: "/affordable-seo-services-uk-in-2026-the-complete-guide/",
        destination: "/affordable-seo-services-uk/",
        permanent: true,
      },
      {
        source:
          "/how-facebook-marketing-can-accelerate-your-business-growth-efficiently/",
        destination:
          "/how-facebook-marketing-can-accelerate-your-business-growth/",
        permanent: true,
      },
      {
        source: "/how-to-do-web-design-without-coding-in-2026/",
        destination: "/web-design-without-coding/",
        permanent: true,
      },
      {
        source: "/download/",
        destination: "/",
        permanent: true,
      },
      {
        source: "/cgi-bin/",
        destination: "/",
        permanent: true,
      },
      {
        source: "/web-design/",
        destination: "/studio-production/",
        permanent: true,
      },
      {
        source: "/tag/leadgeneration/",
        destination: "/",
        permanent: true,
      },
      {
        source: "/tag/contentmarketing/",
        destination: "/",
        permanent: true,
      },
      {
        source: "/tag/digitalagency/",
        destination: "/",
        permanent: true,
      },
      {
        source: "/tag/seo/",
        destination: "/",
        permanent: true,
      },
      {
        source: "/tag/ukbusiness/",
        destination: "/",
        permanent: true,
      },
      {
        source: "/7-best-ai-porn-sites-to-watch-ai-generated-porn/",
        destination: "/",
        permanent: true,
      },
      {
        source: "/ppc-management/",
        destination: "/",
        permanent: true,
      },
      {
        source: "/portfolio/",
        destination: "/",
        permanent: true,
      },
      {
        source: "/digital-audit/",
        destination: "/",
        permanent: true,
      },
      {
        source: "/recruit/",
        destination: "/",
        permanent: true,
      },
      {
        source: "/discover-the-joys-of-meeting-fucking-local-singles/",
        destination: "/",
        permanent: true,
      },
      {
        source: "/the-appeal-of-port-gamings-an-in-depth-expedition/",
        destination: "/",
        permanent: true,
      },
      {
        source: "/request-a-quotation/",
        destination: "/contact-us/",
        permanent: true,
      },
      {
        source: "/social-media-advertising/",
        destination: "/growth-engine/",
        permanent: true,
      },
      {
        source: "/social-media-management/",
        destination: "/growth-engine/",
        permanent: true,
      },
      {
        source: "/lead-generation/",
        destination: "/authority-builder/",
        permanent: true,
      },
      {
        source: "/search-engine-optimization/",
        destination: "/authority-builder/",
        permanent: true,
      },
      {
        source: "/facebook-marketing/",
        destination: "/content-engine/",
        permanent: true,
      },
      {
        source: "/web-design-and-development/",
        destination: "/content-engine/",
        permanent: true,
      },
      {
        source: "/why-email-marketing-service/",
        destination: "/",
        permanent: true,
      },
      {
        source: "/how-to-write-an-seo-optimised-blog-in-2026/",
        destination: "/",
        permanent: true,
      },
       {
        source: "/the-ultimate-guide-to-creating-scroll-stopping-content-in-the-uk/",
        destination: "/",
        permanent: true,
      },
       {
        source: "/how-do-i-start-marketing-on-facebook-a-complete-guide-2026/",
        destination: "/",
        permanent: true,
      },
       {
        source: "/wordpress-on-page-seo-checklist/",
        destination: "/",
        permanent: true,
      },
       {
        source: "/15-of-the-most-important-on-page-seo-tactics-in-the-uk/",
        destination: "/",
        permanent: true,
      },
       {
        source: "/10-creative-content-techniques-to-improve-seo-results/",
        destination: "/",
        permanent: true,
      },
       {
        source: "/social-media-marketing-advantages-and-disadvantages/",
        destination: "/",
        permanent: true,
      },
       {
        source: "/local-seo-for-small-businesses-in-the-uk/",
        destination: "/",
        permanent: true,
      },
       {
        source: "/will-ai-replace-graphic-designers-in-2026/ ",
        destination: "/",
        permanent: true,
      },
      {
        source: "/blogs/social-media-marketing-advantages-and-disadvantages/",
        destination: "/social-media-marketing-advantages-and-disadvantages/",
        permanent: true,
      },

      // ==========================================
      // 2. QUERY PARAMETER HACKING LINKS
      // ==========================================
      {
        source: "/discount.php",
        has: [{ type: "query", key: "29399458560" }],
        destination: "/",
        permanent: true,
      },
      {
        source: "/\\*/", // Yeh exact "/*/" path ko target karega
        destination: "/",
        permanent: true,
      },
      {
        source: "/wp-includes/revisions.php",
        has: [{ type: "query", key: "b" }],
        destination: "/",
        permanent: true,
      },
      {
        source: "/zhHant/product/surugaya/78565929/",
        has: [{ type: "query", key: "campaign_uid" }],
        destination: "/content-engine/",
        permanent: true,
      },

      // ==========================================
      // 3. SPAM & HACKING PROTECTION (Strict Matches for trailingSlash)
      // ==========================================
      { source: "/wp-admin/:p*", destination: "/", permanent: true },
      { source: "/wp-content/:p*", destination: "/", permanent: true },
      { source: "/wp-includes/:p*", destination: "/", permanent: true },

      {
        source: "/:path(\\d{5,})",
        destination: "/",
        permanent: true,
      },

      // Strict trailing slash variations for system scripts
      { source: "/:p1*.php", destination: "/", permanent: true },
      { source: "/:p1*.php/", destination: "/", permanent: true },
      { source: "/:p2*.html", destination: "/", permanent: true },
      { source: "/:p2*.html/", destination: "/", permanent: true },
      { source: "/:p3*/feed/", destination: "/", permanent: true },

      // ==========================================
      // 4. THE CATCH-ALL (Absolutely Last Option)
      // ==========================================
    ];
  },
};

export default nextConfig;
