export default class Car {
  constructor(brand, motor, color) {
    this.brand = brand;
    this.motor = motor;
    this.color = color;
  }

  get brand() {
    return this._brand;
  }

  get motor() {
    return this._motor;
  }

  get color() {
    return this._color;
  }

  set brand(value) {
    if (typeof value === 'string' || typeof value === 'undefined') {
      this._brand = value;
    } else {
      throw new Error('brand must be a String');
    }
  }

  set motor(value) {
    if (typeof value === 'string' || typeof value === 'undefined') {
      this._motor = value;
    } else {
      throw new Error('motor must be a String');
    }
  }

  set color(value) {
    if (typeof value === 'string' || typeof value === 'undefined') {
      this._color = value;
    } else {
      throw new Error('color must be a String');
    }
  }

  static get [Symbol.species]() {
    return this;
  }

  cloneCar() {
    const Constructor = this.constructor[Symbol.species];
    return new Constructor();
  }
}
