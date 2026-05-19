"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Activity, ShieldCheck, Flame, Droplets, Layers, Zap } from "lucide-react";

// Structured partner logo items with customized geometric vector icons representing major Saudi industrial brands
const partnersList = [
  { name: "SABIC", desc: "Saudi Basic Industries Corp.", icon: Layers, accentColor: "#02534D" },
  { name: "SAUDI ARAMCO", desc: "National Oil & Gas Company", icon: Flame, accentColor: "#FFCC00" },
  { name: "SATORP", desc: "Jubail Refinery Joint Venture", icon: Activity, accentColor: "#02534D" },
  { name: "MA'ADEN", desc: "Saudi Arabian Mining Co.", icon: ShieldCheck, accentColor: "#FFCC00" },
  { name: "MARAFIQ", desc: "Jubail Water & Power Utility", icon: Zap, accentColor: "#02534D" },
  { name: "NATIONAL WATER CO.", desc: "NWC Logistics Partner", icon: Droplets, accentColor: "#FFCC00" }
];

export default function Partners() {
  // Duplicate list to achieve seamless infinite scroll marquee
  const marqueeItems = [...partnersList, ...partnersList, ...partnersList];

  return (
    <section 
      id="partners" 
      className="bg-[#0b0b0b] py-20 px-4 sm:px-8 border-t border-white/5 relative overflow-hidden"
    >
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary-green/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Block with slider control aesthetics */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
            <span className="text-[10px] uppercase tracking-[0.4em] text-primary-yellow font-bold">
              TRUSTED COLLABORATION
            </span>
            <h2 className="text-3xl font-bebas font-extrabold text-white tracking-wider uppercase leading-none">
              OUR CLIENTS & PARTNERS
            </h2>
            <div className="w-12 h-0.5 bg-primary-green mt-1" />
          </div>

          {/* Nav arrows representing UI matching screenshot */}
          <div className="flex items-center gap-2.5">
            <button className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:border-primary-yellow hover:text-primary-yellow transition-all duration-300">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:border-primary-yellow hover:text-primary-yellow transition-all duration-300">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Auto Scrolling Marquee Lane */}
        <div className="relative w-full overflow-hidden no-scrollbar py-4 mask-text">
          
          {/* Shadow Faders for edge blending */}
          <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-brand-black to-transparent z-20 pointer-events-none" />
          <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-brand-black to-transparent z-20 pointer-events-none" />

          {/* Marquee Row */}
          <div className="flex w-max gap-6 animate-marquee hover:[animation-play-state:paused]">
            {marqueeItems.map((partner, index) => {
              const PartnerIcon = partner.icon;
              return (
                <div 
                  key={index}
                  className="w-[240px] sm:w-[280px] p-6 rounded-sm glass-card border border-white/5 backdrop-blur-md flex items-center gap-4 hover:border-primary-yellow/30 hover:bg-primary-green/5 transition-all duration-500 interactive-card cursor-pointer group"
                >
                  {/* Abstract Logo Symbol Icon */}
                  <div className="w-12 h-12 rounded-sm bg-brand-light-grey flex items-center justify-center border border-white/5 text-white/60 group-hover:text-primary-yellow group-hover:border-primary-yellow/30 transition-all duration-500">
                    <PartnerIcon className="w-5 h-5 stroke-[1.5]" />
                  </div>

                  {/* Brand Information */}
                  <div className="flex flex-col">
                    <span className="font-bebas text-lg sm:text-xl font-bold tracking-wider text-white group-hover:text-primary-yellow transition-colors leading-none">
                      {partner.name}
                    </span>
                    <span className="text-[9px] uppercase tracking-widest text-white/40 mt-1 font-medium group-hover:text-white/60 transition-colors leading-tight">
                      {partner.desc}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
