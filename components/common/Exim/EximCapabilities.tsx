"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Ship, 
  FileCheck, 
  Zap, 
  Activity, 
  Globe, 
  Shield, 
  Check,
  ArrowRight
} from "lucide-react";

const capabilities = [
  {
    title: "End-to-End Freight Control",
    description: "Complete ownership across ocean, air, and land with seamless execution from origin to destination.",
    icon: Ship,
  },
  {
    title: "Zero-Error Documentation",
    description: "Fully compliant, pre-validated documentation ensuring zero delays and smooth customs processing.",
    icon: FileCheck,
  },
  {
    title: "Fast-Track Customs Clearance",
    description: "Accelerated approvals through expert handling and strong regulatory understanding.",
    icon: Zap,
  },
  {
    title: "Real-Time Operational Visibility",
    description: "Live tracking with complete shipment transparency and proactive status updates.",
    icon: Activity,
  },
  {
    title: "Global Trade Intelligence",
    description: "Strategic insights and compliance expertise for seamless international operations.",
    icon: Globe,
  },
  {
    title: "Secure & Insured Cargo Handling",
    description: "Advanced protection systems ensuring safety, integrity, and risk-free delivery.",
    icon: Shield,
  },
];

const EximCapabilities = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-32 bg-[#f8fafc] relative overflow-hidden">
      {/* Background Effect: Grid & World Map Layer */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 opacity-[0.02]" 
             style={{ backgroundImage: `radial-gradient(#272D6D 0.5px, transparent 0.5px)`, backgroundSize: '32px 32px' }} />
        
        <svg viewBox="0 0 1000 500" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.03] text-[#272D6D]" xmlns="http://www.w3.org/2000/svg">
          <path d="M150,150 Q200,100 250,150 T350,200 T450,150 T550,200 T750,150 T900,250" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="12,12" />
          <path d="M100,350 Q200,300 300,350 T500,400 T700,350 T850,450" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="12,12" />
        </svg>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header - Left Aligned */}
        <div className="text-left mb-20 max-w-4xl">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black text-[#272D6D] mb-8 tracking-tighter leading-[0.95]"
          >
            Built on Trust. <br />
            <span className="text-[#F26341]">Driven by Precision.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 text-xl md:text-2xl font-medium leading-relaxed max-w-2xl"
          >
            End-to-end EXIM solutions engineered for reliability, speed, and global scale.
          </motion.p>
        </div>

        {/* Refined Premium Trust Strip - Floating Insight Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mb-24 overflow-hidden rounded-[40px] bg-white/70 backdrop-blur-md md:backdrop-blur-xl shadow-[0_30px_60px_-15px_rgba(3,105,161,0.1)] transition-all duration-700 hover:shadow-[0_40px_80px_-15px_rgba(3,105,161,0.2)]"
        >
          {/* Subtle Sky Gradient Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-sky-50/50 via-white to-sky-50/50 pointer-events-none" />
          
          <div className="relative z-10 flex flex-wrap lg:flex-nowrap items-center py-4">
            {[
              { value: "1000+", label: "Deliveries", desc: "Global Scale" },
              { value: "50+", label: "Routes", desc: "Port Network" },
              { value: "24/7", label: "Operations", desc: "Live Support" }
            ].map((stat, i) => (
              <div key={i} className="flex-1 px-12 py-8 flex flex-col items-center lg:items-start group transition-all duration-500 rounded-[30px] hover:bg-sky-50/50">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-black text-[#272D6D] group-hover:text-[#F26341] transition-colors tracking-tighter">
                    {stat.value}
                  </span>
                  <span className="text-[10px] font-bold text-sky-600 uppercase tracking-[0.2em]">
                    {stat.desc}
                  </span>
                </div>
                <div className="text-[10px] font-black text-[#F26341] uppercase tracking-[0.3em] mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
            
            {/* Sleek CTA Button - Floating without separate bg */}
            <div className="flex-none px-12 py-8 flex items-center justify-center">
               <button className="group flex items-center gap-4 px-10 py-4 bg-[#272D6D] hover:bg-[#F26341] text-white rounded-full transition-all duration-500 shadow-xl shadow-sky-900/20 active:scale-95">
                  <span className="text-[11px] font-black uppercase tracking-[0.2em]">Partner Now</span>
                  <div className="w-8 h-[1px] bg-white/30 group-hover:w-12 transition-all" />
                  <ArrowRight size={16} />
               </button>
            </div>
          </div>
        </motion.div>

        {/* Capabilities Grid - All cards same size, 3x2 on desktop */}
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
                    animate={{
                      opacity: 1,
                      transition: { duration: 0.15 },
                    }}
                    exit={{
                      opacity: 0,
                      transition: { duration: 0.15, delay: 0.2 },
                    }}
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </AnimatePresence>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1] 
                }}
                className="relative p-12 rounded-[40px] border border-slate-700/50 bg-[#1F2937]/95 backdrop-blur-sm
                  transition-all duration-300 ease-out overflow-hidden h-full z-10
                  hover:-translate-y-2 hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)] hover:border-[#F26341]/50 hover:bg-[#111827]"
              >
                {/* Premium Light Color Overlay */}
                <div className="absolute inset-0 bg-white/[0.05] group-hover:bg-[#F26341]/[0.1] transition-colors duration-300 z-0" />
                <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-transparent to-[#F26341]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />
                
                {/* Premium Vector Illustration */}
                <div className="absolute -right-8 -bottom-8 opacity-[0.05] group-hover:opacity-[0.15] group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 ease-out z-0">
                  <svg width="240" height="240" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-slate-300">
                    <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="0.5" />
                    <circle cx="100" cy="100" r="60" stroke="currentColor" strokeWidth="0.5" />
                    <circle cx="100" cy="100" r="40" stroke="currentColor" strokeWidth="0.5" />
                    <path d="M100 20V180M20 100H180" stroke="currentColor" strokeWidth="0.5" />
                    <rect x="60" y="60" width="80" height="80" stroke="currentColor" strokeWidth="0.5" transform="rotate(45 100 100)" />
                  </svg>
                </div>

                {/* Content Wrapper to stay above overlay */}
                <div className="relative z-10">
                  {/* Icon Container */}
                  <div className="w-16 h-16 rounded-2xl bg-white/10 text-white flex items-center justify-center mb-10
                    transition-all duration-300 group-hover:bg-[#F26341] group-hover:rotate-[360deg] group-hover:shadow-2xl group-hover:shadow-[#F26341]/40 border border-white/10">
                    <cap.icon size={28} strokeWidth={1.5} />
                  </div>

                  <h3 className="text-2xl font-black text-white mb-6 tracking-tight leading-[1.1] transition-colors duration-300">
                    {cap.title}
                  </h3>

                  <p className="text-slate-400 font-medium leading-relaxed mb-10 text-[15px] transition-colors duration-300">
                    {cap.description}
                  </p>

                  {/* Micro-interaction Link */}
                  <div className="flex items-center gap-3 text-white opacity-50 group-hover:opacity-100 group-hover:text-[#F26341] transition-all duration-300">
                     <span className="text-[10px] font-black uppercase tracking-[0.3em]">Operational Detail</span>
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

export default EximCapabilities;
