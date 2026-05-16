"use client";

import React, { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    company: "Godrej",
    name: "Supply Chain Director",
    content: "Logipod's FTL network gave us exactly what we needed — dedicated capacity, zero delays, and real-time tracking across our entire auto-parts supply chain.",
    logo: "/images/asso_img/godrej logo.svg",
    rating: 5
  },
  {
    company: "Polycab India",
    name: "Operations Head",
    content: "The level of precision and reliability Logipod offers in FTL is unmatched. Their commitment to 'invisible logistics' allows us to focus entirely on our core business.",
    logo: "/images/asso_img/polycab india limited logo.svg",
    rating: 5
  },
  {
    company: "Uflex",
    name: "Logistics Lead",
    content: "Switching to Logipod was the best decision for our pan-India distribution. Their FTL solutions are highly optimized, ensuring our products reach the market faster.",
    logo: "/images/asso_img/uflex limited logo.svg",
    rating: 5
  },
  {
    company: "Greenply",
    name: "Supply Chain Manager",
    content: "Their FTL network is robust and highly reliable. We've seen a significant reduction in transit times and improved delivery predictability across all our lanes.",
    logo: "/images/asso_img/greenply industries limited logo.svg",
    rating: 5
  },
  {
    company: "Prince Pipes",
    name: "Regional Head",
    content: "As a growing business, we needed an FTL partner that could scale with us. Logipod's flexible fleet and hyper-local network have been instrumental in our growth.",
    logo: "/images/asso_img/prince pipes & fittings ltd. logo.svg",
    rating: 5
  },
  {
    company: "VIP Industries",
    name: "VP Operations",
    content: "The speed and efficiency of their FTL solutions are phenomenal. We've seen a 25% reduction in shipping times since partnering with them for our primary lanes.",
    logo: "/images/asso_img/vip logo.svg",
    rating: 5
  },
  {
    company: "Asahi India Glass",
    name: "Strategic Operations Lead",
    content: "Logipod's specialized handling of fragile glass in FTL shipments is remarkable. Their fleet monitoring has practically eliminated in-transit breakage.",
    logo: "/images/asso_img/Asahi.svg",
    rating: 5
  },
  {
    company: "Attero Recycling",
    name: "Operations Manager",
    content: "Reliable FTL is the cornerstone of our operations. Logipod consistently delivers on their promises with professional execution and proactive communication.",
    logo: "/images/asso_img/attero recycling pvt ltd logo.svg",
    rating: 5
  },
  {
    company: "ASP",
    name: "Logistics Coordinator",
    content: "Their tech-driven approach to FTL has completely transformed our supply chain visibility. The real-time tracking is a massive advantage for our team.",
    logo: "/images/asso_img/ASP.svg",
    rating: 5
  },
  {
    company: "DB Cables",
    name: "Technical Director",
    content: "Efficient FTL logistics is vital for our distribution. Logipod's speed and handling quality ensure our products maintain their premium standard nationally.",
    logo: "/images/asso_img/db cables logo.svg",
    rating: 5
  }
];

