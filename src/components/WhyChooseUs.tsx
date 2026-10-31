"use client";

import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  Users, 
  Cpu, 
  Zap, 
  Clock, 
  Smile, 
  Award,
  ChevronRight
} from "lucide-react";

const featureList = [
  {
    id: 1,
    title: "Experience & Expertise",
    sub: "Expertise",
    description: "Skilled professionals with years of rich industry experience handling diverse contracting projects.",
    icon: Award,
  },
  {
    id: 2,
    title: "High Quality Services",
    sub: "Premium Services",
    description: "We deliver top-quality services that meet absolute global industrial and environmental standards.",
    icon: Cpu,
  },
  {
    id: 3,
    title: "Advanced Equipment",
    sub: "Modern Machinery",
    description: "We use modern, routinely inspected equipment to ensure best construction and logistics results.",
    icon: ShieldCheck,
  },
  {
    id: 4,
    title: "Safety First",
    sub: "Safety Focus",
    description: "Safety is our topmost priority in every single task, minimizing site risks via rigid compliance.",
    icon: Users,
  },
  {
    id: 5,
    title: "On-Time Delivery",
    sub: "Fast Logistics",
    description: "We value your time and operate standard logistic fleets to ensure timely project completion.",
    icon: Clock,
  },
  {
    id: 6,
    title: "Customer Satisfaction",
    sub: "Client Focus",
    description: "Our clients' ultimate satisfaction is the core foundation and pride of our business.",
    icon: Smile,
  },
];

export default function WhyChooseUs() {
  return (
    <section 
      id="why-choose-us"
      className="relative bg-gradient-to-b from-[#012a27] to-brand-black py-24 px-4 sm:px-8 overflow-hidden"
    >
      {/* Subtle Grid overlay */}
      <div className="absolute inset-0 industrial-grid opacity-[0.08] pointer-events-none" />

      {/* Floating Glowing Green Orbs */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 rounded-full bg-primary-green/20 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 rounded-full bg-primary-yellow/15 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Block */}
        <div className="text-center flex flex-col items-center gap-3 mb-16">
          <span className="text-xs uppercase tracking-[0.4em] text-primary-yellow font-bold">
            WHY NAEL ESTABLISHMENT
          </span>
          <h2 className="text-4xl sm:text-5xl font-bebas font-extrabold text-white tracking-wider leading-none">
            WHY CHOOSE <span className="text-primary-yellow">NAEL?</span>
          </h2>
          <div className="w-20 h-[3px] bg-primary-yellow mt-1" />
          <p className="text-white/60 max-w-xl text-xs sm:text-sm font-light mt-2">
            A reputation built on reliability, swift project delivery, and absolute compliance with safety and environmental laws inside the Kingdom of Saudi Arabia.
          </p>
        </div>

        {/* 6-Column Grid Layout matching the NAEL reference image */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-0 border-y border-white/10 bg-brand-black/40 backdrop-blur-sm rounded-sm">
          
          {featureList.map((item, index) => (
            <motion.div
              key={item.id}
              className={`p-6 flex flex-col items-center text-center group transition-all duration-500 hover:bg-[#02534D]/25 relative ${
                index !== 5 ? "lg:border-r lg:border-white/10" : ""
              } ${
                index % 2 === 0 ? "border-r border-white/5 sm:border-r-0 lg:border-r" : ""
              } border-b border-white/10 sm:border-b-0`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              {/* Top Accent Floating Progress Indicator */}
              <div className="absolute top-0 left-0 w-0 h-[2px] bg-primary-yellow group-hover:w-full transition-all duration-500" />

              {/* Glowing Thin Icon Wrapper */}
              <div className="w-14 h-14 rounded-full bg-primary-yellow/5 border border-primary-yellow/20 flex items-center justify-center mb-6 text-primary-yellow group-hover:bg-primary-yellow group-hover:text-brand-black group-hover:scale-110 group-hover:shadow-[0_0_15px_#FFCC00] transition-all duration-500">
                <item.icon className="w-6 h-6 stroke-[1.5]" />
              </div>

              {/* Title & Underline */}
              <h3 className="text-lg font-bebas font-extrabold text-white tracking-wide group-hover:text-primary-yellow transition-colors leading-tight mb-2">
                {item.title}
              </h3>
              <div className="w-6 h-[1.5px] bg-white/20 group-hover:w-12 group-hover:bg-primary-yellow transition-all duration-500 mb-3" />

              {/* Description */}
              <p className="text-white/60 text-xs font-light leading-relaxed group-hover:text-white transition-colors flex-grow">
                {item.description}
              </p>

              {/* Lower arrow transition indicator */}
              <div className="mt-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
                <ChevronRight className="w-4 h-4 text-primary-yellow" />
              </div>
            </motion.div>
          ))}

        </div>

        {/* Dynamic Horizontal Stats Banner below */}
        <div className="mt-16 bg-[#02534D]/10 border border-[#02534D]/30 p-6 rounded-sm flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-sm bg-primary-green flex items-center justify-center text-primary-yellow">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bebas font-extrabold text-white tracking-wider">Aramco & SABIC Standard Compliant</h4>
              <p className="text-white/50 text-[10px] sm:text-xs font-light">All personnel and logistics operate under the highest Saudi industrial safety metrics.</p>
            </div>
          </div>
          <a 
            href="#contact"
            className="px-6 py-2.5 bg-primary-yellow text-brand-black text-xs font-bold uppercase tracking-widest hover:bg-white transition-all duration-300 rounded-sm flex items-center gap-1.5 cursor-pointer font-semibold"
          >
            Review Safety Standards
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
