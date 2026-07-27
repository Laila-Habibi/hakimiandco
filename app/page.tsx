
"use client";
import { useState } from "react";


 import Header from "./components/Header";
 import Hero from "./components/Hero";
 import Services from "./components/Services";
 import About from "./components/About";
 import Statistics from "./components/Statistics";
 import Resources from "./components/Resources";
 import Testimonials from "./components/Testimonials";
 import CTA from "./components/CTA";
 import Footer from "./components/Footer";



export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <main className="overflow-hidden bg-[#fffdf7] text-[#3d210f]">
     

      <Hero />
      <Services />
      <About />
      <Statistics />
      <Resources />
      <Testimonials />
      <CTA />
     

      
    </main>
  );
}














function BotanicalDecoration() {
  return (
    <svg
      viewBox="0 0 120 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full"
    >
      <path
        d="M15 565C30 480 35 400 24 316C14 240 28 170 75 70"
        stroke="#80ab7e"
        strokeWidth="2"
      />
      <path
        d="M29 442C62 419 81 384 92 345C58 360 38 390 29 442Z"
        stroke="#80ab7e"
        strokeWidth="2"
      />
      <path
        d="M26 350C3 321 1 286 11 250C34 273 39 310 26 350Z"
        stroke="#80ab7e"
        strokeWidth="2"
      />
      <path
        d="M36 258C69 242 89 216 102 184C68 191 47 217 36 258Z"
        stroke="#80ab7e"
        strokeWidth="2"
      />
      <path
        d="M52 181C30 151 31 121 42 91C64 115 66 145 52 181Z"
        stroke="#80ab7e"
        strokeWidth="2"
      />
    </svg>
  );
}

