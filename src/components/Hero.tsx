"use client";
import React from 'react'
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { motion } from 'motion/react'
import { poppins } from '@/utils/font'
import Image from 'next/image';

const Hero = () => {
    return (
        <section className="relative overflow-hidden flex flex-col justify-center items-center min-h-screen">
            {/* Background Image */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="relative w-full h-full"
                    initial={{ opacity: 0, filter: "blur(5px)" }}
                    animate={{ opacity: 1, filter: "blur(0px)" }}
                    transition={{ ease: "easeIn", duration: 1.5 }}
                >
                    <Image
                        src="/assets/herobg.png"
                        alt="Vogue Virsa Hero Background"
                        fill
                        className="w-full h-full object-cover"
                    />
                </motion.div>
                <motion.div
                    className="absolute inset-0 bg-black"
                    initial={{ opacity: 0.2 }}
                    animate={{ opacity: [0.2, 0.35, 0.2] }}
                    transition={{ duration: 3, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
                />
            </div>

            {/* Vogue Virsa Text & Button Container */}
            <div className="text-center relative z-20 flex flex-col justify-center items-center gap-y-5 text-primary">
                <motion.h1
                    className={`text-5xl md:text-7xl tracking-wide font-extrabold uppercase mb-1`}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    style={{ textShadow: "2px 2px 10px rgba(0,0,0,0.5)" }}
                >
                    Elevate Your Scent
                </motion.h1>

                <motion.h2
                    className={`text-base px-[2px] md:text-lg font-medium text-primary leading-[1.8]`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                >
                    Discover luxury fragrances crafted for timeless elegance.
                </motion.h2>

                <motion.p
                    className={`text-base sm:px-0 px-2 leading-[1.8] mt-1 md:text-lg text-primary max-w-xl mx-auto`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.6 }}
                >
                    <span className="font-semibold">Vogue Virsa</span> blends modern sophistication with timeless tradition,
                    curating exquisite scents that define elegance and individuality.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.9 }}
                >
                    <Button className="mt-4 px-6 py-6 md:py-5 cursor-pointer rounded-md text-black font-semibold hover:bg-transparent border-4 border-white hover:text-white hover:scale-105 duration-300 ease-linear hover:shadow-black hover:shadow-2xl transition-all">
                        Explore Collection
                    </Button>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
