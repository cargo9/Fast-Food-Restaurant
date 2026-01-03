import React from "react";
import { GlobalStyles } from "./styles/GlobalStyles";
import Header from "./components/Header/Header";
import WelcomeSection from "./components/WelcomeSection/WelcomeSection";
import PizzaSection from "./components/PizzaSection/PizzaSection";
import BurgerSection from "./components/BurgerSection/BurgerSection";

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <WelcomeSection />
      <PizzaSection />
      <BurgerSection />
    </>
  );
}

export default App;
