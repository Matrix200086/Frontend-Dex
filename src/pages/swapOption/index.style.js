import styled from "styled-components";

export const OptionHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h4 {
    margin-bottom: 0.25rem;
  }
`;
export const SwapRows = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
`;
export const ReminderArea = styled.div`
  margin-top: 1.25rem;
  li {
    font-size: 0.875rem;
    font-weight: 400;
    color: var(--Lightest);
  }
`;
export const ReminderHeading = styled.p`
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--Lightest);
`;
