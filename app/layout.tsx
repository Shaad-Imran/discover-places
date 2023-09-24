import Header from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Discover Businesses - Next.js Web App",
  description:
    "Explore and find businesses with our dynamic Next.js web application.",
  keywords: ["Next.js", "React", "Businesses", "Discover", "Google Places API"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
