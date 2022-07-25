const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const newsletterSchema = new Schema(
  {
    title: String,
    descriptions: String,
    imgName: String,
    imgPath: String,
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

const Newsletter = mongoose.model("Newsletter", newsletterSchema);
module.exports = Newsletter;
