"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useAnimation, animate } from "motion/react";
import { ClipboardCheck, Users, TrendingUp, Award } from "lucide-react";

function AnimatedCounter({ from, to, prefix = "", suffix = "", duration = 2.5 }: { from: number, to: number, prefix?: string, suffix?: string, duration?: number }) {
    const nodeRef = useRef<HTMLSpanElement>(null);
    const inView = useInView(nodeRef, { once: true, margin: "-100px" });

    useEffect(() => {
        if (inView && nodeRef.current) {
            const controls = animate(from, to, {
                duration,
                ease: [0.2, 0.65, 0.3, 0.9],
                onUpdate(value) {
                    if (nodeRef.current) {
                        nodeRef.current.textContent = `${prefix}${Math.floor(value)}${suffix}`;
                    }
                }
            });
            return () => controls.stop();
        }
    }, [from, to, inView, prefix, suffix, duration]);

    return <span ref={nodeRef}>{prefix}{from}{suffix}</span>;
}



export default function CTA() {
    const stats = [
        {
            icon: <ClipboardCheck strokeWidth={1.5} className="w-12 h-12 sm:w-16 sm:h-16 text-[#f56243] group-hover:drop-shadow-[0_0_15px_rgba(245,98,67,0.8)] transition-all duration-500" />,
            value: 50,
            suffix: "+",
            label: "Projects Delivered",
        },
        {
            icon: <Users strokeWidth={1.5} className="w-12 h-12 sm:w-16 sm:h-16 text-[#f56243] group-hover:drop-shadow-[0_0_15px_rgba(245,98,67,0.8)] transition-all duration-500" />,
            value: 100,
            suffix: "+",
            label: "Clients We\nDeal With",
        },
        {
            icon: <TrendingUp strokeWidth={1.5} className="w-12 h-12 sm:w-16 sm:h-16 text-[#f56243] group-hover:drop-shadow-[0_0_15px_rgba(245,98,67,0.8)] transition-all duration-500" />,
            prefix: "₹",
            value: 500,
            label: "Cr+ Logistics\nSpend Managed",
        },
        {
            icon: <Award strokeWidth={1.5} className="w-12 h-12 sm:w-16 sm:h-16 text-[#f56243] group-hover:drop-shadow-[0_0_15px_rgba(245,98,67,0.8)] transition-all duration-500" />,
            value: 20,
            suffix: "+",
            label: "Service Offerings",
        }
    ];

    return (
        <section className="relative w-full py-20 md:py-28 bg-gradient-to-br from-white via-slate-50 to-gray-100 overflow-hidden border-y border-[#f56243]/10">
            
            {/* Gaming/Cyber Background Elements */}
            <div className="absolute inset-0 z-0">



                {/* Radial Glows */}
                <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-96 h-96 bg-[#f56243]/10 rounded-full blur-[100px]" />
                <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-96 h-96 bg-[#f56243]/10 rounded-full blur-[100px]" />
            </div>

            <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
                    {stats.map((stat, idx) => (
                        <motion.div 
                            key={idx}
                            initial={{ opacity: 0, y: 30, scale: 0.9 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: idx * 0.15, type: "spring", stiffness: 200, damping: 20 }}
                            className="group flex items-center justify-center sm:justify-start gap-6 md:gap-8 p-6 rounded-2xl hover:bg-white hover:border-[#f56243]/30 hover:shadow-[0_10px_30px_rgba(245,98,67,0.1)] transition-all duration-300 cursor-default border border-transparent"
                        >
                            {/* Icon Container with 3D Pop and Glow */}
                            <div className="relative transform transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3 group-hover:-translate-y-2">
                                {/* Pulse ring behind icon */}
                                <div className="absolute inset-0 rounded-full bg-[#f56243] opacity-0 group-hover:animate-ping" />
                                {stat.icon}
                            </div>
                            
                            {/* Text Content */}
                            <div className="flex flex-col">
                                <h3 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#272D6D] tracking-tight mb-2 drop-shadow-[0_2px_10px_rgba(0,0,0,0.05)]">
                                    <AnimatedCounter 
                                        from={0} 
                                        to={stat.value} 
                                        prefix={stat.prefix} 
                                        suffix={stat.suffix} 
                                    />
                                </h3>
                                <p className="text-gray-500 font-medium text-sm sm:text-base whitespace-pre-line leading-snug group-hover:text-[#111111] transition-colors duration-300">
                                    {stat.label}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
