import React from "react";
import CardBadge from "../../cardBadge/CardBadge";
import { Card } from "./index.style";

const AnalyticSpaceCard = (props) => {
  return (
    <>
      <Card>
        <div>
          <span>{props.heading}</span>
          <span>{props.subheading}</span>
        </div>
        <div>
          <h5>{props.text}</h5>
        </div>
        <div>
          <CardBadge badge="success" text={props.badgeText} />
        </div>
      </Card>
    </>
  );
};

export default AnalyticSpaceCard;
