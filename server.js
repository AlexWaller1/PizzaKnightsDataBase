const express = require("express");
const dotenv = require("dotenv").config();
const colors = require("colors");
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
const port = process.env.PORT || 3012;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/pizzaPlaces", require("./routes/pizzaPlaceRoutes"));

app.use(errorHandler);

app.listen(port, () => console.log(`Server Started on port ${port}`));
