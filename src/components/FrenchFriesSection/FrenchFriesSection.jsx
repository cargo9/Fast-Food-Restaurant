import React from "react";
import FoodCard from "../FoodCard/FoodCard";
import { frenchFriesData } from "../../data/frenchFriesData";
import { Section, SectionTitle, FoodGrid } from "./FrenchFries.styled";

const FrenchFriesSection = () => {
  return (
    <Section>
      <SectionTitle> French Fries</SectionTitle>
      <FoodGrid>
        {frenchFriesData.map(( frenchFries) => (
          <FoodCard
            key={frenchFries.id}
            name={frenchFries.name}
            price={frenchFries.price}
            imageUrl={frenchFries.imageUrl}
            description={frenchFries.description}
          />
        ))}
      </FoodGrid>
    </Section>
  );
};

export default  FrenchFriesSection;