export default function updateStudentGradeByCity(studentarray, city, gradearray) {
  if (!Array.isArray(studentarray)) {
    return [];
  }

  const cityarray = studentarray.filter((student) => student.location === city);
  const value = [...cityarray];
  for (const grade of gradearray) {
    cityarray.map((student) => {
      if (student.id === grade.studentId) {
        // the below line is used to avoid no-param-reassign from es6
        // by reassigning a property in value but searching in cityarray
        value[cityarray.indexOf(student)].grade = grade.grade;
      }
      return value;
    });
  }

  cityarray.map((student) => {
    if (!Object.prototype.hasOwnProperty.call(student, 'grade')) {
      // console.log(value[Array.prototype.indexOf(student)])
      value[cityarray.indexOf(student)].grade = 'N/A';
    }
    return value;
  });

  return value;
}
