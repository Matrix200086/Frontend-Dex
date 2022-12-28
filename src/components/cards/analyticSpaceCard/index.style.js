import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 84px;
  background: rgba(106, 150, 160, 0.07);
  border-radius: 0.9375rem;
  margin: 0.75rem 0;
  padding: 0 1.5rem;
  span {
    font-size: 0.875rem;
    font-weight: 700;
    color: var(--Lightest);
    margin-bottom: 0;
    display: block;
  }
  h5 {
    color: var(--White);
    margin-bottom: 0;
  }
  @media (max-width: 1400px) {
    padding: 1rem 0.5rem;
    height: auto;
  }
`;
