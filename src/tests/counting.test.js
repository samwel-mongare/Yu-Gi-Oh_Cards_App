/**
 * @jest-environment jsdom
 */

import { fakeCards } from '../utl/mockData.js';
import { arrayLength } from '../utl/__mocks__/funcs.js';

jest.mock('../utl/funcs.js');

test('Check if arrayLength function is present', () => {
  expect(arrayLength).toBeDefined();
});

test('Check if arrayLength function calculates the length', () => {
  expect(arrayLength(fakeCards)).toBe(5);
});

test('Check if arrayLength function reduces the length to 4 after splice', () => {
  expect(arrayLength(fakeCards.splice(0, 4))).toBe(4);
});