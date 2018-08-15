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
  timestamps: { 
    createdAt: 'created_at', 
    updatedAt: 'updated_at' 
  }});

module.exports = mongoose.model("user", userSchema);
