import OurValuesSection from "./OurValuesSection";
import AboutHero from "./HeroSection";
import AboutStatistics from "./StatisticsSection";
import AboutMission from "./OurMissionSection";
import AboutCTA from "./CTASection";




export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-[#fffdf7] text-[#854d1b]">
  
      <AboutHero/>
      <AboutStatistics/>
      <OurValuesSection />
      <AboutMission/>
      <AboutCTA/>

    </main>
  );
}

