class Building {
  constructor(sqft) {
    this._sqft = this._validateNumber(sqft, 'Sqft');
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(newSqft) {
    this._sqft = this._validateNumber(sqft, 'Sqft');
  }

  // eslint-disable-next-line class-methods-use-this
  _validateNumber(value, attributeName) {
    if (typeof value !== 'number' || Number.isNaN(value)) {
      throw new TypeError(`${attributeName} must be a number`);
    }
    return value;
  }

  get evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
export default Building;
