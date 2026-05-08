"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import Image from "next/image";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};
export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const [rotations, setRotations] = useState<number[]>(() =>
    testimonials.map(() => Math.floor(Math.random() * 21) - 10)
  );

  useEffect(() => {
    setRotations(testimonials.map(() => Math.floor(Math.random() * 21) - 10));
  }, [testimonials]);

  return (
    <div className="mx-auto max-w-full px-4 py-8 font-sans antialiased md:max-w-5xl md:px-8 lg:px-12">
      <div className="relative grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
        <div>
          <div className="relative h-[450px] w-full">
            <AnimatePresence mode="popLayout">
              {testimonials.map((testimonial, index) => {
                const isItemActive = isActive(index);
                const isNext = index === (active + 1) % testimonials.length;

                if (!isItemActive && !isNext) return null;

                return (
                  <motion.div
                    key={testimonial.name}
                    initial={{
                      opacity: 0,
                      scale: 0.9,
                      z: -100,
                      rotate: mounted ? rotations[index] || 0 : 0,
                    }}
                    animate={{
                      opacity: isItemActive ? 1 : 0.4,
                      scale: isItemActive ? 1 : 0.9,
                      z: isItemActive ? 0 : -100,
                      rotate: isItemActive ? 0 : (mounted ? rotations[index] || 0 : 0),
                      zIndex: isItemActive ? 40 : 30,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.9,
                      z: 100,
                      rotate: mounted ? rotations[index] || 0 : 0,
                    }}
                    transition={{
                      duration: 0.4,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 origin-bottom will-change-transform"
                  >
                    <Image
                      src={testimonial.src}
                      alt={testimonial.name}
                      width={800}
                      height={800}
                      draggable={false}
                      className="h-full w-full rounded-3xl object-cover object-top shadow-xl"
                      priority={isItemActive}
                    />
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
        <div className="flex flex-col justify-center py-4">
          <motion.div
            key={active}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
          >
            <h3 className="text-2xl md:text-3xl font-black text-[#252B61] dark:text-white">
              {testimonials[active].name}
            </h3>
            <p className="text-sm md:text-base text-[#F36440] font-bold mt-1">
              {testimonials[active].designation}
            </p>
            <motion.p className="mt-4 text-lg md:text-xl font-medium text-gray-600 leading-relaxed italic dark:text-neutral-300">
              {testimonials[active].quote.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{
                    filter: "blur(10px)",
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.02 * index,
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </motion.div>
          <div className="flex gap-4 pt-6">
            <button
              onClick={handlePrev}
              className="group/button flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md border border-gray-100 hover:bg-[#252B61] transition-all duration-300"
            >
              <ArrowLeft className="h-5 w-5 text-black group-hover:text-white transition-transform duration-300 group-hover/button:rotate-12" />
            </button>
            <button
              onClick={handleNext}
              className="group/button flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md border border-gray-100 hover:bg-[#252B61] transition-all duration-300"
            >
              <ArrowRight className="h-5 w-5 text-black group-hover:text-white transition-transform duration-300 group-hover/button:-rotate-12" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
