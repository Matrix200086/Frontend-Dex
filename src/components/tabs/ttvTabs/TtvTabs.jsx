import { Tabs } from "antd";
import React from "react";
import CardTag from "../../cardTag/CardTag";
import { ContentChart, ContentHead, TabsArea } from "../index.style";

const TtvTabs = () => {
  return (
    <>
      <TabsArea
        className="totalTabs"
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
              Total Transaction Volume
            </span>
          ),
        }}
      >
        <Tabs.TabPane tab="1D" key="1">
          <ContentHead>
            <div>
              <span style={{ color: "var(--Gray)", fontWeight: "700" }}>
                Total Value Locked
              </span>
            </div>
            <div className="d-lg-flex align-items-center">
              <CardTag dot="green" text="Space" />
              <CardTag dot="pink" text="Eth" />
              <CardTag dot="blue" text="Usdt" />
              <CardTag dot="red" text="Avax" />
              <CardTag dot="purple" text="Matic" />
              <CardTag dot="skyBlue" text="Usdc" />
              <div className="text-end">
                <span
                  className="ms-3"
                  style={{
                    fontSize: "0.75rem",
                    color: "var(--Accent)",
                    cursor: "pointer",
                  }}
                >
                  + Add Asset
                </span>
              </div>
            </div>
          </ContentHead>
          <ContentChart>
            <img src="/images/ttv-chart.png" alt="click here" />
          </ContentChart>
        </Tabs.TabPane>
        <Tabs.TabPane tab="1W" key="2">
          <ContentHead>
            <div>
              <span style={{ color: "var(--Gray)", fontWeight: "700" }}>
                Total Value Locked
              </span>
            </div>
            <div className="d-lg-flex align-items-center">
              <CardTag dot="green" text="Space" />
              <CardTag dot="pink" text="Eth" />
              <CardTag dot="blue" text="Usdt" />
              <CardTag dot="red" text="Avax" />
              <CardTag dot="purple" text="Matic" />
              <CardTag dot="skyBlue" text="Usdc" />
              <div className="text-end">
                <span
                  className="ms-3"
                  style={{
                    fontSize: "0.75rem",
                    color: "var(--Accent)",
                    cursor: "pointer",
                  }}
                >
                  + Add Asset
                </span>
              </div>
            </div>
          </ContentHead>
          <ContentChart>
            <img src="/images/ttv-chart.png" alt="click here" />
          </ContentChart>
        </Tabs.TabPane>
        <Tabs.TabPane tab="1M" key="3">
          <ContentHead>
            <div>
              <span style={{ color: "var(--Gray)", fontWeight: "700" }}>
                Total Value Locked
              </span>
            </div>
            <div className="d-lg-flex align-items-center">
              <CardTag dot="green" text="Space" />
              <CardTag dot="pink" text="Eth" />
              <CardTag dot="blue" text="Usdt" />
              <CardTag dot="red" text="Avax" />
              <CardTag dot="purple" text="Matic" />
              <CardTag dot="skyBlue" text="Usdc" />
              <div className="text-end">
                <span
                  className="ms-3"
                  style={{
                    fontSize: "0.75rem",
                    color: "var(--Accent)",
                    cursor: "pointer",
                  }}
                >
                  + Add Asset
                </span>
              </div>
            </div>
          </ContentHead>
          <ContentChart>
            <img src="/images/ttv-chart.png" alt="click here" />
          </ContentChart>
        </Tabs.TabPane>
      </TabsArea>
    </>
  );
};

export default TtvTabs;
