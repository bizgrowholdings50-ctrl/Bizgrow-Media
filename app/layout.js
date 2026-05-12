import { Playfair_Display, Montserrat } from "next/font/google";
import Navbar from "@components/Navbar";
import "./globals.css";
import Footer from "@components/Footer";
import { Providers } from "./providers";
import SmoothScroll from "@components/SmoothScroll";
import ChatBot from "@components/ChatBot";
import { Analytics } from '@vercel/analytics/next';
import Script from "next/script"; // 1. Ye import add kiya
import CustomCursor from "@components/Cursor";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["700", "900"],
  style: ['italic', 'normal'],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400", "500"],
});

export const metadata = {
  title: "BizGrow Digital | Top Digital Growth & Content Marketing Agency UK",
  description: "Scale your business with BizGrow Digital. Expert SEO, content strategy, and digital marketing solutions tailored for the UK market.",
  icons: {
    icon: [
      { url: "/site-logo.png", href: "/site-logo.png" },
      { url: "/site-logo.png", sizes: "32x32", type: "image/png" },
      { url: "/site-logo.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/public/site-logo.png", sizes: "180x180", type: "image/png" },
    ],
  },
  alternates: {
    canonical: "https://bizgrow-digital.co.uk",
    languages: {
      "en-GB": "https://bizgrow-digital.co.uk",
    },
  },
  openGraph: {
    title: "BizGrow Digital UK",
    description: "Expert Digital Growth Services",
    images: ["/icon.png"],
    locale: "en_GB",
  },
};

export default function RootLayout({ children }) {
  // 2. Schema Data Object
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "BizGrow Digital",
    "image": "https://bizgrow-digital.co.uk/icon.png",
    "url": "https://bizgrow-digital.co.uk",
    "telephone": "+44 7903 332433",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "CEME Campus, Marsh Way",
      "addressLocality": "Rainham",
      "postalCode": "RM13 8EU",
      "addressCountry": "GB"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 51.5284,
      "longitude": 0.1775
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  };

  return (
    <html lang="en-GB" className={`${playfair.variable} ${montserrat.variable}`} suppressHydrationWarning={true}>
      <head>
        {/* 3. Schema Script Injection */}
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body bg-[#FDFCF9] text-[#1f2937] antialiased overflow-x-clip">
        <Providers>
        <CustomCursor />
          <Navbar />
          <SmoothScroll>
            <main>
              {children}
              <Analytics />
            </main>
            <Footer/>
          </SmoothScroll>
          <ChatBot />
        </Providers>
      </body>
    </html>
  );
}