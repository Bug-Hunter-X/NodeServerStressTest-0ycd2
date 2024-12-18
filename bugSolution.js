const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
};

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);

  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
  const server = http.createServer(requestListener);
  server.listen(8080);
}