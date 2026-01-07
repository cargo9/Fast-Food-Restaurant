import React from "react";
import {
  Card,
  CardImage,
  CardContent,
  CardTitle,
  CardDescription,
  CardPrice,
  AddButton,
} from "./FoodCard.styled";

const FoodCard = ({ name, price, imageUrl, description }) => {
  const handleAddToCart = () => {
    console.log(`Added ${name} to cart`);
  };

  return (
    <Card>
      <CardImage src={imageUrl} alt={name} />
      <CardContent>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <CardPrice>${price}</CardPrice>
        <AddButton onClick={handleAddToCart}>Add to cart</AddButton>
      </CardContent>
    </Card>
  );
};

export default FoodCard;
