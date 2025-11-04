import React from "react";
import HeroSection from "../../components/landing-sections/HeroSection";
import CryptoMedia from "../../components/landing-sections/CryptoMedia";
import About from "../../components/landing-sections/About";
import Blog from "../../components/landing-sections/Blog";
import ContactUs from "../../components/landing-sections/ContactUs";

const LandingPage = () => {
  return (
    <>
      <HeroSection/>
      <About/>
      <Blog/>
      <ContactUs/>
      <CryptoMedia/>
    </>
  );
};

export default LandingPage;