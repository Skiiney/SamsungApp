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
    materias: [materiaSchema]
  },
  { timestamps: true }
);

module.exports = mongoose.model("user", userSchema);

const materiaSchema = moongose.Schema(
  {
    nome_materia: String,
    nome_prof: String,
    dia: String,
    notes: [noteSchema]
  }
);

const noteSchema = moongose.Schema(
  {
    titulo: String,
    mensagem: String
  }
);
