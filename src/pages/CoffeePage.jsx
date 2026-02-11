import React from "react";
import FoodCard from "../components/FoodCard/FoodCard";
import { coffeeData } from "../data/coffeeData";
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

const CoffeePage = () => {
  return (
    <PageContainer>
      <PageTitle>All Coffee</PageTitle>
      <FoodGrid>
        {coffeeData.map((coffee) => (
          <FoodCard
            key={coffee.id}
            id={coffee.id}
            name={coffee.name}
            price={coffee.price}
            imageUrl={coffee.imageUrl}
            description={coffee.description}
          />
        ))}
      </FoodGrid>
    </PageContainer>
  );
};

export default CoffeePage;
