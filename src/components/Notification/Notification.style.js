import styled from "styled-components";

export const StyledNotification = styled.div`
  width: 100%;
  padding: 1rem;
  border-radius: 0.3rem;
  background: ${(props) => (props.type === "success" ? "#239985" : "#df5555")};
  color: rgb(250, 250, 250);
  margin: 0;
  position: relative;
  line-break: auto;
  box-sizing: border-box;
`;

export const CloseButton = styled.button`
  background: #f3f3f3;
  border: 0;
  border-radius: 50%;
  cursor: pointer;
  color: #333;
  position: absolute;
  right: 1rem;
`;
