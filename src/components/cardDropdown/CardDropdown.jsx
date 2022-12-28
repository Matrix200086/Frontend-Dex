import React from "react";
import { DownOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { CardDrop, Dot } from "./index.style";

const CardDropdown = (props) => {
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
          key: "3",
        },
      ]}
    />
  );
  return (
    <>
      <CardDrop overlay={menu} trigger={["click"]}>
        <a onClick={(e) => e.preventDefault()}>
          <Dot className={props.dot}></Dot>
          <span className="text">{props.text}</span>
          <DownOutlined />
        </a>
      </CardDrop>
    </>
  );
};

export default CardDropdown;
