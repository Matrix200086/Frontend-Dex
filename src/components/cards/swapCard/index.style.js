import styled from "styled-components";
import { Checkbox, Input } from "antd";
import { Link } from "react-router-dom";

export const Card = styled.div`
  background: radial-gradient(
    151.33% 151.19% at 39.7% -43.45%,
    rgba(232, 247, 255, 0.2) 0%,
    rgba(183, 206, 224, 0.2) 12.4%,
    rgba(139, 152, 185, 0.2) 36.54%,
    rgba(34, 80, 92, 0.2) 55.32%,
    rgba(0, 9, 17, 0.2) 100%
  );
  border-radius: 0.9375rem;
  padding: 1.25rem 1.5rem 0 1rem;
  height: 100%;
  min-height: 678px;
  & {
    @media (max-width: 1200px) {
      width: 100%;
    }
  }
`;
export const CheckBoxes = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem 1rem;
  & {
    @media (max-width: 575px) {
      padding: 0 0.25rem 1rem;
    }
  }
`;
export const SwapCheckbox = styled(Checkbox)`
  color: var(--Lightest);
  /* align-items: center; */
  .ant-checkbox {
    .ant-checkbox-inner {
      background-color: var(--SpdGreen);
      border: 1px solid var(--SpdGreen) !important;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      &::after {
        position: absolute;
        display: table;
        border: 2px solid var(--DappSupportText);
        border-top: 0;
        border-left: 0;
        transform: rotate(45deg) scale(1) translate(-50%, -50%);
        opacity: 1;
        transition: all 0.2s cubic-bezier(0.12, 0.4, 0.29, 1.46) 0.1s;
        top: 45%;
        left: 22%;
        width: 5.5px;
        height: 10.5px;
      }
    }
    & + span {
      padding: 0 0 0 1rem;
    }
  }
  &:hover {
    .ant-checkbox-inner {
      border-color: var(--Accent) !important;
    }
  }
  .ant-checkbox-checked {
    .ant-checkbox-inner {
      background-color: var(--Accent) !important;
      border: 1px solid var(--Accent) !important;
      &::after {
        border-color: var(--Darkest);
      }
    }
    &::after {
      border: 0;
    }
  }
`;
export const ArrowDown = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background: radial-gradient(
    195.38% 197.14% at 2.86% -91.43%,
    rgba(232, 247, 255, 0.4) 0%,
    rgba(183, 206, 224, 0.4) 16.15%,
    rgba(139, 152, 185, 0.4) 32.29%,
    rgba(34, 80, 92, 0.4) 53.12%,
    rgba(0, 9, 17, 0.4) 67.66%
  );
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
`;
export const SwapInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0.5rem 0;
  span:first-child {
    color: var(--Lightest);
    font-weight: 400;
  }
  span {
    margin: 0;
    font-size: 0.875rem;
  }
  span:last-child {
    color: var(--Accent);
    font-weight: 700;
  }
`;
export const AddressInput = styled(Input)`
  /* transition: all 250ms ease-in-out; */
  background: radial-gradient(
    247.03% 356% at 6.18% -104%,
    rgba(232, 247, 255, 0.2) 0%,
    rgba(183, 206, 224, 0.2) 16.15%,
    rgba(139, 152, 185, 0.2) 29.56%,
    rgba(34, 80, 92, 0.2) 60.3%,
    rgba(0, 9, 17, 0.2) 86.09%
  );
  border-radius: 0.5625rem;
  padding: 0.75rem 1.5rem;
  border: 0;
  border-color: unset;
  box-shadow: none;
  input {
    font-size: 0.75rem;
    font-weight: 400;
    color: var(--Lightest);
    background: unset;
  }
`;
export const GasAmount = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0 0.5rem;
  /* transition: all 250ms ease-in-out; */
  span {
    color: var(--Lightest);
    font-size: 0.875rem;
    font-weight: 400;
  }
`;
export const GasBtn = styled.button`
  width: 45px;
  height: 45px;
  background: var(--SpdGreen);
  color: var(--Lightest);
  font-weight: 500;
  border-radius: 0.3125rem;
  border: 0;
  border-color: unset;
  outline: 0;
  box-shadow: none;
  cursor: pointer;
  &:nth-child(2) {
    margin: 0 0.75rem;
  }
  &.active {
    background: linear-gradient(
      263.52deg,
      #d991c6 0%,
      #c699c5 14%,
      #95afc2 43%,
      #47d1bf 83%,
      #26e1be 99.99%
    );
    color: var(--Darkest);
  }
`;
export const SwapBtn = styled(Link)`
  width: 100%;
  max-width: 205px;
  height: 50px;
  border: 1px solid var(--DappSupportText);
  background-color: var(--DarkestSecondary);
  border-radius: 3.125rem;
  margin: 0.5rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: not-allowed;
  span {
    color: var(--DappSupportText);
    font-size: 1.25rem;
  }
  &.active {
    border: 1px solid var(--Accent);
    background-color: var(--Accent);
    cursor: pointer;
    span {
      color: var(--SpdGreen);
    }
  }
`;
