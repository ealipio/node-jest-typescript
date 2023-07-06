import { sum } from './sum';

describe('sum', () => {
  test('should return the sum of positive numbers', () => {
    // define input and expected output
    const input = [1, 2, 3, 4, 5];
    const output = 15;
    // invoke sum
    const result = sum(input);
    // assert
    expect(result).toBe(output);
  });
  test('should return zero for an empty array', () => {
    const input = [];
    const output = 0;
    // invoke
    const result = sum(input);
    // assert
    expect(result).toBe(result);
  });
  test('should return the number itself for a single number', () => {
    const input = [32];
    const output = 32;
    // invoke
    const result = sum(input);
    // assert
    expect(result).toBe(output);
  });
});
