// @description Get Pizza Places
// @route GET /api/pizzaPlaces
// @access Private
const getPizzaPlaces = (req, res) => {
  res.status(200).json({ message: "Get Pizza Places" });
};

// @description Post Pizza Places
// @route POST /api/pizzaPlaces
// @access Private
const postPizzaPlace = (req, res) => {
  res.status(200).json({ message: "Post Pizza Place" });
};

// @description Update Pizza Places
// @route PUT /api/pizzaPlaces/:id
// @access Private
const updatePizzaPlace = (req, res) => {
  res.status(200).json({ message: `Update Pizza Place ${req.params.id}` });
};

// @description Delete Pizza Places
// @route DELETE /api/pizzaPlaces/:id
// @access Private
const deletePizzaPlace = (req, res) => {
  res.status(200).json({ message: `Delete Pizza Place ${req.params.id}` });
};

module.exports = {
  getPizzaPlaces,
  postPizzaPlace,
  updatePizzaPlace,
  deletePizzaPlace
};
