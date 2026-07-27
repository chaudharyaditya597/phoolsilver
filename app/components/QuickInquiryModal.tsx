"use client";

import React, { useState, useEffect } from "react";
import { X, MessageCircle, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";

interface QuickInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProductName?: string;
  initialMessage?: string;
}

export default function QuickInquiryModal({
  isOpen,
  onClose,
  initialProductName = "",
  initialMessage = "",
}: QuickInquiryModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [businessType, setBusinessType] = useState("Sweet Shop / Halwai");
  const [product, setProduct] = useState(initialProductName || "Master Pack (250 Sheets)");
  const [customNotes, setCustomNotes] = useState(initialMessage || "");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialProductName) setProduct(initialProductName);
    if (initialMessage) setCustomNotes(initialMessage);
  }, [initialProductName, initialMessage]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
    });

    const message = `*NEW WHOLESALE INQUIRY - PHOOL SILVER LEAVES*
- Name: ${name || "Valued Client"}
- Business Type: ${businessType}
- Phone: ${phone}
- City/State: ${city}
- Preferred Product: ${product}
- Requirement Notes: ${customNotes || "Bulk rate quote requested."}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919997407674?text=${encodedMessage}`;

    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white border border-slate-200 rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-5 relative shadow-2xl overflow-hidden">
        
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-sky-500 via-amber-400 to-sky-600"></div>

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 p-2 rounded-full hover:bg-slate-100"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-700 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> Factory Wholesale Inquiry
          </div>
          <h3 className="text-2xl font-bold text-slate-900 font-serif">PHOOL™ Silver Leaves Quote</h3>
          <p className="text-xs text-slate-600">
            Get instant factory rates for 99.9% pure silver leaves & sweet packs.
          </p>
        </div>

        {submitted ? (
          <div className="py-8 text-center space-y-4 animate-in zoom-in-95 duration-300">
            <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center text-3xl mx-auto shadow-sm">
              ✓
            </div>
            <h4 className="text-xl font-bold text-slate-900 font-serif">Inquiry Transmitted!</h4>
            <p className="text-xs text-slate-600 max-w-sm mx-auto">
              Connecting you directly with Moradabad sales helpline (+91 9997407674). You will receive our wholesale rate card on WhatsApp.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="px-6 py-2.5 bg-slate-900 text-white font-bold rounded-xl text-xs hover:bg-slate-800"
            >
              Close Window
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3 text-xs">
            <div className="space-y-1">
              <label className="block text-slate-700 font-bold">Full Name / Business Name *</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Radhey Sweets / Agarwal Halwai"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="block text-slate-700 font-bold">Mobile / WhatsApp *</label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. 9997407674"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500 font-mono"
                />
              </div>

              <div className="space-y-1">
                <label className="block text-slate-700 font-bold">City / State *</label>
                <input
                  type="text"
                  required
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="e.g. Moradabad / Delhi"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="block text-slate-700 font-bold">Business Category</label>
                <select
                  value={businessType}
                  onChange={(e) => setBusinessType(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:border-sky-500"
                >
                  <option>Sweet Shop / Halwai</option>
                  <option>Confectionery Manufacturer</option>
                  <option>Bakery / Gourmet Pastry</option>
                  <option>Wedding & Event Caterer</option>
                  <option>Retail Customer</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="block text-slate-700 font-bold">Preferred Product</label>
                <select
                  value={product}
                  onChange={(e) => setProduct(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:border-sky-500"
                >
                  <option>Master Pack (250 Sheets)</option>
                  <option>Pure Silver Booklet (100 Sheets)</option>
                  <option>Commercial Pack (500 Sheets)</option>
                  <option>Shahi Diamond Kaju Katli</option>
                </select>
              </div>
            </div>

            <div className="space-y-1">
              <label className="block text-slate-700 font-bold">Requirement Notes / Quantity</label>
              <textarea
                rows={2}
                value={customNotes}
                onChange={(e) => setCustomNotes(e.target.value)}
                placeholder="Specify target delivery date, sheet size, or quantity..."
                className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500 resize-none"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-xs shadow-md flex items-center justify-center gap-2 transition-transform hover:scale-[1.02]"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Launch Direct WhatsApp Wholesale Quote</span>
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
}
