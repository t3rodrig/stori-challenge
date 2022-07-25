const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, trim: true, required: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true
  }
);

module.exports = model("User", userSchema);
