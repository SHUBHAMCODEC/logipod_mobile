"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { Plus, Minus, ArrowRight, MessageSquare } from "lucide-react";

const faqs = [
  {
    question: "How do you ensure customs compliance across different regions?",
    answer: "We utilize a centralized compliance engine updated in real-time with global trade regulations. Our local teams at each hub perform final verification to ensure 100% accuracy in EDI filings."
  },
  {
    question: "What is your approach to transit time predictability?",
    answer: "By combining direct carrier integration with predictive logistics modeling, we anticipate port congestion and suggest the most efficient routes, maintaining a 98.5% on-time delivery rate."
  },
  {
    question: "Do you offer specialized handling for hazardous or fragile cargo?",
    answer: "Yes, Logipod has specialized vertical teams for high-value, temperature-controlled, and hazardous materials, ensuring all safety and regulatory protocols are strictly followed."
  },
  {
    question: "How is marine insurance integrated into your service?",
    answer: "Insurance can be activated instantly through our booking portal. We partner with top-tier global insurers to provide comprehensive door-to-door coverage with automated claims support."
  },
  {
    question: "What documentation is required to start exporting with Logipod?",
    answer: "Our onboarding team assists you with IEC, GST, and AD Code registration. Once registered, you only need to upload your commercial invoice and packing list for each booking."
  }
];

const EximFaq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-32 bg-white relative">
      {/* Background Wrapper (clips blobs without breaking sticky) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F26341]/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-24">

          {/* Left Column: Static Content with Entrance Animation */}
          <div className="lg:w-2/5 relative">
            <div className="sticky top-32 h-fit">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-1 bg-[#F26341]" />
              </div>
              <h2 className="text-5xl md:text-7xl font-black text-[#272D6D] tracking-tighter mb-10 leading-tight">
                Global Trade <br /> <span className="text-[#F26341]">Insights.</span>
              </h2>
              <p className="text-gray-500 text-xl font-medium mb-12 leading-relaxed max-w-md">
                Navigating international trade requires precision. Our experts provide the operational clarity you need.
              </p>

              <motion.div
                whileHover={{ y: -5 }}
                className="p-10 rounded-[40px] bg-gray-50 border border-gray-100 shadow-2xl shadow-black/5"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#272D6D] flex items-center justify-center text-white mb-6">
                  <MessageSquare size={24} />
                </div>
                <h4 className="text-xl font-black text-[#272D6D] mb-4">Still have questions?</h4>
                <p className="text-sm text-gray-500 mb-8 font-medium">Our global support team is available 24/7 to assist with your specific trade lane requirements.</p>
                <Link href="/contact" className="block w-full">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-5 bg-[#F26341] text-white font-black text-xs uppercase tracking-widest rounded-2xl shadow-xl shadow-[#F26341]/20 hover:bg-[#ff8e72] transition-all flex items-center justify-center gap-3 group"
                  >
                    Contact an Expert <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </Link>
              </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Right Column: Interactive FAQ Accordion */}
          <div className="lg:w-3/5 space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100,
                  damping: 20
                }}
                className={`rounded-[32px] overflow-hidden transition-all duration-500 group border ${openIndex === index
                    ? "bg-white border-[#F26341]/40 shadow-2xl shadow-[#F26341]/10 scale-[1.03]"
                    : "bg-white border-gray-100 hover:border-[#F26341]/20 hover:shadow-xl hover:shadow-[#272D6D]/5 hover:scale-[1.01]"
                  }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-8 md:p-10 text-left"
                >
                  <span className={`text-lg md:text-xl font-bold transition-colors duration-500 pr-4 ${openIndex === index ? "text-[#F26341]" : "text-[#272D6D]"
                    }`}>
                    {faq.question}
                  </span>

                  <motion.div
                    animate={{
                      rotate: openIndex === index ? 180 : 0,
                      scale: openIndex === index ? 1.1 : 1
                    }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-colors duration-500 ${openIndex === index ? "bg-[#F26341] text-white" : "bg-gray-100 text-gray-500 group-hover:bg-[#F26341]/10 group-hover:text-[#F26341]"
                      }`}
                  >
                    {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ type: "spring", bounce: 0, duration: 0.6 }}
                    >
                      <div className="px-8 md:px-10 pb-10">
                        <motion.div
                          initial={{ y: 15, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.15, type: "spring", stiffness: 100 }}
                          className="text-gray-500 text-base md:text-lg leading-relaxed font-medium"
                        >
                          {faq.answer}
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default EximFaq;
