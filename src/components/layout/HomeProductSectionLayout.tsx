import React from 'react'
import { Button } from '../ui/button'
import { BlurFade } from '../ui/blur-fade-animation'
import Image from 'next/image'
import Link from 'next/link'

type ProductData = {
    src: string;
    productName: string;
    perfumeFor: string;
    originalPrice: number;
    disPrice: number;
    description: string;
};


type TypeProductSectionLayout = {
    sectionHeading: string;
    sectionDescription: string;
    categoryHeading: string;
    productData: ProductData[]
}

const HomeProductsSectionLayout = ({ sectionHeading, sectionDescription, categoryHeading, productData }: TypeProductSectionLayout) => {

    return (
        <div className="max-w-6xl mx-auto">

            <BlurFade inView>
                {/* Section Title */}
                <h1
                    className="text-5xl font-bold text-center text-[#101828]">
                    {sectionHeading}
                </h1>

                <p className="text-center text-lg text-[#4A5565] mt-2">
                    {sectionDescription}
                </p>
            </BlurFade>

            {/* Product Cards Grid */}
            <div className="mt-10 relative overflow-x-auto whitespace-nowrap scrollbar">
                {/* Sticky Header */}
                <BlurFade inView className="flex sticky py-5 top-0 left-0  z-10 w-full justify-between items-center">
                    <h2 className="sm:text-4xl  xs:text-3xl text-2xl text-wrap font-bold">{categoryHeading}</h2>
                    <Link href={'/'} className="font-semibold underline text-lg">
                        View All
                    </Link>
                </BlurFade>

                {/* Product List */}
                <div className=" flex flex-nowrap lg:grid lg:grid-cols-4 gap-5 lg:gap-x-2 lg:gap-y-8 lg:justify-center">
                    {productData?.slice(0, 8).map(({ src, productName, originalPrice, disPrice, perfumeFor, description }, i) => (
                        <BlurFade
                            key={i}
                            className="bg-[#FEFEFE] min-w-[300px]  sm:min-w-[350px] md:min-w-[400px] lg:min-w-full flex flex-col gap-y-2 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                            delay={0.25 + i * 0.05}
                            inView
                        >

                            {/* Product Image */}
                            <div className="relative w-full h-56 flex justify-center">
                                <Image
                                    src={src}
                                    alt={`${productName} Image`}
                                    width={250}
                                    height={250}
                                    className="object-contain"
                                />
                            </div>

                            {/* Product Name */}
                            <h3 className="text-xl font-bold mt-4 text-black">
                                {productName}
                            </h3>

                            {/* Product Description */}
                            <p className="text-[#4A5565] text-xs font-normal 2xl:text-sm custom-wrap">
                                {description}
                            </p>

                            {/* Perfume Type (Mens/Womens) */}
                            <div>
                                <span className={`py-1 px-3 ${perfumeFor === "Mens" ? "bg-[#00C950]" : "bg-[#F6339A]"} w-fit rounded font-semibold text-xs text-white`}>
                                    For: {perfumeFor}
                                </span>
                            </div>

                            {/* Price Section */}
                            <div className="flex items-center gap-2">

                                <h5 className="text-black text-base font-normal">
                                    Rs: {disPrice}
                                </h5>
                                <h5 className="text-black line-through text-sm font-light">
                                    {originalPrice}
                                </h5>
                            </div>

                            {/* View Details Button */}
                            <Button className="px-4 cursor-pointer py-2 w-fit rounded-md bg-black text-white font-light hover:bg-[#333333] transition-all">
                                View Details
                            </Button>
                        </BlurFade>
                    ))}
                </div>
            </div>



        </div>
    )
}

export default HomeProductsSectionLayout