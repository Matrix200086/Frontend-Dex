import React from "react";
import CardTag from "../../cardTag/CardTag";
import { Card, CardHead } from "./index.style";

const TvlCard = () => {
  return (
    <>
      <Card>
        <CardHead>
          <div>
            <span style={{ color: "var(--Gray)", fontWeight: "700" }}>
              Total Value Locked
            </span>
          </div>
          <div className="d-lg-flex align-items-center">
            <CardTag dot="green" text="Space" />
            <CardTag dot="pink" text="Eth" />
            <CardTag dot="blue" text="Usdt" />
            <CardTag dot="red" text="Avax" />
            <CardTag dot="purple" text="Matic" />
            <CardTag dot="skyBlue" text="Usdc" />
            <div className="text-end">
              <span
                className="ms-3"
                style={{
                  fontSize: "0.75rem",
                  color: "var(--Accent)",
                  cursor: "pointer",
                }}
              >
                + Add Asset
              </span>
            </div>
          </div>
        </CardHead>
        <div>
          <img
            style={{ width: "100%" }}
            src="/images/tvl-chart.png"
            alt="click here"
          />
        </div>
      </Card>
    </>
  );
};

export default TvlCard;
