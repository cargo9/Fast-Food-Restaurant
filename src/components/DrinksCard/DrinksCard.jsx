import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardImage,
  CardContent,
  CardTitle,
  CardDescription,
  AddButton,
} from "../FoodCard/FoodCard.styled";

const DrinkCard = ({ id, name, imageUrl, description }) => {
  const navigate = useNavigate();

  const handleChooseDrink = () => {
    navigate("/drinks");
  };

  return (
    <Card>
      <CardImage src={imageUrl} alt={name} />
      <CardContent>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <AddButton onClick={handleChooseDrink}>Choose a drink</AddButton>
      </CardContent>
    </Card>
  );
};

export default DrinkCard;
