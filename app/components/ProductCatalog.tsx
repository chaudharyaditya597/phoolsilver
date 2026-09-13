"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight, CheckCircle2, Sparkles } from "lucide-react";

interface Product {
  name: string;
  image: string;
  landscape: boolean;
}

const products: Product[] = [
  { name: "PHOOL Pure Silver Vark Pack [30 Number]", image: "/30.png", landscape: false },
  { name: "PHOOL Pure Silver Vark Pack [60 Number]", image: "/60.png", landscape: false },
  { name: "PHOOL Pure Silver Vark Pack [90 Number]", image: "/90.png", landscape: false },
  { name: "PHOOL Pure Silver Vark Pack [120 Number]", image: "/120.png", landscape: false },
  { name: "PHOOL Commercial Manufacturer Pack", image: "/random.png", landscape: false },
];

export default function ProductCatalog({ onOpenInquiry }: { onOpenInquiry: (productName?: string) => void }) {
  return <section id="products" className="relative overflow-hidden border-y border-white/10 bg-[#080b10] py-24">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_35%,rgba(34,211,238,.10),transparent_28%),radial-gradient(circle_at_85%_75%,rgba(168,85,247,.12),transparent_30%)]" />
    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="mb-12 max-w-2xl space-y-4"><div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-xs font-bold text-cyan-200"><Sparkles className="h-3.5 w-3.5" /> PHOOL PRODUCT RANGE</div><h2 className="font-serif text-4xl font-bold text-white sm:text-5xl">Pure silver vark, made for a flawless finish.</h2><p className="text-sm leading-relaxed text-slate-400">Choose the PHOOL pack that fits your business. Request a quotation for availability and ordering details.</p></div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{products.map((product, index) => <article key={product.name} className="group flex min-h-56 flex-col justify-between rounded-3xl border border-white/10 bg-white/[.035] p-6 transition hover:-translate-y-1 hover:border-cyan-300/50 hover:bg-white/[.06]"><div><span className="text-xs font-bold tracking-[.2em] text-cyan-300">0{index + 1}</span><div className="mt-4 h-auto w-full overflow-hidden rounded-xl shadow-lg"><Image src={product.image} alt={product.name} width={400} height={300} className="h-auto w-full object-contain bg-white/5" /></div><h3 className="mt-4 text-xl font-bold leading-snug text-white">{product.name}</h3><div className="mt-5 flex items-center gap-2 text-xs text-slate-400"><CheckCircle2 className="h-4 w-4 text-emerald-400" /> 99.9% pure edible silver</div></div><button onClick={() => onOpenInquiry(product.name)} className="mt-8 flex items-center justify-between border-t border-white/10 pt-4 text-sm font-bold text-white transition group-hover:text-cyan-200">Request order quote <ArrowUpRight className="h-4 w-4" /></button></article>)}</div>
    </div>
  </section>;
}
