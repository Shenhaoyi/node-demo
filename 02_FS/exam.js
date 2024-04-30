const fs = require('fs');

const dirData = fs.readdirSync('./');

console.log('shen log: ', { dirData });

const filteredData = dirData.filter((item) => /笑看风云/.test(item));
console.log('shen log: ', { filteredData });

filteredData.forEach((item) => {
  const oldPath = './' + item;
  const newPath = './' + item.replace('test', '');
  fs.renameSync(oldPath, newPath);
});
