import React from "react";
import FoodCard from "../FoodCard/FoodCard";
import { burgerData } from "../../data/burgerData";
import { Section, SectionTitle, FoodGrid } from "./BurgerSection.styled";

const BurgerSection = () => {
  return (
    <Section>
      <SectionTitle>Burgers</SectionTitle>
      <FoodGrid>
        {burgerData.map((burger) => (
          <FoodCard
            key={burger.id}
            name={burger.name}
            price={burger.price}
            imageUrl={burger.imageUrl}
            description={burger.description}
          />
        ))}
      </FoodGrid>
    </Section>
  );
};

export default BurgerSection;
