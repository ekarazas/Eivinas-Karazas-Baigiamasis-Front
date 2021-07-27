import styled from "styled-components";

export const CompleteButton = styled.button`
  background-color: #fbfbfb;
  border: 0.05rem solid #6955df;
  height: 25px;
  width: 25px;
  border-radius: 50%;
  color: #f3f3f3;
  cursor: pointer;
  padding: 1px 0 0 1px;
  transition: 300ms ease;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  &.active {
    background-color: #6955df;
  }

  &.active .icon {
    filter: invert(96%) sepia(5%) saturate(6%) hue-rotate(334deg)
      brightness(96%) contrast(104%);
  }

  &.icon {
    vertical-align: "middle";
  }

  @media only screen and (min-width: 785px) {
    &:hover {
      background-color: #6955df;
    }

    &:hover .icon {
      filter: invert(96%) sepia(5%) saturate(6%) hue-rotate(334deg)
        brightness(96%) contrast(104%);
    }

    &.active:hover {
      background-color: #3a2b94;
      border: 0.05rem solid #3a2b94;
    }
  }
`;
