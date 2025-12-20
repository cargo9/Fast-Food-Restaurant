import React from "react";
import "./App.css";

function App() {
  // Дані для прикладів
  const imageUrl =
    "https://mistokyia.ua/wp-content/uploads/2025/02/pizza-day-vidkryla-81-novyi-zaklad-1130x650.jpg";
    const pizzaFourChease = "https://uk.ooni.com/cdn/shop/articles/FourCheese_Resized.jpg?crop=center&height=800&v=1598453116&width=800";
  const productPrice = 10.99;

  const menuDishes = [
    { id: "id-1", name: "Pizza" },
    { id: "id-2", name: "Burgers" },
    { id: "id-3", name: "Sushi" },
    { id: "id-4", name: "frensh frise" },
  ];

  // Компоненти
  const Product = ({ imgUrl, name, price, quantity }) => (
    <div>
      <img src={imgUrl} alt={name} width="640" />
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
    <ul>
      {dishes.map((dish) => (
        <li key={dish.id}>{dish.name}</li>
      ))}
    </ul>
  );

  return (

    <div className="App">
      <h1>Fast Food Restaurant</h1>

      <section>
        <img src="https://vsn.ua/storage/news/ex7zjikzDUskXZbSMVBSomCIHcExa4OF3d3V6OkK.png" alt="" />
        <h2>Welcome to our fast food restaurant!</h2>
          <p>We serve fresh, tasty, and high-quality food made for people who love great flavor and quick service. Our menu includes juicy burgers, crispy fries, wraps, hot dogs, and refreshing drinks — all prepared with carefully selected ingredients.</p>
          <p>We believe fast food can be delicious and satisfying. Whether you are grabbing a quick lunch, meeting friends, or ordering takeaway, we make sure every meal is fast, affordable, and full of taste.</p>
          <p>Come hungry, leave happy — your favorite fast food is waiting for you!</p>
      </section>

      {/* Приклад елемента продукту */}
      <section>
        <h2>Pizza</h2>
        <div>
          <img src={imageUrl} alt="Pizza" width="640" />
          <h2>Pizza Peperoni</h2>
          <p>Price: {productPrice}$</p>
          <button type="button">Add to cart</button>
        </div>
      </section>

      {/* Компонент Product з умовним рендером */}
      <section>
        <h2>Pizza</h2>
        <Product
          imgUrl={pizzaFourChease}
          name="Pizza Four Chease"
          price={productPrice}
          quantity={15}
        />
      </section>

      {/* Mailbox з умовним рендером */}
      <section>
        <h2></h2>
        <Orders order={["msg1", "msg2"]} />
        {/* <Orders order={[]} /> */}
      </section>

      {/* Список книг з ключами */}
      <section>
        <h2>Our menu</h2>
        <MenuDishes dishes={menuDishes} />
      </section>

      {/* Фрагменти */}
      
    </div>
  );
}

export default App;
