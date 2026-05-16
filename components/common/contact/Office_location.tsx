"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { MapPin, Map, Navigation } from "lucide-react";
import { motion } from "motion/react";

const offices = [
    {
        city: "Gurugram",
        title: "Head Office",
        address: "3rd Floor, 448a, Udyog Vihar Phase V Rd, Phase V, Udyog Vihar, Sector 19, Gurugram, Haryana 122016",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d209.73433677522195!2d77.0855606902528!3d28.497138621507244!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d190007e78df1%3A0x47a79c948d1df2f1!2sSharkship!5e1!3m2!1sen!2sin!4v1777446251728!5m2!1sen!2sin",
        mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d209.73433677522195!2d77.0855606902528!3d28.497138621507244!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d190007e78df1%3A0x47a79c948d1df2f1!2sSharkship!5e1!3m2!1sen!2sin!4v1777446251728!5m2!1sen!2sin"
    },
    {
        city: "Dankuni",
        title: "Regional Office",
        address: "Dankuni, West Bengal 712311, India",
        mapUrl: "https://www.google.com/maps/place/22%C2%B040'44.4%22N+88%C2%B018'07.3%22E/@22.6789917,88.3020308,17z/",
        mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3523.141797742998!2d88.29945587530362!3d22.678991679416107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjLCsDQwJzQ0LjQiTiA4OMKwMTgnMDcuMyJF!5e1!3m2!1sen!2sin!4v1778905407225!5m2!1sen!2sin"
    },
    {
        city: "Nipani",
        title: "Regional Office",
        address: "Athani Residency Park, NH Service Rd, Nipani, Karnataka 591237, India",
        mapUrl: "https://www.google.com/maps/place/Athani+Residency+Park/@16.3963927,74.3745363,17z/",
        mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3663.0939442400013!2d74.37453626!3d16.39639267!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc0f3713ee81509%3A0xdeb8db897587a2db!2sAthani%20Residency%20Park!5e1!3m2!1sen!2sin!4v1778905453523!5m2!1sen!2sin"
    },
    {
        city: "Haridwar",
        title: "Regional Office",
        address: "Sector 3, BHEL Haridwar, Uttarakhand 249403, India",
        mapUrl: "https://www.google.com/maps/place/29%C2%B056'03.4%22N+78%C2%B004'32.5%22E/@29.9342836,78.0757002,17z/",
        mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3309.002391271959!2d78.07312217554953!3d29.934283574979215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDU2JzAzLjQiTiA3OMKwMDQnMzIuNSJF!5e1!3m2!1sen!2sin!4v1778905472807!5m2!1sen!2sin"
    }
];

