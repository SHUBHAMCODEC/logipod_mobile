"use client";

import React from "react";
import { motion } from "motion/react";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

const testimonials = [
  {
    name: "Ashok Jangra",
    designation: "CEO & Founder",
    src: "/images/company/ashok.webp",
    quote: "Building Logipod was about solving a problem I lived every day — unpredictability in Indian freight. Technology is the answer.",
  },
  {
    name: "Satkar Grewal",
    designation: "CTO & Co-Founder",
    src: "/images/company/satkar.webp",
    quote: "Every line of code we ship represents thousands of shipments moving more efficiently. That's what drives our engineering culture.",
  },
  {
    name: "Madan Rajput",
    designation: "Head FTL & EXIM",
    src: "/images/company/madan.png",
    quote: "Logistics is about trust. When a client calls at 2 AM, we answer — and that commitment runs deep through every team at Logipod.",
  },
  {
    name: "Ankit Srivastava",
    designation: "Lead — Central Supply",
    src: "/images/company/ankit.jpg",
    quote: "Our clients don't just use our platform — they grow with us. Watching a small shipper scale to enterprise is incredibly rewarding.",
  },
  {
    name: "Devashish Tiwari",
    designation: "Senior Manager — HR",
    src: "/images/company/dewashish.jpeg",
    quote: "Culture isn't a poster on the wall. It's how we treat each other on tough days, and why people choose to stay and grow here.",
  },
];

export default function AboutInsider() {
  return (
    <section className="w-full bg-white py-12 md:py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-8"
        >
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#252B61]/8 text-[#252B61] text-xs font-bold uppercase tracking-widest mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#252B61]" />
              Logipod Insider
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-[#252B61] leading-tight">
              Voices From The Team
            </h2>
            <p className="text-gray-500 text-sm md:text-base mt-2 max-w-md leading-relaxed">
              Explore the unique stories, professional journeys, and experiences of our team members.
            </p>
          </div>
        </motion.div>

        {/* Animated Testimonials UI */}
        <div className="mt-8">
          <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
        </div>
      </div>
    </section>
  );
}
