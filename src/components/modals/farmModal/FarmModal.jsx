import React, { useState } from "react";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import { FarmCheck } from "../../tables/famTable/index.style";
import {
  AdjustInput,
  AdjustSlider,
  BalanceInput,
  CancelBtn,
  Collateral,
  Deposit,
  ModalArea,
  ModalButtons,
  ModalContent,
  ModalHead,
  ModalSwitch,
  SubmitBtn,
} from "./index.style";

const FarmModal = (props) => {
  const data = [
    {
      heading: "Yield Farming APR",
      text: "7.5%",
      subtext: "22%",
    },
    {
      heading: "Leveraged Weekly APR",
      text: "0.17%",
      subtext: "0.45%",
    },
    {
      heading: "Total APR",
      text: "60%",
      subtext: "160%",
    },
    {
      heading: "Total APY",
      text: "50%",
      subtext: "500%",
    },
  ];
  const [inputValue, setInputValue] = useState(2.5);
  const [inputNumber, setInputNumber] = useState(5);
  const marks = {
    1: "1x",
    1.5: ".",
    2: ".",
    2.5: ".",
    3: "3x",
    3.5: ".",
    4: ".",
    4.5: ".",
    5: ".",
    5.5: ".",
    6: ".",
    6.5: ".",
    7: "7x",
    7.5: ".",
    8: ".",
    8.5: ".",
    9: ".",
    9.5: ".",
    10: "10x",
  };
  return (
    <>
      <ModalArea
        title={false}
        width={530}
        visible={props.isModalOpen}
        onOk={() => props.setIsModalOpen(false)}
        onCancel={() => props.setIsModalOpen(false)}
        footer={false}
      >
        <ModalHead>
          <div className="d-flex align-items-center">
            <img
              style={{ width: "20px", height: "20px" }}
              src="/images/network-icon.svg"
              alt="click here"
            />
            <h5 className="mb-0" style={{ color: "var(--White)" }}>
              USDT
            </h5>
          </div>
          <div>
            <ModalSwitch defaultChecked />
          </div>
        </ModalHead>
        <p
          className="mb-2"
          style={{
            fontSize: "0.875rem",
            fontWeight: "400",
            color: "var(--Lightest)",
          }}
        >
          Balance:- $4,000
        </p>
        <BalanceInput
          addonAfter={
            <p
              style={{
                fontSize: "0.75rem",
                fontWeight: "600",
                color: "var(--Accent)",
                cursor: "pointer",
              }}
              onClick={() => setInputNumber(200)}
            >
              MAX
            </p>
          }
          prefix={<img src="/images/network-icon.svg" alt="click here" />}
          bordered={false}
          value={inputNumber}
          min={0}
          max={200}
        />
        <p
          className="mb-2 mt-3"
          style={{
            fontSize: "0.875rem",
            fontWeight: "400",
            color: "var(--Lightest)",
          }}
        >
          Adjust Leverage
        </p>
        <AdjustInput>
          <MinusOutlined
            onClick={() =>
              inputValue > 1 ? setInputValue(inputValue - 0.5) : ""
            }
          />
          <h5>{inputValue}</h5>
          <PlusOutlined
            onClick={() =>
              inputValue < 10 ? setInputValue(inputValue + 0.5) : ""
            }
          />
        </AdjustInput>
        <AdjustSlider
          min={1}
          max={10}
          marks={marks}
          value={inputValue}
          step={0.5}
          onChange={(value) => {
            if (isNaN(value)) {
              return;
            }
            setInputValue(value);
          }}
        />
        <FarmCheck>Use as Collateral</FarmCheck>
        <div className="my-3">
          {data.map((item) => (
            <Collateral>
              <span>{item.heading}</span>
              <div className="d-flex align-items-center">
                <span>{item.text}</span>
                <img
                  className="mx-3"
                  src="/images/arrow-right-icon.svg"
                  alt="click here"
                />
                <span className="linearText">{item.subtext}</span>
              </div>
            </Collateral>
          ))}
        </div>
        <Deposit>
          <span>Total deposit should be at least $10</span>
        </Deposit>
        <ModalContent>
          <p>Reminder:-</p>
          <ul className="mb-0">
            <li>
              Impermanent loss protection is active after 30 days. If you
              withdraw your asset before, you may lose some of your assets.
              Click here for more information on our partial impermanent loss
              protection mechanism (link TBD)
            </li>
          </ul>
        </ModalContent>
        <ModalButtons>
          <CancelBtn onClick={() => props.setIsModalOpen(false)}>
            Cancel
          </CancelBtn>
          <SubmitBtn onClick={() => props.setIsModalOpen(false)} type="submit">
            Farm
          </SubmitBtn>
        </ModalButtons>
      </ModalArea>
    </>
  );
};

export default FarmModal;
