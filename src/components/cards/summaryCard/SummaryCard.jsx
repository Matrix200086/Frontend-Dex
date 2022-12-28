import React from "react";
import { SwapBtn } from "../swapCard/index.style";
import { Btn, Card, CardInner, InnerContent, Linear } from "./index.style";

const SummaryCard = () => {
  return (
    <>
      <Card>
        <h5 style={{ color: "var(--Lightest)" }}>Swap Summary</h5>
        <CardInner>
          <InnerContent>
            <img
              className="ps-0 pe-2"
              src="/images/network-icon.svg"
              alt="click here"
            />
            <h5 style={{ color: "var(--White)" }}>USDC</h5>
          </InnerContent>
          <InnerContent>
            <h5>$200</h5>
            <img src="/images/cross-icon.svg" alt="click here" />
          </InnerContent>
        </CardInner>
        <CardInner className="align-items-start">
          <span>Wallet Address</span>
          <InnerContent>
            <span>
              0xb87010ac58Ec
              <br />
              c51C5fcd9B3b1c
              <br />
              2301139343E5b2
            </span>
            <img src="/images/cross-icon.svg" alt="click here" />
          </InnerContent>
        </CardInner>
        <CardInner>
          <div>
            <span>Send Gas</span>
          </div>
          <InnerContent>
            <span>$10</span>
            <img src="/images/cross-icon.svg" alt="click here" />
          </InnerContent>
        </CardInner>
        <CardInner>
          <div>
            <span>Slippage</span>
          </div>
          <div>
            <span
              style={{ fontWeight: "700", color: "var(--Accent)" }}
            >{`>5%`}</span>
          </div>
        </CardInner>
        <Linear></Linear>
        <CardInner>
          <div>
            <span>Total Amount</span>
          </div>
          <div>
            <h2>$210</h2>
          </div>
        </CardInner>
        <Btn>Swap</Btn>
      </Card>
    </>
  );
};

export default SummaryCard;
