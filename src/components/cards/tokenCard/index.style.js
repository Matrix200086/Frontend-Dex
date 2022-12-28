import styled from "styled-components";

export const Card = styled.div`
  background: radial-gradient(
    246.5% 277.87% at -3.71% -136.89%,
    rgba(232, 247, 255, 0.2) 0%,
    rgba(183, 206, 224, 0.2) 16.15%,
    rgba(139, 152, 185, 0.2) 33.4%,
    rgba(34, 80, 92, 0.2) 70.93%,
    rgba(0, 9, 17, 0.2) 100%
  );
  border-radius: 0.9375rem;
  border-bottom: 1px solid var(--Accent);
  padding: 1rem 1rem 0.5rem 2.5rem;
  height: 100%;
  min-height: 122px;
`;
export const CardHeading = styled.p`
  font-size: 0.875rem;
  font-weight: 700;
  color: var(--Gray);
  margin-bottom: 0.5rem;
`;
export const CardSubHeading = styled.h2`
  font-size: 1.375rem;
  font-weight: 500;
  background: linear-gradient(
    263.52deg,
    #d991c6 0%,
    #c699c5 14%,
    #95afc2 43%,
    #47d1bf 83%,
    #26e1be 99.99%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  margin-bottom: 0;
  & {
    @media (min-width: 1600px) {
      font-size: 1.875rem;
    }
  }
`;
export const CardText = styled.span`
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--DappSupportText);
`;
