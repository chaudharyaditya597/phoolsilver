"use client";

import React, { useState } from "react";
import { Sparkles, ShoppingBag, Eye, Star, CheckCircle2 } from "lucide-react";

export interface Product {
  id: string;
  name: string;
  hindiName: string;
  category: "vark" | "bulk" | "sweets";
  price: number;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  badge?: string;
  sheets?: string;
  size?: string;
  description: string;
  imageIcon: string;
  features: string[];
}

const PRODUCTS: Product[] = [
  {
    id: "vark-100",
    name: "PHOOL™ Pure Silver Vark Booklet (100 Sheets)",
    hindiName: "फूल असली चाँदी के वर्क - 100 पत्रक",
    category: "vark",
    price: 499,
    originalPrice: 650,
    rating: 4.9,
    reviewsCount: 142,
    badge: "Best Seller",
    sheets: "100 Sheets",
    size: "150mm x 150mm",
    description: "Ideal for boutique sweet shops, luxury bakeries & sweet makers. 99.9% pure silver foil sheets bound in sterile interleaved tissues.",
    imageIcon: "✨",
    features: [
      "99.9% Guaranteed Pure Silver Bar",
      "100% Touchless Computerized Machine Made",
      "E 174 Pure Vegetarian Food Grade",
      "Interleaved non-stick tissues for smooth transfer"
    ]
  },
  {
    id: "vark-250",
    name: "PHOOL™ Sweet Maker Master Pack (250 Sheets)",
    hindiName: "फूल चाँदी वर्क हलवाई मास्टर पैक - 250 पत्रक",
    category: "bulk",
    price: 1199,
    originalPrice: 1499,
    rating: 5.0,
    reviewsCount: 218,
    badge: "Sweet Shop Favorite",
    sheets: "250 Sheets",
    size: "150mm x 150mm",
    description: "Designed specifically for sweet manufacturers preparing Kaju Katli, Barfi, and Peda in bulk.",
    imageIcon: "📜",
    features: [
      "Bulk Wholesale Discount Tier",
      "Zero flaking - clings smoothly on sweets",
      "24 Months Sealed Moisture Shelf Life",
      "Includes FSSAI Batch Certificate"
    ]
  },
  {
    id: "vark-500",
    name: "PHOOL™ Commercial Manufacturer Pack (500 Sheets)",
    hindiName: "व्यावसायिक मिठाई निर्माता 500 पत्रक वर्क",
    category: "bulk",
    price: 2299,
    originalPrice: 2800,
    rating: 4.9,
    reviewsCount: 95,
    badge: "Maximum Value",
    sheets: "500 Sheets",
    size: "150mm x 150mm (Custom Size Available)",
    description: "Industrial grade package for festive season sweet production (Diwali, Rakhi, Marriage Orders). Factory direct shipping from Moradabad.",
    imageIcon: "🏭",
    features: [
      "Factory Direct Price Guarantee",
      "Custom Sheet Dimensions on demand",
      "Double foil moisture barrier",
      "Priority Dispatch with Lab Assay Report"
    ]
  },
  {
    id: "sweet-kaju-katli",
    name: "Shahi Diamond Kaju Katli with Phool Silver Vark",
    hindiName: "शाही काजू कतली (चाँदी वर्क मढ़ित)",
    category: "sweets",
    price: 950,
    originalPrice: 1100,
    rating: 4.9,
    reviewsCount: 310,
    badge: "Royalty Special",
    description: "Premium Goan Cashews crafted with Desi Ghee and generously coated with 99.9% pure Phool Silver Leaves.",
    imageIcon: "🔷",
    features: [
      "Made with 100% Pure Desi Ghee & Premium Cashews",
      "Coated with 99.9% PHOOL Silver Vark",
      "Zero artificial preservatives or added synthetic colors",
      "Hygienically gift-boxed for celebrations"
    ]
  },
  {
    id: "sweet-kesar-peda",
    name: "Royal Mathura Kesar Peda with Silver Foil",
    hindiName: "रॉयल मथुरा केसर पेड़ा (चाँदी वर्क)",
    category: "sweets",
    price: 680,
    originalPrice: 790,
    rating: 4.8,
    reviewsCount: 88,
    badge: "Festive Favorite",
    description: "Traditional slow-cooked Mawa peda infused with pure Kashmiri Kesar and topped with lustrous Phool Silver Vark.",
    imageIcon: "🟡",
    features: [
      "Real Kashmiri Kesar & Fresh Mawa",
      "Adorned with Phool Edible Silver Vark",
      "Authentic Mathura recipe",
      "Melt-in-mouth soft texture"
    ]
  },
  {
    id: "sweet-silver-paan",
    name: "Gold-Silver Royal Meetha Paan Bites",
    hindiName: "रॉयल मीठा पान बाइट्स (चाँदी वर्क)",
    category: "sweets",
    price: 850,
    originalPrice: 990,
    rating: 4.9,
    reviewsCount: 164,
    badge: "Chef Special",
    description: "Exotic gulkand, saffron, and dry fruits wrapped in silver-leafed delicate confectionery shell.",
    imageIcon: "🍃",
    features: [
      "Refreshingly aromatic digestive dessert",
      "Double layered silver leaf encasement",
      "Popular for weddings and banquets",
      "100% Veg & Hygiene Certified"
    ]
  }
];

