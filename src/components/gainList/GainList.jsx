import React from "react";
import { ListItem } from "./index.style";

const GainList = () => {
  return (
    <>
      <ul className="text-md-start text-center" style={{ marginTop: "1.5rem" }}>
        <ListItem>Gains are based on last-week data</ListItem>
      </ul>
    </>
  );
};

export default GainList;
