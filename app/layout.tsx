import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AnnouncementBar from "./components/AnnouncementBar";
import CookieBanner from "./components/CookieBanner";
import GoogleAnalyticsWrapper from "./components/GoogleAnalytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://countysupermarkets.co.ke"),

  title: {
    default: "County Supermarket | Your Local Shopping Destination",
    template: "%s | County Supermarket",
  },

  description:
    "County Supermarket is your trusted one-stop shopping destination in Central Kenya, offering fresh groceries, bakery, butchery, electronics, household essentials and more across Murang'a, Kirinyaga, Kiambu and Nairobi.",

  keywords: [
    "County Supermarket",
    "Supermarket Kenya",
    "Murang'a supermarket",
    "Kiambu supermarket",
    "Kirinyaga supermarket",
    "Nairobi supermarket",
    "Groceries Kenya",
    "Fresh produce",
    "Bakery",
    "Butchery",
    "Household shopping",
    "Retail Kenya",
  ],

  authors: [
    {
      name: "County Supermarket",
      url: "https://countysupermarkets.co.ke",
    },
  ],

  creator: "County Supermarket",

  publisher: "County Supermarket",

  alternates: {
    canonical: "/",
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",

  openGraph: {
    title: "County Supermarket",
    description:
      "Your trusted shopping destination in Central Kenya with groceries, bakery, butchery, electronics and more.",
    url: "https://countysupermarkets.co.ke",
    siteName: "County Supermarket",
    locale: "en_KE",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "County Supermarket",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "County Supermarket",
    description:
      "Fresh groceries, bakery, butchery, electronics and household shopping across Central Kenya.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  category: "Retail",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AnnouncementBar />
        <Navbar />
        {children}
        <Footer />
        <CookieBanner />
        <GoogleAnalyticsWrapper />
      </body>
    </html>
  );
}
