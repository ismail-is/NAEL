import { Metadata } from "next";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  ShieldCheck, 
  Clock, 
  ArrowRight,
  Wrench,
  MessageSquare,
  Grid,
  Users,
  HardHat,
  Briefcase,
  UserCheck,
  Zap,
  Activity
} from "lucide-react";

export const metadata: Metadata = {
  title: "Industrial Manpower Supply | NAEL Establishment",
  description: "Certified industrial manpower supply in Al Jubail, KSA. Providing skilled and unskilled labor, certified engineers, riggers, and heavy equipment operators for industrial projects.",
};

export default function ManpowerSupplyPage() {
  
  // The custom manpower offerings beautifully phrased
  const manpowerOfferings = [
    {
      title: "Engineering Professionals",
      desc: "Highly qualified Project Managers, QA/QC Engineers, Planning Engineers, and Civil/Mechanical Supervisors to drive project success.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop",
      tag: "Engineering"
    },
    {
      title: "Certified Heavy Operators",
      desc: "Licensed and Aramco-certified operators for cranes, excavators, bulldozers, and forklifts ensuring absolute site safety.",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=800&auto=format&fit=crop",
      tag: "Heavy Machinery"
    },
    {
      title: "Skilled Tradesmen",
      desc: "Expert welders (TIG/MIG), steel fabricators, industrial electricians, and pipefitters trained for complex industrial environments.",
      image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=800&auto=format&fit=crop",
      tag: "Skilled Labor"
    },
    {
      title: "Safety & HSE Personnel",
      desc: "Dedicated HSE Managers, Safety Officers, and Fire Watches to maintain strict compliance with SABIC and Saudi Aramco standards.",
      image: "https://images.unsplash.com/photo-1508962914676-134849a727f0?q=80&w=800&auto=format&fit=crop",
      tag: "Safety Officers"
    },
    {
      title: "Scaffolding & Rigging Crews",
      desc: "TUV certified Riggers (Level I, II, III) and expert scaffolders to handle critical lifting and structural access operations.",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop",
      tag: "Rigging & Access"
    },
    {
      title: "General Labor & Support",
      desc: "Reliable unskilled labor, helpers, material handlers, and site maintenance staff to support daily operational workflows.",
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=800&auto=format&fit=crop",
      tag: "Site Support"
    }
  ];

  return (
    <>
      <Loader />
      <Navbar />

      <main className="flex-grow pt-[120px] bg-white select-none">

        {/* ========================================================= */}
        {/* 1. CINEMATIC HERO HEADER WITH OVERLAY                     */}
        {/* ========================================================= */}
        <div className="relative w-full h-[320px] sm:h-[400px] bg-brand-black overflow-hidden flex items-center">
          {/* Background image */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop"
              alt="Industrial Manpower Supply"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-brand-black/70 z-10" />
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
                <span className="text-primary-yellow">Manpower Supply</span>
              </div>
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.35em] text-primary-yellow font-extrabold">
                SPECIALIZED IN
              </span>
              <h1 className="text-3xl sm:text-6xl font-bebas font-extrabold text-white tracking-wider leading-none">
                MANPOWER <span className="text-primary-yellow">SUPPLY</span>
              </h1>
              <p className="text-white/80 text-[11px] sm:text-sm font-light leading-relaxed mt-2 max-w-lg">
                Delivering highly skilled, TUV/Aramco certified industrial workforce and engineering professionals tailored to support massive construction and petrochemical turnarounds.
              </p>
              
              {/* Features Badges list */}
              <div className="flex flex-wrap gap-3 mt-4 text-[9px] uppercase tracking-wider font-semibold text-white/95">
                <span className="bg-primary-green/45 border border-primary-yellow/20 px-3 py-1 rounded-sm flex items-center gap-1.5 backdrop-blur-sm">
                  <ShieldCheck className="w-3.5 h-3.5 text-primary-yellow" /> TUV/Aramco Certified
                </span>
                <span className="bg-primary-green/45 border border-primary-yellow/20 px-3 py-1 rounded-sm flex items-center gap-1.5 backdrop-blur-sm">
                  <Users className="w-3.5 h-3.5 text-primary-yellow" /> Scalable Workforce
                </span>
                <span className="bg-primary-green/45 border border-primary-yellow/20 px-3 py-1 rounded-sm flex items-center gap-1.5 backdrop-blur-sm">
                  <HardHat className="w-3.5 h-3.5 text-primary-yellow" /> Stringent Safety Protocol
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
                    Powering Your Projects. <br />
                    <span className="text-brand-black">With the Right People.</span>
                  </h2>
                  <div className="w-16 h-[3px] bg-primary-green mt-1" />
                </div>

                <p className="text-brand-black/80 text-xs sm:text-sm font-light leading-relaxed">
                  We bridge the talent gap for major industrial projects in Al Jubail and the Eastern Province by providing a thoroughly vetted, highly qualified, and rapidly deployable workforce ranging from executive engineers to manual site laborers.
                </p>

                <p className="text-brand-black/65 text-xs sm:text-sm font-light leading-relaxed">
                  Our manpower solutions are tailored to meet the dynamic demands of plant turnarounds, mega-construction sites, and offshore facilities, ensuring full compliance with local labor laws and strict safety protocols.
                </p>

                <a 
                  href="#contact"
                  className="px-8 py-3.5 bg-primary-green hover:bg-brand-light-green text-white text-xs font-bold uppercase tracking-widest rounded-sm w-fit transition-all duration-300 flex items-center gap-2 cursor-pointer mt-2"
                >
                  Request Workforce
                  <ArrowRight className="w-4 h-4 text-primary-yellow" />
                </a>
              </div>

              {/* Right Column (3 Vertical Cards) */}
              <div className="lg:col-span-7 flex flex-col gap-4">
                {[
                  {
                    title: "Rigorous Vetting",
                    desc: "Every candidate undergoes strict technical screening, background checks, and safety standard evaluations.",
                    icon: UserCheck
                  },
                  {
                    title: "Scalable Deployment",
                    desc: "Ability to mobilize dozens of workers or specialized teams swiftly to match your project timeline.",
                    icon: Users
                  },
                  {
                    title: "Certified Specialists",
                    desc: "Supplying TUV, OSHA, and Aramco certified tradesmen ready for immediate site integration.",
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
                Excellence in Workforce Management
              </h2>
              <div className="w-16 h-[3px] bg-primary-yellow mt-1" />
            </div>

            {/* Horizontal Strength Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Rapid Sourcing",
                  desc: "Extensive local database ensuring quick fulfillment of massive workforce demands.",
                  icon: Zap
                },
                {
                  title: "End-to-End Logistics",
                  desc: "We manage payroll, accommodation, transportation, and medical coverage.",
                  icon: Briefcase
                },
                {
                  title: "Safety First Culture",
                  desc: "Continuous HSE training and PPE provision to guarantee a zero-incident environment.",
                  icon: ShieldCheck
                },
                {
                  title: "Flexible Contracts",
                  desc: "Short-term, long-term, and project-based hourly staffing solutions.",
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
        {/* 4. SERVICES GRID (6 Items Paraphrased & Polished)         */}
        {/* ========================================================= */}
        <div className="w-full py-16 sm:py-24 px-4 sm:px-8 bg-white border-t border-brand-black/5">
          <div className="max-w-7xl mx-auto">
            
            {/* Header Titles */}
            <div className="flex flex-col gap-1 mb-12">
              <span className="text-xs uppercase tracking-[0.3em] text-primary-yellow font-extrabold">
                OUR DISCIPLINES
              </span>
              <h2 className="text-3xl sm:text-5xl font-bebas font-extrabold text-primary-green tracking-wide">
                Specialized Manpower Categories
              </h2>
              <div className="w-16 h-[3px] bg-primary-green mt-1" />
            </div>

            {/* 6-Card Responsive Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {manpowerOfferings.map((item, idx) => (
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
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
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
                How We Deploy Talent
              </h2>
              <div className="w-16 h-[3px] bg-primary-yellow mt-1" />
            </div>

            {/* horizontal timeline */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative mt-16">
              
              {/* Desktop connector line */}
              <div className="absolute top-1/2 left-[10%] right-[10%] h-[1px] bg-white/10 z-0 hidden md:block" />

              {[
                { step: "1", name: "Needs Analysis", desc: "We evaluate your project timeline, skill requirements, and compliance standards." },
                { step: "2", name: "Sourcing", desc: "Shortlisting the best candidates from our extensive, verified industrial talent pool." },
                { step: "3", name: "Evaluation", desc: "Conducting technical interviews and verifying Aramco/SABIC safety credentials." },
                { step: "4", name: "Mobilization", desc: "Managing logistics, visas, medicals, and immediate site deployment." },
                { step: "5", name: "Site Support", desc: "Providing continuous HR oversight and performance tracking throughout the contract." }
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
                  Need a Reliable Workforce?
                </h3>
                <p className="text-white/70 text-xs sm:text-sm font-light leading-relaxed">
                  Contact our staffing team today for certified professionals and laborers ready for immediate mobilization.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 shrink-0">
                <a 
                  href="#contact"
                  className="px-6 py-3.5 bg-primary-yellow hover:bg-white text-brand-black font-semibold text-xs font-bold uppercase tracking-widest rounded-sm transition-all duration-300 flex items-center justify-center gap-1.5 shadow-lg shadow-primary-yellow/20"
                >
                  Request Manpower
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
