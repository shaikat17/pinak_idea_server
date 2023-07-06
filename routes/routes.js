const express = require("express")
const Testimonial = require("../models/testiMonial")
const User = require("../models/userModel")

const router = express.Router()

// Testimonial API Start
router.get("/testimonial", async(req, res) => {
    const result = await Testimonial.find({})
    res.status(200).send(result)
})

router.post("/testimonial", async (req, res) => {
    const data = req.body

    const result = await Testimonial.create(data)
    res.status(201).send(result)
})

router.post("/testimonial", async (req, res) => {
    const data = req.body

    const result = await Testimonial.create(data)
    res.status(201).send(result)
})

// Testimonial API End


// User API Start
router.post("/user", async (req, res) => {
    const data = req.body

    const result = await User.create(data)
    
    res.status(201).send(result)
})

// User API End

module.exports = router;