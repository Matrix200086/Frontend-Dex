import { UpOutlined } from "@ant-design/icons";
import React from "react";
import { Tag, TitleHeading } from "./index.style";

const SwapTabTitle = () => {
  return (
    <>
      <TitleHeading>AVAX/USDT</TitleHeading>
      <h2 style={{ color: "var(--White)" }}>23.57 USDT</h2>
      <Tag>
        26%
        <UpOutlined />
      </Tag>
      <span style={{ fontSize: "0.75rem", color: "var(--Lightest)" }}>
        Past 7 Days
      </span>
    </>
  );
};

export default SwapTabTitle;
