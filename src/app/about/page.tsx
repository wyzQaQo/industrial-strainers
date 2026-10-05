export const dynamicParams = false;
"use client";
import Link from "next/link";
import { stats } from "@/data/navigation";

export default function AboutPage() {
  return (
    <main className="overflow-x-hidden w-full max-w-full relative z-10">
      <section className="min-h-[40vh] flex items-center border-b border-[#94A3B8]/10">
        <div className="max-w-[1400px] mx-auto px-6 pt-32 pb-16 w-full">
          <div className="section-chip mb-4">ABOUT PUREFLOW</div>
          <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-bold mb-4">Precision <span className="metallic-text">Filtration</span> Manufacturing</h1>
          <p className="font-mono text-sm text-[#94A3B8] max-w-[600px]">20+ YEARS SPECIALIZED IN INDUSTRIAL STRAINERS AND WEDGE WIRE SCREENS. BASED IN WENZHOU — THE GLOBAL VALVE AND PIPE FITTING MANUFACTURING CAPITAL.</p>
        </div>
      </section>
      <section className="border-b border-[#94A3B8]/10 bg-[#0B1320]">
        <div className="max-w-[1400px] mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-[clamp(2rem,4vw,3rem)] font-bold text-white mb-2">{s.value}{s.suffix}</div>
                <div className="data-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="factory" className="py-24">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-chip mb-4">MANUFACTURING</div>
              <h2 className="text-3xl font-bold mb-6">Wenzhou <span className="metallic-text">Production</span> Facility</h2>
              <div className="space-y-4 font-mono text-sm text-[#94A3B8]">
                <p>OUR 25,000 SQM FACILITY HOUSES INVESTMENT CASTING, CNC MACHINING, WEDGE WIRE WELDING, AND HYDROSTATIC TESTING — ALL UNDER ONE ROOF.</p>
                <div className="grid grid-cols-2 gap-2 mt-6">
                  {["Investment Casting", "5-Axis CNC Machining", "Robotic Wedge Welding", "Hydrostatic Test Bay", "PMI Spectrometer", "CMM Inspection", "NDE (PT/RT/UT)", "Assembly & FAT"].map((i) => (
                    <div key={i} className="flex items-center gap-2 bg-[#060B14] p-3 border border-[#94A3B8]/5">
                      <span className="text-[#06B6D4] font-mono text-[10px]">&gt;</span>
                      <span className="font-mono text-[10px] tracking-[0.05em]">{i.toUpperCase()}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="border border-[#94A3B8]/10 overflow-hidden">
              <img src="https://picsum.photos/seed/cnc-machining/800/600" alt="CNC Manufacturing" className="w-full h-[400px] object-cover opacity-60" />
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-24 bg-[#0B1320] border-t border-[#94A3B8]/10">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="section-chip mb-8">EXPLORE OUR FILTRATION PRODUCTS</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: "Duplex Strainers", desc: "316L stainless steel continuous-flow filtration. 1\"-24\" ANSI/DIN flanged. 150#-600# rated. Quick-switch diverter valve for zero-downtime cleaning.", href: "/products" },
              { title: "Wedge Wire Screens", desc: "Vee-wire continuous-slot construction. 0.05-6mm slots. Up to 60% open area. Non-clogging for high-solids chemical and mining applications.", href: "/products" },
              { title: "Custom Filtration Skids", desc: "Engineered skid-mounted packages with strainers, valves, instrumentation, and controls. FAT tested. PLC integration ready.", href: "/products" },
            ].map((link) => (
              <Link key={link.title} href={link.href} className="card-tech group">
                <h3 className="font-bold text-sm mb-2 group-hover:text-[#06B6D4] transition-colors">{link.title}</h3>
                <p className="font-mono text-[10px] text-[#94A3B8] leading-relaxed mb-3">{link.desc}</p>
                <span className="font-mono text-[9px] tracking-[0.15em] text-[#06B6D4] group-hover:translate-x-1 transition-transform inline-block">VIEW SPECIFICATIONS &rarr;</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="max-w-[900px] mx-auto px-6">
          <div className="section-chip mb-4">FAQ</div>
          <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-bold mb-12">Industrial Filtration <span className="metallic-text">FAQ</span></h2>
          <div className="space-y-4">
            {[
              { q: "What is the pressure drop across a duplex strainer?", a: "Pressure drop depends on flow rate, viscosity, mesh size, and the strainer body design. For a clean 2\" duplex strainer at rated flow with a standard 0.5mm perforated screen, the pressure drop is typically <0.1 bar (1.5 PSI). As the screen accumulates debris, pressure drop increases — this is the indicator for switching chambers and cleaning. Our engineering team provides CFD-validated pressure drop curves with every technical proposal." },
              { q: "How often should a wedge wire screen be cleaned?", a: "Wedge wire screens are self-cleaning to a degree due to their V-profile design — particles tend to pass over the slots rather than wedge into them. Cleaning frequency depends entirely on solids loading. A screen in a clean water application may run for months between cleanings, while a mining slurry screen may require daily backwash. We recommend installing differential pressure gauges to trigger cleaning based on actual pressure drop rather than fixed schedules." },
              { q: "What is the difference between a simplex and duplex strainer?", a: "A simplex (single-basket) strainer requires process shutdown to clean the filter element — acceptable for non-critical applications with scheduled maintenance windows. A duplex strainer has two parallel chambers with a diverter valve, allowing continuous filtration while one chamber is isolated and cleaned. For chemical plants, refineries, and any process where downtime costs thousands per minute, duplex is the standard choice." },
              { q: "Can PUREFLOW strainers handle high-temperature applications?", a: "Yes. Our standard 316L stainless steel strainers are rated for continuous operation up to 450°C at derated pressure. For applications above 450°C, we offer Inconel 625 and Hastelloy construction with high-temperature graphite gaskets. For cryogenic applications (LNG, liquid oxygen), we provide strainers rated to -196°C with extended bonnets and specialized seat materials." },
              { q: "What flange standards do your strainers support?", a: "We manufacture to all major international flange standards: ANSI/ASME B16.5 (Class 150-2500), DIN EN 1092-1 (PN10-PN400), JIS B2220 (5K-63K), and BS 4504. Custom flange drilling for non-standard bolt patterns is available. All flanges are full-face raised face (RF) as standard, with RTJ (Ring Type Joint) available for Class 900 and above." },
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
