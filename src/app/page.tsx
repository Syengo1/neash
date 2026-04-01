import Hero from "@/components/sections/Hero";
import ProductGrid from "@/components/sections/ProductGrid";
import Footer from "@/components/shared/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-neash-light flex flex-col">
      <Hero />
      <ProductGrid />
      <Footer />
    </main>
  );
}