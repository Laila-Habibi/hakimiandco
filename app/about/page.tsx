import OurValuesSection from "./OurValuesSection";
import AboutHero from "./HeroSection";
import AboutStatistics from "./StatisticsSection";
import AboutMission from "./OurMissionSection";
import AboutCTA from "./CTASection";




export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-[var(--surface-cream)] text-[var(--primary-brown)]">
  
      <AboutHero/>
      <AboutStatistics/>
      <OurValuesSection />
      <AboutMission/>
      <AboutCTA/>

    </main>
  );
}

