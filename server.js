const express = require("express")
const dotenv = require("dotenv").config()

const PORT = process.env.PORT || 3001

const contactRouter = require("./routes/contactRoutes")

const app = express()

app.use("/api/contacts/",contactRouter)

app.listen(PORT,()=>{
    console.log(`Server running on ${PORT}`);
})


