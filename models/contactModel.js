const mongoose = require("mongoose")

const contactSchema = mongoose.Schema({
    name : {
        type:String,
        required : [true, "Please add the name for the contact"],
        unique : [true, "Contact name is already registered"],
    },
    email:{
        type: String,
        required : [true, "Please add Email ID for the contact"],
        unique : [true, "Email ID is already registered"],
    },
    phone:{
        type: String,
        required : [true, "Please add Phone number for the contact"],
        unique : [true, "Phone number is already registered"],
    },
},{
    timestamps : true
})

module.exports = mongoose.model("Contact",contactSchema)

