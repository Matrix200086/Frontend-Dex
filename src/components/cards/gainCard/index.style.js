import styled from "styled-components";

export const Card = styled.div`
  background: radial-gradient(
    140.63% 151.64% at 43.4% -23.77%,
    rgba(232, 247, 255, 0.15) 0%,
    rgba(183, 206, 224, 0.15) 16.15%,
    rgba(139, 152, 185, 0.15) 32.29%,
    rgba(34, 80, 92, 0.15) 62.49%,
    rgba(0, 9, 17, 0.15) 100%
  );
  border-radius: 0.9375rem;
  height: 100%;
  min-height: 122px;
  text-align: center;
  padding: 0.5rem 0;
`;
export const CardHeading = styled.p`
  font-size: 0.875rem;
  font-weight: 700;
`;
export const CardText = styled.h2`
  font-size: 1.375rem;
  font-weight: 500;
  color: var(--Gray);
  & {
    @media (min-width: 1600px) {
      font-size: 1.875rem;
    }
  }
`;
