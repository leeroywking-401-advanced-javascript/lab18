const fs = require('fs');

alterFile = (file, payload) => {
    fs.readFile( file, (err, data) => {
      if(err) { throw err; }
      let stringed = JSON.stringify(payload)
      let text = `${data} \n ${stringed}`
      fs.writeFile( file, Buffer.from(text), (err, data) => {
        if(err) { throw err; }
        console.log(`${file} saved`);
      });
    });
  };


module.exports = alterFile;