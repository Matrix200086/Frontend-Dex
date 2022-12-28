import styled from "styled-components";
import { CloseOutlined } from "@ant-design/icons";

export const Tag = styled.div`
  display: flex;
  align-items: center;
  padding: 0.25rem 0.5rem;
  background: linear-gradient(
    141.49deg,
    rgba(232, 247, 255, 0.2) -52.6%,
    rgba(183, 206, 224, 0.2) -13.22%,
    rgba(139, 152, 185, 0.2) 10.41%,
    rgba(34, 80, 92, 0.2) 93.13%,
    rgba(0, 9, 17, 0.2) 111.28%
  );
  border-radius: 0.9375rem;
  margin: 0 0.25rem;
  & {
    @media (max-width: 992px) {
      margin: 0.5rem auto;
      width: 120px;
      display: flex;
      padding: 0.25rem 1rem;
      justify-content: space-between;
    }
  }
`;
export const Dot = styled.div`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  &.green {
    background: var(--Accent);
  }
  &.pink {
    background: var(--SpdPink);
  }
  &.blue {
    background: var(--SpdBlue);
  }
  &.red {
    background: var(--SpdLightRed);
  }
  &.purple {
    background: var(--SpdPurple);
  }
  &.skyBlue {
    background: var(--SpdSkyBlue);
  }
`;
export const TagText = styled.span`
  font-size: 0.75rem;
  font-weight: 400;
  color: var(--Lightest);
  padding: 0 0.5rem;
`;
export const Delete = styled(CloseOutlined)`
  width: 8px;
  height: 8px;
  cursor: pointer;
  svg {
    width: 100%;
    height: 100%;
    color: var(--Gray);
  }
`;