export default function Office_location() {
    return (
        <section className="w-full py-24 bg-white relative overflow-hidden">

            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-[500px] bg-[#F26341]/5 rounded-bl-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/4 h-[400px] bg-[#272D6D]/5 rounded-tr-full blur-3xl pointer-events-none" />

            <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">

                {/* Section Heading */}
                <div className="text-center max-w-3xl mx-auto mb-20">


                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-black text-[#272D6D] tracking-tight mb-6"
                    >
                        Our <span className="text-[#F26341]">Locations</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-500 text-lg font-medium leading-relaxed"
                    >
                        With strategically located regional hubs and offices, we ensure seamless logistics operations across the country.
                    </motion.p>
                </div>

                {/* 3D Cards Grid - Balanced for 4 cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-8 gap-y-12 max-w-5xl mx-auto">
                    {offices.map((office, idx) => (
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            key={idx}
                        >
                            <CardContainer 
                                className="w-full"
                                containerClassName="py-0 flex items-center justify-center h-full w-full"
                            >
                                <CardBody className="bg-[#FAFAFA] border border-gray-100 relative group/card hover:shadow-2xl hover:shadow-[#272D6D]/5 w-full h-full rounded-[1.5rem] p-6 lg:p-8 flex flex-col justify-between transition-all duration-300 !w-full !h-auto min-h-[460px]">

                                    <div className="flex flex-col gap-5">
                                        {/* Header Info */}
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <CardItem
                                                    translateZ="30"
                                                    className="text-2xl font-black text-[#272D6D]"
                                                >
                                                    {office.city}
                                                </CardItem>
                                                <CardItem
                                                    translateZ="40"
                                                    as="p"
                                                    className="text-[#F26341] text-[13px] font-bold uppercase tracking-widest mt-1"
                                                >
                                                    {office.title}
                                                </CardItem>
                                            </div>
                                            <CardItem translateZ="20">
                                                <div className="w-10 h-10 rounded-full bg-white shadow-sm border border-gray-50 flex items-center justify-center">
                                                    <MapPin className="w-5 h-5 text-[#272D6D]" />
                                                </div>
                                            </CardItem>
                                        </div>

                                        {/* Geo Location Placeholder (Replaces Image) */}
                                        <CardItem
                                            translateZ="60"
                                            className="w-full mt-2"
                                        >
                                            <div className="w-full h-44 bg-white rounded-2xl shadow-inner border border-gray-100 flex flex-col items-center justify-center gap-3 group-hover/card:border-[#F26341]/20 transition-colors relative overflow-hidden">
                                                {office.mapEmbedUrl ? (
                                                    <iframe
                                                        src={office.mapEmbedUrl}
                                                        width="100%"
                                                        height="100%"
                                                        style={{ border: 0 }}
                                                        allowFullScreen={false}
                                                        loading="lazy"
                                                        referrerPolicy="no-referrer-when-downgrade"
                                                        className="absolute inset-0 z-10 pointer-events-auto"
                                                    ></iframe>
                                                ) : (
                                                    <>
                                                        {/* Background Map Pattern (Placeholder) */}
                                                        <div
                                                            className="absolute inset-0 opacity-[0.03]"
                                                            style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=%2220%22 height=%2220%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cpath d=%22M0 0h20v20H0z%22 fill=%22none%22/%3E%3Cpath d=%22M10 2c-3.3 0-6 2.7-6 6 0 4.5 6 10 6 10s6-5.5 6-10c0-3.3-2.7-6-6-6zm0 8.5c-1.4 0-2.5-1.1-2.5-2.5S8.6 5.5 10 5.5s2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5z%22 fill=%22%23272D6D%22/%3E%3C/svg%3E')" }}
                                                        />
                                                        <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center z-10 relative">
                                                            <Map className="text-gray-400 w-5 h-5" />
                                                        </div>
                                                        <span className="text-[13px] text-gray-500 font-bold uppercase tracking-wider z-10 relative">
                                                            Map View Space
                                                        </span>
                                                    </>
                                                )}
                                            </div>
                                        </CardItem>

                                        {/* Full Address Text */}
                                        <CardItem
                                            as="div"
                                            translateZ="50"
                                            className="text-gray-600 text-[15px] font-medium leading-relaxed mt-2"
                                        >
                                            <div className="flex items-start gap-2">
                                                <Navigation className="w-4 h-4 text-[#F26341] shrink-0 mt-1" />
                                                <span className="whitespace-pre-line">{office.address}</span>
                                            </div>
                                        </CardItem>
                                    </div>

                                    {/* Single CTA Button: Get on map */}
                                    <div className="flex justify-center items-center mt-8 pt-4 border-t border-gray-100">
                                        <CardItem
                                            translateZ={20}
                                            as="a"
                                            href={office.mapUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-full py-3.5 rounded-xl bg-[#272D6D] text-white text-[15px] font-bold hover:bg-[#F26341] transition-colors flex items-center justify-center gap-2 group/btn shadow-[0_4px_15px_rgba(39,45,109,0.15)] hover:shadow-[0_4px_20px_rgba(242,99,65,0.3)]"
                                        >
                                            Get on Map
                                            <ArrowRightIcon className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                                        </CardItem>
                                    </div>

                                </CardBody>
                            </CardContainer>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// Simple Arrow Right Icon component
function ArrowRightIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
        </svg>
    );
}
