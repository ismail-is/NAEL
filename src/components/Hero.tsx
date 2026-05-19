"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

const heroSlides = [
  {
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1200&auto=format&fit=crop",
    title: "HEAVY MACHINERY RENTAL",
    desc: "Rigid excavators, loaders, and crawler crane fleets structured for rapid mobilization across Al Jubail and major KSA industrial zones."
  },
  {
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop",
    title: "GENERAL CONTRACTING EXCELLENCE",
    desc: "Executing complex civil engineering frameworks, architectural earthmoving works, and industrial structural builds."
  },
  {
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop",
    title: "SPECIALIZED CONTAINER TRADING",
    desc: "Premium certified shipping containers of all dimensions tailored for cargo safety and custom site office enclosures."
  },
  {
    image: "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?q=80&w=1200&auto=format&fit=crop",
    title: "COMPLIANT STRUCTURAL SCAFFOLDING",
    desc: "International-spec erection setups, couplings, and boards ensuring absolute safety compliance on petrochemical complexes."
  }
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeSlide, setActiveSlide] = useState(0);

  // Mouse follow movement for the industrial radial light beam
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Auto-cycle slider slides
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Parallax Scroll Effects
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 800], [0, 150]);
  const yContent = useTransform(scrollY, [0, 800], [0, -40]);
  const opacityContent = useTransform(scrollY, [0, 600], [1, 0]);

  return (
    <section 
      id="home"
      ref={containerRef}
      className="relative min-h-screen bg-brand-black overflow-hidden flex flex-col justify-center pt-24 pb-12"
    >
      {/* 1. Industrial Grid Background */}
      <div className="absolute inset-0 industrial-grid opacity-15 pointer-events-none z-0" />
      
      {/* 2. Mouse-Follow Light Beam (Radial Glow) */}
      <div 
        className="absolute w-[600px] h-[600px] rounded-full bg-primary-green/10 blur-[120px] pointer-events-none z-0 transition-opacity duration-500 hidden md:block"
        style={{
          left: mousePosition.x - 300,
          top: mousePosition.y - 300,
        }}
      />
      
      {/* 3. Floating Amber/Yellow Dust Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-primary-yellow/30 rounded-full blur-[1px]"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, Math.random() * 30 - 15, 0],
              opacity: [0.1, 0.7, 0.1],
            }}
            transition={{
              duration: 8 + Math.random() * 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* 4. Main Hero Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 flex flex-col justify-between flex-grow">
        
        {/* Top Grid Split Layout (6 and 6 Split for perfect slanted look) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center my-auto pt-4">
          
          {/* Left Text Column (Col 6) */}
          <motion.div 
            style={{ y: yContent, opacity: opacityContent }}
            className="lg:col-span-6 flex flex-col gap-5"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Tagline */}
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.35em] text-white/60 font-medium">
                Building Trust, 
              </span>
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.35em] text-primary-yellow font-extrabold">
                Delivering Excellence.
              </span>
            </div>

            {/* Core Titles matching uploaded layout */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bebas font-extrabold tracking-wide text-white leading-[0.95] flex flex-col">
              <span>LAMIYA AL KHALEEJ AL ITTIHAD</span>
              <span>ESTABLISHMENT FOR</span>
              <span className="text-primary-yellow text-glow-yellow mt-1">
                GENERAL CONTRACTING
              </span>
            </h1>

            {/* Highlighted License Badging (Premium Dual Badges) */}
            <div className="flex flex-wrap items-center gap-3.5 mt-2">
              <div className="px-4 py-2 bg-[#121212]/80 border-l-2 border-primary-yellow backdrop-blur-md rounded-sm flex flex-col shadow-lg shadow-black/20 hover:border-white transition-all duration-300">
                <span className="text-[8px] sm:text-[9px] uppercase tracking-widest text-primary-yellow font-extrabold">Corporate C.R.</span>
                <span className="text-xs sm:text-sm font-bold text-white mt-0.5 tracking-widest">7004352311</span>
              </div>
              <div className="px-4 py-2 bg-[#121212]/80 border-l-2 border-primary-green backdrop-blur-md rounded-sm flex flex-col shadow-lg shadow-black/20 hover:border-white transition-all duration-300">
                <span className="text-[8px] sm:text-[9px] uppercase tracking-widest text-primary-green font-extrabold">Contracting C.R.</span>
                <span className="text-xs sm:text-sm font-bold text-white mt-0.5 tracking-widest">2050116599</span>
              </div>
            </div>

            {/* Explore Buttons */}
            <div className="flex flex-wrap gap-4 mt-2">
              <a 
                href="#services"
                className="px-8 py-3 bg-primary-green hover:bg-brand-light-green text-white text-xs font-bold uppercase tracking-widest rounded-sm glow-green transition-all duration-300 flex items-center gap-2 cursor-pointer border border-primary-green"
              >
                Explore Services
                <ArrowRight className="w-4 h-4 text-primary-yellow" />
              </a>
              <a 
                href="#contact"
                className="px-8 py-3 bg-transparent border border-white/20 hover:border-primary-yellow hover:bg-primary-yellow/5 text-white hover:text-primary-yellow text-xs font-bold uppercase tracking-widest rounded-sm transition-all duration-300 flex items-center gap-2 cursor-pointer"
              >
                Contact Us
              </a>
            </div>
          </motion.div>

          {/* Right Parallax Diagonal Image Slider Column (Col 6) */}
          <motion.div 
            className="lg:col-span-6 relative w-full h-[360px] sm:h-[450px] lg:h-[530px] flex items-center justify-center rounded-sm lg:overflow-visible overflow-hidden"
            initial={{ opacity: 0, scale: 0.95, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* The Slanted Double Neon Border Outlines (Desktop only) */}
            <div className="absolute inset-0 z-20 pointer-events-none hidden lg:block">
              {/* Green Slanted Divider Line shadow */}
              <div className="absolute inset-0 bg-primary-green clip-divider-green shadow-[0_0_15px_#02534D]" />
              {/* Yellow Slanted Divider Line shadow */}
              <div className="absolute inset-0 bg-primary-yellow clip-divider-yellow shadow-[0_0_15px_#FFCC00]" />
            </div>

            {/* Cinematic Slide Frame (Desktop Slanted, Mobile Rectangular) */}
            <div className="absolute inset-0 w-full h-full clip-slanted overflow-hidden rounded-sm">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSlide}
                  initial={{ opacity: 0, scale: 1.15 }}
                  animate={{ opacity: 1, scale: 1.02 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 w-full h-full"
                >
                  {/* Subtle Parallax Slide Move */}
                  <motion.div 
                    style={{ y: yBg }} 
                    className="absolute inset-0 w-full h-[120%] -top-[10%]"
                  >
                    {/* Layered dark filters for absolute text contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/30 to-brand-black/40 z-10" />
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-transparent to-transparent z-10" />
                    
                    <img 
                      src={heroSlides[activeSlide].image} 
                      alt={heroSlides[activeSlide].title}
                      className="w-full h-full object-cover"
                      loading="eager"
                    />
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Creative Glass Caption Overlay */}
            <div className="absolute bottom-6 left-6 right-6 z-20 glass-panel p-4 border-l-4 border-primary-yellow rounded-sm shadow-2xl">
              <span className="text-[10px] uppercase tracking-widest text-primary-yellow font-extrabold block">
                {heroSlides[activeSlide].title}
              </span>
              <p className="text-[10px] text-white/70 leading-relaxed font-light mt-1.5">
                {heroSlides[activeSlide].desc}
              </p>
            </div>

            {/* Slide Navigation Progress Indicators */}
            <div className="absolute top-6 right-6 z-20 flex items-center gap-2">
              {heroSlides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveSlide(idx)}
                  className={`w-2.5 h-1.5 rounded-full transition-all duration-300 focus:outline-none cursor-pointer ${
                    activeSlide === idx 
                      ? "bg-primary-yellow w-6" 
                      : "bg-white/40 hover:bg-white/80"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </motion.div>

        </div>

        {/* Bottom Metrics Bar */}
        <div className="w-full border-t border-white/10 pt-8 mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { target: 10, label: "Years of Experience", prefix: "", suffix: "+" },
            { target: 150, label: "Projects Completed", prefix: "", suffix: "+" },
            { target: 50, label: "Trained Professionals", prefix: "", suffix: "+" },
            { target: 100, label: "Client Satisfaction", prefix: "", suffix: "%" },
          ].map((stat, index) => {
            const Counter = ({ value, prefix = "", suffix = "" }: { value: number; prefix?: string; suffix?: string }) => {
              const [count, setCount] = useState(0);

              useEffect(() => {
                let start = 0;
                const end = value;
                if (start === end) return;

                const duration = 2000;
                const incrementTime = Math.floor(duration / end);

                const timer = setInterval(() => {
                  start += 1;
                  setCount(start);
                  if (start >= end) clearInterval(timer);
                }, Math.max(incrementTime, 10));

                return () => clearInterval(timer);
              }, [value]);

              return (
                <span className="font-bebas text-3xl sm:text-4xl text-primary-yellow font-bold tracking-wide">
                  {prefix}{count}{suffix}
                </span>
              );
            };

            return (
              <motion.div 
                key={index} 
                className="flex flex-col border-l border-white/10 pl-4 hover:border-primary-yellow transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
              >
                <div className="flex items-center gap-1.5">
                  <Counter value={stat.target} prefix={stat.prefix} suffix={stat.suffix} />
                </div>
                <span className="text-white/50 text-[10px] sm:text-xs uppercase tracking-widest font-medium mt-1">
                  {stat.label}
                </span>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Elegant mouse scroll indicator at bottom */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-60 z-20 pointer-events-none">
        <span className="text-[9px] uppercase tracking-[0.25em] text-white/40">Scroll to Explore</span>
        <div className="w-[18px] h-7 border border-white/30 rounded-full flex items-start justify-center p-1">
          <motion.div 
            className="w-1.5 h-1.5 bg-primary-yellow rounded-full"
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </div>
    </section>
  );
}
