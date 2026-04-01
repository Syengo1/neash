"use client";

import { Star, Quote } from "lucide-react";

// Contextual Mock Data tailored to Neash Africa
const REVIEWS = [
  {
    id: 1,
    name: "Amina M.",
    handle: "@amina_glows",
    text: "The 'Choco' shade is an absolute game-changer for dark skin. It's so deeply pigmented but still has that glassy finish. Obsessed!",
    rating: 5,
  },
  {
    id: 2,
    name: "Sarah K.",
    handle: "@sarah.style",
    text: "I wear 'Aura' every single day. It’s completely non-sticky, heavily hydrating, and survives my morning coffee. Highly recommend.",
    rating: 5,
  },
  {
    id: 3,
    name: "Joy N.",
    handle: "@joy_finds",
    text: "Finally, an African brand doing luxury right. The packaging is gorgeous, and 'Kiss' gives the perfect subtle pink tint.",
    rating: 5,
  },
  {
    id: 4,
    name: "Chloe T.",
    handle: "@chloee_t",
    text: "The shine on these is unreal. 'Hot' looks intimidating in the tube but goes on as this beautiful, wearable flush of red.",
    rating: 5,
  },
  {
    id: 5,
    name: "Faith W.",
    handle: "@faith_w",
    text: "Fast delivery and the aesthetic is stunning. It actually feels like a lip treatment rather than just a cosmetic gloss.",
    rating: 5,
  },
];

export default function Reviews() {
  // We duplicate the array so the marquee loop is perfectly seamless without white space
  const doubledReviews = [...REVIEWS, ...REVIEWS];

  return (
    <section className="py-24 overflow-hidden bg-neash-light relative border-t border-neash-dark/5">
      
      {/* Subtle Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-neash-base/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neash-accent/5 rounded-full blur-3xl pointer-events-none" />

      {/* Section Header */}
      <div className="text-center px-4 max-w-2xl mx-auto mb-16 relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-neash-dark tracking-tight mb-4">
          Confidence, <span className="text-neash-base italic">Confirmed.</span>
        </h2>
        <p className="text-neash-dark/70 text-base">
          Don't just take our word for it. Here is what our community has to say about the signature collection.
        </p>
      </div>

      {/* Marquee Container */}
      {/* The transparent gradient masks on the sides create a fading effect so cards don't just cut off sharply */}
      <div className="relative w-full max-w-[100vw] flex overflow-hidden group [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        
        {/* The Animated Track */}
        {/* 'group-hover:[animation-play-state:paused]' is the UX secret weapon here */}
        <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused] gap-6 px-3">
          {doubledReviews.map((review, index) => (
            <div 
              key={`${review.id}-${index}`} 
              className="w-[300px] md:w-[400px] flex-shrink-0 bg-white/60 dark:bg-background/40 backdrop-blur-xl border border-neash-dark/10 p-6 md:p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow duration-300 relative"
            >
              {/* Decorative Quote Icon */}
              <Quote className="absolute top-6 right-6 w-8 h-8 text-neash-base/10 rotate-180" />
              
              {/* Star Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-neash-accent text-neash-accent/100" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-neash-dark/80 text-sm md:text-base leading-relaxed mb-6 italic">
                "{review.text}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-3 mt-auto">
                <div className="w-10 h-10 rounded-full bg-neash-dark/5 flex items-center justify-center text-neash-dark font-bold text-sm">
                  {review.name.charAt(0)}
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-neash-dark">{review.name}</span>
                  <span className="text-xs text-neash-dark/50">{review.handle}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}