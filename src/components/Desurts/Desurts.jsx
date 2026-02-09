import React from "react";
import { useNavigate } from "react-router-dom";
import FoodCard from "../FoodCard/FoodCard";
import { desurtData } from "../../data/desurt.Data";
import { Section, SectionTitle, FoodGrid } from "./Desurts.styled";
import { ViewAllButton } from "../ViewAllButton/ViewAllButton.styled";

const DesurtSection = () => {
  const navigate = useNavigate();

  return (
    <Section>
      <SectionTitle>Dessert</SectionTitle>
      <FoodGrid>
        {desurtData.slice(0, 3).map((desurt) => (
          <FoodCard
            key={desurt.id}
            id={desurt.id}
            name={desurt.name}
            price={desurt.price}
            imageUrl={desurt.imageUrl}
            description={desurt.description}
          />
        ))}
      </FoodGrid>
      <ViewAllButton onClick={() => navigate("/desserts")}>
        Показати всі десерти
      </ViewAllButton>
    </Section>
  );
};

export default DesurtSection;
