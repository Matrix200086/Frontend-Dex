import React from "react";
import CardBadge from "../../cardBadge/CardBadge";
import CardDropdown from "../../cardDropdown/CardDropdown";
import { Card, CardHead } from "./index.style";

const TvlaCard = () => {
  return (
    <>
      <Card style={{ marginTop: "1rem" }}>
        <CardHead>
          <div>
            <span style={{ color: "var(--Gray)", fontWeight: "700" }}>
              Total Value Locked per Asset
            </span>
            <div className="d-flex align-items-center">
              <h5
                className="mb-0 me-3"
                style={{ color: "var(--White)", fontSize: "1.375rem" }}
              >
                $33,000,000
              </h5>
              <CardBadge badge="success" text="+ 10%" />
            </div>
          </div>
          <div>
            <CardDropdown dot="green" text="Eth" />
          </div>
        </CardHead>
        <>
          <img
            style={{ width: "100%" }}
            src="/images/tvla-chart.png"
            alt="click here"
          />
        </>
      </Card>
    </>
  );
};

export default TvlaCard;
