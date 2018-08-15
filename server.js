const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const User = require("./api/models/userModel");



const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json({"message": "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes."});
});

require("./api/routes/userRoutes")(app);

app.listen(port);



mongoose.Promise = global.Promise;

mongoose
  .connect(
    "mongodb://admin:teste123@ds121282.mlab.com:21282/heroku_xpjr01hn",
    { useNewUrlParser: true }
  )
  .then(() => console.log("Conectado com sucesso."))
  .catch(err => console.log("Nao foi possivel conectar ao banco de dados"));



