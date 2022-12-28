import styled from "styled-components";

export const DexInfo = styled.div`
  padding: 12rem 0 0;
  & {
    @media (max-width: 992px) {
      padding: 7rem 0 0;
      h1 {
        font-size: 2rem;
      }
    }
  }
`;
export const DexHeading = styled.h1`
  font-size: 3.3125rem;
  font-weight: 800;
  margin-bottom: 1rem;
  color: var(--White);
`;
export const DexPara = styled.p`
  margin-bottom: 2rem;
  color: var(--Gray);
  width: 100%;
  max-width: 400px;
`;
export const DexImage = styled.img`
  width: 100%;
  height: 848px;
  margin: 2.5rem 0 0 -2rem;
  @media (max-width: 768px) {
    height: 550px;
  }
`;
