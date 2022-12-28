import React from "react";
import { Col, Dropdown, Row, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";
import {
  Card,
  CardHeading,
  DropDownInner,
  DropDowns,
  DropHeading,
  DropText,
} from "./index.style";

const SendOptionCard = (props) => {
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
      <Row
        style={{
          height: "144px",
          background:
            "linear-gradient(112.87deg, #0A2230 10.32%, #000911 63.88%)",
          borderBottom: "1px solid var(--Accent)",
          borderRadius: "0.9375rem",
          margin: "0.75rem 0",
        }}
      >
        <Col
          xxl={11}
          xl={9}
          xs={12}
          className="d-flex justify-content-center align-items-center"
          style={{
            background:
              "radial-gradient(117.31% 128.55% at 35.68% -16.67%, rgba(232, 247, 255, 0.1) 0%, rgba(183, 206, 224, 0.1) 11.26%, rgba(139, 152, 185, 0.1) 29.3%, rgba(34, 80, 92, 0.1) 64%, rgba(0, 9, 17, 0.1) 92.31%)",
            padding: "0 2rem",
            borderRadius: "0.9375rem 0 0 0.9375rem",
            height: "100%",
          }}
        >
          <Card>
            <div>
              <CardHeading>{props.heading}</CardHeading>
              <h2
                className="mb-0"
                style={{ color: "var(--White)", marginBottom: "0" }}
              >
                200
              </h2>
            </div>
            <div className="text-end">
              <p className="mb-4" style={{ color: "var(--Lightest)" }}>
                Balance:- {props.text}
              </p>
              <p className="mb-0" style={{ color: "var(--Accent)" }}>
                {props.subtext}
              </p>
            </div>
          </Card>
        </Col>
        <Col
          xxl={13}
          xl={15}
          xs={12}
          className="d-flex justify-content-center align-items-center"
          style={{ height: "100%", borderRadius: "0 0.9375rem 0.9375rem 0" }}
        >
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
        </Col>
      </Row>
    </>
  );
};

export default SendOptionCard;
