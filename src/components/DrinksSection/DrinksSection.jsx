import React from "react";
import DrinkCategoryCard from "../DrinkCategoryCard/DrinkCategoryCard";
import { Section, SectionTitle, FoodGrid } from "./DrinksSection.styled";

const drinkCategories = [
  {
    id: "category-1",
    name: "Soda",
    imageUrl:
      "https://burgernj.com/wp-content/uploads/2021/05/Soft-Drinks_result.jpg",
    description: "Cold and sweet drinks",
    route: "/drinks/soda",
    buttonText: "Choose a Soda",
  },
  {
    id: "category-2",
    name: "Coffee",
    imageUrl:
      "https://st.depositphotos.com/1020804/1263/i/450/depositphotos_12638853-stock-photo-coffee-cup-and-beans.jpg",
    description: "Hot coffee drinks",
    route: "/drinks/coffee",
    buttonText: "Choose a Coffee",
  },
  {
    id: "category-3",
    name: "Tea",
    imageUrl:
      "https://www.verywellhealth.com/thmb/wOpYMxG1V_VxYcp4iJRmxRO4lZc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-693893647-588d21e413dd411cb1f2b0a0ea3e02da.jpg",
    description: "Hot tea selection",
    route: "/drinks/tea",
    buttonText: "Choose a Tea",
  },
];

const DrinksSection = () => {
  return (
    <Section>
      <SectionTitle>Drinks</SectionTitle>
      <FoodGrid>
        {drinkCategories.map((category) => (
          <DrinkCategoryCard
            key={category.id}
            name={category.name}
            imageUrl={category.imageUrl}
            description={category.description}
            route={category.route}
            buttonText={category.buttonText}
          />
        ))}
      </FoodGrid>
    </Section>
  );
};

export default DrinksSection;
