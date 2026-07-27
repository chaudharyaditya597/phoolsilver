"use client";

import React from "react";

interface SilverLotusLogoProps {
  className?: string;
  size?: number;
}

export default function SilverLotusLogo({ className = "", size = 48 }: SilverLotusLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block filter drop-shadow-md ${className}`}
    >
      <defs>
        {/* Metallic Silver Outer Petal Gradient */}
        <linearGradient id="silverPetalOuter" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="35%" stopColor="#E2E8F0" />
          <stop offset="70%" stopColor="#94A3B8" />
          <stop offset="100%" stopColor="#475569" />
        </linearGradient>

        {/* Metallic Silver Inner Petal Highlight Gradient */}
        <linearGradient id="silverPetalInner" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="40%" stopColor="#F1F5F9" />
          <stop offset="85%" stopColor="#CBD5E1" />
          <stop offset="100%" stopColor="#64748B" />
        </linearGradient>

        {/* Dark Charcoal Accent Shadow */}
        <linearGradient id="silverDarkShade" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#64748B" />
          <stop offset="50%" stopColor="#334155" />
          <stop offset="100%" stopColor="#0F172A" />
        </linearGradient>

        {/* Gold Central Stamen Accent Gradient */}
        <linearGradient id="goldStamen" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FBBF24" />
          <stop offset="100%" stopColor="#D97706" />
        </linearGradient>

        {/* Silver Base Ring Gradient */}
        <linearGradient id="silverRing" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#94A3B8" />
          <stop offset="50%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#64748B" />
        </linearGradient>

        <filter id="silverGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* --- LAYER 1: BASE DECORATIVE METALLIC LEAF PEDESTAL --- */}
      <path
        d="M 40 160 C 70 145, 130 145, 160 160 C 140 170, 60 170, 40 160 Z"
        fill="url(#silverRing)"
        stroke="#1E293B"
        strokeWidth="2"
      />

      {/* --- LAYER 2: FAR OUTER LEFT & RIGHT PETALS --- */}
      {/* Outer Left Petal */}
      <path
        d="M 100 135 C 60 135, 10 110, 5 70 C 25 70, 65 95, 100 135 Z"
        fill="url(#silverDarkShade)"
        stroke="#1E293B"
        strokeWidth="2.5"
      />
      <path
        d="M 100 135 C 65 130, 20 100, 15 70 C 30 75, 70 100, 100 135 Z"
        fill="url(#silverPetalOuter)"
      />

      {/* Outer Right Petal */}
      <path
        d="M 100 135 C 140 135, 190 110, 195 70 C 175 70, 135 95, 100 135 Z"
        fill="url(#silverDarkShade)"
        stroke="#1E293B"
        strokeWidth="2.5"
      />
      <path
        d="M 100 135 C 135 130, 180 100, 185 70 C 170 75, 130 100, 100 135 Z"
        fill="url(#silverPetalOuter)"
      />

      {/* --- LAYER 3: SECOND TIER PETALS (MID LEFT & RIGHT) --- */}
      {/* Mid Left Petal */}
      <path
        d="M 100 138 C 65 130, 25 80, 30 40 C 55 55, 80 90, 100 138 Z"
        fill="url(#silverPetalOuter)"
        stroke="#1E293B"
        strokeWidth="2"
      />
      <path
        d="M 100 138 C 70 120, 40 75, 42 45 C 60 60, 82 95, 100 138 Z"
        fill="url(#silverPetalInner)"
      />

      {/* Mid Right Petal */}
      <path
        d="M 100 138 C 135 130, 175 80, 170 40 C 145 55, 120 90, 100 138 Z"
        fill="url(#silverPetalOuter)"
        stroke="#1E293B"
        strokeWidth="2"
      />
      <path
        d="M 100 138 C 130 120, 160 75, 158 45 C 140 60, 118 95, 100 138 Z"
        fill="url(#silverPetalInner)"
      />

      {/* --- LAYER 4: INNER TIER PETALS (UPRIGHT SIDE PETALS) --- */}
      {/* Inner Left Petal */}
      <path
        d="M 100 140 C 75 125, 48 65, 60 20 C 80 40, 92 85, 100 140 Z"
        fill="url(#silverPetalOuter)"
        stroke="#0F172A"
        strokeWidth="2"
      />
      <path
        d="M 100 140 C 80 120, 58 65, 66 28 C 82 45, 93 88, 100 140 Z"
        fill="url(#silverPetalInner)"
      />

      {/* Inner Right Petal */}
      <path
        d="M 100 140 C 125 125, 152 65, 140 20 C 120 40, 108 85, 100 140 Z"
        fill="url(#silverPetalOuter)"
        stroke="#0F172A"
        strokeWidth="2"
      />
      <path
        d="M 100 140 C 120 120, 142 65, 134 28 C 118 45, 107 88, 100 140 Z"
        fill="url(#silverPetalInner)"
      />

      {/* --- LAYER 5: MAIN CENTRAL TOP PETAL --- */}
      <path
        d="M 100 142 C 78 100, 78 40, 100 8 C 122 40, 122 100, 100 142 Z"
        fill="url(#silverDarkShade)"
        stroke="#0F172A"
        strokeWidth="2.5"
      />
      <path
        d="M 100 142 C 82 98, 82 42, 100 12 C 118 42, 118 98, 100 142 Z"
        fill="url(#silverPetalInner)"
        filter="url(#silverGlow)"
      />
      <path
        d="M 100 135 C 90 100, 90 55, 100 25 C 110 55, 110 100, 100 135 Z"
        fill="url(#silverPetalOuter)"
        opacity="0.8"
      />

      {/* --- LAYER 6: CENTER STAMEN / OVAL SEED POD --- */}
      <ellipse
        cx="100"
        cy="115"
        rx="8"
        ry="16"
        fill="url(#goldStamen)"
        stroke="#FFFFFF"
        strokeWidth="1.5"
      />
      <circle cx="100" cy="106" r="3" fill="#FFFFFF" opacity="0.9" />

      {/* Central Highlight Ray */}
      <line x1="100" y1="20" x2="100" y2="100" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.6" />
    </svg>
  );
}
