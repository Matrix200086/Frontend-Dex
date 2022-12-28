import styled from "styled-components";

export const Card = styled.div`
  background: linear-gradient(180deg, #000911 0%, #03151e 100%);
  border-radius: 1.375rem;
  border-bottom: 1px solid var(--Accent);
  width: 100%;
  max-width: 470px;
  height: 100%;
  min-height: 235px;
  position: relative;
  text-align: center;
  padding: 6rem 1rem 0;
`;
export const CardImage = styled.img`
  width: 146px;
  height: 130px;
  position: absolute;
  top: -50%;
  left: 50%;
  transform: translate(-50%, 50%);
`;
export const CardContent = styled.div`
  width: 100%;
  max-width: 330px;
  margin: 0 auto;
`;
export const CardHeading = styled.h4`
  font-weight: 700;
  color: var(--White);
`;
export const CardText = styled.p`
  color: var(--Gray);
`;
