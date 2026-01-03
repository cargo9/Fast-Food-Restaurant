import React from "react";
import {
  WelcomeContainer,
  MainTitle,
  RestaurantImage,
  ContentWrapper,
  WelcomeTitle,
  WelcomeText,
} from "./WelcomeSection.styled";

const WelcomeSection = () => {
  return (
    <>
      <MainTitle>Fast Food Restaurant</MainTitle>
      <WelcomeContainer>
        <RestaurantImage
          src="https://static.tildacdn.com/tild3131-3862-4636-b433-666432393133/interier-restorana.jpg"
          alt="Restaurant Interior"
        />
        <ContentWrapper>
          <WelcomeTitle>Welcome to our fast food restaurant!</WelcomeTitle>
          <WelcomeText>
            We serve fresh, tasty, and high-quality food made for people who
            love great flavor and quick service. Our menu includes juicy
            burgers, crispy fries, wraps, hot dogs, and refreshing drinks — all
            prepared with carefully selected ingredients.
          </WelcomeText>
          <WelcomeText>
            We believe fast food can be delicious and satisfying. Whether you
            are grabbing a quick lunch, meeting friends, or ordering takeaway,
            we make sure every meal is fast, affordable, and full of taste.
          </WelcomeText>
          <WelcomeText>
            Come hungry, leave happy — your favorite fast food is waiting for
            you!
          </WelcomeText>
        </ContentWrapper>
      </WelcomeContainer>
    </>
  );
};

export default WelcomeSection;
