"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const testimonials = [
    {
        company: "United Foods",
        name: "Director of Exports",
        content: "We have been working with Logipod for multiple shipments, and our experience has been consistently positive. Their team is highly supportive, especially when it comes to freight management, ensuring competitive rates and smooth coordination throughout the process.   Additionally, their documentation services are reliable and well-handled, which helps avoid delays and ensures hassle-free shipments. Overall, Logipod has proven to be a dependable forwarding partner, and we appreciate their professionalism and efficiency.",
        logo: "/images/asso_img/united_foods_logo.svg",
        rating: 5
    },
    {
        company: "Choksi Exports",
        name: "Global Trade Manager",
        content: "Handling global exports requires a partner who understands complex international trade compliance. Logipod is that partner for us, providing seamless support.",
        logo: "/images/asso_img/choksi_exports_logo.svg",
        rating: 5
    },
    {
        company: "Fivestar Dehydration",
        name: "Operations Lead",
        content: "The level of transparency and real-time oversight Logipod offers in EXIM is a game-changer. Tracking our industrial cargo across corridors gives us total peace of mind.",
        logo: "/images/asso_img/fivestar_dehydration_private_limited_logo.svg",
        rating: 5
    },
    {
        company: "Kore International",
        name: "Global Logistics Head",
        content: "Logipod's expertise in cross-border trade and their robust digital tools make them an invaluable partner for our global operations and customs management.",
        logo: "/images/asso_img/kore_international_logo.svg",
        rating: 5
    },
    {
        company: "Godrej",
        name: "Supply Chain Director",
        content: "Beyond FTL, Logipod has transformed our international shipping visibility. Their digital documentation handling saved us hundreds of man-hours last quarter.",
        logo: "/images/asso_img/godrej_logo.svg",
        rating: 5
    }
];

