import type { Metadata } from "next";
import { ThemeProvider } from "@/components/contexts/theme-provider";
import { Navbar } from "@/components/navbar";
import { Space_Mono, Space_Grotesk } from "next/font/google";
import { Footer } from "@/components/footer";
import "@/styles/globals.css";
import { Libre_Baskerville } from "next/font/google";
import { Figtree } from "next/font/google";
import Script from "next/script";

const sansFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
  weight: "400",
});

const monoFont = Space_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
  weight: "400",
});

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-libre-baskerville",
});

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-default-sans",
});

export const metadata: Metadata = {
  title: "Billo Docs",
  metadataBase: new URL("https://billoinvoicing.com/"),
  description: "Billo Docs is a comprehensive documentation for Billo, a cloud-based invoicing solution.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script async strategy="afterInteractive" id="google-analytics" src="https://www.googletagmanager.com/gtag/js?id=G-P05MZVJ5H7" />
        <Script id="google-analytics2" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag() {
            dataLayer.push(arguments);
          }
          gtag("js", new Date());
          
          gtag("config", "G-P05MZVJ5H7");
        `}
        </Script>
        <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
        <link rel="icon" type="image/png" href="/favicon/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="Billo Invoicing" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <meta name="theme-color" content="#009966" />
        <link rel="canonical" href="https://billoinvoicing.com" />
      </head>
      <body className={` ${libreBaskerville.variable} ${figtree.variable} `} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navbar />
          <main className="sm:container mx-auto w-[90vw] h-auto scroll-smooth">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
