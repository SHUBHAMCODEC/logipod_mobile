"use client";

import React from "react";
import { motion } from "motion/react";

const TeamHeader = () => {
  return (
    <section className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden bg-[#272D6D]">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#272D6D]/95 via-[#272D6D]/70 to-[#272D6D]" />

      {/* Decorative Accents */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-[#F26341] rounded-full blur-[150px] opacity-20" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-white rounded-full blur-[180px] opacity-10" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#F26341]/10 border border-[#F26341]/20 text-[#F26341] text-xs font-bold uppercase tracking-[0.3em] mb-6">
              Our People, Our Power
            </span>
            
            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6 tracking-tighter">
              Meet the Visionaries <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F26341] to-[#ff8e72]">
                Behind Logipod
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-medium">
              We are a collective of logistics experts, engineers, and innovators 
              dedicated to redefining how India and the world move.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-[#F26341] to-transparent" />
      </motion.div>
    </section>
  );
};

export default TeamHeader;
