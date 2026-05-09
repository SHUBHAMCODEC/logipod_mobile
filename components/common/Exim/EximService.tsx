"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { NoiseBackground } from "@/components/ui/noise-background";

const cardsData = [
  { title: "Speed", desc: "On-time delivery, every shipment" },
  { title: "Compliance", desc: "Zero-error documentation" },
  { title: "Reliability", desc: "Dependable logistics execution" },
  { title: "Visibility", desc: "Real-time tracking transparency" },
  { title: "Efficiency", desc: "Streamlined operations" }
];

const keywords = cardsData.map(card => `${card.title} - ${card.desc}`);

const headerHeadings = [
  "Our Service-Level Expertise",
  "Global Logistics Mastery",
  "End-to-End Supply Chain",
  "Advanced Tracking Systems",
  "Seamless Freight Operations"
];

const TextFlipper = ({ texts, className, delay = 3500 }: { texts: string[], className?: string, delay?: number }) => {
  const [displayText, setDisplayText] = useState(texts[0] || "");
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView || texts.length === 0) return;
    
    let timeout: NodeJS.Timeout;
    let currentIndex = 0;
    
    const startAnimation = (targetText: string) => {
      let iterations = 0;
      const interval = setInterval(() => {
        setDisplayText(targetText.split("").map((letter, index) => {
          if (letter === " " || letter === "-") return letter;
          if (index < iterations) return targetText[index];
          return letters[Math.floor(Math.random() * 26)];
        }).join(""));
        
        if (iterations >= targetText.length) {
          clearInterval(interval);
          timeout = setTimeout(() => {
            currentIndex = (currentIndex + 1) % texts.length;
            startAnimation(texts[currentIndex]);
          }, delay);
        }
        iterations += 1 / 3;
      }, 40);
    };
    
    startAnimation(texts[currentIndex]);
    
    return () => clearTimeout(timeout);
  }, [isInView, texts, delay]);

  return <span ref={ref} className={className}>{displayText}</span>;
};

export default function EximService() {
  const [keywordIndex, setKeywordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setKeywordIndex((prev) => (prev + 1) % keywords.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-[#FFFFFF] py-24 overflow-hidden text-[#1F2937] font-sans">
      {/* Container is full width of screen. Flex row for left/right split. */}
      <div className="w-full flex flex-col lg:flex-row items-center justify-between">
        
        {/* LEFT: 50% width. Sharp Triangle + Heading */}
        <div className="w-full lg:w-[50%] flex justify-start pl-6 lg:pl-12">
          <div className="relative w-full md:w-[90%] xl:w-[85%] flex flex-col justify-center py-16 min-h-[280px]">
            
            {/* Layer A - Base Layer (#F1623F) Solid */}
            <motion.div
              initial={{ x: "-100%" }}
              whileInView={{ x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="absolute inset-0 bg-[#F1623F] z-0 translate-y-6 -translate-x-6 rounded-none"
              style={{ clipPath: "polygon(0 0, 92% 0, 100% 50%, 92% 100%, 0 100%)" }}
            />
            
            {/* Layer B - Front Layer (#F4F7FA) Sharp Edges */}
            <motion.div
              initial={{ x: "-100%" }}
              whileInView={{ x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.6, ease: "easeOut" }}
              className="absolute inset-0 bg-[#F4F7FA] z-10 rounded-none"
              style={{ clipPath: "polygon(0 0, 92% 0, 100% 50%, 92% 100%, 0 100%)" }}
            />

            {/* Text Content */}
            <div className="relative z-20 pl-8 md:pl-10 pr-20 flex flex-col justify-center w-full">
              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-3xl xl:text-5xl font-bold mb-3 text-[#1F2937] leading-tight mt-0 min-h-[100px] flex items-center"
              >
                <TextFlipper texts={headerHeadings} delay={4000} />
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-sm lg:text-base text-slate-600 font-medium flex flex-col gap-2 mt-4"
              >
                <span className="whitespace-nowrap text-base">We deliver what global logistics demands:</span>
                <div className="relative h-[4.5em] md:h-[2.5em] w-full overflow-hidden inline-flex items-start md:items-center">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={keywordIndex}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="absolute inset-0 flex items-center font-bold text-[#F1623F] text-lg md:text-xl"
                    >
                      {keywords[keywordIndex]}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* RIGHT: 50% width. Starts from exact center of screen to end. 5 Vertical Rows of Cards. */}
        <div className="w-full lg:w-[50%] flex flex-col items-start pr-8 md:pr-16 pl-8 lg:pl-12 gap-2 pt-0 mt-10 lg:mt-0">
          
          {cardsData.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
              style={{ 
                '--desktop-ml': `${index * 1.5}rem`, 
                '--desktop-w': `calc(100% - ${index * 1.5}rem)`,
              } as React.CSSProperties}
              className="mb-2 w-full lg:w-[var(--desktop-w)] lg:ml-[var(--desktop-ml)]"
            >
              <NoiseBackground
                containerClassName="!rounded-2xl bg-[#1F2937]/90 border border-slate-700/80 p-5 md:p-6 flex flex-row items-center justify-start shadow-lg hover:bg-[#111827] transition-all duration-300 min-h-[70px]"
                gradientColors={["rgba(241,98,63,0.15)", "rgba(0,0,0,0)", "rgba(0,0,0,0)"]}
                noiseIntensity={0.05}
                backdropBlur={true}
              >
                <div className="flex flex-row items-center w-full gap-3 overflow-hidden z-10 relative" style={{ borderLeft: '4px solid #F1623F', paddingLeft: '1rem' }}>
                  <span className="text-lg md:text-xl font-bold text-white uppercase tracking-wider whitespace-nowrap">
                    <TextFlipper texts={[card.title]} delay={4000 + (index * 500)} />
                  </span>
                  <span className="text-[#F1623F] font-bold mx-2">-</span>
                  <span className="text-slate-300 text-base md:text-lg font-medium line-clamp-2 md:truncate">
                    {card.desc}
                  </span>
                </div>
              </NoiseBackground>
            </motion.div>
          ))}
          
        </div>

      </div>
    </section>
  );
}
