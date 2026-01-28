import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1000;
`;

export const Logo = styled.img`
  height: 60px;
  width: auto;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 30px;
`;

export const NavList = styled.ul`
  display: flex;
  list-style: none;
  gap: 30px;
  margin: 0;
  padding: 0;
   @media (max-width: 414px) {
  display: flex;
  flex-direction: column;
  
  
  }
`;

export const NavItem = styled.li`
  font-size: 1.1rem;
  color: #333;
  cursor: pointer;
  transition: color 0.3s ease;
  font-weight: 500;

  &:hover {
    color: #e63946;
  }
`;
