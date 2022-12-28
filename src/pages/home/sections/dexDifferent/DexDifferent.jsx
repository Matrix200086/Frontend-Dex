import React from "react";
import { Col, Row } from "antd";
import LaunchButton from "../../../../components/launchButton/LaunchButton";
import { DexHeading, DexImage, DexInfo, DexPara } from "./index.style";
import { Container } from "react-bootstrap";

const DexDifferent = () => {
  return (
    <>
      <Row className="py-5">
        <Col md={12}>
          <DexInfo>
            <DexHeading>How is SpaceDex different?</DexHeading>
            <DexPara>
              We put user experience first, whether it’s swappers with one-click
              transactions or liquidity providers with single asset staking and
              automatic yield optimization
            </DexPara>
            <LaunchButton />
          </DexInfo>
        </Col>
        <Col md={12}>
          <DexImage src="/images/comparison-table.svg" alt="click here" />
        </Col>
      </Row>
    </>
  );
};

export default DexDifferent;
