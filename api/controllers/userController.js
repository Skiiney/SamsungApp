"use strict";
const User = require("../models/userModel");
// const bcrypt = require('bcryptjs')

exports.list_all_users = (req, res) => {
  User.find()
    .then(users => res.send(users))
    .catch(err => res.status(500).send({ message: err.message }));
};

exports.create_user = (req, res) => {
let pass = req.body.password;

  console.log(req.body)
    // console.log(bcrypt.hashSync(pass, bcrypt.genSalt(10)))
  const user = new User({
    name: req.body.name,
    lastname: req.body.lastname,
    email: req.body.email,
    password: req.body.password
  });

  user
    .save()
    .then(data => res.send(data))
    .catch(err => res.status(500).send({ message: err.message }));
};

exports.read_user = (req, res) => {

  user
    .findOne({username = user.username, password = user.password}, function(err, user){
    if(err) {
        console.log(err);
        return res.status(500).send();
    }

    if(!user) {
        return res.status(404).send()
    }

    return res.status(200).send();
  })
};

exports.update_user = (req, res) => {
  Message.findOneAndUpdate(
    { _id: req.params.userId },
    req.body,
    { new: true },
    (err, msg) => {
      if (err) res.send(err);

      res.json(msg);
    }
  );
};

exports.delete_user = (req, res) => {
  User.remove(
    {
      _id: req.params.userId
    },
    (err, msg) => {
      if (err) res.send(err);

      res.json({ message: "User successfully deleted" });
    }
  );
};
