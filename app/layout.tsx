import "./globals.css";
import { Inter } from "next/font/google";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { StrictMode } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CookSuccess",
  description: "A Victor and James Boynton website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StrictMode>
      <html lang="en" className="bg-green-50">
        <body className={inter.className}>
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </StrictMode>
  );
}
