"use client";

import { motion } from "framer-motion";
import { 
  Target, 
  Eye, 
  ArrowRight,
  ShieldCheck,
  Award,
  Handshake,
  Lightbulb,
  Users
} from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative w-full overflow-hidden select-none bg-white">
      
      {/* ========================================================= */}
      {/* 1. WHO WE ARE HEADER BANNER (Top Cinematic Block)        */}
      {/* ========================================================= */}
      <div className="relative w-full h-[280px] sm:h-[350px] bg-brand-black overflow-hidden flex items-center">
        {/* Background construction site at dusk */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop"
            alt="Construction Site Dusk"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-black/55 z-10" />
        </div>

        {/* Slanted Green Backdrop Overlay (Desktop only) */}
        <div 
          className="absolute top-0 bottom-0 left-0 w-full lg:w-[48%] bg-gradient-to-r from-primary-green to-primary-green/95 z-10 hidden lg:block"
          style={{
            clipPath: "polygon(0 0, 100% 0, 85% 100%, 0 100%)"
          }}
        />
        {/* Mobile Dark Green Overlay */}
        <div className="absolute inset-0 bg-primary-green/90 z-10 block lg:hidden" />

        {/* Content Container */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-8 flex flex-col lg:flex-row justify-between lg:items-center gap-8">
          
          {/* Left Text Breadcrumbs */}
          <div className="flex flex-col gap-2">
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.35em] text-primary-yellow font-extrabold">
              WHO WE ARE
            </span>
            <h1 className="text-4xl sm:text-6xl font-bebas font-extrabold text-white tracking-wider leading-none">
              ABOUT <span className="text-primary-yellow">US</span>
            </h1>
            <div className="flex items-center gap-2 text-white/50 text-[10px] sm:text-xs uppercase tracking-widest font-bold mt-2">
              <span>Home</span>
              <span className="text-white/30">&gt;</span>
              <span className="text-primary-yellow">About Us</span>
            </div>
          </div>

          {/* Right Emblem Logo Box */}
          <div className="flex justify-center lg:justify-end items-center lg:mr-12">
            <div className="relative w-28 h-28 sm:w-36 sm:h-36 border-4 border-primary-yellow p-4 bg-brand-black/25 backdrop-blur-md flex items-center justify-center rounded-sm">
              <img 
                src="/naelksa/Nael Logo White.webp"
                alt="NAEL Logo Emblem"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

        </div>
      </div>


      {/* ========================================================= */}
      {/* 2. CORPORATE PROFILE (Main About Section - White Theme)  */}
      {/* ========================================================= */}
      <div className="w-full bg-white py-16 sm:py-24 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            
            {/* Left Texts Column (Col 5) */}
            <motion.div 
              className="lg:col-span-5 flex flex-col gap-6"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex flex-col gap-1.5">
                <span className="text-xs uppercase tracking-[0.3em] text-primary-yellow font-extrabold">
                  ABOUT NAEL
                </span>
                <h2 className="text-3xl sm:text-5xl font-bebas font-extrabold text-primary-green tracking-wide leading-tight">
                  Building Trust. <br />
                  <span className="text-brand-black">Delivering Excellence.</span>
                </h2>
                <div className="w-16 h-[3px] bg-primary-green mt-1" />
              </div>

              <p className="text-brand-black/80 text-xs sm:text-sm font-light leading-relaxed">
                LAMIYA AL KHALEEJ AL ITTIHAD ESTABLISHMENT FOR GENERAL CONTRACTING is a trusted name in the Kingdom of Saudi Arabia.
              </p>
              
              <p className="text-brand-black/65 text-xs sm:text-sm font-light leading-relaxed">
                We provide comprehensive contracting, trading, cleaning, scaffolding and equipment rental services with a commitment to safety, quality and client satisfaction.
              </p>

              <p className="text-brand-black/65 text-xs sm:text-sm font-light leading-relaxed">
                Our experienced team, advanced machinery and strong work ethics allow us to deliver projects efficiently and professionally across diverse industries.
              </p>

              <a 
                href="#contact"
                className="px-8 py-3.5 bg-primary-green hover:bg-brand-light-green text-white text-xs font-bold uppercase tracking-widest rounded-sm w-fit transition-all duration-300 flex items-center gap-2 cursor-pointer mt-2"
              >
                Contact Us
                <ArrowRight className="w-4 h-4 text-primary-yellow" />
              </a>
            </motion.div>

            {/* Right Video Preview Stats Card (Col 7) */}
            <motion.div 
              className="lg:col-span-7 flex flex-col"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              {/* Rounded Card frame */}
              <div className="relative w-full h-[360px] sm:h-[450px] rounded-2xl overflow-hidden shadow-2xl border border-brand-black/5 group">
                <img 
                  src="https://images.unsplash.com/photo-1590069261209-f8e9b8642343?q=80&w=1200&auto=format&fit=crop"
                  alt="Construction Site Sunset"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-[4000ms]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-brand-black/25 z-10" />

                {/* Central Play Button */}
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg cursor-pointer text-primary-green hover:bg-primary-yellow hover:text-brand-black transition-all duration-300 pl-1"
                  >
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-current" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </motion.div>
                </div>

                {/* Overlaid Stats Ribbon at bottom */}
                <div className="absolute bottom-0 left-0 w-full z-20 bg-primary-green/95 backdrop-blur-md py-5 px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-primary-yellow/20 select-none">
                  {[
                    { num: "10+", label: "Years of Experience" },
                    { num: "150+", label: "Projects Completed" },
                    { num: "50+", label: "Skilled Professionals" },
                    { num: "100%", label: "Client Satisfaction" },
                  ].map((stat, idx) => (
                    <div key={idx} className="flex flex-col items-center text-center">
                      <span className="font-bebas text-2xl sm:text-3xl text-primary-yellow font-bold leading-none">{stat.num}</span>
                      <span className="text-[9px] uppercase tracking-wider text-white/80 font-medium mt-1 leading-tight">{stat.label}</span>
                    </div>
                  ))}
                </div>

              </div>
            </motion.div>

          </div>
        </div>
      </div>


      {/* ========================================================= */}
      {/* 3. OUR VALUES SECTION (Dark Industrial Theme)            */}
      {/* ========================================================= */}
      <div className="w-full bg-gradient-to-b from-brand-black via-[#012422] to-brand-black py-16 sm:py-24 px-4 sm:px-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="flex flex-col gap-2 mb-12">
            <span className="text-xs uppercase tracking-[0.3em] text-primary-yellow font-extrabold">
              OUR VALUES
            </span>
            <h2 className="text-3xl sm:text-5xl font-bebas font-extrabold text-white tracking-wide">
              Built on Strong Values
            </h2>
            <p className="text-white/60 max-w-xl text-xs sm:text-sm font-light leading-relaxed mt-1">
              Our values shape everything we do. They are the foundation of our culture and the reason our clients trust us.
            </p>
          </div>

          {/* Horizontal 5-Column Core Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {[
              {
                title: "Safety First",
                desc: "Safety is our top priority in every project.",
                icon: ShieldCheck
              },
              {
                title: "Quality Work",
                desc: "We deliver the highest quality in every project.",
                icon: Award
              },
              {
                title: "Integrity",
                desc: "We conduct business with honesty and transparency.",
                icon: Handshake
              },
              {
                title: "Innovation",
                desc: "We embrace modern solutions to achieve better results.",
                icon: Lightbulb
              },
              {
                title: "Teamwork",
                desc: "We believe in the power of collaboration to achieve success.",
                icon: Users
              }
            ].map((val, idx) => (
              <motion.div
                key={idx}
                className="p-6 bg-[#02534D]/15 border border-white/5 rounded-sm hover:bg-[#02534D]/35 hover:border-primary-yellow/30 transition-all duration-300 flex flex-col items-center text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                whileHover={{ y: -6 }}
              >
                {/* Yellow Icon Shield */}
                <div className="w-12 h-12 rounded-full bg-primary-yellow/10 flex items-center justify-center text-primary-yellow border border-primary-yellow/20 mb-4 group-hover:bg-primary-yellow group-hover:text-brand-black transition-all duration-300">
                  <val.icon className="w-5.5 h-5.5" />
                </div>
                <h3 className="font-bebas text-xl font-bold text-white tracking-wide mb-2 group-hover:text-primary-yellow transition-colors">
                  {val.title}
                </h3>
                <p className="text-white/60 text-[11px] sm:text-xs font-light leading-relaxed">
                  {val.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>


      {/* ========================================================= */}
      {/* 4. MISSION & VISION SECTION (Slanted Excavator Layout)   */}
      {/* ========================================================= */}
      <div className="w-full bg-[#fcfcfc] py-16 sm:py-24 px-4 sm:px-8 border-t border-brand-black/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Targets Column (Col 6) */}
            <motion.div 
              className="lg:col-span-6 flex flex-col gap-8"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              
              {/* Mission Row */}
              <div className="flex items-start gap-4.5">
                <div className="w-12 h-12 rounded-full bg-[#02534D] flex items-center justify-center text-primary-yellow shrink-0 shadow-md">
                  <Target className="w-5 h-5" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-2xl font-bebas font-extrabold text-primary-green tracking-wide leading-none">
                    OUR MISSION
                  </h3>
                  <p className="text-brand-black/70 text-xs sm:text-sm font-light leading-relaxed">
                    To provide reliable, safe and innovative contracting solutions that contribute to the growth and development of our clients and communities.
                  </p>
                </div>
              </div>

              {/* Vision Row */}
              <div className="flex items-start gap-4.5">
                <div className="w-12 h-12 rounded-full bg-[#02534D] flex items-center justify-center text-primary-yellow shrink-0 shadow-md">
                  <Eye className="w-5 h-5" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-2xl font-bebas font-extrabold text-primary-green tracking-wide leading-none">
                    OUR VISION
                  </h3>
                  <p className="text-brand-black/70 text-xs sm:text-sm font-light leading-relaxed">
                    To be recognized as a leading contracting and service provider in Saudi Arabia known for quality, trust and excellence.
                  </p>
                </div>
              </div>

            </motion.div>

            {/* Right Slanted Excavator Image Frame (Col 6) */}
            <motion.div 
              className="lg:col-span-6 relative w-full h-[320px] sm:h-[400px] lg:h-[450px] flex items-center justify-center rounded-sm lg:overflow-visible overflow-hidden"
              initial={{ opacity: 0, scale: 0.95, x: 40 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Slanted Double Neon Border Outlines (Desktop only) */}
              <div className="absolute inset-0 z-20 pointer-events-none hidden lg:block">
                {/* Green Slanted Border Band */}
                <div className="absolute inset-0 bg-primary-green clip-divider-green shadow-[0_0_15px_#02534D]" />
                {/* Yellow Slanted Border Band */}
                <div className="absolute inset-0 bg-primary-yellow clip-divider-yellow shadow-[0_0_15px_#FFCC00]" />
              </div>

              {/* Excavator Image Container (Desktop Slanted, Mobile Rectangular) */}
              <div className="absolute inset-0 w-full h-full clip-slanted overflow-hidden rounded-sm">
                <img 
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1200&auto=format&fit=crop"
                  alt="Heavy Excavator Sunset Skyline"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/25 via-transparent to-transparent z-10" />
              </div>
            </motion.div>

          </div>
        </div>
      </div>

    </section>
  );
}
