import React from "react";
import { Tabs } from "antd";
import { TabsArea } from "../index.style";

const DashboardTabs = () => {
  return (
    <>
      <TabsArea
        defaultActiveKey="1"
        tabBarExtraContent={{
          left: (
            <span
              style={{
                color: "var(--Lightest)",
                fontWeight: "700",
                marginRight: "1rem",
              }}
            >
              Estimated Total Gains
            </span>
          ),
        }}
      >
        <Tabs.TabPane tab="1D" key="1">
          <img
            style={{ width: "100%", height: "350px" }}
            src="/images/chart.svg"
            alt="click here"
          />
        </Tabs.TabPane>
        <Tabs.TabPane tab="1W" key="2">
          <img
            style={{ width: "100%", height: "350px" }}
            src="/images/chart.svg"
            alt="click here"
          />
        </Tabs.TabPane>
        <Tabs.TabPane tab="1M" key="3">
          <img
            style={{ width: "100%", height: "350px" }}
            src="/images/chart.svg"
            alt="click here"
          />
        </Tabs.TabPane>
        <Tabs.TabPane tab="1Y" key="4">
          <img
            style={{ width: "100%", height: "350px" }}
            src="/images/chart.svg"
            alt="click here"
          />
        </Tabs.TabPane>
        <Tabs.TabPane tab="ALL" key="5">
          <img
            style={{ width: "100%", height: "350px" }}
            src="/images/chart.svg"
            alt="click here"
          />
        </Tabs.TabPane>
      </TabsArea>
    </>
  );
};

export default DashboardTabs;
