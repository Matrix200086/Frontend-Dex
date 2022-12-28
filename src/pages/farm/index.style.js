import styled from "styled-components";

export const FarmHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1230px;
  h4 {
    margin-bottom: 0;
  }
  .ant-input-affix-wrapper {
    width: 393px;
    background-color: unset;
    border-color: unset;
    border: 0;
    outline: 0;
    box-shadow: none;
    border-bottom: 1px solid var(--DappSupportText) !important;
    padding: 0.25rem 0;
    input {
      background-color: unset;
      border-color: unset;
      border: 0;
      outline: 0;
      box-shadow: none;
      font-size: 0.875rem;
      color: var(--DappSupportText);
      &::placeholder {
        color: var(--DappSupportText);
        font-size: 0.875rem;
      }
    }
    .ant-input-suffix {
      color: var(--Accent);
      svg {
        font-size: 1rem;
      }
    }
  }
  & {
    @media (max-width: 1400px) {
      display: block;
      .ant-input-affix-wrapper {
        margin: 1rem 0;
        width: 100%;
        max-width: 390px;
      }
    }
  }
`;
export const ButtonGroup = styled.div`
  padding-left: 1rem;
  width: 435px;
  height: 32px;
  border: 1px solid var(--Accent);
  border-radius: 1.0625rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & {
    @media (max-width: 768px) {
      width: 100%;
      max-width: 435px;
    }
  }
`;
export const Btn = styled.a`
  width: 100%;
  max-width: 120px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--Accent);
  color: var(--SpdGreen) !important;
  border-radius: 1.0625rem;
  font-size: 0.875rem;
  font-weight: 600;
`;
export const FarmContent = styled.div`
  width: 100%;
  max-width: 999px;
  margin: 0.5rem auto;
  margin-top: 3rem;
`;
