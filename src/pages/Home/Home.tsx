import React from "react";
import DoctorsSection from "./DoctorsSection";
import PriceListSection from "./PriceListSection";
import AboutSection from "./AboutSection";
import HeroSection from "./HeroSection";
import ServicesSection from "./ServicesSection";
import TestimonialSection from "./TestimonialsSection";
import WhyChooseUsSection from "./WhyChooseUsSection";
import DiseaseChecker from "./DiseaseChecker";

const Home = () => {
  return (
    <div style={{ background: "#f0f2f5", padding: "40px 20px" }}>
      <DiseaseChecker />
      {/* <HeroSection /> */}
      <DoctorsSection />
      <TestimonialSection />
      <ServicesSection />
      <AboutSection />
      <WhyChooseUsSection />
      <PriceListSection />
    </div>
  );
};

export default Home;
