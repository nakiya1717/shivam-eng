import React from "react";
import Image from "next/image";

export default function Logo({ className = "", isDark = false }: { className?: string; isDark?: boolean }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* We use an img tag pointing to the user's uploaded logo */}
      <img src="/logo.png" alt="Shivam Engineering Logo" className="h-12 w-auto object-contain" />
      
      {/* Text beside logo (optional, you can remove this if the logo image already has the text) */}
      <div className="flex flex-col justify-center">
        <span className="font-heading font-black text-2xl leading-[1.1] text-primary tracking-wide">SHIVAM</span>
        <span className={`font-heading font-extrabold text-sm leading-[1.1] tracking-[0.15em] ${isDark ? 'text-white' : 'text-navy'}`}>ENGINEERING</span>
      </div>
    </div>
  );
}
