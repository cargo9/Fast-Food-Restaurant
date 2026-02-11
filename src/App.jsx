import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalStyles } from "./styles/GlobalStyles";
import { CartProvider } from "./context/CartContext";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import CartModal from "./components/CartModal/CartModal";
import HomePage from "./pages/HomePage";
import PizzaPage from "./pages/PizzaPage";
import BurgersPage from "./pages/BurgersPage";
import SushiPage from "./pages/SushiPage";
import FrenchFriesPage from "./pages/FrenchFriesPage";
import DrinksPage from "./pages/DrinksPage";
import DessertsPage from "./pages/DessertsPage";
import SodaPage from "./pages/SodaPage";
import CoffeePage from "./pages/CoffeePage";
import TeaPage from "./pages/TeaPage";

function App() {
  return (
    <Router basename="/fast-food-restaurant">
      <CartProvider>
        <GlobalStyles />
        <Header />
        <CartModal />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pizza" element={<PizzaPage />} />
          <Route path="/burgers" element={<BurgersPage />} />
          <Route path="/sushi" element={<SushiPage />} />
          <Route path="/french-fries" element={<FrenchFriesPage />} />
          <Route path="/drinks" element={<DrinksPage />} />
          <Route path="/drinks/soda" element={<SodaPage />} />
          <Route path="/drinks/coffee" element={<CoffeePage />} />
          <Route path="/drinks/tea" element={<TeaPage />} />
          <Route path="/desserts" element={<DessertsPage />} />
        </Routes>
        <Footer />
      </CartProvider>
    </Router>
  );
}

export default App;
