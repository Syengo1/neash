"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

// Mock Images - Replace with actual Neash Africa photography
const HERO_IMAGES = [
  {
    id: 1,
    url: "/lip1.jpg", // Warm tone, radiant skin
    alt: "Model wearing Neash Africa Gloss",
  },
  {
    id: 2,
    url: "/lip2.jpg", // Product placement/aesthetic
    alt: "Neash Africa lip gloss collection",
  },
  {
    id: 3,
    url: "/lip3.jpg", // Close up, rich melanin
    alt: "Close up of glossy lips",
  },
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Handle the soothing slideshow interval
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === HERO_IMAGES.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Changes every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-neash-dark/10">
      
      {/* Background Slideshow Engine */}
      {HERO_IMAGES.map((image, index) => {
        const isActive = index === currentImageIndex;
        return (
          <div
            key={image.id}
            className={`absolute inset-0 w-full h-full transition-opacity duration-[2000ms] ease-in-out ${
              isActive ? "opacity-100 z-0" : "opacity-0 -z-10"
            }`}
          >
            <Image
              src={image.url}
              alt={image.alt}
              fill
              priority={index === 0} // Only pre-load the first image for LCP performance
              className={`object-cover object-center transition-transform duration-[7000ms] ease-out ${
                isActive ? "scale-105" : "scale-100"
              }`}
            />
          </div>
        );
      })}

      {/* The Overlay: 
        Crucial for text readability. A warm, dark gradient that fades up from the bottom 
        and radially from the center so the text always pops regardless of the photo behind it. 
      */}
      <div className="absolute inset-0 bg-gradient-to-t from-neash-dark/60 via-neash-dark/20 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-black/20 z-10 pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto flex flex-col items-center gap-6 md:gap-8 mt-16 md:mt-0">
        
        {/* Eyebrow text */}
        <span className="text-neash-base font-bold tracking-[0.2em] uppercase text-xs md:text-sm drop-shadow-md">
          Introducing Neash Africa
        </span>

        {/* Main Headline - Switched to light text for contrast against the photos */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-neash-light tracking-tight leading-[1.1] drop-shadow-lg">
          Unveil Your <br className="hidden md:block" />
          <span className="text-neash-base italic pr-2">Radiance.</span>
        </h1>
        
        {/* Subheadline */}
        <p className="text-base md:text-xl text-neash-light/90 max-w-2xl font-sans font-medium drop-shadow-md">
          Discover high-shine, deeply hydrating glosses crafted to complement every shade of melanin. Authentic. Bold. Unapologetically African.
        </p>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row gap-4 mt-6 w-full sm:w-auto">
          <Button 
            size="lg"
            className="bg-neash-base hover:bg-white hover:text-neash-dark text-neash-light px-10 py-6 text-base md:text-lg rounded-full transition-all duration-300 w-full sm:w-auto border border-transparent hover:border-white shadow-[0_0_20px_rgba(226,114,91,0.3)]"
          >
            Shop The Gloss
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-neash-light text-neash-light hover:bg-neash-light hover:text-neash-dark px-10 py-6 text-base md:text-lg rounded-full transition-all duration-300 w-full sm:w-auto backdrop-blur-sm bg-black/10"
          >
            Our Story
          </Button>
        </div>

        {/* Slideshow Indicators (Dots) */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-30">
          {HERO_IMAGES.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                index === currentImageIndex 
                  ? "w-8 bg-neash-base" 
                  : "w-2 bg-neash-light/50 hover:bg-neash-light/80"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}