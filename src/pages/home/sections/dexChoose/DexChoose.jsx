import React from "react";
import { Container } from "react-bootstrap";
import { Col, Row } from "antd";
import { DexCardData } from "../../../../data/homeData/dexCardData";
import DexCard from "../../../../components/cards/dexCard/DexCard";
import { ChooseHeading, ChooseImage, ChooseInfo } from "./index.style";

const DexChoose = () => {
  return (
    <>
      <Container>
        <Row className="align-items-center py-5">
          <Col md={12}>
            <ChooseInfo>
              <ChooseHeading>
                <span>Why Choose </span>
                <span> SpaceDex?</span>
              </ChooseHeading>
              <Row>
                {DexCardData.map((item) => (
                  <Col lg={12}>
                    <DexCard data={item} />
                  </Col>
                ))}
              </Row>
            </ChooseInfo>
          </Col>
          <Col md={12} className="text-end">
            <ChooseImage src="/images/middle-phone.svg" alt="click here" />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default DexChoose;
