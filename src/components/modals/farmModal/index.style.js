import styled from "styled-components";
import { InputNumber, Modal, Slider, Switch } from "antd";

export const ModalArea = styled(Modal)`
  .ant-modal-content {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 810px;
    background: radial-gradient(
      114.7% 123.58% at 26.04% -5.43%,
      rgba(232, 247, 255, 0.1) 0.61%,
      rgba(183, 206, 224, 0.1) 8.42%,
      rgba(139, 152, 185, 0.1) 17.73%,
      rgba(34, 80, 92, 0.1) 80.97%,
      rgba(0, 9, 17, 0.1) 93.24%
    );
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(200px);
    border-radius: 18px;
    padding: 0 1rem;
    .ant-modal-close-x {
      color: var(--Lightest);
    }
  }
`;
export const ModalHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;
export const ModalSwitch = styled(Switch)`
  width: 206px;
  height: 32px;
  background: var(--DarkestSecondary) !important;
  border-radius: 2.125rem;
  box-shadow: none !important;
  &::before {
    content: "Delta-neutral";
    font-size: 0.875rem;
    position: absolute;
    top: 50%;
    left: 0.5rem;
    transform: translateY(-50%);
    color: var(--SpdGreen);
  }
  &::after {
    content: "Leverage";
    font-size: 0.875rem;
    position: absolute;
    top: 50%;
    right: 0.5rem;
    transform: translateY(-50%);
    color: var(--SpdGreen);
  }
  .ant-switch-handle {
    border-radius: 2.125rem !important;
    border: 1px solid var(--Accent) !important;
    height: 100% !important;
    width: 105px !important;
    &::before {
      content: "Delta-neutral";
      width: 100% !important;
      height: 100% !important;
      font-size: 0.875rem !important;
      font-weight: 600 !important;
      top: 60% !important;
      left: 50% !important;
      transform: translate(-50%, -50%) !important;
      background: linear-gradient(
        263.52deg,
        #d991c6 0%,
        #c699c5 14%,
        #95afc2 43%,
        #47d1bf 83%,
        #26e1be 99.99%
      ) !important;
      -webkit-background-clip: text !important;
      -webkit-text-fill-color: transparent !important;
      background-clip: text !important;
      text-fill-color: transparent !important;
      box-shadow: none !important;
    }
  }
  &.ant-switch-checked {
    /* background: var(--DarkestSecondary); */
    .ant-switch-handle {
      /* border-radius: 2.125rem; */
      /* border: 1px solid var(--Accent); */
      /* height: 100%; */
      /* width: 100px; */
      right: 0;
      left: unset;
      &::before {
        content: "Leverage";
        /* width: 100%; */
        /* height: 100%; */
        /* font-size: 0.875rem; */
        /* font-weight: 600; */
        /* top: 50%; */
        /* left: 50%; */
        /* transform: translate(-50%, -50%);
        background: linear-gradient(
          263.52deg,
          #d991c6 0%,
          #c699c5 14%,
          #95afc2 43%,
          #47d1bf 83%,
          #26e1be 99.99%
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
        box-shadow: none; */
      }
    }
  }
`;
export const BalanceInput = styled(InputNumber)`
  border: 1px solid var(--Accent);
  border-radius: 0.375rem;
  padding: 0.25rem 0;
  width: 100%;
  .ant-input-number-group-addon {
    background: unset;
    border: 0;
    p {
      margin-bottom: 0;
    }
  }
  .ant-input-number-handler-wrap {
    display: none;
  }
  input {
    font-size: 1.375rem;
    font-weight: 400;
    color: var(--White);
  }
`;
export const AdjustInput = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  h5 {
    font-size: 1.375rem;
    color: var(--White);
    margin-bottom: 0;
  }
  svg {
    font-size: 0.75rem;
    color: var(--Lightest);
  }
`;
export const Collateral = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    color: var(--Lightest);
  }
  .linearText {
    background: linear-gradient(
      263.52deg,
      #d991c6 0%,
      #c699c5 14%,
      #95afc2 43%,
      #47d1bf 83%,
      #26e1be 99.99%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
`;
export const AdjustSlider = styled(Slider)`
  .ant-slider-rail {
    background-color: var(--SpdGreen) !important;
  }
  .ant-slider-rail,
  .ant-slider-track {
    height: 2px;
  }
  .ant-slider-track {
    background: linear-gradient(
      263.52deg,
      #d991c6 0%,
      #c699c5 14%,
      #95afc2 43%,
      #47d1bf 83%,
      #26e1be 99.99%
    );
  }
  .ant-slider-step {
    .ant-slider-dot {
      width: 6px;
      height: 6px;
      background: var(--Darkest);
      border: 1px solid var(--SpdGreen);
    }
    .ant-slider-dot-active {
      background: linear-gradient(
        263.52deg,
        #d991c6 0%,
        #c699c5 14%,
        #95afc2 43%,
        #47d1bf 83%,
        #26e1be 99.99%
      );
      border: 1px solid var(--Darkest);
    }
  }
  .ant-slider-handle {
    width: 12px;
    height: 12px;
    background: linear-gradient(
      263.52deg,
      #d991c6 0%,
      #c699c5 14%,
      #95afc2 43%,
      #47d1bf 83%,
      #26e1be 99.99%
    );
    border: 2px solid var(--Darkest) !important;
  }
  .ant-slider-mark {
    span {
      color: var(--Lightest);
    }
  }
`;
export const Deposit = styled.div`
  background: var(--SpdGreen);
  border-radius: 0.25rem;
  text-align: center;
  span {
    font-size: 0.75rem;
    color: var(--Accent);
  }
`;
export const ModalContent = styled.div`
  padding: 1rem 1.25rem;
  background: var(--DarkestSecondary);
  border-radius: 0.625rem;
  color: var(--Lightest);
  span,
  li {
    font-size: 0.75rem;
  }
  margin: 0.25rem 0 2rem;
`;
export const ModalButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const CancelBtn = styled.a`
  width: 100%;
  max-width: 210px;
  height: 50px;
  font-size: 1.25rem;
  font-weight: 600;
  background: var(--DarkestSecondary);
  backdrop-filter: blur(40px);
  color: var(--Lightest) !important;
  border-radius: 3.125rem;
  margin-right: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const SubmitBtn = styled.a`
  display: inline-block;
  width: 100%;
  max-width: 210px;
  height: 50px;
  font-size: 1.25rem;
  font-weight: 600;
  background: var(--Accent);
  color: var(--SpdGreen) !important;
  border-radius: 3.125rem;
  margin-left: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
