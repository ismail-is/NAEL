import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";

export const metadata: Metadata = {
  title: "LAMIYA AL KHALEEJ AL ITTIHAD EST. (NAEL) | General Contracting & Container Trading Saudi Arabia",
  description: "LAMIYA AL KHALEEJ AL ITTIHAD ESTABLISHMENT FOR GENERAL CONTRACTING (NAEL) - Premier construction, container trading, sweet water delivery, sewage cleaning, scaffolding services, and heavy machinery rentals in Al Jubail, KSA. C.R. No. 7004352311 / 2050116599.",
  keywords: [
    "NAEL KSA",
    "Lamiya Al Khaleej Al Ittihad",
    "General Contracting Jubail",
    "Container Trading Saudi Arabia",
    "Sweet Water Delivery Jubail",
    "Sewage Cleaning Services KSA",
    "Scaffolding Services Jubail",
    "Equipment Rental KSA",
    "Saudi Construction Company",
  ],
  authors: [{ name: "NAEL" }],
  viewport: "width=device-width, initial-scale=1.0",
  robots: "index, follow",
  openGraph: {
    title: "LAMIYA AL KHALEEJ AL ITTIHAD EST. (NAEL) | General Contracting",
    description: "Premium modern general contracting and container trading services in Al Jubail, Saudi Arabia.",
    url: "https://www.naelksa.com",
    siteName: "NAEL",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased dark"
      style={{ colorScheme: "dark" }}
    >
      <body className="min-h-full bg-brand-black text-white flex flex-col antialiased selection:bg-primary-yellow selection:text-brand-black">
        {/* Custom CustomCursor */}
        <CustomCursor />
        
        {/* Smooth Scrolling wrapper using Lenis */}
        <SmoothScroll>
          <div className="relative flex flex-col min-h-screen">
            {children}
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
