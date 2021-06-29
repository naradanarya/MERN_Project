const router = require("express").Router();
const User = require("../models/User");

//Register
router.post("/register", async (req,res)=>{
    

   await user.save();
   res.send("ok")
});
router.get("/",(req,res)=>{
    res.send("Halo ini adalah Auth Route")
})

module.exports = router