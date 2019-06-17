const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const configureRoutes = require('../config/routes.js');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

configureRoutes(server);
server.use('/', (req, res) => {
  res.send(`<h1>Dad Jokes API server</h1>`)
})

module.exports = server;
