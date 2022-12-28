import styled from "styled-components";

export const HeaderArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 2rem;
  & {
    @media (max-width: 575px) {
      display: block;
      position: relative;
      padding-top: 2rem;
    }
  }
`;
export const ToggleBtn = styled.a`
  position: absolute;
  top: 0;
  left: 0;
  display: none;
  svg {
    color: var(--Lightest);
    font-size: 1.25rem;
  }
  & {
    @media (max-width: 575px) {
      display: block;
    }
  }
`;
export const HeaderLink = styled.div`
  display: flex;
  border: 1px solid var(--Accent);
  height: 40px;
  justify-content: center;
  align-items: center;
  border-radius: 1.25rem;
  p {
    color: var(--Accent);
    margin-bottom: 0;
    padding: 0 0.5rem 0 1.5rem;
    border-right: 1px solid var(--Accent);
    border-top-right-radius: 1.25rem;
    border-bottom-right-radius: 1.25rem;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .ant-dropdown-trigger {
    padding: 0 0.5rem 0 1rem;
  }
`;
