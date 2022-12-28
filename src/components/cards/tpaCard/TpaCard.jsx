import React from "react";
import { Card, CardHead } from "../tvlaCard/index.style";

const TpaCard = () => {
  return (
    <>
      <Card style={{ margin: "2rem 0" }}>
        <CardHead className="mb-0">
          <div>
            <p
              className="mb-0"
              style={{
                color: "var(--Gray)",
                fontSize: "0.8775rem",
                fontWeight: "700",
              }}
            >
              Transaction per Asset
            </p>
            <p
              className="mb-0"
              style={{ fontSize: "0.625rem", color: "var(--Lightest)" }}
            >
              7-days Volume
            </p>
          </div>
          <div>
            <span
              className="mb-0"
              style={{ color: "var(--Accent)", fontSize: "0.75rem" }}
            >
              + Add Asset
            </span>
          </div>
        </CardHead>
        <div>
          <img
            style={{ width: "100%" }}
            src="/images/tpa-chart.png"
            alt="click here"
          />
        </div>
      </Card>
    </>
  );
};

export default TpaCard;
