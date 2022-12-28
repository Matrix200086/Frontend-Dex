import React from "react";
import { Menu } from "antd";
import { DownOutlined, SearchOutlined } from "@ant-design/icons";
import { FilterDropDown, SearchInput } from "./index.style";

const DashboardTableTitle = () => {
  const menu = (
    <Menu
      items={[
        {
          label: "1st menu item",
          key: "0",
        },
        {
          label: "2nd menu item",
          key: "1",
        },
        {
          label: "3rd menu item",
          key: "2",
        },
      ]}
    />
  );
  return (
    <>
      <SearchInput
        placeholder="Search Asset"
        suffix={<img src="/images/search-glass-icon.svg" alt="click here" />}
      />
      <FilterDropDown overlay={menu} trigger={["click"]}>
        <a onClick={(e) => e.preventDefault()}>
          Filter By
          <DownOutlined />
        </a>
      </FilterDropDown>
    </>
  );
};

export default DashboardTableTitle;
