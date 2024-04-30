const fs = require('fs');

fs.rename('./笑看风云.mp4', './src/笑看风云_rename.mp4', (err) => {
  if (err) {
    console.log('shen log: ', { err });
  }
  setTimeout(() => {
    fs.renameSync('./src/笑看风云_rename.mp4', './笑看风云.mp4');
  }, 2000);
});
