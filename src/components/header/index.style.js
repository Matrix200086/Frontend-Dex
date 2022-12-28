import styled from "styled-components";
import { Navbar } from "react-bootstrap";

export const HeaderArea = styled(Navbar)`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  background-color: unset !important;
  align-items: center !important;
  padding: 1.0625rem 3rem 1.0625rem 4rem;
  .navbar-brand {
    text-align: center;
    width: 150px;
    height: 40px;
  }
  .navbar-nav {
    align-items: center;
    .nav-link {
      color: var(--White);
      font-size: 1.125rem;
      margin: 0 1rem 0 0;
      font-weight: 700;
      a {
        color: var(--White);
      }
    }
  }
  & {
    @media (max-width: 768px) {
      padding: 1rem 1rem 1rem 1.5rem;
      .navbar-brand {
        width: unset;
      }
    }
  }
`;
