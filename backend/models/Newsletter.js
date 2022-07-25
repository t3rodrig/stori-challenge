const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const newsletterSchema = new Schema(
  {
    title: String,
    descriptions: String,
    imageUrl: String,
  },
  {
    timestamps: true
  }
);

module.exports = model("Newsletter", newsletterSchema);
