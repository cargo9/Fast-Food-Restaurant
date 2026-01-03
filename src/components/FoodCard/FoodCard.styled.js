import styled from "styled-components";

export const Card = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`;

export const CardContent = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const CardTitle = styled.h3`
  margin: 0 0 10px 0;
  font-size: 1.5rem;
  color: #333;
`;

export const CardDescription = styled.p`
  margin: 0 0 15px 0;
  color: #666;
  font-size: 0.95rem;
  flex-grow: 1;
`;

export const CardPrice = styled.p`
  margin: 0 0 15px 0;
  font-size: 1.3rem;
  font-weight: bold;
  color: #e63946;
`;

export const AddButton = styled.button`
  background-color: #e63946;
  color: white;
  border: none;
  padding: 12px 24px;
  font-size: 1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #d62828;
  }

  &:active {
    transform: scale(0.98);
  }
`;
