import React from "react";
import FoodCard from "../components/FoodCard/FoodCard";
import { sushiData } from "../data/sushiData";
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

const SushiPage = () => {
  return (
    <PageContainer>
      <PageTitle>All Sushi</PageTitle>
      <FoodGrid>
        {sushiData.map((sushi) => (
          <FoodCard
            key={sushi.id}
            id={sushi.id}
            name={sushi.name}
            price={sushi.price}
            imageUrl={sushi.imageUrl}
            description={sushi.description}
          />
        ))}
      </FoodGrid>
    </PageContainer>
  );
};

export default SushiPage;
