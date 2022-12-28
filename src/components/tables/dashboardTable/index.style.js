import styled from "styled-components";
import { Table } from "antd";

export const TableArea = styled(Table)`
  .ant-table {
    background-color: unset !important;
    border-radius: 0.9375rem;
    border-bottom: 1px solid var(--Accent);
    .ant-table-title {
      display: flex;
      align-items: end;
    }
    .ant-table-thead {
      background: linear-gradient(
        112.87deg,
        #0a2230 10.32%,
        #000911 99.37%
      ) !important;
      /* border-radius: 0.9375rem 0.9375rem 0 0; */
      tr {
        .ant-table-cell:first-child {
          border-top-left-radius: 0.9375rem;
        }
        .ant-table-cell {
          background-color: unset !important;
          border: unset;
          border-bottom: 2px solid rgba(106, 150, 160, 0.5) !important;
          color: var(--Lightest);
        }
        .ant-table-cell:last-child {
          border-top-right-radius: 0.9375rem;
        }
      }
    }
    .ant-table-tbody {
      tr {
        .ant-table-cell {
          background: radial-gradient(
            180.41% 211.29% at 23.94% -42.4%,
            rgba(232, 247, 255, 0.15) 0%,
            rgba(183, 206, 224, 0.15) 17.65%,
            rgba(139, 152, 185, 0.15) 30.46%,
            rgba(34, 80, 92, 0.15) 47.09%,
            rgba(0, 9, 17, 0.15) 92.31%,
            rgba(0, 9, 17, 0.15) 100%
          );
          color: var(--White);
          border: 0;
        }
      }
      tr + tr {
        .ant-table-cell {
          border-top: 1px solid rgba(106, 150, 160, 0.5);
        }
      }
      tr:last-child {
        .ant-table-cell {
          &:first-child {
            border-bottom-left-radius: 0.9375rem;
          }
          &:last-child {
            border-bottom-right-radius: 0.9375rem;
          }
        }
      }
    }
  }
  .ant-pagination {
    .ant-pagination-prev,
    .ant-pagination-next {
      width: 100%;
      max-width: 60px;
    }
    .ant-pagination-disabled {
      cursor: auto;
      a {
        display: none;
      }
    }
    .ant-pagination-item {
      background: unset !important;
      border: unset;
      color: var(--Lightest);
      margin-right: 0;
      opacity: 0.75;
    }
    .ant-pagination-item-active {
      opacity: 1;
    }
    .ant-pagination-item + .ant-pagination-item {
      border-left: 1px solid var(--Lightest);
    }
  }
  & {
    @media (max-width: 575px) {
      .ant-table-cell {
        padding: 1rem 0.5rem;
      }
    }
  }
`;
