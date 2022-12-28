import React from "react";
import { Dropdown, Menu } from "antd";
import { HeaderArea, ToggleBtn } from "./index.style";
import { HeaderLink } from "./index.style";
import { MenuUnfoldOutlined } from "@ant-design/icons";

const DappHeader = (props) => {
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
      <HeaderArea>
        <ToggleBtn onClick={() => props.setShowSidebar(true)}>
          <MenuUnfoldOutlined />
        </ToggleBtn>
        <a href="#">
          <img src="/images/dapp-logo.svg" alt="click here" />
        </a>
        <HeaderLink className="mt-4 mt-md-0">
          <p>0xb87010ac58Ecc51....</p>
          {/* <Dropdown.Button
            onClick={handleButtonClick}
            overlay={menu}
            icon={<img src="/images/" />}
          >
            Dropdown
          </Dropdown.Button> */}
          <Dropdown overlay={menu} trigger={["click"]}>
            <a onClick={(e) => e.preventDefault()}>
              <img src="/images/arrow-down-icon.svg" alt="click here" />
              <span className="px-3" style={{ color: "var(--Accent)" }}>
                Polygon
              </span>
              <img src="/images/network-icon.svg" alt="click here" />
            </a>
          </Dropdown>
        </HeaderLink>
      </HeaderArea>
    </>
  );
};

export default DappHeader;
