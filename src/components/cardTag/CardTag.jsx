import React from "react";
import { Delete, Dot, Tag, TagText } from "./index.style";

const CardTag = (props) => {
  return (
    <>
      <Tag>
        <Dot className={props.dot}></Dot>
        <TagText>{props.text}</TagText>
        <Delete />
      </Tag>
    </>
  );
};

export default CardTag;
