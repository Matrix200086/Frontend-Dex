import styled from "styled-components";

export const TitleHeading = styled.p`
  color: var(--Accent);
  font-weight: 700;
  margin: 0.75rem 0;
`;
export const Tag = styled.span`
  background: linear-gradient(96.22deg, #26e1be -15.01%, #0a2230 120.85%);
  color: var(--Accent);
  opacity: 0.3;
  border-radius: 10px;
  display: inline-block;
  text-align: center;
  width: 60px;
  height: 22px;
  font-size: 0.75rem;
  font-weight: 700;
  cursor: pointer;
  margin-right: 1rem;
  svg {
    width: 10px;
    height: 10px;
    vertical-align: baseline;
    margin-left: 0.25rem;
  }
`;
