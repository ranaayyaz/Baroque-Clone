const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded());

// parse application/json
app.use(bodyParser.json());

// Enable CORS for access from different origins/frontends
app.use(cors("*"));

require("./database/connection");

//User Routes
var userRoutes = require("./Routes/userRoutes");
app.use("/users", userRoutes);

app.set("secretKey", "Im a Fullstack web developer 7613341 &&8326&^&%^*(%#");

app.listen(7777, () => {
  console.log("Server is running on port 7777");
});
