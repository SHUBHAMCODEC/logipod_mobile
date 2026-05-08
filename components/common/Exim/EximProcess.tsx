"use client";

import React from "react";
import { motion, useScroll, useSpring } from "motion/react";
import Image from "next/image";
import {
  ClipboardList,
  ShieldCheck,
  Anchor,
  Navigation,
  PackageCheck,
  CheckCircle2
} from "lucide-react";

const processSteps = [
  {
    title: "Booking & Planning",
    subtitle: "Strategic Coordination",
    description: "Our experts identify the most efficient routes and secure vessel space with reliable carriers at competitive market rates.",
    details: ["Optimized Route Planning", "Vessel Space Procurement", "Transparent Quotations"],
    icon: ClipboardList,
    image: "/images/exim/booking.webp"
  },
  {
    title: "Documentation",
    subtitle: "Compliance Management",
    description: "Meticulous handling of shipping bills, bills of lading, and customs declarations to ensure zero delays in the paperwork cycle.",
    details: ["Shipping Bill Filing", "Customs Declarations", "KYC & Compliance Checks"],
    icon: ShieldCheck,
    image: "/images/exim/documentation.webp"
  },
  {
    title: "Port Operations",
    subtitle: "Origin Handling",
    description: "Dedicated on-ground coordination at origin ports to manage priority loading and container positioning.",
    details: ["Container Positioning", "Priority Loading", "Customs Inspection Support"],
    icon: Anchor,
    image: "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Global Transit",
    subtitle: "Shipment Monitoring",
    description: "Consistent oversight of your cargo during ocean transit with regular milestone updates across international routes.",
    details: ["Route Progress Tracking", "Vessel Milestone Updates", "Transshipment Oversight"],
    icon: Navigation,
    image: "/images/exim/global.webp"
  },
  {
    title: "Final Execution",
    subtitle: "Clearance & Delivery",
    description: "Efficient destination clearance and last-mile execution for a safe handover at the final warehouse or facility.",
    details: ["Destination Clearance", "Last-mile Trucking", "Safe Cargo Handover"],
    icon: PackageCheck,
    image: "/images/exim/delivery.webp"
  },
];

const EximProcess = () => {
  const containerRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section ref={containerRef} className="pb-32 bg-white relative overflow-hidden">

      {/* Hero Header with Cinematic Rich Black Overlay */}
      <div className="relative h-[600px] flex items-center justify-center overflow-hidden mb-32">
        <Image
          src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=2000"
          alt="Global Logistics Background"
          fill
          className="object-cover"
          priority
        />
        {/* Rich Black Cinematic Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/80 to-[#F26341]/25 backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_black_100%)] opacity-75" />

        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-6xl md:text-9xl font-black text-white tracking-tighter leading-none mb-10">
              The <span className="text-[#F26341] drop-shadow-[0_0_40px_rgba(242,99,65,0.4)]">Exim Journey</span>, <br />
              Perfected.
            </h3>
            <p className="text-white/90 text-xl md:text-2xl font-medium max-w-3xl mx-auto leading-relaxed drop-shadow-md">
              A high-performance workflow designed for reliability, speed, and total global visibility.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative">

        {/* Vertical Animation Workflow */}
        <div className="relative max-w-6xl mx-auto">

          {/* Central Progress Line */}
          <div className="absolute left-8 md:left-1/2 -translate-x-1/2 top-0 w-1 h-full bg-sky-50 rounded-full overflow-hidden z-0">
            <motion.div
              style={{ scaleY }}
              className="absolute top-0 left-0 w-full h-full bg-[#F26341] shadow-[0_0_20px_rgba(242,99,65,0.6)] origin-top rounded-full"
            />
          </div>

          <div className="space-y-24 md:space-y-40 relative z-10">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-24 pl-20 md:pl-0 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
              >
                {/* Content & Image Side */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                  className="flex-1 w-full"
                >
                  <div className="group relative aspect-[16/10] rounded-[32px] md:rounded-[40px] overflow-hidden shadow-2xl shadow-sky-900/10 border border-sky-50 cursor-pointer">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    />

                    {/* Rich Black Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-black via-black/95 to-[#F26341]/40 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out flex flex-col justify-center p-8 md:p-12">
                      <h4 className="text-white text-2xl md:text-3xl font-black mb-6 tracking-tight">{step.title}</h4>
                      <div className="space-y-3 md:space-y-4">
                        {step.details.map((detail, i) => (
                          <div key={i} className="flex items-center gap-3 text-white font-medium text-sm md:text-base">
                            <CheckCircle2 size={16} className="text-[#F26341] drop-shadow-[0_0_8px_rgba(242,99,65,0.6)] shrink-0" />
                            <span>{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Default Label Overlay */}
                    <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 bg-gradient-to-t from-black/60 to-transparent group-hover:opacity-0 transition-opacity duration-300">
                      <h4 className="text-white text-xl md:text-2xl font-black tracking-tight">{step.title}</h4>
                    </div>
                  </div>
                </motion.div>

                {/* Timeline Icon / Marker */}
                <div className="absolute left-8 md:static md:left-auto top-1/2 -translate-y-1/2 md:translate-y-0 -translate-x-1/2 md:translate-x-0 z-10 shrink-0">
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    className="w-12 h-12 md:w-20 md:h-20 rounded-[20px] md:rounded-[28px] bg-white border border-sky-100 shadow-2xl shadow-sky-900/10 flex items-center justify-center text-[#272D6D] relative group hover:border-[#F26341]/40 transition-colors duration-300"
                  >
                    <step.icon className="w-5 h-5 md:w-8 md:h-8 group-hover:text-[#F26341] transition-colors relative z-10" strokeWidth={1.5} />
                    <div className="absolute inset-0 bg-[#F26341]/5 rounded-[20px] md:rounded-[28px] scale-0 group-hover:scale-100 transition-transform duration-300" />
                  </motion.div>
                </div>

                {/* Desktop Description Side */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                  className="flex-1 hidden md:block"
                >
                  <div className={`flex flex-col ${index % 2 === 0 ? "items-start" : "items-end text-right"}`}>
                    <h3 className="text-3xl font-black text-[#272D6D] mb-4 tracking-tight">{step.title}</h3>
                    <div className="text-sm font-black text-sky-500 uppercase tracking-widest mb-6">{step.subtitle}</div>
                    <p className="text-gray-400 font-medium leading-relaxed text-lg max-w-md">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EximProcess;
