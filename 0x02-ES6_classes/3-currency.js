class Currency {
  constructor(code, name) {
    this._code = this._validateString(code, 'Code');
    this._name = this._validateString(name, 'Name');
  }

  get code() {
    return this._code;
  }

  set code(newCode) {
    this._code = this._validateString(newCode, 'Code');
  }

  get name() {
    return this._name;
  }

  // eslint-disable-next-line class-methods-use-this
  _validateString(value, attributeName) {
    if (typeof value !== 'string') {
      throw new TypeError(`${attributeName} must be a string`);
    }
    return value;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
export default Currency;
