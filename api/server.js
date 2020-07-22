const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser')

const authRouter = require('./auth/auth-router.js');
const jokesRouter = require('./jokes/jokes-router.js');

const server = express();

server.use(cors());
server.use(express.json());
server.use(cookieParser())

server.use((err, req, res, next) => {
  console.log(err)
  next()
})

server.use('/api/auth', authRouter);
server.use('/api/jokes', jokesRouter);

module.exports = server;
