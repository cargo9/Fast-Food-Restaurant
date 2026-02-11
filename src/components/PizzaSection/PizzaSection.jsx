import React from "react";
import { useNavigate } from "react-router-dom";
import FoodCard from "../FoodCard/FoodCard";
import { pizzaData } from "../../data/pizzaData";
import { Section, SectionTitle, FoodGrid } from "./PizzaSection.styled";
import { ViewAllButton } from "../ViewAllButton/ViewAllButton.styled";

const PizzaSection = () => {
  const navigate = useNavigate();

  return (
    <Section id="pizza">
      <SectionTitle>Pizza</SectionTitle>
      <FoodGrid>
        {pizzaData.slice(0, 3).map((pizza) => (
          <FoodCard
            key={pizza.id}
            id={pizza.id}
            name={pizza.name}
            price={pizza.price}
            imageUrl={pizza.imageUrl}
            description={pizza.description}
          />
        ))}
      </FoodGrid>
      <ViewAllButton onClick={() => navigate("/pizza")}>
        Show all pizza
      </ViewAllButton>
    </Section>
  );
};

export default PizzaSection;
