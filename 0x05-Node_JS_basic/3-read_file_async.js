const fs = require('fs');
const readline = require('readline');
const field = {}

function countStudents(path) {
  if (fs.existsSync(path)) {
    return new Promise((resolve, reject) => {
      let rowcount = 0;
      const inputstream = fs.createReadStream(path);
      let linereader = readline.createInterface({
        input: inputstream,
        terminal: false,
      });
      linereader
        .on('line', (line) => {
          if (line.length > 0) {
            if (rowcount != 0) {
              const val = line.split(',');
              if (val[3] in field) {
                field[val[3]].push(val[0]);
              } else {
                let studentlist = [];
                studentlist.push(val[0]);
                field[val[3]] = studentlist;
              }
            }
            rowcount++;
          }
        })
        .on("close", () => {
          console.log(`Number of students: ${rowcount - 1}`);
          for (key in field) {
            console.log(`Number of students in ${key}: ${field[key].length}. List: ${field[key].join(", ")} `);
          }
          resolve()
        });
    });
  } else {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
