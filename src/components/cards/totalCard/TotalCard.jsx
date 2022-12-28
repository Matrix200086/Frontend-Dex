import React from "react";
import { Card } from "./index.style";

const TotalCard = (props) => {
  return (
    <>
      <Card>
        <div>
          <span style={{ color: "var(--Lightest)", fontWeight: "700" }}>
            {props.cardHeading}
          </span>
          <span style={{ color: "var(--Lightest)", fontSize: "0.75rem" }}>
            {props.cardSubheading}
          </span>
        </div>
        <div className="text-end">
          <span style={{ color: "var(--Gray)", fontWeight: "500" }}>
            {props.value}
          </span>
          <span style={{ color: "var(--White)", fontWeight: "700" }}>
            {props.text}
          </span>
          <span
            className="d-flex align-items-center"
            style={{
              color: "var(--SpdPink)",
              fontSize: "0.75rem",
              fontWeight: "500",
            }}
          >
            {props.subtext}
            {props.icon}
          </span>
        </div>
      </Card>
    </>
  );
};

export default TotalCard;
