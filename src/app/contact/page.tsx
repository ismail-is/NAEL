"use client";

import { useState } from "react";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  Clock, 
  CheckCircle,
  MessageSquare,
  ArrowRight,
  Send,
  Building
} from "lucide-react";

export default function ContactPage() {
  
  // Interactive form states
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "General Inquiry",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate premium server dispatch API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  return (
    <>
      <Loader />
      <Navbar />

      <main className="flex-grow pt-[120px] bg-white select-none">

        {/* ========================================================= */}
        {/* 1. CINEMATIC HERO HEADER WITH LOGISTICS OVERLAY           */}
        {/* ========================================================= */}
        <div className="relative w-full h-[320px] sm:h-[400px] bg-brand-black overflow-hidden flex items-center">
          {/* Background twilight fresh water liquid */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1200&auto=format&fit=crop"
              alt="Global Logistics Network"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-brand-black/60 z-10" />
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
            
            {/* Left Texts Breadcrumbs */}
            <div className="flex flex-col gap-2 max-w-2xl">
              <div className="flex items-center gap-2 text-white/50 text-[9px] sm:text-xs uppercase tracking-widest font-bold mb-1">
                <span>Home</span>
                <span className="text-white/30">&gt;</span>
                <span className="text-primary-yellow">Contact Us</span>
              </div>
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.35em] text-primary-yellow font-extrabold">
                GET IN TOUCH
              </span>
              <h1 className="text-3xl sm:text-6xl font-bebas font-extrabold text-white tracking-wider leading-none">
                CONTACT <span className="text-primary-yellow">US</span>
              </h1>
              <p className="text-white/80 text-[11px] sm:text-sm font-light leading-relaxed mt-2 max-w-lg">
                We are ready to partner with you. Reach out to our Al Jubail headquarters for specialized estimates, emergency dispatches, and project consultations.
              </p>
              
              {/* Features Badges list */}
              <div className="flex flex-wrap gap-3 mt-4 text-[9px] uppercase tracking-wider font-semibold text-white/95">

                <span className="bg-primary-green/45 border border-primary-yellow/20 px-3 py-1 rounded-sm flex items-center gap-1.5 backdrop-blur-sm">
                  <Clock className="w-3.5 h-3.5 text-primary-yellow" /> 24/7 Rapid Dispatch
                </span>
                <span className="bg-primary-green/45 border border-primary-yellow/20 px-3 py-1 rounded-sm flex items-center gap-1.5 backdrop-blur-sm">
                  <Building className="w-3.5 h-3.5 text-primary-yellow" /> Al Jubail HQ
                </span>
              </div>
            </div>

            {/* Right Emblem Contact Card (Slanted layout with NAEL logo) */}
            <div className="flex justify-center lg:justify-end items-center lg:mr-12">
              <div 
                className="relative w-48 h-32 sm:w-64 sm:h-44 border-2 border-primary-yellow bg-[#0b0b0b] rounded-md overflow-hidden shadow-2xl flex items-center justify-center cursor-pointer group"
                style={{
                  clipPath: "polygon(10% 0, 100% 0, 90% 100%, 0 100%)"
                }}
              >
                {/* Underlay logistics network image */}
                <img 
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop" 
                  alt="Client Communication"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                />
                {/* Teal overlay tint */}
                <div className="absolute inset-0 bg-[#02534D]/50 group-hover:bg-[#02534D]/35 transition-colors z-10" />

                {/* NAEL Logo Overlay */}
                <div className="absolute top-4 right-4 z-20 p-2 bg-brand-black/35 backdrop-blur-md border border-primary-yellow/20 rounded-sm">
                  <img 
                    src="/naelksa/Nael Logo White.webp" 
                    alt="NAEL Logo Emblem"
                    className="w-14 sm:w-20 h-auto object-contain"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>


        {/* ========================================================= */}
        {/* 2. CONTACT LAYOUT GRID (Information vs Interactive Form)  */}
        {/* ========================================================= */}
        <div className="w-full py-16 sm:py-24 px-4 sm:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* LEFT COLUMN: BRAND INFORMATION PANEL (lg:col-span-5) */}
              <div className="lg:col-span-5 flex flex-col gap-8">
                
                {/* Main Titles */}
                <div className="flex flex-col gap-1">
                  <span className="text-xs uppercase tracking-[0.3em] text-primary-yellow font-extrabold">
                    CONTACT INFORMATION
                  </span>
                  <h2 className="text-3xl sm:text-5xl font-bebas font-extrabold text-primary-green tracking-wide leading-none">
                    Let's Build <span className="text-brand-black">Together</span>
                  </h2>
                  <p className="text-brand-black/60 text-xs sm:text-sm font-light mt-2 max-w-md">
                    Have questions about container sales, sweet water tanker scheduling, or scaffolding shoring specs? Reach out directly to our expert teams.
                  </p>
                  <div className="w-16 h-[3px] bg-primary-green mt-3" />
                </div>



                {/* Address block */}
                <div className="flex items-start gap-4 p-5 bg-white border border-brand-black/5 hover:border-primary-green/20 hover:shadow-lg rounded-xl transition-all duration-300">
                  <div className="w-10 h-10 rounded-full bg-primary-green/10 flex items-center justify-center text-primary-green shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] uppercase font-bold text-brand-black/45 tracking-widest">
                      HEADQUARTERS ADDRESS
                    </span>
                    <span className="font-bebas text-lg font-bold text-primary-green tracking-wide">
                      Al Jubail, Saudi Arabia
                    </span>
                    <p className="text-brand-black/75 text-xs sm:text-sm font-light leading-relaxed">
                      Al Safat Dist., Makkah Al Mukarama St., Kingdom of Saudi Arabia.
                    </p>
                  </div>
                </div>

                {/* Call and WhatsApp Contact block */}
                <div className="flex items-start gap-4 p-5 bg-white border border-brand-black/5 hover:border-primary-green/20 hover:shadow-lg rounded-xl transition-all duration-300">
                  <div className="w-10 h-10 rounded-full bg-primary-green/10 flex items-center justify-center text-primary-green shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col gap-1 w-full">
                    <span className="text-[10px] uppercase font-bold text-brand-black/45 tracking-widest">
                      DIRECT CALLS & WHATSAPP
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-1">
                      <a 
                        href="tel:+966510969975"
                        className="flex flex-col hover:opacity-85 transition-opacity"
                      >
                        <span className="text-[10px] text-brand-black/60 font-semibold uppercase leading-tight">
                          Corporate & WhatsApp
                        </span>
                        <span className="font-bebas text-lg font-bold text-primary-green tracking-wider">
                          +966 51 096 9975
                        </span>
                      </a>
                      <a 
                        href="tel:+966547133946"
                        className="flex flex-col hover:opacity-85 transition-opacity"
                      >
                        <span className="text-[10px] text-brand-black/60 font-semibold uppercase leading-tight">
                          Project Operations
                        </span>
                        <span className="font-bebas text-lg font-bold text-primary-green tracking-wider">
                          +966 54 713 3946
                        </span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email block */}
                <div className="flex items-start gap-4 p-5 bg-white border border-brand-black/5 hover:border-primary-green/20 hover:shadow-lg rounded-xl transition-all duration-300">
                  <div className="w-10 h-10 rounded-full bg-primary-green/10 flex items-center justify-center text-primary-green shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] uppercase font-bold text-brand-black/45 tracking-widest">
                      EMAIL & DOMAIN
                    </span>
                    <span className="font-bebas text-lg font-bold text-primary-green tracking-wide">
                      info@naelksa.com
                    </span>
                    <a 
                      href="https://www.naelksa.com" 
                      target="_blank" 
                      rel="noreferrer"
                      className="text-brand-black/75 text-xs sm:text-sm font-light hover:text-primary-yellow transition-colors leading-none"
                    >
                      www.naelksa.com
                    </a>
                  </div>
                </div>

              </div>

              {/* RIGHT COLUMN: HIGH-END CONTACT FORM (lg:col-span-7) */}
              <div className="lg:col-span-7">
                
                {/* Submitted success view state */}
                {isSubmitted ? (
                  <div className="p-8 sm:p-16 bg-white border border-brand-black/5 rounded-2xl shadow-xl flex flex-col items-center text-center justify-center gap-6 min-h-[500px]">
                    <div className="w-20 h-20 rounded-full bg-primary-green/10 border border-primary-green/20 flex items-center justify-center text-primary-green">
                      <CheckCircle className="w-12 h-12" />
                    </div>
                    
                    <div className="flex flex-col gap-2 max-w-md">
                      <h3 className="font-bebas text-3xl sm:text-4xl font-extrabold text-primary-green tracking-wide uppercase leading-none">
                        Inquiry Received successfully!
                      </h3>
                      <p className="text-brand-black/70 text-xs sm:text-sm font-light leading-relaxed">
                        Thank you for reaching out to NAEL Establishment. Our department coordinators will review your details and connect with you shortly.
                      </p>
                    </div>

                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="px-8 py-3.5 bg-primary-green hover:bg-brand-light-green text-white text-xs font-bold uppercase tracking-widest rounded-sm transition-all duration-300 cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  
                  // Interactive Input Form Card
                  <form 
                    onSubmit={handleSubmit}
                    className="p-8 sm:p-10 bg-white border border-brand-black/5 rounded-2xl shadow-xl flex flex-col gap-6"
                  >
                    <div className="flex flex-col gap-1">
                      <h3 className="font-bebas text-2xl sm:text-3xl font-extrabold text-primary-green tracking-wide">
                        Send Us A Direct Message
                      </h3>
                      <p className="text-brand-black/60 text-xs font-light leading-none">
                        Fill out the details below, and we will route your inquiry to the correct department immediately.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      
                      {/* Name input */}
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] sm:text-xs font-extrabold text-brand-black/65 uppercase tracking-wider">
                          Full Name *
                        </label>
                        <input 
                          type="text" 
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          placeholder="e.g. Abdullah bin Fahd"
                          className="w-full bg-[#fafafa] border border-brand-black/5 rounded-md px-4 py-3 text-xs sm:text-sm text-brand-black placeholder-brand-black/35 focus:outline-none focus:border-primary-green/40 focus:ring-1 focus:ring-primary-green/20 transition-all font-light"
                        />
                      </div>

                      {/* Email input */}
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] sm:text-xs font-extrabold text-brand-black/65 uppercase tracking-wider">
                          Email Address *
                        </label>
                        <input 
                          type="email" 
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          placeholder="e.g. company@domain.com"
                          className="w-full bg-[#fafafa] border border-brand-black/5 rounded-md px-4 py-3 text-xs sm:text-sm text-brand-black placeholder-brand-black/35 focus:outline-none focus:border-primary-green/40 focus:ring-1 focus:ring-primary-green/20 transition-all font-light"
                        />
                      </div>

                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      
                      {/* Phone input */}
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] sm:text-xs font-extrabold text-brand-black/65 uppercase tracking-wider">
                          Phone Number *
                        </label>
                        <input 
                          type="tel" 
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          placeholder="e.g. +966 5X XXX XXXX"
                          className="w-full bg-[#fafafa] border border-brand-black/5 rounded-md px-4 py-3 text-xs sm:text-sm text-brand-black placeholder-brand-black/35 focus:outline-none focus:border-primary-green/40 focus:ring-1 focus:ring-primary-green/20 transition-all font-light"
                        />
                      </div>

                      {/* Service Dropdown Selector */}
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] sm:text-xs font-extrabold text-brand-black/65 uppercase tracking-wider">
                          Required Service Department
                        </label>
                        <select 
                          value={formData.service}
                          onChange={(e) => setFormData({...formData, service: e.target.value})}
                          className="w-full bg-[#fafafa] border border-brand-black/5 rounded-md px-4 py-3 text-xs sm:text-sm text-brand-black focus:outline-none focus:border-primary-green/40 focus:ring-1 focus:ring-primary-green/20 transition-all font-light"
                        >
                          <option value="Container Trading">Specialized in Container Trading</option>
                          <option value="Sweet Water Delivery">Sweet Water Delivery</option>
                          <option value="Sewage Cleaning">Sewage Cleaning Services</option>
                          <option value="Scaffolding Services">Scaffolding Services</option>
                          <option value="Equipment Rental">Heavy Equipment Rental</option>
                          <option value="Manpower Supply">Manpower Supply</option>
                          <option value="Fencing Solutions">Industrial Fencing Solutions</option>
                          <option value="Steel Fabrication">Steel Fabrication</option>
                          <option value="Porta Cabins">Porta Cabins</option>
                          <option value="General Inquiry">General Inquiry</option>
                        </select>
                      </div>

                    </div>

                    {/* Message Text area */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] sm:text-xs font-extrabold text-brand-black/65 uppercase tracking-wider">
                        Your Message *
                      </label>
                      <textarea 
                        rows={6}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        placeholder="Write down your project requirements, quantities, or specific questions..."
                        className="w-full bg-[#fafafa] border border-brand-black/5 rounded-md px-4 py-3 text-xs sm:text-sm text-brand-black placeholder-brand-black/35 focus:outline-none focus:border-primary-green/40 focus:ring-1 focus:ring-primary-green/20 transition-all font-light resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-primary-yellow hover:bg-[#ffdf43] disabled:bg-[#f6d74b]/50 text-brand-black font-semibold text-xs sm:text-sm font-bold uppercase tracking-widest rounded-md shadow-lg shadow-primary-yellow/15 flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>Sending Inquiry...</>
                      ) : (
                        <>
                          Submit Inquiry 
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>

                  </form>
                )}

              </div>

            </div>
          </div>
        </div>


        {/* ========================================================= */}
        {/* 3. PREMIUM GEOLOCATION MAP CONTAINER                      */}
        {/* ========================================================= */}
        <div className="w-full py-8 px-4 sm:px-8 bg-white border-t border-brand-black/5">
          <div className="max-w-7xl mx-auto">
            
            {/* Header Titles */}
            <div className="flex flex-col gap-1 mb-8 text-center items-center">
              <span className="text-xs uppercase tracking-[0.3em] text-primary-yellow font-extrabold">
                GEOLOCATION
              </span>
              <h2 className="text-3xl sm:text-5xl font-bebas font-extrabold text-primary-green tracking-wide">
                Visit Our Headquarters
              </h2>
              <div className="w-16 h-[3px] bg-primary-green mt-1" />
            </div>

            {/* Custom interactive Mock Google Map frame */}
            <div className="relative w-full h-[400px] border border-brand-black/5 rounded-2xl overflow-hidden shadow-2xl group select-none">
              
              {/* Stylized dark-aesthetic vector map outline */}
              <div className="absolute inset-0 bg-[#0b0b0b] z-0 flex items-center justify-center overflow-hidden">
                
                {/* Radial dark design glows */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#02534D/15,transparent_75%)] pointer-events-none" />
                <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-primary-yellow/5 blur-3xl pointer-events-none" />

                {/* Stylized map grid patterns */}
                <div 
                  className="absolute inset-0 opacity-15"
                  style={{
                    backgroundImage: `
                      radial-gradient(circle, #ffffff 1px, transparent 1px),
                      linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
                      linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
                    `,
                    backgroundSize: "24px 24px, 48px 48px, 48px 48px",
                    backgroundPosition: "center"
                  }}
                />

                {/* Vector Route Lines */}
                <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M-100 200 L400 220 L800 150 L1300 250" fill="none" stroke="#FFCC00" strokeWidth="2" strokeDasharray="5,5" />
                  <path d="M200 -50 L350 180 L400 220 L420 500" fill="none" stroke="#02534D" strokeWidth="3" />
                  <path d="M600 -50 L750 120 L800 150 L900 500" fill="none" stroke="#ffffff" strokeWidth="1.5" />
                </svg>

                {/* Pulsating target Pin */}
                <div className="relative flex flex-col items-center z-10">
                  <div className="relative w-12 h-12 flex items-center justify-center">
                    <span className="absolute inset-0 rounded-full bg-primary-yellow animate-ping opacity-45 duration-1000" />
                    <span className="absolute w-8 h-8 rounded-full bg-primary-green flex items-center justify-center border-2 border-primary-yellow shadow-lg">
                      <Building className="w-4 h-4 text-primary-yellow" />
                    </span>
                  </div>
                  
                  {/* Target Card overlay on pin */}
                  <div className="mt-3 p-4 bg-brand-black/90 backdrop-blur-md border border-primary-yellow/30 rounded-lg shadow-xl text-center flex flex-col items-center gap-1.5 max-w-xs transition-transform duration-300 group-hover:scale-105">
                    <img 
                      src="/naelksa/Nael Logo White.webp" 
                      alt="NAEL Logo emblem" 
                      className="w-16 h-auto object-contain mb-1"
                    />
                    <h3 className="font-bebas text-lg font-bold text-white tracking-wide uppercase leading-none">
                      NAEL ESTABLISHMENT
                    </h3>
                    <span className="text-[10px] text-primary-yellow font-extrabold uppercase tracking-widest leading-none">
                      AL JUBAIL HQ
                    </span>
                    <p className="text-white/60 text-[9px] sm:text-xs font-light leading-relaxed mt-1">
                      Makkah Al Mukarama St., Al Safat District
                    </p>
                    
                    <a 
                      href="https://wa.me/966510969975"
                      target="_blank"
                      rel="noreferrer"
                      className="mt-2 text-[10px] uppercase font-bold text-[#25D366] hover:text-white flex items-center gap-1 leading-none transition-colors"
                    >
                      <MessageSquare className="w-3.5 h-3.5" /> Navigate via WhatsApp
                    </a>
                  </div>
                </div>

              </div>

              {/* Dynamic Bottom Accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-primary-yellow z-10" />

            </div>

          </div>
        </div>

      </main>

      <Footer />
    </>
  );
}
