"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Elegant fast load (2.0 seconds total showcase)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[999999] flex items-center justify-center bg-[#0b0b0b]"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.05,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
          }}
        >
          {/* 1. Subtle Industrial Grid Background */}
          <div className="absolute inset-0 industrial-grid opacity-5 pointer-events-none" />

          {/* 2. Circular Background Animations (Centered Concentric Rings) */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden z-0">
            {/* Outermost soft green pulsing glow */}
            <div className="absolute w-[350px] h-[350px] sm:w-[550px] sm:h-[550px] rounded-full bg-primary-green/[0.04] blur-[80px] animate-[pulse_4s_ease-in-out_infinite]" />

            {/* Pulsing circular wave */}
            <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full border border-primary-yellow/10 bg-primary-yellow/[0.01] animate-[ping_2.5s_cubic-bezier(0,0,0.2,1)_infinite]" />

            {/* Inner Rotating Ring 1 (Yellow dashed border) */}
            <div className="absolute w-60 h-60 sm:w-80 sm:h-80 rounded-full border border-dashed border-primary-yellow/15 animate-[spin_25s_linear_infinite]" />

            {/* Inner Rotating Ring 2 (Green reverse solid border) */}
            <div className="absolute w-48 h-48 sm:w-64 sm:h-64 rounded-full border border-primary-green/10 border-t-primary-green/20 animate-[spin_12s_linear_infinite_reverse]" />
          </div>

          {/* 3. Centered Brand Logo Animation */}
          <div className="relative z-10 flex flex-col items-center gap-4 px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ 
                opacity: [0, 1, 0.8, 1], 
                scale: [0.9, 1, 0.98, 1] 
              }}
              transition={{ 
                duration: 1.8, 
                ease: "easeInOut",
                times: [0, 0.4, 0.8, 1]
              }}
              className="relative w-40 h-14 sm:w-56 sm:h-20 transition-all duration-300"
            >
              <Image
                src="/naelksa/Nael Logo White.webp"
                alt="NAEL Logo"
                fill
                priority
                className="object-contain"
              />
            </motion.div>
            
            {/* Elegant tiny tagline reveal */}
            <motion.span
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 0.45, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-[8px] sm:text-[9px] uppercase tracking-[0.4em] text-white font-medium text-center"
            >
              General Contracting & Rental
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
