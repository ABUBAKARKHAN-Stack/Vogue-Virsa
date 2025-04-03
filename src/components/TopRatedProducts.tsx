import React from 'react'
import HomeProductsSectionLayout from './layout/HomeProductSectionLayout'
import productsData from '@/data/productsData.json'

const TopRatedProducts = () => {
    return (
        <section className='py-16 px-6'>
            <HomeProductsSectionLayout
                sectionHeading={"Discover Your Signature Scent"}
                sectionDescription={"Explore our best-selling fragrances, crafted for style, elegance, and long-lasting impressions."}
                categoryHeading={"Top Picks for You"}
                productData={productsData}
            />
        </section>
    )
}

export default TopRatedProducts
