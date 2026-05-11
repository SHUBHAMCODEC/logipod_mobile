"use client";

import React from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { X, ArrowRight, ChevronDown } from "lucide-react";

export const Hero_GetToKnow_Data = {
    id: "info",
    label: "GET TO KNOW US",
    renderIcon: (active: boolean) => {
        const color = active ? "#F26341" : "white";
        return (
            <svg width="60" height="60" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="12" y="16" width="40" height="32" rx="4" stroke={color} strokeWidth="2" />
                <circle cx="24" cy="30" r="6" stroke={color} strokeWidth="2" />
                <path d="M18 42C18 38 22 36 24 36C26 36 30 38 30 42" stroke={color} strokeWidth="2" strokeLinecap="round" />
                <path d="M38 28H46" stroke={color} strokeWidth="2" strokeLinecap="round" />
                <path d="M38 34H46" stroke={color} strokeWidth="2" strokeLinecap="round" />
            </svg>
        );
    }
};

interface HeroGetToKnowProps {
    onClose: () => void;
}

const Hero_getToKnow: React.FC<HeroGetToKnowProps> = ({ onClose }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            className="flex flex-col items-center relative w-full max-w-4xl pt-4 md:p-16 px-4 pb-12"
        >
            {/* =========================================
                MOBILE CLOSE BUTTON
                Edit this block to change Mobile (X) position
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

            <div className="text-center max-w-2xl px-4">
                <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white mb-4 md:mb-6 uppercase italic tracking-tighter leading-tight">
                    About <span className="text-[#F26341] not-italic">Logipod</span>
                </h2>
                <p className="text-white/60 text-base md:text-xl font-medium mb-8 md:mb-10 leading-relaxed">
                    We are a global leader in integrated logistics, providing end-to-end supply chain solutions
                    powered by advanced technology and a world-class network.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link href="/company/about">
                        <button className="group flex items-center gap-3 px-8 md:px-10 py-4 md:py-5 bg-[#F26341] text-white font-black text-xs md:text-sm uppercase tracking-widest rounded-full hover:bg-white hover:text-black transition-all transform active:scale-95 shadow-xl">
                            Learn More About Us <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </Link>
                    
                    <Link href="#why-choose-us" onClick={onClose}>
                        <button className="group flex items-center gap-3 px-8 md:px-10 py-4 md:py-5 bg-white/10 border border-white/20 text-white font-black text-xs md:text-sm uppercase tracking-widest rounded-full hover:bg-white hover:text-black transition-all transform active:scale-95">
                            Why Choose Us <ChevronDown className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-y-1 transition-transform" />
                        </button>
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

export default Hero_getToKnow;
