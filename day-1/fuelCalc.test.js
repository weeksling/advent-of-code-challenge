const expect = require('assert');
const calculateFuelRequired = require('./1-fuelRequired');

expect.equal(calculateFuelRequired(12), 2)
expect.equal(calculateFuelRequired(14), 2)
expect.equal(calculateFuelRequired(1969), 654)
expect.equal(calculateFuelRequired(100756), 33583)