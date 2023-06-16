const readDatabase = require('../utils');

class StudentsController {
  static getAllStudents(request, resposnse) {
    readDatabase(process.argv[2])
      .then((field) => {
        let output = '';
        for (const key in field) {
          if (key) {
            output += `Number of students in ${key}: ${field[key].length}. List: ${field[key].join(', ')}\n`;
          }
        }
        resposnse.status(200).send(output);
      }).catch((err) => {
        resposnse.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(request, response) {
    const major = request.params.major;
    if (major !== 'CS' || major !== 'SWE') {
      response.status(500).send('Major parameter must be CS or SWE');
    }

    readDatabase(process.argv[2])
      .then((field) => {
        let output = '';
        output += `Number of students in ${major}: ${field[major].length}. List: ${field[major].join(', ')}\n`;
      }).catch((err) => {
        resposnse.status(500).send('Cannot load the database');
      });
  }
};

module.exports = StudentsController;
