"use client";

import React from "react";
import { motion } from "motion/react";
import { X, Search } from "lucide-react";

export const Hero_Track_Data = {
    id: "track",
    label: "TRACK & TRACE",
    renderIcon: (active: boolean) => {
        const color = active ? "#F26341" : "white";
        return (
            <svg width="60" height="60" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="28" cy="28" r="20" stroke={color} strokeWidth="2" />
                <path d="M42 42L54 54" stroke={color} strokeWidth="2" strokeLinecap="round" />
                <path d="M20 28H36M28 20V36" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
            </svg>
        );
    }
};

interface HeroTrackProps {
    onClose: () => void;
}

const Hero_track_trace: React.FC<HeroTrackProps> = ({ onClose }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            className="flex flex-col items-center relative w-full max-w-2xl px-4"
        >
            <button
                onClick={onClose}
                className="absolute right-4 top-4 group p-2 md:p-2.5 rounded-full border border-white/20 bg-black/40 hover:bg-white hover:border-white hover:scale-110 transition-all duration-300 cursor-pointer shadow-xl backdrop-blur-md md:backdrop-blur-xl z-50"
            >
                <X className="w-5 h-5 text-white group-hover:text-black transition-colors" />
            </button>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight text-center leading-tight">Track Your Shipment</h2>
            <p className="text-white/60 mb-8 md:mb-10 text-base md:text-lg text-center">Enter your tracking number below to get real-time updates.</p>

            <div className="w-full relative">
                <input
                    type="text"
                    placeholder="ENTER TRACKING NUMBER (e.g. LOGI-12345678)"
                    className="w-full h-14 md:h-[60px] bg-black/40 border-2 border-white/20 rounded-xl px-6 md:px-8 pr-14 md:pr-16 text-white font-bold text-xs md:text-sm placeholder:text-white/30 focus:border-[#F26341] outline-none transition-all shadow-2xl backdrop-blur-md uppercase tracking-[0.1em] md:tracking-widest"
                />
                <button className="absolute right-2 md:right-3 top-1/2 -translate-y-1/2 w-10 h-10 md:w-11 md:h-11 bg-[#F26341] rounded-lg flex items-center justify-center hover:bg-[#ff7a5c] transition-colors cursor-pointer group shadow-lg">
                    <Search className="w-4 h-4 md:w-5 md:h-5 text-white group-hover:scale-110 transition-transform" />
                </button>
            </div>

            <div className="mt-6 md:mt-8 flex flex-wrap justify-center gap-4 md:gap-6">
                <span className="text-white/40 text-[10px] md:text-xs font-bold uppercase tracking-widest w-full text-center md:w-auto">Quick Tracking:</span>
                <button className="text-white/60 text-[10px] md:text-xs font-bold uppercase tracking-widest hover:text-[#F26341] transition-colors">Sea Freight</button>
                <button className="text-white/60 text-[10px] md:text-xs font-bold uppercase tracking-widest hover:text-[#F26341] transition-colors">Road Transport</button>
            </div>
        </motion.div>
    );
};

export default Hero_track_trace;
