import styled from "styled-components";

export const StyledNotification = styled.div`
  padding: 1rem;
  border-radius: 0.3rem;
  background: ${(props) => (props.type === "success" ? "#239985" : "#df5555")};
  color: rgb(250, 250, 250);
  margin: 0 0 1rem 0;
`;
