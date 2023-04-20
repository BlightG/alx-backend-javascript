export default class HolbertonCourse {
  // cosntruct all value with variable names makrked as private
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  set name(value) {
    if (typeof value === 'string') {
      this._name = value;
    } else {
      throw new Error('Name must be a string');
    }
  }

  set length(value) {
    if (typeof value === 'number') {
      this._length = value;
    } else {
      throw new Error('lenght must be a Number');
    }
  }

  set students(value) {
    if (Array.isArray(value)) {
      this._students = value;
    } else {
      throw new Error('students must be an Array of strings');
    }
  }
}
