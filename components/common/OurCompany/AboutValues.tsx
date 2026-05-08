"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "motion/react";
import { FlipWords } from "@/components/ui/flip-words";
import { ShieldCheck, Lightbulb, Handshake, TrendingUp, Users, Heart } from "lucide-react";

const values = [
  {
    icon: ShieldCheck,
    title: "Integrity First",
    desc: "We operate with unwavering honesty and accountability, building trust through transparency in every shipment and every decision.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    desc: "From AI-powered route optimization to real-time tracking dashboards, we constantly push the boundaries of logistics technology.",
  },
  {
    icon: Handshake,
    title: "Client-Centricity",
    desc: "Every solution we build starts with a deep understanding of our client's business. Your success is the only metric that matters.",
  },
  {
    icon: TrendingUp,
    title: "Operational Excellence",
    desc: "We hold ourselves to the highest standards — precision, speed, and reliability on every lane, every day.",
  },
  {
    icon: Users,
    title: "Inclusive Culture",
    desc: "We believe diverse teams deliver better outcomes. Around 35% of our team members are women — a number we're proud of and committed to growing.",
  },
  {
    icon: Heart,
    title: "Community Impact",
    desc: "We invest in the communities we operate in — from school outreach programs to charitable drives that reflect our responsibility beyond business.",
  },
];

const highlights = [
  { value: 35, suffix: "%", label: "Female team members" },
  { value: 85, suffix: "%", label: "Employee retention rate" },
  { value: 50, suffix: "+", label: "Logistics professionals" },
];

const Counter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      let startTimestamp: number | null = null;

      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        setCount(Math.floor(progress * (end - start) + start));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="text-3xl font-black text-[#F36440]">
      {count}{suffix}
    </span>
  );
};



export default function AboutValues() {
  const words = ["Stand For", "Believe", "Value", "Build"];

  return (
    <section className="w-full bg-[#F8F9FF] py-24">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-black text-[#252B61] leading-tight mb-4 flex flex-wrap items-center gap-x-3">
            What We
            <span className="inline-flex bg-[#F36440] px-6 py-2 rounded-2xl shadow-xl min-w-[240px] justify-center">
              <FlipWords words={words} className="text-[#F36440] px-0" />
            </span>
          </h2>
        </motion.div>

        {/* Stats highlight bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-3 gap-4 mb-12"
        >
          {highlights.map((h, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl px-6 py-5 flex flex-col gap-1 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
            >
              <Counter value={h.value} suffix={h.suffix} />
              <span className="text-sm text-gray-500 font-medium">{h.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Values grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="bg-white rounded-2xl p-7 flex flex-col gap-4 border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#252B61]/5 flex items-center justify-center group-hover:bg-[#F36440]/10 transition-colors duration-300">
                <v.icon className="w-6 h-6 text-[#252B61] group-hover:text-[#F36440] transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-black text-[#252B61]">{v.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
