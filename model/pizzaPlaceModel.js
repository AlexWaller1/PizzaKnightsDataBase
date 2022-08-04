const mongoose = require("mongoose");

const pizzaPlaceShema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a name value"]
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Pizza Place", pizzaPlaceShema);
