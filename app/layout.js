import { Playfair_Display, Montserrat } from "next/font/google";
import Script from "next/script";
import Navbar from "@components/Navbar";
import "./globals.css";
import Footer from "@components/Footer";
import { Providers } from "./providers";
import SmoothScroll from "@components/SmoothScroll";
import ChatBotComponent from "@components/WhatsAppWidget";
import WhatsAppWidget from "@components/WhatsAppWidget"; 
import { Analytics } from '@vercel/analytics/next';
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
  return (
    <html lang="en-GB" className={`${playfair.variable} ${montserrat.variable}`} suppressHydrationWarning={true}>
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
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
          <WhatsAppWidget /> 

          <Toaster richColors position="top-right" />
        </Providers>

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-L8DY157W82"
          strategy="lazyOnload"
        />
        <Script
          id="google-analytics"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){window.dataLayer.push(arguments);}

gtag('js', new Date());
gtag('config', 'G-L8DY157W82');`,
          }}
        />
      </body>
    </html>
  );
}