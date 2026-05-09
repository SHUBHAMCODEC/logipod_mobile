"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const actualLogos = [
    "/images/asso_img/Asahi.svg",
    "/images/asso_img/ASP.svg",
    "/images/asso_img/attero recycling pvt ltd logo.svg",
    "/images/asso_img/c & s electric logo.svg",
    "/images/asso_img/db cables logo.svg",
    "/images/asso_img/gem empire logo.svg",
    "/images/asso_img/kundan hydro private limited logo.svg",
    "/images/asso_img/polycab india limited logo.svg",
    "/images/asso_img/prince pipes & fittings ltd. logo.svg",
    "/images/asso_img/uflex limited logo.svg",
    "/images/asso_img/utkarsh india limited logo.svg",
    "/images/asso_img/vip logo.svg",
    "/images/asso_img/vsl logistics logo.svg",
    "/images/asso_img/andhitech and hitech industries limited.svg",
    "/images/asso_img/godrej logo.svg",
    "/images/asso_img/gold plus float glass private limited logo.svg",
    "/images/asso_img/greenply industries limited logo.svg",
    "/images/asso_img/hamilton housewares pvt ltd logo.svg",
    "/images/asso_img/choksi exports logo.svg",
    "/images/asso_img/kore international logo.svg",
    "/images/asso_img/united foods logo.svg",
    "/images/asso_img/fivestar dehydration private limited logo.svg",
];

// 11 in row 1, 11 in row 2 = 22 total
const row1Logos = actualLogos.slice(0, 11);
const row2Logos = actualLogos.slice(11, 22);

const MarqueeRow = ({ images, direction }: { images: string[], direction: 1 | -1 }) => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    // Initialize the starting position for the right-to-left row so it doesn't jump
    useEffect(() => {
        if (direction === -1 && scrollRef.current) {
            scrollRef.current.scrollLeft = scrollRef.current.scrollWidth / 2;
        }
    }, [direction]);

    // Animation frame for smooth continuous scrolling
    useEffect(() => {
        let animationFrameId: number;

        const scroll = () => {
            if (scrollRef.current && !isHovered && !isDragging) {
                scrollRef.current.scrollLeft += direction * 0.5; // Decreased speed multiplier

                const maxScroll = scrollRef.current.scrollWidth / 2;

                // Reset scroll position for infinite loop effect
                if (direction === 1 && scrollRef.current.scrollLeft >= maxScroll) {
                    scrollRef.current.scrollLeft -= maxScroll;
                } else if (direction === -1 && scrollRef.current.scrollLeft <= 0) {
                    scrollRef.current.scrollLeft += maxScroll;
                }
            }
            animationFrameId = requestAnimationFrame(scroll);
        };

        animationFrameId = requestAnimationFrame(scroll);

        return () => cancelAnimationFrame(animationFrameId);
    }, [isHovered, isDragging, direction]);

    // Mouse and Touch Event Handlers for Dragging
    const handleDown = (e: React.MouseEvent | React.TouchEvent) => {
        setIsDragging(true);
        const pageX = 'touches' in e ? e.touches[0].pageX : (e as React.MouseEvent).pageX;
        setStartX(pageX - (scrollRef.current?.offsetLeft || 0));
        setScrollLeft(scrollRef.current?.scrollLeft || 0);
    };

    const handleLeaveOrUp = () => {
        setIsHovered(false);
        setIsDragging(false);
    };

    const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
        if (!isDragging) return;

        // Prevent default behavior to stop unwanted text selection or native touch gestures
        if ('preventDefault' in e && e.cancelable) e.preventDefault();

        const pageX = 'touches' in e ? e.touches[0].pageX : (e as React.MouseEvent).pageX;
        const x = pageX - (scrollRef.current?.offsetLeft || 0);
        const walk = (x - startX) * 2; // Multiplier for drag speed

        if (scrollRef.current) {
            scrollRef.current.scrollLeft = scrollLeft - walk;

            // Allow infinite wrapping while dragging manually
            const maxScroll = scrollRef.current.scrollWidth / 2;
            if (scrollRef.current.scrollLeft >= maxScroll) {
                scrollRef.current.scrollLeft -= maxScroll;
                setStartX(pageX - (scrollRef.current.offsetLeft || 0));
                setScrollLeft(scrollRef.current.scrollLeft);
            } else if (scrollRef.current.scrollLeft <= 0) {
                scrollRef.current.scrollLeft += maxScroll;
                setStartX(pageX - (scrollRef.current.offsetLeft || 0));
                setScrollLeft(scrollRef.current.scrollLeft);
            }
        }
    };

    // Render duplicated content for seamless infinite scrolling
    const content = [...images, ...images].map((src, idx) => (
        <div
            key={idx}
            className="flex-shrink-0 w-[220px] h-[120px] md:w-[300px] md:h-[160px] mx-3 md:mx-4 bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-[#f56243]/10 flex items-center justify-center p-3 md:p-5 hover:border-[#f56243]/40 hover:shadow-[0_8px_30px_rgba(245,98,67,0.15)] transition-all duration-300 group"
        >
            <div className="relative w-full h-full flex items-center justify-center">
                <Image
                    src={src}
                    alt={`Associate Logo`}
                    fill
                    sizes="(max-width: 768px) 220px, 300px"
                    className="object-contain transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => {
                        // Display a sleek placeholder if the user hasn't added the image yet
                        e.currentTarget.style.display = 'none';
                        const parent = e.currentTarget.parentElement;
                        if (parent && !parent.querySelector('.placeholder')) {
                            const placeholder = document.createElement('div');
                            placeholder.className = 'placeholder w-full h-full flex items-center justify-center text-[#f56243] font-black text-xl md:text-2xl opacity-20 tracking-wider';
                            placeholder.innerText = 'LOGO';
                            parent.appendChild(placeholder);
                        }
                    }}
                />
            </div>
        </div>
    ));

    return (
        <div
            ref={scrollRef}
            className="flex overflow-hidden cursor-grab active:cursor-grabbing py-6 touch-pan-y select-none"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleLeaveOrUp}
            onMouseDown={handleDown}
            onMouseUp={handleLeaveOrUp}
            onMouseMove={handleMove}
            onTouchStart={handleDown}
            onTouchEnd={handleLeaveOrUp}
            onTouchMove={handleMove}
        >
            {content}
        </div>
    );
};

