const express = require('express');
const session = require('express-session');
const path = require('node:path');
const router = require('./routes'); 

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: 'palavra-chave-secreta',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));

app.use(router);

app.listen(5500, () => console.log(`Servidor iniciado em http://localhost:5500/`));
