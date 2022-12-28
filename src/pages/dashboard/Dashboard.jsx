import { Col, Row } from "antd";
import React from "react";
import GainCard from "../../components/cards/gainCard/GainCard";
import TokenCard from "../../components/cards/tokenCard/TokenCard";
import DappMainHeading from "../../components/dappMainHeading/DappMainHeading";
import DashboardTabs from "../../components/tabs/dashboardTabs/DashboardTabs";
import GainList from "../../components/gainList/GainList";
import DashboardTable from "../../components/tables/dashboardTable/DashboardTable";
import { GainCardData } from "../../data/dashboardData/gainCardData";
import { TokenCardData } from "../../data/dashboardData/tokenCardData";
import { GainTabs } from "./index.style";

const Dashboard = () => {
  return (
    <>
      <DappMainHeading heading="Dashboard" />
      <Row gutter={40}>
        <Col lg={14} xxl={15} xs={24}>
          <Row gutter={12}>
            {TokenCardData.map((item) => (
              <Col md={8} xs={24} className="my-md-0 my-2">
                <TokenCard data={item} />
              </Col>
            ))}
          </Row>
          <DashboardTable />
        </Col>
        <Col lg={10} xxl={9} xs={24}>
          <GainTabs>
            <DashboardTabs />
          </GainTabs>
          <Row gutter={20} style={{ marginTop: "1.25rem" }}>
            {GainCardData.map((item) => (
              <Col md={8} xs={24} className="my-md-0 my-2">
                <GainCard data={item} />
              </Col>
            ))}
          </Row>
          <GainList />
        </Col>
      </Row>
    </>
  );
};

export default Dashboard;
