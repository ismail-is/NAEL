import { Metadata } from "next";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Us | NAEL Establishment for General Contracting",
  description: "Learn more about Lamiya Al Khaleej Al Ittihad Establishment for General Contracting (NAEL). Discover our safety values, structural logistics, and heavy machinery support fleets in Al Jubail.",
};

export default function AboutRoutePage() {
  return (
    <>
      {/* 1. Cinematic Concentric Circle Page Loader */}
      <Loader />

      {/* 2. Path-Adaptive Sticky Navigation Header */}
      <Navbar />

      {/* 3. Main Dedicated Page View (White background canvas) */}
      <main className="flex-grow pt-[120px] bg-white min-h-[70vh]">
        <About />
      </main>

      {/* 4. Google Maps & Coordinates Footer */}
      <Footer />
    </>
  );
}
