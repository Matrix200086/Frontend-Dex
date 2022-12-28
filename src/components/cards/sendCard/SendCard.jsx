import React from "react";
import { Dropdown, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";
import {
  Card,
  DropDownInner,
  DropDowns,
  DropHeading,
  DropText,
  SendAmount,
  AmountInput,
  MaxValue,
  AmountRatio,
} from "./index.style";

const SendCard = (props) => {
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
      <Card>
        <DropDowns>
          <Dropdown overlay={menu} trigger={["click"]}>
            <DropDownInner onClick={(e) => e.preventDefault()}>
              <div className="d-flex">
                <div>
                  <img src="/images/network-icon.svg" alt="click here" />
                </div>
                <div style={{ lineHeight: "1.25", padding: "0 0.5rem" }}>
                  <DropHeading>USDT</DropHeading>
                  <DropText>token</DropText>
                </div>
              </div>
              <DownOutlined />
            </DropDownInner>
          </Dropdown>
          <Dropdown overlay={menu} trigger={["click"]}>
            <DropDownInner onClick={(e) => e.preventDefault()}>
              <div className="d-flex">
                <div>
                  <img src="/images/network-icon.svg" alt="click here" />
                </div>
                <div style={{ lineHeight: "1.25", padding: "0 0.5rem" }}>
                  <DropHeading>POLYGON</DropHeading>
                  <DropText>network</DropText>
                </div>
              </div>
              <DownOutlined />
            </DropDownInner>
          </Dropdown>
        </DropDowns>
        <SendAmount>
          <AmountInput
            min={1}
            max={200}
            value={props.value}
            onChange={props.setValue}
            bordered={false}
          />
          <MaxValue onClick={() => props.setValue(200)}>Max</MaxValue>
          <img
            style={{ cursor: "pointer" }}
            src="/images/wallet-icon.svg"
            alt="Wallet Icon"
          />
          <AmountRatio>{props.text}</AmountRatio>
        </SendAmount>
      </Card>
    </>
  );
};

export default SendCard;
