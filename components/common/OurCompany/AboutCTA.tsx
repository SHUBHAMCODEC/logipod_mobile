"use client";

import React from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { Phone, Mail, ArrowRight, Truck } from "lucide-react";

export default function AboutCTA() {
  return (
    <section className="w-full bg-[#F8F9FF] py-24">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden bg-[#252B61] px-8 py-16 md:px-16 md:py-20 text-center"
        >
          {/* Background patterns */}
          <div
            className="absolute inset-0 pointer-events-none opacity-10"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 50%, #F36440 0%, transparent 50%), radial-gradient(circle at 80% 50%, #F36440 0%, transparent 50%)`,
            }}
          />
          <div
            className="absolute inset-0 pointer-events-none opacity-5"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
            }}
          />

          {/* Icon */}
          <div className="relative z-10 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#F36440]/20 mb-6 mx-auto">
            <Truck className="w-8 h-8 text-[#F36440]" />
          </div>

          {/* Copy */}
          <h2 className="relative z-10 text-3xl md:text-5xl font-black text-white leading-tight mb-4">
            Ready to Get Started?
          </h2>
          <p className="relative z-10 text-white/70 text-lg max-w-xl mx-auto leading-relaxed mb-10">
            Let's transform your supply chain into a competitive advantage. Talk to our logistics experts today.
          </p>

          {/* Contact options */}
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <a
              href="tel:+911800123456"
              className="flex items-center gap-3 px-6 py-3.5 rounded-full bg-white/10 text-white hover:bg-white/20 border border-white/20 transition-all duration-300 font-semibold text-sm"
            >
              <Phone className="w-4 h-4 text-[#F36440]" />
              +91 1800 123 4567
            </a>
            <a
              href="mailto:contact@logipod.in"
              className="flex items-center gap-3 px-6 py-3.5 rounded-full bg-white/10 text-white hover:bg-white/20 border border-white/20 transition-all duration-300 font-semibold text-sm"
            >
              <Mail className="w-4 h-4 text-[#F36440]" />
              contact@logipod.in
            </a>
          </div>

          {/* Primary CTA */}
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="group flex items-center gap-2 px-8 py-4 rounded-full bg-[#F36440] text-white font-black text-sm hover:bg-[#e05538] transition-all duration-300 hover:shadow-[0_12px_30px_rgba(242,101,68,0.4)] hover:-translate-y-0.5"
            >
              Get a Free Quote
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/careers"
              className="flex items-center gap-2 px-8 py-4 rounded-full border-2 border-white/30 text-white font-bold text-sm hover:border-white/60 hover:bg-white/5 transition-all duration-300"
            >
              Join Our Team
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
