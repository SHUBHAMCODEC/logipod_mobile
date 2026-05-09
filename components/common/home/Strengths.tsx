"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";

export default function Strengths() {
    const [expandedIndex, setExpandedIndex] = useState(0);

    const strengths = [
        {
            title: "Not Just Logistics - A Platform",
            description: "We don't just move goods, we manage entire supply chains.",
            image: "/images/home/ind_logis21.webp"
        },
        {
            title: "Complete Visibility",
            description: "End-to-end tracking and real-time data insights at your fingertips.",
            image: "/images/home/mer_01.webp"
        },
        {
            title: "Built for Scale",
            description: "Robust infrastructure designed to grow alongside your business seamlessly.",
            image: "/images/home/indian_tr1.webp"
        },
        {
            title: "Automation Over Manual Operations",
            description: "AI-driven decision making replaces guesswork with precision.",
            image: "/images/home/ind_logis24.webp"
        }
    ];

    return (
        <section className="w-full py-32 bg-white relative overflow-hidden">
            {/* Soft Ambient Background */}
            <div className="absolute top-0 right-0 w-[50%] h-[100%] bg-gradient-to-l from-[#f56243]/[0.02] to-transparent pointer-events-none z-0" />
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#f56243]/[0.04] rounded-full blur-[100px] pointer-events-none z-0" />

            <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-12 lg:gap-24">

                {/* Left Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full lg:w-[35%] flex flex-col"
                >
                    <div className="w-12 h-1 bg-[#f56243] mb-8 rounded-full shadow-[0_0_10px_rgba(245,98,67,0.5)]" />
                    <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-[#111111] mb-8 leading-tight tracking-tight">
                        Why Logipod <span className="text-[#f56243]">Wins</span>
                    </h2>
                    <p className="text-lg md:text-xl text-[#111111]/70 font-medium leading-relaxed">
                        With a growing global network and strong domestic coverage, Logipod enables seamless movement across regions, connecting businesses to new markets with confidence.
                    </p>
                </motion.div>

                {/* Right Accordion Gallery */}
                <div className="w-full lg:w-[65%] h-[700px] lg:h-[600px] flex flex-col lg:flex-row gap-3 md:gap-4 perspective-1000">
                    {strengths.map((item, index) => {
                        const isExpanded = expandedIndex === index;

                        return (
                            <motion.div
                                key={index}
                                layout
                                onHoverStart={() => setExpandedIndex(index)}
                                onClick={() => setExpandedIndex(index)}
                                initial={{ borderRadius: 16 }}
                                animate={{
                                    flex: isExpanded ? "3.98 1 0%" : "1.9 1 0%"
                                }}
                                transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
                                className={`relative h-full w-full rounded-2xl overflow-hidden cursor-pointer group will-change-transform transform-gpu shrink-0 ${isExpanded
                                    ? 'shadow-[0_20px_50px_rgba(245,98,67,0.3)] border border-[#f56243]/30 z-20'
                                    : 'shadow-lg border border-transparent hover:border-[#f56243]/20 z-10'
                                    }`}
                            >
                                {/* Background Image */}
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-110 origin-center"
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                />

                                {/* Gradient Overlays */}
                                <div className={`absolute inset-0 bg-gradient-to-t from-[#0A0A14] via-[#0A0A14]/50 to-transparent transition-opacity duration-500 ${isExpanded ? 'opacity-90' : 'opacity-80 group-hover:opacity-90'}`} />
                                <div className={`absolute inset-0 bg-[#f56243]/20 mix-blend-overlay transition-opacity duration-500 ${isExpanded ? 'opacity-100' : 'opacity-0 group-hover:opacity-70'}`} />

                                {/* Glare Effect for gaming vibe */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: isExpanded ? 1 : 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1)_0%,transparent_50%)] mix-blend-overlay pointer-events-none"
                                />

                                {/* Content Overlay */}
                                <div className="absolute inset-0 p-4 md:p-8 flex flex-col justify-end z-10">
                                    <motion.div layout="position" className="relative w-full h-full flex flex-col justify-end">
                                        <motion.div layout="position" className="w-8 h-1 bg-[#f56243] mb-4 rounded-full shadow-[0_0_10px_rgba(245,98,67,0.8)]" />

                                        <motion.h3
                                            layout="position"
                                            className={`font-extrabold text-white leading-tight tracking-wide transition-all duration-300 ${isExpanded
                                                ? 'text-xl sm:text-2xl md:text-3xl lg:text-[2rem] drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]'
                                                : 'text-sm sm:text-lg md:text-xl break-words whitespace-normal'
                                                }`}
                                            style={{
                                                wordBreak: isExpanded ? 'normal' : 'break-word',
                                                hyphens: isExpanded ? 'none' : 'auto'
                                            }}
                                        >
                                            {item.title}
                                        </motion.h3>

                                        <AnimatePresence mode="popLayout">
                                            {isExpanded && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                                                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                                    exit={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                                                    transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
                                                    className="overflow-hidden"
                                                >
                                                    <p className="text-white/80 mt-3 text-sm md:text-[17px] font-medium leading-relaxed max-w-md drop-shadow-lg">
                                                        {item.description}
                                                    </p>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
