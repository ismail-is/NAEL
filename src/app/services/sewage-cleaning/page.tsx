import { Metadata } from "next";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  ShieldCheck, 
  Globe, 
  DollarSign, 
  Clock, 
  ArrowRight,
  Package,
  Layers,
  Wrench,
  Thermometer,
  Container,
  Truck,
  MessageSquare,
  Droplet,
  CheckCircle,
  Activity,
  Zap
} from "lucide-react";

export const metadata: Metadata = {
  title: "Sewage & Drainage Cleaning Services | NAEL Establishment",
  description: "Certified sewage extraction, high-pressure drain cleaning, septic tank pumping, sewer unblocking, and vacuum compressor suction services in Al Jubail, KSA.",
};

export default function SewageCleaningPage() {
  
  // The 8 custom sewage cleaning offerings beautifully paraphrased
  const sewageOfferings = [
    {
      title: "Advanced Drain Cleaning",
      desc: "Comprehensive high-pressure hydrodynamic flushings that scour the internal walls of drainage networks, preventing scale buildup and recurring backups.",
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=800&auto=format&fit=crop",
      tag: "Hydro Jetting"
    },
    {
      title: "High-Pressure Drain Unblocking",
      desc: "Rapid emergency mechanical and pneumatic clearance of completely choked municipal and commercial drains, restoring full flow capacity.",
      image: "https://images.unsplash.com/photo-1508962914676-134849a727f0?q=80&w=800&auto=format&fit=crop",
      tag: "Emergency Clearing"
    },
    {
      title: "Inspection Chamber Unclogging",
      desc: "Thorough cleanup and mechanical unclogging of structural inspection chambers and manholes, preventing lateral sewer line flooding.",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=800&auto=format&fit=crop",
      tag: "Chamber Cleanup"
    },
    {
      title: "Facility & Interior Unclogging",
      desc: "Hygienic and residue-free unclogging of high-use commercial kitchen grease lines and industrial bathroom drainage networks.",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop",
      tag: "Facility Sanitation"
    },
    {
      title: "Septic Tank Pumping & Suction",
      desc: "Complete high-volume suction pumping and sludge extraction of residential and labor camp septic systems with chemical deodorization.",
      image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=800&auto=format&fit=crop",
      tag: "Septic Services"
    },
    {
      title: "Municipal Sewer Cleaning",
      desc: "Heavy-duty descaling and scouring of large-bore municipal sewer mainlines to maintain fluid velocities and prevent sediment accumulation.",
      image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=800&auto=format&fit=crop",
      tag: "Municipal Mains"
    },
    {
      title: "Sewer Pipe Restoration",
      desc: "Precision root-cutting, structural descaling, and high-impact pneumatic unclogging of buried lateral clay and PVC sewer pipelines.",
      image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?q=80&w=800&auto=format&fit=crop",
      tag: "Pipe Clearing"
    },
    {
      title: "Pneumatic Suction Compressors",
      desc: "Access our state-of-the-art vacuum compressor fleet, delivering extreme negative pressure suction to pull heavy sludge, sediment, and thick mud.",
      image: "https://images.unsplash.com/photo-1590486803833-ffc6f68e82f2?q=80&w=800&auto=format&fit=crop",
      tag: "Compressor Fleet"
    }
  ];

  return (
    <>
      <Loader />
      <Navbar />

      <main className="flex-grow pt-[120px] bg-white select-none">

        {/* ========================================================= */}
        {/* 1. CINEMATIC HERO HEADER WITH PIPING OVERLAY               */}
        {/* ========================================================= */}
        <div className="relative w-full h-[320px] sm:h-[400px] bg-brand-black overflow-hidden flex items-center">
          {/* Background twilight fresh water liquid */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1200&auto=format&fit=crop"
              alt="Industrial Drainage Utilities"
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
                <span>Services</span>
                <span className="text-white/30">&gt;</span>
                <span className="text-primary-yellow">Sewage & Drainage</span>
              </div>
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.35em] text-primary-yellow font-extrabold">
                SPECIALIZED IN
              </span>
              <h1 className="text-3xl sm:text-6xl font-bebas font-extrabold text-white tracking-wider leading-none">
                SEWAGE & <span className="text-primary-yellow">DRAINAGE</span>
              </h1>
              <p className="text-white/80 text-[11px] sm:text-sm font-light leading-relaxed mt-2 max-w-lg">
                Providing state-of-the-art waste management, vacuum suction extraction, and advanced high-pressure drainage unblocking for industrial, commercial, and residential sectors.
              </p>
              
              {/* Features Badges list */}
              <div className="flex flex-wrap gap-3 mt-4 text-[9px] uppercase tracking-wider font-semibold text-white/95">
                <span className="bg-primary-green/45 border border-primary-yellow/20 px-3 py-1 rounded-sm flex items-center gap-1.5 backdrop-blur-sm">
                  <ShieldCheck className="w-3.5 h-3.5 text-primary-yellow" /> EPA-Compliant
                </span>
                <span className="bg-primary-green/45 border border-primary-yellow/20 px-3 py-1 rounded-sm flex items-center gap-1.5 backdrop-blur-sm">
                  <Truck className="w-3.5 h-3.5 text-primary-yellow" /> Advanced Suction Fleet
                </span>
                <span className="bg-primary-green/45 border border-primary-yellow/20 px-3 py-1 rounded-sm flex items-center gap-1.5 backdrop-blur-sm">
                  <Clock className="w-3.5 h-3.5 text-primary-yellow" /> 24/7 Rapid Response
                </span>
              </div>
            </div>

            {/* Right Emblem Piping Card (Slanted layout with NAEL logo) */}
            <div className="flex justify-center lg:justify-end items-center lg:mr-12">
              <div 
                className="relative w-48 h-32 sm:w-64 sm:h-44 border-2 border-primary-yellow bg-[#0b0b0b] rounded-md overflow-hidden shadow-2xl flex items-center justify-center cursor-pointer group"
                style={{
                  clipPath: "polygon(10% 0, 100% 0, 90% 100%, 0 100%)"
                }}
              >
                {/* Underlay wastewater industrial logistics image */}
                <img 
                  src="https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?q=80&w=800&auto=format&fit=crop" 
                  alt="Industrial Wastewater Piping"
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
        {/* 2. OVERVIEW SECTION (Pristine White Backdrop)            */}
        {/* ========================================================= */}
        <div className="w-full py-16 sm:py-24 px-4 sm:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Column (Texts) */}
              <div className="lg:col-span-5 flex flex-col gap-6">
                <div className="flex flex-col gap-1">
                  <span className="text-xs uppercase tracking-[0.3em] text-primary-yellow font-extrabold">
                    OVERVIEW
                  </span>
                  <h2 className="text-3xl sm:text-5xl font-bebas font-extrabold text-primary-green tracking-wide leading-tight">
                    High-Volume Suction. <br />
                    <span className="text-brand-black">Absolute Sanitation.</span>
                  </h2>
                  <div className="w-16 h-[3px] bg-primary-green mt-1" />
                </div>

                <p className="text-brand-black/80 text-xs sm:text-sm font-light leading-relaxed">
                  We offer comprehensive sanitation, pipeline unclogging, and hazardous/non-hazardous liquid waste transport across Al Jubail. Sourced with a modern high-power compressor suction fleet, we handle municipal drainage blockages and deep septic wells easily.
                </p>

                <p className="text-brand-black/65 text-xs sm:text-sm font-light leading-relaxed">
                  Every team member is trained under rigorous environmental safety protocols, ensuring all extracted wastes are safely transported and disposed of at approved, eco-certified municipal disposal facilities.
                </p>

                <a 
                  href="#contact"
                  className="px-8 py-3.5 bg-primary-green hover:bg-brand-light-green text-white text-xs font-bold uppercase tracking-widest rounded-sm w-fit transition-all duration-300 flex items-center gap-2 cursor-pointer mt-2"
                >
                  Get A Quote
                  <ArrowRight className="w-4 h-4 text-primary-yellow" />
                </a>
              </div>

              {/* Right Column (3 Vertical Cards) */}
              <div className="lg:col-span-7 flex flex-col gap-4">
                {[
                  {
                    title: "High-Vacuum Suction",
                    desc: "Advanced compressor-driven vacuum tankers designed for heavy sludge extraction and septic pumping.",
                    icon: Activity
                  },
                  {
                    title: "Eco-Safe Transport",
                    desc: "Strict environmental compliance in liquid waste carriage and municipal discharge validations.",
                    icon: ShieldCheck
                  },
                  {
                    title: "Blockage Extraction",
                    desc: "Rapid pneumatic high-pressure unblocking systems for choked sewer networks and utility lines.",
                    icon: Zap
                  }
                ].map((item, idx) => (
                  <div 
                    key={idx}
                    className="p-5 bg-white border border-brand-black/5 rounded-xl hover:shadow-xl hover:border-primary-green/20 transition-all duration-300 flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary-yellow/10 border border-primary-yellow/20 flex items-center justify-center text-primary-yellow shrink-0">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <h3 className="font-bebas text-lg sm:text-xl font-bold text-primary-green tracking-wide">
                        {item.title}
                      </h3>
                      <p className="text-brand-black/65 text-xs sm:text-sm font-light leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>


        {/* ========================================================= */}
        {/* 3. WHY CHOOSE US SECTION (Teal Backdrop)                  */}
        {/* ========================================================= */}
        <div className="w-full bg-[#012422] py-16 sm:py-24 px-4 sm:px-8 border-t border-white/5 text-white">
          <div className="max-w-7xl mx-auto">
            
            {/* Header Title */}
            <div className="flex flex-col gap-1 mb-12">
              <span className="text-xs uppercase tracking-[0.3em] text-primary-yellow font-extrabold">
                WHY CHOOSE US
              </span>
              <h2 className="text-3xl sm:text-5xl font-bebas font-extrabold text-white tracking-wide">
                Our Commitment to Sanitation & The Environment
              </h2>
              <div className="w-16 h-[3px] bg-primary-yellow mt-1" />
            </div>

            {/* Horizontal Strength Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Eco Certified",
                  desc: "Certified by municipal environmental bodies for safe sludge handling.",
                  icon: ShieldCheck
                },
                {
                  title: "24/7 Hotlines",
                  desc: "Emergency dispatch lines for municipal blockages and toxic backup prevention.",
                  icon: Clock
                },
                {
                  title: "Powerful Suction",
                  desc: "Heavy-duty compressors capable of pulling sludge from depths of up to 30 meters.",
                  icon: Zap
                },
                {
                  title: "Hassle-free Clearance",
                  desc: "Minimal site footprint with quiet-operation sanitizing pumps.",
                  icon: CheckCircle
                }
              ].map((strength, idx) => (
                <div 
                  key={idx}
                  className="p-6 bg-white/[0.03] border border-white/5 hover:bg-white/[0.06] hover:border-primary-yellow/30 transition-all duration-300 rounded-sm flex flex-col items-center text-center group"
                >
                  <div className="w-12 h-12 rounded-full bg-primary-yellow/15 flex items-center justify-center text-primary-yellow border border-primary-yellow/20 mb-4 group-hover:bg-primary-yellow group-hover:text-brand-black transition-all duration-300">
                    <strength.icon className="w-5.5 h-5.5" />
                  </div>
                  <h3 className="font-bebas text-xl font-bold text-white tracking-wide mb-2">
                    {strength.title}
                  </h3>
                  <p className="text-white/60 text-[11px] sm:text-xs font-light leading-relaxed">
                    {strength.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>


        {/* ========================================================= */}
        {/* 4. SEWAGE SERVICES GRID (8 Items Paraphrased & Polished)  */}
        {/* ========================================================= */}
        <div className="w-full py-16 sm:py-24 px-4 sm:px-8 bg-white border-t border-brand-black/5">
          <div className="max-w-7xl mx-auto">
            
            {/* Header Titles */}
            <div className="flex flex-col gap-1 mb-12">
              <span className="text-xs uppercase tracking-[0.3em] text-primary-yellow font-extrabold">
                SANITATION SERVICES
              </span>
              <h2 className="text-3xl sm:text-5xl font-bebas font-extrabold text-primary-green tracking-wide">
                Hygienic Sewage & Drainage Solutions
              </h2>
              <div className="w-16 h-[3px] bg-primary-green mt-1" />
            </div>

            {/* 8-Card Responsive Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {sewageOfferings.map((item, idx) => (
                <div 
                  key={idx}
                  className="flex flex-col bg-white border border-brand-black/5 shadow-sm rounded-sm hover:shadow-xl hover:border-primary-green/20 overflow-hidden transition-all duration-500 group"
                >
                  {/* Photo cover container */}
                  <div className="relative w-full h-[180px] sm:h-[200px] overflow-hidden">
                    <div className="absolute inset-0 bg-brand-black/10 group-hover:bg-brand-black/0 transition-colors duration-500 z-10" />
                    
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                    
                    {/* Glowing Accent Tag overlay */}
                    <span className="absolute top-3 left-3 z-20 bg-primary-green/90 text-primary-yellow border border-primary-yellow/20 px-2 py-0.5 rounded-sm text-[9px] uppercase tracking-widest font-bold backdrop-blur-sm">
                      {item.tag}
                    </span>
                  </div>

                  {/* Descriptions block */}
                  <div className="p-5 flex flex-col flex-grow border-t border-brand-black/5 bg-white">
                    <h3 className="font-bebas text-xl sm:text-2xl font-bold text-primary-green tracking-wide group-hover:text-primary-yellow transition-colors leading-tight mb-2">
                      {item.title}
                    </h3>
                    <p className="text-brand-black/75 text-[11px] sm:text-xs font-light leading-relaxed flex-grow">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>


        {/* ========================================================= */}
        {/* 5. PROCESS HOW WE WORK SECTION (Dark Timeline)            */}
        {/* ========================================================= */}
        <div className="w-full bg-gradient-to-b from-brand-black via-[#012422] to-brand-black py-16 sm:py-24 px-4 sm:px-8 border-t border-white/5 text-white">
          <div className="max-w-7xl mx-auto">
            
            {/* Header Titles */}
            <div className="flex flex-col gap-1 mb-12 text-center items-center">
              <span className="text-xs uppercase tracking-[0.3em] text-primary-yellow font-extrabold">
                OUR PROCESS
              </span>
              <h2 className="text-3xl sm:text-5xl font-bebas font-extrabold text-white tracking-wide">
                How We Deliver
              </h2>
              <div className="w-16 h-[3px] bg-primary-yellow mt-1" />
            </div>

            {/* horizontal timeline */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative mt-16">
              
              {/* Desktop connector line */}
              <div className="absolute top-1/2 left-[10%] right-[10%] h-[1px] bg-white/10 z-0 hidden md:block" />

              {[
                { step: "1", name: "Inspection", desc: "Our operators diagnose drainage structures using camera sensors." },
                { step: "2", name: "Quote", desc: "Receive transparent breakdown matching extraction volume." },
                { step: "3", name: "Extraction", desc: "Compressor suction tankers extract sludge and clear main blocks." },
                { step: "4", name: "Eco Disposal", desc: "Extracted wastes safely discharged at certified municipal basins." },
                { step: "5", name: "Hygiene Audit", desc: "Sanitizing, washing, and checking to ensure odor-free completion." }
              ].map((proc, idx) => (
                <div 
                  key={idx}
                  className="flex flex-col items-center text-center relative z-10 group"
                >
                  <div className="w-12 h-12 rounded-full bg-primary-green border-2 border-primary-yellow text-primary-yellow font-bebas text-xl font-bold flex items-center justify-center shadow-lg group-hover:bg-primary-yellow group-hover:text-brand-black transition-all duration-300">
                    {proc.step}
                  </div>
                  <h3 className="font-bebas text-xl font-bold text-white tracking-wide mt-4 mb-2 group-hover:text-primary-yellow transition-colors">
                    {proc.name}
                  </h3>
                  <p className="text-white/60 text-[11px] sm:text-xs font-light leading-relaxed px-4">
                    {proc.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>


        {/* ========================================================= */}
        {/* 6. CALL TO ACTION CONTAINER CARD                          */}
        {/* ========================================================= */}
        <div className="w-full py-16 px-4 sm:px-8 bg-white border-t border-brand-black/5">
          <div className="max-w-4xl mx-auto">
            <div className="relative w-full rounded-2xl bg-gradient-to-r from-primary-green to-[#012422] p-8 sm:p-12 border border-primary-yellow/20 overflow-hidden shadow-2xl flex flex-col md:flex-row justify-between items-center gap-8 group">
              {/* Radial glow background */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,204,0,0.06),transparent_60%)] pointer-events-none" />

              <div className="flex flex-col gap-2 max-w-xl text-center md:text-left text-white">
                <h3 className="font-bebas text-3xl sm:text-4xl font-extrabold tracking-wide leading-none">
                  Need Emergency Sewage Services?
                </h3>
                <p className="text-white/70 text-xs sm:text-sm font-light leading-relaxed">
                  Get in touch with our emergency dispatch team for prompt septic well extraction and drainage clearing.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 shrink-0">
                <a 
                  href="#contact"
                  className="px-6 py-3.5 bg-primary-yellow hover:bg-white text-brand-black font-semibold text-xs font-bold uppercase tracking-widest rounded-sm transition-all duration-300 flex items-center justify-center gap-1.5 shadow-lg shadow-primary-yellow/20"
                >
                  Get A Quote
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a 
                  href="https://wa.me/966510969975"
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3.5 bg-brand-black/60 hover:bg-brand-black border border-white/10 hover:border-primary-yellow text-white text-xs font-bold uppercase tracking-widest rounded-sm transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 text-primary-yellow" />
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>

      </main>

      <Footer />
    </>
  );
}
