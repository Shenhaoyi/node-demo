import http from 'node:http';
http
  .createServer((request, response) => {
    request.on('error', (err) => {
      console.error(err);
      response.statusCode = 400;
      response.end();
    });
    response.on('error', (err) => {
      console.error(err);
    });
    if (request.method === 'POST' && request.url === '/echo') {
      request.pipe(response); // 直接返回请求体
    } else {
      response.statusCode = 404;
      response.end();
    }
  })
  .listen(8080);
