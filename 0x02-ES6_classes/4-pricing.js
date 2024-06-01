import Currency from './3-currency';

class Pricing {
  constructor(amount, currency) {
    this._amount = this._validateNumber(amount, 'Amount');
    this._currency = this._validateCurrency(currency, 'Currency');
  }

  get amount() {
    return this._amount;
  }

  set amount(newAmount) {
    this._amount = this._validateNumber(newAmount, 'Amount');
  }

  get currency() {
    return this._currency;
  }

  set currency(newCurrency) {
    this._currency = this._validateCurrency(newCurrency, 'Currency');
  }

  // eslint-disable-next-line class-methods-use-this
  _validateNumber(value, attributeName) {
    if (typeof value !== 'number' || Number.isNaN(value)) {
      throw new TypeError(`${attributeName} must be a number`);
    }
    return value;
  }

  // eslint-disable-next-line class-methods-use-this
  _validateCurrency(value, attributeName) {
    if (!(value instanceof Currency)) {
      throw new TypeError(`${attributeName} must be an instance of Currency`);
    }
    return value;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
export default Pricing;
