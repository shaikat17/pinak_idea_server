const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please Enter Your Name."],
    },
    email: {
      type: String,
      required: [true, "Please Enter Your Email."],
    },
    phone_no: {
      type: String,
      required: [true, "Please Enter Your Phone No."],
    },
    address: {
      type: String,
      required: [true, "Please Enter Your Address."],
    },
    join_date: {
      type: String,
      required: [true, "Please Enter Your Join Date."],
    },
    role: {
      type: String,
      required: [true, "Please Enter Your Role."],
    },
    birth_date: {
      type: String,
      required: [true, "Please Enter Your Birth Date."],
    },
    about: {
      type: String,
      required: [true, "Please Enter Something About Yourself."],
    },
    photoUrl: {
      type: String,
      required: [true, "Please Enter Your Photo URL."],
    },
    facebook: {
      type: String,
    },
    linkedin: {
      type: String,
    },
    twitter: {
      type: String,
    },
    github: {
      type: String,
    },
    instra: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
