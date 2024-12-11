const express = require('express');

const hostname = '127.0.0.1'; // Your server ip address
const port = 3000;
const version = '1.0.0';

const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  // set response content
  res.sendFile(__dirname + '/index.html');
  console.log(
    `[Version ${version}]: New request => http://${hostname}:${port}` + req.url
  );
});

// Health check
app.get('/health', (req, res) => {
  res.sendStatus(200);
  console.log(
    `[Version ${version}]: New request => http://${hostname}:${port}` + req.url
  );
});

// this comment is only to trigger pipeline again

module.exports = app;
