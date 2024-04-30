const fs = require('fs');

fs.writeFile('./src/test.js', 'console.log("test")', (error) => {
  if (error) console.log('shen log: ', { error });
  setTimeout(() => {
    fs.unlink('./src/test.js', (error) => {
      if (error) console.log('shen log: ', { error });
    });
  }, 2000);
});
