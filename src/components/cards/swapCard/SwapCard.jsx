import { Input } from "antd";
import React, { useState } from "react";
import SendCard from "../sendCard/SendCard";
import {
  Card,
  SwapCheckbox,
  CheckBoxes,
  SwapInfo,
  SwapBtn,
  GasAmount,
  GasBtn,
  ArrowDown,
  AddressInput,
} from "./index.style";

const SwapCard = () => {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [num, setNum] = useState(1);
  const [gasChecked, setGasChecked] = useState(true);
  const [walletChecked, setWalletChecked] = useState(true);
  const onGasChange = () => {
    setGasChecked(!gasChecked);
  };
  const onWalletChange = () => {
    setWalletChecked(!walletChecked);
  };
  return (
    <>
      <Card>
        <CheckBoxes>
          <SwapCheckbox checked={walletChecked} onChange={onWalletChange}>
            Send to another wallet
          </SwapCheckbox>
          <SwapCheckbox checked={gasChecked} onChange={onGasChange}>
            Send gas
          </SwapCheckbox>
        </CheckBoxes>
        <div style={{ position: "relative" }}>
          <SendCard value={value1} setValue={setValue1} text="4000.75" />
          <ArrowDown>
            <img src="/images/arrow-point-down-icon.svg" alt="click here" />
          </ArrowDown>
          <SendCard value={value2} setValue={setValue2} text="7000.23" />
        </div>
        {walletChecked === true ? (
          <AddressInput
            placeholder="Paste wallet address here"
            suffix={<img src="/images/contact-icon.svg" alt="click here" />}
          />
        ) : (
          ""
        )}
        {gasChecked === true ? (
          <GasAmount>
            <span>Select Gas Amount</span>
            <div className="buttons">
              <GasBtn
                className={num === 0 ? "active" : ""}
                onClick={() => (num === 0 ? "" : setNum(0))}
              >
                $1
              </GasBtn>
              <GasBtn
                className={num === 1 ? "active" : ""}
                onClick={() => (num === 1 ? "" : setNum(1))}
              >
                $10
              </GasBtn>
              <GasBtn
                className={num === 2 ? "active" : ""}
                onClick={() => (num === 2 ? "" : setNum(2))}
              >
                $100
              </GasBtn>
            </div>
          </GasAmount>
        ) : (
          ""
        )}
        <SwapInfo>
          <span>Total Amount</span>
          <span>
            {walletChecked === true && gasChecked === true
              ? "210"
              : walletChecked === false && gasChecked === false
              ? "0"
              : walletChecked === true
              ? "200"
              : "210"}
          </span>
        </SwapInfo>
        <SwapInfo>
          <span>Slippage</span>
          <span
            style={
              gasChecked === true && walletChecked === true
                ? { color: "var(--Accent)" }
                : walletChecked === false && gasChecked === false
                ? { color: "var(--Accent)" }
                : gasChecked === true
                ? { color: "var(--SpdYellow)" }
                : walletChecked === true
                ? { color: "var(--SpdRed)" }
                : ""
            }
          >
            {gasChecked === true && walletChecked === true
              ? ">5%"
              : walletChecked === false && gasChecked === false
              ? ">5%"
              : gasChecked === true
              ? "<5%"
              : walletChecked === true
              ? "<20%"
              : ""}
          </span>
        </SwapInfo>
        <SwapBtn
          to={value1 > 0 && value2 > 0 ? "/Swapoption" : ""}
          className={value1 > 0 && value2 > 0 ? "active" : ""}
        >
          <span>{value1 > 0 && value2 > 0 ? "Swap" : "Enter Amount"}</span>
        </SwapBtn>
      </Card>
    </>
  );
};

export default SwapCard;
