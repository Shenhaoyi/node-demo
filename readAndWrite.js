const fs = require('fs');

const data = fs.readFileSync('./笑看风云.mp4');

fs.writeFileSync('./笑看风云2.mp4', data);

const rs = fs.createReadStream('./笑看风云.mp4');
const ws = fs.createWriteStream('./笑看风云3.mp4');

rs.on('data', (thunk) => {
  ws.write(thunk);
  console.log('shen log: ', { thunk });
});

rs.on('end', () => {
  ws.end();
  console.log('shen log: ', '复制完了');
});

const rs2 = fs.createReadStream('./笑看风云.mp4');
const ws2 = fs.createWriteStream('./笑看风云4.mp4');

rs2.pipe(ws2);
