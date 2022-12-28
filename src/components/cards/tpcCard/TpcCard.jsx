import React from "react";
import { Card } from "../tvlaCard/index.style";

const TpcCard = () => {
  return (
    <>
      <Card style={{ margin: "2rem 0" }}>
        <div>
          <p
            className="mb-0"
            style={{
              color: "var(--Gray)",
              fontSize: "0.8775rem",
              fontWeight: "700",
            }}
          >
            Transaction per Chain
          </p>
          <p
            className="mb-0"
            style={{ fontSize: "0.625rem", color: "var(--Lightest)" }}
          >
            7-days Volume
          </p>
        </div>
        <div>
          <img
            style={{ width: "100%" }}
            src="/images/tpc-chart.png"
            alt="click here"
          />
        </div>
      </Card>
    </>
  );
};

export default TpcCard;
