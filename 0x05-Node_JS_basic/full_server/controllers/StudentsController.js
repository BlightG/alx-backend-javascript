const readDatabase = require('../utils');

class StudentsController {
  static getAllStudents(request, resposnse) {
    readDatabase(process.argv[2])
      .then((field) => {
        let output = 'This is the list of our students\n';
        let count = 0;
        for (const key in field) {
          if (key) {
            output += `Number of students in ${key}: ${field[key].length}. List: ${field[key].join(', ')}`;
            count += 1;

            if (count !== Object.keys(field).length) {
              output += '\n';
            }
          }
        }
        resposnse.status(200).send(output);
      }).catch(() => {
        resposnse.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    if (major === 'CS' || major === 'SWE') {
      readDatabase(process.argv[2])
        .then((field) => {
          let output = '';
          output += `List: ${field[major].join(', ')}`;
          response.status(200).send(output);
        }).catch(() => {
          response.status(500).send('Cannot load the database');
        });
    } else {
      response.status(500).send('Major parameter must be CS or SWE');
    }
  }
}

module.exports = StudentsController;
