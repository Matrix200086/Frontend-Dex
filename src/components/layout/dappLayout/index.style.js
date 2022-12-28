import styled from "styled-components";

export const Main = styled.div`
  width: calc(100% - 200px);
  margin-left: auto;
  padding: 3rem 10rem 1rem 3.5rem;
  background: radial-gradient(
      97.63% 122.39% at 21.76% -35.09%,
      rgba(38, 225, 190, 0.5) 0%,
      rgba(123, 71, 190, 0.235) 16.92%,
      rgba(0, 9, 17, 0) 65.64%
    ),
    linear-gradient(
      289.57deg,
      rgba(0, 9, 17, 0) 82.97%,
      rgba(71, 111, 190, 0.47) 95.63%,
      #26e1be 102.84%,
      #26e1be 115.21%
    );
  background-color: var(--Darkest);
  height: 100%;
  min-height: 100vh;
  & {
    @media (max-width: 1200px) {
      padding: 2rem;
    }
    @media (max-width: 575px) {
      width: 100%;
      padding: 1rem 1rem 0.75rem;
    }
  }
`;
export const MainContent = styled.div``;
