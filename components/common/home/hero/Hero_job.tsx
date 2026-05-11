"use client";

import React from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { X, Mail, ArrowRight } from "lucide-react";

export const Hero_Job_Data = {
    id: "jobs",
    label: "FIND YOUR JOB",
    renderIcon: (active: boolean) => {
        const color = active ? "#F26341" : "white";
        return (
            <svg width="60" height="60" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="28" cy="24" r="8" stroke={color} strokeWidth="2" />
                <path d="M16 44C16 38 22 34 28 34C34 34 40 38 40 44" stroke={color} strokeWidth="2" strokeLinecap="round" />
                <circle cx="44" cy="44" r="10" stroke={color} strokeWidth="2" fill={active ? "rgba(242, 99, 65, 0.2)" : "rgba(255,255,255,0.1)"} />
                <path d="M44 38V50M38 44H50" stroke={color} strokeWidth="2" strokeLinecap="round" />
            </svg>
        );
    }
};

interface HeroJobProps {
    onClose: () => void;
}

const Hero_job: React.FC<HeroJobProps> = ({ onClose }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            className="flex flex-col items-center relative w-full max-w-4xl px-6 md:px-5 pt-16 md:pt-20"
        >
            {/* =========================================
                MOBILE CLOSE BUTTON
                Edit this block to change Mobile (X) position
            ========================================= */}
            <div className="md:hidden absolute top-2 right-3 z-[70]">
                <motion.button
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    onClick={onClose}
                    className="w-10 h-10 rounded-full border-2 border-white/40 bg-black/40 hover:bg-white hover:border-white transition-all cursor-pointer flex items-center justify-center backdrop-blur-md"
                >
                    <X className="w-5 h-5 text-white transition-colors" />
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

            <div className="text-center max-w-2xl flex flex-col items-center px-4">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-[#F26341]/10 rounded-2xl md:rounded-3xl flex items-center justify-center mb-6 md:mb-8">
                    <Mail className="w-8 h-8 md:w-10 md:h-10 text-[#F26341]" />
                </div>

                <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white mb-4 md:mb-6 uppercase italic tracking-tighter leading-none">
                    Work With <span className="text-[#F26341] not-italic">Us</span>
                </h2>
                <p className="text-white/60 text-base md:text-xl font-medium mb-8 md:mb-10 leading-relaxed">
                    Interested in joining our team? You can connect with our HR department directly
                    by filling out our career inquiry form.
                </p>

                <Link href="/careers">
                    <button className="group flex items-center gap-3 px-8 md:px-10 py-4 md:py-5 bg-white text-black font-black text-xs md:text-sm uppercase tracking-widest rounded-full hover:bg-[#F26341] hover:text-white transition-all transform active:scale-95 shadow-xl">
                        Go To Careers <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                </Link>
            </div>
        </motion.div>
    );
};

export default Hero_job;
