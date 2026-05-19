"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const projectList = [
  {
    id: 1,
    title: "Container Trading",
    category: "Logistics Yard",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop",
    link: "#contact",
  },
  {
    id: 2,
    title: "Water Delivery",
    category: "Sweet Water",
    image: "https://images.unsplash.com/photo-1591768793355-74d75b5d14fc?q=80&w=800&auto=format&fit=crop",
    link: "#contact",
  },
  {
    id: 3,
    title: "Sewage Cleaning",
    category: "Vacuum Services",
    image: "https://images.unsplash.com/photo-1542060748-10c28b629f6f?q=80&w=800&auto=format&fit=crop",
    link: "#contact",
  },
  {
    id: 4,
    title: "Scaffolding Services",
    category: "Erection Works",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop",
    link: "#contact",
  },
  {
    id: 5,
    title: "Machinery Rental",
    category: "Heavy Fleet",
    image: "https://images.unsplash.com/photo-1579684389782-64d84b5e9053?q=80&w=800&auto=format&fit=crop",
    link: "#contact",
  },
];

export default function Projects() {
  return (
    <section 
      id="projects" 
      className="bg-white py-24 px-4 sm:px-8 text-brand-black overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Header Title with "View All Projects" on the right */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
          <div className="flex flex-col gap-2">
            <span className="text-xs uppercase tracking-[0.35em] text-primary-yellow font-extrabold bg-primary-green/10 px-3 py-1.5 rounded-sm w-fit border border-primary-green/20">
              OUR WORK
            </span>
            <h2 className="text-4xl sm:text-5xl font-bebas font-extrabold text-primary-green tracking-wide leading-none">
              OUR FEATURED PROJECTS
            </h2>
            <div className="w-16 h-1 bg-primary-yellow mt-2" />
          </div>

          <a 
            href="#contact"
            className="px-6 py-2.5 bg-primary-green hover:bg-brand-light-green text-white text-xs font-bold uppercase tracking-widest rounded-sm flex items-center gap-1.5 transition-all duration-300 border border-primary-green cursor-pointer shadow-sm"
          >
            View All Projects
            <ArrowRight className="w-4 h-4 text-primary-yellow" />
          </a>
        </div>

        {/* 5-Column Side-By-Side Banner Grid (exactly matching the reference image) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {projectList.map((project, index) => (
            <motion.a
              href={project.link}
              key={project.id}
              className="group relative h-[380px] sm:h-[450px] overflow-hidden rounded-sm flex flex-col justify-end border border-brand-black/5 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              {/* Overlay shading gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-brand-black/10 to-brand-black/20 z-10 transition-opacity duration-500 group-hover:from-primary-green/95" />
              
              {/* Action hovering icon */}
              <div className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-primary-yellow/90 flex items-center justify-center text-brand-black opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 shadow-lg">
                <ArrowUpRight className="w-4 h-4 stroke-[2]" />
              </div>

              {/* Background Project Image */}
              <img 
                src={project.image} 
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                loading="lazy"
              />

              {/* Text overlay bottom footer (matching the reference image footer) */}
              <div className="relative z-20 w-full bg-[#02534D] py-3 text-center border-t border-primary-yellow/20 transition-colors duration-500 group-hover:bg-primary-yellow">
                <span className="text-[10px] uppercase tracking-widest text-white/50 group-hover:text-brand-black/50 block font-semibold">
                  {project.category}
                </span>
                <h3 className="font-bebas text-lg sm:text-xl font-bold text-white group-hover:text-brand-black tracking-wider mt-0.5 leading-none transition-colors">
                  {project.title}
                </h3>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Aesthetic footer marker */}
        <div className="mt-16 text-center select-none opacity-40">
          <span className="font-bebas text-[11px] tracking-[0.4em] uppercase text-primary-green">
            Serving Jubail Industrial City & Eastern Province Since 2004
          </span>
        </div>

      </div>
    </section>
  );
}
