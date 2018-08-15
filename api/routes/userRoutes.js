'use strict';

module.exports = (app) => {

const users = require('../controllers/userController');

// users Routes
app.route('/users')
   .get(users.list_all_users)
     
app.route('/register')
   .post(users.create_users)
   
app.route('/read')
   .get(users.read_user)
};
