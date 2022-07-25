const express = require("express");
const router = express.Router();
const {
  getPizzaPlaces,
  postPizzaPlace,
  updatePizzaPlace,
  deletePizzaPlace
} = require("../controllers/pizzaPlacesController");

router.get("/", getPizzaPlaces);

router.post("/", postPizzaPlace);

router.put("/:id", updatePizzaPlace);

router.delete("/:id", deletePizzaPlace);

module.exports = router;
