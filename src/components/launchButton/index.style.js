import { Link } from "react-router-dom";
import styled from "styled-components";

export const Btn = styled(Link)`
  display: inline-block;
  width: 203px;
  height: 50px;
  background-color: var(--Accent);
  color: var(--SpdGreen);
  font-size: 1.25rem;
  font-weight: 600;
  border-radius: 3.125rem;
  text-align: center;
  span {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--SpdGreen);
    line-height: 2.5;
  }
  & {
    @media (max-width: 768px) {
      height: 40px;
      span {
        font-size: 1rem;
      }
    }
  }
`;
