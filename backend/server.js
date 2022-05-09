const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 8080;
const users = require("./db/users/users.controller");
const buckets = require("./db/buckets/buckets.controller");
const droplets = require("./db/droplets/droplets.controller");

const app = express();
app.use(express.json());

app.use(express.static(path.join(__dirname, "../frontend/build")));

//user routes
app.get("/users", users.users);
app.get("/users/:id", users.user);
app.post("/users/save", users.save);

//bucket routes
app.get("/buckets", buckets.buckets);
app.get("/buckets/:id", buckets.bucket);
app.post("/buckets/save", buckets.save);

//Droplet routes
app.get("/droplets", droplets.droplets);
app.get("/droplets/:id", droplets.droplets);
app.post("droplets/save", droplets.saveNew);
app.put("/droplets/save", droplets.update);
app.put("/droplets/status", droplets.status);
app.app.listen(PORT, () => {
  console.log(`There be a sever running on this here port: ${PORT}`);
});
