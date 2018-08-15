'use strict';

module.exports = (app) => {

const users = require('../controllers/userController');

// users Routes
app.route('/users')
   .get(users.list_all_users)
   .post(users.create_user);

app.route('/users/:userId')
   .get(users.read_user)
   .put(users.update_user)
   .delete(users.delete_user);
};
