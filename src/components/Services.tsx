"use client";

import { motion } from "framer-motion";
import { 
  Container, 
  Droplet, 
  Trash2, 
  Grid3X3, 
  Truck, 
  ArrowUpRight 
} from "lucide-react";

const servicesList = [
  {
    id: 1,
    num: "1",
    title: "Specialized in Container Trading",
    subtitle: "Container Trading",
    description: "Providing premium quality shipping containers of all sizes (20ft, 40ft) for storage, shipping, and customized mobile offices. Built to withstand extreme industrial conditions.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop",
    icon: Container,
  },
  {
    id: 2,
    num: "2",
    title: "Sweet Water Delivery",
    subtitle: "Water Delivery",
    description: "Safe, rapid delivery of clean sweet water using a state-of-the-art tanker fleet. Catered specifically to industrial workspaces, remote construction sites, and residential reserves.",
    image: "/naelksa/sweet_water_tanker.jpg",
    icon: Droplet,
  },
  {
    id: 3,
    num: "3",
    title: "Sewage Cleaning Services",
    subtitle: "Sewage Cleaning",
    description: "Highly professional disposal and vacuum suction extraction services for industrial effluents, septic waste, and municipal drainage. Executed safely by licensed eco-experts.",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=800&auto=format&fit=crop",
    icon: Trash2,
  },
  {
    id: 4,
    num: "4",
    title: "Scaffolding Services",
    subtitle: "Scaffolding Services",
    description: "Premium, certified scaffolding erection and rental services meeting absolute international standards. Built with durable couplers and rigid frames for total structural support.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop",
    icon: Grid3X3,
  },
  {
    id: 5,
    num: "5",
    title: "Equipment & Machinery Rental",
    subtitle: "Machinery Rental",
    description: "Access a wide portfolio of high-grade construction vehicles: heavy-duty loaders, long-reach excavators, bulldozers, dumpers, and cranes. Kept under strict routine maintenance.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=800&auto=format&fit=crop",
    icon: Truck,
  },
];

