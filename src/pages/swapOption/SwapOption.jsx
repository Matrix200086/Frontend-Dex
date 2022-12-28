import React, { useState } from "react";
import { Col, Form, Row } from "antd";
import SendOptionCard from "../../components/cards/sendOptionCard/SendOptionCard";
import {
  AddressInput,
  GasAmount,
  GasBtn,
  SwapCheckbox,
} from "../../components/cards/swapCard/index.style";
import DappMainHeading from "../../components/dappMainHeading/DappMainHeading";
import {
  OptionHead,
  ReminderArea,
  ReminderHeading,
  SwapRows,
} from "./index.style";
import SummaryCard from "../../components/cards/summaryCard/SummaryCard";

const SwapOption = () => {
  const [num, setNum] = useState(1);
  return (
    <>
      <Row gutter={20}>
        <Col lg={15} xs={24}>
          <OptionHead>
            <DappMainHeading heading="Space Swap" />
            <div>
              <SwapCheckbox className="me-5">
                Send to another wallet
              </SwapCheckbox>
              <SwapCheckbox>Send gas</SwapCheckbox>
            </div>
          </OptionHead>
        </Col>
        <Col lg={9}></Col>
        <Col lg={15}>
          <div style={{ position: "relative" }}>
            <SendOptionCard heading="Send" text="$4,000" subtext="MAX" />
            <SwapRows>
              <img src="/images/swap-rows-icon.svg" alt="click here" />
            </SwapRows>
            <SendOptionCard heading="Recieve" text="$0" />
          </div>
          <Row gutter={24} style={{ marginTop: "2rem" }}>
            <Col xxl={13} xl={8} xs={24}>
              <Form name="addressForm" layout="vertical">
                <Form.Item
                  label={
                    <p
                      className="mb-2"
                      style={{ color: "var(--Lightest)", fontWeight: "700" }}
                    >
                      Address
                    </p>
                  }
                  name="address"
                >
                  <AddressInput
                    style={{ background: "var(--Darkest)" }}
                    placeholder="Paste wallet address here"
                    suffix={
                      <img src="/images/contact-icon.svg" alt="click here" />
                    }
                  />
                </Form.Item>
              </Form>
            </Col>
            <Col xxl={11} xl={16} xs={24}>
              <p
                className="mb-2"
                style={{ color: "var(--Lightest)", fontWeight: "700" }}
              >
                Send Gas
              </p>
              <GasAmount>
                <span>Select Gas Amount</span>
                <div className="buttons">
                  <GasBtn
                    className={num === 0 ? "active" : ""}
                    style={{ width: "55px", height: "55px" }}
                    onClick={() => (num === 0 ? "" : setNum(0))}
                  >
                    $1
                  </GasBtn>
                  <GasBtn
                    className={num === 1 ? "active" : ""}
                    style={{ width: "55px", height: "55px" }}
                    onClick={() => (num === 1 ? "" : setNum(1))}
                  >
                    $10
                  </GasBtn>
                  <GasBtn
                    className={num === 2 ? "active" : ""}
                    style={{ width: "55px", height: "55px" }}
                    onClick={() => (num === 2 ? "" : setNum(2))}
                  >
                    $100
                  </GasBtn>
                </div>
              </GasAmount>
            </Col>
          </Row>
          <ReminderArea>
            <ReminderHeading>Reminder:-</ReminderHeading>
            <ul>
              <li>
                Crosschain Fee is 0.01 %, Minimum Crosschain Fee is 0.5 USDC,
                Maximum Crosschain Fee is 1,000 USDC
              </li>
              <li>Minimum Crosschain Amount is 12 USDC</li>
              <li>Maximum Crosschain Amount is 20,000,000 USDC</li>
              <li>Estimated Time of Crosschain Arrival is 10-30 min</li>
              <li>
                Crosschain amount larger than 5,000,000 USDC could take up to 12
                hours
              </li>
              <li>Use “Send Gas” to receive gas on the receiving chain</li>
            </ul>
          </ReminderArea>
        </Col>
        <Col lg={9} xs={24}>
          <SummaryCard />
        </Col>
      </Row>
    </>
  );
};

export default SwapOption;
