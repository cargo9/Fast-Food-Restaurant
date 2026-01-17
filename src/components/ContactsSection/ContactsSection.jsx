import React from "react";
import {
  WelcomeContainer,
  MainTitle,
  RestaurantImage,
  ContentWrapper,
  WelcomeTitle,
  WelcomeText,
  MapIframe,
} from "./ContactsSection.styled";

const ContactsSection = () => {
  return (
    <>
      <MainTitle>Contacts</MainTitle>
      <WelcomeContainer>
       <MapIframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24102.5015792313!2d30.591752248203093!3d50.46176563351873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cffc0cebf305%3A0xcbb03de8b43c0bdc!2z0JzQsNC60JTQvtC90LDQu9GM0LTQtw!5e1!3m2!1suk!2sus!4v1768638881960!5m2!1suk!2sus" ></MapIframe>
        {/* <RestaurantImage
          src="https://www.trggroupltd.com/wp-content/uploads/2022/03/new-our0people-banner.jpg"
          alt="Restaurant Interior"
        /> */}
        <ContentWrapper>
          <WelcomeText>
           Броварський проспект, 27, Київ
          </WelcomeText>
                    <WelcomeText>
                     num: +38 (099) 123-45-67
                    </WelcomeText>
                    <WelcomeText>
                     mon-fri	8:00-22:00
                     sat-sun	9:00-22:00
                    </WelcomeText>
        </ContentWrapper>
      </WelcomeContainer>
    </>
  );
};

export default ContactsSection;
