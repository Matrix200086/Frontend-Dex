import React from "react";
import { Btn } from "./index.style";

const LaunchButton = () => {
  return (
    <>
      <Btn to="/dashboard">
        <span>Launch Dapp</span>
      </Btn>
    </>
  );
};

export default LaunchButton;
