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
  Truck,
  Bus,
  Users,
  Package,
  Fuel,
  Zap
} from "lucide-react";

export const metadata: Metadata = {
  title: "Coaster, Bus & Transportation Equipment Rental | NAEL Establishment",
  description: "Dependable transportation equipment rental in Al Jubail and Eastern Province, KSA. Coasters, buses, flatbed trailers, pickup trucks, tipper trucks, water tankers, fuel tankers, forklifts, and heavy-duty transport vehicles for construction, civil works, and logistics operations.",
};

export default function TransportationEquipmentRentalPage() {

  const transportationOfferings = [
    {
      title: "Coasters & Buses",
      desc: "Comfortable and well-maintained coasters and buses for crew transportation, personnel shuttles, and workforce logistics across industrial and construction project sites.",
      // White minibus / coaster — crew passenger transport
      image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=800&auto=format&fit=crop",
      tag: "Passenger Transport"
    },
    {
      title: "Flatbed Trailers",
      desc: "Heavy-duty flatbed trailers for transporting oversized equipment, structural steel, and large cargo across long-distance and short-haul logistics requirements.",
      // Flatbed semi truck on open road
      image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=800&auto=format&fit=crop",
      tag: "Heavy Haulage"
    },
    {
      title: "Pickup Trucks",
      desc: "Reliable 4WD and standard pickup trucks for site supervisors, material delivery, and day-to-day logistics support across project sites and industrial zones.",
      // 4WD pickup truck in desert/site terrain
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop",
      tag: "Light Transport"
    },
    {
      title: "Cargo Vehicles",
      desc: "Enclosed and open cargo vehicles for efficient movement of materials, tools, spare parts, and project supplies to and from active construction and industrial sites.",
      // Cargo/box truck for deliveries
      image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=800&auto=format&fit=crop",
      tag: "Cargo Logistics"
    },
    {
      title: "Tipper Trucks",
      desc: "High-capacity tipper trucks for bulk aggregate, sand, soil, and demolition waste removal, ensuring fast and efficient material handling on all project types.",
      // Local project dump/tipper truck image
      image: "/naelksa/haulage_dump_trucks.png",
      tag: "Bulk Material"
    },
    {
      title: "Water Tankers",
      desc: "Stainless and carbon steel water tankers for dust suppression, site water supply, irrigation, and construction water delivery requirements across project sites.",
      // Local sweet water tanker image
      image: "/naelksa/Services/Sweet.webp",
      tag: "Water Supply"
    },
    {
      title: "Fuel Tankers",
      desc: "Certified fuel tankers for safe and compliant on-site fuel delivery, refuelling of heavy equipment fleets, and bulk diesel supply to remote work locations.",
      // Verified: tanker truck on highway transporting fuel — Pexels #36228061
      image: "https://images.pexels.com/photos/36228061/pexels-photo-36228061.jpeg?auto=compress&cs=tinysrgb&w=800",
      tag: "Fuel Logistics"
    },
    {
      title: "Forklifts & Material Handling",
      desc: "Industrial forklifts and specialized material handling vehicles for warehouse operations, container loading, pallet movement, and on-site logistics management.",
      // Forklift in warehouse with pallets
      image: "https://images.unsplash.com/photo-1586528116493-a029325540fa?q=80&w=800&auto=format&fit=crop",
      tag: "Material Handling"
    },
    {
      title: "Heavy-Duty Transport Vehicles",
      desc: "Purpose-built heavy transport vehicles and lowboy trailers for moving machinery, precast units, industrial modules, and oversized loads safely and efficiently.",
      // Verified: semi-trucks driving on highway — Pexels #2199293
      image: "https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=800",
      tag: "Heavy Transport"
    },
    {
      title: "Equipment Shifting & Delivery",
      desc: "Dedicated equipment shifting and delivery vehicles for seamless relocation of construction machinery, modular structures, and industrial assets between project sites.",
      // Wheel loader being delivered — local project image
      image: "/naelksa/wheel_loaders.png",
      tag: "Equipment Shifting"
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
              src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1200&auto=format&fit=crop"
              alt="Transportation Equipment"
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

            {/* Left Texts & Breadcrumbs */}
            <div className="flex flex-col gap-2 max-w-2xl">
              <div className="flex items-center gap-2 text-white/50 text-[9px] sm:text-xs uppercase tracking-widest  mb-1">
                <span>Home</span>
                <span className="text-white/30">&gt;</span>
                <span>Services</span>
                <span className="text-white/30">&gt;</span>
                <span className="text-primary-yellow">Transportation Equipment Rental</span>
              </div>
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.35em] text-primary-yellow ">
                SPECIALIZED IN
              </span>
              <h1 className="text-3xl sm:text-6xl font-bebas  text-white tracking-wider leading-none">
                COASTER, BUS &amp; <span className="text-primary-yellow">TRANSPORTATION</span> EQUIPMENT RENTAL
              </h1>
              <p className="text-white/80 text-[11px] sm:text-sm font-light leading-relaxed mt-2 max-w-lg">
                Dependable transportation equipment rental services for construction, industrial, commercial, interior fit-out, civil works, and logistics operations — with a fleet maintained for safety, efficiency, and reliable performance.
              </p>

              {/* Feature Badges */}
              <div className="flex flex-wrap gap-3 mt-4 text-[9px] uppercase tracking-wider font-semibold text-white/95">
                <span className="bg-primary-green/45 border border-primary-yellow/20 px-3 py-1 rounded-sm flex items-center gap-1.5 backdrop-blur-sm">
                  <ShieldCheck className="w-3.5 h-3.5 text-primary-yellow" /> Safety Maintained Fleet
                </span>
                <span className="bg-primary-green/45 border border-primary-yellow/20 px-3 py-1 rounded-sm flex items-center gap-1.5 backdrop-blur-sm">
                  <Users className="w-3.5 h-3.5 text-primary-yellow" /> Experienced Operators
                </span>
                <span className="bg-primary-green/45 border border-primary-yellow/20 px-3 py-1 rounded-sm flex items-center gap-1.5 backdrop-blur-sm">
                  <Clock className="w-3.5 h-3.5 text-primary-yellow" /> Timely Delivery
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
                  <span className="text-xs uppercase tracking-[0.3em] text-primary-yellow ">
                    OVERVIEW
                  </span>
                  <h2 className="text-3xl sm:text-5xl font-bebas  text-primary-green tracking-wide leading-tight">
                    Reliable Transportation. <br />
                    <span className="text-brand-black">Built for Every Operation.</span>
                  </h2>
                  <div className="w-16 h-[3px] bg-primary-green mt-1" />
                </div>

                <p className="text-brand-black/80 text-xs sm:text-sm font-light leading-relaxed">
                  We provide dependable transportation equipment rental services for construction, industrial, commercial, interior fit-out, civil works, and logistics operations. Our fleet is maintained to ensure safety, efficiency, and reliable performance for all types of material and equipment transportation needs.
                </p>

                <p className="text-brand-black/65 text-xs sm:text-sm font-light leading-relaxed">
                  We offer flexible rental solutions, timely service, experienced operators, and cost-effective transportation support tailored to meet project requirements efficiently and professionally.
                </p>

                <a
                  href="#contact"
                  className="px-8 py-3.5 bg-primary-green hover:bg-brand-light-green text-white text-xs  uppercase tracking-widest rounded-sm w-fit transition-all duration-300 flex items-center gap-2 cursor-pointer mt-2"
                >
                  Get A Quote
                  <ArrowRight className="w-4 h-4 text-primary-yellow" />
                </a>
              </div>

              {/* Right Column (3 Vertical Cards) */}
              <div className="lg:col-span-7 flex flex-col gap-4">
                {[
                  {
                    title: "Fully Maintained Fleet",
                    desc: "Every vehicle and transport unit undergoes regular safety inspections, maintenance checks, and compliance reviews to guarantee operational reliability.",
                    icon: ShieldCheck
                  },
                  {
                    title: "Experienced Operators",
                    desc: "Skilled and certified drivers and operators available with every rental — trained for safe, efficient, and professional transportation operations.",
                    icon: Users
                  },
                  {
                    title: "Flexible Rental Solutions",
                    desc: "Short-term, long-term, and project-specific rental contracts tailored to your operational timeline and budget requirements.",
                    icon: DollarSign
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
                      <h3 className="font-bebas text-lg sm:text-xl  text-primary-green tracking-wide">
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
              <span className="text-xs uppercase tracking-[0.3em] text-primary-yellow ">
                WHY CHOOSE US
              </span>
              <h2 className="text-3xl sm:text-5xl font-bebas  text-white tracking-wide">
                Our Commitment to Transportation Excellence
              </h2>
              <div className="w-16 h-[3px] bg-primary-yellow mt-1" />
            </div>

            {/* Strength Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Safety-First Fleet",
                  desc: "Every vehicle undergoes rigorous pre-deployment safety checks and routine maintenance to ensure zero breakdowns and full compliance.",
                  icon: ShieldCheck
                },
                {
                  title: "Timely Service",
                  desc: "Prompt mobilization and on-time delivery guaranteed — because project timelines depend on reliable transportation support.",
                  icon: Clock
                },
                {
                  title: "Cost-Effective Rentals",
                  desc: "Competitive, transparent pricing with flexible contract options to keep your logistics budget on track.",
                  icon: DollarSign
                },
                {
                  title: "Experienced Operators",
                  desc: "Professional, trained operators with hands-on experience in industrial, construction, and logistics transportation environments.",
                  icon: Wrench
                }
              ].map((strength, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-white/[0.03] border border-white/5 hover:bg-white/[0.06] hover:border-primary-yellow/30 transition-all duration-300 rounded-sm flex flex-col items-center text-center group"
                >
                  <div className="w-12 h-12 rounded-full bg-primary-yellow/15 flex items-center justify-center text-primary-yellow border border-primary-yellow/20 mb-4 group-hover:bg-primary-yellow group-hover:text-brand-black transition-all duration-300">
                    <strength.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bebas text-xl  text-white tracking-wide mb-2">
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
        {/* 4. TRANSPORTATION FLEET GRID                               */}
        {/* ========================================================= */}
        <div className="w-full py-16 sm:py-24 px-4 sm:px-8 bg-white border-t border-brand-black/5">
          <div className="max-w-7xl mx-auto">

            {/* Header Titles */}
            <div className="flex flex-col gap-1 mb-12">
              <span className="text-xs uppercase tracking-[0.3em] text-primary-yellow ">
                OUR FLEET
              </span>
              <h2 className="text-3xl sm:text-5xl font-bebas  text-primary-green tracking-wide">
                Transportation Equipment We Provide
              </h2>
              <div className="w-16 h-[3px] bg-primary-green mt-1" />
            </div>

            {/* Fleet Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {transportationOfferings.map((item, idx) => (
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
                    <span className="absolute top-3 left-3 z-20 bg-primary-green/90 text-primary-yellow border border-primary-yellow/20 px-2 py-0.5 rounded-sm text-[9px] uppercase tracking-widest  backdrop-blur-sm">
                      {item.tag}
                    </span>
                  </div>

                  {/* Description block */}
                  <div className="p-5 flex flex-col flex-grow border-t border-brand-black/5 bg-white">
                    <h3 className="font-bebas text-xl sm:text-2xl  text-primary-green tracking-wide group-hover:text-primary-yellow transition-colors leading-tight mb-2">
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
        {/* 5. HOW WE WORK — PROCESS TIMELINE                         */}
        {/* ========================================================= */}
        <div className="w-full bg-gradient-to-b from-brand-black via-[#012422] to-brand-black py-16 sm:py-24 px-4 sm:px-8 border-t border-white/5 text-white">
          <div className="max-w-7xl mx-auto">

            {/* Header */}
            <div className="flex flex-col gap-1 mb-12 text-center items-center">
              <span className="text-xs uppercase tracking-[0.3em] text-primary-yellow ">
                OUR PROCESS
              </span>
              <h2 className="text-3xl sm:text-5xl font-bebas  text-white tracking-wide">
                How We Deliver Transportation Solutions
              </h2>
              <div className="w-16 h-[3px] bg-primary-yellow mt-1" />
            </div>

            {/* Process Timeline */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative mt-16">

              {/* Desktop connector line */}
              <div className="absolute top-1/2 left-[10%] right-[10%] h-[1px] bg-white/10 z-0 hidden md:block" />

              {[
                { step: "1", name: "Select Vehicle", desc: "Choose the right transportation unit for your cargo type, route, and operational requirements." },
                { step: "2", name: "Safety Inspection", desc: "Full pre-deployment vehicle check covering mechanical, safety, and compliance standards." },
                { step: "3", name: "Rental Agreement", desc: "Flexible short-term or long-term rental contracts customized to your project needs." },
                { step: "4", name: "On-Time Dispatch", desc: "Prompt mobilization with experienced operators and drivers deployed to your site." },
                { step: "5", name: "Ongoing Support", desc: "Continuous operational support, scheduled maintenance, and replacement vehicles when required." }
              ].map((proc, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center text-center relative z-10 group"
                >
                  <div className="w-12 h-12 rounded-full bg-primary-green border-2 border-primary-yellow text-primary-yellow font-bebas text-xl  flex items-center justify-center shadow-lg group-hover:bg-primary-yellow group-hover:text-brand-black transition-all duration-300">
                    {proc.step}
                  </div>
                  <h3 className="font-bebas text-xl  text-white tracking-wide mt-4 mb-2 group-hover:text-primary-yellow transition-colors">
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
                <h3 className="font-bebas text-3xl sm:text-4xl  tracking-wide leading-none">
                  Need Transportation Equipment for Your Project?
                </h3>
                <p className="text-white/70 text-xs sm:text-sm font-light leading-relaxed">
                  Contact our team today for flexible rental solutions, timely dispatch, and cost-effective transportation support tailored to your project requirements.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 shrink-0">
                <a
                  href="#contact"
                  className="px-6 py-3.5 bg-primary-yellow hover:bg-white text-brand-black font-semibold text-xs  uppercase tracking-widest rounded-sm transition-all duration-300 flex items-center justify-center gap-1.5 shadow-lg shadow-primary-yellow/20"
                >
                  Get A Quote
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="https://wa.me/966510969975"
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3.5 bg-brand-black/60 hover:bg-brand-black border border-white/10 hover:border-primary-yellow text-white text-xs  uppercase tracking-widest rounded-sm transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer"
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

