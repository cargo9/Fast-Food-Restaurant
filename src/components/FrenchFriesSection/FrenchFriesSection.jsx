import React from "react";
import { useNavigate } from "react-router-dom";
import FoodCard from "../FoodCard/FoodCard";
import { frenchFriesData } from "../../data/frenchFriesData";
import { Section, SectionTitle, FoodGrid } from "./FrenchFries.styled";
import { ViewAllButton } from "../ViewAllButton/ViewAllButton.styled";

const FrenchFriesSection = () => {
  const navigate = useNavigate();

  return (
    <Section id="french-fries">
      <SectionTitle> French Fries</SectionTitle>
      <FoodGrid>
        {frenchFriesData.slice(0, 3).map((frenchFries) => (
          <FoodCard
            key={frenchFries.id}
            id={frenchFries.id}
            name={frenchFries.name}
            price={frenchFries.price}
            imageUrl={frenchFries.imageUrl}
            description={frenchFries.description}
          />
        ))}
      </FoodGrid>
      <ViewAllButton onClick={() => navigate("/french-fries")}>
        Show all fries
      </ViewAllButton>
    </Section>
  );
};

export default FrenchFriesSection;
