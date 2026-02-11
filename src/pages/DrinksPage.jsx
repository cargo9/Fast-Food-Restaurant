import React from "react";
import DrinksCard from "../components/DrinksCard/DrinksCard";
import { drinksData } from "../data/drinksData";
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

const DrinksPage = () => {
  return (
    <PageContainer>
      <PageTitle>All Drinks</PageTitle>
      <FoodGrid>
        {drinksData.map((drink) => (
          <DrinksCard
            key={drink.id}
            id={drink.id}
            name={drink.name}
            imageUrl={drink.imageUrl}
            description={drink.description}
          />
        ))}
      </FoodGrid>
    </PageContainer>
  );
};

export default DrinksPage;
