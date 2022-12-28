import React from "react";
import { Container } from "react-bootstrap";
import DexChoose from "../dexChoose/DexChoose";
import DexDifferent from "../dexDifferent/DexDifferent";
import DexEffect from "../dexEffect/DexEffect";
import MiddleCards from "../middleCards/MiddleCards";
import { MiddleArea } from "./index.style";

const MiddleSection = () => {
  return (
    <>
      <MiddleArea>
        <Container>
          <MiddleCards />
          <DexDifferent />
          <DexChoose />
          <DexEffect />
        </Container>
      </MiddleArea>
    </>
  );
};

export default MiddleSection;
