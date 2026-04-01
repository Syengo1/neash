import Link from "next/link";
import { Sparkles, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-[85vh] flex items-center justify-center px-4 relative overflow-hidden bg-neash-light">
      
      {/* Decorative Background Glows */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-neash-base/10 rounded-full blur-[100px] pointer-events-none animate-pulse duration-1000" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-neash-accent/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Main Content Glass Card */}
      <div className="relative z-10 max-w-lg w-full bg-white/40 dark:bg-background/40 backdrop-blur-2xl border border-neash-dark/10 p-10 md:p-14 rounded-[2.5rem] shadow-xl text-center flex flex-col items-center">
        
        {/* Floating Icon Animation */}
        <div className="w-20 h-20 bg-neash-base/10 rounded-full flex items-center justify-center mb-8 animate-[bounce_3s_ease-in-out_infinite]">
          <Sparkles className="w-10 h-10 text-neash-base" />
        </div>

        {/* Thematic Error Copy */}
        <h1 className="text-4xl md:text-5xl font-bold text-neash-dark tracking-tight mb-4">
          Mixing the perfect <span className="text-neash-base italic">shade...</span>
        </h1>
        
        <p className="text-neash-dark/70 text-base md:text-lg mb-8 leading-relaxed">
          Looks like you've stumbled into the lab! This page is currently in development and getting its final glossy finish. Check back soon.
        </p>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
          <Button 
            asChild
            size="lg"
            className="bg-neash-base hover:bg-neash-dark text-neash-light rounded-full transition-all duration-300 w-full sm:w-auto px-8"
          >
            <Link href="/products">
              Shop Current Glosses
            </Link>
          </Button>
          
          <Button 
            asChild
            variant="ghost" 
            size="lg"
            className="text-neash-dark hover:bg-neash-dark/5 hover:text-neash-base rounded-full transition-all duration-300 w-full sm:w-auto px-8 flex gap-2"
          >
            <Link href="/">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </Button>
        </div>

        {/* Subtle Watermark */}
        <span className="absolute bottom-6 font-bold text-[10rem] tracking-tighter text-neash-dark/[0.03] select-none pointer-events-none z-[-1]">
          404
        </span>

      </div>
    </div>
  );
}