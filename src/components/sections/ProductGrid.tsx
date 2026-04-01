import { PRODUCTS } from "@/data/products";
import ProductCard from "@/components/ui/ProductCard";

export default function ProductGrid() {
  return (
    <section className="py-20 md:py-32 px-4 md:px-8 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="flex flex-col items-center justify-center text-center mb-12 md:mb-16 gap-4">
        <h2 className="text-3xl md:text-5xl font-bold text-neash-dark tracking-tight">
          The <span className="text-neash-base italic">Signature</span> Collection
        </h2>
        <p className="text-sm md:text-base text-neash-dark/70 max-w-xl">
          Four distinct shades, one universal shine. Carefully formulated to glide on smoothly, leaving a glassy, non-sticky finish.
        </p>
      </div>

      {/* The Intelligent Grid:
        - Mobile: grid-cols-2 (2 items side by side, perfectly small)
        - Tablet: md:grid-cols-3
        - Desktop: lg:grid-cols-4 
        - Gap: gap-x-4 gap-y-10 creates vertical breathing room.
      */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10 md:gap-x-8 md:gap-y-16">
        {PRODUCTS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

    </section>
  );
}