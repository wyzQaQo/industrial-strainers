"use client";
import { useState } from "react";
import Link from "next/link";
import { companyInfo } from "@/data/navigation";

export default function ContactPage() {
  const [s, setS] = useState(false);
  const [f, setF] = useState({ name: "", email: "", company: "", phone: "", spec: "", message: "" });

  if (s) return (
    <main className="min-h-[80vh] flex items-center justify-center relative z-10">
      <div className="text-center max-w-[500px] mx-auto px-6">
        <div className="w-20 h-20 border-2 border-[#06B6D4] flex items-center justify-center mx-auto mb-8">
          <span className="font-mono text-[#06B6D4] text-3xl">&#10003;</span>
        </div>
        <div className="section-chip inline-flex mb-4">RFQ RECEIVED</div>
        <h2 className="text-2xl font-bold mb-4">Technical Review <span className="text-[#06B6D4]">Initiated</span></h2>
        <p className="font-mono text-sm text-[#94A3B8] mb-4">Our engineers will review your specifications and respond within 24-48 hours with a complete technical proposal.</p>
        <p className="font-mono text-[10px] text-[#475569]">REF: PF-{Date.now().toString(36).toUpperCase()}</p>
      </div>
    </main>
  );

  return (
    <main className="overflow-x-hidden w-full max-w-full relative z-10">
      <section className="min-h-[40vh] flex items-center border-b border-[#94A3B8]/10">
        <div className="max-w-[1400px] mx-auto px-6 pt-32 pb-16 w-full">
          <div className="section-chip mb-4">REQUEST FOR QUOTATION</div>
          <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-bold mb-4">Technical <span className="metallic-text">RFQ</span></h1>
          <p className="font-mono text-sm text-[#94A3B8] max-w-[600px]">SUBMIT YOUR PROCESS PARAMETERS. OUR ENGINEERS WILL RETURN A COMPLETE TECHNICAL PROPOSAL WITH 3D MODELS, MATERIAL CERTIFICATIONS, AND PRICING.</p>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <form onSubmit={(e) => { e.preventDefault(); setS(true); }} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div><label className="block font-mono text-[10px] tracking-[0.15em] text-[#475569] uppercase mb-2">NAME *</label><input required value={f.name} onChange={(e) => setF({ ...f, name: e.target.value })} className="w-full bg-[#0B1320] border border-[#94A3B8]/10 p-4 font-mono text-sm text-white focus:border-[#06B6D4] focus:outline-none transition-colors" placeholder="Full name" /></div>
                  <div><label className="block font-mono text-[10px] tracking-[0.15em] text-[#475569] uppercase mb-2">EMAIL *</label><input required type="email" value={f.email} onChange={(e) => setF({ ...f, email: e.target.value })} className="w-full bg-[#0B1320] border border-[#94A3B8]/10 p-4 font-mono text-sm text-white focus:border-[#06B6D4] focus:outline-none transition-colors" placeholder="you@company.com" /></div>
                </div>
                <div>
                  <label className="block font-mono text-[10px] tracking-[0.15em] text-[#475569] uppercase mb-2">PROCESS SPECIFICATION *</label>
                  <textarea required rows={6} value={f.message} onChange={(e) => setF({ ...f, message: e.target.value })} className="w-full bg-[#0B1320] border border-[#94A3B8]/10 p-4 font-mono text-sm text-white focus:border-[#06B6D4] focus:outline-none transition-colors resize-none" placeholder="Fluid type, flow rate (m3/h), operating pressure (bar), temperature, required filtration level (micron), pipe size and flange standard..." />
                </div>
                <button type="submit" className="btn-tech btn-primary w-full justify-center glow-pulse">SUBMIT TECHNICAL RFQ &rarr;</button>
              </form>
            </div>
            <div className="lg:col-span-2 space-y-6">
              <div className="card-tech">
                <h3 className="font-bold text-sm mb-4">DIRECT CONTACT</h3>
                <div className="space-y-3 font-mono text-xs text-[#94A3B8]">
                  <p>T: {companyInfo.phone}</p><p>E: {companyInfo.email}</p><p>W: {companyInfo.whatsapp}</p>
                </div>
              </div>
              <div className="card-tech">
                <h3 className="font-bold text-sm mb-4">WENZHOU MANUFACTURING</h3>
                <p className="font-mono text-xs text-[#94A3B8] leading-relaxed">{companyInfo.address}</p>
              </div>
              <a href={`https://wa.me/${companyInfo.whatsapp.replace(/[^0-9]/g, "")}`} target="_blank" rel="noopener" className="card-tech flex items-center gap-4 hover:border-[#06B6D4]/30 transition-colors block cursor-pointer">
                <div className="w-12 h-12 bg-[#25D366] flex items-center justify-center"><span className="text-white font-bold">WA</span></div>
                <div><div className="font-bold text-sm">WhatsApp</div><div className="font-mono text-[10px] text-[#475569]">BUSINESS HOURS: MON-FRI 8-18 GMT+8</div></div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-16 bg-[#0B1320] border-t border-[#94A3B8]/10">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="section-chip mb-6">BROWSE FILTRATION PRODUCTS</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: "Duplex Basket Strainers →", desc: "316L SS, 1\"-24\" ANSI flanged. Continuous flow design. API 6D manufactured." },
              { title: "Wedge Wire Screens →", desc: "Vee-wire profile, 0.05-6mm slots. High open area. Non-clogging for chemical & mining." },
              { title: "Custom Skid Packages →", desc: "Engineered-to-order. Complete with valves, gauges, and controls. FAT tested before shipment." },
            ].map((link) => (
              <Link key={link.title} href="/products" className="card-tech group">
                <h3 className="font-bold text-sm mb-2 group-hover:text-[#06B6D4] transition-colors">{link.title}</h3>
                <p className="font-mono text-[10px] text-[#94A3B8] leading-relaxed">{link.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="max-w-[900px] mx-auto px-6">
          <div className="section-chip mb-4">TECHNICAL FAQ</div>
          <h2 className="text-2xl font-bold mb-10">Before You <span className="metallic-text">Submit</span> Your RFQ</h2>
          <div className="space-y-3">
            {[
              { q: "What process parameters do I need for an accurate strainer quotation?", a: "For the most accurate technical proposal, please provide: (1) fluid type and characteristics (corrosiveness, viscosity, solids content), (2) flow rate (m3/h or GPM), (3) operating pressure and design pressure, (4) operating temperature, (5) required filtration level in microns, (6) pipe size and flange standard (ANSI/DIN/JIS), (7) any special material requirements (Hastelloy, Monel, etc.). The more detail you provide, the more precise our proposal." },
              { q: "How long does engineering review take for custom strainer configurations?", a: "Standard product RFQs receive a quotation within 24 hours. Custom configurations requiring engineering review (exotic materials, special flange drilling, non-standard dimensions) receive a complete technical proposal including 3D model renderings, material specifications, pressure drop calculations, and pricing within 48 hours. We can expedite to 24 hours for urgent project deadlines." },
              { q: "Do you provide material certifications and test reports?", a: "Yes — full documentation package with every order: EN 10204 3.1 material certificates (3.2 available on request), hydrostatic test reports (1.5x rated pressure), PMI (Positive Material Identification) reports, dimensional inspection reports, and NDE (PT/RT/UT) reports where specified. All documentation is provided in PDF format and retained for 10 years." },
            ].map((faq, i) => (
              <details key={i} className="card-tech cursor-pointer group">
                <summary className="font-bold text-sm py-2 list-none flex justify-between items-center group-hover:text-[#06B6D4] transition-colors">
                  {faq.q}
                  <span className="font-mono text-[#06B6D4] text-lg ml-4 shrink-0">+</span>
                </summary>
                <p className="font-mono text-[10px] text-[#94A3B8] leading-relaxed mt-3 pt-3 border-t border-[#94A3B8]/10">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
