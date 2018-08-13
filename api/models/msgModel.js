'use strict';
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const msgSchema = new Schema({
   title: {
      type: String
   },
   body: {
      type: String
   },
   Created_date: {
      type: Date,
      default: Date.now
   }
});

module.exports = mongoose.model('Messages', msgSchema);
