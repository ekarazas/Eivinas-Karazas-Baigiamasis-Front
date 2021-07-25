import React, { useState, useContext } from "react";
import * as S from "./Header.style";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import { IconContext } from "react-icons";
import { DisplayHeaderContext } from "../../contexts/displayHeaderContext";
import { AuthContext } from "../../contexts/authContext";

import Logo from "../../assets/images/Tasky.png";
import Button from "../Button/Button";

const Header = () => {
  const displayHeaderContext = useContext(DisplayHeaderContext);
  const [sidebar, setSideBar] = useState(false);

  const authContext = useContext(AuthContext);

  const showSidebar = () => setSideBar(!sidebar);

  const logout = () => {
    localStorage.removeItem("token");
    authContext.setLoggedIn(false);
  };

  return (
    <>
      {displayHeaderContext.display && (
        <IconContext.Provider value={{ color: "f3f3f3", className: "icon" }}>
          <S.Header>
            <S.Bars>
              <S.StyledLink to="#" className="menu-bars">
                <FaIcons.FaBars onClick={showSidebar} />
              </S.StyledLink>
            </S.Bars>
            <S.Nav className={sidebar ? "nav-menu active" : "nav-menu"}>
              <S.StyledList onClick={showSidebar}>
                <S.StyledListItem className="navbar-toggle">
                  <S.StyledLink to="#" className="menu-bars">
                    <AiIcons.AiOutlineClose />
                  </S.StyledLink>
                </S.StyledListItem>
                {SidebarData.map((item, index) => {
                  return (
                    <S.StyledListItem key={index} className={item.cName}>
                      <S.StyledLink to={item.path}>
                        {item.icon}
                        <S.StyledLinkTitle>{item.title}</S.StyledLinkTitle>
                      </S.StyledLink>
                    </S.StyledListItem>
                  );
                })}
                <S.StyledListItem className="nav-text flex">
                  <Button type="button" color="secondary" handleClick={logout}>
                    Log out
                  </Button>
                </S.StyledListItem>
              </S.StyledList>
            </S.Nav>
            <S.StyledLink to="/" className="logo">
              <S.Logo src={Logo} />
            </S.StyledLink>
          </S.Header>
        </IconContext.Provider>
      )}
    </>
  );
};

export default Header;
