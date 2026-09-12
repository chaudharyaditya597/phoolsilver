"use client";

import Image from "next/image";

interface SilverLotusLogoProps {
  className?: string;
  size?: number;
}

export default function SilverLotusLogo({ className = "", size = 120 }: SilverLotusLogoProps) {
  return (
    <Image
      src="/brand/phool-logo.png"
      alt="PHOOL Silver Leaves"
      width={size}
      height={size}
      priority
      className={`inline-block object-cover ${className}`}
    />
  );
}
