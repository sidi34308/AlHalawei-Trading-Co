import "./globals.css";
import { IBM_Plex_Sans_Arabic } from "next/font/google";
import Head from "next/head";

// Configure IBM Plex Sans Arabic font
const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "الحلاوي للتجارة",
  description:
    "شركة الحلاوي للتجارة في قطر، نقدم منتجات وخدمات عالية الجودة التي تلبي احتياجات السوق المحلي.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={ibmPlexSansArabic.className}>{children}</body>
    </html>
  );
}
