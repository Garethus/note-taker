const express = require('express');

// Import our modular routers for /tips and /feedback
const notesRouter = require('./notes');


const app = express();

// Initialize notes route
app.use('/notes', notesRouter);

module.exports = app;
