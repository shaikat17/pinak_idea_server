const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    status: {
      type: String, default: "Pending"
    },
    email: {
      type: String,
    },
    phone_no: {
      type: String,
    },
    address: {
      type: String,
    },
    join_date: {
      type: String,
    },
    role: {
      type: String,
    },
    birth_date: {
      type: String,
    },
    about: {
      type: String,
    },
    photoUrl: {
      type: String,
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
