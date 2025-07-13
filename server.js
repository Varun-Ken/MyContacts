const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/contactRoutes");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();

const PORT = process.env.PORT || 3001;
const MONGODB_KEY  = process.env.MONGODB_KEY ;

mongoose.connect(MONGODB_KEY).then(() => {
  console.log("MongoDB is connected");
}).catch((error) => {
  console.log(`Error : ${error}`);
})
 
const app = express();

app.use(express.json());

app.use("/api/contacts", router);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
