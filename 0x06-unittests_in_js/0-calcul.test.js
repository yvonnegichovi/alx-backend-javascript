const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should return 4 when inputs are 1 and 3', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('should return 5 when inputs are 1 and 3.7', () => {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });

  it('should return 5 when inputs are 1.2 and 3.7', () => {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it('should return 6 when inputs are 1.5 and 3.7', () => {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });
  it('should return 5 when the first number is 1.2 and the second number is 3.5', () => {
    assert.strictEqual(calculateNumber(1.2, 3.5), 5);
  });

  it('should return 5 when the first number is 1 and the second number is 3.5', () => {
    assert.strictEqual(calculateNumber(1, 3.5), 5);
  });

  it('should return 6 when the first number is 1.5 and the second number is 3.5', () => {
    assert.strictEqual(calculateNumber(1.5, 3.5), 6);
  });

  it('should return 6 when the first number is 1.4 and the second number is 4.6', () => {
    assert.strictEqual(calculateNumber(1.4, 4.6), 6);
  });
});
