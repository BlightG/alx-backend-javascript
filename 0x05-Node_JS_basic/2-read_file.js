const fs = require('fs');
const csv = require("csv-parse");

function countStudents(path) {
  try {
    if (fs.existsSync(path)) {
      readcsv(path)
    } else {
      throw new Error('Cannot load the database');
    }
  } catch (err) {
    console.error(err);
  }
}

function readcsv(path) {
  let rowcount = 0;
  fs.createReadStream(path)
    .pipe(csv.parse({ headers: True }))
    .on("data", (row) => {
      rowcount = rowcount + 1;
      console.log(row)
    })
    .on("end", () => {
      console.log(`Number of students: ${rowcount}`)
    })
}

module.exports = countStudents;