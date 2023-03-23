const validation = require('./validationServices');
const { test, describe, expect } = require('@jest/globals');

describe('validateMatrix function', () => {
    test('it should return an error message if the letters array is too short', async () => {
        const letters = ['B', 'U', 'D'];
        const result = await validation.validateMatrix(letters);
        expect(result).toEqual('Wrong sequence. Expected at least 4 sequences, got 3');
    });

    test('it should return an error message if the letters array contains invalid sequences', async () => {
        const letters = ['BUDH', 'BU', 'DUH', 'BUD'];
        const result = await validation.validateMatrix(letters);
        expect(result).toEqual('Sequence contains errors. Wrong sequences: |BU| |DUH| |BUD|');
    });

    test('it should return an empty string if the letters array is valid', async () => {
        const letters = ['BUDH', 'UBDH', 'DBUH', 'HBUD'];
        const result = await validation.validateMatrix(letters);
        expect(result).toEqual('');
    });
});

describe('checkSequence function', () => {
    test('it should return true if the sequence contains two valid combinations', () => {
        const sequence = ['B', 'U', 'D', 'H', 'B', 'U', 'D', 'H', 'B', 'U', 'D', 'H'];
        const result = validation.checkSequence(sequence);
        expect(result).toBe(false);
    });

    test('it should return false if the sequence contains less than two valid combinations', () => {
        const sequence = ['B', 'U', 'D', 'H', 'B', 'U', 'D', 'H', 'B', 'U', 'D', 'U'];
        const result = validation.checkSequence(sequence);
        expect(result).toBe(false);
    });
});

describe('validateSequence function', () => {
    test('it should return true if the matrix contains a valid sequence horizontally', async () => {
        const letters = ['BUDH', 'BUDH', 'BUHH', 'BUHD'];
        const result = await validation.validateSequence(letters);
        expect(result).toBe(true);
    });

    test('it should return true if the matrix contains a valid sequence vertically', async () => {
        const letters = ['BUDH', 'BUHH', 'BUHH', 'BUHD'];
        const result = await validation.validateSequence(letters);
        expect(result).toBe(true);
    });

    test('it should return true if the matrix contains a valid sequence diagonally', async () => {
        const letters = ['BUDH', 'BUHH', 'UDUH', 'UBHD'];
        const result = await validation.validateSequence(letters);
        expect(result).toBe(false);
    });

    test('it should return false if the matrix does not contain a valid sequence', async () => {
        const letters = ['BUDH', 'UBDH', 'DBUH', 'HBUD'];
        const result = await validation.validateSequence(letters);
        expect(result).toBe(false);
    });
});
