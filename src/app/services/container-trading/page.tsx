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
  HelpCircle
} from "lucide-react";

export const metadata: Metadata = {
  title: "Specialized in Container Trading | NAEL Establishment",
  description: "Explore NAEL's industry-leading container trading solutions in Saudi Arabia. We sell, lease, customize, transport, and repair dry cargo, reefer, ISO tank, and modular toilet containers.",
};

export default function ContainerTradingPage() {
  
  // The 8 custom container service offerings beautifully paraphrased as requested
  const containerOfferings = [
    {
      title: "Dry Cargo Containers",
      desc: "Secure, weather-sealed dry storage containers engineered with high-tensile steel walls. Designed to keep general cargo moisture-free and safe from harsh environmental exposure.",
      image: "/naelksa/dry_cargo.png",
      tag: "Storage & Cargo"
    },
    {
      title: "Refrigerated Reefers",
      desc: "State-of-the-art temperature-controlled reefer units featuring advanced cold-chain automation. Crucial for the safe, reliable, and uniform transport of agricultural and pharmaceutical items.",
      image: "/naelksa/refrigerated_reefer.png",
      tag: "Cold Chain Logistics"
    },
    {
      title: "ISO Tank Containers",
      desc: "Heavy-duty cylindrical ISO tanks enclosed in rigid structural frames. Optimized for bulk transport of liquid chemicals, fuels, and edible liquids meeting supreme global safety norms.",
      image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=800&auto=format&fit=crop",
      tag: "Bulk Liquid Cargo"
    },
    {
      title: "Modular Toilet Containers",
      desc: "Portable, sanitizable, and fully plumbed restroom containers equipped with premium fittings. Purpose-built to support field team hygiene on active construction sites and events.",
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=800&auto=format&fit=crop",
      tag: "On-Site Sanitary"
    },
    {
      title: "Container Purchasing & Sales",
      desc: "Purchase certified new and pre-owned shipping cargo units in standard 20ft and 40ft dimensions. Complete with authentic CSC certificate compliance and instant ownership clearances.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop",
      tag: "Buy Container"
    },
    {
      title: "Flexible Container Leasing",
      desc: "Cost-effective leasing contracts tailored for temporary storage, logistics overflows, and on-site tool shelters. Benefit from flexible rental terms and quick site delivery options.",
      image: "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?q=80&w=800&auto=format&fit=crop",
      tag: "Leasing & Rentals"
    },
    {
      title: "Logistics & Flatbed Haulage",
      desc: "Safe, efficient transport of containers to any site or port terminal across KSA. Handled by veteran operators using specialized flatbed heavy-duty haulers with real-time tracking.",
      image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=800&auto=format&fit=crop",
      tag: "Safe Transport"
    },
    {
      title: "Maintenance & Repairs",
      desc: "Certified welding, structural panel patches, lock rod replacements, and gasket seals. Restores weathered or dented containers to original high-integrity cargo-worthy standards.",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop",
      tag: "Repair Services"
    }
  ];

  return (
    <>
      <Loader />
      <Navbar />

      <main className="flex-grow pt-[120px] bg-white select-none">

        {/* ========================================================= */}
        {/* 1. CINEMATIC HERO HEADER WITH LOGO OVERLAY                */}
        {/* ========================================================= */}
        <div className="relative w-full h-[320px] sm:h-[400px] bg-brand-black overflow-hidden flex items-center">
          {/* Background stacking cargo yard */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1200&auto=format&fit=crop"
              alt="Cargo Stacking Yard"
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
                <span className="text-primary-yellow">Container Trading</span>
              </div>
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.35em] text-primary-yellow font-extrabold">
                SPECIALIZED IN
              </span>
              <h1 className="text-3xl sm:text-6xl font-bebas font-extrabold text-white tracking-wider leading-none">
                CONTAINER <span className="text-primary-yellow">TRADING</span>
              </h1>
              <p className="text-white/80 text-[11px] sm:text-sm font-light leading-relaxed mt-2 max-w-lg">
                We provide high-quality shipping containers for sale and rental, sourced from trusted suppliers globally.
              </p>
              
              {/* Features Badges list */}
              <div className="flex flex-wrap gap-3 mt-4 text-[9px] uppercase tracking-wider font-semibold text-white/95">
                <span className="bg-primary-green/45 border border-primary-yellow/20 px-3 py-1 rounded-sm flex items-center gap-1.5 backdrop-blur-sm">
                  <ShieldCheck className="w-3.5 h-3.5 text-primary-yellow" /> Premium Quality
                </span>
                <span className="bg-primary-green/45 border border-primary-yellow/20 px-3 py-1 rounded-sm flex items-center gap-1.5 backdrop-blur-sm">
                  <Globe className="w-3.5 h-3.5 text-primary-yellow" /> Global Sourcing
                </span>
                <span className="bg-primary-green/45 border border-primary-yellow/20 px-3 py-1 rounded-sm flex items-center gap-1.5 backdrop-blur-sm">
                  <DollarSign className="w-3.5 h-3.5 text-primary-yellow" /> Competitive Pricing
                </span>
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
                    Reliable Containers. <br />
                    <span className="text-brand-black">Global Standards.</span>
                  </h2>
                  <div className="w-16 h-[3px] bg-primary-green mt-1" />
                </div>

                <p className="text-brand-black/80 text-xs sm:text-sm font-light leading-relaxed">
                  We specialize in the trading of new and used shipping containers for various applications. Whether you need containers for transportation, storage, or custom modifications, we have the perfect solution for your needs.
                </p>

                <p className="text-brand-black/65 text-xs sm:text-sm font-light leading-relaxed">
                  Our containers are built to international standards, ensuring durability, security, and long-term value.
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
                    title: "New Containers",
                    desc: "Brand new containers in various sizes with CSC certification.",
                    icon: Package
                  },
                  {
                    title: "Used Containers",
                    desc: "High-quality used containers inspected and ready for global use.",
                    icon: Layers
                  },
                  {
                    title: "Custom Containers",
                    desc: "Customized containers for offices, storage, workshops and more.",
                    icon: Wrench
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
                Our Commitment to Quality & Service
              </h2>
              <div className="w-16 h-[3px] bg-primary-yellow mt-1" />
            </div>

            {/* Horizontal Strength Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Quality Assured",
                  desc: "All containers are inspected and certified for your peace of mind.",
                  icon: ShieldCheck
                },
                {
                  title: "Global Network",
                  desc: "Strong network with leading suppliers across the world.",
                  icon: Globe
                },
                {
                  title: "Competitive Price",
                  desc: "Best market prices with transparent and fair deals.",
                  icon: DollarSign
                },
                {
                  title: "Timely Delivery",
                  desc: "Fast and reliable delivery anywhere in Saudi Arabia and worldwide.",
                  icon: Clock
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
        {/* 4. CONTAINER TYPES GRID (8 Items Paraphrased & Polished)  */}
        {/* ========================================================= */}
        <div className="w-full py-16 sm:py-24 px-4 sm:px-8 bg-white border-t border-brand-black/5">
          <div className="max-w-7xl mx-auto">
            
            {/* Header Titles */}
            <div className="flex flex-col gap-1 mb-12">
              <span className="text-xs uppercase tracking-[0.3em] text-primary-yellow font-extrabold">
                CONTAINER TYPES
              </span>
              <h2 className="text-3xl sm:text-5xl font-bebas font-extrabold text-primary-green tracking-wide">
                Containers for Every Business Need
              </h2>
              <div className="w-16 h-[3px] bg-primary-green mt-1" />
            </div>

            {/* 8-Card Responsive Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {containerOfferings.map((item, idx) => (
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
                How We Work
              </h2>
              <div className="w-16 h-[3px] bg-primary-yellow mt-1" />
            </div>

            {/* horizontal timeline */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative mt-16">
              
              {/* Desktop connector line */}
              <div className="absolute top-1/2 left-[10%] right-[10%] h-[1px] bg-white/10 z-0 hidden md:block" />

              {[
                { step: "1", name: "Requirement", desc: "We understand your needs and recommend the best solution." },
                { step: "2", name: "Quote", desc: "Receive a competitive and transparent quotation." },
                { step: "3", name: "Confirmation", desc: "Order confirmation and secure your booking." },
                { step: "4", name: "Delivery", desc: "We deliver your container safely and on time." },
                { step: "5", name: "Support", desc: "Dedicated after-sales support for all your requirements." }
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
                  Looking for Quality Containers?
                </h3>
                <p className="text-white/70 text-xs sm:text-sm font-light leading-relaxed">
                  Get in touch with us today for the best container trading solutions at competitive prices.
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
