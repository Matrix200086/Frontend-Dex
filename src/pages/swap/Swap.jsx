import React from "react";
import { Col, Row } from "antd";
import DappMainHeading from "../../components/dappMainHeading/DappMainHeading";
import SwapCard from "../../components/cards/swapCard/SwapCard";
import TotalCard from "../../components/cards/totalCard/TotalCard";
import { ArrowRightOutlined } from "@ant-design/icons";
import SwapTabs from "../../components/tabs/swapTabs/SwapTabs";
import { UsdtTabs } from "./index.style";
import SwapAlertCard from "../../components/cards/alertCards/swapAlertCard/SwapAlertCard";

const Swap = () => {
  return (
    <>
      <DappMainHeading heading="Space Swap" />
      <Row gutter={50}>
        <Col xxl={8} xl={11} xs={24}>
          <SwapCard />
        </Col>
        <Col xxl={16} xl={13} xs={24}>
          <Row gutter={20}>
            <Col xxl={12} xs={24} className="mb-3">
              <TotalCard
                cardHeading="TOTAL VALUE LOCKED (TVL)"
                value="2,000,000"
              />
            </Col>
            <Col xxl={12} xs={24} className="mb-3">
              <TotalCard
                cardHeading="Est. APR for ASSET STAKING"
                cardSubheading="Based on Last Week’s Data"
                text="24%"
                subtext="STAKE"
                icon={<ArrowRightOutlined />}
              />
            </Col>
          </Row>
          <UsdtTabs>
            <SwapTabs />
          </UsdtTabs>
        </Col>
      </Row>
      <SwapAlertCard />
    </>
  );
};

export default Swap;
