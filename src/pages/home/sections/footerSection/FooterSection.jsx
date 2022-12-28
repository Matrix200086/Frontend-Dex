import React from "react";
import { Col, Row } from "antd";
import { Container } from "react-bootstrap";
import { EcoCardData } from "../../../../data/homeData/ecoCardData";
import EcoCard from "../../../../components/cards/ecoCard/EcoCard";
import { EcoImage, EcoInfo, EcoLogo, EcoSystem } from "./index.style";

const FooterSection = () => {
  return (
    <>
      <Container>
        <EcoSystem>
          <Row className="align-items-center">
            <Col md={12}>
              <EcoLogo src="/images/eco-system-logo.svg" alt="click here" />
            </Col>
            <Col md={12}>
              <EcoInfo>
                <p style={{ marginBottom: "2rem" }}>
                  We make staking, swapping, bridging and optimising revenues as
                  easy as ever. We empower investors to invest where they want
                  to in a cost and time-efficient way while maximising revenues
                  for liquidity providers. Building on our DEX, our services
                  fall under two umbrellas:
                </p>
                <Row>
                  {EcoCardData.map((item) => (
                    <Col lg={12}>
                      <EcoCard data={item} />
                    </Col>
                  ))}
                </Row>
              </EcoInfo>
            </Col>
          </Row>
          <EcoImage src="/images/space-dex-suite.png" />
        </EcoSystem>
      </Container>
    </>
  );
};

export default FooterSection;
