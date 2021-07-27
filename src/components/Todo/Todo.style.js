import styled from "styled-components";

export const Todo = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.05rem solid #ccc;
  padding: 0.5rem;
  min-height: 50px;
`;

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const FlexItem = styled.div`
  margin-left: 1.5rem;
`;

export const Title = styled.h4`
  font-weight: 400;
  margin: 0;
  display: flex;
  align-items: center;

  &.crossed {
    color: #ddd;
    text-decoration: line-through;
  }
`;

export const Completed = styled.div`
  color: #ccc;
  font-size: 0.8rem;
  margin-left: 1rem;
`;

export const Date = styled.div`
  color: #aaa;
`;
