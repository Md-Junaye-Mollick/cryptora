import React from "react";
import HeroSection from "../../components/landing-sections/HeroSection";
import AboutUs from "../../components/landing-sections/AboutUs";
import OurService from "../../components/landing-sections/OurService";
import Token from "../../components/landing-sections/Token";
import NFTMarketplace from "../../components/landing-sections/NFTMarketplace";
import ICOMarketing from "../../components/landing-sections/ICOMarketing";
import Metaverse from "../../components/landing-sections/Metaverse";
import Wallet from "../../components/landing-sections/Wallet";
import TechStack from "../../components/landing-sections/TechStack";
import FileSection from "../../components/landing-sections/FileSection";
import CryptoMedia from "../../components/landing-sections/CryptoMedia";
import About from "../../components/landing-sections/About";
import Blog from "../../components/landing-sections/Blog";
import ContactUs from "../../components/landing-sections/ContactUs";

const LandingPage = () => {
  return (
    <>
      <HeroSection/>
      <AboutUs/>
      <OurService />
      <About/>
      <Token/>
      <NFTMarketplace/>
      <ICOMarketing/>
      <Metaverse/>
      <Wallet/>
      <TechStack/>
      <FileSection/>
      <Blog/>
      <ContactUs/>
      <CryptoMedia/>
    </>
  );
};

export default LandingPage;