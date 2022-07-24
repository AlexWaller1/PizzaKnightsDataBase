const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 3012;

const app = express();

app.get("/api/pizzaPlaces", (req, res) => {
  res.send({ message: "Get Pizza Places" });
});

app.listen(port, () => console.log(`Server Started on port ${port}`));
