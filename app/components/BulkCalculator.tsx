"use client";

import React, { useState } from "react";
import { Calculator, Sparkles, Send, CheckCircle2 } from "lucide-react";

interface BulkCalculatorProps {
  onOpenInquiry: (customMessage?: string) => void;
}

export default function BulkCalculator({ onOpenInquiry }: BulkCalculatorProps) {
  const [sweetType, setSweetType] = useState<string>("kaju_katli");
  const [quantityKg, setQuantityKg] = useState<number>(25);

  const sheetsPerKgMap: Record<string, number> = {
    kaju_katli: 4.2,
    barfi: 3.8,
    peda: 2.5,
    paan: 5.0,
    kheer: 1.5,
  };

  const sheetsPerKg = sheetsPerKgMap[sweetType] || 4.0;
  const totalSheetsNeeded = Math.ceil(quantityKg * sheetsPerKg);
  const recommended250Packs = Math.ceil(totalSheetsNeeded / 250);
  const estimatedCost = recommended250Packs * 1199;

  const handleExportWhatsApp = () => {
    const sweetNameFormatted =
      sweetType === "kaju_katli"
        ? "Kaju Katli"
        : sweetType === "barfi"
        ? "Mawa Barfi"
        : sweetType === "peda"
        ? "Kesar Peda"
        : sweetType === "paan"
        ? "Meetha Paan"
        : "Royal Sweets";

    const message = `Hello Phool Silver Leaves, I calculated my sweet production bulk need on your website:
- Sweet Type: ${sweetNameFormatted}
- Quantity: ${quantityKg} kg
- Estimated Vark Sheets Required: ${totalSheetsNeeded} sheets
- Recommended Booklets: ${recommended250Packs} x 250-Sheet Master Pack
Please send me direct factory wholesale quote & delivery details for Moradabad dispatch.`;

    onOpenInquiry(message);
  };

  return (
    <section id="calculator" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-xs font-bold text-sky-700">
            <Calculator className="w-3.5 h-3.5" />
            Halwai Requirement Estimator
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-serif tracking-tight">
            Sweet Maker <span className="text-sky-600">Bulk Calculator</span>
          </h2>
          <p className="text-slate-600 text-sm">
            Calculate exact Phool Silver Leaf booklet needs based on your production volume in kilograms.
          </p>
        </div>

        {/* Calculator Container */}
        <div className="max-w-3xl mx-auto rounded-3xl bg-slate-50 border border-slate-200 p-6 sm:p-8 space-y-6 shadow-sm">
          
          {/* Sweet Selection */}
          <div className="space-y-2">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
              1. Select Mithai / Sweet Type
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
              {[
                { id: "kaju_katli", label: "Kaju Katli", icon: "🔷" },
                { id: "barfi", label: "Mawa Barfi", icon: "🔳" },
                { id: "peda", label: "Kesar Peda", icon: "🟡" },
                { id: "paan", label: "Shahi Paan", icon: "🍃" },
                { id: "kheer", label: "Shahi Kheer", icon: "🥣" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setSweetType(item.id)}
                  className={`p-3 rounded-xl border text-center flex flex-col items-center justify-center gap-1 transition-all ${
                    sweetType === item.id
                      ? "bg-sky-600 border-sky-600 text-white font-bold shadow-md"
                      : "bg-white border-slate-200 text-slate-700 hover:border-slate-300"
                  }`}
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-xs">{item.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Batch Quantity Slider */}
          <div className="space-y-3 bg-white p-5 rounded-2xl border border-slate-200">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                2. Sweet Production Batch (in Kg)
              </label>
              <span className="text-lg font-extrabold text-sky-700 bg-sky-50 px-3 py-0.5 rounded-lg border border-sky-200">
                {quantityKg} Kg
              </span>
            </div>

            <input
              type="range"
              min="5"
              max="500"
              step="5"
              value={quantityKg}
              onChange={(e) => setQuantityKg(Number(e.target.value))}
              className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-sky-600"
            />
          </div>

          {/* Estimation Summary Box */}
          <div className="bg-gradient-to-r from-sky-600 to-sky-700 rounded-2xl p-6 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
            <div className="space-y-1 text-center sm:text-left">
              <span className="text-xs text-sky-200 font-bold uppercase">Estimated Vark Need</span>
              <h3 className="text-3xl font-extrabold font-serif">~ {totalSheetsNeeded} Silver Sheets</h3>
              <p className="text-xs text-sky-100">
                Recommended: <strong className="text-white">{recommended250Packs} x 250-Sheet Master Packs</strong> (Est. ₹{estimatedCost})
              </p>
            </div>

            <button
              onClick={handleExportWhatsApp}
              className="px-6 py-3.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold rounded-xl text-xs flex items-center gap-2 shadow-lg transition-transform hover:scale-105 shrink-0"
            >
              <Send className="w-4 h-4" />
              <span>Get Direct WhatsApp Quote</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
