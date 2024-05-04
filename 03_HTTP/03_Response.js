import http from 'node:http';

const server = http.createServer((request, response) => {
  // response.statusCode = 304; // 状态码
  response.setHeader('MyHeader', 'shen'); // 自定义头
  response.setHeader('MyHeader2', ['shen', 'zhi']); // 多个同名头

  // 写入响应体
  response.write('shen');
  response.write('haoyi');
  response.end('');
});

server.listen(8080, () => {
  console.log('Server is running at http://localhost:8080/');
});
