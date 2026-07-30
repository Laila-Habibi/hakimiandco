import Image from "next/image";
import Link from "next/link";
import CareersHero from "./CareersHero";
import BenefitsSection from "./BenefitsSection";
import OpenPositionsSection from "./Positions";
import ResumeCTA from "./ResumeCTA";



export default function CareersPage() {
  return (
    <main>
      <CareersHero />
      <BenefitsSection />
      <OpenPositionsSection />
      <ResumeCTA />
    </main>
  );
}