export default function Associates() {
    return (
        <section className="relative w-full py-28 bg-[#FAFAFA] overflow-hidden">
            {/* Background design elements using company color #f56243 */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-[#f56243]/5 blur-[120px]" />
                <div className="absolute top-[60%] -right-[10%] w-[40%] h-[60%] rounded-full bg-[#f56243]/5 blur-[100px]" />
            </div>

            <div className="relative z-10 w-full flex flex-col items-center">
                <div className="text-center mb-16 px-6 md:px-12 flex flex-col items-center">

                    <h2 className="text-4xl md:text-6xl font-extrabold text-[#111111] mb-6 tracking-tight">
                        Empowering Industry <span className="text-[#f56243]">Leaders</span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto font-medium leading-relaxed text-balance">
                        Backed by a formidable network of <span className="text-[#111111] font-bold">45+ top-tier</span> associates and strategic partners, we deliver scalable, uninterrupted, and unmatched logistics solutions across the globe.
                    </p>
                </div>

                <div className="w-full flex flex-col gap-4 relative">
                    {/* Fade gradients for smooth edge masking */}
                    <div className="absolute top-0 left-0 w-24 md:w-48 h-full bg-gradient-to-r from-[#FAFAFA] to-transparent z-20 pointer-events-none" />
                    <div className="absolute top-0 right-0 w-24 md:w-48 h-full bg-gradient-to-l from-[#FAFAFA] to-transparent z-20 pointer-events-none" />

                    {/* Top Row: Left to Right */}
                    <MarqueeRow key="row-1" images={row1Logos} direction={1} />

                    {/* Bottom Row: Right to Left */}
                    <MarqueeRow key="row-2" images={row2Logos} direction={-1} />
                </div>
            </div>
        </section>
    );
}
