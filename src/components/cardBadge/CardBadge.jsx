import React from "react";
import { BadgeArea } from "./index.style";

const CardBadge = (props) => {
  return (
    <>
      <BadgeArea className={props.badge}>
        <span>{props.text}</span>
      </BadgeArea>
    </>
  );
};

export default CardBadge;
