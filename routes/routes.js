const express = require("express")
const Testimonial = require("../models/testiMonial")

const router = express.Router()

router.get("/testimonial", async(req, res) => {
    const result = await Testimonial.find({})
    res.status(200).send(result)
})

router.post("/testimonial", async(req, res) => {
    const data = req.body

    const result = await Testimonial.create(data)
    res.status(201).send(result)
})

module.exports = router;