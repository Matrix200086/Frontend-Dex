import styled from "styled-components";

export const EcoSystem = styled.div`
  p,
  span {
    color: var(--Gray);
  }
  & {
    @media (max-width: 992px) {
      p,
      span {
        font-size: 0.75rem;
      }
    }
  }
`;
export const EcoLogo = styled.img`
  width: 100%;
  height: 400px;
`;
export const EcoInfo = styled.div``;
export const EcoImage = styled.img`
  width: 100%;
  height: 100%;
  min-height: 787px;
  padding: 6rem 0 20rem;
`;
