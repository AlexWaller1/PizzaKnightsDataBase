const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send({ message: "Get Pizza Places" });
});

router.post("/", (req, res) => {
  res.send({ message: "Post Pizza Places" });
});

router.put("/:id", (req, res) => {
  res.send({ message: `Update Pizza Place ${req.params.id}` });
});

router.delete("/:id", (req, res) => {
  res.send({ message: `Delete Pizza Place ${req.params.id}` });
});

module.exports = router;
