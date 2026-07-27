"use client";

import React from "react";
import { Phone, Mail, MapPin, ShieldCheck, MessageCircle, Send } from "lucide-react";
import SilverLotusLogo from "./SilverLotusLogo";

interface ContactFooterProps {
  onOpenInquiry: () => void;
}

export default function ContactFooter({ onOpenInquiry }: ContactFooterProps) {
  return (
    <footer id="contact" className="bg-slate-900 text-slate-300 border-t border-slate-800 relative">
      
      {/* Top Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -translate-y-10">
        <div className="rounded-3xl bg-gradient-to-r from-sky-600 via-sky-500 to-sky-600 p-8 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-300">
              Moradabad Factory Direct Supply
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-serif">
              Ready to Order Pure 99.9% Silver Vark?
            </h3>
            <p className="text-xs sm:text-sm text-sky-100 max-w-lg">
              Get direct factory rate cards, bulk discounts, and prompt dispatch.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <a
              href="https://wa.me/919997407674?text=Hello%20Phool%20Silver%20Leaves,%20I%20want%20to%20inquire%20about%20bulk%20wholesale%20rates%20for%20pure%20silver%20vark."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl text-xs flex items-center gap-2 shadow-md transition-transform hover:scale-105"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Direct Order</span>
            </a>

            <button
              onClick={onOpenInquiry}
              className="px-6 py-3 bg-white text-slate-900 font-bold rounded-xl text-xs flex items-center gap-2 transition-transform hover:scale-105"
            >
              <Send className="w-4 h-4 text-sky-600" />
              <span>Request Rate Card</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 pt-0">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Brand Info with Metallic Silver Lotus */}
          <div className="md:col-span-4 space-y-3">
            <div className="flex items-center gap-3">
              <SilverLotusLogo size={40} />
              <div>
                <h4 className="text-xl font-bold text-white font-serif">PHOOL™</h4>
                <p className="text-xs text-amber-400 font-serif">असली चाँदी, असली चमक</p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Phool Silver Leaves is crafted with the finest quality 99.9% pure silver bullion to add royalty, shine and purity to your sweets and desserts.
            </p>

            <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700 space-y-1 text-xs">
              <div className="flex items-center gap-2 text-emerald-400 font-bold">
                <ShieldCheck className="w-4 h-4" />
                <span>FSSAI Lic. No: 22726379000386</span>
              </div>
              <p className="text-[11px] text-slate-400">
                100% Edible (E 174) • 99.9% Pure Silver Bar • 100% Pure Veg
              </p>
            </div>
          </div>

          {/* Contact Details extracted from Packaging (5 cols) */}
          <div className="md:col-span-5 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 border-b border-slate-800 pb-2">
              Packed & Marketed By (Factory Office)
            </h4>

            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">PHOOL SILVER LEAVES</span>
                  <p className="text-slate-400 leading-relaxed">
                    30, MOHALLA NURULLA TOWN KUNDARKI TEHSEEL BILARI MORADABAD UTTAR PRADESH 244413 (INDIA)
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <div>
                  <span className="text-slate-400">Phone / WhatsApp: </span>
                  <a href="tel:+919997407674" className="font-mono font-bold text-white hover:text-amber-300">
                    +91 9997407674
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <div>
                  <span className="text-slate-400">E-mail: </span>
                  <a href="mailto:phoolsilverleaves@gmail.com" className="font-mono text-white hover:text-amber-300">
                    phoolsilverleaves@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Badges (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 border-b border-slate-800 pb-2">
              National Standards
            </h4>

            <div className="space-y-1.5 text-xs">
              <div className="p-2 bg-slate-800 rounded-lg flex items-center justify-between text-slate-300">
                <span>Make In India</span>
                <span className="font-bold text-amber-400">🦁 Lion Emblem</span>
              </div>
              <div className="p-2 bg-slate-800 rounded-lg flex items-center justify-between text-slate-300">
                <span>Swachh Bharat</span>
                <span className="font-bold text-sky-400">Clean & Green</span>
              </div>
              <div className="p-2 bg-slate-800 rounded-lg flex items-center justify-between text-slate-300">
                <span>Pure Vegetarian</span>
                <span className="font-bold text-emerald-400">🟢 100% Veg</span>
              </div>
            </div>
          </div>

        </div>

        <div className="mt-10 pt-4 border-t border-slate-800 text-center text-xs text-slate-500">
          <p>© {new Date().getFullYear()} PHOOL™ Silver Leaves. All Rights Reserved. Moradabad, Uttar Pradesh.</p>
        </div>

      </div>
    </footer>
  );
}
