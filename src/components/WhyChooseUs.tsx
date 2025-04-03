"use client"

import React, { useEffect, useState } from 'react'
import whyChooseUsData from '@/data/whyChoodeUs.json'
import { CheckCircle2, HeadphonesIcon, LeafIcon, LucideIcon, ShieldCheckIcon, StarIcon, TruckIcon } from 'lucide-react'
import Image from 'next/image'
import { BlurFade } from './ui/blur-fade-animation'

const WhyChooseUs = () => {
    const iconMap:
        Record<string, LucideIcon> = {
        "check-circle": CheckCircle2,
        "truck": TruckIcon,
        "headphones": HeadphonesIcon,
        "star": StarIcon,
        "shield-check": ShieldCheckIcon,
        "leaf": LeafIcon,
    };

    type Data = {
        description:string;
        icon:string;
        title:string
    }

    const [leftHandSide, setLeftHandSide] = useState<Data[]>([])
    const [rightHandSide, setRightHandSide] = useState<Data[]>([])

    useEffect(() => {
        const middleIndex = Math.floor(whyChooseUsData.length / 2);
        const firstHalf = whyChooseUsData.slice(0, middleIndex);
        const secondHalf = whyChooseUsData.slice(middleIndex)
        setLeftHandSide(firstHalf);
        setRightHandSide(secondHalf)
        console.log(firstHalf);
        
    }, [])

    return (
        <section className='py-16 px-6 max-w-6xl mx-auto w-full'>

            <BlurFade inView>
                {/* Section Title */}
                <h1
                    className="text-5xl font-bold text-center text-[#101828]">
                    Why Choose Us?
                </h1>

                <p className="text-center text-lg text-[#4A5565] mt-2">
                    At Vogue Virsa, we craft more than perfumes—we create timeless experiences. Our luxurious fragrances blend elegance and tradition, leaving a lasting impression with every scent.
                </p>
            </BlurFade>
            <div className="grid grid-cols-1 md:grid-cols-3 mt-10 gap-y-8 md:gap-x-20 place-content-between place-items-center mx-auto w-full">
                {/* Left Column */}
                <div className="space-y-8 order-2 lg:order-1">
                    {leftHandSide.map(({ icon, title, description }, i) => {
                        const IconComponent = iconMap[icon];
                        return (
                            <BlurFade inView delay={0.25 + i * 0.05} key={i} className="flex flex-col items-center md:items-start gap-y-1">
                                <div className="p-2.5 rounded-full bg-[#FEF9C2] w-fit">
                                    <IconComponent className="size-8 text-[#F0B100]" />
                                </div>
                                <h3 className="text-center md:text-start font-semibold text-lg">{title}</h3>
                                <p className="text-center md:text-start max-w-3/4 md:max-w-full font-extralight text-base">{description}</p>
                            </BlurFade>
                        );
                    })}
                </div>

                {/* Image in Center */}
                <BlurFade inView className="m-auto space-y-8 order-1 lg:order-2 flex justify-center w-full items-center">
                    <div className="size-90 lg:block hidden absolute animate-pulse rounded-full bg-yellow-400"></div>
                    <div className="relative mx-auto w-full flex justify-center items-center">
                        <Image
                            src="/assets/why-choose.webp"
                            alt="Why Choose Us"
                            width={350}
                            height={350}
                            // objectFit="contain"
                            className="relative object-contain animate-plse w-[300px] sm:w-[350px] md:w-[230px]"
                            style={{
                                filter: "drop-shadow(0px 0px 2px #000)"
                            }}
                        />
                    </div>
                </BlurFade>

                {/* Right Column */}
                <div className="space-y-8 order-3 lg:order-3">
                    {rightHandSide.map(({ icon, title, description }, i) => {
                        const IconComponent = iconMap[icon];
                        return (
                            <BlurFade inView delay={0.25 + i * 0.05} key={i} className="flex flex-col items-center md:items-start gap-y-1">
                                <div className="p-2.5 rounded-full bg-[#FEF9C2] w-fit">
                                    <IconComponent className="size-8 text-[#F0B100]" />
                                </div>
                                <h3 className="text-center md:text-start font-semibold text-lg">{title}</h3>
                                <p className="text-center md:text-start max-w-3/4 md:max-w-full font-extralight text-base">{description}</p>
                            </BlurFade>
                        );
                    })}
                </div>
            </div>

        </section>
    )
}

export default WhyChooseUs