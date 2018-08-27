'use strict';

module.exports = (app) => {

const users = require('../controllers/userController');

// users Routes
app.route('/users')
   .get(users.list_all_users)

app.route('/register')
   .post(users.create_user)

app.route('/login')
   .post(users.read_user)

app.route('/materias')
   .post(users.save_materias)
};
