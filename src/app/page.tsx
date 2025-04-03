import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import TopRatedProducts from "@/components/TopRatedProducts";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <div className="bg-background w-full h-full">
      <Navbar />
      <Hero />
      <TopRatedProducts />
      <WhyChooseUs />
      <h1 className="text-4xl text-wrap font-bold text-center text-red-500">Under Development</h1>
    </div>
  );
}
