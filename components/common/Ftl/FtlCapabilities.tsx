"use client";

import React from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Truck,
  FileCheck,
  Zap,
  Activity,
  MapPin,
  Shield,
  ArrowRight
} from "lucide-react";

const capabilities = [
  {
    title: "Dedicated Truck Capacity",
    description: "Exclusive full-truck allocation with no co-loading — your cargo moves directly from pickup to destination.",
    icon: Truck,
  },
  {
    title: "E-Way Bill & LR Management",
    description: "Fully compliant documentation, zero-error E-Way Bills, and LR generation handled end-to-end.",
    icon: FileCheck,
  },
  {
    title: "Express Highway Delivery",
    description: "Priority routing on national highways for time-sensitive FTL shipments with guaranteed transit timelines.",
    icon: Zap,
  },
  {
    title: "Real-Time GPS Tracking",
    description: "Live truck location, driver details, and ETA updates throughout your shipment's journey.",
    icon: Activity,
  },
  {
    title: "Pan-India Lane Network",
    description: "Deep coverage across 500+ routes including metro corridors, industrial zones, and tier-2 cities.",
    icon: MapPin,
  },
  {
    title: "Transit Insurance & Safety",
    description: "Comprehensive cargo protection with instant claims support for every FTL consignment.",
    icon: Shield,
  },
];

const FtlCapabilities = () => {
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

  return (
    <section className="py-32 bg-[#f8fafc] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 opacity-[0.02]"
             style={{ backgroundImage: `radial-gradient(#272D6D 0.5px, transparent 0.5px)`, backgroundSize: '32px 32px' }} />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-left mb-20 max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black text-[#272D6D] mb-8 tracking-tighter leading-[0.95]"
          >
            Full Capacity. <br />
            <span className="text-[#F26341]">Zero Compromises.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 text-xl md:text-2xl font-medium leading-relaxed max-w-2xl"
          >
            End-to-end FTL solutions engineered for reliability, speed, and national scale.
          </motion.p>
        </div>

        {/* Stats Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mb-24 overflow-hidden rounded-[40px] bg-white/70 backdrop-blur-md md:backdrop-blur-xl shadow-[0_30px_60px_-15px_rgba(3,105,161,0.1)]"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-sky-50/50 via-white to-sky-50/50 pointer-events-none" />
          <div className="relative z-10 flex flex-wrap lg:flex-nowrap items-center py-4">
            {[
              { value: "500+", label: "Active Routes", desc: "Pan-India" },
              { value: "98%", label: "On-Time Rate", desc: "Delivery" },
              { value: "24/7", label: "Live Tracking", desc: "GPS Enabled" }
            ].map((stat, i) => (
              <div key={i} className="flex-1 px-12 py-8 flex flex-col items-center lg:items-start group transition-all duration-500 rounded-[30px] hover:bg-sky-50/50">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-black text-[#272D6D] group-hover:text-[#F26341] transition-colors tracking-tighter">{stat.value}</span>
                  <span className="text-[10px] font-bold text-sky-600 uppercase tracking-[0.2em]">{stat.desc}</span>
                </div>
                <div className="text-[10px] font-black text-[#F26341] uppercase tracking-[0.3em] mt-1">{stat.label}</div>
              </div>
            ))}
            <div className="flex-none px-12 py-8 flex items-center justify-center">
               <button className="group flex items-center gap-4 px-10 py-4 bg-[#272D6D] hover:bg-[#F26341] text-white rounded-full transition-all duration-500 shadow-xl shadow-sky-900/20 active:scale-95">
                  <span className="text-[11px] font-black uppercase tracking-[0.2em]">Book FTL Now</span>
                  <div className="w-8 h-[1px] bg-white/30 group-hover:w-12 transition-all" />
                  <ArrowRight size={16} />
               </button>
            </div>
          </div>
        </motion.div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-10">
          {capabilities.map((cap, index) => (
            <div
              key={index}
              className="relative group block p-2 h-full w-full"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <AnimatePresence>
                {hoveredIndex === index && (
                  <motion.span
                    className="absolute inset-0 h-full w-full bg-slate-800/[0.9] block rounded-[50px]"
                    layoutId="hoverBackground"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 0.15 } }}
                    exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </AnimatePresence>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="relative p-12 rounded-[40px] border border-slate-700/50 bg-[#1F2937]/95 backdrop-blur-sm transition-all duration-300 ease-out overflow-hidden h-full z-10 hover:-translate-y-2 hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)] hover:border-[#F26341]/50 hover:bg-[#111827]"
              >
                <div className="absolute inset-0 bg-white/[0.05] group-hover:bg-[#F26341]/[0.1] transition-colors duration-300 z-0" />
                <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-transparent to-[#F26341]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-white/10 text-white flex items-center justify-center mb-10 transition-all duration-300 group-hover:bg-[#F26341] group-hover:rotate-[360deg] group-hover:shadow-2xl group-hover:shadow-[#F26341]/40 border border-white/10">
                    <cap.icon size={28} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-black text-white mb-6 tracking-tight leading-[1.1]">{cap.title}</h3>
                  <p className="text-slate-400 font-medium leading-relaxed mb-10 text-[15px]">{cap.description}</p>
                  <div className="flex items-center gap-3 text-white opacity-50 group-hover:opacity-100 group-hover:text-[#F26341] transition-all duration-300">
                     <span className="text-[10px] font-black uppercase tracking-[0.3em]">Service Detail</span>
                     <div className="h-[1px] flex-grow bg-slate-700 group-hover:bg-[#F26341]/40 transition-colors" />
                     <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FtlCapabilities;
