const express = require("express");
const router = require("./routes/contactRoutes");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json())

app.use("/api/contacts", router);
app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
