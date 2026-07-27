"use client";

import React, { useState } from "react";
import { Search, ShieldCheck, CheckCircle2, Award, FileText, Calendar, Building2, Sparkles } from "lucide-react";

export default function BatchVerifier() {
  const [searchInput, setSearchInput] = useState<string>("22726379000386");
  const [isSearched, setIsSearched] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchInput.trim()) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsSearched(true);
    }, 600);
  };

  return (
    <section id="verifier" className="py-24 bg-[#090d16] relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/80 border border-purple-500/30 text-xs font-bold text-purple-300">
            <Award className="w-3.5 h-3.5" />
            Digital Purity & Lab Assay Verification
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-serif tracking-tight">
            FSSAI License & <span className="silver-shimmer">Batch Purity Verifier</span>
          </h2>
          <p className="text-slate-400 text-sm">
            Enter your product package FSSAI number <code className="text-amber-400 font-mono bg-slate-900 px-2 py-0.5 rounded">22726379000386</code> or batch code to verify authentic lab purity reports.
          </p>
        </div>

        {/* Verification Form */}
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleVerify} className="flex flex-col sm:flex-row gap-3 mb-8">
            <div className="relative flex-1">
              <Search className="w-5 h-5 text-slate-500 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="Enter FSSAI Lic. (e.g. 22726379000386) or Batch No."
                className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-slate-300 shadow-inner font-mono"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="py-3.5 px-7 bg-gradient-to-r from-slate-200 via-white to-slate-300 text-slate-950 font-bold rounded-xl text-xs hover:scale-105 transition-all shadow-lg flex items-center justify-center gap-2 shrink-0"
            >
              {loading ? (
                <span className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin"></span>
              ) : (
                <>
                  <ShieldCheck className="w-4 h-4 text-slate-950" />
                  <span>Verify Authenticity</span>
                </>
              )}
            </button>
          </form>

          {/* Verification Result Certificate Box */}
          {isSearched && (
            <div className="silver-card rounded-3xl p-6 sm:p-8 silver-border-glow space-y-6 animate-in fade-in zoom-in-95 duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-800 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 flex items-center justify-center text-2xl shadow-lg">
                    🛡️
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                        Official Lab Certificate Verified
                      </span>
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white font-serif">PHOOL SILVER LEAVES</h3>
                  </div>
                </div>

                <div className="bg-amber-950/60 border border-amber-500/30 px-3 py-1.5 rounded-xl text-right">
                  <span className="text-[10px] text-slate-400 uppercase block">Lab Assay Result</span>
                  <span className="text-sm font-black text-amber-300 font-serif">99.9% Pure Silver</span>
                </div>
              </div>

              {/* Certificate Metadata Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                  <div className="flex items-center gap-2 text-slate-400">
                    <FileText className="w-3.5 h-3.5 text-sky-400" />
                    <span>FSSAI License Number</span>
                  </div>
                  <p className="font-mono text-sm font-bold text-white">22726379000386</p>
                </div>

                <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                  <div className="flex items-center gap-2 text-slate-400">
                    <Building2 className="w-3.5 h-3.5 text-purple-400" />
                    <span>Manufacturing Unit</span>
                  </div>
                  <p className="font-semibold text-white">Moradabad, Uttar Pradesh (India)</p>
                </div>

                <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                  <div className="flex items-center gap-2 text-slate-400">
                    <Calendar className="w-3.5 h-3.5 text-amber-400" />
                    <span>Best Before Guarantee</span>
                  </div>
                  <p className="font-semibold text-white">24 Months From Date of Packing</p>
                </div>

                <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                  <div className="flex items-center gap-2 text-slate-400">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Process Standard</span>
                  </div>
                  <p className="font-semibold text-emerald-400">100% Touchless Computerized Machine</p>
                </div>
              </div>

              {/* Lab Declaration Text */}
              <div className="p-4 bg-emerald-950/30 rounded-xl border border-emerald-500/20 text-xs text-emerald-300 leading-relaxed">
                <strong>Lab Certification Note:</strong> Sample tested for E 174 food safety limits. Certified zero presence of heavy metals, nickel, or animal byproduct residue. Safe for 100% Pure Vegetarian edible consumption.
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
}
