interface Student {
  firstname: string,
  lastname: string,
  age: number,
  location: string,
}

const Student1 : Student = {
  firstname: 'first',
  lastname: 'student',
  age: 1,
  location: 'ETH',
}

const Student2 : Student = {
  firstname: 'second',
  lastname: 'student',
  age: 2,
  location: 'ETH',
}

const studentslist = [ Student1, Student2]