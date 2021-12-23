/**
 * @jest-environment jsdom
 */

import {
  displayBlock, getCard, getDate, textContentWith,
} from '../modules/popup.js';
import getCardsFromLocalStorage from '../utl/__mocks__/funcs.js';

jest.mock('../utl/funcs.js');

describe('Unit Tests', () => {
  const element = document.createElement('div');

  describe('getCard()', () => {
    test('return card object bassed on id', () => {
      const cards = getCardsFromLocalStorage();
      const card = cards[1];

      const resault = getCard(42431843);

      expect(42431843).toEqual(card.id);
      expect(resault).toEqual(card);
    });
  });

  describe('displayBlock()', () => {
    test('changes an element\'s display rule to block', () => {
      element.style.display = 'none';

      displayBlock(element);

      expect(element.style.display).toBe('block');
    });
  });

  describe('textContentWith()', () => {
    test('fill a node element with textContent', () => {
      element.style.display = 'none';

      textContentWith(element, 'Testing');

      expect(element.textContent).toBe('Testing');
    });
  });

  describe('getDate()', () => {
    test('returns today\'s date', () => {
      const today = new Date();
      const dd = String(today.getDate()).padStart(2, '0');
      const mm = String(today.getMonth() + 1).padStart(2, '0');
      const yyyy = today.getFullYear();

      const result = `${yyyy}-${mm}-${dd}`;

      expect(getDate()).toBe(result);
    });
  });
});
