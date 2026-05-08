"use client";

import React from "react";
import { motion } from "motion/react";
import {
  Truck,
  MapPin,
  Zap,
  ShieldCheck,
  Clock,
} from "lucide-react";

const strengths = [
  {
    title: "Pan-India Coverage",
    description: "Dedicated truck lanes connecting every major industrial hub, tier-2 city, and warehouse across India.",
    icon: MapPin,
  },
  {
    title: "Fleet Reliability",
    description: "Owned and partner fleet with GPS-tracked vehicles, ensuring 99% on-time performance.",
    icon: Truck,
  },
  {
    title: "Speed & Efficiency",
    description: "Optimized loading, routing, and checkpoint handling for minimum transit delays.",
    icon: Zap,
  },
  {
    title: "Safe & Insured",
    description: "Comprehensive transit insurance and cargo-safe protocols on every full truck load movement.",
    icon: ShieldCheck,
  },
  {
    title: "24/7 Tracking",
    description: "Real-time visibility into your shipment's location, ETA, and delivery milestones at all times.",
    icon: Clock,
  },
];

const FtlStrength = () => {
  return (
    <section className="py-32 bg-[#FAF5EE] relative overflow-hidden">

      {/* Luminous Brand Accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-[#F26341]/40 to-transparent z-0" />
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none z-0"
           style={{ backgroundImage: `radial-gradient(#F26341 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">

        {/* Header */}
        <div className="text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black text-[#272D6D] mb-8 tracking-tighter leading-tight"
          >
            Why Logipod FTL <br />
            <span className="text-[#F26341]">Leads the Road.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-xl md:text-2xl font-medium max-w-3xl mx-auto leading-relaxed"
          >
            Built on a foundation of trust, road expertise, and technology-driven execution.
          </motion.p>
        </div>

        {/* Strength Cards - Beige Theme with Moving Border */}
        <div className="flex flex-wrap justify-center gap-8 lg:gap-10 max-w-6xl mx-auto">
          {strengths.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.08,
                ease: "easeOut"
              }}
              className="relative group p-[2px] rounded-[40px] overflow-hidden w-full md:w-[calc(50%-20px)] lg:w-[calc(33.333%-27px)] min-h-[320px]"
            >
              {/* Static Border Layer */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#F5E6D3] via-[#F26341] to-[#F5E6D3] opacity-30" />

              {/* Inner Beige Card */}
              <div className="relative w-full h-full bg-[#FAF5EE] rounded-[38px] flex flex-col items-center text-center p-10 z-10">
                {/* Luminous Icon Box */}
                <div className="w-20 h-20 rounded-[28px] bg-white shadow-lg shadow-orange-900/5 flex items-center justify-center text-[#272D6D] mb-10">
                  <item.icon size={36} strokeWidth={1.5} />
                </div>

                <h4 className="text-2xl font-black text-[#272D6D] mb-6 tracking-tight leading-tight">
                  {item.title}
                </h4>

                <p className="text-gray-600 font-medium text-[15px] leading-relaxed max-w-[260px]">
                  {item.description}
                </p>

                {/* Theme Accent */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-12 h-1 rounded-full bg-orange-100 overflow-hidden">
                  <div className="w-6 h-full bg-[#F26341]" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FtlStrength;
