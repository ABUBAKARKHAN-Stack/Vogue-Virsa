import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import TopRatedProducts from "@/components/TopRatedProducts";
import WhyChooseUs from "@/components/WhyChooseUs";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Vogue Virsa - Home</title>
        <meta name="description" content="Discover the finest luxury fragrances at Vogue Virsa. Experience elegance, sophistication, and long-lasting scents." />
        <meta name="keywords" property="luxary perfumes, Vogue Virsa, elegant fragrances, premium scents" />
        <meta property="og:title" content="Luxury Perfumes - Vogue Virsa" />
        <meta property="og:description" content="Explore our premium fragrance collection, crafted with passion and tradition." />
        <meta property="og:image" content="/assets/herobg.png" />
        <meta property="og:url" content="https://vogue-virsa.vercel.app" />
        <meta name="robots" content="index, follow" />
      </Head>
      <div className="bg-background w-full h-full">
        <Navbar />
        <Hero />
        <TopRatedProducts />
        <WhyChooseUs />
        <h1 className="text-4xl text-wrap font-bold text-center text-red-500">Under Development</h1>
      </div>
    </>
  );
}
