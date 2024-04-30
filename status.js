const fs = require('fs')
fs.stat('./', (err, data) => {
  if (err) console.log('shen log: ', { err });
  console.log('shen log: ', { data });
})
