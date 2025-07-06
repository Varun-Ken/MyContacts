const router = require("express").Router()

router.get("/",(req,res)=>{
    res.status(200).json("Get All Contacts")
})

module.exports = router