import React from "react";
import "./App.css";

function App() {
  // Дані для прикладів
  const imageUrl =
    "https://mistokyia.ua/wp-content/uploads/2025/02/pizza-day-vidkryla-81-novyi-zaklad-1130x650.jpg";
    const pizzaFourChease = "https://uk.ooni.com/cdn/shop/articles/FourCheese_Resized.jpg?crop=center&height=800&v=1598453116&width=800";
    const pizzaPhiladeph = "https://www.unileverfoodsolutions.co.id/dam/global-ufs/mcos/SEA/calcmenu/recipes/ID-recipes/sacks/Margherita-Pizza/Pizza%20Margaretha%20(Recipe%20Page).jpg"
  const productPrice = 10.99;
  const pricePhiladelph = 7;

  const burgerPhoto = "https://www.realsimple.com/thmb/z3cQCYXTyDQS9ddsqqlTVE8fnpc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/real-simple-mushroom-black-bean-burgers-recipe-0c365277d4294e6db2daa3353d6ff605.jpg";
  const burgerPrice ="5.78"

  const smallBurger = "https://thumbs.dreamstime.com/b/fast-food-small-burger-white-background-simple-burger-isolated-white-background-138709798.jpg";
  const smallBurgerPrice = "3.00";

  const veganBurger ="https://drinks.ua/wp-content/uploads/2019/05/burger-vegan.jpg";
  const veganBurgerPrice = "3.50"

  const menuDishes = [
    { id: "id-1", name: "Pizza" },
    { id: "id-2", name: "Burgers" },
    { id: "id-3", name: "Sushi" },
    { id: "id-4", name: "Frensh Frise" },
  ];

  // Компоненти
  // const Product = ({ imgUrl, name, price, quantity }) => (
  //   <div>
  //     <img src={imgUrl} alt={name} width="640" className="product_img"/>
  //     <h2>{name}</h2>
  //     <p>Price: {price}$</p>
  //     <h3>Quantity: {quantity < 20 ? "Few left" : "In stock"}</h3>
  //     <button type="button">Add to cart</button>
  //   </div>
  // );

  // const Orders = ({order}) => (
  //   <div>
  //     <h1>My orders</h1>
  //     {order.length > 0 ? (
  //       <p>You have {order.length} order.</p>
  //     ) : (
  //       <p>Now no orders</p>
  //     )}
  //   </div>
  // );

  const MenuDishes = ({ dishes }) => (
    <ul className="menu_dishes">
      {dishes.map((dish) => (
        <li className="menu_li" key={dish.id}>{dish.name}</li>
      ))}
    </ul>
  );

  return (

    
    <div className="App">

       <section className="section_header">
        <img src="https://www.creativefabrica.com/wp-content/uploads/2019/10/11/Minimalist-Restaurant-Logo-by-Murnify-4.jpg" alt="logo" className="logo_header"/>
        <MenuDishes dishes={menuDishes} />
      </section>

      <h1 className="main_title">Fast Food Restaurant</h1>

      <section className="welcome_section">
        <img src="https://static.tildacdn.com/tild3131-3862-4636-b433-666432393133/interier-restorana.jpg" alt="" className="photo_restorant"/>
        <h2 className="welcome_title">Welcome to our fast food restaurant!</h2>
          <p className="welcome_text">We serve fresh, tasty, and high-quality food made for people who love great flavor and quick service. Our menu includes juicy burgers, crispy fries, wraps, hot dogs, and refreshing drinks — all prepared with carefully selected ingredients.</p>
          <p className="welcome_text">We believe fast food can be delicious and satisfying. Whether you are grabbing a quick lunch, meeting friends, or ordering takeaway, we make sure every meal is fast, affordable, and full of taste.</p>
          <p className="welcome_text">Come hungry, leave happy — your favorite fast food is waiting for you!</p>
      </section>

      {/* Приклад елемента продукту */}
      <section>
        
        <h2>Pizza</h2>
        <div className="pizza_list">
        <div className="pizza_card">
          <img src={imageUrl} alt="Pizza" width="640" />
          <h2>Pizza Peperoni</h2>
          <p>Price: {productPrice}$</p>
          <button className="pizza_btn" type="button">Add to cart</button>
        </div>
        <div className="pizza_card">
          <img src={pizzaPhiladeph} alt="Pizza" width="640" />
          <h2>Pizza Peperoni</h2>
          <p>Price: {productPrice}$</p>
          <button className="pizza_btn" type="button">Add to cart</button>
        </div>
         <div className="pizza_card">
          <img src={pizzaPhiladeph} alt="Pizza" width="640" />
          <h2>Pizza Peperoni</h2>
          <p>Price: {productPrice}$</p>
          <button className="pizza_btn" type="button">Add to cart</button>
        </div>
         <div className="pizza_card">
          <img src={pizzaPhiladeph} alt="Pizza" width="640" />
          <h2>Pizza Peperoni</h2>
          <p>Price: {productPrice}$</p>
          <button className="pizza_btn" type="button">Add to cart</button>
        </div>
        </div>
      </section>

      <section>
        <div className="burger_list">
          <div className="burger_card">
            <img src={burgerPhoto} alt="photo" />
            <h2>Big Burger</h2>
            <p>Price: {burgerPrice}$</p>
            <button className="burger_btn" type="button">
              Add to cart
            </button>
          </div>
          <div className="burger_card">
            <img src={smallBurger} alt="photo" />
            <h2>small Burger</h2>
            <p>Price: {smallBurgerPrice}$</p>
            <button className="burger_btn" type="button">
              Add to cart
            </button>
          </div>
          <div className="burger_card">
            <img src={veganBurger} alt="photo" />
            <h2>Vegan Burger</h2>
            <p>Price: {veganBurgerPrice}$</p>
            <button className="burger_btn" type="button">
              Add to cart
            </button>
          </div>
          <div className="burger_card">
            <img src={burgerPhoto} alt="photo" />
            <h2>Big Burger</h2>
            <p>Price: {burgerPrice}$</p>
            <button className="burger_btn" type="button">
              Add to cart
            </button>
          </div>
        </div>
      </section>

      {/* Компонент Product з умовним рендером */}
      {/* <section>
        <h2>Pizza</h2>
        <div className="products_list">
        <Product
          imgUrl={pizzaFourChease}
          name="Pizza Four Chease"
          price={productPrice}
          quantity={15}
        />
        <Product
          imgUrl={pizzaPhiladeph}
          name="Pizza Four Chease"
          price={pricePhiladelph}
          quantity={15}
        />
        </div>
      </section> */}

      {/* Mailbox з умовним рендером */}
      {/* <section>
        <h2></h2>
        <Orders order={["msg1", "msg2"]} /> */}
        {/* <Orders order={[]} /> */}
      {/* </section> */}

      {/* Список книг з ключами */}
     

      {/* Фрагменти */}
      
    </div>
  );
}

export default App;
