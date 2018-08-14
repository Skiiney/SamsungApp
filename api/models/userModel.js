"use strict";
const mongoose = require("mongoose");

const userSchema =  mongoose.Schema({
  name: {
    type: String
  },
  lasname: {
    type: String
  },
  email: {
    type: String,
    unique: true
  },
  password: {
    type: String
  },
  Created_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("user", userSchema);
