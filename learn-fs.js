const fs = require('fs');
fs.writeFile(
  './src/index.js',
  'hello', // 写入内容
  // options
  {
    encoding: 'utf8', // 默认就是utf8
  },
  // 回调
  (err) => {
    if (err) throw err;
    console.log('写入成功!');
  },
);

fs.writeFileSync(
  './src/index.js',
  'hello sync', // 写入内容
  // options
  {
    encoding: 'utf8', // 默认就是utf8
  },
);
console.log(1);


let ws = fs.createWriteStream('./观书有感.txt');
ws.write('半亩方塘一鉴开\r\n');
ws.write('天光云影共徘徊\r\n');
ws.write('问渠那得清如许\r\n');
ws.write('为有源头活水来\r\n');
ws.end();

fs.readFile('./观书有感.txt', (err, data) => {
  if (err) throw err;
  console.log(data.toString()); // data是buffer，toString转字符串
});


const data = fs.readFileSync('./观书有感.txt');
console.log(data);
