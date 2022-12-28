import React from "react";
import { Card, CardHeading, CardSubHeading, CardText } from "./index.style";

const TokenCard = (props) => {
  const data = props.data;
  return (
    <>
      <Card>
        <CardHeading>{data.heading}</CardHeading>
        <CardSubHeading>{data.subHeading}</CardSubHeading>
        <CardText>{data.text}</CardText>
      </Card>
    </>
  );
};

export default TokenCard;
