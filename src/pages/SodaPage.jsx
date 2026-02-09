import React from "react";
import FoodCard from "../components/FoodCard/FoodCard";
import { sodaData } from "../data/sodaData";
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

const SodaPage = () => {
  return (
    <PageContainer>
      <PageTitle>Вся Сода</PageTitle>
      <FoodGrid>
        {sodaData.map((soda) => (
          <FoodCard
            key={soda.id}
            id={soda.id}
            name={soda.name}
            price={soda.price}
            imageUrl={soda.imageUrl}
            description={soda.description}
          />
        ))}
      </FoodGrid>
    </PageContainer>
  );
};

export default SodaPage;
