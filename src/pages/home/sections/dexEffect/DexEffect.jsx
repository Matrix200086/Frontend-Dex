import React from "react";
import LaunchButton from "../../../../components/launchButton/LaunchButton";
import { EffectHeading, EffectImage, EffectInfo } from "./index.style";

const DexEffect = () => {
  return (
    <>
      <EffectInfo>
        <EffectHeading>
          In effect, SpaceDEX is a TVL and revenue magnet.
        </EffectHeading>
        <LaunchButton />
      </EffectInfo>
      <EffectImage src="/images/effect-chart.png" alt="click here" />
    </>
  );
};

export default DexEffect;
