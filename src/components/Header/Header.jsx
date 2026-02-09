import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { menuDishes } from "../../data/menuData";
import {
  HeaderContainer,
  Logo,
  Nav,
  NavList,
  NavItem,
  CartIcon,
  CartBadge,
} from "./Header.styled";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { toggleCart, getTotalItems } = useCart();

  const handleNavClick = (sectionId) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100);
    } else {
      scrollToSection(sectionId);
    }
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleLogoClick = () => {
    navigate("/");
  };

  const totalItems = getTotalItems();

  return (
    <HeaderContainer>
      <Logo
        src="https://www.creativefabrica.com/wp-content/uploads/2019/10/11/Minimalist-Restaurant-Logo-by-Murnify-4.jpg"
        alt="Restaurant Logo"
        onClick={handleLogoClick}
      />
      <Nav>
        <NavList>
          {menuDishes.map((dish) => (
            <NavItem key={dish.id} onClick={() => handleNavClick(dish.id)}>
              {dish.name}
            </NavItem>
          ))}
          <NavItem onClick={toggleCart} style={{ position: "relative" }}>
            <CartIcon>🛒</CartIcon>
            {totalItems > 0 && <CartBadge>{totalItems}</CartBadge>}
          </NavItem>
        </NavList>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
