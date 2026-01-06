import React from "react";
import FoodCard from "../FoodCard/FoodCard";
import { sushiData } from "../../data/sushiData";
import { Section, SectionTitle, FoodGrid } from "./SushiSection.styled";

const SushiSection = () => {
  return (
    <Section>
      <SectionTitle>Sushi</SectionTitle>
      <FoodGrid>
        {sushiData.map((sushi) => (
          <FoodCard
            key={sushi.id}
            name={sushi.name}
            price={sushi.price}
            imageUrl={sushi.imageUrl}
            description={sushi.description}
          />
        ))}
      </FoodGrid>
    </Section>
  );
};

export default SushiSection;