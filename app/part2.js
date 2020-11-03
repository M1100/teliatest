var part1 = require('./part1.js');

var CalculateAdditionalFuel = function (masses) {
    let total_fuel = 0;
    for (let i = 0; i < masses.length; i++) {
        let fuel = part1.CalculateFuelForModule(masses[i]);
        while (fuel > 0) {
            total_fuel += fuel;
            fuel = part1.CalculateFuelForModule(fuel);
        }
    }
    return total_fuel;
};

module.exports = { CalculateAdditionalFuel };