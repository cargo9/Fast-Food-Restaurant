import React from "react";
import FoodCard from "../FoodCard/FoodCard";
import { pizzaData } from "../../data/pizzaData";
import { Section, SectionTitle, FoodGrid } from "./PizzaSection.styled";

const PizzaSection = () => {
  return (
    <Section>
      <SectionTitle>Pizza</SectionTitle>
      <FoodGrid>
        {pizzaData.map((pizza) => (
          <FoodCard
            key={pizza.id}
            name={pizza.name}
            price={pizza.price}
            imageUrl={pizza.imageUrl}
            description={pizza.description}
          />
        ))}
      </FoodGrid>
    </Section>
  );
};

export default PizzaSection;
