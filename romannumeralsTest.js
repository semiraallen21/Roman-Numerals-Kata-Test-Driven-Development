'use strict';
let assert = require("assert");
let romannumerals = require('../src/romannumerals.js');


describe('Roman Numerals of', () => {
    it('should return I if given 1', () => {
        assert.equal(romannumerals.of(1), "I");
    });
    it('should return II if given 2', () => {
        assert.equal(romannumerals.of(2), "II");
    });
    it('should return III if given 3', () => {
        assert.equal(romannumerals.of(3), "III");
    });
    it('should return IV if given 4', () => {
        assert.equal(romannumerals.of(4), "IV");
    });
    it('should return V if given 5', () => {
        assert.equal(romannumerals.of(5), "V");
    });
    it('should return VI if given 6', () => {
        assert.equal(romannumerals.of(6), "VI");
    });
    it('should return VII if given 7', () => {
        assert.equal(romannumerals.of(7), "VII");
    });
    it('should return VIII if given 8', () => {
        assert.equal(romannumerals.of(8), "VIII");
    });
    it('should return IX if given 9', () => {
        assert.equal(romannumerals.of(9), "IX");
    });
    it('should return X if given 10', () => {
        assert.equal(romannumerals.of(10), "X");
    });
    it('should return XI if given 11', () => {
        assert.equal(romannumerals.of(11), "XI");
    });
    it('should return XII if given 12', () => {
        assert.equal(romannumerals.of(12), "XII");
    });
    it('should return XIV if given 14', () => {
        assert.equal(romannumerals.of(14), "XIV");
    });
    it('should return XV if given 15', () => {
        assert.equal(romannumerals.of(15), "XV");
    });
    it('should return XX if given 20', () => {
        assert.equal(romannumerals.of(20), "XX");
    });
    it('should return XXX if given 30', () => {
        assert.equal(romannumerals.of(30), "XXX");
    });
    it('should return XL if given 40', () => {
        assert.equal(romannumerals.of(40), "XL");
    });
    it('should return L if given 50', () => {
        assert.equal(romannumerals.of(50), "L");
    });
    it('should return LX if given 60', () => {
        assert.equal(romannumerals.of(60), "LX");
    });
    it('should return LXX if given 70', () => {
        assert.equal(romannumerals.of(70), "LXX");
    });
    it('should return LXXX if given 80', () => {
        assert.equal(romannumerals.of(80), "LXXX");
    });
    it('should return XC if given 90', () => {
        assert.equal(romannumerals.of(90), "XC");
    });
    it('should return C if given 100', () => {
        assert.equal(romannumerals.of(100), "C");
    });
    it('should return CC if given 200', () => {
        assert.equal(romannumerals.of(200), "CC");
    });
    it('should return CCC if given 300', () => {
        assert.equal(romannumerals.of(300), "CCC");
    });
    it('should return CD if given 400', () => {
        assert.equal(romannumerals.of(400), "CD");
    });
    it('should return D if given 500', () => {
        assert.equal(romannumerals.of(500), "D");
    });
    it('should return DC if given 600', () => {
        assert.equal(romannumerals.of(600), "DC");
    });
    it('should return CM if given 900', () => {
        assert.equal(romannumerals.of(900), "CM");
    });
    it('should return M if given 1000', () => {
        assert.equal(romannumerals.of(1000), "M");
    });
    it('should return MM if given 2000', () => {
        assert.equal(romannumerals.of(2000), "MM");
    });

});
