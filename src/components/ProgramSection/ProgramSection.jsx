import React from "react";
import {
  WelcomeContainer,
  MainTitle,
  RestaurantImage,
  ContentWrapper,
  WelcomeTitle,
  WelcomeText,
} from "./AboutUs.styled";

const ProgramSection = () => {
  return (
    <>
      <MainTitle>Our loyalty program!!!</MainTitle>
      <WelcomeContainer>
        <RestaurantImage
          src="https://www.trggroupltd.com/wp-content/uploads/2022/03/new-our0people-banner.jpg"
          alt="Restaurant Interior"
        />
        <ContentWrapper>
                  <WelcomeTitle>Join the our program and receive exclusive bonuses!</WelcomeTitle>
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

export default ProgramSection;
