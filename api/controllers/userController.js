"use strict";
const User = require("../models/userModel");
const bcrypt = require("bcryptjs");

const HASH_SALT_FACTOR = 12;

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
    password: bcrypt.hashSync(req.body.password, HASH_SALT_FACTOR)
  });

  user
    .save()
    .then(data => res.send(data))
    .catch(err => res.status(500).send({ message: err.message }));
};

exports.read_user = (req, res) => {
  User.findOne(
    {
      email: req.body.email
    },
    (err, user) => {
      console.log("Tentativa de login: " + req.body.email, user.password);
      if (err) {
        return res.status(500).send({ erro: "Erro ao processar." });
        console.log(err);
      }

      if (!user) {
        return res.status(404).send({ error: "Usuário não encontrado." });
        console.log(err);
      }

      bcrypt
        .compare(req.body.password, user.password)
        .then(isCorrect => {
          isCorrect
            ? res.status(200).send({
                user: {
                  name: user.name,
                  lastname: user.lastname,
                  email: user.email
                },
                authToken: bcrypt.hashSync(req.body.password, HASH_SALT_FACTOR)
              })
            : res.status(200).send({ error: "Usuário não autenticado." });
        console.log(err);
        })
        .catch(err =>
          res.status(404).send({ error: "Usuário não autenticado." })
        );
    }
  );
};

exports.save_materias = (req, res) => {
  User.findOne({ email: req.body.email}, (err, user) => {
    if (err) {
      return res.status(500).send({ erro: "Erro ao processar." });
      console.log(err);
    }

    if (!user) {
      return res.status(404).send({ error: "Usuário não encontrado." });
      console.log(err);
    }
      user.materias.push({
          nome_materia: req.body.nome_materia,
          nome_prof: req.body.nome_prof,
          dia: req.body.dia
        });

      user
        .save()
        .then(data => res.send(data))
        .catch(err => res.status(500).send({ message: err.message }));
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
