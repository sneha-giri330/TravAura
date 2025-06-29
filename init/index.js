const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/travaura";

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({ ...obj, owner: "6855973b661b7246f44d58a2" }));  //Adds owner id to each listing from the data.js file (since map will create a new array and add the owner but we want to modify the existing array so we will save it in the same variable)
  await Listing.insertMany(initData.data);
  console.log("data was initialized");
};

initDB();