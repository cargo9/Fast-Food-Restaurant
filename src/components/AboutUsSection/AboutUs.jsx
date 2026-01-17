import React from "react";
import {
  WelcomeContainer,
  MainTitle,
  RestaurantImage,
  ContentWrapper,
  WelcomeTitle,
  WelcomeText,
} from "./AboutUs.styled";

const AboutUsSection = () => {
  return (
    <>
      <MainTitle>About Us</MainTitle>
      <WelcomeContainer>
        <RestaurantImage
          src="https://www.trggroupltd.com/wp-content/uploads/2022/03/new-our0people-banner.jpg"
          alt="Restaurant Interior"
        />
        <ContentWrapper>
          <WelcomeText>
           Our team of chefs are professionals who combine experience, creativity and love for their work. They prepare each dish with quality ingredients, adhering to high standards of taste and presentation, so that every guest gets a real pleasure.
          </WelcomeText>
        </ContentWrapper>
      </WelcomeContainer>
    </>
  );
};

export default AboutUsSection;
