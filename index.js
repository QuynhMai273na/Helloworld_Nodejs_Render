// Hello world project thuan node js
const http = require('http');//node.js

const hostname = 'localhost';
const port = 8081;

const server = http.createServer((req, res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World! Welcome to my server!');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });

// Hello world voi Express
// const express = require('express');

// const app = express();
// const port = 8080;

// app.get('/', (req, res) => {
//   res.send('Hello World! Welcome to my server!');
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
