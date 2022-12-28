import styled from "styled-components";

export const Card = styled.div`
  height: 280px;
  background: rgba(106, 150, 160, 0.07);
  border-radius: 0.9375rem;
  margin: 0.75rem 0;
  padding: 1.5rem;
  @media (max-width: 1400px) {
    padding: 1rem 0.5rem;
    height: auto;
  }
`;
export const CardHeading = styled.p`
  font-size: 0.875rem;
  font-weight: 700;
  color: var(--Gray);
`;
export const CardSubheading = styled.p`
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--DappSupportText);
`;
export const CardInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin-bottom: 1rem;
  &::after {
    content: "";
    width: 100%;
    height: 1px;
    background: var(--LightestSecondary);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    position: absolute;
    bottom: 0;
    left: 0;
  }
  div:first-child {
    span {
      color: var(--Lightest);
      margin-bottom: 0.5rem;
    }
  }
  div:last-child {
    div:first-child {
      margin-bottom: 0.5rem;
    }
    span:last-child {
      color: var(--White);
      margin-bottom: 0.5rem;
      margin-left: 1rem;
    }
  }
  span {
    font-size: 0.875rem;
    font-weight: 700;
  }
`;
