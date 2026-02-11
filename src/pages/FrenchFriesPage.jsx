import React from "react";
import FoodCard from "../components/FoodCard/FoodCard";
import { frenchFriesData } from "../data/frenchFriesData";
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

const FrenchFriesPage = () => {
  return (
    <PageContainer>
      <PageTitle>All French Fries</PageTitle>
      <FoodGrid>
        {frenchFriesData.map((frenchFries) => (
          <FoodCard
            key={frenchFries.id}
            id={frenchFries.id}
            name={frenchFries.name}
            price={frenchFries.price}
            imageUrl={frenchFries.imageUrl}
            description={frenchFries.description}
          />
        ))}
      </FoodGrid>
    </PageContainer>
  );
};

export default FrenchFriesPage;
