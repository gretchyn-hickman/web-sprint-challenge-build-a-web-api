const express = require('express');
const projectsRouter = require('./projects/projects-router');
const actionsRouter = require('./actions/actions-router');
const server = express();

server.use(express.json());

server.use('/api/projects', projectsRouter);
server.use('/api/actions', actionsRouter);

server.use('/', (req, res) => {
    res.send(`<h3>sprint challenge let's goooo</h3>`)
})

server.use((error, req, res, next) => {
    console.log({error});
    res.status(error.status || 500).send({message: error.message || "internal server error"})
})

module.exports = server;