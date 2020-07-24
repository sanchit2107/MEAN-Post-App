const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Here we are setting up Node Backend Server!!');
});

server.listen(process.env.PORT || 3000);
