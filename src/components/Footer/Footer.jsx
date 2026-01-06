import React from "react";
import { menuContacts } from "../../data/menuContacts";
import {FooterContainer, Logo, Nav, NavList, NavItem } from "./Footer.styled";

const Footer = () => {
  return (
    <FooterContainer>
      <Logo
        src="https://www.creativefabrica.com/wp-content/uploads/2019/10/11/Minimalist-Restaurant-Logo-by-Murnify-4.jpg"
        alt="Restaurant Logo"
      />
      <Nav>
        <NavList>
          {menuContacts.map((contact) => (
            <NavItem key={contact.id}>{contact.name}</NavItem>
          ))}
        </NavList>
      </Nav>
    </FooterContainer>
  );
};

export default Footer;