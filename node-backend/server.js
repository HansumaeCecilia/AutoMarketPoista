// WEB SERVER FOR CAR LISTING APP
// ==============================

// LIBRARIES AND MODULES
// ---------------------

// Setting up Handlebars as the view engine
const express = require('express');
const {engine} = require('express-handlebars');
const path = require('path')

const app = express();

app.set('views', path.join(__dirname, 'views'));

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    res.render('index', {pageTitle: 'Car Listings'});
});

// Create the server
const PORT = process.env.PORT || 8080;
app.listen(PORT);
console.log('Server is running and listening to TCP port', PORT)