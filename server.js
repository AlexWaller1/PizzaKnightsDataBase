const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 3012;

const app = express();

app.use(express.json());

app.use("/api/pizzaPlaces", require("./routes/pizzaPlaceRoutes"));

app.listen(port, () => console.log(`Server Started on port ${port}`));
