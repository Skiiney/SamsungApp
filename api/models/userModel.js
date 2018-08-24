"use strict";
const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
    type: String,
    required: true
    },
    lastname: {
    type: String,
    required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
    type: String,
    required: true
    },
    { timestamps: true }
);

module.exports = mongoose.model("user", userSchema);

const materiasSchema = mongoose.Schema(
  {
	nome_materia:{
      type: String,
	  required: true
	}
	
	nome_prof:{
	  type: String,
	  required: true
	}
	
	
	{
	dias:
	[{
	name: "Segunda",
    	type: Boolean},
	
   {name: "Terça",
    type: Boolean,}
	
   {name: "Quarta",
    type: Boolean,}
	
   {name: "Quinta",
    type: Boolean,}
	
   {name: "Sexta",
    type: Boolean,}
	
   {name: "Sabado",
    type: Boolean,}
	
   {name: "Domingo",
    type: Boolean,}
 
  ]

  },
  {timestamps: true}
 );

}
