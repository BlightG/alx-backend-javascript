export default class HolbertonClass {
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

  get size() {
    return this._size;
  }

  get location() {
    return this._location;
  }

  set size(value) {
    if (typeof value === 'number') {
      this._size = value;
    } else {
      throw new Error('size must be a NUmber');
    }
  }

  set location(value) {
    if (typeof value === 'string') {
      this._location = value;
    } else {
      throw new Error('location must be a String');
    }
  }

  valueOf() {
    return this._size;
  }

  toString() {
    return this._location;
  }
}
