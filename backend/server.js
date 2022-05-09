const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 8080;
const users = require("./db/users/users.controller");
const buckets = require("./db/buckets/buckets.controller");
const droplets = require("./db/droplets/droplets.controller");

const app = express();
//Middleware
app.use(express.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

//static files
app.use(express.static(path.join(__dirname, "../frontend/build")));

//user routes
app.get("/users", users.users);
app.get("/users/:id", users.user);
app.get("/user/buckets/:id", buckets.userBuckets);
app.post("/users/save", users.save);
app.post("users", users.save);

//bucket routes
app.get("/buckets", buckets.buckets);
app.get("/buckets/:id", buckets.bucket);
app.post("/buckets/save", buckets.save);
app.post("buckets", buckets.save);

//Droplet routes
app.get("/droplets", droplets.droplets);
app.get("/droplets/:id", droplets.droplet);
app.post("droplets/save", droplets.saveNew);
app.put("/droplets/save", droplets.update);
app.put("/droplets/status", droplets.status);

//Port
app.listen(PORT, () => {
  console.log(`There be a sever running on this here port: ${PORT}`);
});
