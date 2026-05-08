"use client";

import React from "react";
import { motion } from "motion/react";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";

export default function Middle() {
    return (
        <section className="relative w-full bg-[#FAFAFA] py-20 lg:py-28 overflow-hidden">
            {/* Subtle Background Pattern to keep it "designing" but clean */}
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.02]"
                style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=%2224%22 height=%2224%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Ccircle cx=%222%22 cy=%222%22 r=%221.5%22 fill=%22%23272D6D%22/%3E%3C/svg%3E')" }}
            />

            <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">

                {/* Section Heading */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-black text-[#272D6D] tracking-tight mb-4"
                    >
                        Let's Start a <span className="text-[#F26341]">Conversation</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-500 text-lg font-medium"
                    >
                        Have a question about our logistics services or need a custom freight quote?
                        Fill out the form below, and our team will get back to you immediately.
                    </motion.p>
                </div>

                {/* Main Grid Layout: Left (Form) | Right (Details) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">

                    {/* ======================================= */}
                    {/* LEFT: CONTACT FORM                      */}
                    {/* ======================================= */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="lg:col-span-7 bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.03)] border border-gray-100 p-8 md:p-10 flex flex-col"
                    >
                        <h3 className="text-2xl font-black text-[#272D6D] mb-8">Send us a Message</h3>

                        <form className="space-y-6 flex-1 flex flex-col" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Name */}
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-[13px] font-bold tracking-wider uppercase text-gray-500">Full Name *</label>
                                    <input
                                        type="text"
                                        id="name"
                                        placeholder="John Doe"
                                        className="w-full h-14 px-5 rounded-xl bg-[#FAFAFA] border border-gray-200 text-gray-800 focus:bg-white focus:border-[#F26341] focus:ring-4 focus:ring-[#F26341]/10 outline-none transition-all duration-300 font-medium placeholder:font-normal placeholder:text-gray-400"
                                        required
                                    />
                                </div>
                                {/* Phone */}
                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-[13px] font-bold tracking-wider uppercase text-gray-500">Phone Number *</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        placeholder="+91 98765 43210"
                                        className="w-full h-14 px-5 rounded-xl bg-[#FAFAFA] border border-gray-200 text-gray-800 focus:bg-white focus:border-[#F26341] focus:ring-4 focus:ring-[#F26341]/10 outline-none transition-all duration-300 font-medium placeholder:font-normal placeholder:text-gray-400"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Email */}
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-[13px] font-bold tracking-wider uppercase text-gray-500">Email Address *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        placeholder="john@company.com"
                                        className="w-full h-14 px-5 rounded-xl bg-[#FAFAFA] border border-gray-200 text-gray-800 focus:bg-white focus:border-[#F26341] focus:ring-4 focus:ring-[#F26341]/10 outline-none transition-all duration-300 font-medium placeholder:font-normal placeholder:text-gray-400"
                                        required
                                    />
                                </div>
                                {/* Company */}
                                <div className="space-y-2">
                                    <label htmlFor="company" className="text-[13px] font-bold tracking-wider uppercase text-gray-500">Company Name</label>
                                    <input
                                        type="text"
                                        id="company"
                                        placeholder="Your Company Ltd."
                                        className="w-full h-14 px-5 rounded-xl bg-[#FAFAFA] border border-gray-200 text-gray-800 focus:bg-white focus:border-[#F26341] focus:ring-4 focus:ring-[#F26341]/10 outline-none transition-all duration-300 font-medium placeholder:font-normal placeholder:text-gray-400"
                                    />
                                </div>
                            </div>

                            {/* Subject */}
                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-[13px] font-bold tracking-wider uppercase text-gray-500">Inquiry Subject *</label>
                                <div className="relative">
                                    <select
                                        id="subject"
                                        className="w-full h-14 px-5 rounded-xl bg-[#FAFAFA] border border-gray-200 text-gray-800 focus:bg-white focus:border-[#F26341] focus:ring-4 focus:ring-[#F26341]/10 outline-none transition-all duration-300 appearance-none cursor-pointer font-medium"
                                        required
                                    >
                                        <option value="">Select a subject...</option>
                                        <option value="ftl">Full Truck Load (FTL)</option>
                                        <option value="exim">EXIM Services</option>
                                        <option value="warehousing">Warehousing Solutions</option>
                                        <option value="yard">Yard Management</option>
                                        <option value="other">Other Inquiry</option>
                                    </select>
                                    {/* Custom dropdown arrow */}
                                    <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none">
                                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 1.5L6 6.5L11 1.5" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {/* Message */}
                            <div className="space-y-2 flex-1 flex flex-col">
                                <label htmlFor="message" className="text-[13px] font-bold tracking-wider uppercase text-gray-500">Your Message *</label>
                                <textarea
                                    id="message"
                                    placeholder="How can we help you?"
                                    className="w-full flex-1 min-h-[140px] p-5 rounded-xl bg-[#FAFAFA] border border-gray-200 text-gray-800 focus:bg-white focus:border-[#F26341] focus:ring-4 focus:ring-[#F26341]/10 outline-none transition-all duration-300 resize-none font-medium placeholder:font-normal placeholder:text-gray-400"
                                    required
                                />
                            </div>

                            {/* Submit Button */}
                            <div className="pt-2">
                                <button
                                    type="submit"
                                    className="group relative w-full sm:w-auto flex items-center justify-center gap-3 h-14 px-10 rounded-xl bg-[#272D6D] text-white font-bold tracking-wide overflow-hidden transition-all duration-300 hover:shadow-[0_8px_25px_rgba(39,45,109,0.25)] hover:-translate-y-1"
                                >
                                    <div className="absolute inset-0 w-full h-full bg-[#F26341] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"></div>
                                    <span className="relative z-10 text-[15px]">Send Message</span>
                                    <ArrowRight className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
                                </button>
                            </div>
                        </form>
                    </motion.div>

                    {/* ======================================= */}
                    {/* RIGHT: COMPANY DETAILS CARD             */}
                    {/* ======================================= */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="lg:col-span-5 h-full"
                    >
                        <div className="bg-white border border-gray-100 rounded-3xl p-8 md:p-10 lg:p-12 relative overflow-hidden h-full shadow-[0_8px_30px_rgb(0,0,0,0.03)] flex flex-col justify-center">

                            {/* Premium Bright Background Accents */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#F26341] rounded-full blur-[100px] opacity-[0.06] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
                            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#272D6D] rounded-full blur-[90px] opacity-[0.04] translate-y-1/3 -translate-x-1/4 pointer-events-none" />

                            <h3 className="text-2xl font-black mb-3 text-[#272D6D] relative z-10">Contact Information</h3>
                            <p className="text-gray-500 mb-10 relative z-10 font-medium leading-relaxed">
                                Reach out to us directly through any of the channels below. Our team is available to assist you.
                            </p>

                            <div className="space-y-8 relative z-10">
                                {/* Address */}
                                <div className="flex items-start gap-5 group">
                                    <div className="w-14 h-14 shrink-0 rounded-2xl bg-[#FAFAFA] flex items-center justify-center border border-gray-100 transition-all duration-300 group-hover:bg-[#F26341] group-hover:border-[#F26341] group-hover:-translate-y-1 group-hover:shadow-lg shadow-[#F26341]/20">
                                        <MapPin className="w-6 h-6 text-[#272D6D] group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <div className="pt-1">
                                        <h4 className="font-bold text-[17px] mb-1.5 text-[#272D6D]">Head Office</h4>
                                        <p className="text-gray-500 leading-relaxed font-medium">
                                            Logipod Logistics Park, <br />
                                            Sector 62, Gurugram, <br />
                                            Haryana 122018, India
                                        </p>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="flex items-start gap-5 group">
                                    <div className="w-14 h-14 shrink-0 rounded-2xl bg-[#FAFAFA] flex items-center justify-center border border-gray-100 transition-all duration-300 group-hover:bg-[#F26341] group-hover:border-[#F26341] group-hover:-translate-y-1 group-hover:shadow-lg shadow-[#F26341]/20">
                                        <Phone className="w-6 h-6 text-[#272D6D] group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <div className="pt-1">
                                        <h4 className="font-bold text-[17px] mb-1.5 text-[#272D6D]">Call Us</h4>
                                        <p className="text-gray-500 font-medium mb-1">+91 123 456 7890</p>
                                        <p className="text-gray-500 font-medium">+91 124 456 7890</p>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex items-start gap-5 group">
                                    <div className="w-14 h-14 shrink-0 rounded-2xl bg-[#FAFAFA] flex items-center justify-center border border-gray-100 transition-all duration-300 group-hover:bg-[#F26341] group-hover:border-[#F26341] group-hover:-translate-y-1 group-hover:shadow-lg shadow-[#F26341]/20">
                                        <Mail className="w-6 h-6 text-[#272D6D] group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <div className="pt-1">
                                        <h4 className="font-bold text-[17px] mb-1.5 text-[#272D6D]">Email Us</h4>
                                        <p className="text-gray-500 font-medium mb-1">contact@logipod.com</p>
                                        <p className="text-gray-500 font-medium">support@logipod.com</p>
                                    </div>
                                </div>

                                {/* Business Hours */}
                                <div className="flex items-start gap-5 group">
                                    <div className="w-14 h-14 shrink-0 rounded-2xl bg-[#FAFAFA] flex items-center justify-center border border-gray-100 transition-all duration-300 group-hover:bg-[#F26341] group-hover:border-[#F26341] group-hover:-translate-y-1 group-hover:shadow-lg shadow-[#F26341]/20">
                                        <Clock className="w-6 h-6 text-[#272D6D] group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <div className="pt-1">
                                        <h4 className="font-bold text-[17px] mb-1.5 text-[#272D6D]">Business Hours</h4>
                                        <p className="text-gray-500 font-medium mb-1.5">Monday - Saturday</p>
                                        <span className="inline-flex items-center px-3 py-1 rounded-md bg-[#F26341]/10 text-[#F26341] font-bold text-sm">
                                            09:30 AM - 06:00 PM
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
