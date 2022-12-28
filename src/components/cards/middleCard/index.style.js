import styled from "styled-components";

export const Card = styled.div`
  background: linear-gradient(180deg, #000911 0%, #03151e 100%);
  border-radius: 1.375rem;
  border-bottom: 1px solid var(--Accent);
  /* border-image: linear-gradient(96.22deg, #26e1be -15.01%, #0a2230 120.85%); */
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 300px;
`;
export const CardImage = styled.img`
  position: absolute;
  top: -50%;
  left: 50%;
  transform: translate(-50%, 50%);
`;
export const CardContent = styled.div`
  width: 100%;
  max-width: 279px;
  margin: 0 auto;
  text-align: center;
  padding: 5.5rem 1rem 1rem;
`;
export const CardHeading = styled.h4`
  font-size: 1.4375rem;
  font-weight: 700;
  color: var(--White);
`;
export const CardPara = styled.p`
  color: var(--Gray);
`;
