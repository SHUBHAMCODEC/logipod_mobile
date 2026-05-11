"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { MoveRight } from "lucide-react";
import { NoiseBackground } from "@/components/ui/noise-background";
import { motion, AnimatePresence } from "motion/react";

import dynamic from "next/dynamic";

// Dynamically import sub-components to improve performance
const Hero_Business = dynamic(() => import("./Hero_Business"), { ssr: false });
const Hero_track_trace = dynamic(() => import("./Hero_track&trace"), { ssr: false });
const Hero_services = dynamic(() => import("./Hero_services"), { ssr: false });
const Hero_GetToKnow = dynamic(() => import("./Hero_getToKnow"), { ssr: false });
const Hero_Job = dynamic(() => import("./Hero_job"), { ssr: false });

// Import data statically as it's small
import { Hero_Business_Data } from "./Hero_Business";
import { Hero_Track_Data } from "./Hero_track&trace";
import { Hero_Services_Data } from "./Hero_services";
import { Hero_GetToKnow_Data } from "./Hero_getToKnow";
import { Hero_Job_Data } from "./Hero_job";

type Section = "none" | "business" | "track" | "services" | "info" | "jobs";

const Hero = () => {
    const [activeSection, setActiveSection] = useState<Section>("none");
    const [hoveredSection, setHoveredSection] = useState<Section>("none");
    const [currentBg, setCurrentBg] = useState(0);
    const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);

    const handleMouseEnter = (id: Section) => {
        if (hoverTimeout) clearTimeout(hoverTimeout);
        const timeout = setTimeout(() => {
            setHoveredSection(id);
        }, 250); // 250ms delay to prevent instant jarring flashes
        setHoverTimeout(timeout);
    };

    const handleMouseLeave = () => {
        if (hoverTimeout) clearTimeout(hoverTimeout);
        setHoveredSection("none");
    };

    const bgImages = [
        "/hero-bg.png",
        "/images/home/ind_high.webp",
        "/images/home/indian_tr2.webp",
        "/images/home/indian_tr1.webp",
        "/images/home/container-ship.webp",

    ];

    const sectionBgs: Record<Section, string> = {
        none: "", // Handled by cycling bgImages
        business: "/images/home/hero-bridge.webp",
        track: "/images/home/ind_logis21.webp",
        services: "/images/home/ind_logis26.webp",
        info: "/images/home/ind_logis24.webp",
        jobs: "/images/home/getToKnow.webp",
    };

    const getActiveBg = () => {
        const active = activeSection !== "none" ? activeSection : hoveredSection;
        if (active === "none") return bgImages[currentBg];
        return sectionBgs[active];
    };

    const activeBg = getActiveBg();
    const isInteractionActive = activeSection !== "none" || hoveredSection !== "none";

    useEffect(() => {
        if (isInteractionActive) return;

        const timer = setInterval(() => {
            setCurrentBg((prev) => (prev + 1) % bgImages.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [bgImages.length, isInteractionActive]);

    const bottomLinks = [
        Hero_Business_Data,
        Hero_Track_Data,
        Hero_Services_Data,
        Hero_GetToKnow_Data,
        Hero_Job_Data,

    ];

    return (
        <div className="relative h-screen sm:h-[100dvh] w-full flex flex-col items-center justify-between overflow-hidden">
            {/* Background Layer */}
            <div className="absolute inset-0 z-0 bg-black overflow-hidden pointer-events-none">
                <div className="absolute inset-0">
                    <Image
                        src={isInteractionActive ? activeBg : bgImages[(currentBg - 1 + bgImages.length) % bgImages.length]}
                        alt="Background base"
                        fill
                        sizes="100vw"
                        quality={100}
                        className="object-cover object-center opacity-50"
                    />
                </div>

                <AnimatePresence initial={false} mode="wait">
                    <motion.div
                        key={isInteractionActive ? activeBg : bgImages[currentBg]}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ opacity: { duration: 1, ease: "easeInOut" } }}
                        className="absolute inset-0"
                    >
                        <motion.div
                            initial={{ scale: 1.1 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: isInteractionActive ? 1.5 : 8, ease: "easeOut" }}
                            className="absolute inset-0"
                        >
                            <Image
                                src={isInteractionActive ? activeBg : bgImages[currentBg]}
                                alt="Logistics background"
                                fill
                                sizes="100vw"
                                quality={100}
                                className="object-cover object-center"
                                priority
                            />
                        </motion.div>
                    </motion.div>
                </AnimatePresence>

                <div className={`absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80 z-[1] transition-opacity duration-1000 ${isInteractionActive ? 'opacity-90' : 'opacity-100'}`} />
            </div>

            {/* Navbar Safe Space - Increased to prevent overlaps with the new centered navbar layout */}
            <div className="h-[70px] md:h-[90px] lg:h-[100px] shrink-0 pointer-events-none" />

            {/* Main Center Container - Relative for predictable flow */}
            <div className="relative z-20 flex-1 w-full max-w-7xl mx-auto px-4 md:px-8 flex flex-col justify-center">
                <AnimatePresence mode="wait">
                    {activeSection === "none" && hoveredSection === "none" ? (
                        <motion.div
                            key="default-content"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                            transition={{ duration: 0.6 }}
                            className="flex flex-col items-center justify-center text-center px-4 md:px-8 mt-[-20px] sm:mt-0"
                        >
                            <motion.h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4 sm:mb-6 leading-[1.1] tracking-tight md:tracking-tighter">
                                {"Move Anything. Anywhere. With Total Control.".split(" ").map((word, i) => (
                                    <motion.span
                                        key={i}
                                        initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                        transition={{
                                            duration: 0.8,
                                            delay: 0.2 + (i * 0.1),
                                            ease: [0.2, 0.65, 0.3, 0.9] as const
                                        }}
                                        className={`inline-block mr-[0.2em] ${word === "Anywhere." ? "text-[#F26341]" : ""}`}
                                    >
                                        {word}
                                        {i === 1 ? <br className="hidden md:block" /> : null}
                                    </motion.span>
                                ))}
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, filter: "blur(12px)", y: 20 }}
                                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                                transition={{ duration: 1.5, delay: 1.2, ease: "easeOut" }}
                                className="text-sm sm:text-base md:text-lg lg:text-xl text-white/80 max-w-3xl mb-8 sm:mb-10 leading-relaxed font-light tracking-wide text-balance px-4 md:px-0"
                            >
                                Logipod is a unified logistics platform powering FTL, Cross-border, and fulfillment —
                                with real-time visibility, intelligent routing, and scalable infrastructure.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.8, duration: 0.8 }}
                                whileHover={{ scale: 1.02, y: -5 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <NoiseBackground containerClassName="w-fit p-[2px] rounded-full mx-auto bg-transparent border-none shadow-none" gradientColors={["rgb(242, 99, 65)", "rgb(39, 45, 109)", "rgb(255, 140, 100)"]}>
                                    <Link href="/contact" className="flex items-center gap-3 md:gap-4 px-8 md:px-12 py-4 md:py-5 bg-[#121212] border border-white/10 hover:bg-[#1a1a1a] text-white text-base md:text-lg font-bold rounded-full transition-all shadow-2xl cursor-pointer group">
                                        Request a Quote <MoveRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-2 transition-transform" />
                                    </Link>
                                </NoiseBackground>
                            </motion.div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="interaction-content"
                            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            exit={{ opacity: 0, y: -20, filter: "blur(10px)", transition: { duration: 0.3 } }}
                            transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] as const }}
                            className="absolute inset-0 flex flex-col items-center px-2 sm:px-4"
                        >
                            <div className="w-full h-full overflow-y-auto lg:overflow-visible custom-scrollbar flex flex-col items-center pt-6 pb-32 md:pb-24 lg:pb-0 lg:pt-0">
                                <div className="w-full my-auto flex flex-col items-center justify-center">
                                    {/* Prioritize rendering based on the active or hovered section state to maintain exclusivity */}
                                    {(() => {
                                        const displaySection = activeSection !== "none" ? activeSection : hoveredSection;
                                        switch (displaySection) {
                                            case "business":
                                                return <Hero_Business onClose={() => { setActiveSection("none"); setHoveredSection("none"); }} />;
                                            case "track":
                                                return <Hero_track_trace onClose={() => { setActiveSection("none"); setHoveredSection("none"); }} />;
                                            case "services":
                                                return <Hero_services onClose={() => { setActiveSection("none"); setHoveredSection("none"); }} />;
                                            case "info":
                                                return <Hero_GetToKnow onClose={() => { setActiveSection("none"); setHoveredSection("none"); }} />;
                                            case "jobs":
                                                return <Hero_Job onClose={() => { setActiveSection("none"); setHoveredSection("none"); }} />;
                                            default:
                                                return null;
                                        }
                                    })()}
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* =========================================
                DESKTOP / PC BOTTOM DOCK
                Edit this block to change PC layout only
            ========================================= */}
            <div className="hidden md:block relative z-30 w-full h-[90px] px-12 shrink-0">
                <div className="max-w-[1400px] mx-auto h-full flex flex-nowrap overflow-visible justify-center items-end gap-24 border-t border-white/10 pb-4 px-0">
                    {bottomLinks.map((item) => {
                        const isActive = activeSection === item.id || hoveredSection === item.id;

                        return (
                            <motion.div
                                key={`desktop-${item.id}`}
                                onMouseEnter={() => handleMouseEnter(item.id as Section)}
                                onMouseLeave={handleMouseLeave}
                                onClick={() => setActiveSection(item.id as Section)}
                                whileHover={{ y: -6 }}
                                className="relative group flex flex-col items-center gap-5 cursor-pointer shrink-0 py-2"
                            >
                                <motion.div
                                    animate={{
                                        scale: isActive ? 1.2 : 0.9,
                                        y: isActive ? -6 : 0
                                    }}
                                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                                    className={`relative z-10 transition-all scale-100 ${isActive ? 'text-[#F26341]' : 'text-white/60 group-hover:text-white/90'}`}
                                >
                                    {item.renderIcon(isActive)}
                                    {isActive && (
                                        <motion.div
                                            layoutId="icon-glow-desktop"
                                            className="absolute inset-0 bg-[#F26341]/30 blur-2xl rounded-full -z-10"
                                        />
                                    )}
                                </motion.div>

                                <span className={`uppercase text-[12px] font-bold tracking-[0.15em] transition-all duration-300 ${isActive ? 'text-white translate-y-1' : 'text-white/50 group-hover:text-white'}`}>
                                    {item.label}
                                </span>

                                {isActive && (
                                    <motion.div
                                        layoutId="active-indicator-desktop"
                                        className="absolute -bottom-5 w-16 h-[3px] bg-[#F26341] rounded-full shadow-[0_0_20px_rgba(242,99,65,0.9)]"
                                    />
                                )}
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {/* =========================================
                MOBILE BOTTOM DOCK
                Edit this block to change Mobile layout only
            ========================================= */}
            <div className="block md:hidden absolute bottom-[120px] left-0 right-0 z-30 w-full h-[100px] pb-3 px-4">
                <div className="max-w-[1400px] mx-auto h-full flex flex-nowrap overflow-x-auto custom-scrollbar justify-start items-center gap-10 sm:gap-14 border-t border-white/10 pt-4 px-2">
                    {bottomLinks.map((item) => {
                        const isActive = activeSection === item.id || hoveredSection === item.id;

                        return (
                            <motion.div
                                key={`mobile-${item.id}`}
                                onMouseEnter={() => handleMouseEnter(item.id as Section)}
                                onMouseLeave={handleMouseLeave}
                                onClick={() => setActiveSection(item.id as Section)}
                                className="relative flex flex-col items-center gap-3 cursor-pointer shrink-0 py-2"
                            >
                                <motion.div
                                    animate={{
                                        scale: isActive ? 1.2 : 0.9,
                                        y: isActive ? -6 : 0
                                    }}
                                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                                    className={`relative z-10 transition-all scale-80 ${isActive ? 'text-[#F26341]' : 'text-white/60'}`}
                                >
                                    {item.renderIcon(isActive)}
                                    {isActive && (
                                        <motion.div
                                            layoutId="icon-glow-mobile"
                                            className="absolute inset-0 bg-[#F26341]/30 blur-2xl rounded-full -z-10"
                                        />
                                    )}
                                </motion.div>

                                <span className={`uppercase text-[10px] font-bold tracking-[0.15em] transition-all duration-300 ${isActive ? 'text-white translate-y-1' : 'text-white/50'}`}>
                                    {item.label}
                                </span>

                                {isActive && (
                                    <motion.div
                                        layoutId="active-indicator-mobile"
                                        className="absolute -bottom-3 w-10 h-[3px] bg-[#F26341] rounded-full shadow-[0_0_20px_rgba(242,99,65,0.9)]"
                                    />
                                )}
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Hero;
