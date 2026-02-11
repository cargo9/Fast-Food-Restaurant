import React from "react";
import { useCart } from "../../context/CartContext";
import {
  Card,
  CardImage,
  CardContent,
  CardTitle,
  CardDescription,
  CardPrice,
  AddButton,
} from "./FoodCard.styled";

const FoodCard = ({ id, name, price, imageUrl, description }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ id, name, price, imageUrl, description });
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
