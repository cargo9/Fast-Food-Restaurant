import React from "react";
import { GlobalStyles } from "./styles/GlobalStyles";
import Header from "./components/Header/Header";
import WelcomeSection from "./components/WelcomeSection/WelcomeSection";
import PizzaSection from "./components/PizzaSection/PizzaSection";
import BurgerSection from "./components/BurgerSection/BurgerSection"
import SushiSection from "./components/SushiSection/SushiSection";
import FrenchFriesSection from "./components/FrenchFriesSection/FrenchFriesSection";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <WelcomeSection />
      <PizzaSection />
      <BurgerSection />
      <SushiSection />
      <FrenchFriesSection />
      <Footer />
    </>
  );
}

export default App;