const TestimonialCard = ({ testimonial }: { testimonial: any }) => {
    return (
        <motion.div
            className="w-full h-full px-3 md:px-4 group"
            whileHover={{ scale: 1.02, y: -5, zIndex: 50 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
            <div className="relative h-full p-6 md:p-10 rounded-[2rem] bg-white/[0.03] border border-white/10 backdrop-blur-md md:backdrop-blur-xl flex flex-col transition-all duration-500 group-hover:bg-white/[0.08] group-hover:border-white/30 shadow-2xl">

                <div className="absolute top-6 right-8 md:top-8 md:right-10 text-[#F26341]/10">
                    <Quote size={32} className="md:w-12 md:h-12" strokeWidth={1.5} />
                </div>

                <div className="flex gap-1 mb-4 md:mb-6">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} size={10} className="md:w-3 md:h-3 fill-[#F26341] text-[#F26341]" />
                    ))}
                </div>

                <p className="text-white/80 text-sm md:text-base font-medium leading-relaxed mb-6 md:mb-8 italic">
                    "{testimonial.content}"
                </p>

                <div className="mt-auto flex items-center gap-4 md:gap-5">
                    <div className="relative w-16 h-10 md:w-24 md:h-14 overflow-hidden flex items-center justify-center shrink-0">
                        <Image
                            src={testimonial.logo}
                            alt={testimonial.company}
                            fill
                            className="object-contain"
                        />
                    </div>
                    <div className="flex-1 min-w-0">
                        <h4 className="text-white font-bold text-sm md:text-base tracking-tight leading-tight mb-0.5 truncate">
                            {testimonial.company}
                        </h4>
                        <p className="text-[#F26341] text-[9px] md:text-[10px] font-semibold uppercase tracking-widest opacity-80 truncate">
                            {testimonial.name}
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default function EximTestimonials() {
    const [visibleCards, setVisibleCards] = useState(3);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const timerRef = useRef<NodeJS.Timeout | null>(null);

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

    const handleManualAction = (action: () => void) => {
        setIsAutoPlaying(false);
        action();
        setTimeout(() => setIsAutoPlaying(true), 10000);
    };

    const extendedTestimonials = useMemo(() => {
        const startClones = testimonials.slice(0, visibleCards);
        const endClones = testimonials.slice(-visibleCards);
        return [...endClones, ...testimonials, ...startClones];
    }, [visibleCards]);

    const [virtualIndex, setVirtualIndex] = useState(visibleCards);

    useEffect(() => {
        setVirtualIndex(visibleCards + (virtualIndex % testimonials.length));
    }, [visibleCards]);

    const next = () => {
        if (isTransitioning) return;
        setVirtualIndex(prev => prev + 1);
    };

    const prev = () => {
        if (isTransitioning) return;
        setVirtualIndex(prev => prev - 1);
    };

    const handleAnimationComplete = () => {
        setIsTransitioning(false);
        if (virtualIndex >= testimonials.length + visibleCards) {
            setVirtualIndex(visibleCards);
        } else if (virtualIndex < visibleCards) {
            setVirtualIndex(testimonials.length + visibleCards - 1);
        }
    };

    useEffect(() => {
        if (isAutoPlaying) {
            timerRef.current = setInterval(next, 5000);
        }
        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, [isAutoPlaying, virtualIndex]);

    const currentRealIndex = useMemo(() => {
        let idx = virtualIndex - visibleCards;
        while (idx < 0) idx += testimonials.length;
        return idx % testimonials.length;
    }, [virtualIndex, visibleCards]);

    return (
        <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 bg-[#0A0A0A] overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-[#F26341]/[0.03] blur-[150px] rounded-full" />
                <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-[#F26341]/[0.03] blur-[150px] rounded-full" />
            </div>

            <div className="relative z-10 max-w-[1400px] mx-auto">
                {/* Header */}
                <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center text-center mb-8 md:mb-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="w-10 h-1 md:w-12 md:h-1 bg-[#F26341] rounded-full mb-6 md:mb-8"
                    />
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl sm:text-5xl md:text-6xl font-black text-white mb-4 md:mb-6 uppercase italic tracking-tighter leading-none"
                    >
                        Voices of <span className="text-[#F26341] not-italic">Success</span>
                    </motion.h2>
                </div>

                {/* Slider Container */}
                <div className="relative px-2 md:px-20">
                    <div className="overflow-hidden py-8 md:py-12">
                        <motion.div
                            className="flex"
                            animate={{
                                x: `-${virtualIndex * (100 / visibleCards)}%`,
                            }}
                            transition={isTransitioning ? { duration: 0 } : {
                                type: "spring",
                                stiffness: 200,
                                damping: 30
                            }}
                            onAnimationStart={() => setIsTransitioning(true)}
                            onAnimationComplete={handleAnimationComplete}
                        >
                            {extendedTestimonials.map((testimonial, idx) => (
                                <div
                                    key={idx}
                                    className="shrink-0 flex justify-center"
                                    style={{ width: `${100 / visibleCards}%` }}
                                >
                                    <TestimonialCard testimonial={testimonial} />
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Manual Controls */}
                    <div className="absolute top-1/2 -translate-y-1/2 left-2 md:left-4 z-30 flex">
                        <button
                            onClick={() => handleManualAction(prev)}
                            className="w-10 h-10 md:w-14 md:h-14 rounded-full border border-white/10 bg-white/10 md:bg-white/5 backdrop-blur-md md:backdrop-blur-xl flex items-center justify-center text-white hover:bg-[#F26341] hover:border-[#F26341] transition-all duration-300"
                        >
                            <ChevronLeft size={20} className="md:w-6 md:h-6" />
                        </button>
                    </div>
                    <div className="absolute top-1/2 -translate-y-1/2 right-2 md:right-4 z-30 flex">
                        <button
                            onClick={() => handleManualAction(next)}
                            className="w-10 h-10 md:w-14 md:h-14 rounded-full border border-white/10 bg-white/10 md:bg-white/5 backdrop-blur-md md:backdrop-blur-xl flex items-center justify-center text-white hover:bg-[#F26341] hover:border-[#F26341] transition-all duration-300"
                        >
                            <ChevronRight size={20} className="md:w-6 md:h-6" />
                        </button>
                    </div>

                    {/* Indicators */}
                    <div className="flex justify-center gap-2 mt-6 md:mt-10">
                        {testimonials.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => handleManualAction(() => setVirtualIndex(idx + visibleCards))}
                                className={`w-1 h-1 md:w-1.5 md:h-1.5 rounded-full transition-all duration-500 ${currentRealIndex === idx ? 'w-6 md:w-8 bg-[#F26341]' : 'bg-white/20 hover:bg-white/40'}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
