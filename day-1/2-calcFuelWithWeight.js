const fuelRequired = require("./1-fuelRequired");

const calcFuelRecursive = mass => {
    const fuelNext = fuelRequired(mass)
    if (fuelNext <= 0) {
        return 0
    }
    return fuelNext + calcFuelRecursive(fuelNext)
}

module.exports = function fuelWithWeight(mass) {
  return calcFuelRecursive(mass)
};
