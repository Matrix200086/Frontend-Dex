import React from "react";
import { MenuFoldOutlined } from "@ant-design/icons";
import { useLocation } from "react-router-dom";
import {
  NavigationItem,
  NavigationLinks,
  SideNavigation,
  SocialLinks,
  ToggleBtn,
} from "./index.style";

const Sidebar = (props) => {
  const location = useLocation();
  console.log(location.pathname);
  const onCLick = () => {
    props.setShowSidebar(false);
  };
  return (
    <>
      <SideNavigation style={props.showSidebar === true ? { left: "0" } : {}}>
        <ToggleBtn onClick={onCLick}>
          <MenuFoldOutlined />
        </ToggleBtn>
        <NavigationLinks>
          <NavigationItem to="/dashboard" onClick={onCLick}>
            <img src="/images/dashboard-icon.svg" alt="click here" />
            <img src="/images/dashboard-icon-active.svg" alt="click here" />
            <span>Dashboard</span>
          </NavigationItem>
          <NavigationItem
            to="/swap"
            className={
              ["/swap", "/Swapoption"].includes(location.pathname)
                ? "active"
                : ""
            }
            onClick={onCLick}
          >
            <img src="/images/swap-icon.svg" alt="click here" />
            <img src="/images/swap-icon-active.svg" alt="click here" />
            <span>Swap</span>
          </NavigationItem>
          <NavigationItem to="/farm" onClick={onCLick}>
            <img src="/images/farm-icon.svg" alt="click here" />
            <img src="/images/farm-icon-active.svg" alt="click here" />
            <span>Farm</span>
          </NavigationItem>
          <NavigationItem to="/yield" onClick={onCLick}>
            <img src="/images/yield-icon.svg" alt="click here" />
            <img src="/images/yield-icon-active.svg" alt="click here" />
            <span>Yield</span>
          </NavigationItem>
          <NavigationItem to="/trade" onClick={onCLick}>
            <img src="/images/trade-icon.svg" alt="click here" />
            <img src="/images/trade-icon-active.svg" alt="click here" />
            <span>Trade</span>
          </NavigationItem>
          <NavigationItem to="/analytics" onClick={onCLick}>
            <img src="/images/analytics-icon.svg" alt="click here" />
            <img src="/images/analytics-icon-active.svg" alt="click here" />
            <span>Analytics</span>
          </NavigationItem>
        </NavigationLinks>
        <SocialLinks>
          <a href="#" onClick={onCLick}>
            <img src="/images/twitter-icon.svg" alt="click here" />
          </a>
          <a href="#" className="mx-3" onClick={onCLick}>
            <img src="/images/discord-icon.svg" alt="click here" />
          </a>
          <a href="#" onClick={onCLick}>
            <img src="/images/wand-icon.svg" alt="click here" />
          </a>
        </SocialLinks>
      </SideNavigation>
    </>
  );
};

export default Sidebar;
