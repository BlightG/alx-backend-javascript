const fs = require('fs');

const field = {};

function countStudents(path) {
  if (fs.existsSync(path)) {
    let rowcount = 0;
    const allFileContents = fs.readFileSync(path, 'utf-8');
    allFileContents.split(/\r?\n/).forEach((line) => {
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
    });
    console.log(`Number of students: ${rowcount - 1}`);
    for (const key in field) {
      if (key) {
        console.log(`Number of students in ${key}: ${field[key].length}. List: ${field[key].join(', ')}`);
      }
    }
  } else {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
