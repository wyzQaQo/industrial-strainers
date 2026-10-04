"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { navLinks, companyInfo } from "@/data/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [m, setM] = useState(false);
  useEffect(() => { const h = () => setScrolled(window.scrollY > 20); window.addEventListener("scroll", h); return () => window.removeEventListener("scroll", h); }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#060B14]/90 backdrop-blur border-b border-[#94A3B8]/10" : "bg-transparent"}`} style={{ height: "72px" }}>
      <nav className="max-w-[1400px] mx-auto h-full flex items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 border border-[#06B6D4] flex items-center justify-center">
            <span className="text-[#06B6D4] font-bold text-sm">PF</span>
          </div>
          <div className="hidden sm:block">
            <div className="text-white font-bold text-xs tracking-[0.1em]">{companyInfo.shortName}</div>
            <div className="text-[#475569] text-[8px] tracking-[0.15em] uppercase">{companyInfo.tagline}</div>
          </div>
        </Link>
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((l) => <Link key={l.href} href={l.href} className="text-xs text-[#94A3B8] hover:text-[#06B6D4] tracking-[0.1em] transition-colors relative group font-mono">{l.label}<span className="absolute -bottom-1 left-0 w-0 h-px bg-[#06B6D4] transition-all group-hover:w-full" /></Link>)}
        </div>
        <Link href="/contact" className="hidden lg:block btn-tech btn-primary text-[10px] px-4 py-2">RFQ</Link>
        <button onClick={() => setM(!m)} className="lg:hidden p-2">
          <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all ${m ? "rotate-45 translate-y-1" : ""}`} />
          <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all ${m ? "opacity-0" : ""}`} />
          <div className={`w-6 h-0.5 bg-white transition-all ${m ? "-rotate-45 -translate-y-3" : ""}`} />
        </button>
      </nav>
      <div className={`lg:hidden fixed top-[72px] left-0 right-0 bg-[#060B14]/95 backdrop-blur border-b border-[#94A3B8]/10 transition-all ${m ? "max-h-96" : "max-h-0"} overflow-hidden`}>
        <div className="px-6 py-6 flex flex-col gap-4">
          {navLinks.map((l) => <Link key={l.href} href={l.href} onClick={() => setM(false)} className="text-[#94A3B8] hover:text-[#06B6D4] text-sm font-mono tracking-[0.1em]">{l.label}</Link>)}
          <Link href="/contact" onClick={() => setM(false)} className="btn-tech btn-primary text-center text-sm py-3">REQUEST QUOTE</Link>
        </div>
      </div>
    </header>
  );
}
