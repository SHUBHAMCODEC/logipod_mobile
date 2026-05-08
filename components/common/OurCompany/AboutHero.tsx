"use client";

import React from "react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Users, Award, Globe2 } from "lucide-react";

const stats = [
  { icon: Users, value: "50+", label: "Team Members" },
  { icon: Globe2, value: "20+", label: "Countries Served" },
  { icon: Award, value: "2018", label: "Founded" },
  { icon: MapPin, value: "10+", label: "Office Locations" },
];

export default function AboutHero() {
  return (
    <section className="relative w-full bg-white overflow-hidden pt-28 pb-0">
      {/* Soft background grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(37,43,97,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(37,43,97,0.04) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Gradient blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#F36440]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#252B61]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-2 text-sm text-gray-400 mb-8"
        >
          <Link href="/" className="hover:text-[#252B61] transition-colors font-medium">Home</Link>
          <span>/</span>
          <span className="text-[#252B61] font-semibold">About Us</span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — Text Content */}
          <div className="flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#252B61] leading-[1.1] tracking-tight">
                Powering India's
                <span className="block text-[#F36440]">Logistics Future</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-gray-600 text-lg leading-relaxed max-w-lg"
            >
              We started in 2018 with a vision to revolutionize India's supply chain. 
              Today, Logipod powers global freight operations with a team of 50+ 
              professionals, serving clients across 20+ countries with technology-driven 
              logistics solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/contact"
                className="group flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#252B61] text-white font-bold text-sm hover:bg-[#F36440] transition-all duration-300 hover:shadow-[0_8px_25px_rgba(242,101,68,0.3)] hover:-translate-y-0.5"
              >
                Partner With Us
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/our-team"
                className="flex items-center gap-2 px-7 py-3.5 rounded-full border-2 border-[#252B61]/20 text-[#252B61] font-bold text-sm hover:border-[#252B61] transition-all duration-300"
              >
                Meet the Team
              </Link>
            </motion.div>
          </div>

          {/* Right — Image Collage */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[420px] hidden lg:block"
          >
            {/* Primary image */}
            <div className="absolute top-0 right-0 w-[75%] h-[300px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/home/indian_trucks.webp"
                alt="Logipod logistics operations in India"
                fill
                className="object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#252B61]/10 to-transparent" />
            </div>

            {/* Secondary image */}
            <div className="absolute bottom-0 left-0 w-[50%] h-[220px] rounded-2xl overflow-hidden shadow-xl border-4 border-white">
              <Image
                src="/images/home/indian_team.webp"
                alt="Logipod team in India"
                fill
                className="object-cover"
              />
            </div>

            {/* Floating badge */}
            <div className="absolute top-4 left-4 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#F36440]/10 flex items-center justify-center">
                <Award className="w-5 h-5 text-[#F36440]" />
              </div>
              <div>
                <p className="text-xs text-gray-400 font-medium">Established</p>
                <p className="text-base font-black text-[#252B61]">Since 2018</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-0 border border-gray-100 rounded-2xl overflow-hidden shadow-sm"
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center justify-center py-8 px-4 bg-white hover:bg-[#252B61]/2 transition-colors group ${
                i < stats.length - 1 ? "border-r border-gray-100" : ""
              }`}
            >
              <stat.icon className="w-6 h-6 text-[#F36440] mb-3 group-hover:scale-110 transition-transform" />
              <span className="text-3xl font-black text-[#252B61]">{stat.value}</span>
              <span className="text-sm text-gray-500 font-medium mt-1">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
