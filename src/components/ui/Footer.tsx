"use client";
import Link from "next/link";
import { companyInfo, navLinks } from "@/data/navigation";

export default function Footer() {
  return (
    <footer className="border-t border-[#94A3B8]/10 relative z-10">
      <div className="max-w-[1400px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 border border-[#06B6D4] flex items-center justify-center">
                <span className="text-[#06B6D4] font-bold text-sm">PF</span>
              </div>
              <div>
                <div className="text-white font-bold text-xs tracking-[0.1em]">{companyInfo.shortName}</div>
                <div className="text-[#475569] text-[8px] tracking-[0.15em]">INDUSTRIAL</div>
              </div>
            </div>
            <p className="font-mono text-[10px] text-[#94A3B8] leading-relaxed">{companyInfo.tagline}. API 6D & PED certified manufacturer from Wenzhou, China.</p>
          </div>
          <div>
            <h4 className="font-mono text-[10px] tracking-[0.2em] text-[#475569] uppercase mb-4">NAVIGATION</h4>
            <div className="space-y-2">{navLinks.map((l) => <Link key={l.href} href={l.href} className="block font-mono text-[10px] text-[#94A3B8] hover:text-[#06B6D4] transition-colors">{l.label}</Link>)}</div>
          </div>
          <div>
            <h4 className="font-mono text-[10px] tracking-[0.2em] text-[#475569] uppercase mb-4">CONTACT</h4>
            <div className="space-y-2 font-mono text-[10px] text-[#94A3B8]">
              <p>T: {companyInfo.phone}</p><p>E: {companyInfo.email}</p><p className="mt-2">{companyInfo.address}</p>
            </div>
          </div>
          <div>
            <h4 className="font-mono text-[10px] tracking-[0.2em] text-[#475569] uppercase mb-4">CERTIFICATIONS</h4>
            <div className="space-y-1 font-mono text-[10px] text-[#94A3B8]">
              <p>API 6D</p><p>ISO 9001:2015</p><p>CE/PED</p><p>NACE MR0175</p>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-[#94A3B8]/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-mono text-[10px] text-[#475569]">&copy; {new Date().getFullYear()} {companyInfo.name}. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  );
}
