const http = require('http');
const fs = require('fs');
const readline = require('readline');

const field = {};

function countStudents(path) {
  if (fs.existsSync(path)) {
    return new Promise((resolve) => {
      let rowcount = 0;
      let output = '';
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
          output += `Number of students: ${rowcount - 1}\n`;
          for (const key in field) {
            if (key) {
              output += `Number of students in ${key}: ${field[key].length}. List: ${field[key].join(', ')}\n`;
            }
          }
          resolve(output);
        });
    });
  }
  return new Promise((reject) => { reject(Error('Cannot load database')); });
}

const hostname = '127.0.0.1';
const port = 1245;

const app = http.createServer(async (req, res) => {
  if (req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!');
  }

  if (req.url === '/students') {
    res.write('This is the list of our students\n');
    countStudents(process.argv[2])
      .then((output) => {
        const outString = output.slice(0, -1);
        res.end(outString);
      }).catch(() => {
        res.end('Cannot load the database');
      });
  }
});

app.listen(port, hostname, () => {
  console.log('...');
});

module.exports = app;
