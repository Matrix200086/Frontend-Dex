import React from "react";
import { Container } from "react-bootstrap";
import HeroCards from "../heroCards/HeroCards";
import HeroContent from "../heroContent/HeroContent";
import { HeroArea } from "./index.style";

const HeroSection = () => {
  return (
    <>
      <HeroArea>
        <Container>
          <HeroContent />
          <HeroCards />
        </Container>
      </HeroArea>
    </>
  );
};

export default HeroSection;
