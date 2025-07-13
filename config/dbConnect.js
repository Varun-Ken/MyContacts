const mongoose = require("mongoose")

const connectDB = async(MONGODB_KEY) => {
    try {
        const connect = await mongoose.connect(MONGODB_KEY)
        console.log("Database Connected :", connect.connection.host, connect.connection.name)
    } catch (error) {
        console.log("Database Connection Error :", error);
        process.exit(1)
    }
}

module.exports = connectDB
