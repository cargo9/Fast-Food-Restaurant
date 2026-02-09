import styled from "styled-components";

export const CategoryCard = styled.div`
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }
`;

export const CategoryImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`;

export const CategoryContent = styled.div`
  padding: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const CategoryTitle = styled.h3`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 10px;
  font-weight: 600;
`;

export const CategoryDescription = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 20px;
  flex: 1;
`;

export const ChooseButton = styled.button`
  padding: 12px 25px;
  background: linear-gradient(135deg, #e63946 0%, #f77f00 100%);
  color: white;
  border: none;
  border-radius: 25px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 10px rgba(230, 57, 70, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 15px rgba(230, 57, 70, 0.4);
  }

  &:active {
    transform: translateY(0);
  }
`;
