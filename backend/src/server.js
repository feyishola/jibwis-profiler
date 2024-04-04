require("dotenv").config();
require("./connection/mongo.connection")();
const { appPort } = require("./config");
const express = require("express");
const cors = require("cors");

const app = express();

const facilityRoutes = require("./routes/facility.route");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/facility", facilityRoutes());

app.listen(appPort, () => {
  console.log("App listening on port: " + appPort);
});

module.exports = app;
