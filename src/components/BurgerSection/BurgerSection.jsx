import React from "react";
import { useNavigate } from "react-router-dom";
import FoodCard from "../FoodCard/FoodCard";
import { burgerData } from "../../data/burgerData";
import { Section, SectionTitle, FoodGrid } from "./BurgerSection.styled";
import { ViewAllButton } from "../ViewAllButton/ViewAllButton.styled";

const BurgerSection = () => {
  const navigate = useNavigate();

  return (
    <Section id="burgers">
      <SectionTitle>Burgers</SectionTitle>
      <FoodGrid>
        {burgerData.slice(0, 3).map((burger) => (
          <FoodCard
            key={burger.id}
            id={burger.id}
            name={burger.name}
            price={burger.price}
            imageUrl={burger.imageUrl}
            description={burger.description}
          />
        ))}
      </FoodGrid>
      <ViewAllButton onClick={() => navigate("/burgers")}>
        Показати всі бургери
      </ViewAllButton>
    </Section>
  );
};

export default BurgerSection;
