"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Ship, Truck, Warehouse, Handshake, ChevronDown, Check, ArrowRight, MapPin, Package, Calendar as CalendarIcon } from "lucide-react";

export const Hero_Business_Data = {
    id: "business",
    label: "LET'S DO BUSINESS",
    renderIcon: (active: boolean) => {
        const color = active ? "#F26341" : "white";
        return (
            <svg width="60" height="60" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 10V54H52V20L42 10H12Z" stroke={color} strokeWidth="2" strokeLinejoin="round" />
                <path d="M42 10V20H52" stroke={color} strokeWidth="2" strokeLinejoin="round" />
                <circle cx="32" cy="38" r="10" stroke={color} strokeWidth="2" />
                <path d="M28 38L32 42L36 34" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        );
    }
};

interface HeroBusinessProps {
    onClose: () => void;
}

const Hero_Business: React.FC<HeroBusinessProps> = ({ onClose }) => {
    const [step, setStep] = useState<"initial" | "selection" | "sub-selection" | "form">("initial");
    const [flow, setFlow] = useState<"vendor" | "service" | null>(null);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [subSelected, setSubSelected] = useState<string | null>(null);
    const [deliveryDate, setDeliveryDate] = useState("");
    const dateInputRef = useRef<HTMLInputElement>(null);

    const vendorCategories = [
        { id: 'sea', label: 'SEA', icon: <Ship className="w-10 h-10" /> },
        { id: 'road', label: 'ROAD', icon: <Truck className="w-10 h-10" /> },
        { id: 'contract', label: 'CONTRACT', icon: <Warehouse className="w-10 h-10" /> },
        { id: 'general', label: 'GENERAL', icon: <Handshake className="w-10 h-10" /> },
    ];

    const serviceCategories = [
        { id: 'sea', label: 'SEA FREIGHT', icon: <Ship className="w-10 h-10" /> },
        { id: 'road', label: 'ROAD TRANSPORT', icon: <Truck className="w-10 h-10" /> },
        { id: 'contract', label: 'WAREHOUSING / CONTRACT', icon: <Warehouse className="w-10 h-10" /> },
        { id: 'general', label: 'CUSTOM / GENERAL', icon: <Handshake className="w-10 h-10" /> },
    ];

    const subSelections: Record<string, { label: string; value: string }[]> = {
        sea: [{ label: 'FCL (Full Container Load)', value: 'fcl' }, { label: 'LCL (Less than Container)', value: 'lcl' }],
        road: [{ label: 'Full Truck Load (FTL)', value: 'ftl' }, { label: 'Part Load (LTL)', value: 'ltl' }],
        contract: [{ label: 'Premium Storage', value: 'storage' }, { label: 'Efficient Distribution', value: 'dist' }],
    };

    const stageVariants = {
        hidden: { opacity: 0, y: 40, scale: 0.98, filter: "blur(10px)" },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            transition: {
                duration: 1,
                ease: [0.16, 1, 0.3, 1] as const,
                staggerChildren: 0.1
            }
        },
        exit: {
            opacity: 0,
            y: -40,
            scale: 1.02,
            filter: "blur(10px)",
            transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
    };

    const CloseButton = () => (
      <>
        {/* =========================================
            MOBILE CLOSE BUTTON
            Edit this block to change Mobile (X) position
        ========================================= */}
        <div className="md:hidden fixed top-4 right-4 z-[200]">
          <motion.button
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={onClose}
            className="w-10 h-10 rounded-full border-2 border-white/40 bg-black/60 hover:bg-white hover:border-white transition-all cursor-pointer flex items-center justify-center backdrop-blur-md"
          >
            <X className="w-5 h-5 text-white transition-colors" />
          </motion.button>
        </div>

        {/* =========================================
            PC / DESKTOP CLOSE BUTTON
            Edit this block to change PC (X) position
        ========================================= */}
        <div className="hidden md:block absolute top-4 right-4 z-[70]">
          <motion.button
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={onClose}
            className="group w-12 h-12 rounded-full border-2 border-white/40 bg-black/40 hover:bg-white hover:border-white hover:scale-110 transition-all duration-300 cursor-pointer flex items-center justify-center backdrop-blur-xl"
          >
            <X className="w-5 h-5 text-white group-hover:text-black transition-colors" />
          </motion.button>
        </div>
      </>
    );

    const InputStyles = "w-full bg-black/25 border border-white/40 rounded-[5px] h-[52px] px-6 text-white font-bold text-[13px] placeholder:text-white/60 focus:bg-black/40 focus:border-[#F26341] outline-none transition-all uppercase tracking-[0.15em] leading-none";

    const handleDateInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        let val = e.target.value.replace(/\D/g, "");
        if (val.length > 8) val = val.slice(0, 8);

        let formatted = "";
        if (val.length > 0) {
            formatted += val.slice(0, 2);
            if (val.length > 2) {
                formatted += " / " + val.slice(2, 4);
                if (val.length > 4) {
                    formatted += " / " + val.slice(4, 8);
                }
            }
        }
        setDeliveryDate(formatted);
    };

    const handleDatePickerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const dateVal = e.target.value;
        if (dateVal) {
            const [y, m, d] = dateVal.split("-");
            setDeliveryDate(`${d} / ${m} / ${y}`);
        }
    };

    const getSelectionDisplay = () => {
        if (!selectedCategory) return "SERVICE INQUIRY";
        const cat = selectedCategory.toUpperCase();
        const sub = subSelected ? subSelected.toUpperCase() : "GENERAL";
        return `${cat} / ${sub}`;
    };

    return (
        <div className="w-full flex flex-col items-center relative z-50">
            <AnimatePresence mode="wait">
                {step === "initial" && (
                    <motion.div key="initial" variants={stageVariants} initial="hidden" animate="visible" exit="exit" className="w-full max-w-4xl flex flex-col items-center text-center relative px-4 pt-12 md:pt-16">
                        <CloseButton />
                        <motion.h2 variants={itemVariants} className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-4 md:mb-6 tracking-tight leading-[1.1]">
                            Logistics tailored for <span className="text-[#F26341]">Business Needs.</span>
                        </motion.h2>
                        <motion.p variants={itemVariants} className="text-base sm:text-xl md:text-2xl text-white/70 mb-8 md:mb-12 max-w-2xl font-light leading-relaxed text-balance">
                            We provide comprehensive solutions for supply chain management, warehousing, and international transport.
                        </motion.p>
                        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 md:gap-6 w-full max-w-2xl">
                            <button
                                onClick={() => { setFlow("service"); setStep("selection"); setSelectedCategory(null); setSubSelected(null); }}
                                className="flex-1 group py-4 md:py-6 px-6 md:px-10 rounded-xl md:rounded-2xl border border-white/10 hover:border-white/40 bg-black/40 hover:bg-black/60 backdrop-blur-3xl text-white font-bold text-sm md:text-lg transition-all active:scale-95 uppercase tracking-widest cursor-pointer flex items-center justify-center gap-3"
                            >
                                REQUEST SERVICES <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                            </button>
                            <button onClick={() => { setFlow("vendor"); setStep("selection"); setSelectedCategory(null); setSubSelected(null); }} className="flex-1 py-4 md:py-6 px-6 md:px-10 rounded-xl md:rounded-2xl bg-[#F26341] hover:bg-[#ff7a5c] text-white font-extrabold text-sm md:text-lg transition-all active:scale-95 uppercase tracking-widest cursor-pointer shadow-2xl shadow-[#F26341]/20">
                                VENDOR/PARTNER INQUIRY
                            </button>
                        </motion.div>
                    </motion.div>
                )}

                {step === "selection" && (
                    <motion.div key="selection" variants={stageVariants} initial="hidden" animate="visible" exit="exit" className="w-full max-w-5xl flex flex-col px-4 md:px-6 relative pt-12 md:pt-16">
                        <div className="flex justify-between items-start w-full mb-6 md:mb-10">
                            <div className="flex items-center gap-3 md:gap-4 text-left">
                                <div className="w-1 md:w-1.5 h-8 md:h-10 bg-[#F26341] rounded-full" />
                                <div>
                                    <h3 className="text-white text-xl md:text-2xl font-bold uppercase tracking-wider text-balance">Select {flow === "service" ? "Service Area" : "Category"}</h3>
                                    <p className="text-white/40 text-[10px] md:text-sm font-medium tracking-wide">Choose the vertical for your {flow === "service" ? "service request" : "inquiry"}.</p>
                                </div>
                            </div>
                            <CloseButton />
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 w-full mb-4 md:mb-6">
                            {(flow === "service" ? serviceCategories : vendorCategories).map((cat, idx) => (
                                <motion.button
                                    key={cat.id}
                                    variants={itemVariants}
                                    onClick={() => { setSelectedCategory(cat.id); setSubSelected(null); }}
                                    className={`relative flex flex-col items-center justify-center gap-4 md:gap-6 p-4 md:p-8 rounded-2xl md:rounded-3xl border-2 transition-all aspect-square cursor-pointer active:scale-95 shadow-xl backdrop-blur-md 
                                        ${selectedCategory === cat.id ? 'border-[#F26341] bg-black/60 shadow-2xl shadow-[#F26341]/20 md:scale-105' : 'border-white/40 bg-black/40 hover:bg-black/60 hover:border-white/60'}`}
                                >
                                    <div className={`transition-all duration-300 ${selectedCategory === cat.id ? 'text-[#F26341] scale-110' : 'text-white'}`}>
                                        <div className="scale-75 md:scale-100">{cat.icon}</div>
                                    </div>
                                    <span className="text-[8px] md:text-[10px] font-extrabold tracking-[0.15em] md:tracking-[0.2em] uppercase text-white leading-tight">{cat.label}</span>
                                    {selectedCategory === cat.id && (
                                        <motion.div layoutId="bubble" className="absolute top-2 right-2 md:top-4 md:right-4 bg-[#F26341] rounded-full p-1 md:p-1.5"><Check className="w-2.5 h-2.5 md:w-3 md:h-3 text-white stroke-[4]" /></motion.div>
                                    )}
                                </motion.button>
                            ))}
                        </div>
                        <motion.div variants={itemVariants} className="flex justify-between w-full mt-0 md:mt-2">
                            <button onClick={() => setStep("initial")} className="px-6 md:px-10 py-3 md:py-4 rounded-xl border-2 border-white/20 text-white/80 bg-black/60 hover:bg-white hover:text-black transition-all cursor-pointer font-bold text-[10px] md:text-sm tracking-widest uppercase">Back</button>
                            <button
                                onClick={() => {
                                    if (flow === "service" && selectedCategory !== "general") setStep("sub-selection");
                                    else setStep("form");
                                }}
                                disabled={!selectedCategory}
                                className={`px-8 md:px-12 py-3 md:py-4 rounded-xl font-extrabold text-[10px] md:text-sm tracking-widest uppercase transition-all shadow-xl ${selectedCategory ? 'bg-white text-black hover:bg-[#F26341] hover:text-white cursor-pointer active:scale-95' : 'bg-white/10 text-white/20 cursor-not-allowed'}`}
                            >Forward</button>
                        </motion.div>
                    </motion.div>
                )}

                {step === "sub-selection" && selectedCategory && (
                    <motion.div key="sub-selection" variants={stageVariants} initial="hidden" animate="visible" exit="exit" className="w-full max-w-4xl flex flex-col px-4 md:px-6 relative pt-12 md:pt-16">
                        <CloseButton />
                        <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-10 text-left">
                            <div className="w-1 md:w-1.5 h-8 md:h-10 bg-[#F26341] rounded-full" />
                            <div>
                                <h3 className="text-white text-xl md:text-2xl font-bold uppercase tracking-wider text-balance">Refine Selection</h3>
                                <p className="text-white/40 text-[10px] md:text-sm font-medium tracking-wide">Select the specific transport type.</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 w-full mb-4 md:mb-6">
                            {subSelections[selectedCategory]?.map((sub, idx) => (
                                <motion.button
                                    key={sub.value}
                                    variants={itemVariants}
                                    onClick={() => setSubSelected(sub.value)}
                                    className={`relative flex flex-col items-center justify-center gap-3 md:gap-4 p-8 md:p-12 rounded-xl md:rounded-2xl border-2 transition-all cursor-pointer active:scale-98 backdrop-blur-md ${subSelected === sub.value ? 'border-[#F26341] bg-black/60' : 'border-white/20 bg-black/40 hover:bg-black/60'}`}
                                >
                                    <span className="text-base md:text-lg font-bold text-white tracking-widest uppercase text-center">{sub.label}</span>
                                    {subSelected === sub.value && <div className="absolute top-3 right-3 md:top-4 md:right-4 bg-[#F26341] rounded-full p-1 md:p-1.5"><Check className="w-3.5 h-3.5 md:w-4 md:h-4 text-white stroke-[3]" /></div>}
                                </motion.button>
                            ))}
                        </div>
                        <motion.div variants={itemVariants} className="flex justify-between w-full mt-0 md:mt-2">
                            <button onClick={() => setStep("selection")} className="px-6 md:px-10 py-3 md:py-4 rounded-xl border-2 border-white/20 text-white/80 bg-black/60 hover:bg-white hover:text-black transition-all cursor-pointer font-bold text-[10px] md:text-sm tracking-widest uppercase">Back</button>
                            <button onClick={() => setStep("form")} disabled={!subSelected} className={`px-8 md:px-12 py-3 md:py-4 rounded-xl font-extrabold text-[10px] md:text-sm tracking-widest uppercase transition-all ${subSelected ? 'bg-white text-black hover:bg-[#F26341] hover:text-white cursor-pointer' : 'bg-white/10 text-white/20 cursor-not-allowed'}`}>Continue</button>
                        </motion.div>
                    </motion.div>
                )}

                {step === "form" && (
                    <motion.div
                        key="form"
                        variants={stageVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className={`w-full ${flow === "service" ? 'max-w-[1000px]' : 'max-w-[900px]'} flex flex-col items-center relative -mt-6 md:-mt-16`}
                    >
                        <div className="absolute inset-0 bg-black/40 backdrop-blur-[80px] rounded-[15px] border border-white/10 -z-10 shadow-2xl" />
                        <div className="w-full space-y-3 p-4 md:p-6 pb-6 md:pb-8 relative">
                            {flow === "service" ? (
                                <>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                                        <motion.div variants={itemVariants} className="relative">
                                            <input type="text" placeholder="PICKUP LOCATION" className={InputStyles} />
                                            <MapPin className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#F26341] pointer-events-none" />
                                        </motion.div>
                                        <motion.div variants={itemVariants} className="relative">
                                            <input type="text" placeholder="DELIVERY LOCATION" className={InputStyles} />
                                            <MapPin className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#F26341] pointer-events-none" />
                                        </motion.div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4">
                                        <motion.div variants={itemVariants} className="md:col-span-4 flex-1 flex flex-col">
                                            <div className="flex items-center gap-2 mb-2 ml-1">
                                                <span className="text-[7px] md:text-[9px] px-2 py-0.5 bg-[#F26341] text-white font-extrabold rounded-sm tracking-[0.1em] shadow-lg shadow-[#F26341]/20">
                                                    AUTOFILLED
                                                </span>
                                                <span className="text-[7px] md:text-[9px] font-bold text-white tracking-[0.15em] md:tracking-[0.2em] uppercase opacity-90">
                                                    FROM SELECTION
                                                </span>
                                            </div>
                                            <div className="relative">
                                                <input type="text" value={getSelectionDisplay()} readOnly className={`${InputStyles} border-[#F26341] text-[#F26341] bg-black/50 cursor-default shadow-inner`} />
                                            </div>
                                        </motion.div>
                                        <motion.div variants={itemVariants} className="md:col-span-4 flex flex-col">
                                            <span className="text-[7px] md:text-[9px] font-bold text-white tracking-[0.15em] md:tracking-[0.2em] uppercase mb-2 ml-1 opacity-70">Logistics Details</span>
                                            <div className="relative">
                                                <input type="text" placeholder="WEIGHT / VOLUME" className={InputStyles} />
                                                <Package className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#F26341] pointer-events-none" />
                                            </div>
                                        </motion.div>
                                        <motion.div variants={itemVariants} className="md:col-span-4 flex flex-col">
                                            <span className="text-[7px] md:text-[9px] font-bold text-white tracking-[0.15em] md:tracking-[0.2em] uppercase mb-2 ml-1 opacity-70">Preferred Timeline</span>
                                            <div className="relative">
                                                <input
                                                    type="text"
                                                    value={deliveryDate}
                                                    onChange={handleDateInput}
                                                    maxLength={14}
                                                    placeholder="DD / MM / YYYY"
                                                    className={InputStyles}
                                                />
                                                <button
                                                    type="button"
                                                    onClick={() => dateInputRef.current?.showPicker()}
                                                    className="absolute right-4 top-1/2 -translate-y-1/2 hover:scale-110 transition-transform active:scale-95 cursor-pointer"
                                                >
                                                    <CalendarIcon className="w-5 h-5 text-[#F26341]" />
                                                </button>
                                                <input
                                                    type="date"
                                                    ref={dateInputRef}
                                                    onChange={handleDatePickerChange}
                                                    className="absolute inset-0 opacity-0 pointer-events-none"
                                                />
                                            </div>
                                        </motion.div>
                                    </div>
                                    <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 pt-1 md:pt-2">
                                        <input type="email" placeholder="CONTACT E-MAIL" className={InputStyles} />
                                        <input type="text" placeholder="COMPANY NAME" className={InputStyles} />
                                    </motion.div>
                                </>
                            ) : (
                                <>
                                    <motion.div variants={itemVariants} className="w-full"><input type="text" placeholder="COMPANY NAME" className={InputStyles} /></motion.div>
                                    <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4">
                                        <motion.div variants={itemVariants} className="md:col-span-2 relative">
                                            <select className={`${InputStyles} appearance-none cursor-pointer pr-10 pl-6`}><option className="bg-[#121212]">Mr.</option><option className="bg-[#121212]">Ms.</option></select>
                                            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-white/50 w-4 h-4 pointer-events-none flex items-center justify-center"><ChevronDown className="w-4 h-4" /></div>
                                        </motion.div>
                                        <motion.div variants={itemVariants} className="md:col-span-5 flex-1"><input type="text" placeholder="FIRST NAME" className={InputStyles} /></motion.div>
                                        <motion.div variants={itemVariants} className="md:col-span-5 flex-1"><input type="text" placeholder="LAST NAME" className={InputStyles} /></motion.div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4">
                                        <motion.div variants={itemVariants} className="md:col-span-4 relative">
                                            <select className={`${InputStyles} appearance-none cursor-pointer pr-10 pl-6`}><option className="bg-[#121212]">Phone Prefix</option><option className="bg-[#121212]">+1</option><option className="bg-[#121212]">+44</option><option className="bg-[#121212]">+91</option></select>
                                            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 w-4 h-4 pointer-events-none flex items-center justify-center"><ChevronDown className="w-4 h-4" /></div>
                                        </motion.div>
                                        <motion.div variants={itemVariants} className="md:col-span-8"><input type="text" placeholder="PHONE NUMBER" className={InputStyles} /></motion.div>
                                    </div>
                                    <motion.div variants={itemVariants} className="w-full"><input type="email" placeholder="E-MAIL ADDRESS" className={InputStyles} /></motion.div>
                                    <motion.div variants={itemVariants} className="w-full"><input type="text" placeholder="COMPANY WEBSITE" className={InputStyles} /></motion.div>
                                </>
                            )}
                            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-between items-center w-full gap-4 pt-0">
                                <button onClick={() => setStep(flow === "service" && selectedCategory !== "general" ? "sub-selection" : "selection")} className="w-full sm:w-auto px-12 md:px-16 py-3 md:py-4 rounded-[5px] border-2 border-white/20 text-white/80 bg-black/60 font-bold text-[10px] md:text-[12px] tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all cursor-pointer">BACK</button>
                                <button className="w-full sm:w-auto px-12 md:px-16 py-3 md:py-4 rounded-[5px] bg-[#F26341] text-white font-extrabold text-[10px] md:text-[12px] tracking-[0.2em] uppercase hover:bg-[#ff7a5c] transition-all transform active:scale-95 cursor-pointer shadow-lg">SUBMIT INQUIRY</button>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Hero_Business;