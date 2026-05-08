"use client";

import React from "react";
import { motion } from "motion/react";
import { MoveRight } from "lucide-react";
import Link from "next/link";

const FtlHeader = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/home/cargo-transport.webp"
          className="w-full h-full object-cover opacity-55"
        >
          {/* Highway trucking video */}
          <source src="/images/exim/ads.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Cinematic Overlay & Tint */}
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/90 z-20" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[11px] font-black uppercase tracking-[0.6em] text-[#F26341] mb-6"
          >

          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl lg:text-[110px] font-black text-white leading-[0.85] mb-10 tracking-tighter"
          >
            INDIA FTL <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F26341] to-[#ff8c64]">REDEFINED.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-2xl text-white/90 mb-16 max-w-2xl mx-auto leading-relaxed font-light tracking-wide text-balance"
          >
            Pan-India full truck load logistics — built for speed, reliability, and total highway visibility.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-4 px-12 py-6 bg-[#F26341] hover:bg-white hover:text-[#272D6D] text-white text-lg font-black uppercase tracking-widest rounded-full transition-all duration-500 group shadow-[0_20px_50px_rgba(242,99,65,0.3)] active:scale-95 overflow-hidden relative"
            >
              <span className="relative z-10 flex items-center gap-3">
                Get a Quote <MoveRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Subtle Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="text-[10px] font-black text-white/30 uppercase tracking-[0.5em]">Scroll to Explore</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent" />
      </motion.div>
    </section>
  );
};

export default FtlHeader;
