var part1 = require('../../app/part1.js');
const path = require('path');
const fs = require('fs');
const inputFile = path.join(__dirname, '/input.txt');

describe('part1', () => {
    it('calculate fuel', () => {
        expect(part1.CalculateFuelForModules(['12'])).toEqual(2);
    });
});

describe('part1', () => {
    it('calculate fuel', () => {
        expect(part1.CalculateFuelForModules(['14'])).toEqual(2);
    });
});

describe('part1', () => {
    it('calculate fuel', () => {
        expect(part1.CalculateFuelForModules(['1969'])).toEqual(654);
    });
});


describe('part1', () => {
    it('calculate fuel', () => {
        expect(part1.CalculateFuelForModules(['100756'])).toEqual(33583);
    });
});

describe('part1', () => {
    it('calculate fuel', () => {
        let massesInput = fs.readFileSync(inputFile, { encoding: "utf-8" })
            .trim()
            .split("\n");
        expect(part1.CalculateFuelForModules(massesInput)).toEqual(3423511);
    });
});

describe('part1', () => {
    it('calculate fuel', () => {
        expect(part1.CalculateFuelForModules(['mmmm'])).toEqual(0);
    });
});

describe('part1', () => {
    it('calculate fuel', () => {
        expect(part1.CalculateFuelForModules(['-10'])).toEqual(0);
    });
});

