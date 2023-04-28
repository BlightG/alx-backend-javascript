interface Teacher {
  readonly firstName: string,
  fullTimeEmployee: boolean,
  readonly lastName: string,
  location: string,
  contract: boolean,
  yearsOfExperience?: number,
};

interface Directors extends Teacher {
  numberOfReports: number,
};

interface printTeacherFunction {
  (firstName:string, lastName:string): string,
}

let printTeacher: printTeacherFunction = function(firstName, lastName) {
  return `${firstName[0]}. ${lastName}`;
}

interface Student {
  firstName: string;
  lastName: string;
  // new (firstName:string, lastName:string): Student;
  workOnHomework(): string;
  displayName(): string;
  
}

interface StudentConstructor {
  new (firstName:string, lastName:string): Student;
}

function createStudent(n: StudentConstructor, firstName: string, lastName: string) {
  return new n(firstName, lastName)
}

class StudentClass implements Student {

  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework() {
    return 'Currently working';
  }

  displayName() {
    return this.firstName;
  }
}


let student = createStudent(StudentClass, "","")