const mongoose = require("mongoose")

const galleryImagesSchema = mongoose.Schema(
  {
    ImageURL: {
      type: String,
      required: [true, "Please upload an image."],
    },
    ImageID: {
      type: String,
      required: [true, "Please upload an image."],
    },
    ImageName: {
      type: String,
      required: [true, "Please upload an image."],
    },
  },
  {
    timestamps: true,
  }
);

const GalleryImage = mongoose.model("GalleryImage", galleryImagesSchema);

module.exports = GalleryImage;
