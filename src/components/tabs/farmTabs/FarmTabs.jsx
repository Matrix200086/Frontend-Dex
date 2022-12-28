import { Tabs } from "antd";
import React from "react";
import FarmSwitch from "../../farmSwitch/FarmSwitch";
import FarmTable from "../../tables/famTable/FarmTable";
import { AnalyticsTabs } from "../index.style";

const FarmTabs = (props) => {
  return (
    <>
      <AnalyticsTabs
        className="odd"
        defaultActiveKey="1"
        tabBarExtraContent={{
          left: (
            <>
              <FarmSwitch />
            </>
          ),
        }}
      >
        <Tabs.TabPane tab={<span>ALL</span>} key="1">
          <FarmTable setIsModalOpen={props.setIsModalOpen} />
        </Tabs.TabPane>
        <Tabs.TabPane tab={<span>Stablecoin</span>} key="2"></Tabs.TabPane>
        <Tabs.TabPane tab={<span>TVL</span>} key="3"></Tabs.TabPane>
        <Tabs.TabPane tab={<span>APY</span>} key="4"></Tabs.TabPane>
      </AnalyticsTabs>
    </>
  );
};

export default FarmTabs;
