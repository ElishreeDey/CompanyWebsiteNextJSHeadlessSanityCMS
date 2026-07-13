import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { SITE_SETTINGS_QUERY } from "@/sanity/lib/queries";
import { SITE_MESSAGES } from "@/app/messages";
import Nav from "@/app/components/Nav";
import Footer from "@/app/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  try {
    const { data: siteSettings } = await sanityFetch({
      query: SITE_SETTINGS_QUERY,
    });
    const companyName =
      siteSettings?.companyName ?? SITE_MESSAGES.defaultCompanyName;

    return {
      title: {
        default: companyName,
        template: `%s | ${companyName}`,
      },
      description: siteSettings?.vision ?? SITE_MESSAGES.defaultVision,
    };
  } catch {
    return {
      title: {
        default: SITE_MESSAGES.defaultCompanyName,
        template: `%s | ${SITE_MESSAGES.defaultCompanyName}`,
      },
      description: SITE_MESSAGES.defaultVision,
    };
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Nav />
        {children}
        <Footer />
        <SanityLive />
      </body>
    </html>
  );
}
