const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 8080;

const app = express();
app.use(express.json());

app.use(express.static(path.join(__dirname, "../frontend/build")));

app.listen(PORT, () => {
  console.log(`There be a sever running on this here port: ${PORT}`);
});
