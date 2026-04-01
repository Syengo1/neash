"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Intelligent Scroll Handler
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Smart Hide/Show Logic
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        // User is scrolling down & past the hero header - hide navbar
        setIsVisible(false);
        setIsMobileMenuOpen(false); // Auto-close mobile menu if open
      } else {
        // User is scrolling up - show navbar
        setIsVisible(true);
      }

      // Glassmorphism trigger
      setIsScrolled(currentScrollY > 20);
      setLastScrollY(currentScrollY);
    };

    // Use passive listener for better scroll performance
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Shop Glosses", href: "/products" },
    { name: "Our Story", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div
        // 1. Swapped to bg-background/70 so it automatically perfectly matches Light or Dark mode.
        // 2. Removed bg-transparent. It is now ALWAYS frosted, preventing text collisions at the top of the page.
        className={`w-full transition-all duration-300 bg-background/70 backdrop-blur-2xl supports-[backdrop-filter]:bg-background/50 ${
          isScrolled
            ? "border-b border-foreground/10 shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
            : "border-b border-transparent shadow-none"
        }`}
      >
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
          <div className="flex justify-between items-center h-20">
            {/* Logo Area */}
            <div className="flex-shrink-0 flex items-center">
              <Link
                href="/"
                className="text-2xl font-bold tracking-tighter text-neash-dark hover:opacity-80 transition-opacity"
              >
                NEASH <span className="text-neash-base italic">AFRICA</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative text-neash-dark/80 hover:text-neash-dark font-medium transition-colors duration-200 text-sm uppercase tracking-wider group"
                >
                  {link.name}
                  {/* Premium animated underline effect */}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-neash-base transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </nav>

            {/* Right Side Actions (Cart & Mobile Toggle) */}
            <div className="flex items-center gap-2 md:gap-4">
              <Button
                variant="ghost"
                size="icon"
                className="text-neash-dark hover:text-neash-base hover:bg-neash-dark/5 relative rounded-full h-10 w-10 transition-all duration-300"
                aria-label="Shopping Cart"
              >
                <ShoppingBag className="h-5 w-5" />
                {/* Notification Dot */}
                <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-neash-base border-2 border-neash-light animate-pulse"></span>
              </Button>

              {/* Mobile Menu Button */}
              <div className="md:hidden flex items-center">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="text-neash-dark hover:bg-neash-dark/5 rounded-full h-10 w-10 transition-all duration-300"
                  aria-label="Toggle Menu"
                >
                  {isMobileMenuOpen ? (
                    <X className="h-6 w-6" />
                  ) : (
                    <Menu className="h-6 w-6" />
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown - Fully Frosted */}
      <div
        className={`md:hidden absolute top-20 left-0 w-full overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "max-h-[400px] opacity-100 visible"
            : "max-h-0 opacity-0 invisible"
        }`}
      >
        <div className="bg-neash-light/80 backdrop-blur-2xl supports-[backdrop-filter]:bg-neash-light/60 border-b border-neash-dark/10 shadow-xl">
          <div className="px-6 py-4 flex flex-col space-y-2">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-4 text-lg font-medium text-neash-dark border-b border-neash-dark/5 hover:text-neash-base transition-colors duration-200"
                style={{
                  transitionDelay: `${index * 50}ms`,
                }}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}