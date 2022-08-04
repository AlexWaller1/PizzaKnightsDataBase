const asyncHandler = require("express-async-handler");

const PizzaPlace = require("../models/pizzaPlaceModel");
// @description Get Pizza Places
// @route GET /api/pizzaPlaces
// @access Private
const getPizzaPlaces = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get Pizza Places" });
});

// @description Post Pizza Places
// @route POST /api/pizzaPlaces
// @access Private
const postPizzaPlace = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }
  res.status(200).json({ message: "Post Pizza Place" });
});

// @description Update Pizza Places
// @route PUT /api/pizzaPlaces/:id
// @access Private
const updatePizzaPlace = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update Pizza Place ${req.params.id}` });
});

// @description Delete Pizza Places
// @route DELETE /api/pizzaPlaces/:id
// @access Private
const deletePizzaPlace = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete Pizza Place ${req.params.id}` });
});

module.exports = {
  getPizzaPlaces,
  postPizzaPlace,
  updatePizzaPlace,
  deletePizzaPlace
};
