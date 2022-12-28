import React from "react";
import CardBadge from "../cardBadge/CardBadge";
import AnalyticSpaceCard from "../cards/analyticSpaceCard/AnalyticSpaceCard";
import TokenStatisticsCard from "../cards/tokenStatisticsCard/TokenStatisticsCard";

const AnalyticsTotalCards = () => {
  return (
    <>
      <AnalyticSpaceCard
        heading="SPACEDEX TOTAL TVL"
        text="$200,000,000"
        badgeText="+ 5%"
      />
      <AnalyticSpaceCard
        heading=" TOTAL Tx VOLUME"
        text="$800,000,000"
        badgeText="+ 10%"
      />
      <AnalyticSpaceCard
        heading="SPACE & veSPACE"
        subheading="COMBINED MARKET CAP"
        text="$60,000,000"
        badgeText="+ 10%"
      />
      <TokenStatisticsCard
        cardHeading="SPACE TOKEN STATISTICS"
        cardSubheading="Price of Space Today"
        heading1="SPACE Price"
        cardBadge1={<CardBadge badge="success" text="+ 5%" />}
        text1="$20"
        heading2="Circulating Supply"
        text2="1,500,000"
        heading3="Tokens in burn wallet address"
        text3="500,000"
        heading4="Market Cap "
        cardBadge4={<CardBadge badge="success" text="+ 20%" />}
        text4="$40,000,000"
      />
      <TokenStatisticsCard
        cardHeading="veSPACE TOKEN STATISTICS"
        cardSubheading="Price of Space Today"
        heading1="veSPACE Price"
        cardBadge1={<CardBadge badge="success" text="+ 5%" />}
        text1="$20"
        heading2="Circulating Supply"
        text2="1,000,000"
        heading3="Last-week’s APR"
        cardBadge3={<CardBadge badge="success" text="+ 15%" />}
        text3="150%"
        heading4="Market Cap"
        cardBadge4={<CardBadge badge="danger" text="- 2%" />}
        text4="$20,000,000"
      />
    </>
  );
};

export default AnalyticsTotalCards;
