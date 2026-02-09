import styled from "styled-components";

export const HeaderContainer = styled.header`
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
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
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
  transition: all 0.3s ease;
  font-weight: 500;
  position: relative;

  &:hover {
    color: #e63946;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const CartIcon = styled.span`
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CartBadge = styled.span`
  position: absolute;
  top: -8px;
  right: -10px;
  background: #e63946;
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 700;
`;
