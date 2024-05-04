import http from 'node:http';
import url from 'node:url';

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

  // 获取路径和查询参数
  const { pathname: path1, query } = url.parse(request.url, true /* true 时，会将查询字符串解析为对象，即 query*/);
  const { pathname: path2, searchParams } = new URL(request.url, `http://${request.headers.host}`);

  response.end('http');
});

server.listen(8080, () => {
  console.log('Server is running at http://localhost:8080/');
});
