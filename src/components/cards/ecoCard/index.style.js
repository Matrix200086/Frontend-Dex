import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  align-items: flex-start;
`;
export const CardIcon = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 1rem;
`;
export const CardText = styled.p`
  width: 100%;
  max-width: 185px;
  @media (max-width: 992px) {
    max-width: 100%;
  }
`;
