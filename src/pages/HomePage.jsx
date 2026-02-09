import React from "react";
import WelcomeSection from "../components/WelcomeSection/WelcomeSection";
import AboutUsSection from "../components/AboutUsSection/AboutUs";
import PromoSection from "../components/PromoSection/PromoSection";
import PizzaSection from "../components/PizzaSection/PizzaSection";
import BurgerSection from "../components/BurgerSection/BurgerSection";
import SushiSection from "../components/SushiSection/SushiSection";
import FrenchFriesSection from "../components/FrenchFriesSection/FrenchFriesSection";
import DrinksSection from "../components/DrinksSection/DrinksSection";
import DesurtSection from "../components/Desurts/Desurts";
import ContactsSection from "../components/ContactsSection/ContactsSection";

const HomePage = () => {
  return (
    <>
      <WelcomeSection />
      <AboutUsSection />
      <PromoSection />
      <PizzaSection />
      <BurgerSection />
      <SushiSection />
      <FrenchFriesSection />
      <DrinksSection />
      <DesurtSection />
      <ContactsSection />
    </>
  );
};

export default HomePage;
