'use strict';
const mongoose = require('mongoose'),

User = mongoose.model('user');

exports.list_all_users = (req, res) => {
   User.find({}, (err, msg) => {
      
    if (err) res.send(err);
      
    res.json(msg);

   });

};

exports.create_user = (req, res) => {

   const new_user = new User(req.body);

   new_user.save((err, msg) => (err) ? res.send(err) : res.json(msg));

};

exports.read_user = (req, res) => {

   User.findById(req.params.userId, (err, msg) => {

   if (err) res.send(err);

   res.json(msg);

   });

};

exports.update_user = (req, res) => {

   Message.findOneAndUpdate({_id: req.params.userId}, req.body, {new: true}, (err, msg) => {

   if (err) res.send(err);

   res.json(msg);

   });

};

exports.delete_user = (req, res) => {

   User.remove({

      _id: req.params.userId

   }, (err, msg) => {

   if (err) res.send(err);

   res.json({ message: 'User successfully deleted' });

   });

};
