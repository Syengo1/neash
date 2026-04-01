'use client';

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Custom Social Icons matching Lucide's premium aesthetic
const InstagramIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neash-dark text-neash-light pt-20 pb-10 px-4 md:px-8 border-t border-neash-dark/10">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Column */}
          <div className="flex flex-col gap-6 lg:col-span-1">
            <Link href="/" className="text-3xl font-bold tracking-tighter text-neash-light hover:text-neash-base transition-colors">
              NEASH <span className="text-neash-light italic">AFRICA</span>
            </Link>
            <p className="text-neash-light/70 text-sm leading-relaxed max-w-sm">
              Authentic, bold, and unapologetically African. High-shine, deeply hydrating glosses crafted to complement every shade of melanin.
            </p>
            {/* Social Icons - Swapped to custom SVGs */}
            <div className="flex gap-4 mt-2">
              <a href="https://www.instagram.com/neash_africa/" target="_blank" rel="noopener noreferrer" className="p-2 bg-neash-light/5 rounded-full hover:bg-neash-base hover:text-neash-dark transition-all duration-300">
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-neash-light/5 rounded-full hover:bg-neash-base hover:text-neash-dark transition-all duration-300">
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-neash-light/5 rounded-full hover:bg-neash-base hover:text-neash-dark transition-all duration-300">
                <TwitterIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-6">
            <h4 className="text-lg font-semibold tracking-wide uppercase text-neash-light">Explore</h4>
            <nav className="flex flex-col gap-3">
              {['Shop All', 'The Signature Collection', 'Our Story', 'Ingredients', 'Contact Us'].map((item) => (
                <Link key={item} href="#" className="text-neash-light/70 hover:text-neash-light transition-colors w-fit text-sm">
                  {item}
                </Link>
              ))}
            </nav>
          </div>

          {/* Customer Care */}
          <div className="flex flex-col gap-6">
            <h4 className="text-lg font-semibold tracking-wide uppercase text-neash-light">Support</h4>
            <nav className="flex flex-col gap-3">
              {['FAQ', 'Shipping & Returns', 'Track Order', 'Privacy Policy', 'Terms of Service'].map((item) => (
                <Link key={item} href="#" className="text-neash-light/70 hover:text-neash-light transition-colors w-fit text-sm">
                  {item}
                </Link>
              ))}
            </nav>
          </div>

          {/* Newsletter Column */}
          <div className="flex flex-col gap-6 lg:col-span-1">
            <h4 className="text-lg font-semibold tracking-wide uppercase text-neash-light">Join The Club</h4>
            <p className="text-neash-light/70 text-sm">
              Subscribe to receive updates, access to exclusive deals, and more.
            </p>
            <form className="flex flex-col gap-3 mt-2" onSubmit={(e) => e.preventDefault()}>
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="w-full bg-neash-light/5 border border-neash-light/20 rounded-full py-3 px-5 text-sm text-neash-light placeholder:text-neash-light/40 focus:outline-none focus:border-neash-base transition-colors"
                  required
                />
                <Button 
                  type="submit" 
                  size="icon"
                  className="absolute right-1 top-1 bottom-1 h-auto rounded-full bg-neash-base hover:bg-neash-light hover:text-neash-dark text-neash-dark transition-colors"
                >
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-neash-light/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neash-light/50">
          <p>&copy; {currentYear} Neash Africa. All rights reserved.</p>
          
          {/* Developer Tag */}
          <div className="flex items-center gap-1.5 backdrop-blur-sm bg-neash-light/5 px-4 py-2 rounded-full border border-neash-light/10">
            <span>Crafted by</span>
            <a 
              href="https://antony-syengo.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-bold text-neash-light hover:text-neash-base transition-all duration-300 flex items-center gap-1 group relative"
            >
              Syengo
              {/* Subtle animated underline */}
              <span className="absolute -bottom-0.5 left-0 w-0 h-[1px] bg-neash-base transition-all duration-300 group-hover:w-full"></span>
              {/* Premium diagonal arrow animation */}
              <svg 
                className="w-3 h-3 opacity-70 group-hover:opacity-100 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-neash-base" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}