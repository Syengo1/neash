import Link from "next/link";
import { Product } from "@/data/products";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group flex flex-col gap-3 relative">
      {/* The Image Container: 
        Aspect-[4/5] ensures all images are perfectly uniform and slightly tall, 
        which is the golden standard for fashion and beauty e-commerce. 
      */}
      <Link href={`/products/${product.id}`} className="relative block aspect-[4/5] overflow-hidden rounded-2xl bg-neash-dark/5">
        
        {/* 'New' Badge - Positions intelligently */}
        {product.isNew && (
          <span className="absolute top-3 left-3 z-10 bg-neash-base text-neash-light text-[10px] md:text-xs font-bold px-2 py-1 rounded-full uppercase tracking-widest">
            New
          </span>
        )}

        {/* Placeholder for the actual image. 
            The group-hover class handles the intelligent zoom effect. */}
        <div 
          className="w-full h-full transition-transform duration-700 ease-in-out group-hover:scale-105 flex items-center justify-center shadow-inner"
          style={{ backgroundColor: product.colorHex }}
        >
          {/* Text placeholder for visualization until images are added */}
          <span className="text-neash-dark/40 font-bold tracking-widest uppercase opacity-50 mix-blend-overlay">
            {product.name}
          </span>
        </div>
      </Link>

      {/* Product Info - Kept small on mobile (text-sm) */}
      <div className="flex flex-col gap-1 px-1">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-sm md:text-base font-bold text-neash-dark leading-tight">
              {product.name}
            </h3>
            <p className="text-xs md:text-sm text-neash-dark/60 mt-0.5">
              {product.shade}
            </p>
          </div>
          <span className="text-sm md:text-base font-semibold text-neash-dark">
            Ksh {product.price}
          </span>
        </div>

        {/* Quick Add Button - Only appears on hover on desktop, always there but subtle on mobile */}
        <Button 
          variant="ghost" 
          className="mt-2 w-full flex items-center justify-center gap-2 bg-neash-dark/5 hover:bg-neash-base hover:text-neash-light text-neash-dark transition-colors rounded-xl md:opacity-0 md:-translate-y-2 md:group-hover:opacity-100 md:group-hover:translate-y-0 duration-300 h-9 md:h-10 text-xs md:text-sm"
        >
          <ShoppingBag className="w-4 h-4" />
          Quick Add
        </Button>
      </div>
    </div>
  );
}