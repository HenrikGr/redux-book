/*
 * Description: 
 *
 * Author:  Henrik
 * File:    
 * Version: 0.0.1
 *
 * Created: 2016-10-27
 */
const express = require('express');
const config  = require('./server/config');

/**
 * We are running an express server
 */
let app = express();

/**
 * Tell the app to look for static files in these directories
 */
app.use(express.static('./server/static/'));
app.use(express.static('./client/dist/'));

/**
 * Every other route returns index.html, which will contain a script tag to our application's JavaScript file(s).
 */
app.get('*', function (req, res){
  res.sendFile('index.html', { root: './server/static' });
});

/**
 * Start server on the specified port and binding host
 */
app.listen(config.port, '0.0.0.0', function() {
  // print a message when the server starts listening
  console.log("server starting on " + config.url);
});