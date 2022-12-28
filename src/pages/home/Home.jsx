import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import FooterSection from "./sections/footerSection/FooterSection";
import HeroSection from "./sections/heroSection/HeroSection";
import MiddleSection from "./sections/middleSection/MiddleSection";

const Home = () => {
  return (
    <>
      <div style={{ backgroundColor: "var(--Darkest)" }}>
        <Header />
        <HeroSection />
        <MiddleSection />
        <FooterSection />
        <Footer />
      </div>
    </>
  );
};

export default Home;
