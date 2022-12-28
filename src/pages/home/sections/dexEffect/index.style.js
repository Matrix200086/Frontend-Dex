import styled from "styled-components";

export const EffectInfo = styled.div`
  padding: 0 0 3rem;
  text-align: center;
  padding: 2rem 0 6rem;
`;
export const EffectHeading = styled.h1`
  font-size: 3.3125rem;
  width: 100%;
  max-width: 848px;
  margin: 0 auto 1rem;
  font-weight: 800;
  color: var(--White);
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;
export const EffectImage = styled.img`
  width: 100%;
  height: 100%;
  min-height: 490px;
  padding-bottom: 2rem;
  @media (max-width: 768px) {
    min-height: unset;
  }
`;
