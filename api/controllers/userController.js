"use strict";
const User = require("../models/userModel");
const bcrypt = require("bcryptjs");

exports.list_all_users = (req, res) => {
  User.find()
    .then(users => res.send(users))
    .catch(err => res.status(500).send({ message: err.message }));
};

exports.create_user = (req, res) => {
  console.log(req.body);
  const user = new User({
    name: req.body.name,
    lastname: req.body.lastname,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 12)
  });

  user
    .save()
    .then(data => res.send(data))
    .catch(err => res.status(500).send({ message: err.message }));
};

exports.read_user = (req, res) => {
  User.findOne(
    {
      email: req.body.email,
    },
    (err, user) => {
      console.log(user, err);
      if (err) {
        return res.status(500).send({ erro: "Erro ao processar." });
      }

      if (!user) {
        return res.status(404).send({ error: "Usuário não autenticado." });
      }

      bcrypt
        .compare(req.body.password, user.password)
        .then(data =>
          res.status(200).send({ message: "Usuário autenticado com sucesso" })
        )
        .catch(err =>
          res.status(404).send({ error: "Usuário não autenticado." })
        );
    }
  );
};

exports.update_user = (req, res) => {
  User.findOneAndUpdate(
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
