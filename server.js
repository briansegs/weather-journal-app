// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Cors for cross origin allowance
const cors = require('cors');
const { Router, response } = require('express');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port = 8080;

const server = app.listen(port, () => {
    console.log(`server is running on localhost: ${port}`);
})

// Routes

// GET All
app.get('/all', (req, res) => {
    res.send(projectData);
})

// POST Data
const data = [];
app.post('/add', (req, res) => {
    let newData = req.body;
    let newEntry = {
        temperature: newData.temperature,
        date: newData.date,
        userResponse: newData.userResponse
    }
    data.push(newEntry);
    console.log(data);
})
