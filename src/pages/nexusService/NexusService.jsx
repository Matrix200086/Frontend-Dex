import React from "react";
import { Container } from "react-bootstrap";
import { Row, Col } from "antd";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import LaunchButton from "../../components/launchButton/LaunchButton";
import BenefitCard from "../../components/cards/benefitCard/BenefitCard";
import { BenefitCardData } from "../../data/nexusData/benefitCardData";
import {
  BenefitHeading,
  BenefitSection,
  ContentArea,
  ContentHeading,
  ContentPara,
  NexusArea,
  NexusContent,
  VisionImage,
  VisionSection,
} from "./index.style";

const NexusService = () => {
  return (
    <>
      <NexusArea>
        <Header />
        <ContentArea>
          <Row>
            <Container>
              <Col md={23} className="ms-auto">
                <ContentHeading>
                  Nexus-as-a-Service unifies liquidities across pools, platforms
                  and chains
                </ContentHeading>
                <ContentPara>
                  We merge a scattered ecosystem while allowing all the
                  stakeholders to maintain ownership of their assets
                </ContentPara>
                <LaunchButton />
              </Col>
            </Container>
          </Row>
        </ContentArea>
        <BenefitSection>
          <Container>
            <BenefitHeading>
              <span>Benefits </span>
              for Participants
            </BenefitHeading>
            <Row gutter={[{ lg: 80, md: 60, xs: 20 }, 160]}>
              {BenefitCardData.map((item) => (
                <Col md={12}>
                  <BenefitCard data={item} />
                </Col>
              ))}
            </Row>
          </Container>
        </BenefitSection>
        <VisionSection>
          <Container>
            <BenefitHeading>
              <span>Our Vision: </span>
              Nexus-Unified Liquidity
            </BenefitHeading>
            <VisionImage src="/images/vision-nexus.svg" alt="click here" />
          </Container>
        </VisionSection>
        <Footer />
      </NexusArea>
    </>
  );
};

export default NexusService;
