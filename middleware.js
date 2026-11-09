import { NextResponse } from 'next/server';

const goneUrls = [
  '/what-is-web-development-uk/',
  '/top-10-graphic-design-trends/',
  '/how-to-start-a-blog-on-wordpress/',
  '/how-good-ux-can-keep-visitors-on-your-website-longer/',
  '/what-are-the-5-elements-of-a-good-website-design/',
  '/what-is-b2b-web-development-in-the-uk/',
  '/custom-wordpress-development-services-in-the-uk/',
  '/optimise-meta-tags-for-better-on-page-seo/',
  '/what-role-does-creative-content-play-in-seo-performance/',
  '/wordpress-ecommerce-development-services/',
  '/on-page-seo-differ-from-off-page-seo/',
  '/social-media-presence-tips/',
  '/lead-generation-agency-uk-in-2026/',
  '/10-steps-keyword-research-checklist-2026/',
  '/website-design-and-development/',
  '/b2b-content-marketing-agency-uk/',
  '/top-3-marketing-challenges-killing-uk-small-businesses/',
  '/affordable-seo-services-uk/',
  '/web-design-without-coding/',
  '/social-media-for-uk-consultants/',
  '/the-ultimate-guide-to-keyword-research-tools-tips/',
  '/e-commerce-keyword-research/',
  '/are-seo-audit-services-essential-for-strong-search-performance/',
  '/on-page-seo-audit-services-improve-uk-google-rankings/',
  '/will-ai-replace-graphic-designers-in-2026/',
  '/what-are-the-7-phases-of-web-development-in-detail/',
  '/the-ultimate-guide-to-digital-marketing-lead-generation-for-the-uk/',
  '/what-is-content-marketing-types-benefits-of-content-marketing/',
  '/why-on-page-seo-matters-for-small-businesses/',
  '/how-can-web-graphic-design-elevate-your-digital-presence/',
  '/a-beginners-guide-to-email-marketing-that-actually-works/',
  '/8-effective-lead-generation-strategies/',
  '/write-better-content-with-these-e-e-a-t-seo-techniques/',
  '/how-facebook-marketing-can-accelerate-your-business-growth/',
  '/experts-guide-to-social-media-marketing-for-business/',
  '/how-digital-marketing-drives-faster-growth-for-businesses/'
];

export function middleware(request) {
  const { pathname, search } = request.nextUrl;

  // 1. Agar URL 410 Gone list mein match ho jaye
  if (goneUrls.includes(pathname)) {
    return new NextResponse('410 Gone', {
      status: 410,
      headers: {
        'Content-Type': 'text/plain',
      },
    });
  }

  // 2. Aapka exact purana homepage aur query string wala logic
  if (pathname === '/') {
    if (search && search !== '') {
      return NextResponse.redirect(new URL('/', request.url));
    }
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/',
    '/what-is-web-development-uk/',
    '/top-10-graphic-design-trends/',
    '/how-to-start-a-blog-on-wordpress/',
    '/how-good-ux-can-keep-visitors-on-your-website-longer/',
    '/what-are-the-5-elements-of-a-good-website-design/',
    '/what-is-b2b-web-development-in-the-uk/',
    '/custom-wordpress-development-services-in-the-uk/',
    '/optimise-meta-tags-for-better-on-page-seo/',
    '/what-role-does-creative-content-play-in-seo-performance/',
    '/wordpress-ecommerce-development-services/',
    '/on-page-seo-differ-from-off-page-seo/',
    '/social-media-presence-tips/',
    '/lead-generation-agency-uk-in-2026/',
    '/10-steps-keyword-research-checklist-2026/',
    '/website-design-and-development/',
    '/b2b-content-marketing-agency-uk/',
    '/top-3-marketing-challenges-killing-uk-small-businesses/',
    '/affordable-seo-services-uk/',
    '/web-design-without-coding/',
    '/social-media-for-uk-consultants/',
    '/the-ultimate-guide-to-keyword-research-tools-tips/',
    '/e-commerce-keyword-research/',
    '/are-seo-audit-services-essential-for-strong-search-performance/',
    '/on-page-seo-audit-services-improve-uk-google-rankings/',
    '/will-ai-replace-graphic-designers-in-2026/',
    '/what-are-the-7-phases-of-web-development-in-detail/',
    '/the-ultimate-guide-to-digital-marketing-lead-generation-for-the-uk/',
    '/what-is-content-marketing-types-benefits-of-content-marketing/',
    '/why-on-page-seo-matters-for-small-businesses/',
    '/how-can-web-graphic-design-elevate-your-digital-presence/',
    '/a-beginners-guide-to-email-marketing-that-actually-works/',
    '/8-effective-lead-generation-strategies/',
    '/write-better-content-with-these-e-e-a-t-seo-techniques/',
    '/how-facebook-marketing-can-accelerate-your-business-growth/',
    '/experts-guide-to-social-media-marketing-for-business/',
    '/how-digital-marketing-drives-faster-growth-for-businesses/',
  ],
};