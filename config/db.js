const mongoose = require("mongoose");

const connectDB =  () => {
  // try {
  //   mongoose.connect("mongodb://localhost:27017");
  //   console.log("MongoDB connected!!");
  // } catch (error) {
  //   console.log("Failed to connect to MongoDB", error);
  // }
  mongoose
    .connect("mongodb+srv://sai:sai@cluster0.5orxunn.mongodb.net/?retryWrites=true&w=majority", {
      dbName: "testDb",
    })
    .then(() => console.log("database connected successfully"))
    .catch((error) => console.log("error:", error));
};


// import mongoose from "mongoose";
// const connectDB = () => {

//   mongoose
//   .connect("mongodb://localhost:27017", {
//     dbName: "backendapi",
//   })
//   .then(() => console.log("database connected successfully"))
//   .catch((error) => console.log(error));
// };
module.exports = connectDB;