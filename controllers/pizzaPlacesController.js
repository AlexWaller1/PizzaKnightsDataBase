const getPizzaPlaces = (req, res) => {
  res.status(200).json({ message: "Get Pizza Places" });
};

module.exports = {
  getPizzaPlaces
};
