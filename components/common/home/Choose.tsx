"use client";

import React from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { Link, Users, Sliders, Globe, Compass } from "lucide-react";

const TiltCard = ({ card, cardVariants }: { card: any, cardVariants: any }) => {
    const ref = React.useRef<HTMLDivElement>(null);
    
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
    const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);
    
    // Dynamic glare effect
    const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ["100%", "-100%"]);
    const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ["100%", "-100%"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div variants={cardVariants} style={{ perspective: 1200 }} className="relative h-[380px] w-full z-10">
            <motion.div
                ref={ref}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                className="w-full h-full rounded-xl overflow-hidden group cursor-pointer shadow-[0_10px_40px_rgba(0,0,0,0.08)] hover:shadow-[0_30px_60px_rgba(245,98,67,0.35)] transition-shadow duration-500 will-change-transform"
            >
                <Image 
                    src={card.image}
                    alt={card.title}
                    fill
                    sizes="(max-width: 1024px) 50vw, 20vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.15]"
                />
                
                {/* Gradients */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A14] via-[#0A0A14]/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-[#f56243]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay" />

                {/* Cyber/Gaming Glare Effect */}
                <motion.div 
                    style={{ x: glareX, y: glareY, transform: "translateZ(1px)" }}
                    className="absolute w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15)_0%,transparent_50%)] -top-1/2 -left-1/2 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10"
                />

                {/* Content with 3D Pop-out */}
                <div className="absolute inset-0 flex flex-col justify-end items-center p-6 text-center z-20 pointer-events-none" style={{ transform: "translateZ(50px)", transformStyle: "preserve-3d" }}>
                    
                    <div className="relative mb-6 transform transition-transform duration-500 group-hover:-translate-y-3" style={{ transform: "translateZ(20px)" }}>
                        <div className="w-12 h-12 rounded-full border border-white/20 bg-white/10 backdrop-blur-md flex items-center justify-center text-white group-hover:border-[#f56243] group-hover:bg-[#f56243] group-hover:text-white transition-all duration-500 group-hover:shadow-[0_0_40px_rgba(245,98,67,0.9)]">
                            {card.icon}
                        </div>
                    </div>
                    
                    <h4 className="text-white font-extrabold text-[12px] tracking-[0.15em] uppercase leading-snug transform transition-transform duration-500 group-hover:-translate-y-3 px-2 drop-shadow-2xl" style={{ transform: "translateZ(30px)" }}>
                        {card.title}
                    </h4>
                    
                    {/* Bottom Glitch/Accent Line */}
                    <div className="absolute bottom-0 left-0 w-full h-1.5 bg-[#f56243] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left shadow-[0_0_15px_rgba(245,98,67,0.8)]" />
                </div>
            </motion.div>
        </motion.div>
    );
};

export default function Choose() {
    const textVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] as [number,number,number,number] } 
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.3 }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.95 },
        visible: { 
            opacity: 1, 
            y: 0, 
            scale: 1,
            transition: { duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] as [number,number,number,number] }
        }
    };

    const features = [
        {
            title: "Vision",
            description: "At Logipod, we see a future where logistics is invisible—an automated, self-healing network that anticipates market volatility and maintains absolute continuity for businesses of every scale."
        },
        {
            title: "Mission",
            description: "To architect a more resilient global economy by delivering innovative, sustainable, and profitable logistics solutions that empower our clients to scale without friction or geographical boundaries."
        },
        {
            title: "Capabilities",
            description: "We leverage proprietary AI-driven orchestrations to streamline complex supply chains. From hyper-local distribution to global freight forwarding, our precision-tuned infrastructure ensures 99.9% delivery fidelity across all sectors."
        }
    ];

    const cards = [
        {
            title: "Full Truck Load (FTL)",
            image: "/images/home/ind_high.webp",
            icon: <Link className="w-5 h-5" />
        },
        {
            title: "Real-Time Tracking",
            image: "/images/home/mer_01.webp",
            icon: <Users className="w-5 h-5" />
        },
        {
            title: "Cross-Border Logistics",
            image: "/images/home/container-ship.webp",
            icon: <Sliders className="w-5 h-5" />
        },
        {
            title: "Warehousing",
            image: "/images/home/ind_logis26.webp",
            icon: <Globe className="w-5 h-5" />
        },
        {
            title: "Digitization (TMS / WMS)",
            image: "/images/home/ind_logis24.webp",
            icon: <Compass className="w-5 h-5" />
        }
    ];

    return (
        <section id="why-choose-us" className="relative w-full py-32 bg-white overflow-hidden">
            {/* Soft background glows */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[10%] left-[50%] -translate-x-1/2 w-[60%] h-[40%] rounded-[100%] bg-[#f56243]/[0.03] blur-[100px]" />
            </div>

            <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12">
                {/* Header Section */}
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                    className="flex flex-col items-center text-center mb-24"
                >
                    <motion.div variants={textVariants} className="w-12 h-1 bg-[#f56243] rounded-full mb-8" />
                    <motion.h2 variants={textVariants} className="text-4xl md:text-[3.5rem] font-extrabold text-[#111111] mb-6 tracking-tight leading-tight">
                        Why Choose Us
                    </motion.h2>
                    <motion.p variants={textVariants} className="text-lg md:text-xl font-bold text-[#111111]/80 tracking-wide">
                        Trusted by 45+ growing businesses across India and global markets
                    </motion.p>
                </motion.div>

                {/* Info Columns */}
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                    className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24 mb-24 max-w-7xl mx-auto"
                >
                    {features.map((item, idx) => (
                        <motion.div key={idx} variants={textVariants} className="flex flex-col relative group">
                            {/* Animated line */}
                            <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#111111]/10 rounded-full overflow-hidden">
                                <motion.div 
                                    className="w-full bg-[#f56243]"
                                    initial={{ height: 0 }}
                                    whileInView={{ height: "100%" }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.5, delay: 0.5 + idx * 0.2, ease: "circOut" }}
                                />
                            </div>
                            
                            <div className="pl-8">
                                <h3 className="text-[22px] font-extrabold text-[#111111] mb-4 tracking-tight group-hover:text-[#f56243] transition-colors duration-300">
                                    {item.title}
                                </h3>
                                <p className="text-[#111111]/60 font-medium leading-[1.8] text-[15px]">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Cards Section */}
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 perspective-1000"
                >
                    {cards.map((card, idx) => (
                        <TiltCard key={idx} card={card} cardVariants={cardVariants} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
