import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Shivam Engineering | Precision CNC Machining & Components",
  description: "Shivam Engineering delivers precision CNC machining solutions with superior quality, advanced technology, competitive pricing, and on-time delivery in Ahmedabad, India.",
  keywords: "CNC Job Work, CNC Turning, Precision Machined Components, Custom Component Manufacturing, Ahmedabad, India",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} scroll-smooth overflow-x-hidden`}>
      <body className="min-h-screen flex flex-col font-sans bg-light text-dark selection:bg-primary selection:text-white overflow-x-hidden">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
