const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.post("/order", (req, res) => {
  const { items, total } = req.body;

  if (!items || items.length === 0) {
    return res.status(400).json({ message: "Корзина пустая" });
  }

  const order = {
    id: Date.now(),
    items,
    total,
    createdAt: new Date().toISOString(),
  };

  let orders = [];

  if (fs.existsSync("orders.json")) {
    orders = JSON.parse(fs.readFileSync("orders.json"));
  }

  orders.push(order);

  fs.writeFileSync("orders.json", JSON.stringify(orders, null, 2));

  res.status(200).json({
    message: "Ваш заказ принят",
  });
});

app.listen(PORT, () => {
  console.log(`✅ Backend running on http://localhost:${PORT}`);
});
