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
  CheckCircle
} from "lucide-react";

export const metadata: Metadata = {
  title: "Sweet Water Delivery | NAEL Establishment",
  description: "Certified clean potable and industrial sweet water delivery across Al Jubail, KSA. Managed by our advanced Mercedes tanker fleet in 10,000L, 19,000L, and 32,000L capacities.",
};

export default function SweetWaterPage() {
  
  // The 6 custom water delivery offerings beautifully paraphrased
  const waterOfferings = [
    {
      id: 1,
      title: "Batching Plant Operations",
      desc: "Highly consistent and clean sweet water supply for concrete batching plants, guaranteeing correct mixing properties and standard structural curing.",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=800&auto=format&fit=crop",
      tag: "Concrete Works"
    },
    {
      id: 2,
      title: "Potable Drinking Reserves",
      desc: "Fully certified potable water resources delivered to temporary labor camps, administrative blocks, and commercial residential tanks.",
      image: "https://images.unsplash.com/photo-1508962914676-134849a727f0?q=80&w=800&auto=format&fit=crop",
      tag: "Potable Reserves"
    },
    {
      id: 3,
      title: "Civil Site Work Supply",
      desc: "Bulk water tankers supporting high-volume civil tasks, including deep soil compaction, site clearing, and active dust control sprays for environment safety.",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop",
      tag: "Civil Works"
    },
    {
      id: 4,
      title: "Rig & Offshore Resources",
      desc: "Continuous pipeline or tank refilling operations to keep deep desert drill rigs, remote sites, and marine hubs operating under optimal fluid levels.",
      image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?q=80&w=800&auto=format&fit=crop",
      tag: "Industrial Rig"
    },
    {
      id: 5,
      title: "Multi-Size Tanker Fleet",
      desc: "Choose from our dynamic capacity sizes: 10,000L, 19,000L, and 32,000L tankers, matching the specific spatial and volume constraints of your sites.",
      image: "/naelksa/sweet_water_tanker.jpg",
      tag: "Mercedes Tanker",
      customCrop: true // Will apply bottom watermark crop CSS cleanly
    },
    {
      id: 6,
      title: "24/7 Fire & Safety Standby",
      desc: "Critical emergency standby water resources deployed on-site to assist high-risk hot works, steel works, and safety compliance checks.",
      image: "https://images.unsplash.com/photo-1590486803833-ffc6f68e82f2?q=80&w=800&auto=format&fit=crop",
      tag: "Fire & Safety"
    }
  ];

  return (
    <>
      <Loader />
      <Navbar />

      <main className="flex-grow pt-[120px] bg-white select-none">

        {/* ========================================================= */}
        {/* 1. CINEMATIC HERO HEADER WITH Mercedes Tanker Overlay     */}
        {/* ========================================================= */}
        <div className="relative w-full h-[320px] sm:h-[400px] bg-brand-black overflow-hidden flex items-center">
          {/* Background twilight fresh water liquid */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1508962914676-134849a727f0?q=80&w=1200&auto=format&fit=crop"
              alt="Hygienic Water Resource"
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
                <span className="text-primary-yellow">Sweet Water Delivery</span>
              </div>
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.35em] text-primary-yellow font-extrabold">
                SPECIALIZED IN
              </span>
              <h1 className="text-3xl sm:text-6xl font-bebas font-extrabold text-white tracking-wider leading-none">
                SWEET WATER <span className="text-primary-yellow">SUPPLY</span>
              </h1>
              <p className="text-white/80 text-[11px] sm:text-sm font-light leading-relaxed mt-2 max-w-lg">
                Providing certified, clean, and highly hygienic sweet water delivery for industrial sites, construction projects, and commercial hubs across Al Jubail.
              </p>
              
              {/* Features Badges list */}
              <div className="flex flex-wrap gap-3 mt-4 text-[9px] uppercase tracking-wider font-semibold text-white/95">
                <span className="bg-primary-green/45 border border-primary-yellow/20 px-3 py-1 rounded-sm flex items-center gap-1.5 backdrop-blur-sm">
                  <ShieldCheck className="w-3.5 h-3.5 text-primary-yellow" /> 100% Certified Clean
                </span>
                <span className="bg-primary-green/45 border border-primary-yellow/20 px-3 py-1 rounded-sm flex items-center gap-1.5 backdrop-blur-sm">
                  <Globe className="w-3.5 h-3.5 text-primary-yellow" /> Rapid Fleet Deploy
                </span>
                <span className="bg-primary-green/45 border border-primary-yellow/20 px-3 py-1 rounded-sm flex items-center gap-1.5 backdrop-blur-sm">
                  <Droplet className="w-3.5 h-3.5 text-primary-yellow" /> Strict Quality Controls
                </span>
              </div>
            </div>

            {/* Right Emblem Mercedes Tanker Card (Slanted layout with NAEL logo and bottom watermark cropped) */}
            <div className="flex justify-center lg:justify-end items-center lg:mr-12">
              <div 
                className="relative w-48 h-32 sm:w-64 sm:h-44 border-2 border-primary-yellow bg-[#0b0b0b] rounded-md overflow-hidden shadow-2xl flex items-center justify-center cursor-pointer group"
                style={{
                  clipPath: "polygon(10% 0, 100% 0, 90% 100%, 0 100%)"
                }}
              >
                {/* Underlay Mercedes tanker image with bottom 12% cropped via CSS to remove watermark */}
                <img 
                  src="/naelksa/sweet_water_tanker.jpg" 
                  alt="Mercedes Blue Water Tanker"
                  className="absolute top-0 w-full h-[112%] object-cover object-top group-hover:scale-105 transition-transform duration-700 opacity-90"
                />
                {/* Green/teal overlay tint */}
                <div className="absolute inset-0 bg-[#02534D]/25 group-hover:bg-[#02534D]/15 transition-colors z-10" />

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
                    Clean Water Resources. <br />
                    <span className="text-brand-black">Unmatched Reliability.</span>
                  </h2>
                  <div className="w-16 h-[3px] bg-primary-green mt-1" />
                </div>

                <p className="text-brand-black/80 text-xs sm:text-sm font-light leading-relaxed">
                  We supply pristine sweet water sourced from premium certified desalination centers, ensuring perfect chemical compliance for both drinking requirements and heavy industrial applications.
                </p>

                <p className="text-brand-black/65 text-xs sm:text-sm font-light leading-relaxed">
                  With a state-of-the-art fleet of sanitizable tankers operated by certified crews, we guarantee rapid delivery schedules with zero downtime, even for the most remote desert construction zones.
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
                    title: "Industrial Supply",
                    desc: "Bulk sweet water delivery tailored for concrete batching, site works, and soil compaction.",
                    icon: Truck
                  },
                  {
                    title: "Drinking Reserves",
                    desc: "Certified potable water supply to support labor accommodations and office reservoirs.",
                    icon: Droplet
                  },
                  {
                    title: "Emergency Dispatch",
                    desc: "24/7 rapid standby response for fire-fighting water resources and logistics emergencies.",
                    icon: ShieldCheck
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
                Our Commitment to Hygiene & Reliability
              </h2>
              <div className="w-16 h-[3px] bg-primary-yellow mt-1" />
            </div>

            {/* Horizontal Strength Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Hygienic Tanks",
                  desc: "Every tanker is routinely sanitized and verified for absolute cleanliness.",
                  icon: ShieldCheck
                },
                {
                  title: "24/7 Availability",
                  desc: "On-demand dispatch cycles operating round-the-clock for site stability.",
                  icon: Clock
                },
                {
                  title: "Hassle-free Flow",
                  desc: "Equipped with high-performance pumps and extended hoses for deep site reach.",
                  icon: Droplet
                },
                {
                  title: "Saudi Compliance",
                  desc: "Strict adherence to municipal health standards and SASO guidelines.",
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
        {/* 4. WATER SERVICES GRID (6 Items Paraphrased & Polished)   */}
        {/* ========================================================= */}
        <div className="w-full py-16 sm:py-24 px-4 sm:px-8 bg-white border-t border-brand-black/5">
          <div className="max-w-7xl mx-auto">
            
            {/* Header Titles */}
            <div className="flex flex-col gap-1 mb-12">
              <span className="text-xs uppercase tracking-[0.3em] text-primary-yellow font-extrabold">
                WATER SERVICES
              </span>
              <h2 className="text-3xl sm:text-5xl font-bebas font-extrabold text-primary-green tracking-wide">
                Certified Water Resources for Every Need
              </h2>
              <div className="w-16 h-[3px] bg-primary-green mt-1" />
            </div>

            {/* 6-Card Responsive Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {waterOfferings.map((item, idx) => (
                <div 
                  key={idx}
                  className="flex flex-col bg-white border border-brand-black/5 shadow-sm rounded-sm hover:shadow-xl hover:border-primary-green/20 overflow-hidden transition-all duration-500 group"
                >
                  {/* Photo cover container */}
                  <div className="relative w-full h-[200px] overflow-hidden">
                    <div className="absolute inset-0 bg-brand-black/10 group-hover:bg-brand-black/0 transition-colors duration-500 z-10" />
                    
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className={`w-full transition-transform duration-700 ease-out group-hover:scale-105 ${
                        item.customCrop 
                          ? "h-[112%] object-cover object-top" 
                          : "h-full object-cover"
                      }`}
                      loading="lazy"
                    />
                    
                    {/* Glowing Accent Tag overlay */}
                    <span className="absolute top-3 left-3 z-20 bg-primary-green/90 text-primary-yellow border border-primary-yellow/20 px-2 py-0.5 rounded-sm text-[9px] uppercase tracking-widest font-bold backdrop-blur-sm">
                      {item.tag}
                    </span>
                  </div>

                  {/* Descriptions block */}
                  <div className="p-6 flex flex-col flex-grow border-t border-brand-black/5 bg-white">
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
                { step: "1", name: "Inquire", desc: "Share your daily volume requirements and schedule preferences." },
                { step: "2", name: "Quote", desc: "Receive custom transparent pricing based on fleet specs." },
                { step: "3", name: "Scheduling", desc: "Confirm recurring dispatch calendars and site locations." },
                { step: "4", name: "Transport", desc: "Sanitized tankers load from certified stations and deliver." },
                { step: "5", name: "Verification", desc: "Delivery ticket validation and water quality verification." }
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
                  Looking for Clean Water Resources?
                </h3>
                <p className="text-white/70 text-xs sm:text-sm font-light leading-relaxed">
                  Get in touch with us today for certified potable water resources at competitive delivery rates.
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
