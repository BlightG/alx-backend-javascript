const fs = require('fs');
const readline = require('readline');

let field = {};

module.exports = function readDatabase(path) {
  if (fs.existsSync(path)) {
    return new Promise((resolve) => {
      let rowcount = 0;
      field = {};
      const inputstream = fs.createReadStream(path);
      const linereader = readline.createInterface({
        input: inputstream,
        terminal: false,
      });
      linereader
        .on('line', (line) => {
          if (line.length > 0) {
            if (rowcount !== 0) {
              const val = line.split(',');
              if (val[3] in field) {
                field[val[3]].push(val[0]);
              } else {
                const studentlist = [];
                studentlist.push(val[0]);
                field[val[3]] = studentlist;
              }
            }
            rowcount += 1;
          }
        })
        .on('close', () => {
          resolve(field);
        });
    });
  }
  return new Promise.Reject(Error('Cannot load database'));
};
