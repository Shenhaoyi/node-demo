import http from 'node:http';
import fs from 'node:fs';
import url from 'node:url';

const server = http.createServer((request, response) => {
  const { pathname } = url.parse(request.url);
  const path = process.cwd() + '/public' + (pathname === '/' ? '/index.html' : pathname);
  fs.readFile(path, 'utf8', (error, data) => {
    if (error) {
      response.writeHead(404);
      response.end('Not Found');
      return;
    }
    response.end(data);
  });
});

server.listen(8080, () => {
  console.log('Server is running at http://localhost:8080/');
});
