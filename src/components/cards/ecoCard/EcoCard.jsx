import React from "react";
import { Card, CardIcon, CardText } from "./index.style";

const EcoCard = (props) => {
  const data = props.data;
  return (
    <Card>
      <CardIcon src={data.icon} alt="click here" />
      <CardText>{data.text}</CardText>
    </Card>
  );
};

export default EcoCard;
