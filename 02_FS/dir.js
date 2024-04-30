const fs = require('fs');
fs.mkdir('./test', (err) => {
  console.log('shen log: ', { err });
});

fs.mkdir('./test/test2/test3', { recursive: true }, (err) => {
  console.log('shen log: ', { err });
});

fs.readdir('./', (err, data) => {
  if (err) console.log('shen log: ', { err });
  console.log('shen log: ', { data });
});
const dataDir = fs.readdirSync('./')

console.log('shen log: ', { dataDir });
