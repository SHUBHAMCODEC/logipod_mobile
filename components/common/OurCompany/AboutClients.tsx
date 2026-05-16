"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

import Image from "next/image";

const clients = [
  { name: "Godrej", logo: "/images/asso_img/godrej logo.svg" },
  { name: "Polycab", logo: "/images/asso_img/polycab india limited logo.svg" },
  { name: "Uflex", logo: "/images/asso_img/uflex limited logo.svg" },
  { name: "Greenply", logo: "/images/asso_img/greenply industries limited logo.svg" },
  { name: "VIP Industries", logo: "/images/asso_img/vip logo.svg" },
  { name: "Prince Pipes", logo: "/images/asso_img/prince pipes & fittings ltd. logo.svg" },
  { name: "C&S Electric", logo: "/images/asso_img/c & s electric logo.svg" },
  { name: "Attero Recycling", logo: "/images/asso_img/attero recycling pvt ltd logo.svg" },
  { name: "Gold Plus Glass", logo: "/images/asso_img/gold plus float glass private limited logo.svg" },
  { name: "Hamilton Housewares", logo: "/images/asso_img/hamilton housewares pvt ltd logo.svg" },
  { name: "Utkarsh India", logo: "/images/asso_img/utkarsh india limited logo.svg" },
  { name: "VSL Logistics", logo: "/images/asso_img/vsl logistics logo.svg" },
];

export default function AboutClients() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % clients.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const displayedLogos = [
    clients[currentIndex % clients.length],
    clients[(currentIndex + 1) % clients.length],
    clients[(currentIndex + 2) % clients.length],
    clients[(currentIndex + 3) % clients.length],
  ];

  return (
    <section className="w-full bg-white py-32 overflow-hidden">
      <div className="max-w-[1536px] mx-auto px-8 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-start gap-4 mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#252B61] leading-tight">
            Trusted by Industry Leaders
          </h2>
          <p className="text-gray-500 max-w-2xl text-lg leading-relaxed">
            We partner with India's most ambitious enterprises to streamline their logistics and power their growth through technology-driven freight solutions.
          </p>
        </motion.div>

        {/* Clients grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10 md:gap-16">
          {clients.map((client, i) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="flex items-center justify-center transition-all duration-500 hover:scale-110 cursor-pointer p-2 group"
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={180}
                height={90}
                className="max-h-16 w-auto object-contain opacity-100 transition-opacity"
              />
            </motion.div>
          ))}
        </div>

        {/* Trust badge with cycling logos */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-20 flex flex-col sm:flex-row items-center justify-center gap-6 text-center bg-[#F8F9FF] py-8 rounded-3xl border border-gray-100 shadow-sm"
        >
          <div className="flex -space-x-3 items-center h-12">
            <AnimatePresence mode="popLayout">
              {displayedLogos.map((client, i) => (
                <motion.div
                  key={`${client.name}-${currentIndex}-${i}`}
                  initial={{ opacity: 0, scale: 0.8, x: -20 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.8, x: 20 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  whileHover={{
                    scale: 1.2,
                    zIndex: 50,
                    transition: { duration: 0.2 }
                  }}
                  className="group/logo relative w-12 h-12 rounded-full border-2 border-white shadow-lg bg-white flex items-center justify-center p-2 overflow-visible cursor-pointer transition-shadow duration-200"
                >
                  {/* Tooltip */}
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-[#252B61] text-white text-[10px] font-bold rounded-lg opacity-0 group-hover/logo:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-2xl z-[60]">
                    {client.name}
                    {/* Arrow */}
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#252B61] rotate-45" />
                  </div>

                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={48}
                    height={48}
                    className="object-contain p-0.5"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          <p className="text-gray-500 text-base font-medium">
            <span className="text-[#F36440] font-black text-lg">50+ enterprise clients</span> trust Logipod for their freight operations
          </p>
        </motion.div>
      </div>
    </section>
  );
}
