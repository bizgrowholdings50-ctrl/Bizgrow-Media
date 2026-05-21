import { Playfair_Display, Montserrat } from "next/font/google";
import Navbar from "@components/Navbar";
import "./globals.css";
import Footer from "@components/Footer";
import { Providers } from "./providers";
import SmoothScroll from "@components/SmoothScroll";
import ChatBotComponent from "@components/WhatsAppWidget";
import WhatsAppWidget from "@components/WhatsAppWidget"; // 👈 Normal import lagaya
import { Analytics } from '@vercel/analytics/next';
import Script from "next/script"; 
import CustomCursor from "@components/Cursor";
import { Toaster } from "sonner";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["700", "900"],
  style: ['italic', 'normal'],
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://bizgrowmedia.co.uk/"), 
  title: "BizGrow Media | Professional Podcast & Business Growth Studio UK",
  description: "BizGrow Media creates authority-driven podcasts, studio production, and strategic content that builds trust, visibility, and growth.",
  icons: {
    icon: [
      { url: "/site-logo.png", href: "/site-logo.png" },
      { url: "/site-logo.png", sizes: "32x32", type: "image/png" },
      { url: "/site-logo.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/site-logo.png", sizes: "180x180", type: "image/png" },
    ],
  },
  alternates: {
    canonical: "https://bizgrowmedia.co.uk/", 
    languages: {
      "en-GB": "https://bizgrowmedia.co.uk/",
    },
  },
  openGraph: {
    title: "BizGrow Media UK",
    description: "Expert Podcast & Business Growth Services",
    images: ["/icon.png"],
    locale: "en_GB",
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "BizGrow Media",
    "image": "https://bizgrowmedia.co.uk/icon.png",
    "url": "https://bizgrowmedia.co.uk/",
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
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body bg-[#FDFCF9] text-[#1f2937] antialiased">
        <Providers>
          <CustomCursor />
          <Navbar />
          <SmoothScroll>
            <main>
              {children}
              <Analytics />
            </main>
            <Footer />
          </SmoothScroll>
          <ChatBotComponent />
          <WhatsAppWidget /> {/* 👈 Yahan bina kisi tension ke render hoga */}

          {/* 🎯 Sonner Toaster yahan add karein */}
     <Toaster richColors position="top-right" />
        </Providers>
      </body>
    </html>
  );
}