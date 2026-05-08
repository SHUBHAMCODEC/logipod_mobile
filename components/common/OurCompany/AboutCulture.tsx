"use client";

import React from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { Heart } from "lucide-react";

import cultureData from "@/data/culture.json";

const cultureMemories = cultureData.map((item, i) => ({
  id: item.id,
  title: item.occasionName,
  image: item.image,
  note: [
    "Light, colors, and lots of sweets! 🪔",
    "Colors of joy and togetherness! 🎨",
    "Celebrating with family and friends! ✨",
    "The most wonderful time of the year! 🎄",
    "Dance, music, and divine energy! 💃",
  ][i % 5],
  rotation: i % 2 === 0 ? -3 - (i % 2) : 2 + (i % 3),
  size: ["large", "medium", "small", "medium", "large"][i % 5],
}));


export default function AboutCulture() {
  return (
    <section className="w-full bg-[#0B0D17] py-32 overflow-hidden relative min-h-screen flex items-center">
      {/* Dynamic Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,_#F36440_0%,_transparent_50%)]" />
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,_#252B61_0%,_transparent_50%)]" />
      </div>


      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Content */}
          <div className="text-left">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#F36440] flex items-center justify-center shadow-[0_0_20px_rgba(242,101,68,0.5)]">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <span className="text-[#F36440] font-black uppercase tracking-widest text-sm">Deep Dive in Fun</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-6xl md:text-8xl font-black text-white leading-none mb-8"
            >
              More Than <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F36440] to-[#ff9b7a]">Just Work.</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-white/60 text-xl max-w-lg leading-relaxed mb-12"
            >
              We've created a playground where innovation meets celebration. From midnight releases to afternoon cricket matches, our culture is the fuel behind our logistics engine.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex gap-4"
            >
              <div className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md md:backdrop-blur-xl">
                <p className="text-4xl font-black text-white mb-1">12+</p>
                <p className="text-white/40 text-xs font-bold uppercase tracking-widest">Festivals Yearly</p>
              </div>
              <div className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md md:backdrop-blur-xl">
                <p className="text-4xl font-black text-[#F36440] mb-1">∞ </p>
                <p className="text-white/40 text-xs font-bold uppercase tracking-widest">Memories Built</p>
              </div>
            </motion.div>
          </div>

          {/* Right — Interactive Memory Wall */}
          <div className="relative h-[600px] flex items-center justify-center">
            {cultureMemories.map((mem, i) => (
              <motion.div
                key={mem.id}
                drag
                dragConstraints={{ left: -300, right: 300, top: -300, bottom: 300 }}
                dragElastic={0.1}
                dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
                whileDrag={{ scale: 1.1, rotate: 0, zIndex: 100 }}
                initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
                whileInView={{ opacity: 1, scale: 1, rotate: mem.rotation }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: i * 0.15,
                  type: "spring",
                  bounce: 0.4
                }}
                whileHover={{ 
                  scale: 1.05, 
                  rotate: 0, 
                  zIndex: 50,
                  transition: { duration: 0.2 }
                }}
                className={`absolute rounded-2xl overflow-hidden bg-white p-3 shadow-2xl cursor-grab active:cursor-grabbing
                  ${mem.size === 'large' ? 'w-80 h-96 z-10' : ''}
                  ${mem.size === 'medium' ? 'w-64 h-80 z-20' : ''}
                  ${mem.size === 'small' ? 'w-48 h-60 z-30' : ''}
                `}
                style={{
                  top: i === 0 ? '0%' : i === 1 ? '40%' : i === 2 ? '10%' : '50%',
                  left: i === 0 ? '0%' : i === 1 ? '50%' : i === 2 ? '50%' : '10%',
                }}
              >
                <div className="relative w-full h-[80%] rounded-xl overflow-hidden mb-3 pointer-events-none">
                  <Image
                    src={mem.image}
                    alt={mem.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="px-2 pointer-events-none">
                  <p className="text-gray-400 text-[10px] font-bold uppercase mb-1">{mem.title}</p>
                  <p className="text-[#252B61] text-sm font-medium italic font-serif">"{mem.note}"</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>


    </section>
  );
}
