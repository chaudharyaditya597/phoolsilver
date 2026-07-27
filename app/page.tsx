"use client";

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PurityShowcase from "./components/PurityShowcase";
import ProductCatalog, { Product } from "./components/ProductCatalog";
import BulkCalculator from "./components/BulkCalculator";
import ContactFooter from "./components/ContactFooter";
import QuickInquiryModal from "./components/QuickInquiryModal";

export default function Home() {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [inquiryProduct, setInquiryProduct] = useState<string>("");
  const [inquiryMessage, setInquiryMessage] = useState<string>("");
  const [cartItems, setCartItems] = useState<Product[]>([]);

  const handleOpenInquiry = (productName?: string, customMessage?: string) => {
    if (productName) setInquiryProduct(productName);
    if (customMessage) setInquiryMessage(customMessage);
    setIsInquiryOpen(true);
  };

  const handleAddToCart = (product: Product) => {
    setCartItems((prev) => [...prev, product]);
  };

  const handleExploreProducts = () => {
    const element = document.getElementById("products");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-sky-200 selection:text-slate-900 relative">
      
      {/* Sticky Light Header Navigation */}
      <Navbar
        onOpenInquiry={(prod) => handleOpenInquiry(prod)}
        cartCount={cartItems.length}
      />

      {/* Light Sky Blue & Cream Hero Section */}
      <Hero
        onOpenInquiry={(prod) => handleOpenInquiry(prod)}
        onExploreProducts={handleExploreProducts}
      />

      {/* 3 Clean Touchless Machine Purity Pillars */}
      <PurityShowcase />

      {/* Clean Product Catalog & Sweets Showcase */}
      <ProductCatalog
        onOpenInquiry={(prod) => handleOpenInquiry(prod)}
        onAddToCart={handleAddToCart}
      />

      {/* Minimalist Halwai & Sweet Maker Bulk Calculator */}
      <BulkCalculator
        onOpenInquiry={(msg) => handleOpenInquiry(undefined, msg)}
      />

      {/* Packaging Info, Factory Address & Contact Footer */}
      <ContactFooter
        onOpenInquiry={() => handleOpenInquiry()}
      />

      {/* Interactive Quick Quote & WhatsApp Order Modal */}
      <QuickInquiryModal
        isOpen={isInquiryOpen}
        onClose={() => {
          setIsInquiryOpen(false);
          setInquiryProduct("");
          setInquiryMessage("");
        }}
        initialProductName={inquiryProduct}
        initialMessage={inquiryMessage}
      />

    </main>
  );
}
