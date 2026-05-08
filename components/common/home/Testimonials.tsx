"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const testimonials = [
    {
        name: "Supply Chain Director",
        company: "Godrej",
        content: "Logipod has completely transformed our supply chain visibility. Their tech-driven approach and real-time tracking have reduced our operational bottlenecks by 40% in just six months.",
        logo: "/images/asso_img/godrej logo.svg",
        rating: 5
    },
    {
        name: "Operations Head",
        company: "Polycab India",
        content: "The level of precision and reliability Logipod offers is unmatched. Their commitment to 'invisible logistics' allows us to focus entirely on our core business while they handle the complexities.",
        logo: "/images/asso_img/polycab india limited logo.svg",
        rating: 5
    },
    {
        name: "Logistics Lead",
        company: "Uflex",
        content: "Switching to Logipod was the best decision for our pan-India distribution. Their FTL and warehousing solutions are highly optimized, ensuring our products reach the market faster than ever.",
        logo: "/images/asso_img/uflex limited logo.svg",
        rating: 5
    },
    {
        name: "Supply Chain Manager",
        company: "Greenply",
        content: "International freight forwarding has never been smoother. Logipod's digital documentation and compliance management saved us hundreds of man-hours last quarter.",
        logo: "/images/asso_img/greenply industries limited logo.svg",
        rating: 5
    },
    {
        name: "Regional Head",
        company: "Prince Pipes",
        content: "As a growing business, we needed a logistics partner that could scale with us. Logipod's flexible warehousing and hyper-local delivery network have been instrumental in our growth.",
        logo: "/images/asso_img/prince pipes & fittings ltd. logo.svg",
        rating: 5
    },
    {
        name: "VP Operations",
        company: "VIP Industries",
        content: "The speed and efficiency of their cross-border solutions are phenomenal. We've seen a 25% reduction in shipping times and zero customs delays since partnering with them.",
        logo: "/images/asso_img/vip logo.svg",
        rating: 5
    },
    {
        name: "General Manager",
        company: "C&S Electric",
        content: "Their AI-driven route optimization is a game-changer. It's not just about moving cargo; it's about moving it smarter, faster, and more sustainably.",
        logo: "/images/asso_img/c & s electric logo.svg",
        rating: 5
    },
    {
        name: "Operations Manager",
        company: "Attero Recycling",
        content: "Specialized logistics requires extreme precision. Logipod's fleet and constant monitoring have ensured our sensitive materials reach destinations in perfect condition.",
        logo: "/images/asso_img/attero recycling pvt ltd logo.svg",
        rating: 5
    },
    {
        name: "Strategic Operations Lead",
        company: "Asahi India Glass",
        content: "Logipod's specialized handling of fragile glass cargo is remarkable. Their fleet monitoring and safe-transit protocols have practically eliminated in-transit breakage.",
        logo: "/images/asso_img/Asahi.svg",
        rating: 5
    },
    {
        name: "Logistics Coordinator",
        company: "ASP",
        content: "Reliability is the cornerstone of our operations. Logipod consistently delivers on their promises with professional execution and proactive communication.",
        logo: "/images/asso_img/ASP.svg",
        rating: 5
    },
    {
        name: "Supply Chain Head",
        company: "Andhitech",
        content: "The technological edge Logipod provides has given us a significant advantage in market responsiveness. Their platform is intuitive and powerful.",
        logo: "/images/asso_img/andhitech and hitech industries limited.svg",
        rating: 5
    },
    {
        name: "Export Manager",
        company: "Choksi Exports",
        content: "Handling global exports requires a partner who understands international trade. Logipod is that partner for us, providing seamless end-to-end support.",
        logo: "/images/asso_img/choksi exports logo.svg",
        rating: 5
    },
    {
        name: "Technical Director",
        company: "DB Cables",
        content: "Their infrastructure and commitment to safety are evident in every shipment. We trust Logipod with our most critical distribution needs.",
        logo: "/images/asso_img/db cables logo.svg",
        rating: 5
    },
    {
        name: "Operations Lead",
        company: "Fivestar Dehydration",
        content: "Efficient logistics is vital for fresh exports. Logipod's speed and handling quality ensure our products maintain their premium standard globally.",
        logo: "/images/asso_img/fivestar dehydration private limited logo.svg",
        rating: 5
    },
    {
        name: "Supply Chain Executive",
        company: "Gold Plus Float Glass",
        content: "The scale of their network and the precision of their tracking have significantly improved our national distribution strategy.",
        logo: "/images/asso_img/gold plus float glass private limited logo.svg",
        rating: 5
    },
    {
        name: "Global Logistics Head",
        company: "Kore International",
        content: "Logipod's expertise in cross-border trade and their robust digital tools make them an invaluable partner for our global operations.",
        logo: "/images/asso_img/kore international logo.svg",
        rating: 5
    },
    {
        name: "Project Manager",
        company: "United Foods",
        content: "Consistent quality and timely delivery are what we get with Logipod. They understand the nuances of food logistics perfectly.",
        logo: "/images/asso_img/united foods logo.svg",
        rating: 5
    },
    {
        name: "Regional Operations",
        company: "Utkarsh India",
        content: "We've seen a measurable improvement in our delivery timelines since partnering with Logipod. Highly recommended for scalable businesses.",
        logo: "/images/asso_img/utkarsh india limited logo.svg",
        rating: 5
    },
    {
        name: "Fleet Manager",
        company: "VSL Logistics",
        content: "Logipod represents the future of logistics. Their focus on technology and efficiency is exactly what the modern supply chain needs.",
        logo: "/images/asso_img/vsl logistics logo.svg",
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
                    {[...Array(testimonial.rating)].map((_, i) => (
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

export default function Testimonials() {
    const [visibleCards, setVisibleCards] = useState(3);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    // Update visible cards on mount and resize
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

    // Create extended list for circular effect
    const extendedTestimonials = useMemo(() => {
        const startClones = testimonials.slice(0, visibleCards);
        const endClones = testimonials.slice(-visibleCards);
        return [...endClones, ...testimonials, ...startClones];
    }, [visibleCards]);

    // The index in the extended array
    const [virtualIndex, setVirtualIndex] = useState(visibleCards);

    // Update virtualIndex when visibleCards changes to prevent jumps
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

    const handleDotClick = (dotIdx: number) => {
        handleManualAction(() => {
            const targetRealIndex = Math.round((dotIdx / 6) * (testimonials.length - visibleCards));
            setVirtualIndex(targetRealIndex + visibleCards);
        });
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

                    {/* Indicators - Exactly 7 dots */}
                    <div className="flex justify-center gap-2 mt-6 md:mt-10">
                        {Array.from({ length: 7 }).map((_, dotIdx) => {
                            const isActive = Math.abs(Math.round((currentRealIndex / (testimonials.length - visibleCards)) * 6) - dotIdx) === 0;

                            return (
                                <button
                                    key={dotIdx}
                                    onClick={() => handleDotClick(dotIdx)}
                                    className={`w-1 h-1 md:w-1.5 md:h-1.5 rounded-full transition-all duration-500 ${isActive ? 'w-6 md:w-8 bg-[#F26341]' : 'bg-white/20 hover:bg-white/40'}`}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
