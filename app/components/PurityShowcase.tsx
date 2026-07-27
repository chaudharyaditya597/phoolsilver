"use client";

import React from "react";
import { Cpu, ShieldCheck, Check, Sparkles, Award, FileText, Factory } from "lucide-react";

export default function PurityShowcase() {
  return (
    <section id="purity" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-xs font-bold text-sky-700">
            <Cpu className="w-3.5 h-3.5" />
            Machine Made Quality Guarantee
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-serif tracking-tight">
            Why <span className="text-sky-600">PHOOL™ Silver Leaves</span> Are Trusted
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Produced in a 100% touchless computerized facility from 99.9% certified silver bullion bars.
          </p>
        </div>

        {/* 3 Clean Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="p-7 rounded-2xl light-card space-y-4">
            <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-200 text-sky-600 flex items-center justify-center text-xl">
              ⚙️
            </div>
            <h3 className="text-xl font-bold text-slate-900 font-serif">100% Touchless Machine</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Unlike traditional manual beating, PHOOL™ silver leaves are manufactured using touchless automated machinery, guaranteeing maximum hygiene and uniform smooth sheets.
            </p>
            <ul className="space-y-2 text-xs text-slate-700 font-medium border-t border-slate-100 pt-3">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Zero human contact during processing</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Micro-thin uniform application on sweets</span>
              </li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="p-7 rounded-2xl light-card space-y-4">
            <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 text-amber-700 flex items-center justify-center text-xl">
              🥇
            </div>
            <h3 className="text-xl font-bold text-slate-900 font-serif">99.9% Pure Silver Bar</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Crafted exclusively from 99.9% certified pure silver bullion bars. 100% edible (E 174 food additive grade) and 100% Pure Vegetarian for Jain and festive sweets.
            </p>
            <ul className="space-y-2 text-xs text-slate-700 font-medium border-t border-slate-100 pt-3">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Certified E 174 Edible Metal Grade</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Zero heavy metals, nickel or impurities</span>
              </li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="p-7 rounded-2xl light-card space-y-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center justify-center text-xl">
              📜
            </div>
            <h3 className="text-xl font-bold text-slate-900 font-serif">FSSAI Certified Facility</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Manufactured under strict Food Safety and Standards Authority of India guidelines (FSSAI Lic. No. <strong className="text-slate-900">22726379000386</strong>) in Moradabad, Uttar Pradesh.
            </p>
            <ul className="space-y-2 text-xs text-slate-700 font-medium border-t border-slate-100 pt-3">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>24 Months Moisture Sealed Shelf Life</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Make in India & Swachh Bharat approved</span>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}
