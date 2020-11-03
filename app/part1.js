const CalculateFuelForModule = function (moduleMass) {
    const mass = Number(moduleMass);
    if (!isNaN(mass) && mass > 0) {
        return (Math.floor(mass / 3)) - 2;
    } else { return 0; }
};

const CalculateFuelForModules = function (masses) {
    let total_fuel = 0;
    for (let i = 0; i < masses.length; i++) {
        total_fuel += CalculateFuelForModule(masses[i]);
    }
    return total_fuel;
};

module.exports = { CalculateFuelForModules, CalculateFuelForModule };