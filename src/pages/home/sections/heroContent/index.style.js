import styled from "styled-components";

export const ContentArea = styled.div`
  display: flex;
  justify-content: center;
  padding: 20rem 0;
`;
export const ContentHeading = styled.h1`
  margin: 1rem 0 0;
  font-size: 5.125rem;
  font-weight: 800;
  color: var(--White);
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;
export const ContentPara = styled.p`
  color: var(--Gray);
  font-size: 1.25rem;
  width: 100%;
  max-width: 800px;
  margin: 1rem auto 1.5rem;
`;
