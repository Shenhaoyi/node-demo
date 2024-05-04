import http from 'node:http';
import fs from 'node:fs';

const server = http.createServer((request, response) => {
  const html = fs.readFileSync(process.cwd() + '/index.html', 'utf8');
  response.end(html);
});

server.listen(8080, () => {
  console.log('Server is running at http://localhost:8080/');
});
