export default class Building {
  constructor(sqft) {
    this.sqft = sqft;
    if (!(this.constructor.name === 'Building')) {
      if (!this.hasOwnProperty('evacuationWarningMessage')) {
        throw new Error('extending Building must override evacuationWarningMessage');
      }
    }
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(value) {
    if (typeof value === 'number') {
      this._sqft = value;
    } else {
      throw new TypeError('sqft must be a Number');
    }
  }

  evacuationWarningMessage() { }
}
