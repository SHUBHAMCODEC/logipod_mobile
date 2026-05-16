"use client";

import React, { useEffect, useState } from "react";
import { motion } from "motion/react";

export default function Header() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Premium B2B Clients / Partners with Logos
    const clients = [
        { name: "Godrej & Boyce", image: "/images/asso_img/godrej_logo.svg" },
        { name: "Polycab India", image: "/images/asso_img/polycab_india_limited_logo.svg" },
        { name: "Kore International", image: "/images/asso_img/kore_international_logo.svg" },
        { name: "Attero Recycling", image: "/images/asso_img/attero_recycling_pvt_ltd_logo.svg" },
        { name: "C&S Electricals", image: "/images/asso_img/c_&_s_electric_logo.svg" },
        { name: "United Foods", image: "/images/asso_img/united_foods_logo.svg" },
        { name: "Fivestar", image: "/images/asso_img/fivestar_dehydration_private_limited_logo.svg" },
        { name: "Uflex Limited", image: "/images/asso_img/uflex_limited_logo.svg" },
        { name: "Greenply", image: "/images/asso_img/greenply_industries_limited_logo.svg" },
        { name: "VIP Industries", image: "/images/asso_img/vip_logo.svg" }
    ];

    // Duplicate the clients array to create a seamless infinite scroll
    const duplicatedClients = [...clients, ...clients];

    return (
        <section className="relative w-full h-[85vh] min-h-[700px] flex flex-col justify-between bg-[#0A0A0A] overflow-hidden">

            {/* ======================================= */}
            {/* 1. BACKGROUND, SHADERS & IMAGERY LAYER  */}
            {/* ======================================= */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                {/* Base Image: Shipment/Logistics Context with slow Ken Burns scale effect */}
                <motion.div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1586528116311-ad8ed7c1590f?q=80&w=2070&auto=format&fit=crop')",
                    }}
                    initial={{ scale: 1.15 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 25, ease: "easeOut" }}
                />

                {/* Primary Dark Overlays for text readability and cinematic mood */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#272D6D]/90 via-[#0A0A0A]/75 to-[#0A0A0A] mix-blend-multiply" />

                {/* Dynamic Shader Light Orbs */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-[10%] left-[15%] w-[45vw] h-[45vw] bg-[#F36440]/20 rounded-full blur-[140px] mix-blend-screen animate-float-slow" />
                    <div className="absolute bottom-[20%] right-[10%] w-[40vw] h-[40vw] bg-[#272D6D]/50 rounded-full blur-[120px] mix-blend-screen animate-float-delayed" />
                </div>

                {/* Noise Texture Overlay for Premium Feel */}
                <div
                    className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
                    style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }}
                />
            </div>

            {/* ======================================= */}
            {/* 2. CENTERED HERO CONTENT                */}
            {/* ======================================= */}
            <div className="relative z-10 flex-1 flex flex-col justify-center items-center text-center px-6 pt-[120px] max-w-5xl mx-auto">


                {/* Bold Animated Heading */}
                <div className="overflow-hidden mb-6 py-2">
                    <motion.h1
                        initial={{ opacity: 0, y: 80, rotateX: 20 }}
                        animate={{ opacity: 1, y: 0, rotateX: 0 }}
                        transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.1] font-black text-white tracking-tight"
                        style={{ perspective: "1000px" }}
                    >
                        Connect With <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#F36440] to-[#ff8c70] drop-shadow-[0_0_40px_rgba(242,99,65,0.3)]">
                            Logipod
                        </span>
                    </motion.h1>
                </div>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
                    className="max-w-2xl text-white/70 text-lg md:text-xl font-medium leading-relaxed"
                >
                    Whether it's across India or around the globe, we build resilient, high-performance logistics networks tailored for your business.
                </motion.p>
            </div>

            {/* ======================================= */}
            {/* 3. BOTTOM SCROLLING MARQUEE (CLIENTS)   */}
            {/* ======================================= */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: 1 }}
                className="relative z-10 w-full bg-[#0A0A0A]/40 backdrop-blur-2xl border-t border-white/5 py-8 overflow-hidden"
            >
                {/* Soft edge gradients for seamless fade-in/out of logos */}
                <div className="absolute top-0 bottom-0 left-0 w-24 md:w-48 bg-gradient-to-r from-[#0A0A0A] to-transparent z-20 pointer-events-none" />
                <div className="absolute top-0 bottom-0 right-0 w-24 md:w-48 bg-gradient-to-l from-[#0A0A0A] to-transparent z-20 pointer-events-none" />

                {/* The Marquee Track */}
                <div className="flex w-max animate-marquee items-center">
                    {mounted && duplicatedClients.map((client, idx) => (
                        <div
                            key={idx}
                            className="flex items-center gap-6 px-16 md:px-24 group cursor-default transition-all duration-500 hover:scale-110 hover:-translate-y-1 hover:drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]"
                        >
                            <img 
                                src={client.image} 
                                alt={client.name} 
                                className="h-12 w-auto object-contain grayscale-0 brightness-100 opacity-100 md:grayscale md:brightness-200 md:opacity-60 group-hover:grayscale-0 group-hover:brightness-100 group-hover:opacity-100 transition-all duration-500"
                            />
                            <h3 className="text-xl md:text-2xl font-black text-transparent bg-clip-text bg-white/90 md:bg-white/20 uppercase tracking-[0.15em] group-hover:bg-white/90 transition-all duration-500 whitespace-nowrap">
                                {client.name}
                            </h3>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* ======================================= */}
            {/* CUSTOM ANIMATION STYLES                 */}
            {/* ======================================= */}
            <style dangerouslySetInnerHTML={{
                __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 50s linear infinite;
        }
        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(4vw, -6vh) scale(1.1); }
          66% { transform: translate(-3vw, 4vh) scale(0.9); }
        }
        .animate-float-slow {
          animation: float 25s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 30s ease-in-out infinite reverse;
          animation-delay: -5s;
        }
      `}} />
        </section>
    );
}
