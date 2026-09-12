import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PHOOL™ Silver Leaves | 99.9% Pure Edible Silver Vark",
  description:
    "PHOOL Silver Leaves - premium 99.9% pure edible silver vark. Touchless computerized process, FSSAI Certified, 100% vegetarian. Moradabad, Uttar Pradesh.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#050608] text-slate-100 min-h-screen flex flex-col font-sans selection:bg-cyan-300 selection:text-black">
        {children}
      </body>
    </html>
  );
}
