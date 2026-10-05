export const dynamicParams = false;
"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { companyInfo, stats } from "@/data/navigation";

export default function HomePage() {
  return (
    <main className="overflow-x-hidden w-full max-w-full relative z-10">
      <HeroSection />
      <StatsBar />
      <ProductGrid />
      <TechSpecSection />
      <WhyUsSection />
      <IndustryGrid />
      <CTASection />
    </main>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-[100dvh] flex items-center">
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#06B6D4]/3 blur-[150px] rounded-full" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-[#3B82F6]/3 blur-[120px] rounded-full" />
      <div className="max-w-[1400px] mx-auto px-6 pt-24 pb-16 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="section-chip mb-6" style={{ fontFamily: "monospace" }}>INDUSTRIAL FILTRATION SYSTEMS</div>
            <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-[0.95] tracking-[-0.03em] mb-4">
              Precision<br />
              <span className="metallic-text">Duplex Strainers</span><br />
              &amp; Wedge Wire
            </h1>
            <p className="font-mono text-sm text-[#94A3B8] leading-relaxed max-w-[480px] mb-8">
              316L STAINLESS STEEL. ANSI/DIN FLANGED. 150# TO 2500# RATING. ENGINEERED FOR CHEMICAL PLANTS, REFINERIES, AND WATER TREATMENT FACILITIES WHERE DOWNTIME IS NOT AN OPTION.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-tech btn-primary glow-pulse">GET TECHNICAL QUOTE &rarr;</Link>
              <Link href="/products" className="btn-tech">VIEW PRODUCTS</Link>
            </div>
            <div className="mt-10 grid grid-cols-4 gap-4">
              {[{ l: "MATERIAL", v: "SS316L/304" }, { l: "RATING", v: "150#-2500#" }, { l: "CONNECTION", v: "ANSI/DIN FLANGE" }, { l: "LEAD TIME", v: "4-8 WEEKS" }].map((s) => (
                <div key={s.l} className="card-tech !p-3 text-center">
                  <div className="data-label mb-1">{s.l}</div>
                  <div className="data-value !text-[10px]">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-square border border-[#94A3B8]/10 overflow-hidden">
              <img src="https://picsum.photos/seed/duplex-strainer/800/800" alt="Duplex Strainer" className="w-full h-full object-cover opacity-50" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060B14] via-transparent to-transparent" />
              {/* Cross-section overlay */}
              <div className="absolute top-4 left-4 right-4">
                <div className="font-mono text-[8px] tracking-[0.2em] text-[#06B6D4] mb-2">SECTION VIEW: DUPLEX STRAINER</div>
                <div className="flex gap-1">
                  {["INLET", "CHAMBER A", "DIVERTER", "CHAMBER B", "OUTLET"].map((s) => (
                    <div key={s} className="font-mono text-[7px] text-[#475569] bg-[#060B14]/80 px-2 py-1 border border-[#94A3B8]/10">{s}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#060B14]" />
    </section>
  );
}

function StatsBar() {
  return (
    <section className="border-y border-[#94A3B8]/10 bg-[#0B1320]/50 backdrop-blur">
      <div className="max-w-[1400px] mx-auto px-6 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-[clamp(2rem,4vw,3rem)] font-bold text-white mb-1">
                <CountUp end={s.value} suffix={s.suffix} />
              </div>
              <div className="data-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CountUp({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [c, setC] = useState(0);
  const r = useRef<HTMLSpanElement>(null);
  const d = useRef(false);
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting && !d.current) { d.current = true; const t = 2000; const s = 60; const inc = end / s; let cur = 0; const timer = setInterval(() => { cur += inc; if (cur >= end) { setC(end); clearInterval(timer); } else setC(Math.floor(cur)); }, t / s); } }, { threshold: 0.3 });
    if (r.current) o.observe(r.current);
    return () => o.disconnect();
  }, [end]);
  return <span ref={r}>{c}{suffix}</span>;
}

function ProductGrid() {
  const prods = [
    { title: "Duplex Basket Strainers", tag: "SS316L | 150#-600#", desc: "Continuous-flow filtration with diverter valve. Left chamber cleans while right operates.", feat: [{ l: "Material", v: "SS316L/304" }, { l: "Size", v: "1\"-24\"" }, { l: "Rating", v: "150#-600#" }, { l: "Mesh", v: "50-3000μ" }], img: "https://picsum.photos/seed/duplex-basket/800/600" },
    { title: "Wedge Wire Screens", tag: "VEE-WIRE | SLOT 0.05-6MM", desc: "Continuous-slot construction. High open area. Non-clogging design for high-solids applications.", feat: [{ l: "Material", v: "SS316L" }, { l: "Slot", v: "0.05-6mm" }, { l: "Open Area", v: "Up to 60%" }, { l: "Profile", v: "V/Custom" }], img: "https://picsum.photos/seed/wedge-wire/800/600" },
    { title: "Y-Type Strainers", tag: "CAST/INVESTMENT | CLASS 150-2500", desc: "Compact inline filtration. Investment cast body. Quick-open cover for fast element cleaning.", feat: [{ l: "Material", v: "SS316L/WCB" }, { l: "Size", v: "1/2\"-12\"" }, { l: "Rating", v: "150#-2500#" }, { l: "Screen", v: "Perforated" }], img: "https://picsum.photos/seed/y-strainer/800/600" },
    { title: "Custom Filtration Skids", tag: "ENGINEERED | SKID-MOUNTED", desc: "Complete filtration packages with duplex strainers, valves, instrumentation, and controls on a single skid.", feat: [{ l: "Config", v: "Custom" }, { l: "Pipe", v: "Any Size" }, { l: "Control", v: "Manual/Auto" }, { l: "Delivery", v: "FAT Tested" }], img: "https://picsum.photos/seed/filter-skid/800/600" },
  ];
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="section-chip mb-4">PRODUCT SYSTEMS</div>
        <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold mb-4">Industrial <span className="metallic-text">Filtration</span> Solutions</h2>
        <p className="font-mono text-sm text-[#94A3B8] max-w-[600px] mb-12">EVERY PRODUCT PRESSURE-TESTED TO 1.5X RATED PRESSURE. FULL MATERIAL TRACEABILITY WITH 3.1 CERTIFICATION AVAILABLE.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {prods.map((p) => (
            <Link key={p.title} href="/products" className="card-tech group cursor-pointer !p-0 overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-all duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1320]" />
                <span className="absolute top-3 right-3 text-[8px] bg-[#06B6D4]/10 text-[#06B6D4] px-2 py-1 border border-[#06B6D4]/20 font-mono">{p.tag}</span>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-sm mb-2 group-hover:text-[#06B6D4] transition-colors">{p.title}</h3>
                <p className="font-mono text-[10px] text-[#94A3B8] mb-4">{p.desc}</p>
                <div className="grid grid-cols-2 gap-1">
                  {p.feat.map((f) => (
                    <div key={f.l} className="bg-[#060B14] p-2">
                      <div className="text-[7px] text-[#475569] uppercase tracking-wider font-mono">{f.l}</div>
                      <div className="text-[9px] font-bold text-white font-mono">{f.v}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function TechSpecSection() {
  const specs = [
    { icon: "316L", title: "MATERIAL INTEGRITY", desc: "All wetted parts in 316L stainless steel. Full PMI testing. Dual-certified to EN 10204 3.1/3.2. Hastelloy and duplex stainless available on request." },
    { icon: "API", title: "API 6D & PED CERTIFIED", desc: "Manufactured to API 6D pipeline valve standards. PED 2014/68/EU Module H certified. NACE MR0175 for sour service applications." },
    { icon: "QC", title: "100% PRESSURE TESTED", desc: "Every strainer undergoes hydrostatic shell test at 1.5x rated pressure and seat leakage test. Test certificates included with every shipment." },
    { icon: "CNC", title: "CNC PRECISION MACHINING", desc: "Investment cast bodies finished on 5-axis CNC. Wedge wire profiles laser-cut and robotically welded. ±0.05mm slot tolerance." },
  ];
  return (
    <section className="py-24 md:py-32 bg-[#0B1320] border-y border-[#94A3B8]/10">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="section-chip mb-4">TECHNICAL EXCELLENCE</div>
        <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold mb-16">Built to <span className="metallic-text">Industrial</span> Standards</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {specs.map((s) => (
            <div key={s.title} className="card-tech group">
              <div className="flex gap-4">
                <div className="w-14 h-14 border border-[#06B6D4]/20 flex items-center justify-center shrink-0 group-hover:border-[#06B6D4] transition-colors">
                  <span className="font-mono text-[#06B6D4] font-bold text-xs">{s.icon}</span>
                </div>
                <div>
                  <h3 className="font-bold text-sm mb-2">{s.title}</h3>
                  <p className="font-mono text-[10px] text-[#94A3B8] leading-relaxed">{s.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUsSection() {
  const reasons = [
    { title: "WENZHOU MANUFACTURING HUB", desc: "Located in the world's largest valve and pipe fitting manufacturing cluster. Direct access to the most advanced casting and machining supply chain." },
    { title: "20+ YEARS SPECIALIZED", desc: "Not a general valve factory. We focus exclusively on industrial strainers and wedge wire screens. Deep engineering expertise in filtration." },
    { title: "GLOBAL CERTIFICATION", desc: "API 6D, CE/PED, ATEX, NACE MR0175. Regular third-party audits by SGS, Bureau Veritas, and DNV-GL. Full documentation package with every order." },
    { title: "OEM & CUSTOM ENGINEERING", desc: "Custom flange drilling, exotic alloys, special mesh sizes, and engineered skid packages. Our engineering team modifies any design to your specification." },
  ];
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="section-chip mb-4">WHY PUREFLOW</div>
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold mb-6">The <span className="metallic-text">Filtration</span> Specialists</h2>
            <p className="font-mono text-sm text-[#94A3B8] leading-relaxed mb-8 max-w-[480px]">
              WHEN GRAINGER, MCMASTER-CARR, AND GLOBAL EPCS NEED INDUSTRIAL STRAINERS, THEY SOURCE FROM WENZHOU. PUREFLOW IS THE MANUFACTURER BEHIND THE BRANDS.
            </p>
            <Link href="/contact" className="btn-tech btn-primary">TALK TO AN ENGINEER &rarr;</Link>
          </div>
          <div className="space-y-3">
            {reasons.map((r, i) => (
              <div key={r.title} className="card-tech flex gap-4">
                <div className="font-mono text-[#06B6D4] font-bold text-sm shrink-0 mt-0.5">{`0${i + 1}`}</div>
                <div>
                  <h3 className="font-bold text-sm mb-1">{r.title}</h3>
                  <p className="font-mono text-[10px] text-[#94A3B8] leading-relaxed">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function IndustryGrid() {
  const industries = ["CHEMICAL PLANTS", "OIL REFINERIES", "WATER TREATMENT", "PULP & PAPER", "MINING & MINERALS", "POWER GENERATION", "PHARMACEUTICAL", "FOOD & BEVERAGE"];
  return (
    <section className="py-24 border-t border-[#94A3B8]/10">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="section-chip mb-8">INDUSTRIES SERVED</div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#94A3B8]/10">
          {industries.map((ind) => (
            <div key={ind} className="bg-[#060B14] p-8 flex items-center justify-center text-center hover:bg-[#0B1320] transition-colors cursor-default group">
              <span className="font-mono text-[10px] tracking-[0.15em] text-[#94A3B8] group-hover:text-[#06B6D4] transition-colors">{ind}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-24 md:py-32 border-t border-[#94A3B8]/10 relative">
      <div className="absolute inset-0 bg-[#0B1320]/50" />
      <div className="max-w-[1400px] mx-auto px-6 text-center relative z-10">
        <div className="section-chip inline-flex mb-6">INITIATE RFQ</div>
        <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold mb-6 max-w-[800px] mx-auto">
          Need a <span className="metallic-text">Custom Strainer</span> Configuration?
        </h2>
        <p className="font-mono text-sm text-[#94A3B8] max-w-[500px] mx-auto mb-10">
          SEND YOUR P&ID OR SPECIFICATION. OUR ENGINEERS WILL PROVIDE A COMPLETE TECHNICAL PROPOSAL WITH 3D MODELS, MATERIAL CERTIFICATIONS, AND PRICING WITHIN 48 HOURS.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/contact" className="btn-tech btn-primary glow-pulse">REQUEST TECHNICAL PROPOSAL &rarr;</Link>
          <a href={`mailto:${companyInfo.email}`} className="btn-tech">{companyInfo.email}</a>
        </div>
        <div className="mt-16 inline-flex flex-wrap gap-6 px-8 py-4 card-tech">
          {[{ l: "TEL", v: companyInfo.phone }, { l: "WA", v: companyInfo.whatsapp }, { l: "GMT", v: "+8 (BEIJING)" }].map((i) => (
            <div key={i.l} className="flex items-center gap-2">
              <span className="font-mono text-[9px] tracking-[0.2em] text-[#06B6D4]">[{i.l}]</span>
              <span className="font-mono text-xs text-[#94A3B8]">{i.v}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
