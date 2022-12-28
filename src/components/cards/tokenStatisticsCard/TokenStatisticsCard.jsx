import React from "react";
import { Card, CardHeading, CardInner, CardSubheading } from "./index.style";

const TokenStatisticsCard = (props) => {
  const data = [
    {
      heading: props.heading1,
      cardBadge: props.cardBadge1,
      text: props.text1,
    },
    {
      heading: props.heading2,
      cardBadge: props.cardBadge2,
      text: props.text2,
    },
    {
      heading: props.heading3,
      cardBadge: props.cardBadge3,
      text: props.text3,
    },
    {
      heading: props.heading4,
      cardBadge: props.cardBadge4,
      text: props.text4,
    },
  ];
  return (
    <>
      <Card>
        <div>
          <CardHeading>{props.cardHeading}</CardHeading>
          <CardSubheading>{props.cardSubheading}</CardSubheading>
          {data.map((item) => (
            <CardInner>
              <div>
                <span>{item.heading}</span>
              </div>
              <div className="d-flex align-items-center">
                {item.cardBadge}
                <span>{item.text}</span>
              </div>
            </CardInner>
          ))}
        </div>
      </Card>
    </>
  );
};

export default TokenStatisticsCard;
