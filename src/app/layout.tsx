import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, Manrope } from "next/font/google";
import { Footer } from "@/components/layout/footer/footer";
import { FloatingWhatsappButton } from "@/components/layout/floating-whatsapp-button";
import { Header } from "@/components/layout/header/header";
import { Preloader } from "@/components/layout/preloader";
import { MotionProvider } from "@/components/motion/motion-provider";
import { JsonLd } from "@/components/ui/json-ld";
import { siteConfig } from "@/config/site";
import { absoluteUrl } from "@/lib/utils";
import "@/styles/globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  variable: "--font-barlow",
  display: "swap",
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "S.N Group | Construction, Procurement & Holdings",
    template: "%s | S.N Group",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  category: "Construction",
  keywords: ["construction Bangladesh", "project procurement Dhaka", "import export Bangladesh", "development", "S.N Group"],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: { address: false, email: false, telephone: false },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#111827",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.url,
  logo: absoluteUrl("/images/sn-group-mark.webp"),
  description: siteConfig.description,
  email: siteConfig.emails[0].label,
  telephone: siteConfig.mobiles[0].label,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Silver Tower (Lift 4), 52 Gulshan Avenue",
    addressLocality: "Dhaka",
    postalCode: "1212",
    addressCountry: "BD",
  },
};

const preloaderBootstrap = `(function(){try{var r=document.documentElement,k="sn-group-preloader-seen";if(sessionStorage.getItem(k)){r.setAttribute("data-sn-preloader","skip")}else{sessionStorage.setItem(k,"true");r.setAttribute("data-sn-preloader","show")}}catch(e){document.documentElement.setAttribute("data-sn-preloader","show")}})()`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html className={`${manrope.variable} ${barlow.variable}`} data-scroll-behavior="smooth" data-sn-preloader="pending" lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: preloaderBootstrap }} />
      </head>
      <body suppressHydrationWarning>
        <a className="skip-link" href="#main-content">Skip to main content</a>
        <MotionProvider>
          <Preloader />
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
          <FloatingWhatsappButton />
        </MotionProvider>
        <JsonLd data={organizationJsonLd} />
      </body>
    </html>
  );
}
