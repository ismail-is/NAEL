"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Menu, 
  X, 
  ChevronDown, 
  MessageSquare, 
  ArrowRight
} from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/#services" },
 
  { name: "Contact Us", href: "/contact" }
];

const serviceDropdownItems = [
  { name: "Specialized in Container Trading", href: "/services/container-trading" },
  { name: "Sweet Water Delivery", href: "/services/sweet-water-delivery" },
  { name: "Sewage Cleaning Services", href: "/services/sewage-cleaning" },
  { name: "Scaffolding Services", href: "/services/scaffolding" },
  { name: "Equipment & Machinery Rental", href: "/services/equipment-rental" },
  { name: "Manpower Supply", href: "/services/manpower-supply" },
  { name: "Fencing Services", href: "/services/fencing" },
  { name: "Steel Fabrication", href: "/services/steel-fabrication" },
  { name: "Porta Cabins", href: "/services/porta-cabins" }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Determine active section based on scroll position
      const sections = navLinks.map(link => link.href.substring(1));
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, href: string) => {
    // If it's a dedicated page route (doesn't start with '#' or '/#')
    if (!href.startsWith("#") && !href.startsWith("/#")) {
      setMobileMenuOpen(false);
      return; // Allow default browser routing
    }

    setMobileMenuOpen(false);
    
    // Extract clean target ID (e.g. from '/#services' or '#services' to 'services')
    const targetId = href.replace(/^\/?#/, "");
    const el = document.getElementById(targetId);
    
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
        {/* 1. Contact / Social Info Top Bar (Slides up smoothly on scroll) */}
        <div 
          className={`bg-brand-black/95 text-white/80 border-b border-white/5 text-[11px] px-4 sm:px-8 flex justify-between items-center transition-all duration-500 ease-in-out origin-top overflow-hidden ${
            isScrolled 
              ? "h-0 opacity-0 -translate-y-full pointer-events-none" 
              : "h-[38px] opacity-100 translate-y-0"
          } hidden sm:flex`}
        >
          {/* Left Contacts Section */}
          <div className="flex items-center gap-5 sm:gap-6 font-light">
            <a href="tel:+966510969975" className="flex items-center gap-1.5 hover:text-primary-yellow transition-colors">
              <Phone className="w-3.5 h-3.5 text-primary-yellow shrink-0" />
              +966 51 096 9975
            </a>
            <a href="tel:+966547133946" className="hidden md:flex items-center gap-1.5 hover:text-primary-yellow transition-colors">
              <Phone className="w-3.5 h-3.5 text-primary-yellow shrink-0" />
              +966 54 713 3946
            </a>
          </div>

          {/* Right Timings & Socials Section */}
          <div className="flex items-center gap-5 sm:gap-6 font-light">
            <a href="mailto:mohdismail@naelksa.com" className="hidden md:flex items-center gap-1.5 hover:text-primary-yellow transition-colors">
              <Mail className="w-3.5 h-3.5 text-primary-yellow shrink-0" />
              mohdismail@naelksa.com
            </a>
            <a href="mailto:info@naelksa.com" className="hidden md:flex items-center gap-1.5 hover:text-primary-yellow transition-colors">
              <Mail className="w-3.5 h-3.5 text-primary-yellow shrink-0" />
              info@naelksa.com
            </a>
            <div className="flex items-center gap-2 border-l border-white/10 pl-4">
              <a href="#" aria-label="Facebook" className="w-5 h-5 rounded-full bg-primary-yellow/10 flex items-center justify-center text-primary-yellow hover:bg-primary-yellow hover:text-brand-black transition-all duration-300">
                <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="w-5 h-5 rounded-full bg-primary-yellow/10 flex items-center justify-center text-primary-yellow hover:bg-primary-yellow hover:text-brand-black transition-all duration-300">
                <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className="w-5 h-5 rounded-full bg-primary-yellow/10 flex items-center justify-center text-primary-yellow hover:bg-primary-yellow hover:text-brand-black transition-all duration-300">
                <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* 2. Main Navigation Bar */}
        <nav 
          className={`w-full transition-all duration-500 py-4 md:py-5 px-4 sm:px-8 flex justify-between items-center ${
            isScrolled 
              ? "bg-white/95 backdrop-blur-md py-3 shadow-md shadow-brand-black/5 border-b border-brand-black/5" 
              : "bg-[#0b0b0b]/40 backdrop-blur-md border-b border-white/5 shadow-lg shadow-black/10"
          }`}
        >
          {/* Logo Branding using Official WebP Logos */}
          <Link 
            href="/" 
            onClick={(e) => handleNavClick(e, "/")}
            className="flex items-center gap-2.5 group shrink-0"
          >
            <div className="relative h-11 w-36 sm:w-40 transition-all duration-300">
              <Image
                src={isScrolled ? "/naelksa/Nael Logo.webp" : "/naelksa/Nael Logo White.webp"}
                alt="NAEL Logo"
                fill
                priority
                className="object-contain transition-all duration-500"
              />
            </div>
          </Link>

          {/* Desktop Menu links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const active = activeSection === link.href.substring(1);
              
              if (link.name === "Services") {
                return (
                  <div key={link.name} className="relative group py-1.5 cursor-pointer">
                    <button
                      onClick={(e) => handleNavClick(e, "/#services")}
                      className={`text-sm uppercase tracking-widest font-medium transition-all duration-300 flex items-center gap-1 focus:outline-none cursor-pointer ${
                        activeSection === "services" 
                          ? (isScrolled ? "text-primary-green font-bold" : "text-primary-yellow font-bold") 
                          : (isScrolled ? "text-brand-black/70 hover:text-brand-black" : "text-white/80 hover:text-white")
                      }`}
                    >
                      Services
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-180 ${isScrolled ? "text-primary-green" : "text-primary-yellow"}`} />
                    </button>

                    {/* Glassmorphic Dropdown Panel Outer Wrapper (pt-2 to close the 8px hover gap completely) */}
                    <div className="absolute top-[100%] left-1/2 -translate-x-1/2 w-64 pt-2 transition-all duration-300 opacity-0 -translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto z-[2000]">
                      <div className={`p-4 rounded-sm shadow-2xl flex flex-col gap-2.5 ${
                        isScrolled 
                          ? "bg-white border border-brand-black/10 shadow-brand-black/5" 
                          : "bg-[#0b0b0b]/98 backdrop-blur-xl border border-white/10 shadow-black/40"
                      }`}>
                        {serviceDropdownItems.map((item, subIdx) => (
                          <Link
                            key={subIdx}
                            href={item.href}
                            onClick={(e) => handleNavClick(e, item.href)}
                            className={`text-[10px] font-bold uppercase tracking-wider py-1.5 hover:pl-2.5 transition-all duration-300 border-l border-white/0 flex items-center gap-2 ${
                              isScrolled 
                                ? "text-brand-black/75 hover:text-primary-green hover:border-primary-green" 
                                : "text-white/75 hover:text-primary-yellow hover:border-primary-yellow"
                            }`}
                          >
                            <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${isScrolled ? "bg-primary-green/30" : "bg-primary-yellow/30"}`} />
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-sm uppercase tracking-widest font-medium transition-all duration-300 relative py-1.5 ${
                    active 
                      ? (isScrolled ? "text-primary-green font-bold" : "text-primary-yellow font-bold") 
                      : (isScrolled ? "text-brand-black/70 hover:text-brand-black" : "text-white/80 hover:text-white")
                  }`}
                >
                  {link.name}
                  <span 
                    className={`absolute bottom-0 left-0 h-[2px] transition-all duration-300 ${
                      isScrolled ? "bg-primary-green" : "bg-primary-yellow"
                    } ${active ? "w-full" : "w-0 hover:w-full"}`}
                  />
                </Link>
              );
            })}
          </div>

          {/* Call to Action Buttons */}
          <div className="hidden sm:flex items-center gap-4">
           
            <Link 
              href="/contact"
              onClick={(e) => handleNavClick(e, "/contact")}
              className={`relative px-6 py-2.5 text-xs font-bold uppercase tracking-widest rounded-sm transition-all duration-300 flex items-center gap-1.5 cursor-pointer ${
                isScrolled 
                  ? "bg-primary-green text-white hover:bg-brand-black hover:text-white" 
                  : "bg-primary-yellow text-brand-black glow-yellow hover:bg-white hover:text-primary-green hover:shadow-white/20"
              }`}
            >
              Get A Quote
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Hamburger Mobile Menu Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(true)}
            className={`lg:hidden transition-colors focus:outline-none ${
              isScrolled ? "text-brand-black hover:text-primary-green" : "text-white/90 hover:text-primary-yellow"
            }`}
            aria-label="Open Menu"
          >
            <Menu className="w-7 h-7" />
          </button>
        </nav>
      </header>

      {/* 3. Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-[10000] lg:hidden bg-brand-black/98 backdrop-blur-md flex flex-col justify-between p-8"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Header row in mobile overlay */}
            <div className="flex justify-between items-center">
              <Link 
                href="/" 
                className="flex items-center gap-2" 
                onClick={() => setMobileMenuOpen(false)}
              >
                <div className="relative h-11 w-36 transition-all duration-300">
                  <Image
                    src="/naelksa/Nael Logo White.webp"
                    alt="NAEL Logo"
                    fill
                    priority
                    className="object-contain"
                  />
                </div>
              </Link>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="text-white hover:text-primary-yellow transition-colors focus:outline-none"
                aria-label="Close Menu"
              >
                <X className="w-8 h-8" />
              </button>
            </div>

            {/* Menu Links with Stagger Reveal and Nested Accordion */}
            <div className="flex flex-col gap-6 my-auto items-start w-full">
              {navLinks.map((link, index) => {
                if (link.name === "Services") {
                  return (
                    <div key={link.name} className="w-full flex flex-col items-start">
                      <button
                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                        className="text-3xl font-bebas tracking-widest text-white hover:text-primary-yellow font-bold uppercase transition-colors flex items-center gap-2 w-full justify-between focus:outline-none cursor-pointer"
                      >
                        {link.name}
                        <ChevronDown className={`w-6 h-6 transition-transform duration-300 ${mobileServicesOpen ? "rotate-180 text-primary-yellow" : "text-white/60"}`} />
                      </button>

                      {/* Mobile Accordion Nest */}
                      <AnimatePresence>
                        {mobileServicesOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden flex flex-col gap-3 pl-4 mt-3 border-l border-white/10 w-full"
                          >
                            {serviceDropdownItems.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                onClick={(e) => handleNavClick(e, subItem.href)}
                                className="text-xs font-medium uppercase tracking-widest text-white/60 hover:text-primary-yellow transition-colors py-1.5 block border-b border-white/5 last:border-b-0"
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + index * 0.05, duration: 0.4 }}
                    className="w-full"
                  >
                    <Link
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="text-3xl font-bebas tracking-widest text-white hover:text-primary-yellow font-bold uppercase transition-colors block"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom Section with Contact / Info */}
            <div className="flex flex-col gap-6 border-t border-white/10 pt-6">
              <div className="flex flex-col gap-2.5 text-xs text-white/60">
                <span className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary-yellow" />
                  Al Jubail, Al Safat Dist. Makkah Al mukarama St.
                </span>
                <a href="mailto:mohdismail@naelksa.com" className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-primary-yellow" />
                  mohdismail@naelksa.com
                </a>
                <a href="mailto:info@naelksa.com" className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-primary-yellow" />
                  info@naelksa.com
                </a>
                <a href="tel:+966510969975" className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-primary-yellow" />
                  +966 51 096 9975
                </a>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a 
                  href="https://wa.me/966510969975"
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 bg-brand-light-grey text-white border border-white/10 hover:border-primary-yellow text-center text-xs font-bold uppercase tracking-widest transition-all rounded-sm flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 text-primary-yellow" />
                  WhatsApp Support
                </a>
                <Link 
                  href="/contact"
                  onClick={(e) => handleNavClick(e, "/contact")}
                  className="px-6 py-3 bg-primary-yellow text-brand-black text-center text-xs font-bold uppercase tracking-widest hover:bg-white transition-all rounded-sm glow-yellow flex items-center justify-center gap-1 block"
                >
                  Get A Quote
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
