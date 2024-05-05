import http from 'node:http';
import fs from 'node:fs';
import url from 'node:url';
import path from 'node:path';

const mimeMap = {
  html: 'text/html',
  css: 'text/css',
  js: 'text/javascript',
  png: 'image/png',
  jpg: 'image/jpeg',
  gif: 'image/gif',
  mp4: 'video/mp4',
  mp3: 'audio/mpeg',
  json: 'application/json',
};

const server = http.createServer((request, response) => {
  const { pathname } = url.parse(request.url);
  const filePath = process.cwd() + '/public' + (pathname === '/' ? '/index.html' : pathname);
  const ext = path.extname(filePath).substring(1);
  fs.readFile(filePath, 'utf8', (error, data) => {
    if (error) {
      response.writeHead(404);
      response.end('Not Found');
      return;
    }
    response.setHeader('Content-Type', mimeMap[ext] || 'text/plain');
    response.end(data);
  });
});

server.listen(8080, () => {
  console.log('Server is running at http://localhost:8080/');
});
