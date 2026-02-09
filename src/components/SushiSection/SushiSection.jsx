import React from "react";
import { useNavigate } from "react-router-dom";
import FoodCard from "../FoodCard/FoodCard";
import { sushiData } from "../../data/sushiData";
import { Section, SectionTitle, FoodGrid } from "./SushiSection.styled";
import { ViewAllButton } from "../ViewAllButton/ViewAllButton.styled";

const SushiSection = () => {
  const navigate = useNavigate();

  return (
    <Section id="sushi">
      <SectionTitle>Sushi</SectionTitle>
      <FoodGrid>
        {sushiData.slice(0, 3).map((sushi) => (
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
      <ViewAllButton onClick={() => navigate("/sushi")}>
        Показати всі суші
      </ViewAllButton>
    </Section>
  );
};

export default SushiSection;
