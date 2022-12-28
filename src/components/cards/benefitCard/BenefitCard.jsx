import React from "react";
import {
  Card,
  CardContent,
  CardHeading,
  CardImage,
  CardText,
} from "./index.style";

const BenefitCard = (props) => {
  const data = props.data;
  return (
    <>
      <Card>
        <CardImage src={data.image} alt="click here" />
        <CardContent>
          <CardHeading>{data.heading}</CardHeading>
          <CardText>{data.text}</CardText>
        </CardContent>
      </Card>
    </>
  );
};

export default BenefitCard;
