"use client";

import { motion } from "framer-motion";
import { MessageSquare, ArrowRight, Construction, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function CTA() {
  return (
    <section 
      className="relative bg-gradient-to-r from-brand-black via-[#012422] to-brand-black py-24 px-4 sm:px-8 overflow-hidden border-t border-white/5"
    >
      {/* Cinematic pulsating glow light beam */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-primary-green/20 blur-[150px] pointer-events-none animate-pulse-slow z-0" />
      
      {/* Industrial Grid Background */}
      <div className="absolute inset-0 industrial-grid opacity-10 pointer-events-none z-0" />
      
      {/* Decorative bright diagonal highlight bar */}
      <div className="absolute bottom-0 right-0 w-[45%] h-[4px] bg-gradient-to-r from-primary-green via-primary-yellow to-transparent z-10" />
      <div className="absolute top-0 left-0 w-[45%] h-[4px] bg-gradient-to-r from-transparent via-primary-yellow to-primary-green z-10" />

      <div className="max-w-4xl mx-auto relative z-10 text-center flex flex-col items-center gap-6">
        
        {/* Animated Construction Tag */}
        <motion.div 
          className="flex items-center gap-2 px-3 py-1.5 rounded-sm bg-primary-yellow/10 border border-primary-yellow/20 text-primary-yellow text-xs font-bold uppercase tracking-widest"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        >
          <Construction className="w-3.5 h-3.5" />
          Ready To Build Together?
        </motion.div>

        {/* Heading */}
        <h2 className="text-4xl sm:text-6xl font-bebas font-extrabold text-white tracking-wider leading-none">
          READY TO START YOUR <span className="text-primary-yellow text-glow-yellow">NEXT PROJECT?</span>
        </h2>
        
        <p className="text-white/70 max-w-xl text-xs sm:text-sm font-light leading-relaxed">
          Contact Al Jubail&apos;s leading contracting and industrial resource team. We provide rapid estimators, custom container leases, safe scaffolding, sweet water supply, and complete site management setups.
        </p>

        {/* Rapid site advantages checklist */}
        <div className="flex flex-wrap justify-center items-center gap-4 text-white/50 text-[10px] sm:text-xs uppercase tracking-widest font-semibold mt-2">
          <span className="flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-primary-yellow" /> Instant Invoicing</span>
          <span className="flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-primary-yellow" /> Fully Insured Crew</span>
          <span className="flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-primary-yellow" /> 24/7 Logistics Desk</span>
        </div>

        {/* Dual Actions CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 mt-6 w-full max-w-md justify-center">
          <Link 
            href="/contact"
            className="px-8 py-4 bg-primary-yellow text-brand-black text-xs font-bold uppercase tracking-widest rounded-sm transition-all duration-300 flex items-center justify-center gap-1.5 glow-yellow hover:bg-white cursor-pointer font-semibold"
          >
            Get A Fast Quote
            <ArrowRight className="w-4 h-4" />
          </Link>
          
          <a 
            href="https://wa.me/966510969975"
            target="_blank"
            rel="noreferrer"
            className="px-8 py-4 bg-brand-black/85 text-white border border-white/10 hover:border-primary-yellow text-xs font-bold uppercase tracking-widest rounded-sm transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer group"
          >
            <MessageSquare className="w-4 h-4 text-primary-yellow group-hover:scale-110 transition-transform" />
            WhatsApp Support
          </a>
        </div>

      </div>
    </section>
  );
}
