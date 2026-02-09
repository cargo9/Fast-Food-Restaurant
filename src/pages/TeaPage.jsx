import React from "react";
import FoodCard from "../components/FoodCard/FoodCard";
import { teaData } from "../data/teaData";
import styled from "styled-components";

const PageContainer = styled.div`
  padding: 100px 40px 40px;
  min-height: 100vh;
  background-color: #f8f9fa;
`;

const PageTitle = styled.h1`
  text-align: center;
  font-size: 3rem;
  color: #333;
  margin-bottom: 50px;
  font-weight: 700;
`;

const FoodGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
  max-width: 1400px;
  margin: 0 auto;
`;

const TeaPage = () => {
  return (
    <PageContainer>
      <PageTitle>Весь Чай</PageTitle>
      <FoodGrid>
        {teaData.map((tea) => (
          <FoodCard
            key={tea.id}
            id={tea.id}
            name={tea.name}
            price={tea.price}
            imageUrl={tea.imageUrl}
            description={tea.description}
          />
        ))}
      </FoodGrid>
    </PageContainer>
  );
};

export default TeaPage;
