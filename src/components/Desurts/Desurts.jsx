import React from "react";
import FoodCard from "../FoodCard/FoodCard";
import { desurtData } from "../../data/desurt.Data";
import { Section, SectionTitle, FoodGrid } from "./Desurts.styled";

const DesurtSection = () => {
  return (
    <Section>
      <SectionTitle>Dessert</SectionTitle>
      <FoodGrid>
        {desurtData.map((desurt) => (
          <FoodCard
            key={desurt.id}
            name={desurt.name}
            price={desurt.price}
            imageUrl={desurt.imageUrl}
            description={desurt.description}
          />
        ))}
      </FoodGrid>
    </Section>
  );
};

export default DesurtSection;
