const mongoose = require("mongoose");
const { mongoURI } = require("../config");

module.exports = async () => {
  dbConn = mongoose.connection;
  dbConn
    .on("connected", () => {
      console.log("Connected to mongoDb");
    })
    .on("connecting", () => {
      console.log("connecting to mongo");
    })
    .on("error", (error) => {
      console.log(`error connecting to mongoDb >> ${error.message}`);
    })
    .on("disconnected", () => {
      console.log("disconnected from mongo");
      setTimeout(async () => {
        console.log("reconnecting to mongo");
        await mongoose.connect(mongoURI);
      }, 5000);
    });
  await mongoose.connect(mongoURI);
};
