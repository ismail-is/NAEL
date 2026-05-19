"use client";

import { useState } from "react";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Globe, 
  Send, 
  Heart,
  ChevronRight,
  ShieldAlert
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#060606] text-white pt-20 pb-8 px-4 sm:px-8 border-t border-white/5 relative overflow-hidden">
      
      {/* Decorative vertical divider highlights */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#FFCC00]/25 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-white/5">
        
        {/* Col 1: Corporate Branding (lg:col-span-4) */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-10 h-10 flex items-center justify-center bg-brand-black border-2 border-primary-yellow rounded-sm">
              <span className="font-bebas text-2xl text-primary-yellow font-extrabold">N</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bebas text-2xl tracking-wider text-white font-extrabold group-hover:text-primary-yellow transition-colors leading-none">
                NAEL
              </span>
              <span className="text-[8px] uppercase tracking-[0.25em] text-white/50 font-medium leading-none mt-1">
                Lamiya Al Khaleej Al Ittihad Est.
              </span>
            </div>
          </a>

          <p className="text-white/50 text-xs sm:text-sm font-light leading-relaxed max-w-sm">
            LAMIYA AL KHALEEJ AL ITTIHAD ESTABLISHMENT FOR GENERAL CONTRACTING is a premier industrial solutions provider in Al Jubail, Saudi Arabia, focused on general construction, sweet water delivery, container services, scaffolding, and heavy machinery leasing.
          </p>

          <div className="flex flex-col gap-2">
            <span className="text-[10px] uppercase tracking-widest text-primary-yellow font-bold">
              Corporate Licenses
            </span>
            <div className="flex flex-wrap gap-2">
              <span className="text-[10px] bg-brand-light-grey border border-white/5 px-2.5 py-1 text-white/50 rounded-sm">
                C.R.: 7004352311
              </span>
              <span className="text-[10px] bg-brand-light-grey border border-white/5 px-2.5 py-1 text-white/50 rounded-sm">
                C.R.: 2050116599
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a href="#" aria-label="Facebook" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:bg-primary-yellow hover:text-brand-black hover:border-primary-yellow transition-all duration-500">
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:bg-primary-yellow hover:text-brand-black hover:border-primary-yellow transition-all duration-500">
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="#" aria-label="Instagram" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:bg-primary-yellow hover:text-brand-black hover:border-primary-yellow transition-all duration-500">
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Col 2: Quick Links (lg:col-span-2) */}
        <div className="lg:col-span-2 flex flex-col gap-5">
          <h3 className="font-bebas text-xl font-bold tracking-wider text-white border-l-2 border-primary-yellow pl-3 leading-none">
            QUICK SITEMAP
          </h3>
          <div className="flex flex-col gap-3 text-xs sm:text-sm font-light text-white/60">
            <a href="#home" className="hover:text-primary-yellow transition-colors flex items-center gap-1"><ChevronRight className="w-3.5 h-3.5" /> Home</a>
            <a href="#about" className="hover:text-primary-yellow transition-colors flex items-center gap-1"><ChevronRight className="w-3.5 h-3.5" /> About Us</a>
            <a href="#services" className="hover:text-primary-yellow transition-colors flex items-center gap-1"><ChevronRight className="w-3.5 h-3.5" /> Services</a>
            <a href="#testimonials" className="hover:text-primary-yellow transition-colors flex items-center gap-1"><ChevronRight className="w-3.5 h-3.5" /> Testimonials</a>
            <a href="#contact" className="hover:text-primary-yellow transition-colors flex items-center gap-1"><ChevronRight className="w-3.5 h-3.5" /> Contact Us</a>
          </div>
        </div>

        {/* Col 3: Industrial Services (lg:col-span-3) */}
        <div className="lg:col-span-3 flex flex-col gap-5">
          <h3 className="font-bebas text-xl font-bold tracking-wider text-white border-l-2 border-primary-yellow pl-3 leading-none">
            OUR SERVICES
          </h3>
          <div className="flex flex-col gap-3 text-xs sm:text-sm font-light text-white/60">
            <a href="#services" className="hover:text-primary-yellow transition-colors flex items-center gap-1"><ChevronRight className="w-3.5 h-3.5" /> Container Trading</a>
            <a href="#services" className="hover:text-primary-yellow transition-colors flex items-center gap-1"><ChevronRight className="w-3.5 h-3.5" /> Sweet Water Delivery</a>
            <a href="#services" className="hover:text-primary-yellow transition-colors flex items-center gap-1"><ChevronRight className="w-3.5 h-3.5" /> Sewage Vacuum Suction</a>
            <a href="#services" className="hover:text-primary-yellow transition-colors flex items-center gap-1"><ChevronRight className="w-3.5 h-3.5" /> Scaffolding Installation</a>
            <a href="#services" className="hover:text-primary-yellow transition-colors flex items-center gap-1"><ChevronRight className="w-3.5 h-3.5" /> Heavy Machinery Rental</a>
          </div>
        </div>

        {/* Col 4: Contact & Google Map (lg:col-span-3) */}
        <div className="lg:col-span-3 flex flex-col gap-5">
          <h3 className="font-bebas text-xl font-bold tracking-wider text-white border-l-2 border-primary-yellow pl-3 leading-none">
            CONTACT OFFICE
          </h3>
          <div className="flex flex-col gap-3 text-xs sm:text-sm font-light text-white/70">
            <span className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-primary-yellow shrink-0 mt-0.5" />
              <span>Al Jubail, Al Safat Dist. Makkah Al mukarama St., Saudi Arabia</span>
            </span>
            <a href="tel:+966510969975" className="flex items-center gap-2 hover:text-primary-yellow transition-colors">
              <Phone className="w-4 h-4 text-primary-yellow shrink-0" />
              +966 51 096 9975
            </a>
            <a href="tel:+966547133946" className="flex items-center gap-2 hover:text-primary-yellow transition-colors">
              <Phone className="w-4 h-4 text-primary-yellow shrink-0" />
              +966 54 713 3946
            </a>
            <a href="mailto:info@naelksa.com" className="flex items-center gap-2 hover:text-primary-yellow transition-colors">
              <Mail className="w-4 h-4 text-primary-yellow shrink-0" />
              info@naelksa.com
            </a>
            <a href="https://www.naelksa.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-primary-yellow transition-colors">
              <Globe className="w-4 h-4 text-primary-yellow shrink-0" />
              www.naelksa.com
            </a>
          </div>

          {/* Interactive Google Map with elegant luxury dark-mode CSS filter styling */}
          <div className="w-full h-32 rounded-sm overflow-hidden border border-white/10 relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113945.7196654157!2d49.524456740625!3d26.9744415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e35a1a1f0a0d0a5%3A0x6b29d4900a0e0a5!2sAl%20Jubail%20Saudi%20Arabia!5e0!3m2!1sen!2ssa!4v1700000000000!5m2!1sen!2ssa" 
              width="100%" 
              height="100%" 
              style={{ 
                border: 0, 
                filter: "grayscale(100%) invert(92%) contrast(85%) brightness(95%) hue-rotate(180deg)" 
              }} 
              allowFullScreen={false} 
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="NAEL HQ Map Location Jubail"
            />
            <div className="absolute bottom-2 left-2 bg-brand-black/80 px-2 py-0.5 border border-white/5 rounded-sm flex items-center gap-1 pointer-events-none">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-yellow animate-ping" />
              <span className="text-[8px] uppercase tracking-widest text-white/70 font-bold">Jubail Office</span>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Row */}
      <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/40 font-light relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-4 text-center sm:text-left">
          <span>&copy; {currentYear} Lamiya Al Khaleej Al Ittihad Est. (NAEL). All Rights Reserved.</span>
          <span className="hidden sm:inline text-white/10">|</span>
          <a href="#" className="hover:text-primary-yellow transition-colors">Privacy Policy</a>
          <span className="hidden sm:inline text-white/10">|</span>
          <a href="#" className="hover:text-primary-yellow transition-colors">Terms of Service</a>
        </div>
        
      
      </div>

    </footer>
  );
}
