const express = require('express');
const fs = require('fs');
const readline = require('readline');
const field = {};
const app = express();
const port = 1245;

function countStudents(path) {
  if (fs.existsSync(path)) {
    return new Promise((resolve, reject) => {
      let rowcount = 0;
      let output = '';
      const inputstream = fs.createReadStream(path);
      const linereader = readline.createInterface({
        input: inputstream,
        terminal: false
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
            rowcount++;
          }
        })
        .on('close', () => {
          output += `Number of students: ${rowcount - 1}\n`;
          for (const key in field) {
            output += `Number of students in ${key}: ${field[key].length}. List: ${field[key].join(', ')}\n`;
          }
          resolve(output);
        });
    });
  }
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  try {
    countStudents(process.argv[2]).
      then((output) => {
        let outString = output.slice(0, -1);
        outString = 'This is the list of our students\n' + outString
        res.send(outString);
      })
  } catch (err) {
    throw new Error('Cannot load the database');
  }
})

app.listen(port, () => {
  console.log('...');
});

module.exports = app;
