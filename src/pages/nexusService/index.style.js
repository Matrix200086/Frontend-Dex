import styled from "styled-components";

export const NexusArea = styled.div`
  background-color: var(--Darkest);
  background-image: url(/images/nexus-service-background.png);
  background-repeat: no-repeat;
  background-position-x: center;
`;
export const ContentArea = styled.div`
  padding: 17.5rem 0;
  background-image: url(/images/multi-chain-liquidity.png);
  background-repeat: no-repeat;
  background-position-x: 87%;
  background-position-y: 115px;
  & {
    @media (max-width: 992px) {
      padding: 10rem 0 32rem;
      background-position-x: center;
      background-position-y: 440px;
      background-size: contain;
    }
    @media (max-width: 575px) {
      padding: 16rem 0 32rem;
      background-position-y: 550px;
    }
  }
`;
export const ContentHeading = styled.h1`
  font-size: 3.3125rem;
  font-weight: 800;
  color: var(--White);
  width: 100%;
  max-width: 640px;
  & {
    @media (max-width: 575px) {
      font-size: 1.75rem;
    }
  }
`;
export const ContentPara = styled.p`
  margin-bottom: 2.75rem;
  color: var(--Gray);
  width: 100%;
  max-width: 460px;
`;
export const BenefitSection = styled.div`
  padding: 6.75rem 0 0;
  .ant-row {
    .ant-col:first-child,
    .ant-col:nth-child(3) {
      div {
        margin-left: auto;
      }
    }
  }
`;
export const BenefitHeading = styled.h2`
  font-size: 1.875rem;
  font-weight: 800;
  color: var(--White);
  margin-bottom: 7.5rem;
  text-align: center;
  span {
    color: var(--Accent);
  }
  & {
    @media (max-width: 575px) {
      font-size: 1.25rem;
    }
  }
`;
export const VisionSection = styled.div`
  padding: 11rem 0 16.125rem;
  h2 {
    margin-bottom: 3.5rem;
  }
`;
export const VisionImage = styled.img`
  width: 100%;
  height: 100%;
`;
