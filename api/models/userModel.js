"use strict";
const mongoose = require("mongoose");
const bcrypt = require('bcryptjs')

const userSchema = mongoose.Schema(
  {
    name: String,
    lastname: String,
    email: {
      type: String,
      unique: true
    },
    password: String,
    hash: String
  },
  { timestamps: true }
);

userSchema.methods.generateHash = password =>
  bcrypt.hashSync(password, bcrypt.genSalt(), null);
userSchema.methods.validPassword = password =>
  bcrypt.compareSync(password, this.password);

module.exports = mongoose.model("user", userSchema);
