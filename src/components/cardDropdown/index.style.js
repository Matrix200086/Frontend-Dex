import { Dropdown } from "antd";
import styled from "styled-components";

export const CardDrop = styled(Dropdown)`
  display: flex;
  align-items: center;
  background: linear-gradient(
    141.49deg,
    rgba(232, 247, 255, 0.2) -52.6%,
    rgba(183, 206, 224, 0.2) -13.22%,
    rgba(139, 152, 185, 0.2) 10.41%,
    rgba(34, 80, 92, 0.2) 93.13%,
    rgba(0, 9, 17, 0.2) 111.28%
  );
  border-radius: 1.25rem;
  padding: 0.25rem 0.5rem;
  .text {
    padding: 0 0.5rem;
    font-size: 1rem;
    color: var(--Gray);
  }
  svg {
    color: var(--Lightest);
  }
`;
export const Dot = styled.div`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  &.green {
    background: var(--Accent);
  }
  &.blue {
    background: var(--SpdBlue);
  }
`;
