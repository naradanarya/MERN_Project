const router = require("express").Router()

router.get("/",(req,res)=>{
    res.send("Halo ini adalah User Route")
})

module.exports = router