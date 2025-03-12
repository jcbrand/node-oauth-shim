// Demonstation of integration
const oauthshim = require('./index.js');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// use bodyParser to enable form POST and JSON POST requests
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Define a path where to put this OAuth Shim
app.all('/proxy', oauthshim);

// Create a new file called "credentials.json", an array of objects containing {domain, client_id, client_secret, grant_url}
const creds = require('./credentials.json');

// Initiate the shim with credentials
oauthshim.init(creds);

// Set application to listen on PORT
app.listen(process.env.PORT);

console.log('OAuth Shim listening on ' + process.env.PORT);
