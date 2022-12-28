import styled from "styled-components";
import { Dropdown, Input } from "antd";

export const SearchInput = styled(Input)`
  width: 100%;
  max-width: 164px;
  border: 0;
  border-bottom: 1px solid var(--DappSupportText) !important;
  color: var(--Lightest);
  box-shadow: none !important;
  background: unset;
  margin-right: 1rem;
  padding-left: 0;
  input {
    background: unset;
    color: var(--Lightest);
    &::placeholder {
      color: var(--DappSupportText);
    }
  }
`;
export const FilterDropDown = styled(Dropdown)`
  border-bottom: 1px solid var(--Lightest);
  color: var(--Lightest) !important;
  padding-bottom: 0.25rem;
  span {
    padding-left: 0.5rem;
  }
`;
