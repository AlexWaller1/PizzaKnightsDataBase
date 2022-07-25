const express = require("express");
const router = express.Router();
const {
  getPizzaPlaces,
  postPizzaPlace,
  updatePizzaPlace,
  deletePizzaPlace
} = require("../controllers/pizzaPlacesController");

router.route("/").get(getPizzaPlaces).post(postPizzaPlace);

router.route("/:").delete(deletePizzaPlace).put(updatePizzaPlace);

module.exports = router;
