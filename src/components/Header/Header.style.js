import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = styled.header`
  background: linear-gradient(147deg, #52494c 0%, #2c3e50 74%);
`;

export const Bars = styled.div`
  height: 4rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const StyledLink = styled(Link)`
  &.menu-bars {
    margin-left: 2rem;
    background: transparent;
  }

  &.logo {
    display: none;
    padding: 0.5rem;
  }

  @media only screen and (min-width: 385px) {
    &.logo {
      position: absolute;
      top: 15px;
      left: 50%;
      transform: translateX(-50%);
      display: block;
    }
  }

  @media only screen and (min-width: 785px) {
    &.menu-bars:hover .icon {
      filter: invert(52%) sepia(52%) saturate(536%) hue-rotate(120deg)
        brightness(86%) contrast(93%);
    }
  }
`;

export const Nav = styled.nav`
  &.nav-menu {
    background: #2c3e50;
    width: 250px;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: -150%;
    transition: 1050ms;
    z-index: 100;
  }

  &.active {
    left: 0;
    transition: 650ms;
  }
`;

export const StyledList = styled.ul`
  margin: 0;
  padding-left: 0;
  width: 100%;
`;

export const StyledListItem = styled.li`
  &.navbar-toggle {
    background: transparent;
    width: 100%;
    height: 4rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  &.nav-text {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0.5rem 1rem;
    list-style: none;
  }

  &.nav-text a .icon {
    vertical-align: top;
  }

  &.nav-text a {
    text-decoration: none;
    color: #f5f5f5;
    font-size: 1rem;
    width: 95%;
    height: 100%;
    padding: 0.5rem 1rem;
    border-radius: 0.2rem;
  }

  &.nav-text a:hover {
    background-color: #239985;
  }

  &.flex {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media only screen and (min-width: 785px) {
    &.nav-text a {
      font-size: 1.1rem;
    }
  }
`;

export const StyledLinkTitle = styled.span`
  margin-left: 1rem;
`;

export const Logo = styled.img`
  height: 1rem;
  filter: invert(85%) sepia(100%) saturate(211%) hue-rotate(186deg)
    brightness(112%) contrast(91%);
  margin-bottom: 0.2rem;

  @media only screen and (min-width: 385px) {
    height: 20px;
  }
`;
