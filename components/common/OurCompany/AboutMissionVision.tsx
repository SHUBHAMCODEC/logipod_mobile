"use client";

import React from "react";
import { motion } from "motion/react";
import { Target, Eye } from "lucide-react";

const cards = [
  {
    icon: Target,
    tag: "Our Mission",
    tagColor: "#F36440",
    title: "Empowering Commerce,\nAcross Every Mile",
    body: "At Logipod, our mission is to empower businesses by providing exceptional logistics and supply chain solutions. We leverage cutting-edge technology and industry best practices to deliver innovative, reliable services that enable our clients to achieve their strategic objectives.\n\nThrough our commitment to excellence, client satisfaction, and continuous improvement, we aim to be the trusted partner that drives operational transformation.",
    bg: "#252B61",
    textColor: "#fff",
    subtextColor: "rgba(255,255,255,0.7)",
  },
  {
    icon: Eye,
    tag: "Our Vision",
    tagColor: "#252B61",
    title: "A Globally Recognised\nLogistics Leader",
    body: "Our vision is to be a globally recognised provider of freight and supply chain services, known for our expertise, integrity, and unwavering commitment to deliver exceptional value to our clients.\n\nBy fostering a culture of innovation, collaboration, and continuous learning, we aim to be at the forefront of logistics advancements — shaping the future of India's trade and enabling our clients to stay ahead.",
    bg: "#FFF8F5",
    textColor: "#252B61",
    subtextColor: "#4B5563",
  },
];

export default function AboutMissionVision() {
  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-black text-[#252B61] leading-tight">
            Purpose-Built for<br />
            <span className="text-[#F36440]">Global Supply Chains</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.tag}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              style={{ backgroundColor: card.bg }}
              className="rounded-3xl p-10 flex flex-col gap-6 group hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-xl"
            >
              {/* Icon + Tag */}
              <div className="flex items-center gap-3">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center"
                  style={{ backgroundColor: `${card.tagColor}20` }}
                >
                  <card.icon className="w-6 h-6" style={{ color: card.tagColor }} />
                </div>
                <span
                  className="text-xs font-black uppercase tracking-widest"
                  style={{ color: card.tagColor }}
                >
                  {card.tag}
                </span>
              </div>

              {/* Title */}
              <h3
                className="text-2xl md:text-3xl font-black leading-tight whitespace-pre-line"
                style={{ color: card.textColor }}
              >
                {card.title}
              </h3>

              {/* Divider */}
              <div
                className="w-12 h-[3px] rounded-full"
                style={{ backgroundColor: card.tagColor }}
              />

              {/* Body */}
              {card.body.split("\n\n").map((para, j) => (
                <p
                  key={j}
                  className="text-base leading-relaxed"
                  style={{ color: card.subtextColor }}
                >
                  {para}
                </p>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
