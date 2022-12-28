import React from "react";
import { SwitchBox } from "./index.style";

const FarmSwitch = () => {
  return (
    <>
      <div className="me-3">
        <SwitchBox />
        <span
          className="mx-3"
          style={{ fontWeight: "600", color: "var(--Lightest)" }}
        >
          Staked Only
        </span>
      </div>
    </>
  );
};

export default FarmSwitch;
