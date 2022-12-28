import styled from "styled-components";

export const MiddleArea = styled.div`
  background-image: url(/images/middle-background.png);
  background-position-x: center;
  background-position-y: -200px;
  background-size: cover;
  /* text-align: center; */
  background-repeat: no-repeat;
  @media (max-width: 768px) {
    background-position: center;
    background-size: 1200px;
  }
`;
