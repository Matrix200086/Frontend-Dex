import { Tabs } from "antd";
import React from "react";
import CardBadge from "../../cardBadge/CardBadge";
import CardDropdown from "../../cardDropdown/CardDropdown";
import { TabsArea } from "../index.style";

const TvaTabs = () => {
  return (
    <>
      <TabsArea
        className="odd"
        defaultActiveKey="1"
        tabBarExtraContent={{
          left: (
            <>
              <span
                style={{
                  color: "var(--Lightest)",
                  fontWeight: "700",
                  marginRight: "1rem",
                }}
              >
                Tx Volume per Asset
              </span>
              <div className="d-flex align-items-center">
                <h5 className="mb-0" style={{ color: "var(--White)" }}>
                  20,000,000
                </h5>
                <CardBadge badge="danger" text="- 10%" />
              </div>
            </>
          ),
          right: <CardDropdown dot="blue" text="Usdt" />,
        }}
      >
        <Tabs.TabPane tab="1D" key="1">
          <img
            style={{ width: "100%" }}
            src="/images/tva-chart.png"
            alt="click here"
          />
        </Tabs.TabPane>
        <Tabs.TabPane tab="1W" key="2">
          <img
            style={{ width: "100%" }}
            src="/images/tva-chart.png"
            alt="click here"
          />
        </Tabs.TabPane>
        <Tabs.TabPane tab="1M" key="3">
          <img
            style={{ width: "100%" }}
            src="/images/tva-chart.png"
            alt="click here"
          />
        </Tabs.TabPane>
      </TabsArea>
    </>
  );
};

export default TvaTabs;
