import React from "react";
import { Col, Row } from "antd";
import MiddleCard from "../../../../components/cards/middleCard/MiddleCard";
import { HeroCardData } from "../../../../data/homeData/heroCardData";

const MiddleCards = () => {
  return (
    <>
      <Row gutter={{ md: 60 }} className="justify-content-center">
        {HeroCardData.map((item) => (
          <Col lg={8} md={12} style={{ margin: "4rem 0" }}>
            <MiddleCard data={item} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default MiddleCards;
