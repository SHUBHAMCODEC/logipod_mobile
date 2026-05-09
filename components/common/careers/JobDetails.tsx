"use client";

import React from "react";
import { MapPin, Clock, Briefcase, ChevronLeft, Share2, Heart, CheckCircle2, ShieldCheck, Sparkles, Zap } from "lucide-react";
import Link from "next/link";
import { Variants, motion } from "motion/react";

interface JobDetailsProps {
  job: {
    title: string;
    location: string;
    type: string;
    experience: string;
    about: string;
    responsibilities: string[];
    requirements: string[];
    benefits: string[];
  };
}

const JobDetails = ({ job }: JobDetailsProps) => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.5, 
        ease: "easeOut" 
      }
    }
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-10 w-full min-w-0"
    >
      {/* Refined Job Header */}
      <motion.section variants={itemVariants} className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-gray-100 shadow-xl shadow-gray-500/5 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-2 h-full bg-[#F26341]" />
        
        <div className="relative z-10">
          <Link 
            href="/careers" 
            className="inline-flex items-center gap-2 text-[#272D6D] hover:text-[#F26341] transition-all font-bold text-xs uppercase tracking-[0.2em] mb-6 group/back"
          >
            <ChevronLeft className="w-4 h-4 group-hover/back:-translate-x-1 transition-transform" />
            Browse All Roles
          </Link>
          
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-1 bg-[#F26341] rounded-full" />
            <span className="text-[#F26341] font-black text-sm uppercase tracking-[0.4em]">Current Opening</span>
          </div>
          
          <div className="mb-8">
            <span className="text-[#272D6D]/40 font-black text-xs uppercase tracking-widest block mb-2">Job Role</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#272D6D] leading-[1.1] break-words tracking-tighter">
              {job.title || "Position at Logipod"}
            </h1>
          </div>

          <div className="flex flex-wrap gap-3 md:gap-4 w-full">
            {[
              { icon: MapPin, text: job.location },
              { icon: Briefcase, text: `${job.experience} Yrs Exp` },
              { icon: Clock, text: job.type }
            ].map((item, i) => (
              <div key={i} className="inline-flex items-center gap-2.5 px-5 py-3 rounded-2xl bg-gray-50 border border-gray-100 text-gray-700 font-black text-xs md:text-sm whitespace-nowrap">
                <item.icon className="w-4 h-4 text-[#F26341] shrink-0" />
                {item.text}
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* About the Role */}
      <motion.section variants={itemVariants} className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-gray-100 shadow-xl shadow-gray-500/5 overflow-hidden">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 rounded-2xl bg-[#272D6D] flex items-center justify-center text-white shadow-lg shadow-[#272D6D]/20 shrink-0">
            <Sparkles className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-extrabold text-[#272D6D]">About the Position</h2>
        </div>
        <p className="text-gray-600 text-lg leading-relaxed font-medium break-words">
          {job.about || "Explore this exciting opportunity at Logipod and help us redefine the future of logistics infrastructure."}
        </p>
      </motion.section>

      {/* Grid for Specifics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Responsibilities */}
        <motion.section variants={itemVariants} className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-gray-100 shadow-xl shadow-gray-500/5 overflow-hidden">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-2xl bg-[#F26341] flex items-center justify-center text-white shadow-lg shadow-[#F26341]/20 shrink-0">
              <Zap className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-extrabold text-[#272D6D]">Responsibilities</h2>
          </div>
          <ul className="space-y-4">
            {job.responsibilities?.map((item, index) => (
              <li key={index} className="flex gap-4 p-5 rounded-2xl bg-gray-50/50 hover:bg-gray-50 transition-all border border-transparent hover:border-gray-200 group">
                <div className="mt-1 w-2 h-2 rounded-full bg-[#F26341] shrink-0" />
                <span className="text-gray-600 font-bold text-sm leading-relaxed break-words">{item}</span>
              </li>
            ))}
          </ul>
        </motion.section>

        {/* Requirements */}
        <motion.section variants={itemVariants} className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-gray-100 shadow-xl shadow-gray-500/5 overflow-hidden">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-2xl bg-[#272D6D] flex items-center justify-center text-white shadow-lg shadow-[#272D6D]/20 shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-extrabold text-[#272D6D]">Requirements</h2>
          </div>
          <ul className="space-y-4">
            {job.requirements?.map((item, index) => (
              <li key={index} className="flex gap-4 p-5 rounded-2xl bg-gray-50/50 hover:bg-gray-50 transition-all border border-transparent hover:border-gray-200 group">
                <CheckCircle2 className="w-5 h-5 text-[#272D6D] shrink-0" />
                <span className="text-gray-600 font-bold text-sm leading-relaxed break-words">{item}</span>
              </li>
            ))}
          </ul>
        </motion.section>
      </div>

      {/* Perks & Benefits */}
      <motion.section variants={itemVariants} className="bg-[#272D6D] p-10 md:p-14 rounded-[2.5rem] text-white relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-3xl font-black mb-10 flex items-center gap-4">
            <Heart className="w-8 h-8 text-[#F26341]" />
            Perks & Benefits
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {job.benefits?.map((benefit, index) => (
              <div key={index} className="flex items-center gap-4 bg-white/5 p-6 rounded-3xl border border-white/10 backdrop-blur-sm group hover:bg-white/10 transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#F26341] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-white" />
                </div>
                <span className="font-extrabold text-sm tracking-wide break-words">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#F26341]/20 blur-[100px] -mr-48 -mt-48" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 blur-[80px] -ml-32 -mb-32" />
      </motion.section>
    </motion.div>
  );
};

export default JobDetails;
