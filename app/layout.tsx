import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { NavbarWrapper } from "@/components/navbar-wrapper";
import { FooterWrapper } from "@/components/footer-wrapper";

const montserrat = Montserrat({
  subsets: ["latin"],
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
      <body className={montserrat.variable}>
        <NavbarWrapper />
        {children}
        <FooterWrapper />
      </body>
    </html>
  );
}
