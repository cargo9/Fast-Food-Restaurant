import React from "react";
import FoodCard from "../DrinksCard/DrinksCard";
import { drinksData } from "../../data/drinksData";
import { Section, SectionTitle, FoodGrid } from "./DrinksSection.styled";

const DrinksSection = () => {
  return (
    <Section>
      <SectionTitle>Drinks</SectionTitle>
      <FoodGrid>
        {drinksData.map((drink) => (
          <FoodCard
            key={drink.id}
            name={drink.name}
            imageUrl={drink.imageUrl}
            description={drink.description}
          />
        ))}
      </FoodGrid>
    </Section>
  );
};

export default DrinksSection;