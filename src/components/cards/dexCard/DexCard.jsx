import React from "react";
import { Card, CardHeading, CardIcon, CardText } from "./index.style";

const DexCard = (props) => {
  const data = props.data;
  return (
    <>
      <Card>
        <CardIcon src={data.icon} alt="click here" />
        <CardHeading>{data.heading}</CardHeading>
        <CardText>{data.text}</CardText>
      </Card>
    </>
  );
};

export default DexCard;
