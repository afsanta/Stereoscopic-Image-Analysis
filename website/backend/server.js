// Import configs
const config = require('./config');

// Import packages
const express = require('express');
const multer = require('multer');
const ejs = require('ejs')
const mysql = require('mysql');
const path = require('path');

// Initialize appm  
const app = express();

// Import database connection string
const con = require('./db');
const connection = mysql.createConnection({
	host: con.host,
	user: con.user,
	password: con.password
});

connection.connect(function(err) {
	if (err) throw err;
	console.log("Connected!");
});
// Resolves root path
const root_path = path.resolve(__dirname + '/../');
const frontend_path = path.resolve(__dirname + '/../frontend');

// Creates file paths
const index_path = root_path + '/html/index.html';

//
app.set('view engine', 'ejs');
app.set(express.static('./public'));

// Route for index
app.get('/', (req, res) => {
	//console.log(con.host)
	res.sendFile(index_path);
});

// Route for API
app.get('/api', (req,res) => {
	res.json({
		'type': 'test',
		'message': 'Its that easy!'
	});
});

// Initializes server
app.listen(config.port, () => {
	console.log('Server is listening on port ' + config.port.toString())
})