import styled from "styled-components";

export const BadgeArea = styled.div`
  width: 52px;
  height: 22px;
  border-radius: 0.9375rem;
  margin-bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  span {
    font-size: 0.75rem;
    font-weight: 700;
    margin: 0 !important;
  }
  &.success {
    background: linear-gradient(
      96.22deg,
      rgba(38, 225, 190, 0.3) -15.01%,
      rgba(10, 34, 48, 0.3) 120.85%
    );
    span {
      color: var(--Accent) !important;
    }
  }
  &.danger {
    background: linear-gradient(
      96.22deg,
      rgba(249, 68, 68, 0.3) -15.01%,
      rgba(10, 34, 48, 0.3) 120.85%
    );
    span {
      color: var(--SpdRed) !important;
    }
  }
`;
