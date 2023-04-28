interface DirectorInterface {

  workFromHome(): string
  getCoffeeBreak(): string
  workDirectorTasks(): string
}

interface TeacherInterface {
  
  workFromHome(): string
  getCoffeeBreak(): string
  workTeacherTasks(): string
}

class Director implements DirectorInterface {

  workFromHome() { 
    return 'the string Working from home';
  }
  getCoffeeBreak() { 
    return 'Getting a coffee break';
  }
  
  workDirectorTasks() { 
    return 'Getting to director tasks';
  }
}

class Teacher implements TeacherInterface {

  workFromHome() {
    return 'Cannot work from home';
  }
  getCoffeeBreak() { 
    return 'Cannot have a break';
  }
  
  workTeacherTasks() {
    return 'Getting to work';
  }
}

interface createEmployee {
  (salary: number | string): Teacher | Director,
}

let employee: createEmployee = function(salary: number | string) : Teacher | Director {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher;
  } else {
    return new Director;
  }

// type employee = Teacher | Director;

function isDirector(employee: Teacher | Director): Boolean {
  if (employee instanceof Director) {
    return true;
  }
  return false;
}

function executework(employee: Teacher | Director): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  }
  return employee.workTeacherTasks();
  }
}
