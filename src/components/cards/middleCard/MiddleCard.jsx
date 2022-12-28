import React from "react";
import {
  Card,
  CardContent,
  CardHeading,
  CardImage,
  CardPara,
} from "./index.style";

const MiddleCard = (props) => {
  const data = props.data;
  return (
    <>
      <Card>
        <CardImage src={data.image} alt="click here" />
        <CardContent>
          <CardHeading>{data.heading}</CardHeading>
          <CardPara>{data.para}</CardPara>
        </CardContent>
      </Card>
    </>
  );
};

export default MiddleCard;
