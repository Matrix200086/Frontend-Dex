import { InputNumber } from "antd";
import styled from "styled-components";

export const Card = styled.div`
  background: radial-gradient(
    146.78% 151.35% at 46.81% -28.62%,
    rgba(232, 247, 255, 0.25) 0%,
    rgba(183, 206, 224, 0.25) 11.27%,
    rgba(139, 152, 185, 0.25) 12.56%,
    rgba(34, 80, 92, 0.25) 49.82%,
    rgba(0, 9, 17, 0.25) 100%
  );
  border-radius: 0.8125rem;
  padding: 1.25rem 1rem;
  margin: 0 0 0.75rem;
`;
export const DropDowns = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  .ant-dropdown-trigger:first-child {
    &:first-child {
      margin-right: 2rem;
      max-width: 152px;
    }
  }
  .ant-dropdown-trigger {
    &:last-child {
      max-width: 180px;
    }
  }
`;
export const DropDownInner = styled.div`
  display: flex;
  cursor: pointer;
  justify-content: space-between;
  align-items: baseline;
  color: var(--White);
  width: 100%;
`;
export const DropHeading = styled.span`
  font-size: 1.25rem;
  font-weight: 500;
`;
export const DropText = styled.p`
  font-size: 0.75rem;
  font-weight: 400;
  margin-bottom: 0;
  color: var(--Lightest);
`;
export const SendAmount = styled.div`
  margin-top: 0.75rem;
  border-bottom: 1px solid var(--Accent);
  height: 50px;
  background: var(--DarkestSecondary);
  border-radius: 9px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.5rem;
`;
export const AmountInput = styled(InputNumber)`
  height: 100%;
  color: var(--White);
  font-size: 1.375rem;
  display: flex;
  justify-content: center;
  align-items: center;
  &.ant-input-number-out-of-range {
    input {
      color: var(--White);
    }
  }
  .ant-input-number-handler-wrap {
    display: none;
  }
`;
export const MaxValue = styled.button`
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--Accent);
  text-transform: uppercase;
  border: 0;
  background: unset;
  border-color: unset;
  box-shadow: none;
  cursor: pointer;
`;
export const AmountRatio = styled.span`
  font-size: 0.75rem;
  font-weight: 400;
  color: var(--Lightest);
`;
