import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "PHOOL™ Silver Leaves | 99.9% Pure Edible Silver Vark",
  description:
    "Phool Silver Leaves - Premium Quality 99.9% Pure Edible Silver Leaves (चाँदी के वर्क) & Artisanal Silver Sweets. Computerized Machine Process, FSSAI Certified (Lic. 22726379000386), 100% Pure Veg. Moradabad, Uttar Pradesh.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${playfair.variable} scroll-smooth`}>
      <body className="bg-slate-50 text-slate-900 min-h-screen flex flex-col font-sans selection:bg-sky-200 selection:text-slate-900">
        {children}
      </body>
    </html>
  );
}
