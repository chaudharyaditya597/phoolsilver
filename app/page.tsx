"use client";

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PurityShowcase from "./components/PurityShowcase";
import ProductCatalog from "./components/ProductCatalog";
import ContactFooter from "./components/ContactFooter";
import QuickInquiryModal from "./components/QuickInquiryModal";

export default function Home() {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [inquiryProduct, setInquiryProduct] = useState<string>("");
  const [inquiryMessage, setInquiryMessage] = useState<string>("");

  const handleOpenInquiry = (productName?: string, customMessage?: string) => {
    if (productName) setInquiryProduct(productName);
    if (customMessage) setInquiryMessage(customMessage);
    setIsInquiryOpen(true);
  };

  const handleExploreProducts = () => {
    const element = document.getElementById("products");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen bg-[#050608] text-slate-100 selection:bg-cyan-300 selection:text-black relative">
      
      {/* Sticky Light Header Navigation */}
      <Navbar
        onOpenInquiry={(prod) => handleOpenInquiry(prod)}
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
