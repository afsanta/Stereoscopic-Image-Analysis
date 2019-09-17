// Import configs
const config = require('./config');

// Import packages
const express = require('express');
const mysql = require("mysql");
const path = require('path');
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
	console.log("Connected");
});
// Resolves root path
const root_path = path.resolve(__dirname + '/../');

// Creates file paths
const index_path = root_path + '/html/index.html';

// Route for index
app.get('/', (req, res) => {
	console.log(db.host)
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