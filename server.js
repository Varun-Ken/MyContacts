const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/contactRoutes");
const errorHandler = require("./middleware/errorHandler");
const connectDB = require("./config/dbConnect")
const dotenv = require("dotenv").config();

const PORT = process.env.PORT || 3001;
const MONGODB_KEY  = process.env.MONGODB_KEY ;
 
connectDB(MONGODB_KEY)
const app = express();

app.use(express.json());

app.use("/api/contacts", router);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});


