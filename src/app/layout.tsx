import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const roboto = localFont({
  src: [
    { path: "../../public/fonts/Roboto-Variable.ttf", style: "normal" },
    { path: "../../public/fonts/Roboto-Variable-Italic.ttf", style: "italic" },
  ],
  variable: "--font-roboto",
  display: "swap",
});

const geistMono = localFont({
  src: "../../public/fonts/GeistMono-Variable.ttf",
  variable: "--font-geist-mono",
  display: "swap",
});

const instrumentSans = localFont({
  src: "../../public/fonts/InstrumentSans-Variable.ttf",
  variable: "--font-instrument-sans",
  display: "swap",
});

const manrope = localFont({
  src: "../../public/fonts/Manrope-Variable.ttf",
  variable: "--font-manrope",
  display: "swap",
});

const sora = localFont({
  src: "../../public/fonts/Sora-Variable.ttf",
  variable: "--font-sora",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kamau Wamuiga — Product Designer & Developer",
  description: "Product designer and developer building purposeful digital tools from Nairobi, Kenya.",
  icons: { icon: "/favIcon.png" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${roboto.variable} ${geistMono.variable} ${instrumentSans.variable} ${manrope.variable} ${sora.variable} selection:bg-accent selection:text-accent-foreground`}
    >
      <body className="antialiased">
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
