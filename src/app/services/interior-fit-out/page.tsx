import { Metadata } from "next";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  ShieldCheck, 
  Clock, 
  DollarSign,
  ArrowRight,
  Wrench,
  MessageSquare,
  Sparkles,
  Layers,
  Building2,
  Paintbrush,
  CheckCircle2,
  Compass
} from "lucide-react";

export const metadata: Metadata = {
  title: "Interior Fit-Out Services | NAEL Establishment",
  description: "Turnkey interior fit-out and architectural finishing services in Al Jubail and Eastern Province, KSA. Corporate office spaces, commercial retail, industrial control rooms, acoustic partitions, gypsum ceilings, and MEP integration.",
};

export default function InteriorFitOutPage() {

  const fitOutOfferings = [
    {
      title: "Corporate Office Fit-Out",
      desc: "Turnkey workspace transformations featuring ergonomic layouts, executive boardrooms, collaborative zones, and turnkey modern interior environments.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop",
      tag: "Corporate Spaces"
    },
    {
      title: "Glass & Gypsum Partitions",
      desc: "Acoustic-rated single and double-glazed demountable glass systems, drywall gypsum framing, and modular partition walls for flexible space division.",
      // Modern office interior with glass partition walls & dividers
      image: "https://images.pexels.com/photos/5483051/pexels-photo-5483051.jpeg?auto=compress&cs=tinysrgb&w=800",
      tag: "Wall Systems"
    },
    {
      title: "Ceilings & Architectural Lighting",
      desc: "Decorative suspended gypsum ceilings, acoustic baffle ceilings, linear LED lighting integrations, and architectural ambient illuminations.",
      // Tiered modern architectural ceiling with recessed linear lighting fixtures
      image: "https://images.unsplash.com/photo-1639906234280-1abc80357228?q=80&w=800&auto=format&fit=crop",
      tag: "Ceiling & Light"
    },
    {
      title: "Flooring & Raised Access Systems",
      desc: "Raised access flooring for data/power cabling distribution, epoxy coatings, luxury vinyl tiles (LVT), heavy-duty commercial carpets, and porcelain tiles.",
      // Flooring installation & laminate/parquet craftsmanship
      image: "https://images.pexels.com/photos/4263067/pexels-photo-4263067.jpeg?auto=compress&cs=tinysrgb&w=800",
      tag: "Flooring Solutions"
    },
    {
      title: "Commercial & Retail Spaces",
      desc: "Bespoke interior fit-outs for retail storefronts, customer reception galleries, dining halls, and hospitality environments designed to impress.",
      // Modern luxury boutique & commercial retail interior
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop",
      tag: "Retail & Commercial"
    },
    {
      title: "Industrial Control Rooms & Cabins",
      desc: "Heavy-duty specialized interior finishing for petrochemical control centers, operator cabins, electrical substations, and server cleanrooms.",
      // Technical control facility room & network server racks
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop",
      tag: "Industrial Facilities"
    },
    {
      title: "Custom Joinery & Millwork",
      desc: "Precision fabrication of custom reception counters, wall paneling, conference tables, storage units, and architectural woodwork.",
      // Luxury custom architectural wooden reception front desk
      image: "https://images.pexels.com/photos/4099354/pexels-photo-4099354.jpeg?auto=compress&cs=tinysrgb&w=800",
      tag: "Custom Woodwork"
    },
    {
      title: "Integrated MEP & HVAC Fit-Out",
      desc: "Full coordination of concealed HVAC ducting, power distributions, voice/data infrastructure, fire alarms, and emergency suppression systems.",
      // Industrial interior ceiling air ducts & HVAC mechanical systems
      image: "https://images.pexels.com/photos/2464420/pexels-photo-2464420.jpeg?auto=compress&cs=tinysrgb&w=800",
      tag: "MEP Coordination"
    }
  ];

  return (
    <>
      <Loader />
      <Navbar />

      <main className="flex-grow pt-[120px] bg-white select-none">

        {/* ========================================================= */}
        {/* 1. CINEMATIC HERO HEADER                                   */}
        {/* ========================================================= */}
        <div className="relative w-full h-[320px] sm:h-[400px] bg-brand-black overflow-hidden flex items-center">
          {/* Background image */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop"
              alt="Interior Fit-Out Services"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-brand-black/65 z-10" />
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
            
            {/* Left Texts & Breadcrumbs */}
            <div className="flex flex-col gap-2 max-w-2xl">
              <div className="flex items-center gap-2 text-white/50 text-[9px] sm:text-xs uppercase tracking-widest font-bold mb-1">
                <span>Home</span>
                <span className="text-white/30">&gt;</span>
                <span>Services</span>
                <span className="text-white/30">&gt;</span>
                <span className="text-primary-yellow">Interior Fit-Out</span>
              </div>
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.35em] text-primary-yellow font-extrabold">
                SPECIALIZED IN
              </span>
              <h1 className="text-3xl sm:text-6xl font-bebas font-extrabold text-white tracking-wider leading-none">
                INTERIOR <span className="text-primary-yellow">FIT-OUT</span> SERVICES
              </h1>
              <p className="text-white/80 text-[11px] sm:text-sm font-light leading-relaxed mt-2 max-w-lg">
                Delivering complete turnkey interior fit-out, architectural joinery, and MEP finishing for corporate offices, commercial centers, and industrial facilities across Saudi Arabia.
              </p>
              
              {/* Feature Badges */}
              <div className="flex flex-wrap gap-3 mt-4 text-[9px] uppercase tracking-wider font-semibold text-white/95">
                <span className="bg-primary-green/45 border border-primary-yellow/20 px-3 py-1 rounded-sm flex items-center gap-1.5 backdrop-blur-sm">
                  <ShieldCheck className="w-3.5 h-3.5 text-primary-yellow" /> Civil Defense Compliant
                </span>
                <span className="bg-primary-green/45 border border-primary-yellow/20 px-3 py-1 rounded-sm flex items-center gap-1.5 backdrop-blur-sm">
                  <Sparkles className="w-3.5 h-3.5 text-primary-yellow" /> Premium Craftsmanship
                </span>
                <span className="bg-primary-green/45 border border-primary-yellow/20 px-3 py-1 rounded-sm flex items-center gap-1.5 backdrop-blur-sm">
                  <Clock className="w-3.5 h-3.5 text-primary-yellow" /> Turnkey Delivery
                </span>
              </div>
            </div>

          </div>
        </div>


        {/* ========================================================= */}
        {/* 2. OVERVIEW SECTION                                        */}
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
                    Refined Spaces. <br />
                    <span className="text-brand-black">Engineered for Performance.</span>
                  </h2>
                  <div className="w-16 h-[3px] bg-primary-green mt-1" />
                </div>

                <p className="text-brand-black/80 text-xs sm:text-sm font-light leading-relaxed">
                  Lamiya Al Khaleej Al Ittihad Establishment (NAEL) provides premier interior fit-out solutions, combining engineering precision with refined architectural craftsmanship. We transform empty shell-and-core spaces into fully functional, aesthetically compelling environments.
                </p>

                <p className="text-brand-black/65 text-xs sm:text-sm font-light leading-relaxed">
                  Whether catering to corporate headquarters, industrial facility control centers, modular site cabins, or commercial venues in Al Jubail and the Eastern Province, our integrated civil works and MEP capabilities ensure seamless execution from initial concept to final client handover.
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
                    title: "Turnkey Project Execution",
                    desc: "End-to-end scope management covering structural drywall, glass partitions, flooring, ceiling, custom millwork, and final commissioning.",
                    icon: Building2
                  },
                  {
                    title: "Acoustic & Fire-Rated Standards",
                    desc: "High-spec fire-resistant partitions, soundproof boardroom glass, and Civil Defense-approved materials for maximum occupant safety.",
                    icon: ShieldCheck
                  },
                  {
                    title: "Integrated MEP & Civil Works",
                    desc: "Seamless synchronization of electrical infrastructure, HVAC ductwork, data connectivity, plumbing, and structural modifications.",
                    icon: Layers
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
        {/* 3. WHY CHOOSE US SECTION (Dark Backdrop)                   */}
        {/* ========================================================= */}
        <div className="w-full bg-[#012422] py-16 sm:py-24 px-4 sm:px-8 border-t border-white/5 text-white">
          <div className="max-w-7xl mx-auto">
            
            {/* Header Title */}
            <div className="flex flex-col gap-1 mb-12">
              <span className="text-xs uppercase tracking-[0.3em] text-primary-yellow font-extrabold">
                WHY CHOOSE US
              </span>
              <h2 className="text-3xl sm:text-5xl font-bebas font-extrabold text-white tracking-wide">
                Our Commitment to Fit-Out Excellence
              </h2>
              <div className="w-16 h-[3px] bg-primary-yellow mt-1" />
            </div>

            {/* Strength Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Architectural Precision",
                  desc: "Detailed space planning, shop drawing coordination, and millimeter-accurate fabrication for bespoke finishes.",
                  icon: Compass
                },
                {
                  title: "Turnkey Accountability",
                  desc: "Single-point project management eliminating contractor gaps between civil, joinery, and MEP trades.",
                  icon: CheckCircle2
                },
                {
                  title: "Cost & Time Efficiency",
                  desc: "Rigorous milestone scheduling and transparent procurement ensuring projects deliver on-time and within budget.",
                  icon: DollarSign
                },
                {
                  title: "Strict Safety & Compliance",
                  desc: "Fully aligned with Aramco, SABIC, and Saudi building code standards for materials and site safety protocols.",
                  icon: ShieldCheck
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
        {/* 4. FIT-OUT SCOPES GRID                                     */}
        {/* ========================================================= */}
        <div className="w-full py-16 sm:py-24 px-4 sm:px-8 bg-white border-t border-brand-black/5">
          <div className="max-w-7xl mx-auto">
            
            {/* Header Titles */}
            <div className="flex flex-col gap-1 mb-12">
              <span className="text-xs uppercase tracking-[0.3em] text-primary-yellow font-extrabold">
                OUR SCOPE
              </span>
              <h2 className="text-3xl sm:text-5xl font-bebas font-extrabold text-primary-green tracking-wide">
                Comprehensive Interior Fit-Out Solutions
              </h2>
              <div className="w-16 h-[3px] bg-primary-green mt-1" />
            </div>

            {/* Scope Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {fitOutOfferings.map((item, idx) => (
                <div 
                  key={idx}
                  className="flex flex-col bg-white border border-brand-black/5 shadow-sm rounded-sm hover:shadow-xl hover:border-primary-green/20 overflow-hidden transition-all duration-500 group"
                >
                  {/* Photo cover */}
                  <div className="relative w-full h-[180px] sm:h-[200px] overflow-hidden">
                    <div className="absolute inset-0 bg-brand-black/10 group-hover:bg-brand-black/0 transition-colors duration-500 z-10" />
                    
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                    
                    {/* Tag overlay */}
                    <span className="absolute top-3 left-3 z-20 bg-primary-green/90 text-primary-yellow border border-primary-yellow/20 px-2 py-0.5 rounded-sm text-[9px] uppercase tracking-widest font-bold backdrop-blur-sm">
                      {item.tag}
                    </span>
                  </div>

                  {/* Description block */}
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
        {/* 5. PROCESS TIMELINE                                        */}
        {/* ========================================================= */}
        <div className="w-full bg-gradient-to-b from-brand-black via-[#012422] to-brand-black py-16 sm:py-24 px-4 sm:px-8 border-t border-white/5 text-white">
          <div className="max-w-7xl mx-auto">
            
            {/* Header */}
            <div className="flex flex-col gap-1 mb-12 text-center items-center">
              <span className="text-xs uppercase tracking-[0.3em] text-primary-yellow font-extrabold">
                OUR METHODOLOGY
              </span>
              <h2 className="text-3xl sm:text-5xl font-bebas font-extrabold text-white tracking-wide">
                How We Deliver Fit-Out Projects
              </h2>
              <div className="w-16 h-[3px] bg-primary-yellow mt-1" />
            </div>

            {/* Process Timeline */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative mt-16">
              
              {/* Desktop connector line */}
              <div className="absolute top-1/2 left-[10%] right-[10%] h-[1px] bg-white/10 z-0 hidden md:block" />

              {[
                { step: "1", name: "Survey & Concept", desc: "Detailed site survey, functional space layout, and technical specification analysis." },
                { step: "2", name: "Approvals & Design", desc: "Shop drawing preparation, material sample boards, and Civil Defense/authority approvals." },
                { step: "3", name: "First-Fix & Partitions", desc: "Installation of drywall framing, glass profiles, MEP conduit distribution, and ductwork." },
                { step: "4", name: "Finishing & Joinery", desc: "Ceiling installation, raised flooring, millwork placement, painting, and architectural lighting." },
                { step: "5", name: "Testing & Handover", desc: "Full MEP testing, snag rectifications, deep clean, and flawless turnkey client handover." }
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
        {/* 6. CALL TO ACTION                                          */}
        {/* ========================================================= */}
        <div className="w-full py-16 px-4 sm:px-8 bg-white border-t border-brand-black/5">
          <div className="max-w-4xl mx-auto">
            <div className="relative w-full rounded-2xl bg-gradient-to-r from-primary-green to-[#012422] p-8 sm:p-12 border border-primary-yellow/20 overflow-hidden shadow-2xl flex flex-col md:flex-row justify-between items-center gap-8 group">
              {/* Radial glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,204,0,0.06),transparent_60%)] pointer-events-none" />

              <div className="flex flex-col gap-2 max-w-xl text-center md:text-left text-white">
                <h3 className="font-bebas text-3xl sm:text-4xl font-extrabold tracking-wide leading-none">
                  Planning an Interior Fit-Out Project?
                </h3>
                <p className="text-white/70 text-xs sm:text-sm font-light leading-relaxed">
                  Partner with NAEL for turnkey interior fit-out and architectural execution tailored to commercial, industrial, and executive spaces in Saudi Arabia.
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

