const express = require("express")
const Testimonial = require("../models/testiMonial")
const User = require("../models/userModel")
const GalleryImage = require("../models/galleryImages")

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

router.patch("/user", async (req, res) => {
    const data = req.body

    const eml = req.query.email

    const result = await User.findOneAndUpdate({email: eml}, data)
    
    res.status(201).send(result)
})

router.patch("/user-status", async (req, res) => {

    const id = req.query.id
    const statusValue = req.body.status

    const result = await User.findByIdAndUpdate(id, { status: statusValue }, { new: true });
    
    res.status(201).send(result)
})

router.get("/singleUser", async (req, res) => {

    const eml = req.query.email

    const result = await User.findOne({email: eml})
    
    res.status(201).send(result)
})

router.get("/user", async (req, res) => {
    const projection = { name: 1, email: 1, role: 1, photoUrl: 1, status: 1 };
    const result = await User.find({}, projection)

    res.status(201).send(result)
})

// User API End

// Gallery Image API

router.post("/gallery", async (req, res) => {

    const data = ImageURL = req.body
    const result = await GalleryImage.create(data)

    res.status(201).send(result)
})

router.get("/gallery", async (req, res) => {
    const result = await GalleryImage.find({})

    res.status(201).send(result)
})

// Gallery Image API End

module.exports = router;