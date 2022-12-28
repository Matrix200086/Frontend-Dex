import React from "react";
import { Col, Row, Tabs } from "antd";
import { AnalyticsTabs } from "../index.style";
import TvlCard from "../../cards/tvlCard/TvlCard";
import TtvCard from "../../cards/ttvCard/TtvCard";
import TvlaCard from "../../cards/tvlaCard/TvlaCard";
import TvaCard from "../../cards/tvaCard/TvaCard";
import TpaCard from "../../cards/tpaCard/TpaCard";
import TpcCard from "../../cards/tpcCard/TpcCard";

const AnalyticsMainTabs = () => {
  return (
    <>
      <AnalyticsTabs defaultActiveKey="1">
        <Tabs.TabPane tab={<span>ALL</span>} key="1">
          <TvlCard />
          <TtvCard />
          <Row gutter={40}>
            <Col lg={12} xs={24}>
              <TvlaCard />
            </Col>
            <Col lg={12} xs={24}>
              <TvaCard />
            </Col>
            <Col lg={12} xs={24}>
              <TpaCard />
            </Col>
            <Col lg={12} xs={24}>
              <TpcCard />
            </Col>
          </Row>
        </Tabs.TabPane>
        <Tabs.TabPane tab={<span>Total</span>} key="2">
          <TvlCard />
          <TtvCard />
          <Row gutter={40}>
            <Col md={12}>
              <TvlaCard />
            </Col>
            <Col md={12}></Col>
          </Row>
        </Tabs.TabPane>
        <Tabs.TabPane tab={<span>By Asset</span>} key="3">
          <Row gutter={40}>
            <Col md={12}>
              <TvlaCard />
            </Col>
            <Col md={12}>
              <TvaCard />
            </Col>
            <Col md={12}>
              <TpaCard />
            </Col>
            <Col md={12}></Col>
          </Row>
        </Tabs.TabPane>
        <Tabs.TabPane tab={<span>Transaction</span>} key="4">
          <Row gutter={40}>
            <Col md={12}>
              <TpaCard />
            </Col>
            <Col md={12}>
              <TpcCard />
            </Col>
          </Row>
        </Tabs.TabPane>
      </AnalyticsTabs>
    </>
  );
};

export default AnalyticsMainTabs;
