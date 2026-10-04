import type { Metadata } from "next";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { buildOrganizationSchema, buildWebSiteSchema, renderJSONLD, buildFAQSchema } from "@/lib/seo-schema";
import "./globals.css";

export const metadata: Metadata = {
  title: "PUREFLOW INDUSTRIAL | Duplex Strainers & Wedge Wire Screens Manufacturer",
  description:
    "316L stainless steel industrial duplex basket strainers, wedge wire screens, Y-type strainers, and custom filtration skids. API 6D & PED certified. Wenzhou-based manufacturer serving chemical plants, refineries, and water treatment globally.",
  keywords: [
    "duplex basket strainer price",
    "wedge wire screen manufacturer",
    "industrial water filtration strainer",
    "316L stainless steel duplex strainer",
    "2 inch ANSI flanged SS316L duplex basket strainer for chemical plant",
    "industrial duplex strainers wholesale",
    "pipeline strainer supplier",
    "Hastelloy C276 strainer",
    "automatic self-cleaning strainer",
  ],
  openGraph: {
    title: "PUREFLOW INDUSTRIAL | Industrial Duplex Strainers & Wedge Wire Screens",
    description:
      "316L stainless steel industrial filtration — duplex strainers, wedge wire screens, and custom skid packages. API 6D & PED certified. 20+ years specialized manufacturing.",
    type: "website",
    siteName: "PUREFLOW INDUSTRIAL",
    locale: "en_US",
  },
  alternates: {
    canonical: "https://www.pureflow-industrial.com",
  },
};

const orgSchema = buildOrganizationSchema({
  name: "PUREFLOW INDUSTRIAL",
  url: "https://www.pureflow-industrial.com",
  description:
    "Specialized manufacturer of 316L stainless steel industrial duplex strainers, wedge wire screens, Y-type strainers, and custom filtration skid packages. API 6D, PED, and NACE MR0175 certified. Based in Wenzhou — the global valve and filtration manufacturing capital.",
  telephone: "+86-577-8888-0000",
  email: "inquiry@pureflow-industrial.com",
  address: {
    streetAddress: "No. 88, Binhai Industrial Park",
    addressLocality: "Wenzhou",
    addressRegion: "Zhejiang",
    postalCode: "325000",
    addressCountry: "CN",
  },
});

const websiteSchema = buildWebSiteSchema(
  "https://www.pureflow-industrial.com",
  "PUREFLOW INDUSTRIAL",
  "https://www.pureflow-industrial.com/search?q={search_term_string}"
);

const generalFAQSchema = buildFAQSchema([
  {
    question: "What is a duplex strainer and how does it work?",
    answer: "A duplex strainer is a pipeline filtration device with two separate filter chambers and a diverter valve. When Chamber A's filter element becomes clogged, the operator switches flow to Chamber B using the diverter valve — allowing continuous filtration without shutting down the process line. The operator can then clean Chamber A while Chamber B is in service. This 'no-downtime' design is critical for chemical plants, refineries, and water treatment facilities where process interruption costs thousands of dollars per minute.",
  },
  {
    question: "What materials are available for industrial strainers?",
    answer: "Our standard material is 316L stainless steel (CF8M casting) for all wetted parts — suitable for most chemical, water treatment, and refinery applications. For aggressive media, we offer Hastelloy C276, Alloy 20, Monel 400, Inconel 625, and Titanium Grade 2 construction. All materials come with full EN 10204 3.1 certification. For high-pressure applications above Class 600, we use forged 316L bodies with integral seats.",
  },
  {
    question: "What certifications do PUREFLOW strainers carry?",
    answer: "PUREFLOW strainers are manufactured to API 6D pipeline valve standards and PED 2014/68/EU Module H. We hold ISO 9001:2015 quality management certification. For sour service (H2S) applications, our products comply with NACE MR0175/ISO 15156. We also provide ATEX certification for strainers used in potentially explosive atmospheres. Every strainer is hydrostatically tested to 1.5x rated pressure with full test certificates.",
  },
  {
    question: "How do I specify the right strainer for my process?",
    answer: "To specify the correct industrial strainer, provide: (1) fluid type and characteristics, (2) flow rate in m3/h or GPM, (3) operating and design pressure, (4) operating temperature, (5) required filtration level in microns, (6) pipe size and flange standard (ANSI/DIN/JIS), (7) any special material requirements. Our engineering team will return a complete technical proposal within 48 hours including 3D models and pressure drop calculations.",
  },
  {
    question: "What is the difference between wedge wire screens and perforated plate strainers?",
    answer: "Wedge wire (Vee-wire) screens feature continuous-slot construction with V-shaped profile wires welded to support rods. This design provides up to 60% open area — significantly higher than perforated plates — making them ideal for high-solids streams where clogging is a concern. Perforated plate strainers use punched holes in a flat sheet and are better suited for clean fluid applications with low solids loading. Wedge wire is the standard choice for mining, pulp & paper, and wastewater treatment.",
  },
]);

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: renderJSONLD(orgSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: renderJSONLD(websiteSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: renderJSONLD(generalFAQSchema) }} />
      </head>
      <body className="bg-[#060B14] text-[#E2E8F0] antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
