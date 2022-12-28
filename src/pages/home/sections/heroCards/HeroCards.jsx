import React from "react";
import { Col, Row } from "antd";
import { CalculationData } from "../../../../data/homeData/calculationData";
import { CalculationHeading, CalculationText } from "./index.style";

const HeroCards = () => {
  return (
    <>
      <Row
        className="justify-content-between"
        style={{ padding: "6rem 0 10rem" }}
      >
        {CalculationData.map((item) => (
          <Col lg={6} md={12} className="my-lg-0 my-2 mx-auto">
            <CalculationHeading>{item.heading}</CalculationHeading>
            <CalculationText>{item.text}</CalculationText>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HeroCards;
