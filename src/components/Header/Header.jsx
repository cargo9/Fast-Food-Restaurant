import React from "react";
import { menuDishes } from "../../data/menuData";
import { HeaderContainer, Logo, Nav, NavList, NavItem } from "./Header.styled";

const Header = () => {
  return (
    <HeaderContainer>
      <Logo
        src="https://www.creativefabrica.com/wp-content/uploads/2019/10/11/Minimalist-Restaurant-Logo-by-Murnify-4.jpg"
        alt="Restaurant Logo"
      />
      <Nav>
        <NavList>
          {menuDishes.map((dish) => (
            <NavItem key={dish.id}>{dish.name}</NavItem>
          ))}
        </NavList>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
