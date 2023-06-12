const fs = require('fs');
const csv = require("csv-parse");
const { rejects } = require('assert');
const results = [];
const field = {};

async function readcsv(path) {
  return new Promise((resolve, reject) => {
    let rowcount = 0;
    fs.createReadStream(path)
      .pipe(csv.parse({ headers: false }))
      .on("data", (data) => {
        if (rowcount != 0) {
          if (data[3] in field) {
            field[data[3]].push(data[0]);
          } else {
            const studentlist = [];
            field[data[3]] = studentlist;
            studentlist.push(data[0]);
          }
          results.push(field);
        }
        rowcount++;
      })
      .on("end", () => {
        console.log(`Number of students: ${results.length}`)
        for (key in field) {
          console.log(`Number of students in ${key}: ${field[key].length}. List: ${field[key].join(", ")} `)
        }
        resolve();
      });
  });
}

async function countStudents(path) {
  try {
    if (fs.existsSync(path)) {
      return readcsv(path).then(() => Promise.resolve());
    } else {
      throw new Error('Cannot load the database');
    }
  } catch (err) {
    console.error(err);
  }
}

module.exports = countStudents;