require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const PORT = process.env.PORT;

//setup app & its routes
const app = express();
app.use(cors());

//Request Parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const routes = require("./routes/index.route");
app.use(routes);

//start http server
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
module.exports = { app };
