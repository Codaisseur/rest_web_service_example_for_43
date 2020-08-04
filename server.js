const express = require("express");
const app = express();

const { treelocation } = require("./models");

app.use(express.json());

app.get("/", async (req, res) => {
  const trees = await treelocation.findAll();
  res.send(trees);
});

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`🚀 Server started at port ${PORT}!`);
});
