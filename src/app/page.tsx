import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Partners from "@/components/Partners";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* 1. Initial Cinematic Page Loader */}
      <Loader />

      {/* 2. Floating Header and Sticky Navbar */}
      <Navbar />

      {/* 3. Main Homepage Sections */}
      <main className="flex-grow">
        {/* Hero Showcase (Home) */}
        <Hero />

        {/* Specialized Services Gallery */}
        <Services />

        {/* Deep Premium Strengths (Why Us) */}
        <WhyChooseUs />

        {/* Corporate Profile (About) */}
        {/* <About /> */}

        {/* Featured Projects Showcase */}
        <Projects />

        {/* Client Logos Infinite Marquee */}
        <Partners />

        {/* Testimonials Review Slider */}
        <Testimonials />

        {/* Animated Banner CTA */}
        <CTA />

        {/* Quote Form and Coordinates (Contact) */}
        <Contact />
      </main>

      {/* 4. Google Maps & Site Navigation Footer */}
      <Footer />
    </>
  );
}
