var part2 = require('../../app/part2.js');
const path = require('path');
const fs = require('fs');
const inputFile = path.join(__dirname, '/input.txt');

describe('part2', () => {
    it('calculate additional fuel', () => {
        expect(part2.CalculateAdditionalFuel(['14'])).toEqual(2);
    });
});

describe('part2', () => {
    it('calculate additional fuel', () => {
        expect(part2.CalculateAdditionalFuel(['1969'])).toEqual(966);
    });
});

describe('part2', () => {
    it('calculate additional fuel', () => {
        expect(part2.CalculateAdditionalFuel(['100756'])).toEqual(50346);
    });
});

describe('part2', () => {
    it('calculate additional fuel', () => {
        let massesInput = fs.readFileSync(inputFile, { encoding: 'utf-8' })
            .trim()
            .split('\n');
        expect(part2.CalculateAdditionalFuel(massesInput)).toEqual(5132379);
    });
});


describe('part2', () => {
    it('calculate additional fuel', () => {
        expect(part2.CalculateAdditionalFuel(['mmmm'])).toEqual(0);
    });
});

describe('part2', () => {
    it('calculate additional fuel', () => {
        expect(part2.CalculateAdditionalFuel(['-10'])).toEqual(0);
    });
});

