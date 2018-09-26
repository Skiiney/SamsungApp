"use strict";
import {
  Schema,
  model
} from "mongoose";

const noteSchema = Schema({
  titulo: String,
  mensagem: String
});

// teste 
const materiaSchema = Schema({
  nome_materia: String,
  nome_prof: String,
  dia: String,
  notes: [noteSchema]
});

const userSchema = Schema({
  name: {
    type: String,
    required: true
  },
  lastname: String,
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  materias: [materiaSchema]
}, {
  timestamps: true
});

export default model("user", userSchema);