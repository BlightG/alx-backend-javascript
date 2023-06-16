const fs = require('fs');
const readline = require('readline');

const field = {};


module.exports = function readDatabase(path) {
  if (fs.existsSync(path)) {
    return new Promise((resolve) => {
      let rowcount = 0;
      // let output = '';
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
          // for (const key in field) {
          //   if (key) {
          //     output += `Number of students in ${key}: ${field[key].length}. List: ${field[key].join(', ')}\n`;
          //   }
          // }
          resolve(field);
        });
    });
  }
  return new Promise.Reject(Error('Cannot load database'));
}