interface ProductCatalogProps {
  onOpenInquiry: (productName?: string) => void;
  onAddToCart: (product: Product) => void;
}

export default function ProductCatalog({ onOpenInquiry, onAddToCart }: ProductCatalogProps) {
  const [selectedCategory, setSelectedCategory] = useState<"all" | "vark" | "bulk" | "sweets">("all");
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  const filteredProducts = PRODUCTS.filter((p) => {
    if (selectedCategory === "all") return true;
    return p.category === selectedCategory;
  });

  return (
    <section id="products" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-200 text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              Direct Factory Pricing
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-serif tracking-tight">
              Edible Silver Vark & <span className="text-sky-600">Sweets Range</span>
            </h2>
            <p className="text-slate-600 text-sm max-w-xl">
              Browse our complete range of 99.9% pure silver leaf packs and silver sweets.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 p-1 bg-white border border-slate-200 rounded-xl shadow-sm">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all ${
                selectedCategory === "all"
                  ? "bg-sky-600 text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              All Range
            </button>
            <button
              onClick={() => setSelectedCategory("vark")}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all ${
                selectedCategory === "vark"
                  ? "bg-sky-600 text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Silver Leaf Booklets
            </button>
            <button
              onClick={() => setSelectedCategory("bulk")}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all ${
                selectedCategory === "bulk"
                  ? "bg-sky-600 text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Wholesale Packs
            </button>
            <button
              onClick={() => setSelectedCategory("sweets")}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all ${
                selectedCategory === "sweets"
                  ? "bg-sky-600 text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Silver Sweets
            </button>
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="light-card rounded-2xl p-6 flex flex-col justify-between relative group"
            >
              {/* Top Badge */}
              {product.badge && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full bg-amber-500 text-white shadow-sm">
                    {product.badge}
                  </span>
                </div>
              )}

              <div className="space-y-3 mb-4">
                {/* Image Placeholder Box */}
                <div className="w-full h-40 rounded-xl bg-gradient-to-tr from-sky-50 via-white to-amber-50 border border-slate-200 flex flex-col items-center justify-center relative overflow-hidden">
                  <span className="text-5xl group-hover:scale-110 transition-transform duration-300">
                    {product.imageIcon}
                  </span>

                  <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-[11px] font-semibold text-slate-700 bg-white/90 px-2.5 py-1 rounded-md border border-slate-200">
                    <span>{product.sheets || "Fresh Preparation"}</span>
                    <span className="text-emerald-700 font-bold">99.9% Pure</span>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1.5 text-xs">
                  <div className="flex text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="font-bold text-slate-800">{product.rating}</span>
                  <span className="text-slate-500">({product.reviewsCount})</span>
                </div>

                <div>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-xs text-amber-700 font-serif font-semibold">{product.hindiName}</p>
                </div>

                <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Card Footer */}
              <div className="pt-3 border-t border-slate-100 space-y-3">
                <div className="flex items-baseline justify-between">
                  <div>
                    <span className="text-[10px] text-slate-500 block uppercase">Wholesale Price</span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-xl font-extrabold text-slate-900">₹{product.price}</span>
                      {product.originalPrice && (
                        <span className="text-xs text-slate-400 line-through">
                          ₹{product.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    FSSAI Certified
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setQuickViewProduct(product)}
                    className="py-2 px-3 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors flex items-center justify-center gap-1"
                  >
                    <Eye className="w-3.5 h-3.5 text-slate-500" />
                    <span>View Details</span>
                  </button>

                  <button
                    onClick={() => {
                      onAddToCart(product);
                      onOpenInquiry(product.name);
                    }}
                    className="py-2 px-3 text-xs font-bold text-white bg-sky-600 hover:bg-sky-500 rounded-xl shadow-sm transition-transform hover:scale-[1.02] flex items-center justify-center gap-1"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Order Quote</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick View Modal */}
        {quickViewProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-white border border-slate-200 rounded-3xl max-w-lg w-full p-6 space-y-5 relative shadow-2xl">
              
              <button
                onClick={() => setQuickViewProduct(null)}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-800 p-2 rounded-full hover:bg-slate-100"
              >
                ✕
              </button>

              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-sky-50 border border-sky-200 flex items-center justify-center text-4xl">
                  {quickViewProduct.imageIcon}
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-sky-700 bg-sky-100 px-2 py-0.5 rounded">
                    {quickViewProduct.category.toUpperCase()}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 font-serif">{quickViewProduct.name}</h3>
                  <p className="text-xs text-amber-700 font-serif font-bold">{quickViewProduct.hindiName}</p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {quickViewProduct.description}
              </p>

              {/* Specifications */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                  Product Features & Hygiene Specs
                </h4>
                <div className="bg-slate-50 rounded-xl p-3 space-y-1.5 border border-slate-200 text-xs">
                  {quickViewProduct.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                <div>
                  <span className="text-xs text-slate-500 block">Estimated Wholesale Rate</span>
                  <p className="text-2xl font-extrabold text-slate-900">₹{quickViewProduct.price}</p>
                </div>

                <button
                  onClick={() => {
                    const prod = quickViewProduct;
                    setQuickViewProduct(null);
                    onAddToCart(prod);
                    onOpenInquiry(prod.name);
                  }}
                  className="px-5 py-2.5 bg-sky-600 hover:bg-sky-500 text-white font-bold rounded-xl text-xs shadow-md"
                >
                  Request WhatsApp Quote
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