const TestimonialCard = ({ testimonial, isActive }: { testimonial: any, isActive: boolean }) => {
    return (
        <motion.div 
            className="w-full h-full px-4 py-2"
            initial={{ opacity: 0.5, scale: 0.95 }}
            animate={{ 
                opacity: isActive ? 1 : 0.4, 
                scale: isActive ? 1 : 0.95,
                filter: isActive ? "blur(0px)" : "blur(1px)"
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
            <div className="relative h-full p-8 md:p-12 rounded-[2.5rem] bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 backdrop-blur-2xl flex flex-col transition-all duration-700 hover:border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden group">
                {/* Decorative Elements */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#F26341]/5 blur-3xl rounded-full transition-all duration-700 group-hover:bg-[#F26341]/10" />
                
                <div className="absolute top-8 right-10 text-[#F26341]/20 group-hover:text-[#F26341]/40 transition-colors duration-500">
                    <Quote size={48} strokeWidth={1} />
                </div>

                <div className="flex gap-1.5 mb-8">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} className="fill-[#F26341] text-[#F26341] drop-shadow-[0_0_8px_rgba(242,99,65,0.4)]" />
                    ))}
                </div>

                <p className="text-white/90 text-lg md:text-xl font-medium leading-[1.6] mb-10 relative z-10">
                    "{testimonial.content}"
                </p>

                <div className="mt-auto flex items-center gap-6">
                    <div className="relative w-20 h-12 md:w-28 md:h-16 overflow-hidden flex items-center justify-center shrink-0 bg-white/5 rounded-xl p-2 border border-white/5 group-hover:border-white/10 transition-colors">
                        <Image
                            src={testimonial.logo}
                            alt={testimonial.company}
                            fill
                            className="object-contain p-2 grayscale-0 brightness-100 opacity-100 md:grayscale md:brightness-200 md:opacity-80 group-hover:grayscale-0 group-hover:brightness-100 group-hover:opacity-100 transition-all duration-500"
                        />
                    </div>
                    <div className="flex-1 min-w-0">
                        <h4 className="text-white font-bold text-lg md:text-xl tracking-tight leading-tight mb-1 truncate">
                            {testimonial.company}
                        </h4>
                        <p className="text-[#F26341] text-xs font-bold uppercase tracking-[0.2em] opacity-90 truncate">
                            {testimonial.name}
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default function FtlTestimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleCards, setVisibleCards] = useState(3);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const containerRef = useRef<HTMLDivElement>(null);
    const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

    // Responsive visible cards
    useEffect(() => {
        const updateVisible = () => {
            const width = window.innerWidth;
            if (width < 768) setVisibleCards(1);
            else if (width < 1280) setVisibleCards(2);
            else setVisibleCards(3);
        };
        updateVisible();
        window.addEventListener('resize', updateVisible);
        return () => window.removeEventListener('resize', updateVisible);
    }, []);

    const next = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, []);

    const prev = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    }, []);

    // Auto-play logic
    useEffect(() => {
        if (isAutoPlaying) {
            autoPlayRef.current = setInterval(next, 5000);
        } else {
            if (autoPlayRef.current) clearInterval(autoPlayRef.current);
        }
        return () => {
            if (autoPlayRef.current) clearInterval(autoPlayRef.current);
        };
    }, [isAutoPlaying, next]);

    // Handle manual navigation pause
    const handleManualAction = (action: () => void) => {
        setIsAutoPlaying(false);
        action();
        // Resume autoplay after 10 seconds of inactivity
        setTimeout(() => setIsAutoPlaying(true), 10000);
    };

    // Infinite Loop helper: we triple the array to ensure we always have neighbors
    const displayTestimonials = useMemo(() => {
        return [...testimonials, ...testimonials, ...testimonials];
    }, []);

    // The "real" index in the tripled array
    const activeDisplayIndex = currentIndex + testimonials.length;

    // Fixed 7-dot pagination logic
    const renderDots = () => {
        const totalDots = 7;
        const dots = [];
        
        // We want the currentIndex to be reflected in these 7 dots
        // If there are 10 testimonials, we map 10 to 7.
        // However, a better approach for "fixed 7-dot" is a sliding window of the actual items.
        // But if they want exactly 7 dots, we can show the "current" dot and its neighbors.
        
        for (let i = 0; i < totalDots; i++) {
            // Find which dot represents which section, or just use a focus-based approach
            // For simplicity and aesthetic, let's make the dots represent the relative position
            const dotProgress = (currentIndex / (testimonials.length - 1)) * (totalDots - 1);
            const isNear = Math.abs(i - dotProgress) < 0.5;
            const isActive = Math.round(dotProgress) === i;

            dots.push(
                <button
                    key={i}
                    onClick={() => {
                        const targetIdx = Math.round((i / (totalDots - 1)) * (testimonials.length - 1));
                        handleManualAction(() => setCurrentIndex(targetIdx));
                    }}
                    className={`relative h-1.5 transition-all duration-500 rounded-full ${
                        isActive 
                        ? "w-10 bg-[#F26341]" 
                        : "w-2 bg-white/20 hover:bg-white/40"
                    }`}
                >
                    {isActive && (
                        <motion.div 
                            layoutId="activeDot"
                            className="absolute inset-0 bg-[#F26341] rounded-full shadow-[0_0_15px_rgba(242,99,65,0.6)]"
                        />
                    )}
                </button>
            );
        }
        return dots;
    };

    return (
        <section className="relative pt-24 pb-32 bg-[#050505] overflow-hidden">
            {/* Background Texture & Glow */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#F26341]/10 blur-[120px] rounded-full" />
                <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[#F26341]/5 blur-[150px] rounded-full" />
            </div>

            <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12">
                {/* Header */}
                <div className="max-w-4xl mb-16 md:mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-4 mb-6"
                    >
                        <div className="w-12 h-[2px] bg-[#F26341]" />
                        <span className="text-[#F26341] font-bold uppercase tracking-[0.3em] text-sm">Testimonials</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl sm:text-6xl md:text-8xl font-black text-white uppercase italic tracking-tighter leading-[0.9] mb-8"
                    >
                        Trusted by <br />
                        <span className="text-[#F26341] not-italic">Industry Titans</span>
                    </motion.h2>
                </div>

                {/* Carousel Area */}
                <div className="relative">
                    <div className="overflow-visible">
                        <motion.div 
                            className="flex"
                            animate={{
                                x: `calc(-${activeDisplayIndex * (100 / visibleCards)}% + ${(visibleCards > 1 ? (100 / visibleCards) * ((visibleCards - 1) / 2) : 0)}%)`,
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 150,
                                damping: 25,
                                mass: 0.8
                            }}
                        >
                            {displayTestimonials.map((testimonial, idx) => {
                                // A card is "active" if it's the one in the center (approximately)
                                const isRealActive = (idx % testimonials.length) === currentIndex;
                                return (
                                    <div 
                                        key={idx} 
                                        className="shrink-0 flex justify-center"
                                        style={{ width: `${100 / visibleCards}%` }}
                                    >
                                        <TestimonialCard 
                                            testimonial={testimonial} 
                                            isActive={isRealActive}
                                        />
                                    </div>
                                );
                            })}
                        </motion.div>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex items-center gap-6 mt-16 md:mt-24">
                        <div className="flex gap-4">
                            <button 
                                onClick={() => handleManualAction(prev)}
                                className="w-16 h-16 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md md:backdrop-blur-xl flex items-center justify-center text-white hover:bg-[#F26341] hover:border-[#F26341] hover:scale-110 active:scale-95 transition-all duration-300 group"
                            >
                                <ChevronLeft size={28} className="group-hover:-translate-x-1 transition-transform" />
                            </button>
                            <button 
                                onClick={() => handleManualAction(next)}
                                className="w-16 h-16 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md md:backdrop-blur-xl flex items-center justify-center text-white hover:bg-[#F26341] hover:border-[#F26341] hover:scale-110 active:scale-95 transition-all duration-300 group"
                            >
                                <ChevronRight size={28} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>

                        {/* 7-Dot Pagination */}
                        <div className="flex items-center gap-3 px-8 h-16 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md md:backdrop-blur-xl">
                            {renderDots()}
                        </div>

                        <div className="hidden md:block ml-auto">
                            <p className="text-white/40 font-mono text-sm tracking-widest uppercase">
                                <span className="text-white font-bold">{String(currentIndex + 1).padStart(2, '0')}</span>
                                <span className="mx-2">/</span>
                                {String(testimonials.length).padStart(2, '0')}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
