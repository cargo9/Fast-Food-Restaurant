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

  const menuDishes = [
    { id: "id-1", name: "Pizza" },
    { id: "id-2", name: "Burgers" },
    { id: "id-3", name: "Sushi" },
    { id: "id-4", name: "frensh frise" },
  ];

  // Компоненти
  const Product = ({ imgUrl, name, price, quantity }) => (
    <div>
      <img src={imgUrl} alt={name} width="640" className="product_img"/>
      <h2>{name}</h2>
      <p>Price: {price}$</p>
      <h3>Quantity: {quantity < 20 ? "Few left" : "In stock"}</h3>
      <button type="button">Add to cart</button>
    </div>
  );

  const Orders = ({order}) => (
    <div>
      <h1>My orders</h1>
      {order.length > 0 ? (
        <p>You have {order.length} order.</p>
      ) : (
        <p>Now no orders</p>
      )}
    </div>
  );

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
        <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/restaurant-logo-design-template-80b1da7e7f6651ca3c774a5fec4089bb_screen.jpg?ts=1625576767" alt="logo" className="logo_header"/>
        <MenuDishes dishes={menuDishes} />
      </section>

      <h1 className="main_title">Fast Food Restaurant</h1>

      <section>
        <img src="https://vsn.ua/storage/news/ex7zjikzDUskXZbSMVBSomCIHcExa4OF3d3V6OkK.png" alt="" className="photo_restorant"/>
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

      {/* Компонент Product з умовним рендером */}
      <section>
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
      </section>

      {/* Mailbox з умовним рендером */}
      <section>
        <h2></h2>
        <Orders order={["msg1", "msg2"]} />
        {/* <Orders order={[]} /> */}
      </section>

      {/* Список книг з ключами */}
     

      {/* Фрагменти */}
      
    </div>
  );
}

export default App;
