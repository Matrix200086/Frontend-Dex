import styled from "styled-components";
import { Tabs } from "antd";

export const TabsArea = styled(Tabs)`
  .ant-tabs-nav {
    &::before {
      display: none;
    }
    .ant-tabs-nav-wrap {
      justify-content: end;
      padding-right: 1rem;
      .ant-tabs-tab + .ant-tabs-tab {
        margin: 0 0 0 1.25rem !important;
      }
      .ant-tabs-tab {
        padding: 0.75rem 0 !important;
        background: unset !important;
        div {
          color: var(--DappSupportText) !important;
          font-size: 0.875rem;
        }
      }
      .ant-tabs-tab-active {
        div {
          color: var(--Accent) !important;
        }
      }
      .ant-tabs-ink-bar {
        display: none;
      }
    }
  }
  &.odd {
    .ant-tabs-nav {
      display: block;
      margin-bottom: 1rem;
      align-items: flex-start;
      .ant-tabs-nav-wrap {
        .ant-tabs-tab {
          padding-top: 0 !important;
        }
      }
    }
  }
`;
export const ContentHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0;
  & {
    @media (max-width: 1400px) {
      display: block;
    }
  }
`;
export const ContentChart = styled.div`
  img {
    width: 100%;
  }
`;
export const AnalyticsTabs = styled(Tabs)`
  .ant-tabs-nav {
    margin-bottom: 0%;
    &::before {
      display: none;
    }
    .ant-tabs-nav-wrap {
      .ant-tabs-ink-bar {
        display: none;
      }
      .ant-tabs-tab + .ant-tabs-tab {
        margin: 0 0 0 1.25rem;
      }
      .ant-tabs-tab {
        padding: 0.25rem 1.25rem;
        div {
          color: var(--Lightest);
          span {
            display: inline-block;
            color: var(--Lightest);
            font-size: 0.875rem;
            font-weight: 700;
          }
        }
      }
      .ant-tabs-tab-active {
        background: linear-gradient(112.87deg, #0a2230 10.32%, #000911 63.88%);
        border-radius: 1rem;
        div {
          span {
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
        }
      }
    }
  }
  &.odd {
    .ant-tabs-nav {
      .ant-tabs-nav-wrap {
        justify-content: end;
      }
    }
  }
  & {
    @media (max-width: 768px) {
      .ant-tabs-nav {
        display: block;
        .ant-tabs-nav-wrap {
          margin-top: 1.5rem;
          .ant-tabs-tab + .ant-tabs-tab {
            margin: 0 0 0 0.55rem !important;
          }
          .ant-tabs-tab {
            padding: 0.25rem 1rem !important;
            font-size: 0.75rem;
          }
        }
      }
    }
  }
`;
