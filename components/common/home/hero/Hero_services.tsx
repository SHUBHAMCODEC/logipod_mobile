"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { X, Ship, Plane, Truck, Warehouse, ArrowRight, ArrowLeft, ChevronRight } from "lucide-react";

export const Hero_Services_Data = {
  id: "services",
  label: "SERVICES",
  renderIcon: (active: boolean) => {
    const color = active ? "#F26341" : "white";
    return (
      <svg width="60" height="60" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="14" width="44" height="36" rx="4" stroke={color} strokeWidth="2" />
        <path d="M10 22H54" stroke={color} strokeWidth="2" />
        <circle cx="44" cy="40" r="6" stroke={color} strokeWidth="2" />
        <path d="M48 44L54 50" stroke={color} strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }
};

interface HeroServicesProps {
  onClose: () => void;
}

interface SubService {
  title: string;
  desc: string;
  status?: "available" | "coming-soon";
  path?: string;
}

interface ServiceItem {
  id: string;
  title: string;
  icon: React.ReactNode;
  desc: string;
  subServices: SubService[];
}

const Hero_services: React.FC<HeroServicesProps> = ({ onClose }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const services: ServiceItem[] = [
    {
      id: "ocean",
      title: "Ocean Freight",
      icon: <Ship className="w-6 h-6 text-[#F26341]" />,
      desc: "Global FCL & LCL shipping solutions.",
      subServices: [
        { title: "FCL (Full Container)", desc: "Maximum capacity for large shipments.", status: "available", path: "/Exim" },
        { title: "LCL (Shared Container)", desc: "Cost-effective for smaller loads.", status: "available", path: "/Exim" }
      ]
    },
    {
      id: "road",
      title: "Road Transport",
      icon: <Truck className="w-6 h-6 text-[#F26341]" />,
      desc: "Reliable FTL and LTL trucking services.",
      subServices: [
        { title: "FTL (Full Truck Load)", desc: "Dedicated transport for your goods.", status: "available", path: "/ftl" },
        { title: "PTL (Part Truck Load)", desc: "Shared space for efficiency.", status: "coming-soon" }
      ]
    },
    {
      id: "warehousing",
      title: "Warehousing",
      icon: <Warehouse className="w-6 h-6 text-[#F26341]" />,
      desc: "Smart storage and inventory management.",
      subServices: [
        { title: "Smart Storage", desc: "Automated inventory tracking.", status: "available", path: "/contact" },
        { title: "Last Mile Hub", desc: "Efficient urban distribution.", status: "available", path: "/contact" }
      ]
    },
  ];

  const viewVariants = {
    initial: (direction: number) => ({
      opacity: 0,
      x: direction > 0 ? 50 : -50,
      filter: "blur(10px)"
    }),
    animate: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }
    },
    exit: (direction: number) => ({
      opacity: 0,
      x: direction > 0 ? -50 : 50,
      filter: "blur(10px)",
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const }
    })
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      className="flex flex-col items-center relative w-full max-w-4xl px-2 sm:px-4 min-h-[400px] pt-4 sm:pt-16"
    >
      {/* =========================================
          MOBILE CLOSE BUTTON
          Edit this block to change Mobile (X) position
          Using fixed position so it never overlaps with card content
      ========================================= */}
      <div className="hidden absolute -top-12 right-4 z-[250]">
        <motion.button
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileTap={{ scale: 0.9 }}
          onClick={onClose}
          className="w-10 h-10 rounded-full border border-white/30 bg-black/50 text-white flex items-center justify-center backdrop-blur-md"
        >
          <X className="w-5 h-5" />
        </motion.button>
      </div>

      {/* =========================================
          PC / DESKTOP CLOSE BUTTON
          Edit this block to change PC (X) position
      ========================================= */}
      <div className="hidden md:block absolute top-4 right-4 z-[70]">
        <motion.button
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          onClick={onClose}
          className="group w-12 h-12 rounded-full border-2 border-white/40 bg-black/40 hover:bg-white hover:border-white hover:scale-110 transition-all duration-300 cursor-pointer flex items-center justify-center backdrop-blur-xl"
        >
          <X className="w-5 h-5 text-white group-hover:text-black transition-colors" />
        </motion.button>
      </div>

      <AnimatePresence mode="wait" custom={selectedService ? 1 : -1}>
        {!selectedService ? (
          <motion.div
            key="main-list"
            custom={1}
            variants={viewVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="w-full flex flex-col items-center"
          >
            <div className="text-center mb-6 md:mb-10 px-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight italic leading-none">
                Our <span className="text-[#F26341] not-italic">Services</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 w-full">
              {services.map((service, idx) => (
                <motion.div
                  key={service.id}
                  whileHover={{ y: -5, borderColor: "rgba(242, 99, 65, 0.4)" }}
                  onClick={() => setSelectedService(service)}
                  className="group p-4 md:p-6 rounded-xl md:rounded-2xl border-2 border-white/10 bg-black/70 transition-all duration-300 cursor-pointer relative flex items-center gap-4 md:gap-5 shadow-xl hover:shadow-[#F26341]/5"
                >
                  <div className="p-2.5 md:p-3.5 rounded-xl bg-white/5 group-hover:bg-[#F26341]/10 transition-colors duration-500 shrink-0">
                    <div className="scale-75 md:scale-100">{service.icon}</div>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-white font-bold text-base md:text-lg uppercase tracking-wide group-hover:text-[#F26341] transition-colors leading-none mb-1">
                      {service.title}
                    </h3>
                    <p className="text-white/40 text-[10px] md:text-xs font-medium line-clamp-1">
                      {service.desc}
                    </p>
                  </div>

                  <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-white/20 group-hover:text-[#F26341] group-hover:translate-x-1 transition-all" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="sub-list"
            custom={-1}
            variants={viewVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="w-full flex flex-col items-center"
          >
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full mb-6 md:mb-10">
              <button
                onClick={() => setSelectedService(null)}
                className="w-full sm:w-auto flex items-center justify-center p-3 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 text-white/60 hover:text-white transition-all cursor-pointer group"
              >
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                <span className="sm:hidden ml-2 font-bold uppercase text-xs tracking-widest">Back to Services</span>
              </button>
              <div className="flex items-center gap-3 md:gap-4">
                <div className="p-2 md:p-2.5 rounded-lg bg-[#F26341]/10 scale-90 md:scale-100">{selectedService.icon}</div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white uppercase tracking-tight italic leading-tight text-center sm:text-left">
                  {selectedService.title} <span className="text-[#F26341] not-italic">Types</span>
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3 md:gap-4 w-full px-2 sm:px-0">
              {selectedService.subServices.map((sub, idx) => {
                const Content = (
                  <motion.div
                    key={sub.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className={`group p-4 sm:p-6 md:p-8 rounded-xl md:rounded-2xl border-2 transition-all duration-300 relative flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-4
                      ${sub.status === "coming-soon" ? "border-white/10 bg-white/10 opacity-90 cursor-not-allowed shadow-inner" : "border-white/10 bg-black/70 hover:border-[#F26341]/40 cursor-pointer shadow-xl"}`}
                  >
                    <div className="flex flex-col gap-1">
                      <h3 className="text-white font-bold text-lg md:text-xl uppercase tracking-wide group-hover:text-[#F26341] transition-colors leading-tight">
                        {sub.title}
                      </h3>
                      <p className="text-white/40 text-xs md:text-sm font-medium">
                        {sub.desc}
                      </p>
                    </div>

                    {sub.status === "coming-soon" ? (
                      <span className="px-4 py-1.5 rounded-full bg-[#F26341]/20 text-[#F26341] text-[9px] md:text-[11px] font-black uppercase tracking-[0.2em] border border-[#F26341]/40 shadow-[0_0_15px_rgba(242,99,65,0.2)]">
                        Coming Soon
                      </span>
                    ) : (
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#F26341] transition-all duration-500">
                        <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-white/40 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                      </div>
                    )}

                    {sub.status !== "coming-soon" && (
                      <div className="absolute inset-0 bg-gradient-to-r from-[#F26341]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl md:rounded-2xl pointer-events-none" />
                    )}
                  </motion.div>
                );

                if (sub.status !== "coming-soon" && sub.path) {
                  return (
                    <Link key={sub.title} href={sub.path}>
                      {Content}
                    </Link>
                  );
                }

                return Content;
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Hero_services;