export default function Services() {
  return (
    <section 
      id="services" 
      className="relative bg-white py-24 px-4 sm:px-8 text-brand-black overflow-hidden"
    >
      {/* Decorative Top Accent Diagonal Line */}
      <div className="absolute top-0 left-0 w-full h-[6px] bg-gradient-to-r from-primary-green via-primary-yellow to-primary-green" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
          <div className="flex flex-col gap-2">
            <span className="text-xs uppercase tracking-[0.35em] text-primary-yellow font-extrabold bg-primary-green/10 px-3 py-1.5 rounded-sm w-fit border border-primary-green/20">
              WHAT WE DO
            </span>
            <h2 className="text-4xl sm:text-5xl font-bebas font-extrabold text-primary-green tracking-wide leading-none">
              OUR SPECIALIZED SERVICES
            </h2>
            <div className="w-24 h-1 bg-primary-yellow mt-2" />
          </div>
          <p className="text-brand-black/60 max-w-md text-xs sm:text-sm font-light">
            Lamiya Al Khaleej Al Ittihad Establishment (NAEL) is fully certified to offer complex commercial services across general industrial logistics and civil support sectors.
          </p>
        </div>

        {/* Replicated High-Fidelity 3-and-2 Grid (Responsive layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          
          {/* First Row: 3 cards (takes lg:col-span-2 each) */}
          {servicesList.slice(0, 3).map((svc, i) => (
            <motion.div
              key={svc.id}
              className="lg:col-span-2 flex flex-col group relative bg-white border border-brand-black/5 shadow-sm rounded-sm hover:shadow-xl hover:border-primary-green/20 transition-all duration-500 interactive-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.15, duration: 0.6, ease: "easeOut" }}
              whileHover={{ y: -8 }}
            >
              {/* Service Card Top Image */}
              <div className="relative w-full h-[220px] overflow-hidden rounded-t-sm">
                <div className="absolute inset-0 bg-brand-black/10 group-hover:bg-brand-black/0 transition-colors duration-500 z-10" />
                <img 
                  src={svc.image} 
                  alt={svc.title}
                  className={`w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 ${
                    svc.id === 2 
                      ? "h-[112%] object-top" 
                      : "h-full"
                  }`}
                  loading="lazy"
                />
              </div>

              {/* Overlapping Rounded Yellow Icon Badge */}
              <div className="absolute top-[195px] left-6 z-20 w-12 h-12 rounded-full bg-primary-yellow flex items-center justify-center border-2 border-white shadow-md group-hover:bg-primary-green group-hover:rotate-12 transition-all duration-500">
                <svc.icon className="w-5 h-5 text-brand-black group-hover:text-primary-yellow transition-colors" />
              </div>

              {/* Service Card Lower Description */}
              <div className="p-6 pt-10 flex flex-col flex-grow bg-white rounded-b-sm border-t border-brand-black/5">
                <span className="text-xs font-bold text-primary-yellow uppercase tracking-widest mb-1.5">
                  Service {svc.num}
                </span>
                <h3 className="text-2xl font-bebas font-extrabold text-primary-green tracking-wide group-hover:text-primary-yellow transition-colors leading-tight mb-3">
                  {svc.title}
                </h3>
                <p className="text-brand-black/75 text-xs sm:text-sm font-light leading-relaxed mb-6 flex-grow">
                  {svc.description}
                </p>

                <div className="w-full h-[1px] bg-brand-black/10 my-4" />
                
                <a 
                  href={
                    svc.id === 1 
                      ? "/services/container-trading" 
                      : svc.id === 2 
                      ? "/services/sweet-water-delivery" 
                      : svc.id === 3 
                      ? "/services/sewage-cleaning" 
                      : "#contact"
                  } 
                  className="text-primary-green group-hover:text-primary-yellow text-xs font-extrabold uppercase tracking-widest flex items-center gap-1.5 transition-colors"
                >
                  {svc.id === 1 || svc.id === 2 || svc.id === 3 ? "Explore Service" : "Request Service"}
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}

          {/* Second Row: 2 cards (centered on desktop, takes lg:col-span-2 each) */}
          {servicesList.slice(3, 5).map((svc, i) => {
            const colStartClass = i === 0 ? "lg:col-start-2" : "lg:col-start-4";
            
            return (
              <motion.div
                key={svc.id}
                className={`lg:col-span-2 flex flex-col group relative bg-white border border-brand-black/5 shadow-sm rounded-sm hover:shadow-xl hover:border-primary-green/20 transition-all duration-500 interactive-card ${colStartClass}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: (i + 3) * 0.15, duration: 0.6, ease: "easeOut" }}
                whileHover={{ y: -8 }}
              >
                {/* Service Card Top Image */}
                <div className="relative w-full h-[220px] overflow-hidden rounded-t-sm">
                  <div className="absolute inset-0 bg-brand-black/10 group-hover:bg-brand-black/0 transition-colors duration-500 z-10" />
                  <img 
                    src={svc.image} 
                    alt={svc.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    loading="lazy"
                  />
                </div>

                {/* Overlapping Rounded Yellow Icon Badge */}
                <div className="absolute top-[195px] left-6 z-20 w-12 h-12 rounded-full bg-primary-yellow flex items-center justify-center border-2 border-white shadow-md group-hover:bg-primary-green group-hover:rotate-12 transition-all duration-500">
                  <svc.icon className="w-5 h-5 text-brand-black group-hover:text-primary-yellow transition-colors" />
                </div>

                {/* Service Card Lower Description */}
                <div className="p-6 pt-10 flex flex-col flex-grow bg-white rounded-b-sm border-t border-brand-black/5">
                  <span className="text-xs font-bold text-primary-yellow uppercase tracking-widest mb-1.5">
                    Service {svc.num}
                  </span>
                  <h3 className="text-2xl font-bebas font-extrabold text-primary-green tracking-wide group-hover:text-primary-yellow transition-colors leading-tight mb-3">
                    {svc.title}
                  </h3>
                  <p className="text-brand-black/75 text-xs sm:text-sm font-light leading-relaxed mb-6 flex-grow">
                    {svc.description}
                  </p>

                  <div className="w-full h-[1px] bg-brand-black/10 my-4" />

                  <a 
                    href={
                      svc.id === 4 
                        ? "/services/scaffolding" 
                        : svc.id === 5 
                        ? "/services/equipment-rental" 
                        : "#contact"
                    } 
                    className="text-primary-green group-hover:text-primary-yellow text-xs font-extrabold uppercase tracking-widest flex items-center gap-1.5 transition-colors"
                  >
                    {svc.id === 4 || svc.id === 5 ? "Explore Service" : "Request Service"}
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
