"use strict";
const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: String,
  lasname: String,
  email: {
    type: String,
    unique: true
  },
  password: String,
  time: { type: Date, default: Date.now }
});

module.exports = mongoose.model("user", userSchema);
