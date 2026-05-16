"use client";

import React from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const Header = () => {
  const scrollToPositions = () => {
    const element = document.getElementById("open-positions");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#272D6D] pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">

        <div className="absolute inset-0 bg-gradient-to-b from-[#272D6D]/80 via-transparent to-[#272D6D]" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-40 left-10 w-64 h-64 bg-[#F26341] rounded-full blur-[120px] opacity-20 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#272D6D] rounded-full blur-[150px] opacity-30" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-black text-white leading-[1.1] mb-1 tracking-tighter"
          >
            Don't Just Move the World. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F26341] to-[#ff8e72]">
              Define the Way it Moves.
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed font-medium"
          >
            At <span className="text-[#F26341] font-black">Logipod</span>, we don’t just move freight;
            we architect the intelligence behind global trade. Join our elite team and
            engineer the very future of human connection.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={scrollToPositions}
              className="group relative px-12 py-6 bg-[#F26341] hover:bg-[#d95336] text-white font-black text-sm uppercase tracking-[0.2em] rounded-xl transition-all duration-300 flex items-center gap-3 overflow-hidden shadow-[0_20px_50px_rgba(242,99,65,0.3)] cursor-pointer"
            >
              <span className="relative z-10 flex items-center gap-3">
                Explore Your Role <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] text-gray-400 uppercase tracking-[0.3em] font-bold">Scroll to Begin</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-[#F26341] to-transparent" />
      </motion.div>
    </section>
  );
};

export default Header;
