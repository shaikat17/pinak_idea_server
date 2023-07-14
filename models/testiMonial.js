const mongoose = require("mongoose")

const testiMonialSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please Enter Your Name."],
    },
    profession: {
      type: String,
      required: [true, "Please Enter Your Profession."],
    },
    message: {
      type: String,
      required: [true, "Please Enter Your Message."],
    },
    photoUrl: {
      type: String,
      required: [true, "Please Enter Your Photo URL."],
    },
    action: {
      type: String, default: "Pending"
    },
  },
  {
    timestamps: true,
  }
);

const Testimonial = mongoose.model("Testimonial", testiMonialSchema);

module.exports = Testimonial;
