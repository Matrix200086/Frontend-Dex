import React from "react";
import { Col, Row } from "antd";
import DappMainHeading from "../../components/dappMainHeading/DappMainHeading";
import AnalyticsTotalCards from "../../components/analyticsTotalCards/AnalyticsTotalCards";
import AnalyticsMainTabs from "../../components/tabs/analyticsMainTabs/AnalyticsMainTabs";

const Analytics = () => {
  return (
    <>
      <DappMainHeading heading="Analytics" />
      <Row gutter={40} style={{ paddingBottom: "7rem" }}>
        <Col lg={16} xs={24}>
          <AnalyticsMainTabs />
        </Col>
        <Col lg={8} xs={24} style={{ marginTop: "2rem", height: "auto" }}>
          <AnalyticsTotalCards />
        </Col>
      </Row>
    </>
  );
};

export default Analytics;
