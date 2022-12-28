import React from "react";
import TvaTabs from "../../tabs/tvaTabs/TvaTabs";
import { Card } from "./index.style";

const TvaCard = () => {
  return (
    <>
      <Card style={{ marginTop: "1rem" }}>
        <TvaTabs />
      </Card>
    </>
  );
};

export default TvaCard;
