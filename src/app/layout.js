import "./globals.css";
import { Inter } from "next/font/google";
import { cx } from "../utils";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import siteMetadata from "../utils/siteMetaData";

// Define the Inter font
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-in",
});

// Define the Manrope font
const Manrope = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mr",
});

export const metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    default: siteMetadata.title,
    template: `%s | ${siteMetadata.title}`,
    absolute: "...",
  },
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: "https://nextjs.org",
    siteName: siteMetadata.title,
    images: [siteMetadata.socialBanner],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={cx(inter.variable, Manrope.variable, "font-mr bg-light")}
      >
        <Header />

        {children}
        <Footer />
      </body>
    </html>
  );
}
