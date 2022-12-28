import React from "react";
import { Card, CardHeading, CardText } from "./index.style";

const GainCard = (props) => {
  const data = props.data;
  return (
    <>
      <Card>
        <CardHeading style={{ color: data.color }}>{data.heading}</CardHeading>
        <CardText>{data.text}</CardText>
      </Card>
    </>
  );
};

export default GainCard;
