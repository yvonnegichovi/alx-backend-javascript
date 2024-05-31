import Currency from './3-currency';

class Pricing {
  constructor(amount, currency) {
    this._amount = this._validateNumber(amount, 
