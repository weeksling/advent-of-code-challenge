const expect = require('assert');
const calculateFuelRequired = require('./2-calcFuelWithWeight');

expect.equal(calculateFuelRequired(14), 2)
expect.equal(calculateFuelRequired(1969), 966)