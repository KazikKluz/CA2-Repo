const app = require('./app.js');

const hostname = '127.0.0.1'; // Your server ip address
const port = 3000;
const version = '1.0.0';

app.listen(port, () => {
  console.log(
    `[Version ${version}]: Server running at http://${hostname}:${port}/`
  );
});
