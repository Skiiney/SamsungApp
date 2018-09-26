"use strict";
const mongoose = require("mongoose");

const noteSchema = mongoose.Schema(
  {
    titulo: String,
    mensagem: String
  }
);

// teste 
const materiaSchema = mongoose.Schema(
  {
    nome_materia: String,
    nome_prof: String,
    dia: String,
    notes: [noteSchema]
  }
);

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
