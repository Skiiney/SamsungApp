"use strict";
const mongoose = require("mongoose");
// const bcrypt = require('bcryptjs')

const userSchema = mongoose.Schema(
  {
    name: String,
    lastname: String,
    email: {
      type: String,
      unique: true
    },
    password: String,
    // hash: String
  },
  { timestamps: true }
);

/*
userSchema.methods.generateHash = password =>
  bcrypt.hashSync(password, bcrypt.genSalt(10));
userSchema.methods.validPassword = password =>
  bcrypt.compareSync(password, this.password);
*/
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

