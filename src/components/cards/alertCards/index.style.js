import { Alert } from "antd";
import styled from "styled-components";

export const ALertCard = styled(Alert)`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 710px;
  border-radius: 0px 0px 0.4375rem 0.4375rem;
  background: var(--DappSupportText);
  padding: 0.5rem 1rem 0.5rem 3rem !important;
  li {
    font-size: 0.8125rem;
    font-weight: 300;
    color: var(--White);
  }
  .ant-alert-close-icon {
    span {
      svg {
        color: var(--White);
      }
    }
  }
  .dismiss {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 600px;
    & {
      @media (max-width: 575px) {
        width: 100%;
      }
    }
  }
`;
export const DismissBtn = styled.a`
  width: 132px;
  height: 26px;
  border-radius: 0.8125rem;
  font-size: 0.8125rem;
  font-weight: 300;
  border: 2px solid rgba(255, 255, 255, 0.2);
  color: var(--White) !important;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
`;
