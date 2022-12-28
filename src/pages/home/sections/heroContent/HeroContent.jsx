import React from "react";
import LaunchButton from "../../../../components/launchButton/LaunchButton";
import { ContentArea, ContentHeading, ContentPara } from "./index.style";

const HeroContent = () => {
  return (
    <>
      <ContentArea>
        <div>
          <img src="/images/logo-type-form.svg" alt="click here" />
          <ContentHeading>Nexus-Unified Liquidities </ContentHeading>
          <ContentPara>
            with a suite of liquidity-centric services for all DeFi enthusiasts:
            liquidity providers, projects, investors, novice and advanced
            traders.
          </ContentPara>
          <LaunchButton />
        </div>
      </ContentArea>
    </>
  );
};

export default HeroContent;
