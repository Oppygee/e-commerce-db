const express = require("express");
const connectDB = require("./src/config/db");
require("dotenv").config();
displayRoutes = require("express-routemap");
const app = express();
const port = process.env.port;

app.use(express.json());

app.listen(port, () => {
  console.log(`server running on http://localhost:${port}`);

  displayRoutes(app);
  connectDB();
});
app.get("/", (req, res) => res.send("This is the next big thing!"));

app.get("/", (req, res) => {
  res.status(400).json({
    status: "error",
    message: "sorry!, what you are looking for is not in this planet",
  });
});
