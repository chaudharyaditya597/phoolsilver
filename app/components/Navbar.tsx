"use client";

import React, { useState, useEffect } from "react";
import { Phone, ShieldCheck, Menu, X, ShoppingBag } from "lucide-react";
import SilverLotusLogo from "./SilverLotusLogo";

interface NavbarProps {
  onOpenInquiry: (productName?: string) => void;
  cartCount: number;
}

export default function Navbar({ onOpenInquiry, cartCount }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-md py-2.5"
          : "bg-transparent py-3.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo with Authentic Metallic Silver Lotus */}
          <div
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="cursor-pointer flex items-center gap-3 group"
          >
            <div className="relative group-hover:scale-105 transition-transform duration-300">
              <SilverLotusLogo size={42} />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-black tracking-wider text-slate-900 font-serif silver-shimmer">
                  PHOOL™
                </span>
                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-300 px-2 py-0.5 rounded-full flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  100% Veg
                </span>
              </div>
              <p className="text-[11px] font-semibold text-amber-700 gold-shimmer font-serif">
                असली चाँदी, असली चमक
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-700">
            <button
              onClick={() => scrollToSection("products")}
              className="hover:text-sky-600 transition-colors py-1 hover:border-b-2 hover:border-sky-500"
            >
              Products & Sweets
            </button>
            <button
              onClick={() => scrollToSection("purity")}
              className="hover:text-sky-600 transition-colors py-1 hover:border-b-2 hover:border-sky-500"
            >
              Machine Purity
            </button>
            <button
              onClick={() => scrollToSection("calculator")}
              className="hover:text-sky-600 transition-colors py-1 hover:border-b-2 hover:border-sky-500"
            >
              Bulk Calculator
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="hover:text-sky-600 transition-colors py-1 hover:border-b-2 hover:border-sky-500"
            >
              Contact Us
            </button>
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="tel:+919997407674"
              className="flex items-center gap-2 px-3.5 py-2 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-sky-50 rounded-full border border-slate-200 transition-all hover:scale-105"
            >
              <Phone className="w-3.5 h-3.5 text-sky-600" />
              <span>+91 9997407674</span>
            </a>

            <button
              onClick={() => onOpenInquiry()}
              className="relative group flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-gradient-to-r from-sky-600 to-sky-500 hover:from-sky-500 hover:to-sky-400 rounded-full shadow-md shadow-sky-600/20 transition-all hover:scale-105"
            >
              <ShoppingBag className="w-4 h-4 text-white" />
              <span>Wholesale Quote</span>
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-amber-500 text-slate-950 font-bold text-[10px] w-5 h-5 rounded-full flex items-center justify-center shadow-md">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => onOpenInquiry()}
              className="p-2 text-slate-700 bg-slate-100 rounded-full border border-slate-200 relative"
            >
              <ShoppingBag className="w-5 h-5 text-sky-600" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-amber-500 text-slate-950 font-bold text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 bg-slate-100 rounded-lg border border-slate-200"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-4 pb-6 mt-3 space-y-3 shadow-xl animate-in slide-in-from-top-4 duration-300">
          <div className="p-3 bg-sky-50 rounded-xl border border-sky-100 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-sky-600" />
              <span className="text-xs font-semibold text-slate-800">FSSAI Lic: 22726379000386</span>
            </div>
            <span className="text-[10px] text-amber-800 font-bold bg-amber-100 px-2 py-0.5 rounded">
              99.9% Pure Silver
            </span>
          </div>

          <button
            onClick={() => scrollToSection("products")}
            className="w-full text-left py-2 px-3 rounded-lg hover:bg-slate-50 text-slate-700 font-medium"
          >
            Products & Silver Sweets
          </button>
          <button
            onClick={() => scrollToSection("purity")}
            className="w-full text-left py-2 px-3 rounded-lg hover:bg-slate-50 text-slate-700 font-medium"
          >
            Computerized Machine Purity
          </button>
          <button
            onClick={() => scrollToSection("calculator")}
            className="w-full text-left py-2 px-3 rounded-lg hover:bg-slate-50 text-slate-700 font-medium"
          >
            Bulk Requirement Calculator
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="w-full text-left py-2 px-3 rounded-lg hover:bg-slate-50 text-slate-700 font-medium"
          >
            Contact & Factory Location
          </button>

          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry();
              }}
              className="w-full py-3 bg-sky-600 text-white font-bold rounded-xl text-center shadow-md text-sm"
            >
              Get Bulk Wholesale Quote
            </button>
            <a
              href="tel:+919997407674"
              className="w-full py-2.5 bg-slate-100 text-slate-800 font-semibold rounded-xl text-center text-xs flex items-center justify-center gap-2 border border-slate-200"
            >
              <Phone className="w-4 h-4 text-sky-600" /> Call Direct: +91 9997407674
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
