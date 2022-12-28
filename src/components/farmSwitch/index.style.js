import styled from "styled-components";
import { Switch } from "antd";

export const SwitchBox = styled(Switch)`
  background-color: var(--Darkest);
  background-image: unset;
  width: 40px;
  height: 20px;
  box-shadow: none !important;
  outline: 0 !important;
  border: 0 !important;
  border-color: unset !important;
  .ant-switch-handle {
    width: 20px;
    height: 100%;
    border-radius: 50%;
    background-color: var(--Accent);
    top: 0;
    left: 0;
    box-shadow: none !important;
    outline: 0 !important;
    border: 0 !important;
    border-color: unset !important;
    &::before {
      background-color: var(--DappSupportText);
      width: 14px;
      height: 14px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
  &.ant-switch-checked {
    background-color: var(--Darkest) !important;
    .ant-switch-handle {
      left: calc(100% - 20px);
    }
  }
`;
