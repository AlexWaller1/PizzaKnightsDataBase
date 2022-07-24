const express = require("express");
const dotenv = require("dotenv").config();
const port = 3012;

const app = express();

app.listen(port, () => console.log(`Server Started on port ${port}`));
