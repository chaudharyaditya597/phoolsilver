"use client";

import React from "react";
import { Star, Quote, Award, CheckCircle2, ThumbsUp } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      name: "Shri Radhey Shyam Halwai",
      role: "Owner, Radhey Sweets & Confectionery",
      city: "Moradabad, UP",
      review: "We have been using Phool Silver Leaves for Kaju Katli and Milk Cake during Diwali for 3 years. The shine is unmatched and because it is 100% computerized machine-made, our Jain customers trust our purity completely.",
      rating: 5,
      verifiedPack: "Master Pack (250 Sheets)"
    },
    {
      name: "Master Chef Rajesh Agarwal",
      role: "Head Pastry & Mithai Chef",
      city: "Delhi NCR",
      review: "The uniform thickness of Phool Silver Leaf makes transfer onto delicate Paan bites and Kheer bowls so effortless. Zero tearing or wasted foil. High-grade purity you can feel.",
      rating: 5,
      verifiedPack: "Pure Silver Booklet (100 Sheets)"
    },
    {
      name: "Gupta Sweets & Caterers",
      role: "Wedding & Banquet Sweets Bulk Supplier",
      city: "Jaipur, Rajasthan",
      review: "Direct factory pricing from Moradabad saves us thousands during peak wedding season. Prompt dispatch and FSSAI batch verification gives us 100% confidence.",
      rating: 5,
      verifiedPack: "Commercial Pack (500 Sheets)"
    }
  ];

  return (
    <section className="py-24 bg-[#060a12] relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs font-bold text-amber-300">
            <ThumbsUp className="w-3.5 h-3.5" />
            Trusted Across India
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-serif tracking-tight">
            What <span className="silver-shimmer">Master Sweet Makers</span> Say
          </h2>
          <p className="text-slate-400 text-sm">
            Over 500+ confectioners, halwais, and premium sweet shops rely on PHOOL™ Silver Leaves daily.
          </p>
        </div>

        {/* Reviews Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, index) => (
            <div
              key={index}
              className="silver-card rounded-3xl p-7 flex flex-col justify-between space-y-6 relative group"
            >
              <Quote className="w-10 h-10 text-slate-800 absolute top-6 right-6 pointer-events-none group-hover:text-slate-700 transition-colors" />

              <div className="space-y-4 relative z-10">
                {/* Rating */}
                <div className="flex text-amber-400">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-slate-300 italic leading-relaxed">
                  "{rev.review}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800 space-y-2">
                <div>
                  <h4 className="text-sm font-bold text-white">{rev.name}</h4>
                  <p className="text-xs text-amber-400">{rev.role} • {rev.city}</p>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] text-emerald-400 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified Buyer: {rev.verifiedPack}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
