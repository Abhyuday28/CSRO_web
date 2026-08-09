import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { NavbarWrapper } from "@/components/navbar-wrapper";
import { FooterWrapper } from "@/components/footer-wrapper";

const montserrat = Montserrat({
  subsets: ["latin"],
   weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat"
});

export const metadata: Metadata = {
  title: "CSRO | Natural Filter Technology",
  description:
    "Modern water purification solutions for homes and offices with natural filter technology by CSRO."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className= {montserrat.variable}>
        <div className="relative">
          <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[900px] bg-hero-radial" />
          <NavbarWrapper />
          {children}
        </div>
        <FooterWrapper />
      </body>
    </html>
  );
}