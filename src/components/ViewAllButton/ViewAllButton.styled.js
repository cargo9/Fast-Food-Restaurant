import styled from "styled-components";

export const ViewAllButton = styled.button`
  display: block;
  margin: 40px auto 0;
  padding: 15px 40px;
  font-size: 1.1rem;
  font-weight: 600;
  color: #fff;
  background: linear-gradient(135deg, #e63946 0%, #f77f00 100%);
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(230, 57, 70, 0.3);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(230, 57, 70, 0.4);
  }

  &:active {
    transform: translateY(-1px);
  }
`;
