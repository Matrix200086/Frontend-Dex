import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const SideNavigation = styled.div`
  width: 200px;
  background: var(--DarkestSecondary);
  padding: 8rem 0 2rem 1.5rem;
  height: auto;
  min-height: 100vh;
  transition: all 500ms ease-in-out;
  & {
    @media (max-width: 575px) {
      position: fixed;
      top: 0;
      left: -100%;
      z-index: 1;
    }
  }
`;
export const ToggleBtn = styled.a`
  display: none;
  position: absolute;
  left: 1.125rem;
  top: 1.125rem;
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
export const NavigationLinks = styled.div`
  position: relative;
  .active {
    background: linear-gradient(112.87deg, #0a2230 10.32%, #000911 63.88%);
    border: 1px solid var(--Accent);
    img:first-child {
      display: none;
    }
    img:nth-child(2) {
      display: block;
    }
    span {
      color: var(--Gray);
    }
  }
`;
export const NavigationItem = styled(NavLink)`
  padding: 0.5rem 1rem;
  font-weight: 600;
  color: var(--Lightest);
  width: 142px !important;
  display: flex;
  margin-bottom: 1.5rem;
  width: auto;
  border: 1px solid var(--DarkestSecondary);
  border-radius: 3.125rem;
  transition: all 300ms ease-in-out;
  img:first-child {
    display: block;
  }
  img:nth-child(2) {
    display: none;
  }
  span {
    font-weight: 600;
    color: var(--Lightest);
    font-size: 0.875rem;
    margin-left: 0.875rem;
  }
  &:hover {
    background: linear-gradient(112.87deg, #0a2230 10.32%, #000911 63.88%);
    border: 1px solid var(--Accent);
    img:first-child {
      display: none;
    }
    img:nth-child(2) {
      display: block;
    }
    span {
      color: var(--Gray);
    }
  }
`;
export const SocialLinks = styled.div`
  position: absolute;
  bottom: 3rem;
  left: 2.5rem;
`;
