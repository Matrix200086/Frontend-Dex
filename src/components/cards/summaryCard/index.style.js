import styled from "styled-components";

export const Card = styled.div`
  background: radial-gradient(
    154.86% 144.2% at 46.81% -28.62%,
    rgba(232, 247, 255, 0.2) 0%,
    rgba(183, 206, 224, 0.2) 11.27%,
    rgba(139, 152, 185, 0.2) 12.56%,
    rgba(34, 80, 92, 0.2) 49.82%,
    rgba(0, 9, 17, 0.2) 100%
  );
  width: 100%;
  max-width: 376px;
  border-radius: 1.125rem;
  margin: 0.75rem auto;
  padding: 1.5rem 2rem;
`;
export const CardInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 1.5rem 0;
  h5,
  h2 {
    margin-bottom: 0;
    color: var(--White);
  }
  span {
    margin-bottom: 0;
    font-size: 0.875rem;
    font-weight: 400;
    color: var(--Lightest);
    margin-bottom: 0;
  }
`;
export const InnerContent = styled.div`
  display: flex;
  align-items: center;
  img {
    padding-left: 0.5rem;
    cursor: pointer;
  }
`;
export const Linear = styled.div`
  height: 1px;
  width: 100%;
  background-color: var(--Accent);
  margin-top: 2rem;
`;
export const Btn = styled.a`
  width: 205px;
  height: 50px;
  background: var(--Accent);
  border-radius: 3.125rem;
  color: var(--Darkest) !important;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.25rem;
  font-weight: 600;
  margin: 2rem auto 1rem;
`;
