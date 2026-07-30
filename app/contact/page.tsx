import Image from "next/image";
import Link from "next/link";
import ContactHero from "./ContactHero";
import ContactInformation from "./ContactInformation";
import ContactFormSection from "./ContactFormSection";
import OfficeLocation from "./OfficeLocation";




export default function ContactPage() {
  return (
    <main className="overflow-hidden bg-white">
      <ContactHero />
      <ContactInformation />
      <ContactFormSection />
      <OfficeLocation />
    </main>
  );
}




