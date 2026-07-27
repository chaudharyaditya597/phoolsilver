"use client";

import React from "react";
import { Sparkles, ShieldCheck, Cpu, ArrowRight, PhoneCall, Star } from "lucide-react";
import SilverLotusLogo from "./SilverLotusLogo";

interface HeroProps {
  onOpenInquiry: (productName?: string) => void;
  onExploreProducts: () => void;
}

export default function Hero({ onOpenInquiry, onExploreProducts }: HeroProps) {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden sky-gradient-bg border-b border-sky-100">
      
      {/* Decorative Packaging Sky Blue Arc Background Element */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-sky-200/50 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-amber-200/40 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Hero Information */}
          <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
            
            {/* Top Packaging Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-sky-200 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-sky-500 animate-ping" />
              <span className="text-xs font-bold text-slate-800 tracking-wide flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-sky-600" />
                100% Touchless Computerized Machine Made
              </span>
            </div>

            {/* Main Branding Headlines */}
            <div className="space-y-1">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 font-serif leading-tight">
                <span className="silver-shimmer block">PHOOL™ SILVER LEAVES</span>
                <span className="text-2xl sm:text-3xl text-amber-700 font-serif font-bold block mt-1 gold-shimmer">
                  असली चाँदी, असली चमक
                </span>
              </h1>
              <p className="text-slate-700 font-medium text-base sm:text-lg pt-2">
                Pure Edible Silver Vark (चाँदी के वर्क) for Sweets & Confectionery
              </p>
            </div>

            {/* Short Paragraph Description */}
            <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Crafted from <strong className="text-slate-900 font-bold">99.9% Pure Silver Bar</strong> using advanced touchless automated machines. Trusted by leading sweet makers and confectioners for unmatched purity, brilliance, and hygiene.
            </p>

            {/* Packaging Highlights Pills Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
              <div className="p-3 rounded-xl bg-white border border-sky-100 shadow-sm text-center">
                <ShieldCheck className="w-5 h-5 text-sky-600 mx-auto mb-1" />
                <span className="text-xs font-bold text-slate-900 block">99.9% Pure</span>
                <span className="text-[10px] text-slate-500">Silver Bar Guaranteed</span>
              </div>
              <div className="p-3 rounded-xl bg-white border border-sky-100 shadow-sm text-center">
                <span className="text-lg font-bold text-emerald-600 block mb-0.5">100%</span>
                <span className="text-xs font-bold text-slate-900 block">Pure Vegetarian</span>
                <span className="text-[10px] text-slate-500">E 174 Food Grade</span>
              </div>
              <div className="p-3 rounded-xl bg-white border border-sky-100 shadow-sm text-center">
                <Sparkles className="w-5 h-5 text-amber-500 mx-auto mb-1" />
                <span className="text-xs font-bold text-slate-900 block">FSSAI Lic.</span>
                <span className="text-[10px] text-slate-500 font-mono">22726379000386</span>
              </div>
              <div className="p-3 rounded-xl bg-white border border-sky-100 shadow-sm text-center">
                <span className="text-sm font-bold text-sky-700 block mt-1">24 Months</span>
                <span className="text-xs font-bold text-slate-900 block">Shelf Life</span>
                <span className="text-[10px] text-slate-500">Moisture Sealed</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-3">
              <button
                onClick={onExploreProducts}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-sm shadow-md shadow-sky-600/20 hover:scale-105 transition-all flex items-center justify-center gap-2"
              >
                <span>View Products Range</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onOpenInquiry("Pure Silver Vark Booklet Pack")}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-300 font-bold text-sm transition-all hover:scale-105 flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4 text-amber-700" />
                <span>Get Bulk Wholesale Quote</span>
              </button>
            </div>

            {/* Rating / Trust Line */}
            <div className="pt-3 flex items-center justify-center lg:justify-start gap-4 text-slate-600 text-xs border-t border-sky-200/60">
              <div className="flex items-center gap-1.5">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <span className="font-bold text-slate-800">4.9 / 5.0</span>
                <span>(500+ Sweet Shops)</span>
              </div>
              <span>•</span>
              <span className="font-semibold text-slate-700">Moradabad, UP Factory Direct</span>
            </div>

          </div>

          {/* Right Column: Packaging Card Replica with Authentic Silver Lotus Logo */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Packaging Replica Container */}
              <div className="rounded-3xl p-6 bg-white border border-slate-200 shadow-xl space-y-4">
                
                {/* Header Badge */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-3.5 h-3.5 rounded-full bg-emerald-500 flex items-center justify-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                    </span>
                    <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
                      Pure Vegetarian (E 174)
                    </span>
                  </div>
                  <span className="text-xs font-bold text-amber-800 bg-amber-50 border border-amber-200 px-2.5 py-0.5 rounded-full">
                    99.9% Purity Guaranteed
                  </span>
                </div>

                {/* Center Visual Motif featuring Authentic Metallic Silver Lotus */}
                <div className="p-6 bg-gradient-to-b from-sky-50 to-amber-50/50 rounded-2xl border border-sky-100 text-center space-y-3">
                  <div className="w-28 h-28 bg-white rounded-full mx-auto flex items-center justify-center border-2 border-slate-200 shadow-md animate-float p-2">
                    <SilverLotusLogo size={88} />
                  </div>

                  <div>
                    <h3 className="text-3xl font-black text-slate-900 font-serif tracking-wider">
                      PHOOL™
                    </h3>
                    <p className="text-xs font-bold text-amber-700 font-serif">
                      असली चाँदी, असली चमक
                    </p>
                  </div>

                  <p className="text-xs font-semibold text-sky-800 uppercase tracking-widest bg-sky-100/80 py-1 rounded-md">
                    SILVER LEAVES / चाँदी के वर्क
                  </p>
                </div>

                {/* Product Dish Card */}
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2.5">
                    <span className="text-2xl">🔷</span>
                    <div>
                      <span className="font-bold text-slate-900 block">Kaju Katli & Mithai</span>
                      <span className="text-slate-500 text-[11px]">Adorned with Phool Vark</span>
                    </div>
                  </div>
                  <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    100% Edible
                  </span>
                </div>

                {/* Packaging Footer Specifications */}
                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-medium">
                  <span>Moradabad, Uttar Pradesh</span>
                  <span className="font-mono text-sky-700 font-bold">FSSAI: 22726379000386</span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
