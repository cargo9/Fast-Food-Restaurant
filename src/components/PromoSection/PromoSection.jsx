import React from "react";
import {
  PromoContainer,
  PromoTitle,
  PromoImage,
  PromoWrapper,
  PromoText,
} from "./PromoSection.styled";

const PromoSection = () => {
  return (
    <>
      <PromoTitle>Promotion</PromoTitle>
      <PromoContainer>
        <PromoImage
          src="https://media-v3.dominos.ua/Promotions/zahalni%20-%20dlia%20vsikh%20rehioniv/2026/01/Bilshe%20pitsy/morepizza-promo-pc-eng.webp"
          
          alt="Restaurant Interior"
        />
        <PromoImage src="https://www.shutterstock.com/image-vector/sushi-restaurant-banner-design-template-260nw-2505829615.jpg" />

    
      </PromoContainer>
    </>
  );
};

export default PromoSection;
