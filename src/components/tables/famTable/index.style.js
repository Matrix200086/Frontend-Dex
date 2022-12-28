import { Checkbox, Table } from "antd";
import styled from "styled-components";

export const ExpandableTable = styled(Table)`
  margin-top: 1rem;
  .ant-table {
    border-radius: 0.9375rem;
    background: unset;
    table {
      .ant-table-thead {
        .ant-table-cell {
          background: rgba(34, 80, 92, 0.1) !important;
          padding: 0.5rem;
          color: var(--Lightest);
          border-bottom: 1px solid rgba(106, 150, 160, 0.5);
          font-weight: 700;
          &:first-child {
            border-radius: 0.9375rem 0 0 0;
          }
          &:last-child {
            border-radius: 0 0.9375rem 0 0;
          }
        }
      }
      .ant-table-tbody {
        .ant-table-expanded-row {
          background: linear-gradient(
            188.95deg,
            rgba(232, 247, 255, 0.2) -73.86%,
            rgba(183, 206, 224, 0.2) -53.16%,
            rgba(139, 152, 185, 0.2) -16.04%,
            rgba(34, 80, 92, 0.2) 33.4%,
            rgba(0, 9, 17, 0.2) 158.04%
          );
          .ant-table-cell {
            border-bottom: 0;
            border-top: 1px solid var(--Accent);
            padding: 2.5rem 4rem 1rem;
          }
        }
        .ant-table-cell {
          color: var(--White);
          font-weight: 400;
        }
      }
      .ant-table-cell {
        border-bottom: 1px solid rgba(106, 150, 160, 0.5);
        background: unset !important;
      }
      & {
        @media (max-width: 768px) {
          .ant-table-cell {
            font-size: 0.75rem;
            padding: 0.5rem;
            .heading {
              font-size: 0.75rem;
              margin-left: 0.25rem !important;
            }
          }
        }
      }
    }
  }
`;
export const Card = styled.div`
  background: linear-gradient(
    132.04deg,
    rgba(232, 247, 255, 0.2) -33.77%,
    rgba(183, 206, 224, 0.2) -15.7%,
    rgba(139, 152, 185, 0.2) -2.41%,
    rgba(34, 80, 92, 0.2) 55.02%,
    rgba(0, 9, 17, 0.2) 160.42%
  );
  border: 1px solid var(--Accent);
  border-radius: 0.375rem;
  padding: 1.5rem 1.5rem 1rem;
  height: 100%;
  min-height: 108px;
  margin-bottom: 0.5rem;
  &.odd,
  .claim {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &.odd {
    align-items: flex-end;
  }
  & {
    @media (max-width: 992px) {
      &.odd,
      .claim {
        display: block;
      }
    }
  }
`;
export const Btn = styled.a`
  width: 149px;
  height: 40px;
  font-size: 1.25rem;
  font-weight: 600;
  border: 1px solid var(--DappSupportText);
  background: var(--SpdGreen);
  color: var(--DappSupportText) !important;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3.125rem;
`;
export const FarmCheck = styled(Checkbox)`
  color: var(--Lightest);
  .ant-checkbox {
    .ant-checkbox-inner {
      background-color: var(--DappSupportText);
      border: 1px solid var(--DappSupportText) !important;
      width: 15px;
      height: 15px;
      border-radius: 50%;
      &::after {
        position: absolute;
        display: table;
        border: 3px solid var(--Darkest);
        border-top: 0;
        border-left: 0;
        transform: rotate(45deg) scale(1) translate(-50%, -50%);
        opacity: 1;
        transition: all 0.2s cubic-bezier(0.12, 0.4, 0.29, 1.46) 0.1s;
        top: 50%;
        left: 20%;
        width: 6px;
        height: 9.5px;
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
  &.ant-checkbox-wrapper + .ant-checkbox-wrapper {
    margin-left: 0;
    margin-top: 0.125rem;
  }
`;
export const FarmBtn = styled.button`
  width: 143px;
  height: 40px;
  font-size: 1.25rem;
  font-weight: 600;
  border: 1px solid var(--Accent);
  background: var(--Accent);
  color: var(--SpdGreen) !important;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3.125rem;
`;
