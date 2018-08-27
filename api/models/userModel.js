"use strict";
const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {type: String, required: true},
    lastname: String,
    email: {
      type: String,
      unique: true,
      required: true
    },
    password: {type: String, required: true},
    // hash: String
  },
  { timestamps: true }
);

module.exports = mongoose.model("user", userSchema);
