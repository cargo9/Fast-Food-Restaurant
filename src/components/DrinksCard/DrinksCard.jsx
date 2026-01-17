import React from "react";
import {
  Card,
  CardImage,
  CardContent,
  CardTitle,
  CardDescription,
  AddButton,
} from "../FoodCard/FoodCard.styled";

const DrinkCard = ({ name, imageUrl, description }) => {
  const handleAddToCart = () => {
    console.log(`Натиснуто кнопку!!!`);
  };

  return (
    <Card>
      <CardImage src={imageUrl} alt={name} />
      <CardContent>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <AddButton onClick={handleAddToCart}>Choose a drink</AddButton>
      </CardContent>
    </Card>
  );
};

export default DrinkCard;
