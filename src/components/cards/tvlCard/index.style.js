import styled from "styled-components";

export const Card = styled.div`
  background: radial-gradient(
    97.9% 97.9% at 43.37% 13.99%,
    rgba(232, 247, 255, 0.1) 0%,
    rgba(183, 206, 224, 0.1) 16.15%,
    rgba(139, 152, 185, 0.1) 32.29%,
    rgba(34, 80, 92, 0.1) 53.12%,
    rgba(0, 9, 17, 0.1) 92.31%
  );
  border-bottom: 1px solid var(--Accent);
  border-radius: 0.9375rem;
  padding: 1rem 3rem;
  margin: 1rem 0;
  & {
    @media (max-width: 1400px) {
      padding: 1rem 0.75rem;
    }
  }
`;
export const CardHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  & {
    @media (max-width: 1400px) {
      display: block;
    }
  }
`;
