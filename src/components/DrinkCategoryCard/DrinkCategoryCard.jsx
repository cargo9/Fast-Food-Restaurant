import React from "react";
import { useNavigate } from "react-router-dom";
import {
  CategoryCard,
  CategoryImage,
  CategoryContent,
  CategoryTitle,
  CategoryDescription,
  ChooseButton,
} from "./DrinkCategoryCard.styled";

const DrinkCategoryCard = ({
  name,
  imageUrl,
  description,
  route,
  buttonText,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(route);
  };

  return (
    <CategoryCard>
      <CategoryImage src={imageUrl} alt={name} />
      <CategoryContent>
        <CategoryTitle>{name}</CategoryTitle>
        <CategoryDescription>{description}</CategoryDescription>
        <ChooseButton onClick={handleClick}>{buttonText}</ChooseButton>
      </CategoryContent>
    </CategoryCard>
  );
};

export default DrinkCategoryCard;
