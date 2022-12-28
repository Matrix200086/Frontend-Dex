import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
export const CardHeading = styled.p`
  font-weight: 700;
  margin-bottom: 1.5rem;
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
`;
export const DropDowns = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 1.5rem;
  .ant-dropdown-trigger:first-child {
    &:first-child {
      margin-right: 2rem;
    }
  }
  & {
    @media (max-width: 992px) {
      display: block;
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
  img {
    width: 35px;
    height: 35px;
  }
  & {
    @media (max-width: 992px) {
      margin: 0.5rem 0;
      img {
        width: 25px;
        height: 25px;
      }
    }
  }
`;
export const DropHeading = styled.span`
  font-size: 1.375rem;
  font-weight: 500;
  & {
    @media (max-width: 575px) {
      font-size: 1rem;
    }
  }
`;
export const DropText = styled.p`
  font-size: 0.75rem;
  font-weight: 400;
  margin-bottom: 0;
  color: var(--Lightest);
`;
