import Link from "next/link";

export default function ProductsPage() {
  const p = [
    { n: "316L DUPLEX BASKET STRAINER", t: "2\" ANSI 150# FLANGED", d: "Continuous-flow duplex design. Quick-switch diverter valve. Investment cast 316L body. Perforated screen 0.5-6mm.", f: [{ l: "BODY", v: "SS316L CF8M" }, { l: "SIZE", v: "2\"-24\"" }, { l: "RATING", v: "150#-600#" }, { l: "MESH", v: "50-3000μ" }], img: "https://picsum.photos/seed/strainer-316l/800/600" },
    { n: "WEDGE WIRE SCREEN ELEMENT", t: "CONTINUOUS SLOT 0.1MM-6MM", d: "Vee-wire profile welded to support rods. High open area for maximum flow. Non-clogging for high-solids streams.", f: [{ l: "MATERIAL", v: "SS316L/304" }, { l: "SLOT", v: "0.05-6mm" }, { l: "OD", v: "25-600mm" }, { l: "LENGTH", v: "Custom" }], img: "https://picsum.photos/seed/wedge-screen/800/600" },
    { n: "HIGH PRESSURE Y-STRAINER", t: "CLASS 1500/2500 FORGED", d: "Forged body for high pressure applications. Integral seat design. Blow-down connection for in-line cleaning.", f: [{ l: "BODY", v: "Forged SS316L" }, { l: "SIZE", v: "1/2\"-4\"" }, { l: "RATING", v: "1500#-2500#" }, { l: "END", v: "SW/NPT/FLG" }], img: "https://picsum.photos/seed/y-strainer-hp/800/600" },
    { n: "AUTOMATIC SELF-CLEANING STRAINER", t: "MOTORIZED BACKWASH", d: "Electric actuator with timer control. Automatic backwash cycle. Continuous flow during cleaning. PLC integration ready.", f: [{ l: "SIZE", v: "2\"-48\"" }, { l: "CONTROL", v: "PLC/Manual" }, { l: "MESH", v: "50-2000μ" }, { l: "VOLTAGE", v: "220/380/480V" }], img: "https://picsum.photos/seed/auto-strainer/800/600" },
    { n: "HASTELLOY C276 STRAINER", t: "EXOTIC ALLOY CORROSION", d: "Hastelloy C276 wetted parts. For aggressive chemical service. Also available in Monel, Inconel, and Titanium.", f: [{ l: "MATERIAL", v: "C276/ALLOY 20" }, { l: "SIZE", v: "1/2\"-12\"" }, { l: "RATING", v: "150#-600#" }, { l: "SERVICE", v: "Acid/Chloride" }], img: "https://picsum.photos/seed/hastelloy-strainer/800/600" },
    { n: "SKID-MOUNTED FILTRATION PACKAGE", t: "PLUG & PLAY SYSTEM", d: "Complete filtration skid with duplex strainers, isolation valves, pressure gauges, and differential pressure switch.", f: [{ l: "CONFIG", v: "Custom Design" }, { l: "PIPE", v: "Any Size" }, { l: "VALVES", v: "Manual/Pneumatic" }, { l: "CERT", v: "FAT Tested" }], img: "https://picsum.photos/seed/filter-skid2/800/600" },
  ];
  return (
    <main className="overflow-x-hidden w-full max-w-full relative z-10">
      <section className="min-h-[40vh] flex items-center border-b border-[#94A3B8]/10">
        <div className="max-w-[1400px] mx-auto px-6 pt-32 pb-16 w-full">
          <div className="section-chip mb-4">PRODUCT CATALOG</div>
          <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-bold mb-4">Industrial <span className="metallic-text">Strainers</span> &amp; Screens</h1>
          <p className="font-mono text-sm text-[#94A3B8] max-w-[600px]">FULL RANGE OF DUPLEX, Y-TYPE, WEDGE WIRE, AND CUSTOM FILTRATION SOLUTIONS. 316L STAINLESS STEEL STANDARD.</p>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {p.map((prod) => (
              <div key={prod.n} className="card-tech group !p-0 overflow-hidden">
                <div className="relative h-52 overflow-hidden">
                  <img src={prod.img} alt={prod.n} className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-all duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1320]" />
                  <span className="absolute top-3 right-3 text-[8px] bg-[#06B6D4]/10 text-[#06B6D4] px-2 py-1 border border-[#06B6D4]/20 font-mono">{prod.t}</span>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-sm mb-1 group-hover:text-[#06B6D4] transition-colors">{prod.n}</h3>
                  <p className="font-mono text-[10px] text-[#94A3B8] mb-4">{prod.d}</p>
                  <div className="grid grid-cols-2 gap-1 mb-4">
                    {prod.f.map((ft) => (
                      <div key={ft.l} className="bg-[#060B14] p-2">
                        <div className="text-[7px] text-[#475569] uppercase tracking-wider font-mono">{ft.l}</div>
                        <div className="text-[9px] font-bold text-white font-mono">{ft.v}</div>
                      </div>
                    ))}
                  </div>
                  <Link href="/contact" className="btn-tech btn-primary text-[10px] w-full justify-center py-2 text-center block">REQUEST QUOTE</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
