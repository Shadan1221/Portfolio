import type { Metadata } from "next";
import { Oswald, Manrope } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/providers/SmoothScroll";
import CustomCursor from "@/components/ui/CustomCursor";

const oswald = Oswald({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["200", "400", "500", "700"],
});

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Shadan | Creative Developer",
  description: "Portfolio of Ahmad Shadan Taiyabi - Creative Developer & Software Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="cursor-none" suppressHydrationWarning>
      <body
        className={`${oswald.variable} ${manrope.variable} antialiased bg-black text-white`}
      >
        <CustomCursor />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}