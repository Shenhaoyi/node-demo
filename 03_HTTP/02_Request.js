import http from 'node:http';

const server = http.createServer((request, response) => {
  console.log(request.method); // 请求方法
  console.log(request.url); // 请求的 URL
  console.log(request.httpVersion); // HTTP 版本
  /*
    请求头信息
      是个对象
      key 都进行小写处理
  */
  console.log(request.headers);

  response.end('http');
});

server.listen(8080, () => {
  console.log('Server is running at http://localhost:8080/');
});
