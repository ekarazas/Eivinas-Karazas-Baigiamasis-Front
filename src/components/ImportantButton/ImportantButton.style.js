import styled from "styled-components";

export const StarButton = styled.button`
  background: 0;
  border: 0;

  &.star {
    cursor: pointer;
  }

  & .icon.active {
    filter: invert(95%) sepia(23%) saturate(3477%) hue-rotate(328deg)
      brightness(95%) contrast(99%);
  }

  @media only screen and (min-width: 785px) {
    &:hover .icon {
      filter: invert(95%) sepia(23%) saturate(3477%) hue-rotate(328deg)
        brightness(95%) contrast(99%);
    }

    &:hover .icon.active {
      filter: invert(66%) sepia(66%) saturate(533%) hue-rotate(7deg)
        brightness(90%) contrast(89%);
    }
  }
`;
