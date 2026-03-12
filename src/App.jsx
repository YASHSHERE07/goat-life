import React from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import InsiderSection from "./components/InsiderSection";
import ReviewsSection from "./components/ReviewsSection";
import Hero from "./components/Hero";
import FlavourSection from "./components/Flavour/FlavourSection";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProductInfo1 from "./components/ProductInfo1";
import IngredientsSection from "./components/IngredientsSection";
import SharkTankSection from "./components/SharkTankSection";
import Footer from "./components/Footer";
import MobileFlavourCards from "./components/Flavour/MobileFlavourCards";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function App() {
  return (
    <div>
    <Navbar />
      <div className="h-full bg-[#faeade]">
        <section id="section-hero">
          <Hero />
        </section>

        <section id="section-features">
          <Card />
          <ProductInfo1 />
          <InsiderSection />
          <IngredientsSection />
        </section>

        <section id="section-flavours">
          <MobileFlavourCards />
          <div className="hidden md:block">
            <FlavourSection />
          </div>
        </section>

        <section id="section-reviews">
          <ReviewsSection />
        </section>

        <SharkTankSection />
        <Footer />
      </div>
    </div>
  );
}

export default App;
