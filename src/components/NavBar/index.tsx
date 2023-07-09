import * as S from "./style";
import { SiMonogame } from "react-icons/si";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { TiThMenu } from "react-icons/ti";
import { AiFillHome,AiFillHeart } from "react-icons/ai";

import { useState } from "react";
function NavBar() {
  const [isResposiveNavbarOpen, setResposiveNavbarOpen] = useState(false);
  
  return (
    <S.NavBarContainer className={isResposiveNavbarOpen ? "open" : "close"}>
      <S.NavBar>
        <S.NavbarLogo href="#">
          <SiMonogame />
          <S.NavBarTitle>Gamerfinder</S.NavBarTitle>
        </S.NavbarLogo>
        <S.NavbarLinks>
          <li>
            <Link to="/" onClick={() => setResposiveNavbarOpen(false)}>  Home</Link>
          </li>
          <li>
            <Link to="/favoritos" onClick={() => setResposiveNavbarOpen(false)}> Favoritos</Link>
          </li>
          <li>
            <Link to="/login" onClick={() => setResposiveNavbarOpen(false)}>Login</Link>
          </li>
        </S.NavbarLinks>
        <S.ResponsiveIcon>
          {isResposiveNavbarOpen ? (
            <IoMdClose onClick={() => setResposiveNavbarOpen(false)} />
          ) : (
            <TiThMenu onClick={() => setResposiveNavbarOpen(true)} />
          )}
        </S.ResponsiveIcon>
      </S.NavBar>
    </S.NavBarContainer>
  );
}

export default NavBar;
