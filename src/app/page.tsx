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
    </div>
  );
}
