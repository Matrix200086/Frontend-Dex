import styled from "styled-components";

export const FooterArea = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2rem 0;
  border-top: 1px solid var(--Accent);
  /* border-image: linear-gradient(
    90deg,
    #26e1be 0%,
    rgba(0, 9, 17, 0.5) 23.96%,
    rgba(12, 79, 72, 0.87) 31.25%,
    rgba(16, 99, 89, 0.96) 72%,
    rgba(6, 45, 45, 0.72) 81%,
    rgba(2, 24, 29, 0.63) 85%,
    rgba(1, 17, 23, 0.6) 88%,
    rgba(23, 137, 120, 0.97) 100%
  ); */
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .image {
    img {
      width: 110px;
    }
  }
  & {
    @media (max-width: 575px) {
      span {
        font-size: 0.5rem;
      }
      .image {
        img {
          width: 50px;
        }
      }
      .socialLinks {
        img {
          width: 12px;
        }
        a:nth-child(2) {
          margin: 0 0.5rem !important;
        }
      }
    }
  }
`;
